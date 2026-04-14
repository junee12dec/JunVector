---
title: "para-knowledge-base — PARA + Obsidian 최적화 Claude Code 지식 컴파일러"
date: 2026-04-14
tags: [ai/claude, productivity/obsidian, dev/tools]
description: "Karpathy의 LLM Knowledge Base 패턴을 PARA + Obsidian에 맞게 최적화한 Claude Code 플러그인. 매 세션마다 vault를 재스캔하는 대신 지식을 한 번 컴파일하고 계층형 인덱스로 유지관리한다."
source: "https://www.threads.com/@vibevault.nesto/post/DXF8VetE_rm"
---

# para-knowledge-base — PARA + Obsidian 최적화 Claude Code 지식 컴파일러

**GitHub**: http://github.com/ernestolee13/para-knowledge-base

---

## 해결하는 문제

Claude Code는 매 세션마다 vault를 처음부터 스캔한다.

> "분산 시스템에 대해 뭐 알고 있어?" → 30개 파일 읽기 → 15,000 토큰 소비  
> 다음 세션에서 같은 질문 → 또 똑같이 반복

**해결책**: 지식을 매번 검색하지 않고, **한 번 컴파일하고 유지관리**한다.

`/kb-ingest` 한 번 실행 → 노트 분류 + 연결 + 인덱싱 완료  
다음 세션: `_index.md` 50토큰만 읽고 필요한 파일 2개만 찾아감

---

## Karpathy 원본과의 차이점

| 항목 | Karpathy 원본 | para-knowledge-base |
|------|--------------|---------------------|
| 인덱스 구조 | 단일 큰 파일 | 최상위 요약 + PARA 카테고리별 미니 인덱스 |
| vault 규모 확장성 | 수백 개 넘으면 인덱스 읽기만으로 토큰 낭비 | 필요한 부분만 읽는 구조 — vault가 커질수록 차이 벌어짐 |
| 사람 가독성 | LLM용 위키 중심 | Obsidian에서 열어도 체계적인 vault 유지 |

---

## 탐색 4경로

질문 성격에 따라 아래 4가지 경로를 선택:

1. **폴더** — PARA 구조 기반 탐색
2. **태그** — 태그 기반 필터링
3. **위키링크** — 백링크 그래프 탐색
4. **인덱스** — 컴파일된 인덱스 직접 조회

기존에 태그나 백링크를 쓰고 있었다면 그 습관이 그대로 강화되는 구조.

---

## 스킬 5개

| 스킬 | 역할 |
|------|------|
| `/kb-init` | 초기 셋업 |
| `/kb-ingest` | 수집 + 분류 + 연결 (핵심) |
| `/kb-query` | 탐색 + 축적 |
| `/kb-lint` | 건강검사 |
| `/kb-index` | 인덱스 재구축 |

---

## 설치 요건

- Obsidian CLI 1.12+ 있으면 검색/백링크 정확도 향상
- 없어도 grep + glob으로 폴백 → 설치 부담 없음

---

## 함께 쓰면 좋은 것

- **kepano의 obsidian-skills** — vault 관리(para-knowledge-base) + 콘텐츠 작성(obsidian-skills) 조합으로 두 역할 모두 커버
