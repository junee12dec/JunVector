---
title: "PR Lens — PR 코드 변경을 아키텍처 다이어그램·데이터 흐름 애니메이션으로 자동 시각화"
date: 2026-09-08
tags: [dev/code-review, ai/agent-skills, dev/tools]
description: "Pull Request의 코드 변경을 분석해 아키텍처 다이어그램과 데이터 흐름 애니메이션을 자동 생성하고 PR 코멘트에 첨부하는 오픈소스. AI 코딩 에이전트용 Skill로도 사용 가능."
source: "https://github.com/coldteadotai/pr-lens"
---

# PR Lens — PR 코드 변경 자동 시각화 도구

GitHub: [coldteadotai/pr-lens](https://github.com/coldteadotai/pr-lens)

> AI가 코드를 빠르게 만드는 시대, "코드를 더 빠르게 읽게 해주는 도구"의 필요성에서 출발.

## 동작 흐름

```
PR 생성 → 코드 변경 분석 → Architecture Diagram 생성 → Data Flow 생성 → PR Comment에 자동 첨부
```

## 핵심 기능

### Architecture Blast Radius
PR로 인해 영향받은 범위를 하나의 다이어그램으로 표시:
- 🟢 추가된 컴포넌트
- 🟡 수정된 컴포넌트
- 🔴 제거된 컴포넌트
- 컴포넌트 간 연결 관계

### Data Flow 애니메이션
데이터가 A → B → C → D 순서로 흐르는 경로를 정적 그림이 아닌 **애니메이션**으로 표현.  
코드를 한 줄씩 읽기 전에 전체 흐름을 먼저 이해 가능.

### Interactive Canvas
큰 PR에서 전체 변경사항을 한꺼번에 보여주고, 추가/제거/변경 영역을 따로 펼쳐볼 수 있음.  
확대·축소하며 대형 아키텍처 탐색 가능.

## 설치 및 사용 방법

### Agent Skill로 사용 (Claude Code, Codex, OpenCode 등)

```bash
npx skills add coldteadotai/pr-lens
```

에이전트에게 요청:
```
방금 만든 변경사항을 PR Lens로 다이어그램화해서 Pull Request에 첨부해줘.
```

에이전트 처리 흐름:
```
Diff 읽기 → Graph 작성 → 구조 검증 → SVG 렌더링 → Pull Request에 첨부
```

### 4가지 사용 방식

| 방식 | 설명 |
|------|------|
| **GitHub App** | PR 생성 시 자동 트리거 |
| **GitHub Actions** | CI 파이프라인 통합 |
| **CLI** | 로컬에서 직접 실행 |
| **Agent Skill** | AI 코딩 에이전트에 통합 |

## 지원 Coding Agent

Codex, Claude Code, Gemini CLI, Cursor, OpenCode, Copilot
