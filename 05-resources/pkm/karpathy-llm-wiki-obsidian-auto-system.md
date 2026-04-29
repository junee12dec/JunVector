---
title: "Karpathy LLM 위키 — Obsidian 노트를 자동 연결하는 AI 지식 시스템"
date: 2026-04-08
tags: [ai/pkm, ai/llm, productivity/knowledge-management, productivity/obsidian]
description: "카파시가 운영 중인 LLM 위키 시스템. 자료를 넣으면 AI가 위키 페이지를 자동 생성하고, 새 자료 추가 시 기존 문서 10-15개를 업데이트하며 백링크도 자동 생성한다."
source: "https://www.threads.com/@aboutcorelab/post/DW32d-Vk5GM"
---

# Karpathy LLM 위키 — Obsidian 노트를 자동 연결하는 AI 지식 시스템

Obsidian에 노트를 쌓아놓고 다시 안 보는 분들에게 꼭 필요한 방법.

AI의 아버지 **안드레 카파시**가 공개한 'LLM 위키' 시스템 — 논문이든 기사든 자료만 던져주면 AI가 알아서 위키를 만들고, 정리하고, 연결까지 해준다.

## 3가지 핵심 기능

1. **자동 위키 페이지 생성** — 자료를 넣으면 AI가 자동으로 위키 페이지를 생성
2. **자동 업데이트** — 새 자료 추가 시 기존 문서 10-15개를 알아서 업데이트
3. **자동 백링크** — 문서 간 연결(백링크)도 자동으로 생성

> 카파시 본인이 100개 문서, 40만 단어 규모로 실제 운영 중

## 시스템 구조 (Karpathy Gist 기준)

3계층 아키텍처:

| 계층 | 내용 |
|------|------|
| **Raw Sources** | 변경 불가 원본 자료 (논문, 기사, 데이터) |
| **The Wiki** | LLM이 관리하는 마크다운 페이지 (요약, 정의, 교차 참조) |
| **The Schema** | 구조·규칙·워크플로우 정의 파일 (CLAUDE.md와 동일 개념) |

## 3가지 핵심 오퍼레이션

- **Ingest**: 새 자료 → 핵심 추출 → 관련 위키 페이지 업데이트 → 교차 참조 유지
- **Query**: raw 문서 검색 대신 위키 먼저 탐색 → 답변을 새 위키 페이지로 저장 가능
- **Lint**: 주기적 점검 — 모순, 오래된 내용, 고아 페이지, 누락된 링크 정리

## RAG와의 차이

기존 RAG는 **매번 처음부터 재발견**한다. 지식이 축적되지 않는다.

LLM 위키는 **지식이 복리로 쌓인다** — 새 자료가 들어올수록 기존 위키가 더 풍부해진다.

## 참고 링크

- [Karpathy Gist — 상세 구현 가이드](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
- [코어랩 해설 (한국어)](https://aboutcorelab.com/llm-wiki-karpathy/)
- [[karpathy-knowledge-base-llm-wiki|Karpathy의 Knowledge Base — 개념 정리]]
- [[llm-knowledge-base-team-wiki-practice|LLM Knowledge Base 실전 구현 — 팀 위키로 확장]]
