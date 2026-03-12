---
title: "옵시디언 + Claude Code — MCP 없이 바로 연동, Canvas 시각화"
date: 2026-03-12
tags: [ai/claude, productivity/obsidian, tools/canvas]
description: "옵시디언 노트가 마크다운 파일이라 Claude Code가 MCP 없이 직접 읽고 쓸 수 있다. Canvas 기능으로 시각화까지 가능. 3단계 설정법 정리."
source: "https://www.threads.com/@devdesign.kr/post/DVyanGMks7X"
---

# 옵시디언 + Claude Code — MCP 없이 바로 연동, Canvas 시각화

## 왜 옵시디언인가

옵시디언의 모든 노트는 **마크다운 파일**이다.
Claude Code가 직접 읽고 쓸 수 있는 포맷이라, Notion 같은 앱과 달리 MCP 연동이 필요 없다.
그냥 파일이라 바로 접근 → 노트 저장, 검색, 시각화까지 전부 가능.

## Canvas 기능

옵시디언 Canvas는 잘 모르는 사람이 많은데,
**노드 + 화살표**로 구조도를 만드는 기능이다.

활용 예: 유튜브 영상 핵심 내용을 옵시디언에 저장하고 → Canvas로 시각화.
시각화해서 학습하면 효과가 비교도 안 되게 좋다.

## 설정법 (3단계)

1. `settings.json`에 옵시디언 볼트 경로 추가
2. 같은 파일에서 읽기 / 쓰기 / 검색 권한 허용
3. `CLAUDE.md`에 폴더 구조 + 저장 규칙 작성

→ `CLAUDE.md`에 규칙을 적어두면 Claude Code가 매 세션마다 그대로 알아서 정리한다.
