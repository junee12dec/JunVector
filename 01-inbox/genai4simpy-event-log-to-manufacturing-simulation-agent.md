---
title: "GenAI4SimPy — 공장 이벤트 로그에서 실행 가능한 공정 시뮬레이션 모델을 자동으로 만드는 로컬 멀티 에이전트 (논문·코드 공개)"
date: 2026-11-24
tags: [ai/agent, ai/research, strategy/enterprise]
description: "전문 인력과 비용 때문에 공정 시뮬레이션을 못 하던 중소 제조기업을 위해, 제조 이벤트 로그에서 SimPy 시뮬레이션 모델까지 자동으로 만든다. 로컬 공개 모델 Qwen 3.6(27B)으로 돌고 사람이 중간에 검증하며, 오차 7.9%를 냈지만 공정 단위 수치가 맞아도 공장 전체 흐름은 어긋날 수 있다는 함정도 드러났다."
source: "https://www.threads.com/@ax_central/post/DgG4IoXm-07"
---

# GenAI4SimPy — 이벤트 로그에서 공정 시뮬레이션으로

- 논문: *From Manufacturing Event Logs to Simulation: Enabling SMEs with Agentic AI for SimPy Simulation Generation* (arXiv 2611.27483, 2026-11-20) — https://arxiv.org/abs/2611.27483
- 저자: Richard Reider, Lina Döring, Sebastian Lang, Tobias Reggelin, Sebastian Trojahn, Pascal Reusch
- 코드·결과: https://github.com/RaikoPipe/genai4simpy
- 소개 글: @ax_central (Threads, 2026-11-24)

## 풀려는 문제

이산 사건 시뮬레이션(DES)은 높은 전문성과 비용 때문에 **중소 제조기업**에게 먼 이야기였다.

## 방법

- 제조 **이벤트 로그**를 받아 **실행 가능한 SimPy 모델**까지 끝에서 끝까지 자동으로 만드는 **멀티 에이전트** 프레임워크.
- 도구를 쓰는 추론 + **사람이 중간에 검증**(human-in-the-loop).
- 클라우드가 아니라 **로컬에서 도는 공개 모델 Qwen 3.6(27B)** 을 쓴다.

## 결과

- 공개 스마트 팩토리 데이터의 실행 블록 3개로 평가: **평균 절대 백분율 오차 7.9%**.
- 고장률은 세 블록 모두, 처리량은 세 블록 중 둘에서 범위 안에 들었다.
- 로컬 공개 모델로도 클라우드 기반 대안과 비슷한 정확도로 시뮬레이션을 만들 수 있었다.

## 함정 — 충실도의 역설 (fidelity paradox)

**공정 단위 수치를 정확히 뽑아도, 공장 전체의 행동(흐름 시간·처리량)은 어긋날 수 있었다.**
- 원인: 관찰 구간이 잘린 것을 잘못 해석했고, 시스템 수준의 보정이 없었다.
- 결론: 파라미터 추출은 **필요하지만 충분하지 않다**. 행동이 맞는지는 시스템 수준에서 따로 검증해야 한다.

## 참고

- 논문 초록과 Threads 글로 정리했다. 본문과 코드는 보지 않았다.
