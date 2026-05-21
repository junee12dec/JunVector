---
title: "Claude Code 4대 플러그인 완전 가이드 — Superpowers·G-stack·OMC·GSD 조합 전략"
date: 2026-05-09
tags: [ai/claude, dev/tool, productivity/workflow]
description: "바이브코딩 필수 4대 플러그인 상세 가이드. Superpowers(실행+TDD)·G-stack(의사결정)·oh-my-claudecode(병렬 에이전트)·GSD(컨텍스트 안정화)의 역할과 추천 스킬, 3층 구조 조합 전략 수록."
source: "https://www.threads.com/@elephant_coding/post/DYRyBRdCWwf"
---

# Claude Code 4대 플러그인 완전 가이드

플러그인 = Skills + MCP + Hooks + 슬래시 명령어를 묶은 패키지.  
필요한 도구를 한 박스에 — 플러그인 하나 깔면 안에 든 거 다 적용.

**설치 방법:**
```
/plugin marketplace add <owner>/<repo>
/plugin install <이름>@<마켓>
```

---

## 1. Superpowers (42k+ stars)
**작자**: Jesse Vincent / 클로드 공식 플러그인

```
/plugin install superpowers@claude-plugins-official
```

**역할**: 실행 + TDD  
**추천 스킬:**
- `brainstorming` — Socratic 질문으로 요구사항 끝까지 캐묻기
- `writing-plans` + `executing-plans` — 계획 작성 → subagent 병렬 실행 → 자동 commit
- `TDD` — 테스트 먼저, 코드 나중. red-green-refactor 강제

초보자면 이거 하나만으로도 충분.

---

## 2. G-stack (95k+ stars)
**작자**: Garry Tan (YC 대표)

**역할**: 의사결정 (CEO/QA 관점) / 9가지 인지 모드 / "코더"가 아니라 "팀"으로 운영  
**추천 스킬:**
- `/office-hours` — 가정 명시화. "이거 가정해도 되나요?" 자동 질문 → 추측 헛소리 차단
- `/plan-ceo-review` — 제품 관점 검토 (구현 X, 가치 검증). "이 기능 진짜 필요한가?"
- `/browse` — Chromium 기반 브라우저 자동화. Claude for Chrome MCP보다 20배 빠름

---

## 3. oh-my-claudecode / OMC (33k+ stars) 🇰🇷
**작자**: @bellman.pub 허예찬

**역할**: 다중 agent 병렬 오케스트레이션 / ralph(자동 반복 작업) 기능 최적화  
**추천 스킬:**
- `hud` — 실시간 상태 UI (스크린샷 필수)
- `ralplan` — 아이디어 한 줄 → 반복적 Plan 생성·검토
- `ultrawork` — 병렬 실행 모드. 여러 작업 동시 처리

---

## 4. GSD — Get Shit Done (62k+ stars)
**작자**: Lex Christopherson

**역할**: 컨텍스트 안정화 + 단계별 실행 / context rot 방지  
**추천 스킬:**
- `/gsd:new-project` — 새 프로젝트: 인터뷰 → PRD → 단계별 계획 자동 생성
- `/gsd:quick` — 빠른 작업용 (다크모드 추가 등). 풀 워크플로우 생략, atomic commit 보장
- `/gsd:resume-work` — 세션 끊겨도 hook이 상태 저장 → 컨텍스트 끊김 없이 자동 재개

---

## 3층 조합 전략 (충돌 방지)

| 층 | 플러그인 | 역할 |
|----|----------|------|
| 🧠 의사결정층 | **G-stack** | "뭘 만들지" 정하기 |
| 🦸 실행층 | **Superpowers** | "어떻게 만들지" TDD로 실행 |
| 🎯 안정화층 | **GSD** | "긴 작업 끝까지" 컨텍스트 유지 |
| ➕ 선택 | **oh-my-claudecode** | 대규모 작업 시 병렬 agent 추가 |

> 다 깔지 말고 일단 하나만 깔아봐라. 필요한 건 개별 스킬로 흡수(매우 중요).  
> **처음이면 Superpowers부터** — 만족도 최고.
