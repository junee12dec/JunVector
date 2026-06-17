---
title: "wiki-obsidian-ggq — PDF·HWP·이미지·OCR·벡터 검색을 한 번에 통합한 한국형 Obsidian LLM 위키"
date: 2026-06-05
tags: [pkm/obsidian, ai/llm, pkm/knowledge-management, dev/tool]
description: "링크나 파일을 주고 '내 위키로 만들어줘' 한 마디면 PDF·HWP·이미지·OCR까지 처리해 자동 벡터라이즈·위키 컴파일까지 해주는 Obsidian 기반 개인 지식베이스 템플릿. 한국어 OCR 최고 정확도(0.907)를 지원한다."
source: "https://github.com/ggqgga/wiki-obsidian-ggq"
---

# wiki-obsidian-ggq — 한국형 Obsidian LLM 위키 올인원 템플릿

**GitHub**: https://github.com/ggqgga/wiki-obsidian-ggq  
**⭐ 6 stars** (신규 오픈소스)  
**작성자**: @ggq1092

> "링크주거나 파일넣거나 파일위치주고 '내 위키로 만들어줘' 라고 말하면 벡터라이즈까지 해줘서 검색도 완전빠름"

---

## 설치 방법

Claude Code, Codex, Antigravity에 링크를 주고 설치 요청하면 된다:

```
https://github.com/ggqgga/wiki-obsidian-ggq 설치해줘
```

---

## 지원 입력 포맷

PDF · HWP · 이미지(OCR) · 웹 아티클 · YouTube · 논문 · 책 · GitHub 저장소 · 소셜미디어 · 뉴스

**한국어 OCR**: OpenDataLoader PDF (Apache 2.0, 한컴 제공) — 벤치마크 1위 정확도 **0.907**

---

## 3계층 아키텍처

```
원자료 (raw materials)
  ↓ AI 컴파일
Wiki (AI가 편집·유지)
  ↓
최종 산출물 (outputs)
```

RAG처럼 매번 재발견하지 않고, **한 번 컴파일된 지식이 계속 누적**된다.

---

## 검색 방식

| 방식 | 특징 |
|------|------|
| 하이브리드 | BM25 + 벡터 + 리랭킹 |
| grep | 키워드 검색 |
| 그래프 | Graphify 기반 토폴로지 탐색 |

**Graphify**: 임베딩 없이 커뮤니티 탐지 방식으로 지식 그래프 구성

---

## NotebookLM 연동

- 브리프·팟캐스트·슬라이드 자동 생성
- Obsidian Web Clipper로 웹 클리핑

---

## 예정 기능

반응 좋으면 **원클릭 하네스 루프 프로그램** 추가 공개 예정

---

## 관련 노트

- [[llm-wiki-self-updating-knowledge-base-karpathy]] — LLM Wiki의 원리 (이 템플릿의 이론적 기반)
- [[obsidian-claude-llmwiki-graphrag-agent-guide]] — Obsidian + Claude로 LLM Wiki·GraphRAG 구축 가이드 (동일 접근법)
- [[obsidian-graph-view-5-plugins-comparison]] — Obsidian 그래프뷰 5종 비교 (Graphify 맥락)
- [[openkb-llmwiki-llm-knowledge-base-tools]] — openkb·llmwiki 도구 (같은 LLM Wiki 생태계)
- [[cocoindex-realtime-incremental-rag-pipeline]] — 실시간 증분 RAG 파이프라인 (벡터 검색 인프라 맥락)
