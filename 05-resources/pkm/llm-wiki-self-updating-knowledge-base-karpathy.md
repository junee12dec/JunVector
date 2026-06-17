---
title: "LLM Wiki — 문서를 자기 갱신 위키로 만드는 Karpathy 패턴"
date: 2026-04-29
tags: [ai/llm, pkm/knowledge-base, agent/tool]
description: "RAG처럼 매번 원문을 재검색하는 대신, LLM이 문서를 읽어 구조화된 마크다운 위키를 점진적으로 구축·유지하는 패턴. Karpathy가 제안했고, 다수의 오픈소스 구현체가 등장했다."
source: "https://www.threads.com/@githubprojects/post/DXtbMfbFAEi"
---

# LLM Wiki — 문서를 자기 갱신 위키로 만드는 Karpathy 패턴

**GitHub**: https://github.com/nashsu/llm_wiki (+ 여러 구현체)  
**원 아이디어**: Andrej Karpathy

---

## 핵심 개념

기존 RAG는 질문할 때마다 원문을 다시 검색·합성한다.  
LLM Wiki는 다르다 — **LLM이 직접 위키를 쓰고, 그 위키를 계속 최신화**한다.

> 원문이 아니라 이미 합성된 위키에서 답변 → 더 빠르고 일관된 응답

---

## 3가지 핵심 오퍼레이션

### 1. Ingest (수집)
- LLM이 소스 자료를 읽고 요약 페이지를 작성
- 관련 페이지를 업데이트하고 상호 링크 추가
- 모순되는 내용은 플래그 처리
- 문서 한 편이 위키 전체에 걸쳐 업데이트를 유발

### 2. Query (질의)
- 원문 문서가 아닌 **이미 합성된 위키**에서 답변
- 구조화된 지식 → 더 정확하고 일관된 응답

### 3. Lint (검증)
- 주기적으로 LLM이 위키 전체를 감사
- 모순 탐지 / 고아 페이지 발견 / 링크 없는 개념 찾기
- 사람이 하기 싫은 유지보수를 LLM이 대신 수행

---

## RAG와의 차이

| 항목 | 기존 RAG | LLM Wiki |
|------|----------|----------|
| 답변 소스 | 매번 원문 재검색 | 사전 합성된 위키 |
| 지식 구조 | 비정형 | 상호 링크된 마크다운 |
| 유지보수 | 수동 | LLM 자동 (Lint) |
| 일관성 | 낮음 | 높음 |

---

## 주요 구현체

- [nashsu/llm_wiki](https://github.com/nashsu/llm_wiki) — 크로스 플랫폼 데스크탑 앱
- [kenhuangus/llm-wiki](https://github.com/kenhuangus/llm-wiki)
- [Pratiyush/llm-wiki](https://github.com/Pratiyush/llm-wiki) — Claude Code·Codex·Cursor 세션 연동
- [wac81/LLM_wiki](https://github.com/wac81/LLM_wiki) — Obsidian 기반 ("LLM이 사서, Obsidian이 IDE, Wiki가 코드베이스")

---

## 활용 아이디어

- 개인 PKM(제텔카스텐)에 LLM이 자동으로 링크 추가
- 코드베이스 문서를 위키로 자동 관리 (Claude Code + llm-wiki)
- 리서치 노트를 축적해서 자기 갱신 지식 베이스 구축
