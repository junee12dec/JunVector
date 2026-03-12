---
title: "Be My Butler — Claude Code 다중 에이전트 오케스트레이션 시스템"
date: 2026-03-12
tags: [ai/agent, ai/claude, dev/architecture]
description: "단일 AI의 자체 검토 편향을 9개 전문 에이전트가 상호 검증으로 해결하는 Claude Code용 오케스트레이션 프레임워크. 정확성 최적화에 초점."
source: "https://www.threads.com/@dayum_gud/post/DVxbpjRDxwg"
---

# Be My Butler — Claude Code 다중 에이전트 오케스트레이션 시스템

> GitHub: https://github.com/project820/be-my-butler

## 핵심 철학

> "다른 AI 코딩 도구는 속도를 최적화한다. BMB는 **정확성**을 최적화한다."

단일 에이전트의 두 가지 한계를 해결:
- **자체 검토 편향** — 자기가 쓴 코드를 자기가 검토하면 오류를 못 잡음
- **컨텍스트 폭발** — 하나의 에이전트가 전체 맥락을 유지하다 품질 저하

## 에이전트 구조 (9개)

| 에이전트 | 역할 |
|---------|------|
| **Lead** | 오케스트레이터 · 의사결정자 |
| **Consultant** | 조정자 · 파이프라인 모니터 |
| **Architect** | 시스템 설계 · 라이브 라이브러리 문서 쿼리 |
| **Executor** | 격리된 워크트리에서 구현 |
| **Frontend** | UI/UX 작업 |
| **Tester** | 테스트 작성 및 실행 |
| **Verifier** | 크로스 모델 블라인드 검토 |
| **Simplifier** | 데드 코드 제거 · 복잡성 감소 |
| **Analyst** | 분석 DB 쿼리 · 심각도 분류 |

## 데이터플로우 (이미지 요약)

```
Lead
├── Consultant
├── Arch
└── Executor
     ↓ (COUNCIL DEBATE)
Frontend ──┐
Tester ────┤
           ↓
     Cross-Model Verify
           ↓
      Simplify → Ship
```

Lead가 tmux pane에서 각 에이전트를 순차 호출 · 파일 기반 핸드오프.

## 핵심 기능

- **크로스 모델 블라인드 검증**: 다른 모델(Codex/Gemini)이 원본 추론을 보지 않고 독립 검토
- **의회식 토론(Council Debate)**: 코드 작성 전 컨설턴트와 리더가 다중 라운드 구조화 논증
- **워크트리 격리**: 각 에이전트가 독립 git 워크트리에서 병렬 실행 → 머지 충돌 방지
- **3계층 자동학습**: 프로젝트 로컬 → 전역 → CLAUDE.md 승격 (반복 실수 자동 규칙화)

## 파이프라인 (11.5단계)

세션 준비 → 브레인스토밍 → 의회 토론 → 아키텍처 → 계획 → 실행 → 프론트엔드 → 테스트 → 검증 → 단순화 → 분석 → 학습

레시피(feature, bugfix, refactor, research 등)에 따라 필요한 단계만 선택 실행.
