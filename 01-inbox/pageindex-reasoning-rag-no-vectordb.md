---
title: "PageIndex — 벡터DB·청킹 없이 동작하는 Reasoning 기반 RAG 오픈소스"
date: 2026-07-21
tags: [ai/rag, dev/ai-infra, research/llm]
description: "임베딩·청킹·벡터DB 없이 문서 구조를 계층형 트리로 파싱하고 LLM이 목차처럼 추론하며 탐색하는 새로운 방식의 RAG. '유사도 ≠ 관련성' 문제를 해결한다."
source: "https://github.com/VectifyAI/PageIndex"
---

# PageIndex — 벡터DB·청킹 없이 동작하는 Reasoning 기반 RAG 오픈소스

GitHub: [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)

참고: [Threads @mori_mement0](https://www.threads.com/@mori_mement0/post/DbK46BUGAAn) · [Threads @stone.ai.suk](https://www.threads.com/@stone.ai.suk/post/DbK8bM4H6J2)

## 핵심 아이디어

> **"유사도(Similarity) ≠ 관련성(Relevance)"**

기존 RAG의 벡터 유사도 검색은 의미적으로 가깝지만 실제로 관련 없는 내용을 가져오는 한계가 있다. PageIndex는 AI가 사람처럼 **목차를 따라가며** 필요한 정보를 찾는 방식으로 이를 해결한다.

- **기존 RAG**: "비슷한 문장"을 찾는 데 강함
- **PageIndex**: 문서의 계층 구조를 따라가며 **여러 곳에 흩어진 정보를 연결**해 정확한 답을 도출

## 동작 방식

```
문서 입력
  → 문서 구조 분석
  → 계층형 트리(Index) 생성
  → LLM이 트리를 따라 추론
  → 필요한 내용만 정확하게 탐색
```

기존 RAG처럼 문서를 잘게 자르는(Chunking) 대신, 구조 자체를 인덱싱하고 LLM이 추론하며 탐색한다.

## 주요 기능

- 벡터DB 없이 RAG 구축
- Chunking 없이 문서 처리
- 계층형 트리 인덱스 생성
- LLM 기반 추론형 검색
- PDF 등 장문 문서 최적화
- MCP·API 지원
- GraphRAG와 함께 활용 가능
- MIT 오픈소스

## 최적 활용 분야

금융 보고서, 법률 문서, 기술 문서처럼 **구조가 명확한 장문 문서**에서 강점을 발휘한다.
