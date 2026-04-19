---
title: "Graphify — 코드 폴더를 즉시 쿼리 가능한 지식 그래프로 변환"
date: 2026-04-15
tags: [dev/knowledge-graph, ai/tools, dev/llm-tooling]
description: "Karpathy의 LLM Wiki 방식의 토큰 과소비 문제를 해결하는 하이브리드 도구. 기계적 전처리로 지식 뼈대를 먼저 추출한 뒤 에이전트에게 넘겨 효율을 극대화한다."
source: "https://www.threads.com/@limedaddy_8924/post/DXEhIISFCPt"
---

# Graphify — 코드 폴더를 즉시 쿼리 가능한 지식 그래프로 변환

> "Turn any folder of code into a queryable knowledge graph instantly"

**사이트**: https://osp.fyi/graphify  
**유튜브 튜토리얼**: https://youtu.be/s15ojX1P4NY

---

## 등장 배경: Karpathy LLM Wiki의 한계

Karpathy의 LLM Wiki는 강력하지만 **모든 작업을 에이전트가 처리**하다 보니 토큰 소모가 너무 크다.

같은 질문을 반복할 때마다 수십 개 파일을 다시 읽는 비효율이 발생한다.

## Graphify의 해결책: 하이브리드 전략

```
기계적 전처리 (저비용) → 지식 뼈대 추출 → 에이전트에게 전달 (고효율)
```

- **1단계**: 기계적 전처리로 코드/문서의 구조적 뼈대를 먼저 추출
- **2단계**: 추출된 뼈대를 그래프 형태로 인덱싱
- **3단계**: 에이전트는 전체 파일 대신 그래프를 탐색해 답변

→ 에이전트가 처음부터 파일 스캔하는 것 대비 **토큰 대폭 절감**

## 주요 기능

- 코드 폴더 → 쿼리 가능한 지식 그래프로 즉시 변환
- 그래프 시각화 지원
- 자연어 질의(query) 가능

## 튜토리얼 커버 내용

개념 → 설치 → 실습 → 그래프 시각화 → 질의 전 과정 진행  
(유튜브: https://youtu.be/s15ojX1P4NY)

---

## 관련 링크

- 공식 사이트: https://osp.fyi/graphify
- Threads (@githubprojects): https://www.threads.com/@githubprojects/post/DXKLpooGGx3
- Threads (@limedaddy_8924): https://www.threads.com/@limedaddy_8924/post/DXEhIISFCPt
