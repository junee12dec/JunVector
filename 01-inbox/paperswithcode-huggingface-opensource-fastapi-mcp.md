---
title: "Papers with Code 오픈소스 공개 — AI 논문·SOTA 리더보드 추적 플랫폼 전체 코드"
date: 2026-10-27
tags: [ai/research, dev/tools, dev/self-hosted]
description: "Hugging Face가 Papers with Code 전체 코드를 오픈소스로 공개. FastAPI + React 모노레포 구조에 논문 시각화 API와 MCP 서버까지 포함해 사내 리서치 트래킹 툴이나 AI 에이전트에 바로 연결 가능."
source: "https://github.com/huggingface/paperswithcode"
---

# Papers with Code 오픈소스 공개

GitHub: [huggingface/paperswithcode](https://github.com/huggingface/paperswithcode)  
라이선스: Apache 2.0

## 구성

- **백엔드**: Python FastAPI
- **프론트엔드**: React
- **구조**: 단일 모노레포
- **추가 제공**: 논문 시각화 API + **MCP 서버**

## 활용 시나리오

- 사내 리서치 트래킹 툴로 직접 셀프호스팅
- AI 에이전트에 MCP 서버로 연결해 최신 논문·SOTA 리더보드 실시간 조회
- 팀 맞춤으로 커스터마이징 후 기여

## 맥락

[paperswithcode.com](https://paperswithcode.com) — 최신 AI 논문과 SOTA 벤치마크 리더보드를 한눈에 볼 수 있는 플랫폼. Hugging Face가 인수 후 전체 코드를 오픈소스화.
