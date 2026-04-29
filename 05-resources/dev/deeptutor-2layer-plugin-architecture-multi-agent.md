---
title: "DeepTutor 아키텍처 심층 분석 — 2-Layer Plugin과 멀티에이전트 파이프라인"
date: 2026-04-09
tags: [ai/education, ai/agents, dev/architecture]
description: "홍콩대학교 HKUDS의 DeepTutor가 채택한 2-Layer Plugin 아키텍처와 Plan→ReAct→Write 멀티에이전트 파이프라인을 분석한 노트. 교육 플랫폼을 넘어 범용 멀티에이전트 시스템 설계의 참고 사례."
source: "https://www.threads.com/@github.trending/post/DW5EibPEij1"
---

# DeepTutor 아키텍처 심층 분석 — 2-Layer Plugin과 멀티에이전트 파이프라인

## 개요

DeepTutor는 홍콩대학교 데이터 인텔리전스 랩(HKUDS)의 오픈소스 AI 학습 플랫폼이다. 단순한 Q&A 채팅이 아니라, 문제를 받으면 Planner→Solver→Writer 세 에이전트가 순서대로 협업해 풀이를 만들어낸다. 수학 문제면 Manim으로 애니메이션까지 생성한다.

- GitHub: https://github.com/HKUDS/DeepTutor
- 스택: Python(FastAPI) 백엔드 + Next.js 프론트엔드
- 라이선스: Apache-2.0 (완전 셀프호스팅, Ollama 로컬 모델 지원)
- 현황: 2026-04 기준 GitHub 스타 13,500+, v1.0.0-beta 릴리스

## 5가지 학습 모드

| 모드 | 설명 |
|------|------|
| Chat | 일반 Q&A + RAG |
| Deep Solve | 다단계 문제 풀이 (멀티에이전트) |
| Quiz | 자료 기반 퀴즈 생성 |
| Deep Research | 멀티에이전트 웹 리서치 |
| Math Animator | Manim 기반 수학 시각화 |

## 핵심: 2-Layer Plugin 아키텍처

```
Layer 1 (Tool)         — 원자적 연산
  RAG 검색 / 웹 검색 / 코드 실행
  → OpenAI function-calling 스키마 자동 생성

Layer 2 (Capability)   — Tool 조합 워크플로우
  Deep Solve / Quiz / Deep Research / Math Animator
  → 각 모드 = Capability 서브클래스 하나
```

**확장성 핵심**: 새 학습 모드를 추가하려면 Capability 서브클래스 하나만 만들면 된다. 라우팅, 스트리밍, UI는 건드릴 필요 없다.

## Deep Solve 파이프라인 (Plan → ReAct → Write)

```
PlannerAgent  → 문제 분해 및 계획 수립
SolverAgent   → 도구 사용하며 ReAct 루프 추론
WriterAgent   → 최종 답안 작성
```

각 에이전트가 독립적으로 동작하기 때문에 교체·커스텀이 쉽다. 교육 플랫폼뿐 아니라 복잡한 멀티에이전트 시스템 어디서든 참고할 만한 패턴이다.

## 오케스트레이션 구조

- **ChatOrchestrator**: UnifiedContext를 받아 적절한 Capability로 라우팅. WebSocket / CLI / SDK 세 진입점 모두 이 오케스트레이터를 거친다.
- **StreamBus**: 비동기 이벤트 버스. 토큰 단위 스트리밍을 어떤 인터페이스든 동일하게 받을 수 있게 한다.
- **Provider Registry**: litellm 의존성을 제거하고 자체 구축. 27개 이상 LLM 프로바이더를 직접 관리한다.

## TutorBot — 범용 자율 에이전트 프레임워크

TutorBot은 단순 튜터 봇이 아니라 사실상 범용 자율 에이전트 프레임워크다:

- 독자적 이벤트 루프
- 메모리 시스템
- 스킬 습득 및 진화
- 서브에이전트 조율
- cron 스케줄링
- 하트비트 모니터링
- 세션을 넘어 상태 유지

CLI + JSON 출력 지원으로 기존 LMS나 Slack 봇에 헤드리스 AI 튜터로 통합 가능하다.

## 경쟁 환경 비교

| 서비스 | 특징 | 한계 |
|--------|------|------|
| Khanmigo | 상용, GPT-4 한정 | 클로즈드 소스, 멀티에이전트 없음 |
| OpenWebUI | 범용 LLM 채팅 | 퀴즈·수학·RAG 직접 구성 필요 |
| OATutor | 대수학 특화 | 사전 제작 문제뱅크 기반 |
| **DeepTutor** | 멀티에이전트 + 자율 에이전트 + 수학 시각화 + RAG | 싱글유저, 베타 단계 |

## 주목할 이유

- 4월 4일 v1.0.0-beta 출시, 5일 만에 beta.1 → beta.3 세 번 릴리스
- 하루에만 GitHub 스타 1,168개 증가 → 총 13,500+
- Apache-2.0 오픈소스, Ollama 로컬 모델 지원
- ⚠️ 아직 싱글유저 전용. 멀티유저 인증은 PR 진행 중

## 대상 독자

- **자기 주도 학습자**: 프라이빗 AI 튜터를 직접 운영하고 싶은 분
- **에이전트 시스템 개발자**: 2-Layer Plugin 패턴과 TutorBot 자율 에이전트 구조 참고
- **교육 기술 개발자**: CLI + SDK로 기존 시스템에 AI 튜터 기능 통합
