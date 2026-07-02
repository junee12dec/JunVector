---
title: "RMUX — Rust로 만든 AI 에이전트용 터미널 멀티플렉서 (tmux 호환 + 타입 SDK)"
date: 2026-05-23
tags: [ai/agent, dev/cli, dev/tool, dev/rust]
description: "SSH 끊김에도 세션이 유지되는 Rust 터미널 멀티플렉서. tmux 90개 명령 완전 호환 + Playwright 스타일 타입 SDK로 AI 에이전트가 CLI·TUI 앱을 코드로 구동 가능."
source: "https://github.com/Helvesec/rmux"
---

# RMUX — Rust로 만든 AI 에이전트용 터미널 멀티플렉서

**GitHub**: https://github.com/Helvesec/rmux  
**⭐ 749 stars** / Apache 2.0 또는 MIT (선택)  
**최신 버전**: v0.2.0 (2026-05-18)

> "Universal Rust multiplexer for the agentic era — detachable, scriptable, and inspectable."

사람과 AI 에이전트 모두를 위해 설계된 터미널 멀티플렉서.  
SSH가 끊겨도 세션이 살아있고, 에이전트가 **Playwright처럼 터미널을 코드로 구동**할 수 있다.

---

## 핵심 기능

| 기능 | 설명 |
|------|------|
| **tmux 호환 CLI** | 90개 명령 완전 구현 — 기존 tmux 키바인딩 그대로 작동 |
| **타입 SDK** | 터미널 세션을 코드로 스크립팅·오케스트레이션 |
| **영속 세션** | SSH 끊김 후에도 세션 유지, 구조화된 스냅샷 |
| **크로스 플랫폼** | Linux, macOS, Windows 네이티브 지원 |

---

## 구조: 하나의 데몬, 세 개의 인터페이스

```
RMUX 데몬 (단일 wire protocol)
  ├── tmux 호환 CLI      ← 사람이 쓰는 터미널
  ├── 타입 Rust SDK      ← AI 에이전트·스크립트가 코드로 구동
  └── Ratatui 위젯       ← TUI 앱 내장 통합
```

---

## AI 에이전트 관점에서의 핵심

기존 tmux의 `send-keys + capture-pane` 방식은 불안정하다.  
RMUX는 **Playwright가 브라우저를 다루듯** 터미널을 제어하는 타입 SDK를 제공한다:

- 에이전트가 CLI·TUI 앱을 코드로 직접 구동
- 세션 상태를 구조화된 스냅샷으로 검사
- SSH 세션 손실로 인한 에이전트 중단 방지

---

## 설치

```bash
# macOS / Linux
curl -fsSL https://rmux.io/install.sh | sh

# Windows PowerShell
irm https://rmux.io/install.ps1 | iex

# Cargo
cargo install rmux --locked
```

---

## 관련 노트

- [[agent-of-empires-tui-multi-agent-commander]] — tmux 기반 멀티에이전트 관리 도구 (AoE는 tmux 래퍼, RMUX는 tmux 대체)
- [[claude-code-team-agent-kit-tmux-5roles]] — tmux로 5개 역할 에이전트 동시 실행 (RMUX로 대체 가능한 패턴)
- [[hermes-workspace-web-ui-native-workspace]] — Hermes Agent 운영 환경 (RMUX로 세션 관리 강화 가능)
