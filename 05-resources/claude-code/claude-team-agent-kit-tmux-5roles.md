---
title: "Claude Code 팀 에이전트 키트 — tmux로 기획자·FE·BE·QA·리더 5개 동시 실행"
date: 2026-04-29
tags: [ai/claude, agent/multi-agent, dev/tool]
description: "터미널 한 번으로 업무 역할별 Claude 5개를 한 화면에서 동시에 소환하는 팀 에이전트 키트. macOS·Linux·Windows 네이티브 모두 지원하며 mintorain-tmux-ocastra로 공개."
source: "https://www.threads.com/@mintorain/post/DXuHyq5D9Rn"
---

# Claude Code 팀 에이전트 키트 — tmux로 5개 동시 실행

터미널 한 번 띄우면 역할이 분리된 Claude 5개가 자동 소환되는 팀 에이전트 세팅.

---

## 개요

| 항목 | 내용 |
|------|------|
| **도구명** | mintorain-tmux-ocastra |
| **방식** | tmux로 터미널 분할 → 역할별 Claude Code 동시 실행 |
| **에이전트 수** | 5개 (기획자 · 프론트엔드 · 백엔드 · QA · 리더) |
| **지원 OS** | macOS / Linux / Windows 네이티브 |
| **공개 URL** | https://mintorain.github.io/mintorain-tmux-ocastra/ |

---

## 5개 에이전트 역할

- **기획자** — 요구사항 정리, 기능 명세
- **프론트엔드** — UI/UX 구현
- **백엔드** — API, 서버 로직
- **QA** — 테스트, 버그 검증
- **리더** — 전체 조율, 의사결정

---

## 핵심 특징

- 터미널 한 번으로 전체 팀 자동 소환
- 한 화면에서 5개 Claude 동시 모니터링
- 역할별 업무 분장으로 병렬 작업 가능
- 크로스 플랫폼 — OS 무관하게 동일하게 동작
