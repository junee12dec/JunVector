---
title: "mattpocock/skills — 진짜 엔지니어링을 위한 Claude Code 에이전트 스킬 모음"
date: 2026-04-26
tags: [ai/agent-skill, dev/workflow, productivity/automation]
description: "TypeScript 교육가 Matt Pocock이 실무 .claude 디렉토리에서 꺼낸 Claude Code 스킬 모음 22개. TDD·PRD·grill-me·git 안전망·Obsidian 연동 등 절차 있는 엔지니어링 워크플로우."
source: "https://www.threads.com/@lucas_flatwhite/post/DXnbJxwD7bu"
---

# mattpocock/skills — 진짜 엔지니어링을 위한 Claude Code 에이전트 스킬 모음

> "Real engineering — not vibe coding"

**GitHub**: https://github.com/mattpocock/skills  
**작성자**: Matt Pocock (TypeScript 교육으로 유명, 전 Vercel 개발자)  
**GitHub Stars**: ⭐ 179k (최초 27,702 → 급속 성장)

```bash
npx skills@latest add mattpocock/skills
```

---

## 바로 써볼 스킬 TOP 7 (추천)

| 스킬 | 역할 |
|------|------|
| `grill-with-docs` | 계획을 문서 기반으로 끝까지 인터뷰 |
| `code-review` | diff 단위 코드 리뷰 (문법이 아닌 로직 검토) |
| `diagnosing-bugs` | 버그를 체계적 루프로 진단 |
| `research` | 1차 소스(공식 문서·원본) 기반 조사 |
| `grill-me` | 계획이 흐릿해질 때까지 추궁 |
| `handoff` | 전체 세션을 하나로 압축 |
| `writing-great-skills` | 재현 가능한 스킬 작성법 |

---

## 전체 스킬 26개 (4개 카테고리)

### 📐 Planning — 코드 짜기 전에 생각 먼저

| 스킬 | 역할 |
|------|------|
| `to-prd` | 대화 맥락 → PRD 작성 → GitHub 이슈로 제출 |
| `to-issues` | 계획/스펙 → 독립 처리 가능한 GitHub 이슈로 분해 |
| `grill-me` | **본인 계획을 LLM이 끝까지 추궁** — 칭찬만 받던 패턴 파괴 |
| `design-an-interface` | 인터페이스 설계 |
| `request-refactor-plan` | 리팩토링 계획 요청 |

### 🛠 Development — 코드를 다듬는 작업들

| 스킬 | 역할 |
|------|------|
| `tdd` | Red-Green-Refactor 루프로 TDD 실천 |
| `triage-issue` | 버그 원인 탐색 → TDD 기반 수정 계획을 이슈로 정리 |
| `improve-codebase-architecture` | 코드베이스 아키텍처 개선 |

### ⚙️ Tooling — 개발 환경 세팅

| 스킬 | 역할 |
|------|------|
| `setup-pre-commit` | Husky + lint-staged + Prettier + 타입 체크 한 번에 세팅 |
| `git-guardrails-claude-code` | Claude Code에서 위험한 git 명령어 실행 사전 차단 |

### ✍️ Writing & Knowledge — 글쓰기와 지식 관리

| 스킬 | 역할 |
|------|------|
| `write-a-skill` | 새로운 Skill을 올바른 구조로 생성 |
| `edit-article` | 아티클 편집 |
| `ubiquitous-language` | 대화 맥락에서 DDD 스타일 용어집 추출 |
| `obsidian-vault` | Obsidian 노트를 wikilink 기반으로 탐색·관리 |

---

## 백미: `grill-me`

> "본인이 짠 계획을 LLM한테 끝까지 추궁당하는 스킬"

AI가 칭찬과 동의만 돌려주던 패턴을 완전히 깨버림.  
계획의 허점을 LLM이 적극적으로 파고들어 더 단단한 설계로 만든다.

---

## 핵심 인사이트

> "어떤 모델을 쓰냐보다 **어떤 절차로 부르냐**가 더 중요해진 느낌."  
> "본인 워크플로우를 스킬로 묶어 공개하는 순간 그게 곧 **개인 브랜드**가 되는 시대."

- 실제 `.claude` 디렉토리에서 추출한 현장 검증 스킬
- `git-guardrails` — 에이전트가 실수로 위험한 git 명령 실행하는 것을 방지
- `obsidian-vault` 스킬 — Obsidian 볼트 관리에 바로 적용 가능

## 링크

- GitHub: https://github.com/mattpocock/skills
- 전체 리뷰: https://jkf87.github.io/mattpocock-skills-real-engineers-claude-2026-04-27
