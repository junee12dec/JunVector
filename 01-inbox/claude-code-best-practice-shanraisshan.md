---
title: "Claude Code Best Practice — 클로드 코드 학습의 필수 레퍼런스 (31.4k stars)"
date: 2026-04-03
tags: [ai/claude, dev/tools, productivity/automation]
description: "shanraisshan이 정리한 Claude Code 베스트 프랙티스 모음. 에이전트·스킬·훅·MCP·워크플로우까지 핵심 개념과 최신 기능을 체계적으로 정리한 GitHub 저장소."
source: "https://github.com/shanraisshan/claude-code-best-practice"
---

# Claude Code Best Practice — 클로드 코드 학습의 필수 레퍼런스

> "클로드 코드를 배우는데 딱 한 가지 리소스만 볼 수 있다면 바로 이 페이지입니다." — @aipreneur_j

**GitHub**: https://github.com/shanraisshan/claude-code-best-practice  
`practice makes claude perfect` | ⭐ 31.4k stars · 2.8k forks

---

## 핵심 개념 정리

| 개념 | 설명 |
|------|------|
| **Subagents** | 격리된 컨텍스트에서 동작하는 자율 액터 — 커스텀 툴, 권한, 모델, 메모리, 영속 ID 지원 |
| **Commands** | 기존 컨텍스트에 주입되는 지식 — 워크플로우 오케스트레이션 |
| **Skills** | 설정 가능하고 사전 로드 가능한 컨텍스트 포킹 단위 |
| **Workflows** | Command → Agent → Skill 아키텍처 패턴 |
| **Hooks** | 에이전트 루프 외부에서 특정 이벤트에 반응하는 사용자 정의 핸들러 |
| **MCP Servers** | 외부 툴 및 API 연결 프로토콜 |
| **Memory** | CLAUDE.md 파일을 통한 영속 컨텍스트 관리 |
| **Settings** | 권한과 모델 설정을 포함한 계층형 설정 시스템 |

## 핵심 아키텍처 패턴

```
Research → Plan → Execute → Review → Ship
Command → Agent → Skill
```

## 최신 주요 기능 (Hot Features)

- **Power-ups**: Claude Code 기능을 가르치는 인터랙티브 레슨 (v2.1.90)
- **Auto Mode**: 수동 권한 프롬프트를 대체하는 백그라운드 안전 분류기
- **Computer Use**: macOS에서 Claude가 화면을 직접 제어
- **Channels**: Telegram·Discord에서 실행 중인 세션으로 이벤트 푸시
- **Scheduled Tasks**: `/loop` (로컬 반복 프롬프트), `/schedule` (클라우드 실행)
- **Agent Teams**: 여러 에이전트가 공유 태스크로 병렬 작업
- **Code Review**: 멀티 에이전트 PR 분석 (베타)

## 주목할 커뮤니티 프로젝트

| 프로젝트 | Stars | 특징 |
|---------|-------|------|
| Everything Claude Code | 133k | 즉각 스코어링 + AgentShield |
| Superpowers | 132k | TDD-first + 전체 플랜 리뷰 |
| Spec Kit | 85k | 스펙 기반 개발 + constitution |
| Get Shit Done | 47k | 웨이브 실행 + XML 플랜 |

## Tips & Tricks

- Boris Cherny (Claude Code 창시자) 워크플로우 포함
- Andrej Karpathy 등 전문가 워크플로우 수록
- 크로스 모델 협업 기법
- RPI (Responsible Prompt Injection) 패턴
- 총 69개 팁 문서화
