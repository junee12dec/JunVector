---
title: "글이 바뀌면 AI도 알아야 한다 — Spring 게시판 RAG의 커밋 이후 색인 (@TransactionalEventListener + 색인 상태)"
date: 2026-11-24
tags: [ai/rag, dev/backend, dev/architecture]
description: "MySQL과 Vector DB는 한 트랜잭션으로 묶을 수 없으니, 글 저장 때 AI 서버를 바로 부르지 않고 커밋 후 이벤트로 색인하고 결과를 색인 상태(INDEXING·READY·FAILED)로 기록한다. READY인 글만 AI 검색 근거로 넘겨, 옛 내용으로 틀리게 답하는 대신 잠깐 보류한다."
source: "https://www.threads.com/@jks2024_/post/DgJI_vSCMwL"
---

# 커밋 이후 색인 — Spring 게시판 RAG의 정합성 맞추기

@jks2024_ (Threads, 2026-11-24). [[board-rag-react-springboot-fastapi-langgraph-one-page|게시판 AI 검색(RAG) 한 장 정리]]의 후속 글로, 첨부 그림 한 장의 내용을 옮겼다.

> MySQL과 Vector DB는 한 트랜잭션으로 묶을 수 없다 → 이벤트 + 색인 상태로 맞춘다.

## BoardService에서 FastAPI를 바로 부르면?

| 문제 | 내용 |
|------|------|
| ① 롤백되면 유령 청크 | MySQL엔 글이 없는데 Vector DB에만 청크가 남는다 |
| ② 트랜잭션이 HTTP 대기 | 색인하는 몇 초 동안 DB 커넥션이 열린 채로 기다린다 |
| ③ AI가 꺼지면 글쓰기 실패 | AI 장애가 게시판 장애로 번진다 |

## 구조

1. **BoardService** (작성·수정·삭제, 작성자 확인 후): MySQL에 저장하고 `indexStatus = INDEXING`, 그리고 "바뀌었다"는 사실만 `publishEvent(BoardIndexEvent)`로 발행한다.
2. **BoardIndexListener**: `@TransactionalEventListener(phase = AFTER_COMMIT)` — **커밋 이후에만 실행**된다 (롤백되면 실행 안 됨). UPSERT / DELETE.
3. **BoardIndexService**: index · remove · reindexAll.
4. **RagClient → FastAPI**: `POST /index` · `DELETE /index/{id}` → Vector DB에서 청크 추가·교체·삭제.
5. **결과 기록**: 성공이면 `READY`, 실패면 `FAILED` + 사유. 커밋이 끝난 뒤라 **새 트랜잭션(`REQUIRES_NEW`)** 으로 UPDATE한다.
   - 삭제는 청크 삭제가 실패해도 괜찮다 — 허용목록에 없어서 검색되지 않는다.

## 색인 상태 — READY만 AI 검색 대상

```
작성·수정 → INDEXING ─(색인 성공)→ READY
                     └(AI 서비스 꺼짐)→ FAILED ─[재색인] /rag/reindex/{id} · /admin/rag/reindex → INDEXING
READY ─(수정)→ 다시 INDEXING (그동안 검색 제외)
```

- **READY 허용목록**: Spring이 AI에 넘기는 글 ID. scope가 "mine"이면 내 글만.
- **근거가 될 수 없는 글**: 삭제된 글, 색인에 실패한 글, 남의 글(내 글만 모드).

## 핵심

- BoardService는 "바뀌었다"는 사실만 이벤트로 → **커밋 후** 리스너가 색인 → 결과는 `indexStatus`에 기록.
- 수정 직후에는 이전 내용으로 틀리게 답하는 대신 **잠깐 보류**한다. **RAG에선 틀린 답보다 보류가 낫다.**
