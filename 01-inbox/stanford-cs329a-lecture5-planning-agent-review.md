---
title: "스탠포드 CS329A 5강 — 자기 개선 AI 에이전트의 Planning 구조 후기"
date: 2026-08-08
tags: [ai/agent, ai/research, dev/ai-infra]
description: "스탠포드 CS329A '자기 개선 AI 에이전트' 5강 후기. Planning의 상태-행동-전이-트리 탐색 구조와, 도메인 지식·휴리스틱을 사전학습 모델로 근사하는 방향 정리. 파인튜닝 vs 하네스 투자 판단 기준도 포함."
source: "https://www.threads.com/share/BBjS66Yfgw/"
---

# 스탠포드 CS329A 5강 — 자기 개선 AI 에이전트의 Planning 구조

강의: Stanford CS329A — Self-Improving AI Agents, Lecture 5  
(YouTube URL 미확인 — 검색 필요)

## Planning이란 무엇인가

```
현재 상태
  → 가능한 행동 생성
  → 실행 결과 관측
  → 상태 갱신
  → (필요 시) 여러 경로를 트리로 펼쳐 평가 → 선택
```

핵심 구조: **상태(State) — 행동(Action) — 전이(Transition) — 트리 탐색**

## 이 강의의 핵심 관점

> 상태-행동-전이-트리 탐색 구조는 그대로 두되,  
> 사람이 일일이 설계하던 **도메인 지식과 휴리스틱의 일부를 사전학습된 모델로 근사**한다.

LLM이 에이전트 플래닝에 들어오는 방식이 이것. 알고리즘 뼈대는 동일하고, 채워 넣는 지식을 모델이 담당.

## 이 강의가 유용한 사람

1. **LLM 에이전트 런타임 구현 경험자** — 흩어져 있던 개념 복습·점검
2. **에이전트 런타임을 처음 만들려는 사람** — OSS 역추적 없이 설계 의도를 직접 학습 가능
3. **AX·에이전트 사용자** — "Planning이 왜 그렇게 동작하는지", "딥리서치는 왜 검색과 분해를 반복하는지" 궁금했던 사람

## 파인튜닝 vs 하네스 — 어디에 투자할까

5강 후반부 환경 시뮬레이션·벤치마크 기반 RL 예시는 **파인튜닝** 방식.  
하지만 최근엔 하네스(harness)로도 유사한 시도가 늘어나는 추세.

> 모델 + 하네스를 하나의 추론 시스템으로 본다면,  
> **파인튜닝 vs 하네스(code-based) 중 어디에 투자할지는 비용에 따라 달라진다.**

## 관련 노트

- [[loopx-stateful-control-plane-long-running-agent]] — 하네스 기반 장기 에이전트 제어 평면 실제 구현체
- [[github-trending-agent-repos-prime-agent-witr]] — prime-agent: Continual Harness로 자율 실행하는 에이전트
