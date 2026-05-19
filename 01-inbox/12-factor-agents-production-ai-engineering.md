---
title: "12-Factor Agents — 데모를 넘어 프로덕션 AI 에이전트를 만드는 12가지 원칙 (20.6k⭐)"
date: 2026-05-15
tags: [agent/architecture, ai/agent, dev/production, agent/best-practice]
description: "수백 명의 테크 창업자 인터뷰를 바탕으로 만든 프로덕션 AI 에이전트 엔지니어링 오픈소스 가이드. 컨텍스트 관리·도구 호출·상태 모델링·에러 처리 등 데모를 실제 서비스로 만드는 12가지 실천법."
source: "https://www.threads.com/@notyetsmart/post/DYgBQMBmbsO"
---

# 12-Factor Agents — 데모를 넘어 프로덕션 AI 에이전트를 만드는 12가지 원칙

**GitHub**: https://github.com/humanlayer/12-factor-agents  
**⭐ 20.6k stars** / 1.6k forks  
**라이선스**: Apache 2.0 (코드) / CC BY-SA 4.0 (콘텐츠)

> "왜 내가 만든 AI 에이전트는 맨날 데모만 돌리고 프로덕션엔 못 올라갈까?"

수백 명의 테크 창업자 인터뷰를 기반으로, LLM 구동 소프트웨어를 실제 고객에게 제공할 수 있는 수준으로 만드는 12가지 원칙.

---

## 핵심 철학

기존 제품에 에이전트 개념을 **점진적으로 통합**하는 방식이  
처음부터 프레임워크 전체를 도입하는 것보다 효과적이다.

---

## 12가지 팩터

| # | 팩터 | 핵심 |
|---|------|------|
| 1 | **Natural Language to Tool Calls** | LLM이 자연어를 구조화된 도구 호출로 변환 |
| 2 | **Own your prompts** | 프롬프트에 대한 완전한 제어권 확보 |
| 3 | **Own your context window** | 컨텍스트 윈도우 관리의 자율성 |
| 4 | **Tools are just structured outputs** | 도구를 구조화된 출력으로 취급 |
| 5 | **Unify execution state and business state** | 실행 상태와 비즈니스 상태 통합 |
| 6 | **Launch/Pause/Resume with simple APIs** | 간단한 API로 시작·일시중지·재개 지원 |
| 7 | **Contact humans with tool calls** | 도구 호출을 통한 Human-in-the-loop |
| 8 | **Own your control flow** | 제어 흐름의 자체 관리 |
| 9 | **Compact Errors into Context Window** | 에러를 컨텍스트 윈도우에 압축 |
| 10 | **Small, Focused Agents** | 작고 집중된 에이전트 구축 |
| 11 | **Trigger from anywhere, meet users where they are** | 다양한 진입점에서 사용자와 만나기 |
| 12 | **Make your agent a stateless reducer** | 에이전트를 상태 없는 리듀서로 구현 |

---

## 핵심 주제별 묶음

### 컨텍스트 관리
- Factor 2: 프롬프트 소유
- Factor 3: 컨텍스트 윈도우 소유
- Factor 9: 에러 압축

### 상태·흐름 제어
- Factor 5: 실행 상태 + 비즈니스 상태 통합
- Factor 6: Launch/Pause/Resume
- Factor 8: 제어 흐름 소유
- Factor 12: 상태 없는 리듀서

### 도구 설계
- Factor 1: 자연어 → 도구 호출 변환
- Factor 4: 도구 = 구조화된 출력
- Factor 7: 인간 연락도 도구 호출

### 에이전트 설계
- Factor 10: 작고 집중된 에이전트
- Factor 11: 어디서든 트리거 가능

---

## 기술 스택

TypeScript 80.2% / Jupyter Notebook 11.2% / Python 7.5%

---

## 관련 노트

- [[harness-engineering-lecture01-why-capable-agents-fail]] — 같은 문제(에이전트 프로덕션 실패)를 하네스 엔지니어링 관점에서 분석
- [[production-ai-agent-architecture-4layers]] — 프로덕션 에이전트 4계층 아키텍처 (security/evaluation/observability/.claude)
- [[ai-agent-production-failure-scientific-skills-sandboxed-runtime]] — 에이전트 프로덕션 실패 해부
