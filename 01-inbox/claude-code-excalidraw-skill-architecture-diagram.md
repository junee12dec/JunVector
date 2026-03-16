---
title: "Claude Code + Excalidraw 스킬 — 아키텍처 다이어그램 자동 생성"
date: 2026-03-16
tags: [ai/claude-code, tool/skill, dev/documentation, tool/excalidraw]
description: "Claude Code에 Excalidraw 스킬을 추가하면 코드 분석부터 아키텍처 다이어그램 생성까지 한 번에 자동화할 수 있다. 수작업 다이어그램 작업을 대체하는 실용 팁."
source: "https://www.threads.com/@aisolutiondev/post/DV7ga5Rief5"
---

# Claude Code + Excalidraw 스킬 — 아키텍처 다이어그램 자동 생성

## 핵심 아이디어

> "다이어그램 수작업으로 그리는 시대는 끝났다."

Claude Code에 **Excalidraw 스킬**을 달면:

1. "아키텍처 그려줘" 한마디 입력
2. Claude Code가 코드를 직접 분석
3. Excalidraw 다이어그램 자동 생성

→ 코드 분석 → 다이어그램 생성까지 **전 과정을 에이전트가 처리**.

## 설치 방법

### 방법 1 — 공식 MCP 서버

```bash
claude mcp add excalidraw \
  npx @anthropic/excalidraw-mcp
```

### 방법 2 — SKILL 방식 (coleam00)

```bash
git clone github.com/coleam00/excalidraw-diagram-skill
cp -r skill/ .claude/skills/
```

→ 설치 후 "아키텍처 그려줘" 한마디면 끝.

## 활용 포인트

- 코드 문서화 시간을 대폭 단축
- 레거시 코드베이스 파악에 특히 유용
- 아키텍처 리뷰 준비, 온보딩 자료 제작 등에 바로 적용 가능
