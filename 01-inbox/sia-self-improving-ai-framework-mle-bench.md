---
title: "SIA — 스스로 하네스·모델·메모리를 개선하는 자기 향상 AI 프레임워크 (MLE-Bench 1위)"
date: 2026-05-29
tags: [ai/agent, ai/llm, dev/architecture]
description: "실행할 때마다 자신의 하네스·모델 가중치·메모리 레이어를 업데이트해 점점 나아지는 자기 향상 AI 프레임워크. MLE-Bench에서 MLEvolve·AIRA-dojo를 제치고 1위, 자신의 이전 버전도 갱신."
source: "https://github.com/hexo-ai/sia"
---

# SIA — Self Improving AI 프레임워크

**GitHub**: https://github.com/hexo-ai/sia  
**⭐ 392 stars** / MIT 라이선스  
**논문**: https://arxiv.org/abs/2605.27276

> "SIA는 다른 레이어에서 작동한다. 구조화된 피드백 루프로 에이전트가 자기 성능을 평가하고, 전략을 조정하고, 시간이 지날수록 나아진다."

---

## 기존 에이전트와의 차이

| 기존 에이전트 프레임워크 | SIA |
|--------------------------|-----|
| 고정 하네스 | 매 실행 후 하네스 자체 업데이트 |
| 고정 모델 가중치 | 기반 모델 가중치 업데이트 |
| 고정 메모리 레이어 | 새로운 복잡성에 맞춰 메모리 업데이트 |
| Plan → Act → Tool | 실행 → 자기 평가 → 자기 재작성 |

**에이전트가 스스로를 다시 쓴다.**

---

## 3개 에이전트 구조

| 에이전트 | 역할 |
|----------|------|
| **메타 에이전트** | 전체 개선 루프 조율 |
| **타겟 에이전트** | 실제 벤치마크 작업 수행 |
| **피드백 에이전트** | 성능 평가 및 개선 방향 도출 |

각 세대(generation)마다: 타겟 에이전트 코드 + 실행 로그 + 개선 문서 생성

---

## 벤치마크 성과

| 벤치마크 | 성과 |
|----------|------|
| **MLE-Bench** (OpenAI) | MLEvolve·AIRA-dojo 제치고 1위, 자신의 이전 버전도 갱신 |
| **LawBench** | 56.6% 성능 향상 |
| **GPU 커널 최적화** | 런타임 91.9% 감소 |

---

## 설치

Claude 또는 OpenHands 백엔드 선택 후 pip으로 설치. API 키 환경변수 설정 필요.

---

## 관련 노트

- [[rl-environment-llm-agents-e-t-h-v-s-c-framework]] — E={T,H,V,S,C} 프레임워크 (SIA가 업데이트하는 H·V가 직접 연관)
- [[production-ai-agent-architecture-4layers]] — 프로덕션 에이전트 아키텍처 (SIA의 자기 개선 루프와 비교)
- [[12-factor-agents-production-ai-engineering]] — 프로덕션 에이전트 12원칙
- [[llm-wiki-self-updating-knowledge-base-karpathy]] — Karpathy 패턴 (SIA가 이긴 autoresearcher와 같은 맥락)
