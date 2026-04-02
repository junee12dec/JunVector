---
title: "Claude Code 에이전트 흐름 시각화 — 유출 소스 기반 분석"
date: 2026-04-02
tags: [ai/claude, dev/agent-design]
description: "유출된 Claude Code 소스를 기반으로 에이전트 전체 흐름을 도식화한 분석. 가짜 도구·감정 감지·언더커버 모드 등 내부 구조를 텍스트보다 훨씬 빠르게 파악할 수 있다."
source: "https://www.threads.com/@yeopo92/post/DWlps8AmCU5?xmt=AQF0NFzRwYDTEraY6LlF5FwTmD1XVpsqJBCxaZbjb8QLOjeLgYZ7pq1wj_Q3pG6mq9Z8KTZ9&slof=1"
---

# Claude Code 에이전트 흐름 시각화 — 유출 소스 기반 분석

유출 분석글 중 가장 실용적인 자료.

회로 기판을 직접 들여다보는 것보다 회로도 도면이 훨씬 이해하기 쉬운 것처럼, **유출된 소스 기반으로 Claude Code 에이전트 흐름 전체를 시각화**해서 정리한 것.

## 주요 내용

- **가짜 도구(fake tools)** 구조
- **감정 감지 정규식** 설계 방식
- **언더커버 모드** 동작 원리

텍스트 분석보다 도식으로 보면 훨씬 빠르게 파악된다.

## 대상

에이전트를 직접 설계해보려는 바이브코더에게 참고 자료로 유용.

## 출처

- [ccunpacked.dev](https://ccunpacked.dev/)
