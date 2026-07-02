---
title: "LEANN — 벡터 DB 저장 공간 97% 절감, 로컬 완전 프라이빗 RAG"
date: 2026-06-17
tags: [dev/vector-db, ai/rag, dev/open-source]
description: "그래프 기반 선택적 재계산 기술로 6천만 개 텍스트 청크를 201GB→6GB로 압축. 클라우드·GPU 없이 노트북에서 실행되는 오픈소스 벡터 DB."
source: "https://github.com/StarTrail-org/LEANN"
---

# LEANN — 벡터 DB 저장 공간 97% 절감, 로컬 완전 프라이빗 RAG

## 한 줄 요약

기존 벡터 데이터베이스 대비 저장 공간 97% 절감. 클라우드·GPU 없이 표준 노트북에서 실행.

---

## 핵심 성능

| 데이터셋 | 기존 방식 | LEANN | 절감율 |
|---------|---------|-------|--------|
| Wikipedia (6천만 청크) | 201GB | 6GB | 97% |
| 메시지 (40만 청크) | 1.8GB | 64MB | 97% |
| 이메일 (78만 청크) | 2.4GB | 79MB | 97% |

정확도 손실 없음.

---

## 핵심 기술

- **그래프 기반 선택적 재계산**: 인덱스에 벡터를 저장하는 대신 필요할 때만 재계산
- **고차수 보존 가지치기**: HNSW 그래프 구조를 유지하면서 불필요한 노드 제거
- 백엔드: HNSW, DiskANN

---

## 주요 활용 사례

- **이메일 검색**: Apple Mail 780만 청크 → 78MB
- **브라우저 히스토리**: Chrome 방문 기록 의미론적 검색
- **메시지 검색**: WeChat, iMessage, ChatGPT, Claude 대화 색인
- **코드 RAG**: AST 인식 청킹 (Python, Java, C#, TypeScript)
- **MCP 통합**: Slack, Twitter 등 실시간 데이터 연동

---

## 설치 및 사용

```bash
# 설치
uv pip install leann

# 인덱스 구축
leann build my-docs --docs ./documents

# 검색
leann search my-docs "질문 내용"

# 대화형 채팅
leann ask my-docs --interactive
```

LLM 지원: OpenAI, Ollama, HuggingFace, Anthropic  
플랫폼: Ubuntu, Arch, RHEL, macOS, Windows

---

## 왜 중요한가

기존 벡터 DB(Pinecone, Weaviate 등)는 대규모 임베딩 저장에 클라우드와 고사양 서버가 필요했다.  
LEANN은 이 전제를 깨고 **개인 기기에서 수천만 규모의 RAG**를 가능하게 한다.  
프라이버시 민감 데이터(이메일, 메시지, 문서)를 클라우드 없이 색인·검색할 수 있다는 점이 실용적 가치의 핵심.

---

## 링크

- GitHub: https://github.com/StarTrail-org/LEANN
