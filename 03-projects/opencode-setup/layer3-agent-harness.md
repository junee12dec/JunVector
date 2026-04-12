---
title: "Layer 3 — Agent Harness"
date: 2026-04-12
tags: [project/opencode, layer3, agent-harness, ecc, agents, skills, hooks, mcp]
description: "OpenCode 6개 구성요소와 Git 연동 3경로를 다루는 에이전트 하네스 레이어. ECC 패턴을 사내 Spring Boot + Vue.js 스택에 적용."
type: concept
status: active
updated: 2026-04-12
parent: "[[opencode-setup-MOC]]"
---

# Layer 3 — Agent harness

## 역할

OpenCode 위에서 실제 에이전트를 실행하는 계층. ECC (Everything Claude Code) 패턴을 사내 Spring Boot + Vue.js 스택에 맞춰 구현. "cross-harness parity" 덕분에 추후 Claude Code 로 전환해도 `.claude/` 매핑만 바꾸면 재사용.

## 6개 구성요소

### 설정 2종

- `CLAUDE.md` — 매 세션 자동 로드. Spring Boot / Vue.js 컨벤션, 빌드 명령, 금지사항. 100줄 이내 유지 (길면 attention 희석).
- `opencode.json` — 런타임 설정. 모델 (claude-sonnet-4-6), 에이전트 / 스킬 / MCP 경로, instructions 배열.

### 지능 계층 3종

**Agents (5개)** — `.opencode/agent/*.md`

- planner — 기획 / 설계 분해
- spring-reviewer — 백엔드 리뷰 (Spring Boot 패턴)
- vue-reviewer — 프론트 리뷰 (Vue 3 + Composition API)
- tdd-runner — 테스트 먼저 작성 / 실행
- security-reviewer — 취약점 / 하드코딩된 secret 스캔

**Skills (7개)** — `.opencode/skills/*/SKILL.md`

- spring-boot-patterns — DI / @Transactional / JPA best practices
- vue3-patterns — Composition API / Pinia / 반응성
- tdd-workflow — Red-Green-Refactor 사이클
- security-review — OWASP Top 10 기반 체크리스트
- handover-wiki — 인수인계 문서 자동 생성
- excel-automation — pandas / openpyxl 기반 반복 작업
- knowledge-ingest — raw → wiki 컴파일 (Layer 2 ingest 오퍼레이션)

**Commands** — `.opencode/command/*.md`

- `/review-pr` — 사내 GitLab MR 리뷰
- `/handover` — 인수인계 문서 생성
- `/excel-automate` — 반복 Excel 작업
- `/wiki ingest` — raw → wiki 컴파일
- `/wiki query` — brain 검색 + 답변 파일링
- `/wiki lint` — 헬스체크

### 자동화 계층 2종

**Hooks** — `.opencode/plugins/*.js`

- `pre-edit` — lint (ESLint / Checkstyle)
- `post-edit` — typecheck (tsc / javac)
- `session-start` — `wiki/index.md` 자동 로드

**MCP servers** (전부 stdio 타입 로컬 프로세스)

- 사내 GitLab MCP — PAT 인증, PR / 이슈 / diff 조회
- PostgreSQL MCP — 로컬 / 사내 DB 조회
- filesystem MCP — raw/ 폴더 접근
- qmd MCP — 위키 하이브리드 검색

**사내망 제약**: remote MCP 미사용. GitHub MCP 는 ~20k 토큰 소비하므로 review-pr agent 에만 선택적 활성화.

## 파일 배치

```
project-root/
├─ CLAUDE.md                    스키마 (모든 세션 로드)
├─ opencode.json                루트 설정
├─ .opencode/
│   ├─ agent/                   5개 agent .md
│   ├─ command/                 커스텀 슬래시 커맨드
│   ├─ plugin/                  hook JS 스크립트
│   └─ skills/                  7개 SKILL.md
├─ raw/                         Layer 2 불변 소스
├─ wiki/                        Layer 2 LLM 관리 위키
│   ├─ index.md
│   └─ log.md
└─ src/                         실제 Spring Boot / Vue 코드
```

## Git 저장소 연동 3가지 경로

**A. 로컬 clone + 직접 접근 (메인)**

사내 GitLab / Gitea 에서 `git clone` 후 프로젝트 루트에 CLAUDE.md + opencode.json 배치. OpenCode 가 Git 디렉토리 상위까지 탐색하므로 `cd project && opencode` 만 하면 된다.

**B. 코드베이스 → wiki ingest**

Git 저장소 자체를 raw source 로 취급. OpenCode 가 코드를 읽고 아키텍처 문서 / API 계약서 / DB 스키마 페이지를 자동 생성. 커밋마다 ingest 돌리면 위키가 자동 동기화.

**C. Git MCP (선택적)**

사내 GitLab API 에 PAT 토큰으로 연결. PR 목록 / diff / 이슈 조회. 토큰 소비 크므로 리뷰 에이전트에만 활성화.

**권장 조합**: A + B 병행, C 는 PR 리뷰 시 선택적.

## 관련

- [[layer2-knowledge-brain]] 의 wiki/ 를 읽고 쓴다
- [[layer4-outputs]] 를 생성한다
