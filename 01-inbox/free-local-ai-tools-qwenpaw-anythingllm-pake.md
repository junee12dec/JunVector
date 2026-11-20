---
title: "내 컴퓨터에서 쓰는 무료 AI 도구 3개 — QwenPaw(개인 AI 비서)·AnythingLLM(문서 챗봇)·Pake(웹사이트를 데스크톱 앱으로)"
date: 2026-11-20
tags: [ai/tools, ai/agent, ai/rag]
description: "정해진 시간마다 일을 해 주는 개인 AI 비서 QwenPaw, 내 PDF를 넣으면 출처와 함께 답하는 로컬 문서 챗봇 AnythingLLM, ChatGPT 같은 웹사이트를 가벼운 데스크톱 앱으로 만드는 Pake. 셋 다 설치 파일이 있어 코딩 없이 쓸 수 있다."
source: "https://www.threads.com/@yun_ja_dong/post/Df9muxDiYdG"
---

# 내 컴퓨터에서 쓰는 무료 AI 도구 3개

@yun_ja_dong (Threads, 2026-11-20)의 "개발자들 사이에서만 유명한 무료 프로그램 5개" 중 볼트에 없던 3개.
별 수·라이선스는 저장 시점 GitHub 기준이다.

| 이름 | 하는 일 | 별 · 라이선스 |
|------|---------|----------------|
| QwenPaw | 내 컴퓨터(또는 클라우드)에서 도는 개인 AI 비서 | 약 38,000 · Apache-2.0 |
| AnythingLLM | 로컬 우선 문서 챗봇·에이전트 | 약 68,500 · MIT |
| Pake | 웹사이트를 명령 하나로 가벼운 데스크톱 앱으로 | 약 63,900 · GPL-3.0 |

나머지 2개는 볼트에 이미 있다:
- Microsoft Generative AI for Beginners (21개 수업, 한국어 번역 있음) → [[generative-ai-for-beginners-microsoft-21-lessons]]
- OpenHands (개발 일을 맡기는 AI 팀원, 정해진 시간에 보고서를 슬랙에 올리는 일도 가능) → [[openhands-ai-agent-fullstack]]

## QwenPaw — 내 컴퓨터에 사는 개인 AI 비서

- https://github.com/agentscope-ai/QwenPaw (agentscope 팀)
- "매일 아침 뉴스 정리해 줘"를 한 번 시켜 두면 정해진 시간마다 요약이 디스코드나 텔레그램으로 온다. 여러 채팅 앱을 지원하고 기능을 쉽게 늘릴 수 있다.
- PDF, 워드, 엑셀, 파워포인트 파일도 읽고 만들고 고친다.
- 대화를 기억해서 쓸수록 내 방식을 알아 간다.
- 윈도우용 설치 파일이 있고, 내 컴퓨터에서 도는 모델이 기본으로 들어 있다.

## AnythingLLM — 내 PDF를 읽고 답하는 전용 챗봇

- https://github.com/Mintplex-Labs/anything-llm
- 회사 매뉴얼 PDF를 끌어다 놓고 "환불 규정이 어디 있지?" 물으면 해당 내용을 찾아 답하고, **출처**도 함께 보여 준다.
- 내 컴퓨터 안에서 문서를 다루므로 자료가 밖으로 나가는 게 걱정인 경우에 좋다.
- 윈도우·맥 설치 파일이 있다.

## Pake — ChatGPT를 바탕화면 앱으로

- https://github.com/tw93/Pake
- 웹사이트를 명령 하나로 macOS·Windows·Linux 데스크톱 앱으로 만든다. 바탕화면의 ChatGPT 아이콘을 누르면 브라우저 없이 앱처럼 열린다.
- DeepSeek, Gemini, Notion 등 미리 만들어진 앱이 여러 개 있다.
- 설치 파일이 보통 10MB 안쪽으로 가볍다. 윈도우용 설치 파일이 따로 있다.

## 참고

- 각 저장소의 README는 읽지 않았다. 설명은 Threads 글과 GitHub 저장소 설명을 합친 것이다.
- Pake는 GPL-3.0이라, 고쳐서 배포하면 소스 공개 의무가 생긴다.
