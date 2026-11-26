---
title: "MCP vs API — 어떤 호출을 할지 누가 정하나: 개발자가 미리 정하는 API, 모델이 실행 중에 고르는 MCP"
date: 2026-11-26
tags: [ai/mcp, dev/backend, learning/resources]
description: "API는 두 시스템 사이의 고정된 계약이라 개발자가 어떤 호출을 언제 할지 미리 정한다. MCP는 그 결정을 뒤집어, 서버가 도구·데이터·프롬프트를 알려 주면 모델이 실행 중에 고른다. 서버 하나만 만들면 모든 MCP 클라이언트가 쓴다."
source: "https://www.threads.com/@techwith.ram/post/DgMJMc9jbtH"
---

# MCP vs API

@techwith.ram (Ramakrushna Mohapatra, Threads, 2026-11-26). 첨부 이미지 제목: "APIs connect apps to services. **MCP connects AI to everything.**" 글은 영어이고 아래는 한국어로 옮겼다.

## 핵심 차이: 결정을 누가 내리나

| | API | MCP |
|---|-----|-----|
| 무엇인가 | 두 시스템 사이의 **고정된 계약** | 서버가 AI 앱에게 자기가 가진 도구·데이터·프롬프트를 알려 주는 표준 |
| 호출을 정하는 쪽 | **개발자**가 어떤 호출을 언제 할지 미리 정한다 | **모델**이 실행 중에 무엇을 쓸지 고른다 |
| 방식 | 특정 엔드포인트를 정해진 형식으로 요청하고 응답을 받는다 | 에이전트가 **실행 중에 도구를 찾는다** (하드코딩 없음) |
| 통합 비용 | 서비스·클라이언트마다 따로 연동 | 서버를 하나 만들면 **모든 MCP 클라이언트**가 쓴다 (Claude, Cursor 등 각각 따로 연동할 필요 없음) |

## 그림 구성

**MCP**
- **MCP host**: 모델을 돌리는 AI 앱
- **MCP clients**: 서버 하나당 하나, host 안에 있다
- **One standard protocol**: 일회성 연동을 대체한다
- **MCP servers**: 어떤 도구나 데이터 소스든 감싼다 → 데이터베이스·파일, 도구·SaaS 앱을 AI host에 노출

**API**
- **Clients**: 웹, 모바일, 데스크톱
- **Fixed endpoints**: `GET /users`, `POST /orders` 같은 고정 주소 (예: `GET /v1`)
- **Servers**: 요청 하나하나를 처리
- **Language-agnostic**: HTTP + JSON, 어떤 스택이든
- **Developer hardcodes**: 모든 호출을 개발자가 미리 코드에 박는다

## 쓰는 법

- 사람이 만든 앱이 정해진 일을 할 때는 API가 맞다 — 무엇을 부를지 알고 있고 결과가 결정적이어야 한다.
- AI가 상황에 따라 필요한 도구를 고르게 하려면 MCP가 맞다.
- 둘은 대립하지 않는다. MCP 서버가 안에서 기존 API를 감싸는 경우가 많다.

## 참고

- 같은 작성자가 "Agentic AI를 처음부터 무료로 배우는" 사이트(agentic-ai-from-scratch.vercel.app)를 소개했지만, 네트워크 정책에 막혀 읽지 못했다.
- 마지막 "쓰는 법" 3줄은 위 비교에서 이어지는 일반적인 해석이고, 글이나 그림에 직접 적힌 내용은 아니다.
