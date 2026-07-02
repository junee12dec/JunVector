---
title: "CodeGraph — AI 코딩 에이전트용 코드 지식 그래프 인덱서 (토큰 57% 절감, 31k⭐)"
date: 2026-05-28
tags: [ai/agent, dev/tool, dev/coding, productivity/automation]
description: "프로젝트를 미리 코드 지식 그래프로 인덱싱해 AI 에이전트의 반복적인 파일 읽기를 구조화된 그래프 조회로 대체. 공식 벤치마크 기준 토큰 57% 절감, 비용 35% 절감, 속도 46% 향상."
source: "https://github.com/colbymchenry/codegraph"
---

# CodeGraph — AI 코딩 에이전트용 코드 지식 그래프 인덱서

**GitHub**: https://github.com/colbymchenry/codegraph  
**⭐ 31,000+ stars** / MIT 라이선스  
**100% 로컬 실행**

> "Claude Code, Codex, Gemini, Cursor, OpenCode, AntiGravity, Kiro, Hermes Agent용 사전 인덱싱 코드 지식 그래프"

---

## 왜 필요한가

Claude Code나 Codex가 코드베이스를 이해할 때 매번 `grep`, `read`, `search`로 파일을 뒤지면 **토큰이 계속 소모**된다.  
CodeGraph는 프로젝트를 미리 **코드 지식 그래프로 인덱싱**해두고, AI 에이전트가 파일을 읽는 대신 **구조화된 그래프를 바로 조회**하게 한다.

---

## 공식 벤치마크

| 지표 | 개선 |
|------|------|
| 비용 절감 | **35%** |
| 토큰 절감 | **57%** |
| 속도 향상 | **46%** |
| 툴 호출 감소 | **71%** |

---

## 핵심 기능

| 기능 | 설명 |
|------|------|
| **스마트 컨텍스트 빌딩** | 관련 코드 컨텍스트를 자동으로 구성 |
| **전체 텍스트 검색 (FTS5)** | 빠른 코드 검색 |
| **영향 분석** | "이 함수 바꾸면 어디 영향 가?" 자동 추적 |
| **자동 동기화** | 코드 변경 시 그래프 자동 업데이트 |
| **프레임워크 인식 라우팅** | 프레임워크별 최적화된 탐색 |

---

## 지원 언어 (20개+)

TypeScript / JavaScript / Python / Go / Rust / Java / C# / PHP / Ruby  
C / C++ / Objective-C / Swift / Kotlin / Dart / Lua / Svelte / Vue / Liquid

---

## 설치

```bash
# macOS / Linux
curl -fsSL https://raw.githubusercontent.com/colbymchenry/codegraph/main/install.sh | sh

# npm
npm i -g @colbymchenry/codegraph
```

---

## 활용 시나리오

- "이 기능 어디서 시작돼?" → 함수 호출 그래프 즉시 조회
- "이 함수 바꾸면 어디 영향 가?" → 영향 분석으로 즉시 확인
- 대형 프로젝트에서 AI 코딩 비용 절감 첫 번째 세팅

---

## 관련 노트

- [[claude-codebase-architecture-html-json-prompt]] — Claude로 코드베이스 아키텍처 매핑하는 프롬프트 (유사한 코드 구조 파악 접근)
- [[semble-code-search-mcp-server-for-agents]] — AI 에이전트용 초고속 코드 검색 MCP 서버 (유사한 코드 검색 최적화)
- [[cocoindex-realtime-incremental-rag-pipeline]] — 실시간 증분 RAG 파이프라인 (지식 그래프 구축 기술 맥락)
