---
title: "비즈니스 AI 앱 만드는 오픈소스 5종 — Mastra·Composio·Mem0·Langfuse·Promptfoo"
date: 2026-11-18
tags: [ai/agent, ai/tools, dev/open-source]
description: "업무용 AI 앱을 만들 때 필요한 다섯 층을 하나씩 맡는 오픈소스 조합. 에이전트·워크플로우(Mastra), 업무 앱 연결(Composio), 기억(Mem0), 추적·비용(Langfuse), 평가·회귀 테스트(Promptfoo)."
source: "https://www.threads.com/@0mar_samad/post/Df2NAAJEb52"
---

# 비즈니스 AI 앱 만드는 오픈소스 5종

@0mar_samad (Threads, 2026-11-17)가 정리한 조합. 첨부 이미지는 "고객 업데이트 준비"라는 하나의 업무를 예로 들어, 다섯 도구가 각각 어느 단계를 맡는지 보여 준다. 설명은 각 GitHub README 기준이다.

| # | 도구 | 맡는 층 | 이미지 속 예시 |
|---|------|---------|----------------|
| 1 | Mastra | 에이전트 + 워크플로우 | 요청 → 맥락(프로젝트 정보·최근 메모) → 초안 → 검토 |
| 2 | Composio | 업무 앱 연결 | CRM 연락처 읽기, 캘린더 일정 읽기, 메일함 읽기 전용 — 앱마다 권한을 켜고 끔 |
| 3 | Mem0 | 지속되는 기억 | "이번 주 업데이트 준비해 줘" → 저장된 선호(짧은 업데이트, 메일 요약)를 써서 답함. 선호는 사용자가 고칠 수 있음 |
| 4 | Langfuse | 추적 + 비용 | 요청·모델·도구 호출 단계별 시간과 비용, 느린 단계(도구 4.8초) 표시 |
| 5 | Promptfoo | 평가 + 회귀 테스트 | 후보 A(이전)와 B(이후)를 라우팅·도구 사용·대체 동작 항목별로 비교 |

## 1. Mastra — 에이전트와 워크플로우

- https://github.com/mastra-ai/mastra
- TypeScript로 AI 앱과 에이전트를 만드는 프레임워크. React·Next.js·Node에 넣거나 단독 서버로 배포한다.
- 모델 라우팅(40개 이상 프로바이더를 한 인터페이스로), 도구를 써서 목표까지 반복하는 에이전트, 그래프 기반 워크플로우(`.then` 같은 문법).
- **사람 확인 단계**: 에이전트나 워크플로우를 멈추고 사용자 입력·승인을 기다렸다가 이어 간다 (실행 상태를 저장소에 기억).
- 대화 기록·RAG 같은 맥락 관리, MCP 서버 작성, 평가·관측 기능 내장.
- 시작: `npm create mastra@latest`

## 2. Composio — 업무 앱 연결

- https://github.com/ComposioHQ/composio
- 에이전트에 **미리 인증된 툴킷 1,000개 이상**, 사용자별 세션, 인증, 트리거, 샌드박스를 준다.
- TypeScript·Python SDK, CLI, OpenAI Agents·Claude Agent SDK·Vercel AI SDK·LangChain용 어댑터.
- 사용자마다 세션을 만들고(`composio.create("user_123")`), 그 세션의 도구를 에이전트에 넘기는 방식. `COMPOSIO_API_KEY`가 필요하다.

## 3. Mem0 — 지속되는 기억

- https://github.com/mem0ai/mem0
- AI 비서·에이전트에 기억 층을 붙여, 사용자 선호를 기억하고 개인에 맞춰 적응하게 한다.
- 2026년 4월 새 기억 알고리즘: LoCoMo 71.4 → 92.5, LongMemEval 67.8 → 94.4 (한 번 조회, 약 7천 토큰, p50 약 1초). README는 이 점수가 **관리형 플랫폼 기준이며 오픈소스에 없는 최적화가 포함됐다**고 밝힌다.
- 바뀐 점: 덮어쓰지 않고 추가만 하는 추출, 에이전트가 확인한 사실도 동등하게 저장, 엔티티 연결, 의미·BM25 키워드·엔티티 매칭을 함께 쓰는 검색, 시간을 고려한 검색.
- 첨부 이미지에는 "MEMO"로 적혀 있지만 본문과 링크는 Mem0다.

## 4. Langfuse — 추적과 비용

- https://github.com/langfuse/langfuse (MIT, 2026년 1월부터 ClickHouse 소속)
- 에이전트 평가와 관측을 위한 오픈소스 AI 엔지니어링 플랫폼. 클라우드 또는 셀프호스팅.
- 관측(트레이스), 프롬프트 버전 관리, 스킬 관리(베타, `SKILL.md` 버전·롤백), 평가(LLM 심사·코드 평가·사용자 피드백·수동 라벨), AI 게이트웨이(베타), 지표 대시보드와 알림.
- 볼트에 이미 단독 노트가 있다: [[langfuse-llm-observability-debug-tool]]

## 5. Promptfoo — 평가와 회귀 테스트

- https://github.com/promptfoo/promptfoo (MIT, 현재 OpenAI 소속이지만 오픈소스·MIT 유지)
- LLM 앱을 평가하고 레드팀(취약점 점검)하는 CLI·라이브러리.
- 프롬프트·모델 자동 평가, 모델 나란히 비교, CI/CD에서 자동 점검.
- 시작: `npm install -g promptfoo` → `promptfoo init --example getting-started` → `promptfoo eval` → `promptfoo view` (`brew`, `pip`, `npx`도 가능)
