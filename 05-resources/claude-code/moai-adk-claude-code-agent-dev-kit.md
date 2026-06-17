---
title: "Moai-ADK — Claude Code용 하네스 엔지니어링 기반 AI 에이전트 개발 키트 (1.1k⭐)"
date: 2026-06-05
tags: [ai/claude, ai/agent, dev/tool, agent/harness]
description: "24개 전문 AI 에이전트와 52개 스킬로 구성된 Claude Code 전용 에이전트 개발 키트. 하네스 엔지니어링 방식으로 TDD·DDD를 자동화하며 교보문고 IT 도서 1위 저자가 만든 국산 오픈소스다."
source: "https://github.com/modu-ai/moai-adk"
---

# Moai-ADK — Claude Code용 하네스 엔지니어링 에이전트 개발 키트

**GitHub**: https://github.com/modu-ai/moai-adk  
**⭐ 1.1k stars** / Apache 2.0 라이선스  
**작성자**: 교보문고 IT 도서 1위 저자 (@goos.kim 팀)

> "Human steers, agents execute. 하네스 엔지니어링 — AI를 위한 환경을 설계하는 것."

---

## 설치 (Go 단일 바이너리, 의존성 없음)

```bash
# macOS / Linux / WSL
curl -fsSL https://raw.githubusercontent.com/modu-ai/moai-adk/main/install.sh | bash

# Windows: PowerShell 7.x+ + Git for Windows
```

---

## 핵심 구성

| 구성 요소 | 내용 |
|-----------|------|
| **24개 전문 에이전트** | 관리·전문성·빌드·평가 도메인으로 분류 |
| **52개 점진적 스킬** | 카테고리별 정리, 필요한 것만 활성화 |
| **TRUST 5 품질 프레임워크** | Testing·Readability·Unified formatting·Security·Trackability |

---

## 개발 방법론 (자동 선택)

| 상황 | 방법론 |
|------|--------|
| 신규 프로젝트 | **TDD** (테스트 주도 개발, 기본값) |
| 기존 코드베이스 (테스트 부족) | **DDD** (도메인 주도 개발) |

---

## 실행 모드

- **Sub-Agent**: 순차 실행 — 안정적, 단순 작업에 적합
- **Agent Teams**: 병렬 협업 — 빠름, 복잡한 프로젝트에 적합

---

## 지원 범위

- **언어**: 16개 이상 자동 감지
- **플랫폼**: macOS · Linux · WSL · Windows(PowerShell 7.x+)
- **주요 기능**: SPEC 기반 기획 → 개발 → 코드 품질 검증 → 리팩터링 → DB 스키마 관리 → 디자인 생성(`/moai design`)

---

## 관련 노트

- [[harness-engineering-lecture01-why-capable-agents-fail]] — 하네스 엔지니어링 원리 강의 (Moai-ADK의 설계 철학)
- [[harness-engineering-enterprise-lecture-slides-free]] — 하네스 엔지니어링 기업 강의자료 (같은 맥락)
- [[production-ai-agent-architecture-4layers]] — 프로덕션 에이전트 아키텍처 4계층 (Moai-ADK가 구현하는 구조)
- [[12-factor-agents-production-ai-engineering]] — 프로덕션 에이전트 12원칙 (Moai-ADK의 운영 원칙과 연관)
- [[claude-code-team-automation-wikidocs-guide]] — Claude Code 팀 자동화 실전 가이드 (동일 생태계)
