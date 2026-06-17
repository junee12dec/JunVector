---
title: "Graph-R1 — RL로 훈련된 반복적 GraphRAG 추론 시스템 (생각→쿼리→서브그래프→다시 생각)"
date: 2026-05-29
tags: [ai/llm, ai/agent, dev/architecture]
description: "LLM이 그래프를 보며 생각·쿼리·서브그래프 검색·재추론을 반복하는 루프를 GRPO·REINFORCE++·PPO로 RL 훈련시키는 GraphRAG 시스템. 단순 문서 검색을 넘어 관계 기반 다단계 추론을 구현."
source: "https://github.com/LHRLAB/Graph-R1"
---

# Graph-R1 — RL로 훈련된 반복적 GraphRAG 추론 시스템

**GitHub**: https://github.com/LHRLAB/Graph-R1

> "단순 GraphRAG 구현이 아니라, LLM이 그래프를 보면서 생각하고 → 쿼리 만들고 → 서브그래프 검색하고 → 다시 생각하는 루프를 RL로 훈련시키는 방식"

---

## RAG 진화 흐름

```
RAG
  → 문서 chunk 검색 → LLM에 넣기

GraphRAG
  → entity·relation·graph structure 활용

Graph-R1 (Agentic GraphRAG)
  → 반복 추론 루프 + RL 훈련
```

---

## 핵심: 반복 추론 루프

기존 GraphRAG는 그래프 검색을 **한 번** 한다.  
Graph-R1은 이 루프를 **반복**하고 **RL로 학습**시킨다:

1. **생각하기** — 현재 지식으로 추론
2. **쿼리 생성하기** — 부족한 부분 파악 후 쿼리 작성
3. **서브그래프 가져오기** — 관련 subgraph 검색
4. **다시 생각하기** — 새 정보로 추론 갱신
5. **답변하기** — 최종 응답

---

## RL 훈련 구성

| 항목 | 내용 |
|------|------|
| 훈련 알고리즘 | GRPO, REINFORCE++, PPO |
| 기반 모델 | Qwen2.5-3B-Instruct |
| 추론 엔진 | vLLM 기반 QA 실행 |

---

## 저장소 구성 (실전적)

- `knowledge hypergraph construction` — 지식 하이퍼그래프 구축
- `n-ary relation extraction` — 다항 관계 추출
- `retrieval server` — 서브그래프 검색 서버
- `RL training scripts` — 강화학습 훈련 스크립트
- `inference / evaluation setup` — 추론·평가 환경
- `vLLM 기반 QA 실행 구조`

논문 아이디어만이 아니라 **실제 시스템 구성 방법**을 따라갈 수 있는 구조.

---

## 추천 대상

- RAG를 넘어 "추론 가능한 지식 구조"가 필요한 경우
- AI agent를 "그냥 tool calling" 이상으로 보는 경우
- 내부 지식 시스템에 관계·맥락 기반 추론을 넣고 싶은 경우

---

## 관련 노트

- [[cocoindex-realtime-incremental-rag-pipeline]] — 실시간 증분 RAG 파이프라인 (RAG 기초 인프라 맥락)
- [[sia-self-improving-ai-framework-mle-bench]] — RL로 자기 개선하는 에이전트 (Graph-R1의 RL 훈련과 유사한 방향성)
- [[rl-environment-llm-agents-e-t-h-v-s-c-framework]] — LLM 에이전트 RL 환경 E={T,H,V,S,C} (Graph-R1의 RL 설계 맥락)
- [[rowboat-local-ai-coworker-knowledge-graph]] — 지식 그래프 기반 AI 코워커 (지식 그래프 활용 범주)
