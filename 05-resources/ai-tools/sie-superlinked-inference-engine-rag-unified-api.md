---
title: "SIE — 임베딩·리랭킹·추출을 하나로 통합한 RAG 추론 API (Superlinked)"
date: 2026-05-15
tags: [ai/rag, dev/tool, ai/embedding, dev/api]
description: "RAG 파이프라인에서 임베딩·리랭킹 서버를 따로 세팅할 필요 없이 85개 이상의 모델을 단일 API로 제공하는 오픈소스. OpenAI 규격 호환으로 기존 코드 수정 없이 로컬→프로덕션 배포 가능."
source: "https://www.threads.com/@feelfree_ai/post/DYeQ_XbAey2"
---

# SIE — 임베딩·리랭킹·추출을 하나로 통합한 RAG 추론 API

**GitHub**: https://github.com/superlinked/sie  
**⭐ 1,900 stars** / 157 forks  
**라이선스**: Apache 2.0

RAG 파이프라인에서 임베딩 서버, 리랭킹 서버를 따로 세팅하는 번거로움을 없앤다.  
85개 이상의 모델을 단일 통합 API(SIE)로 제공.

---

## 3가지 핵심 함수

| 함수 | 역할 |
|------|------|
| `Encode` | 밀집 임베딩 생성 |
| `Score` | 문서 관련성 기반 리랭킹 |
| `Extract` | 제로샷 명명된 개체 인식(NER) |

---

## 설치

```bash
# 서버
pip install sie-server
sie-server serve

# SDK
pip install sie-sdk

# Docker (CPU / GPU CUDA12 이미지 제공)
docker pull superlinked/sie
```

---

## 지원 모델 (85개+)

| 카테고리 | 대표 모델 |
|----------|-----------|
| 밀집 임베딩 | Stella v5, BGE-M3 |
| 희소 임베딩 | SPLADE v3 |
| 비전 | SigLIP, ColQwen2.5, Florence-2 |
| 리랭커 | BGE-reranker |
| 추출기 | GLiNER |

밀집 / 희소 / 다중 벡터 / 비전 / 리랭커 / 추출기 아키텍처 전부 지원.

---

## OpenAI 호환

`/v1/embeddings` 엔드포인트를 OpenAI 규격으로 제공.  
→ **기존 코드 수정 없이** 로컬 환경 그대로 프로덕션 배포 가능.

---

## 지원 프레임워크·벡터 DB

**LLM 프레임워크**: LangChain, LlamaIndex, Haystack, DSPy, CrewAI  
**벡터 DB**: Chroma, Qdrant, Weaviate

---

## 기술 스택

Python 76.3% / Rust 16.3% / TypeScript 6.9%

---

## 관련 노트

- [[cocoindex-realtime-incremental-rag-pipeline]] — 실시간 증분 RAG 데이터 파이프라인 (SIE와 함께 쓸 수 있는 파이프라인 엔진)
