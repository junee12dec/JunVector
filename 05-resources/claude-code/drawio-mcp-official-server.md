---
title: "draw.io 공식 MCP 서버 — Claude에게 말하면 다이어그램이 바로 나온다"
date: 2026-04-03
tags: [ai/claude, tool/mcp, dev/diagram]
description: "draw.io가 공식 MCP 서버를 출시해 Claude에게 자연어로 요청하면 아키텍처·플로우차트·ERD가 바로 생성된다. 설치 없이 원격 서버만 추가해도 대화 안에 다이어그램이 인라인 렌더링된다."
source: "https://www.threads.com/@jokerburg.builder/post/DWq7KQoEzYc"
---

# draw.io 공식 MCP 서버 — Claude에게 말하면 다이어그램이 바로 나온다

**GitHub**: https://github.com/jgraph/drawio-mcp

draw.io가 공식 MCP 서버를 출시했다. Claude에게 자연어로 요청하면 아키텍처·플로우차트·ERD·조직도가 바로 생성된다.

---

## 기존 방식의 문제

아키텍처 설계, 플로우차트, 조직도를 AI에게 요청하면 텍스트나 코드로만 돌아왔다.  
그걸 다시 도구에 옮기는 건 사람 몫이었다.

MCP(Model Context Protocol)는 AI가 외부 도구를 직접 호출할 수 있게 해주는 구조다.  
draw.io가 이 연결을 공식으로 지원하기 시작했다.

---

## 세 가지 사용 방식

| 방식 | 특징 |
|------|------|
| **MCP App Server** | 설치 불필요. Claude에 원격 MCP 서버 주소만 추가. 대화 안에 다이어그램이 인라인으로 바로 렌더링 |
| **MCP Tool Server (로컬)** | 터미널에서 명령어 한 줄 실행. 브라우저에서 에디터가 직접 열림. XML·CSV·Mermaid 형식 지원 |
| **Project Instructions** | 아무것도 설치 안 해도 됨. Claude Project에 지침만 붙여넣으면 Claude가 Python으로 URL 생성 |

---

## 사용법

Claude 설정 → MCP 서버 추가 → draw.io 공식 서버 주소 입력

그 다음은 그냥 말하면 된다:

- "우리 팀 온보딩 플로우 다이어그램 그려줘"
- "마이크로서비스 아키텍처 시각화해줘"
- "이 데이터베이스 스키마 ERD로 만들어줘"

MCP Apps를 지원하는 환경에서는 다이어그램이 대화 안에 인터랙티브하게 바로 나타난다.

---

## 왜 중요한가

draw.io는 전 세계에서 가장 많이 쓰이는 무료 오픈소스 다이어그램 툴이다.  
공식으로 MCP를 지원한다는 건 단순한 플러그인이 아니다.

Figma, Notion, Linear 등 전문 도구들이 AI와 직접 연결되는 흐름이 가속화되고 있다.  
텍스트로 대화하던 AI가 도구를 직접 다루는 AI로 진화하는 흐름의 일부다.
