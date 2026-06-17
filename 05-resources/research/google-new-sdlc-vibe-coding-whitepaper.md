---
title: "구글 'The New SDLC with Vibe Coding' 리포트 — 바이브 코딩 이후 개발 방식 51페이지 무료 공개"
date: 2026-06-15
tags: [ai/agent, dev/workflow, dev/sdlc, ai/engineering]
description: "구글이 Kaggle에 공개한 51페이지 무료 백서. 바이브 코딩과 에이전틱 엔지니어링의 차이부터 context engineering, 새로운 SDLC 구조, 개발자가 코더에서 오케스트레이터로 전환하는 흐름까지 다룬다."
source: "https://www.kaggle.com/whitepaper-the-new-SDLC-with-vibe-coding"
---

# 구글 'The New SDLC with Vibe Coding' 리포트

**출처**: Google × Kaggle (5-Day AI Agents Intensive Vibe Coding Course 연계)  
**분량**: 51페이지 / 무료  
**다운로드**: https://www.kaggle.com/whitepaper-the-new-SDLC-with-vibe-coding

---

## 핵심 주제 5가지

### 1. 바이브 코딩 vs 에이전틱 엔지니어링

| 바이브 코딩 | 에이전틱 엔지니어링 |
|-------------|---------------------|
| 자연어로 코드 생성 | 자율 에이전트가 레포 클론·계획·PR 제출 |
| 인간이 코드를 검토 | 에이전트가 테스트·리뷰·배포까지 실행 |
| 즉흥적 개발 흐름 | 정의된 체크포인트 사이 에이전트 자율 실행 |

### 2. Context Engineering — 프롬프트보다 중요

> "에이전트 출력이 이상해지면 모델이 아닌 컨텍스트를 먼저 점검하라."

에이전트의 컨텍스트 윈도우에 **무엇을, 언제, 어떻게** 넣느냐가 품질을 결정한다:
- 세션 상태 관리
- 스킬·메모리 선별적 포함
- 계층적 요약
- 최적 토큰 전략

### 3. AI 코딩 에이전트를 실제 개발 프로세스에 통합

자동 완성 → 자율 에이전트로의 전환:
- 저장소 이해 → 변경 계획 → 풀 리퀘스트 제출
- **Agentic Loop Engineering**: 에이전트 실행을 감사 가능하고 재현 가능한 워크플로로 구조화

### 4. 새로운 SDLC 구조

```
기획(SPEC) → 설계 → 구현 → 테스트 → 리뷰 → 배포
              ↑ 에이전트가 각 단계 실행
              ↑ 인간은 체크포인트에서 승인·조정
```

- **Bounded Autonomy**: 에이전트에게 완전 자율이 아닌 **제한된 자율성** 부여
- Observability(추적) · Rollback · 단계적 출시 포함

### 5. 개발자 역할 전환: 코더 → 오케스트레이터

> "코드를 생성하는 것이 아니라, 소프트웨어를 만드는 팩토리를 만드는 것."

시니어 엔지니어·테크 리드처럼 **지시·리뷰·거버넌스**하는 역할로 이동.

---

## 관련 노트

- [[12-factor-agents-production-ai-engineering]] — 프로덕션 AI 에이전트 12원칙 (새로운 SDLC의 실천 원칙)
- [[harness-engineering-lecture01-why-capable-agents-fail]] — 강력한 에이전트가 실패하는 이유 (context engineering 맥락)
- [[github-spec-kit-spec-driven-development]] — GitHub Spec Kit (SPEC-first 개발 구현 도구)
- [[production-ai-agent-architecture-4layers]] — 프로덕션 에이전트 4계층 아키텍처 (새 SDLC 구조 맥락)
- [[ai-agent-production-failure-scientific-skills-sandboxed-runtime]] — 에이전트 프로덕션 실패 해부 (bounded autonomy 맥락)
