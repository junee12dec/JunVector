---
title: "ai-knowledge-graph — LLM으로 비정형 텍스트를 지식 그래프로 변환하는 오픈소스"
date: 2026-09-07
tags: [ai/llm, dev/knowledge-graph, ai/rag]
description: "비정형 텍스트를 LLM을 활용해 자동으로 지식 그래프로 변환하는 오픈소스 프로젝트. 엔티티와 관계를 추출해 그래프 구조로 저장하며, RAG 시스템이나 지식 관리에 활용할 수 있다."
source: "https://github.com/robert-mcdermott/ai-knowledge-graph"
---

# ai-knowledge-graph — LLM으로 비정형 텍스트를 지식 그래프로 변환

GitHub: [robert-mcdermott/ai-knowledge-graph](https://github.com/robert-mcdermott/ai-knowledge-graph)

블로그 해설: [digitalbourgeois.tistory.com/m/3623](https://digitalbourgeois.tistory.com/m/3623)

## 핵심 아이디어

**비정형 텍스트 → LLM → 지식 그래프**

LLM을 활용해 자유 형식 텍스트에서 엔티티(개념·사람·사물)와 그 사이의 관계를 추출한 뒤, 그래프 구조로 저장하는 방식.

## 활용 시나리오

- 대량의 문서에서 개념 간 관계를 자동으로 파악
- RAG 시스템의 지식 베이스로 활용
- 사내 문서·위키를 구조화된 지식으로 변환
- 검색 대신 그래프 탐색으로 관련 정보 연결

## 관련 개념

- **GraphRAG**: 벡터 검색 대신 지식 그래프를 활용한 RAG 방식
- **엔티티 추출**: LLM이 텍스트에서 명사·개념·관계를 식별
- **트리플(Triple)**: 주어-서술어-목적어 형태로 지식을 표현

## 참고

- 접근 방식이 [[pageindex-reasoning-rag-no-vectordb|PageIndex]]나 [[code-graph-rag-monorepo-knowledge-graph|code-graph-rag]]와 비슷한 계열
- 벡터 DB 없이 관계 기반으로 검색하는 흐름과 맥을 같이 함
