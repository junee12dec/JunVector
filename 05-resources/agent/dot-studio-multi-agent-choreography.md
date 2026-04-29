---
title: "dot-studio — drag & drop 멀티 에이전트 런타임과 Choreography"
date: 2026-04-11
tags: [ai/multi-agent, dev/tools]
description: "스킬·시스템프롬프트·모델·오케스트레이션을 drag & drop으로 구성하는 멀티 에이전트 런타임. 페르소나+관계+룰을 에이전트에 부여해 이벤트 기반으로 자율 협업하는 choreography 기능이 핵심."
source: "https://www.threads.com/@junhao_321/post/DW-VbOWj9ox?xmt=AQF0DY2KzIrN-7cpRhU3BwP34jbuwkga0MgzEfXCqYW-b0OO29D78eavqrQzF_hCm0_7v1VU&slof=1"
---

# dot-studio — drag & drop 멀티 에이전트 런타임과 Choreography

## 설치

```bash
npm install -g dot-studio && dot-studio
```

## 핵심 기능

**drag & drop으로 구성 가능한 것들:**
- 스킬
- 시스템 프롬프트
- 모델
- 오케스트레이션

내장 assistant agent로 더 간단하게 시작도 가능.

## Choreography 기능

dot-studio의 핵심 차별점.

자체 멀티 에이전트 런타임이 내장되어 있으며, 에이전트 간 자율 협업을 지원:

1. 각 에이전트에 **페르소나 + 관계 + 룰** 부여
2. **이벤트 기반**으로 에이전트를 깨움
3. 누가 뭘 할지 사람이 짜는 게 아니라 **상황에 따라 에이전트들이 스스로 역할 설정**

## CMUX 대비

기존 CMUX(Claude Multiplexer) 방식을 대체하는 포지션으로 제시.
오케스트레이션 설정을 코드 없이 시각적으로 구성할 수 있다는 점이 진입장벽을 낮춘다.

## 시사점

멀티 에이전트 설계에서 choreography 개념은 중요한 패러다임 전환:
- 기존: 사람이 워크플로우를 명시적으로 정의 (orchestration)
- choreography: 에이전트가 맥락에 따라 스스로 협력 관계를 구성
