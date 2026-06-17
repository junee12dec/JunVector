---
title: "Agent of Empires — 다중 코딩 에이전트를 한 TUI 화면에서 지휘하는 도구 (1.6k⭐)"
date: 2026-05-23
tags: [ai/agent, dev/tool, dev/cli, productivity/automation]
description: "tmux 위에 얹은 TUI 껍데기로 여러 Claude Code·Codex·Gemini 에이전트를 한 화면에서 상태 확인·격리 실행. git worktree로 에이전트끼리 파일 충돌을 원천 차단."
source: "https://github.com/njbrake/agent-of-empires"
---

# Agent of Empires — 다중 코딩 에이전트를 한 TUI 화면에서 지휘하는 도구

**GitHub**: https://github.com/njbrake/agent-of-empires  
**⭐ ~1,600 stars** / MIT 라이선스  
**개발**: Nate Brake  
**기술 스택**: Rust

> "에이전트 군대를 한 화면에서 지휘한다."

---

## 문제: 에이전트는 늘었는데 터미널은 난장판

CLI 에이전트가 실용화되면서 Claude Code·Codex·Gemini를 작업별로 따로 띄우는 게 일상이 됐다.  
터미널 탭이 10개를 넘어가면 **어느 에이전트가 멈췄는지 창을 일일이 들춰봐야** 한다.

---

## 해결 방식: tmux 위에 TUI 한 겹

AoE는 tmux를 감싸는 껍데기다. 에이전트 세션 하나가 tmux 세션 하나.

**핵심 성질**: AoE를 닫아도 에이전트는 죽지 않는다.  
창을 닫든 SSH가 끊기든 터미널이 뻗든, 세션은 백그라운드에서 계속 돈다.  
`aoe`를 다시 열면 그 자리에 그대로 있다. 세션은 직접 지울 때만 사라진다.

---

## 핵심 기능

### 상태 대시보드
도는 중 / 입력 대기 / 유휴 / 멈춤 — 색상으로 한눈에 확인.  
TUI 안에서 에이전트가 수정한 코드의 **diff도 바로** 펼쳐볼 수 있다.

### 에이전트 격리 (핵심)
세션 생성 시 **git worktree를 자동으로** 깐다.  
에이전트마다 자기 브랜치·자기 폴더 → 서로 파일을 건드릴 수 없다.  
더 단단히 가두려면 **Docker 샌드박스**로 컨테이너 안에 격리.

### 웹 대시보드 (실험 단계)
폰·태블릿 브라우저에서 세션 확인 가능.  
서버에 에이전트를 띄워두고 밖에서 들여다보는 용도.

---

## 설치

```bash
brew install aoe
```

---

## 대안과의 비교

| 도구 | 접근 방식 |
|------|-----------|
| **Agent of Empires** | 에이전트를 터미널에 두고, 관리 TUI만 추가 |
| **Zed Terminal Threads** | 에이전트를 에디터 사이드바 안으로 흡수 |

- 코드를 자주 들여다보는 작업 → 에디터로 모으는 쪽 (Zed)
- 에이전트를 서버에 오래 굴리는 작업 → 터미널에 남는 쪽 (AoE)

---

## 관련 노트

- [[claude-code-team-automation-wikidocs-guide]] — Claude Code 팀 에이전트 운영 실전 가이드
- [[claude-code-team-agent-kit-tmux-5roles]] — tmux로 5개 역할 에이전트 동시 실행 (유사한 tmux 기반 멀티에이전트 패턴)
- [[agency-agents-147-ai-agents-company-structure]] — 에이전트 역할 분담 전략 (AoE로 실행할 수 있는 에이전트 팀)
- [[production-ai-agent-architecture-4layers]] — 프로덕션 에이전트 아키텍처 설계 원칙
