---
title: "게시판 AI 검색(RAG) 한 장 정리 — React·Spring Boot·FastAPI(LangChain·LangGraph) 구조"
date: 2026-11-22
tags: [ai/rag, dev/architecture, dev/backend]
description: "Spring Boot 게시판에 AI 검색을 붙이는 구조를 한 장으로 정리한 그림. 화면은 React, 인증·게시판은 Spring Boot, AI 처리는 FastAPI가 맡고, 색인(POST /index)과 질문(POST /ask) 두 흐름으로 나눠 권한 있는 글 안에서만 찾아 출처와 함께 답한다."
source: "https://www.threads.com/@jks2024_/post/DgEB-H-iHJc"
---

# 게시판 AI 검색(RAG) 한 장 정리

@jks2024_ (Threads, 2026-11-22). 첨부 이미지 한 장의 내용을 옮겼다.

> AI가 지어내지 않게, 답의 근거는 내 게시글에서.

## 역할 나누기

| 계층 | 맡는 일 |
|------|---------|
| **React** | 글쓰기·질문 화면 |
| **Spring Boot** | JWT 인증, 게시판 API |
| **FastAPI** | AI 처리 (LangChain·LangGraph) |

Spring Boot와 FastAPI는 **REST API**로 주고받는다.

## [색인] 글을 쓰거나 고칠 때 자동으로

`Spring Boot → FastAPI  POST /index  { boardId, title, content, owner }`

| 단계 | 내용 | 담당 |
|------|------|------|
| 게시글 | 제목 + 본문 | Spring Boot |
| 분할 | 500자씩, 80자 겹침 | TextSplitter |
| 임베딩 | 1536차원 벡터 | Embeddings |
| 저장 | MongoDB Atlas에 boardId·title·owner와 함께 | VectorStore |

## [질문] 답을 찾을 때

`Spring Boot → FastAPI  POST /ask  { question } → { answer, sources }`

LangGraph가 각 단계를 노드로 두고 순서대로 실행한다.

1. **질문** — Spring Boot에서 전달
2. **임베딩** — 질문도 같은 벡터 공간으로 (Embeddings)
3. **유사도 검색** — **허용된 글 목록 안에서만** (Retriever)
4. **상위 k개** — `RAG_TOP_K = 4`, 프롬프트로 (PromptTemplate)
5. **LLM 생성** — 근거 청크 + 질문 (ChatModel)
6. **답변** — 출처 `[#n]`과 함께, Spring Boot → React

**LangChain = 부품, LangGraph = 실행 순서.**

## 눈여겨볼 점

- 권한 처리를 검색 단계에서 한다: 색인할 때 `owner`를 함께 저장하고, 검색은 그 사용자에게 **허용된 글 안에서만** 한다. 답변에 남의 비공개 글이 섞이지 않는다.
- 기존 Spring Boot 서비스는 인증·게시판을 그대로 맡고, AI 처리만 FastAPI로 떼어 REST로 잇는다. 기존 백엔드를 바꾸지 않고 AI 기능을 붙이는 구조다.
