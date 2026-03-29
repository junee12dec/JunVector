---
title: "SourceLoop — AI와 NotebookLM이 대화하는 자동 자료수집 에이전트"
date: 2026-03-27
tags: [agent/workflow, ai-tools/notebooklm, dev/automation]
description: "AI가 질문을 생성하고 NotebookLM과 질의응답하며 심층 분석 결과를 Obsidian Markdown으로 추출하는 로컬 리서치 자동화 툴. Codex·Claude Code·Gemini CLI에서 사용 가능."
source: "https://www.threads.com/@2_taewoo/post/DWdXRDWlDnq"
---

# SourceLoop — AI와 NotebookLM이 대화하는 자동 자료수집 에이전트

GitHub: https://github.com/lteawoo/SourceLoop

## 핵심 아이디어

모르는 도메인을 빠르게 파악하거나 긴 영상·논문을 이해할 때, AI와 NotebookLM이 자동으로 협력해 심층 Q&A를 완성하고 Markdown 파일로 추출한다.

## 워크플로우

1. **주제·목표 설정** — 사용자가 정함
2. **질문 위임** — 도메인 지식이 없어도 AI가 심층 질문 세트 자동 생성
3. **Q&A 자동화** — AI가 NotebookLM과 질의응답 → 질문-답변 세트 완성 → MD 추출

## 특징

- 분석과 RAG를 NotebookLM에 위임 → 멀티소스 분석 성능 최대 활용
- 결과물: Obsidian 호환 Markdown 파일
- 활용처: 유튜브 리소스, 카드뉴스, 블로그, 강의자료, 학습자료

## 설치 및 사용

```bash
npm install -g sourceloop
cd /path/to/project
sourceloop init
# Claude Code에서 사용 시
sourceloop init --ai claude
```

## 주요 기능

- 관리형 Chrome으로 NotebookLM 자동 접근
- 질문 계획 및 배치 실행
- 로컬 Markdown 연구 아카이브 저장
- 출처 기반 답변 및 인용 추적
- 주제별 연구 워크스페이스 구성
