---
title: "mattpocock/skills — 진짜 엔지니어링을 위한 Claude Code 에이전트 스킬 모음"
date: 2026-04-26
tags: [ai/agent-skill, dev/workflow, productivity/automation]
description: "TypeScript 교육가 Matt Pocock이 실무 .claude 디렉토리에서 꺼낸 Claude Code 스킬 모음. TDD·PRD·git 안전망·Obsidian 연동 등 진짜 현장 엔지니어링 워크플로우."
source: "https://www.threads.com/@lucas_flatwhite/post/DXnbJxwD7bu"
---

# mattpocock/skills — 진짜 엔지니어링을 위한 Claude Code 에이전트 스킬 모음

> "바이브 코딩 말고, 진짜 엔지니어링을 위한 Agent Skills"

**GitHub**: https://github.com/mattpocock/skills  
**작성자**: Matt Pocock (TypeScript 교육으로 유명)

```bash
npx skills@latest add mattpocock/skills/<skill-name>
```

---

## 4가지 영역별 주요 스킬

### 📐 Planning & Design — 코드 짜기 전에 생각 먼저

| 스킬 | 역할 |
|------|------|
| `to-prd` | 대화 맥락 → PRD 작성 → GitHub 이슈로 제출 |
| `to-issues` | 계획/스펙 → 독립적으로 처리 가능한 GitHub 이슈로 분해 |

### 🛠 Development — 코드를 다듬는 작업들

| 스킬 | 역할 |
|------|------|
| `tdd` | Red-Green-Refactor 루프로 TDD 실천 |
| `triage-issue` | 버그 원인 탐색 → TDD 기반 수정 계획을 이슈로 정리 |

```bash
npx skills@latest add mattpocock/skills/tdd
```

### ⚙️ Tooling & Setup — 개발 환경 세팅

| 스킬 | 역할 |
|------|------|
| `setup-pre-commit` | Husky + lint-staged + Prettier + 타입 체크 한 번에 세팅 |
| `git-guardrails-claude-code` | Claude Code에서 위험한 git 명령어 실행 사전 차단 |

### ✍️ Writing & Knowledge — 글쓰기와 지식 관리

| 스킬 | 역할 |
|------|------|
| `write-a-skill` | 새로운 Skill을 올바른 구조로 생성 |
| `ubiquitous-language` | 대화 맥락에서 DDD 스타일 용어집 추출 |
| `obsidian-vault` | Obsidian 노트를 wikilink 기반으로 탐색·관리 |

---

## 핵심 포인트

- 실제 `.claude` 디렉토리에서 추출한 **현장 검증 스킬**
- `git-guardrails` — 에이전트가 실수로 위험한 git 명령 실행하는 것을 방지
- `obsidian-vault` 스킬이 포함되어 있어 Obsidian 볼트 관리에 바로 적용 가능

## 링크

- GitHub: https://github.com/mattpocock/skills
