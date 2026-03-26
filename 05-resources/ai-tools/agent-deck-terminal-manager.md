---
title: "agent-deck — AI 에이전트 세션 통합 터미널 관리 도구"
date: 2026-03-25
tags: [ai/tools, dev/terminal, productivity/agent-management]
description: "여러 AI 코딩 에이전트(Claude Code, Gemini 등)를 하나의 터미널에서 통합 관리하는 오픈소스 CLI 도구. 에이전트 상태 실시간 모니터링, MCP 연결, 비용 추적 등 지원."
source: "https://github.com/asheshgoplani/agent-deck"
---

# agent-deck — AI 에이전트 세션 통합 터미널 관리 도구

> AI 에이전트 여러 개 돌리면 터미널이 난장판 → agent-deck으로 해결

## 개요

**agent-deck**은 여러 AI 코딩 에이전트를 하나의 터미널에서 통합 관리하는 "미션 컨트롤" 도구다.
Claude Code, Gemini, OpenCode, Codex 등 다양한 AI 툴을 단일 인터페이스에서 운용할 수 있다.

## 설치

```bash
# npm (글로벌)
npm install -g agent-deck

# 또는 공식 설치 스크립트
curl -fsSL https://raw.githubusercontent.com/asheshgoplani/agent-deck/main/install.sh | bash
```

## 주요 기능

### 세션 관리
- **포크(Fork)**: 대화를 여러 방향으로 분기해 다양한 접근법 탐색, 컨텍스트 보존
- **실시간 상태 감지**: 실행 중 / 입력 대기 / 유휴 / 오류 상태를 한눈에 확인
- **검색·필터**: 활성 세션 전체를 검색·필터링
- **그룹 관리**: 세션을 그룹으로 묶어 워크플로우 정리

### MCP 통합
- 설정 파일 수정 없이 MCP 서버를 붙이거나 해제
- 여러 세션에 걸친 MCP 메모리 사용량 **85~90% 절감** (소켓 풀링)
- MCP 수정 시 자동 재시작

### 스킬 관리
- 프로젝트별로 Claude 스킬을 풀(pool)에서 선택해 연결
- 프로젝트 상태는 `.agent-deck/skills.toml`에 저장

### 워크스페이스
- **Git worktree** 지원 — 격리된 개발 브랜치
- **Docker 샌드박스** — 에이전트 작업 격리
- **비용 대시보드** — 세션별 토큰 사용량 추적
- 대기 중인 세션 알림 강조

### Conductor(코디네이터)
- 다른 세션을 모니터링·조율하는 영구 에이전트 세션
- **Telegram / Slack** 연동으로 원격 모니터링 가능
- 상태 변화 시 알림 전송

## 기본 명령어

```bash
agent-deck              # 터미널 UI 실행
agent-deck add . -c claude   # 새 세션 생성
agent-deck web          # 브라우저 UI 시작
agent-deck session fork [name]   # 대화 브랜치 생성
```

## 키 단축키

| 키 | 동작 |
|----|------|
| Enter | 세션 연결 |
| n | 새 세션 |
| f / F | 포크 |
| m | MCP 매니저 |
| s | 스킬 관리 |
| $ | 비용 확인 |
| ? | 도움말 |

## 참고 링크

- GitHub: https://github.com/asheshgoplani/agent-deck
- Threads 소개: https://www.threads.com/@aisolutiondev/post/DWS6AMvFH5v
- X(트위터): https://x.com/_vmlops/status/2036286385288855734
