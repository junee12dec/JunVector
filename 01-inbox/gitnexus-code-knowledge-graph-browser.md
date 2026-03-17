---
title: "GitNexus — 브라우저에서 즉시 실행되는 코드 지식 그래프 + Graph RAG 에이전트"
date: 2026-03-17
tags: [dev/tools, ai/rag, dev/code-analysis]
description: "GitHub 레포나 ZIP을 드래그앤드롭하면 브라우저에서 코드 지식 그래프와 Graph RAG 에이전트가 즉시 생성된다. 서버·설치 없이 낯선 레포 구조를 빠르게 파악할 수 있다."
source: "https://github.com/abhigyanpatwari/GitNexus"
---

# GitNexus — 브라우저에서 즉시 실행되는 코드 지식 그래프 + Graph RAG 에이전트

GitHub 레포나 ZIP 파일을 브라우저에 드롭하면 코드 지식 그래프와 Graph RAG 에이전트가 즉시 생성된다. 기존 도구들과 달리 서버 세팅이나 IDE 플러그인 없이 브라우저 안에서 전부 동작한다.

## 핵심 차별점

- **완전 클라이언트 사이드** — 서버 없이 브라우저 안에서 전부 실행
- **드래그앤드롭** — ZIP 드롭 즉시 지식 그래프 생성
- **Pre-structured response** — 전통적 그래프 RAG와 달리 필요한 정보를 한 번에 제공 → 토큰 효율↑

## 두 가지 사용 방식

| 방식 | 설명 |
|------|------|
| **웹 UI** | 브라우저에 ZIP 드롭 → 즉시 탐색 (설치 불필요) |
| **CLI + MCP** (권장) | 로컬 레포 인덱싱 후 Cursor·Claude Code 등 편집기에 MCP 서버로 연결 |

## 인덱싱 파이프라인

1. **구조 분석** — 파일·폴더 관계 매핑
2. **파싱** — Tree-sitter AST로 함수·클래스 추출
3. **해석** — 임포트, 함수 호출, 상속 관계 추적
4. **클러스터링** — 관련 심볼을 기능 커뮤니티로 그룹화
5. **프로세스 추적** — 진입점부터 실행 흐름 매핑

## MCP 도구 7종

- `query` — 하이브리드 검색 (BM25 + 의미론적 + RRF)
- `impact` — 변경의 영향 범위 분석
- `context` — 심볼의 360도 참조 뷰
- `detect_changes` — Git diff 기반 영향 매핑
- `rename` — 다중 파일 이름 변경

## 지원 언어

TypeScript, JavaScript, Python, Java, Kotlin, C#, Go, Rust, PHP, Ruby, Swift, C, C++
