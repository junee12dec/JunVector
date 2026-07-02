---
title: "Claude로 코드베이스 아키텍처를 HTML+JSON으로 매핑하는 프롬프트 — 에이전트 핸드오프용"
date: 2026-05-15
tags: [ai/claude, productivity/prompt, dev/architecture, agent/workflow]
description: "코드베이스를 Claude에게 한 번 넣으면 사람이 읽는 인터랙티브 HTML 다이어그램과 다음 에이전트가 읽는 구조화된 JSON을 동시에 생성하는 3파트 프롬프트. 세션 간 컨텍스트 손실을 없애는 고효율 패턴."
source: "https://www.threads.com/@artificiallyinfluenced/post/DYXjZBpjFoh"
---

# Claude로 코드베이스 아키텍처를 HTML+JSON으로 매핑하는 프롬프트

> "코드베이스가 스스로를 설명하게 만들어라."

Claude에게 코드베이스를 한 번 분석시키면 두 가지 산출물이 나온다:
- **HTML** → 사람이 보는 인터랙티브 아키텍처 다이어그램
- **JSON** → 다음 AI 에이전트가 읽는 구조화된 코드맵

세션 간 컨텍스트 손실 없이 에이전트가 새 기능 개발을 즉시 시작할 수 있다.

---

## 왜 이 패턴이 강력한가

1. **문서 작성·다이어그램 그리기에 드는 수 시간을 제거**
2. **세션 간 컨텍스트 손실 없음** — 프로젝트를 한 번 넣으면 갱신할 때마다 업데이트
3. **에이전트 핸드오프 제로** — JSON이 다음 에이전트의 온보딩 문서 역할

---

## 프롬프트 (3파트, 그대로 사용)

### Part 1

```
You are an expert software architect and senior staff engineer. I want you to analyze my entire codebase and produce TWO outputs in one response: 1. A beautiful, interactive single-file HTML architecture map (with Tailwind or similar modern styling). Make it visual, clickable, with hover effects.
```

### Part 2

```
Show main modules/packages, key files, data flows, API endpoints, databases, external services. Use colors, icons, and clear hierarchy. Add zoom/pan capability if possible. 2. A clean, structured JSON file that an AI coding agent can consume. Include: components, dependencies, data flows, constraints, entry points, tech stack, architecture decisions.
```

### Part 3

```
Project context: Tech stack: [e.g. Next.js 15 + TypeScript + Supabase + Tailwind + Vercel] / Main goal: [e.g. SaaS product for X] / Current size: [e.g. ~18k LOC across 240 files]. Rules: be extremely accurate, highlight architectural issues, make HTML self-contained, JSON perfectly structured for agent consumption. First ask me for the codebase, then generate both outputs.
```

---

## 사용법

1. `[e.g. ...]` 부분을 실제 프로젝트 정보로 채운다
2. 3파트를 순서대로 입력
3. Claude가 파일 트리를 요청하면 붙여넣는다
4. HTML + JSON 두 파일을 저장

**최적 모델**: Opus 4.7

---

## HTML 출력 포함 요소

- 메인 모듈·패키지 / 핵심 파일
- 데이터 흐름 / API 엔드포인트 / 데이터베이스 / 외부 서비스
- 클릭·호버 효과 / 줌·팬 기능
- 색상·아이콘·계층 구조

## JSON 출력 포함 요소

- `components` / `dependencies` / `data_flows`
- `constraints` / `entry_points` / `tech_stack` / `architecture_decisions`

---

## 관련 노트

- [[production-ai-agent-architecture-4layers]] — 프로덕션 에이전트 아키텍처 4계층 구조
- [[gitdiagram-github-architecture-visualizer]] — GitHub 레포 아키텍처 다이어그램 자동 변환 도구
