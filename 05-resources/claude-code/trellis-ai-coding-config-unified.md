---
title: "Trellis — AI 코딩 툴 설정 파일을 16개 플랫폼에 자동 통합"
date: 2026-06-17
tags: [dev/workflow, ai/coding-agent, productivity/automation]
description: ".cursorrules·CLAUDE.md 등 파편화된 설정 파일을 하나로 통합. 한 번 규칙을 작성하면 Cursor·Claude Code 등 16개 플랫폼에 자동 주입하고 프로젝트 히스토리도 기억."
source: "https://github.com/mindfold-ai/Trellis"
---

# Trellis — AI 코딩 툴 설정 파일을 16개 플랫폼에 자동 통합

## 한 줄 요약

AI 코딩 툴마다 제각각이던 설정 파일(.cursorrules, CLAUDE.md 등)을 하나로 통합. 16개 플랫폼에 컨텍스트를 자동 주입하고 프로젝트 히스토리를 기억한다.

---

## 해결하는 문제

> "AI는 코드를 빠르게 짜지만, 매 세션마다 처음부터 다시 시작한다."

- 플랫폼별로 설정 파일 형식이 다름 (`.cursorrules`, `CLAUDE.md`, 등)
- 팀 표준·프로젝트 규칙을 매번 다시 설명해야 함
- 이전 세션의 결정 사항이 다음 세션에 이어지지 않음

---

## 지원 플랫폼 (16개)

Claude Code, Cursor, OpenCode, Codex 외 12개 AI 코딩 플랫폼.

---

## 작동 원리 — 4단계 루프

| 단계 | 내용 |
|------|------|
| **계획** | 요구사항을 단계별로 검토, PRD 작성 |
| **구현** | 컨텍스트 자동 주입 후 코드 작성 |
| **검증** | 명세서 검증·린트·타입체크·테스트 실행 |
| **완료** | 학습 내용을 스펙에 반영 → 다음 세션 개선 |

---

## 주요 기능

- **자동 주입**: 규칙을 한 번 작성하면 모든 플랫폼에 자동 반영
- **프로젝트 메모리**: 이전 작업 기록·결정 사항 보존
- **팀 공유**: 팀 표준을 일관되게 유지
- **작업 중심 워크플로우**: 태스크 단위로 진행 상황 추적

---

## 설치 및 사용

```bash
npm install -g @mindfoldhq/trellis@latest
trellis init -u your-name
```

1. 자연언어로 요청
2. AI와 협력하며 구현
3. 자동 검증 (린트·테스트)
4. `/trellis:finish-work`로 종료 → 학습 내용 저장

---

## 링크

- GitHub: https://github.com/mindfold-ai/Trellis
