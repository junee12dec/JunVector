---
title: "하네스 엔지니어링 — AI 에이전트가 실수하지 않는 구조 설계 (oh-my-agent)"
date: 2026-03-18
tags: [ai/agent, dev/workflow, productivity/automation]
description: "AI 에이전트에게 '다시 해봐'를 반복하는 대신, 에이전트가 실수하지 않는 구조(하네스)를 설계하는 접근법. oh-my-agent는 역할 기반 멀티 에이전트 오케스트레이션 프레임워크."
source: "https://github.com/first-fluke/oh-my-agent"
---

# 하네스 엔지니어링 — AI 에이전트가 실수하지 않는 구조 설계

> AI 에이전트에게 "다시 해봐"를 반복하는 건 해결책이 아니다.
> 2026년 개발자의 진짜 경쟁력은 **프롬프트가 아니라, 에이전트가 실수하지 않는 구조를 설계하는 것**이다.
>
> — @aisolutiondev (Threads)

## 하네스 엔지니어링이란?

"하네스(Harness)"는 말에 거는 마구(馬具)처럼, **에이전트를 통제된 구조 안에서 움직이게 하는 설계**를 의미한다.

즉흥적인 프롬프팅 대신:
- 역할을 명확히 정의하고 (PM, Frontend, Backend, QA 등)
- 워크플로우 단계를 명시적으로 구분하고 (기획 → 실행 → 검토 → 디버그)
- 결과물의 추적 가능성을 확보하는 (대시보드, 매니페스트, 구조화된 출력)

→ **에러를 사후 수정하는 대신 구조적으로 예방하는 설계**

## oh-my-agent 개요

**GitHub**: https://github.com/first-fluke/oh-my-agent
⭐ 417 · MIT 라이선스 · CLI v2.11.3 (2026-03)

역할 기반 멀티 에이전트 오케스트레이션 프레임워크.
`.agents/` 폴더 하나가 모든 스킬·워크플로우의 단일 진실 소스(Single Source of Truth).

### 3-레이어 아키텍처

| 레이어 | 구성 |
|--------|------|
| **워크플로우** | `/brainstorm`, `/coordinate`, `/ultrawork`, `/orchestrate`, `/plan`, `/review`, `/debug`, `/deepinit` |
| **오케스트레이션** | PM Agent + Orchestrator — 태스크 위임 관리 |
| **도메인 에이전트** | Frontend, Backend, Database, Mobile, Terraform/Infra, QA, Debug |

### 핵심 특징

- **이식성**: `.agents/` 폴더 하나로 어떤 IDE에서든 동일한 에이전트 설정 사용
- **멀티 IDE 지원**: Claude Code, Cursor, Codex, Gemini, OpenCode 등 심링크 어댑터로 연결
- **Claude Code 네이티브**: CLAUDE.md 프로젝트 정체성, 12개 워크플로우 스킬, 7개 서브에이전트 정의 포함
- **벤더 락인 방지**: 도구 종속 없이 팀 단위로 에이전트 스킬 공유

### 설치

```bash
curl -fsSL https://raw.githubusercontent.com/first-fluke/oh-my-agent/main/cli/install.sh | bash
```

### 실행 패턴

| 상황 | 실행 방식 |
|------|-----------|
| 복잡한 프로젝트 | `/coordinate` — PM 계획 → 에이전트 분기 |
| 독립 서브태스크 병렬 실행 | `/ultrawork` |
| 단순 요청 | 단일 에이전트 자동 활성화 |
| 커밋 | `/commit` — 컨벤셔널 커밋 자동 생성 |

## 왜 하네스가 중요한가 (핵심 인사이트)

1. **역할 제약 = 환각 감소**: "Frontend Agent"처럼 도메인이 명확한 에이전트는 범용 AI보다 더 집중적이고 검증 가능한 결과를 낸다
2. **워크플로우 단계 = 체크포인트**: 실행 전 계획, 검토 단계, 디버그 루프가 연쇄 오류를 차단한다
3. **버전 관리된 스펙 = 감사 가능성**: `.agents/` 안에 에이전트 행동이 정의되면 팀이 함께 리뷰·개선할 수 있다
4. **표준 사전 탑재**: OWASP 보안 패턴, ISO 컴플라이언스 등이 에이전트에 내장되어 조직 요구사항에 맞는 코드를 생성한다
5. **실시간 대시보드 = 개입 가능성**: 에이전트 태스크 실행을 관찰하면서 문제가 생기기 전에 방향을 바로잡을 수 있다

## 메모

- agency-agents (53.3K ⭐)의 "역할 기반 에이전트" 철학과 같은 방향
- oh-my-agent는 더 개발자·시스템 중심 (CI/CD, 인프라, 보안 포함)
- Caio Blueprint의 "24개 AI 부서" 개념의 구체적인 기술 구현 레퍼런스로 볼 수 있다
