---
title: "Hermes Workspace — Hermes Agent용 네이티브 Web UI 통합 작업공간 (4.7k⭐)"
date: 2026-05-22
tags: [ai/agent, ai/claude, dev/tool, selfhosted/platform]
description: "Hermes Agent의 CLI·텔레그램 대신 쓸 수 있는 Web UI 버전. 채팅·터미널·메모리·스킬·대시보드를 한 화면에서 관리하며 2,000개 이상 스킬 브라우징과 멀티프로필 설정 지원."
source: "https://github.com/outsourc-e/hermes-workspace"
---

# Hermes Workspace — Hermes Agent용 네이티브 Web UI 통합 작업공간

**GitHub**: https://github.com/outsourc-e/hermes-workspace  
**⭐ 4.7k stars** / 656 forks  
**라이선스**: MIT

> "Native web workspace for Hermes Agent — chat, terminal, memory, skills, inspector"

Hermes Agent를 텔레그램·CLI 대신 **브라우저에서 GUI로** 사용할 수 있는 통합 작업공간.  
멀티프로필 설정, 2,000개 이상 스킬 브라우징, Swarm 모드까지 지원한다.

---

## 핵심 기능

| 기능 | 설명 |
|------|------|
| **채팅** | SSE 스트리밍, 도구 호출 렌더링, 다중 세션 |
| **메모리** | 에이전트 메모리 검색 및 편집 |
| **스킬** | 2,000개 이상 스킬 브라우징 |
| **터미널** | 파일 브라우저 + PTY 터미널 내장 |
| **대시보드** | 세션·비용 계산·에이전트 통계 |
| **Swarm 모드** | 지속적인 에이전트 워커 풀 |
| **MCP** | 마켓플레이스 통합 |

---

## 설치

**원라인 설치 (가장 간단)**:
```bash
curl -fsSL https://raw.githubusercontent.com/outsourc-e/hermes-workspace/main/install.sh | bash
```

**Docker Compose**:
```bash
# 사전 구성된 컨테이너로 바로 실행
docker compose up -d
```

**수동 설치**: Node.js 22+ 필요, npm/pnpm으로 설정  
**기존 Hermes Agent 연결**: 이미 실행 중인 에이전트에 바로 연결 가능

---

## 부가 기능

- **다중 테마**: Hermes, Nous, Bronze 등
- **PWA 설치 지원**: 데스크톱 앱처럼 설치 가능
- **모바일 접근**: Tailscale을 통한 원격 접속
- **로컬 모델 지원**: Ollama, LM Studio 연결
- **보안**: 인증, CSP, 경로 순회 방지
- **다중 LLM 제공자**: 다양한 AI 모델 연결 지원

---

## 화면 구성

채팅 / 컨덕터 / 대시보드 / 메모리 / 터미널 / 설정 / 작업 관리

---

## 관련 노트

- [[hermes-desktop-electron-app-github-actions]] — Hermes Agent 데스크톱 앱 (Electron 기반 — 같은 Hermes 생태계)
- [[awesome-agent-skills-largest-curated-library]] — 2,000+ 스킬과 연결되는 스킬 라이브러리
- [[flowise-drag-drop-ai-agent-builder]] — 비슷한 Web UI 기반 에이전트 빌더
- [[agency-agents-147-ai-agents-company-structure]] — 에이전트 조직화·운영 전략
