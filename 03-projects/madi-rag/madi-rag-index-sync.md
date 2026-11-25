---
title: "madi RAG — 근거가 바뀌면 AI도 알게 하기 (첫 프로젝트 계획)"
date: 2026-11-25
tags: [ai/rag, ai/agent, dev/architecture]
description: "madi에 RAG를 붙이고, 위키의 근거(코드·문서·DB)가 바뀌면 색인과 상태를 갱신해 AI가 옛 내용으로 답하지 않게 하는 프로젝트의 계획. @jks2024_의 Spring 게시판 RAG 설계(커밋 이후 색인, 색인 상태, READY 허용목록)를 madi 구조에 대응시켰다."
---

# madi RAG — 근거가 바뀌면 AI도 알게 하기

> 볼트의 계획 문서다. madi 레포 자체는 아직 고치지 않았다.

## 목표

1. madi에 RAG(근거를 찾아 답하는 검색)를 붙인다.
2. 근거(코드·문서·DB)가 바뀌면 AI도 알게 한다 — 옛 내용으로 틀리게 답하지 않게.

## 참고한 설계

@jks2024_의 Spring 게시판 RAG 글 두 편:
- [[board-rag-react-springboot-fastapi-langgraph-one-page|게시판 AI 검색(RAG) 한 장 정리]] — 역할 분담, 색인·질문 흐름, 허용된 글 안에서만 검색
- [[rag-index-after-commit-transactional-event-listener|커밋 이후 색인]] — 커밋 후 이벤트로 색인, 색인 상태(INDEXING·READY·FAILED), READY만 근거, "틀린 답보다 보류"

## 글의 설계 → madi 대응 (초안)

| 글 (게시판) | madi |
|---|---|
| 게시글 저장 → 커밋 후 색인 이벤트 | 위키 페이지 `ingest`·수정 → 색인 갱신 |
| `indexStatus` (INDEXING·READY·FAILED) | 페이지 `status` (draft·approved·stale)와 색인 상태 |
| READY만 허용목록 | approved(+ 최신 색인)만 query 근거 |
| 수정 중엔 잠깐 보류 | 근거가 바뀌어 `stale`이면 답변에서 빼거나 표시 |

madi가 이미 가진 것:
- 페이지 frontmatter의 `status`(draft·approved·stale)와 `sources`(코드 commit, 문서 제목·수정일, `db: <테이블>@<조회일>`)
- `lint`가 근거 변경을 찾아 `stale`로 바꾸는 흐름
- `query`가 draft·stale 근거를 답변에 표시하는 규칙

→ 글의 "색인 상태 + READY 허용목록"은 madi의 "status + approved만 근거"와 같은 생각이다. 비어 있는 것은 **근거가 바뀐 순간 그것을 알아채는 장치**(글의 커밋 후 이벤트에 해당)와, 벡터 색인을 둔다면 **그 색인의 상태**다.

## 먼저 정할 것 — 벡터 DB가 필요한가

[[dr-dci-agentic-search-dynamic-workspace-expansion|DR-DCI 딥다이브]]에서는 "madi의 위키·코드는 규모가 작아 `index.json`으로 고른 뒤 `rg`로 찾는 지금 방식이 이미 DCI이고 충분하다"고 결론 냈다. 원래 DCI 논문도 색인 없이 원본을 직접 뒤지는 쪽이 더 낫다고 보고했다.

두 갈래:
- **A. 벡터 DB를 들인다**: 글의 구조(청크·임베딩·Vector DB·색인 상태)를 그대로 옮긴다. 위키가 커지거나 의미 검색이 필요할 때 맞다. 사내 PC에 임베딩 모델·Vector DB를 두는 부담이 생긴다.
- **B. 지금 구조에 "근거 변경 → 상태 갱신"만 붙인다**: 벡터 색인 없이, 근거가 바뀐 것을 알아채 페이지를 `stale`로 바꾸고 query 근거에서 빼는 장치만 만든다. 목표 2를 먼저 이룬다.

## 남은 질문

- A와 B 중 어디서 시작할지 (위키 규모와 "근거 없음" 빈도로 판단)
- 근거 변경을 알아채는 시점: 커밋 훅(git post-commit), `/status`·`/next` 실행 때, 아니면 주기 실행
- DB 근거(`db: <테이블>@<조회일>`)의 변경을 어떻게 감지할지 (madi의 schema drift 아이디어와 연결)
- 보안 문서 근거(파일 수정일 기반 변경 감지, DR-DCI 딥다이브 설계안)를 이 장치에 함께 넣을지
