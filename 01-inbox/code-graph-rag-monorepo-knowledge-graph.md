---
title: "code-graph-rag — 모노레포를 지식 그래프로 만들어 AI가 자연어로 코드를 검색·편집하는 RAG"
date: 2026-08-08
tags: [dev/tools, ai/rag, dev/code-analysis]
description: "Tree-sitter로 다국어 코드베이스를 파싱해 Memgraph 지식 그래프를 구성하고, 자연어 쿼리로 함수·클래스 검색·수정·최적화까지 처리하는 모노레포 전용 RAG CLI. Python·TS·Rust·Go 등 13개 언어 지원."
source: "https://github.com/vitali87/code-graph-rag"
---

# code-graph-rag — 모노레포 AI 코드 검색·편집 RAG

GitHub: [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag)  
별 3,200 / 포크 533 / 라이선스: MIT

> "The ultimate RAG for your monorepo."

## 무엇을 해주는가

대규모·다언어 모노레포에서 AI가 코드 전체의 **맥락과 구조적 의존성**을 정확히 파악하도록 지식 그래프를 구성. 이후 자연어로 함수 검색·코드 편집·최적화까지 처리.

## 아키텍처

```
코드베이스
  → Tree-sitter 파서 (함수·클래스·모듈·관계 추출)
  → Memgraph 지식 그래프 저장
  → 자연어 → Cypher 쿼리 변환
  → 그래프 결과 반환 (RAG CLI)
```

## 주요 기능

| 기능 | 설명 |
|------|------|
| **자연어 쿼리** | "인증 플로우 요약해줘" → 코드 구조 기반 답변 |
| **소스 검색** | 함수·클래스·메서드를 이름 또는 의도로 검색 |
| **AST 기반 편집** | 변경 전 미리보기 제공하는 "외과적 패칭" |
| **코드 최적화** | 언어 모범 사례 또는 커스텀 표준 기준으로 최적화 |
| **데드 코드 탐지** | 진입점에서 호출·참조 경로 역추적 |
| **구조적 검색/교체** | ast-grep 기반 AST 패턴 찾기·바꾸기 |

## 지원 언어

**완전 지원**: Python, TypeScript, TSX, JavaScript, Rust, Go, Java, C, C++, C#, PHP, Lua, Dart  
**개발 중**: Scala / **플러그인**: Ruby

## 빠른 시작

```bash
uv tool install "code-graph-rag[treesitter-full,semantic]"
cgr daemon up                                       # Memgraph + Qdrant 스택 시작
cgr start --repo-path /path/to/repo --update-graph  # 레포 파싱 & 쿼리
```

## 활용 시나리오

- 처음 보는 대규모 모노레포 구조 파악
- "이 기능 이미 구현된 함수 있어?" → 리스트 뽑고 바로 호출
- 여러 언어 혼재 환경에서 의존성 추적
- AI와 블록 맞추듯 기능 구현 → 개발 속도 대폭 향상

## 관련 노트

- [[gitnexus-code-knowledge-graph-browser|GitNexus]] — 브라우저 기반 코드 지식 그래프, 설치 없이 간단 사용 (서로 다른 용도)
- [[pageindex-reasoning-rag-no-vectordb|PageIndex]] — 벡터DB 없는 Reasoning RAG, 다른 접근의 RAG 설계
