---
title: "Layer 2 — Knowledge Brain"
date: 2026-04-12
tags: [project/opencode, layer2, knowledge-brain, wiki, ingest, query, lint]
description: "Wiki 구조 및 ingest / query / lint 3대 오퍼레이션을 포함한 지식 브레인 레이어. GBrain brain-agent loop + Karpathy 3계층 패턴 결합."
type: concept
status: active
updated: 2026-04-12
parent: "[[opencode-setup-MOC]]"
---

# Layer 2 — Knowledge brain

## 역할

raw/ 의 원본을 LLM 이 소비 가능한 구조화된 지식으로 컴파일하는 중간 계층. GBrain 의 brain-agent loop 와 Karpathy LLM Wiki 의 3계층 패턴을 결합.

## 스토리지 구조

### raw/ (불변)

[[layer1-raw-sources]] 참조. LLM 은 read-only.

### wiki/ (LLM 소유)

마크다운 페이지 집합. LLM 이 전적으로 생성 / 수정. `[[wikilinks]]` 로 상호참조 관리.

### 메타 + 검색

- `index.md` — 전체 페이지 카탈로그, 매 ingest 에서 업데이트
- `log.md` — append-only 이력 (`## [YYYY-MM-DD] ingest | 제목` 포맷)
- PGLite — Postgres 17.5 WASM 임베디드, pgvector 포함, 서버 불필요
- qmd — BM25 + vector 하이브리드 on-device 검색

## L1 / L2 캐시 아키텍처

- L1: CLAUDE.md 상시 로드 — 절대 틀리면 안 되는 규칙 / 자격증명 (gitignore)
- L2: wiki/ 쿼리 시 로드 — 프로젝트 히스토리 / 개념 페이지

**라우팅 규칙**: LLM 이 모르면 위험하거나 난처한 지식 → L1. 모르면 단순히 불편한 지식 → L2. 자격증명은 반드시 L1 (git-tracked wiki 는 위험).

## 페이지 타입 4종

- Entity — 사람 / 시스템 / 팀
- Concept — 도메인 개념 / API / 아키텍처 패턴
- Source — 회의록 / PR / 아티클 요약
- Query — 탐색 답변 아카이브

**공통 프론트매터**: `type, status, created, updated, sources, confidence`

## 3대 오퍼레이션

### Ingest (7단계)

새 소스가 raw/ 에 들어오면 실행.

1. 소스 투입 → raw/ (Web Clipper / Slack export / git log)
2. 타입 라우팅 + 전처리 (PDF → md, Excel → CSV, 이미지 → vision)
3. 엔티티 + 클레임 추출 (사람 / 시스템 / 개념 / 날짜)
4. 기존 페이지 매칭 (brain search) → UPDATE vs CREATE 분기
5. 페이지 업서트 (단일 소스가 평균 10-15 페이지 touch)
6. [[wikilinks]] 삽입 + pgvector 색인
7. index + log 기록 → git commit (감사 추적 + 롤백 가능)

### Query (6단계)

사용자 질문 응답 + 복리 루프.

1. 질문 분류 (factual / synthesis / exploratory)
2. index.md 먼저 읽기 → 후보 페이지 선별
3. qmd 하이브리드 검색 (BM25 + pgvector → LLM 재순위)
4. 백링크 그래프 2-hop 확장 (관련 엔티티 / 개념 수집)
5. 답변 합성 + 출처 인용 (페이지 간 모순 플래그)
6. 답변을 `wiki/queries/` 에 파일링 — 가치 있으면 concept 페이지로 승급

**RAG 와의 차이**: 2단계 (index 먼저) 와 6단계 (답변 파일링) 가 핵심. 카탈로그를 먼저 보면 LLM 이 의도적으로 탐색하고, 답변이 쌓이면서 같은 질문을 두 번 하지 않는다.

### Lint (6개 카테고리)

주 1회 cron + 수동 `/wiki lint`. 산출물: `outputs/reports/YYYY-MM-DD.md`.

| # | 카테고리 | 탐지 | 처리 | Severity |
|---|---|---|---|---|
| 1 | 고아 페이지 | inbound link 0 | 삭제 or 허브 링크 | LOW |
| 2 | stale 콘텐츠 | updated 90일 + high conf | 재검증 요청 | MED |
| 3 | 모순 / 중복 | 페이지 간 claim 충돌 | 플래그 + 최신 우선 | HIGH |
| 4 | 깨진 링크 / 스키마 | `[[없는 페이지]]` / frontmatter 누락 | `--fix` 자동 복구 | HIGH |
| 5 | 커버리지 갭 | 자주 언급 but 페이지 없음 | 신규 페이지 제안 | LOW |
| 6 | 자격증명 유출 | API key / PAT / 내부 IP 패턴 | 즉시 alert + redact | CRITICAL |

**자동 수정은 카테고리 4 만**. 나머지는 `--dry-run` 리포트 후 인간 리뷰 강제. 자동 수정이 과하면 정상 페이지를 망가뜨린다.

## Brain-agent loop

`신호 도착 → 엔티티 감지 → READ (brain 조회) → 응답 → WRITE (새 정보 컴파일) → 다음 세션 더 똑똑`

이 루프가 GBrain 의 핵심. Ingest 는 이벤트 기반, Query 는 요청 기반, Lint 는 시간 기반으로 운영 리듬이 다르다.

## 사내 환경 특이사항

- PGLite 는 WASM 로 동작 → Docker / 서버 프로세스 불필요 → 컨테이너화 불가 제약 통과
- qmd 는 on-device 검색 → 외부 API 호출 없음 → 내부망 정책 통과
- JunVector 와 병행 운영 가능 — 심볼릭 링크로 연결하면 Obsidian graph view 에서 통합 시각화

## 관련

- 생성된 페이지는 [[layer3-agent-harness]] 의 skills / agents 가 소비
- Ingest 결과가 [[layer4-outputs]] 의 품질을 결정
