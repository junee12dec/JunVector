---
title: "Hermes Agent — 세션을 넘어 스스로 성장하는 AI 에이전트 활용 가이드"
date: 2026-03-23
tags: [ai/agent, productivity/workflow, dev/cli]
description: "Nous Research의 Hermes Agent는 경험에서 스킬을 만들고 세션을 넘어 기억을 유지하는 AI 에이전트. 프롬프트 작성법, 메모리/스킬 분리, 토큰 절약, 보안 설정까지 공식 문서 기반 실전 팁 정리."
source: "https://www.threads.com/@unclejobs.ai/post/DWOeVD8CdHJ"
---

# Hermes Agent — 세션을 넘어 스스로 성장하는 AI 에이전트 활용 가이드

보통 AI 에이전트는 세션이 끝나면 모든 걸 잊는다. Nous Research의 **Hermes Agent**는 이 문제를 정면으로 해결한다. 경험에서 스킬을 만들고, 쓰면서 개선하고, 세션을 넘어 기억을 유지한다.

- GitHub: https://github.com/NousResearch/hermes-agent
- 문서: https://hermes-agent.nousresearch.com/docs/
- 스타 10,800개 / 컨트리뷰터 142명 / 출시 2주에 PR 216개 머지

---

## 프롬프트는 구체적으로

"코드 고쳐줘" → "api/handlers.py 47번째 줄 TypeError 고쳐줘. process_request()가 parse_body()에서 None을 받고 있어."

- 파일 경로 + 에러 메시지 + 기대 동작을 첫 메시지에 전부 넣기
- 에러 트레이스백은 그대로 붙여넣기 (에이전트가 직접 파싱)
- 단계별로 손잡아주지 말기 — "실패하는 테스트 찾아서 고쳐줘"가 낫다

---

## 반복 설명을 없애는 컨텍스트 파일

| 파일 | 용도 |
|------|------|
| `AGENTS.md` (프로젝트 루트) | 프로젝트별 규칙. 에이전트가 매 세션마다 자동 로드 |
| `~/.hermes/SOUL.md` | 에이전트 성격. 모든 대화에 적용 |

- 모노레포라면 디렉토리별로 `AGENTS.md`를 두면 전부 합쳐짐
- 컨텍스트 파일은 **간결하게** — 길어질수록 토큰 예산 잡아먹음

---

## 메모리 vs 스킬

> "메모리는 **무엇**, 스킬은 **어떻게**"

- **메모리**: 환경, 선호도, 프로젝트 위치 등 사실 저장
  - MEMORY.md ≈ 2,200자 / USER.md ≈ 1,375자 제한
  - 메모리는 **세션 시작 시점의 스냅샷** — 이번 세션에서 저장한 건 다음 세션부터 반영
- **스킬**: 5단계 이상 워크플로우, 재사용 레시피
  - "방금 한 걸 deploy-staging 스킬로 저장해" → 다음엔 `/deploy-staging` 한 방

---

## 토큰 비용 절감

1. **프롬프트 캐시를 깨지 말 것** — 세션 중 모델/시스템 프롬프트 변경 금지
2. `/compress` 적극 활용 — 응답이 느려지면 대화 히스토리 요약
3. `/usage`로 수시 체크
4. 병렬 위임 — `delegate_task`로 서브에이전트에 분산, 요약만 메인으로
5. 단순 작업은 빠른 모델로 전환 (`/model`)

---

## CLI 숨은 기능

| 단축키 / 명령어 | 기능 |
|----------------|------|
| `Alt+Enter` / `Ctrl+J` | 여러 줄 입력 |
| `Ctrl+C` (1회) | 방향 전환 (리디렉션) |
| `Ctrl+C` (2초 내 2회) | 강제 종료 |
| `hermes -c` | 이전 세션 이어서 |
| `hermes -r "이름"` | 제목으로 세션 검색 |
| `Ctrl+V` | 이미지 붙여넣기 (비전 분석) |

---

## 보안

- 위험 명령어 승인은 `session`부터 시작 (→ `always`는 영구 허용이라 신중히)
- 신뢰 안 되는 코드는 컨테이너에서: `.env`에 `TERMINAL_BACKEND=docker`
- 메시징 봇: `GATEWAY_ALLOW_ALL_USERS=true` 절대 금지

---

## Hermes 없이도 쓸 수 있는 원칙

- 프롬프트 캐시를 의식하라
- 메모리와 스킬을 분리하라
- 컨텍스트 파일은 간결하게
- 위험 명령어 승인은 session부터

원문: https://hermes-agent.nousresearch.com/docs/user-guide/tips
