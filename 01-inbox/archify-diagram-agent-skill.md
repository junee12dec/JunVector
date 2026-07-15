---
title: "Archify — 채팅 한 줄로 아키텍처 다이어그램을 그려주는 에이전트 스킬"
date: 2026-07-15
tags: [ai/coding-agent, dev/workflow, design/diagram]
description: "Claude Code·Codex CLI에 설치해 자연어 한 줄로 아키텍처·시퀀스·워크플로우 등 5종 다이어그램을 생성하는 오픈소스 에이전트 스킬. 3개월 만에 4,500스타."
source: "https://www.threads.com/@think.5x/post/DazsYlWH7Ef"
---

# Archify — 채팅 한 줄로 아키텍처 다이어그램을 그려주는 에이전트 스킬

GitHub: [tt-a1i/archify](https://github.com/tt-a1i/archify)

## 핵심 기능 4가지

### 1. 다이어그램 5종을 프롬프트 한 줄로

- 아키텍처, 워크플로우, 시퀀스, 데이터플로우, 라이프사이클 — 5가지 타입 지원
- 자연어로 구조만 설명하면 코드 없이 바로 생성
- 문서 작성 중 별도 툴(draw.io 등)을 켤 필요 없음

### 2. Claude Code·Codex CLI·opencode에 스킬로 설치

- 별도 앱이 아닌 **에이전트 스킬** 형태
- 이미 쓰는 CLI에 설치만 하면 채팅으로 다이어그램 요청 가능
- 에이전트 워크플로우에 자연스럽게 통합됨

### 3. 고해상도 내보내기 (최대 4배)

- 지원 포맷: PNG / JPEG / WebP / SVG
- PNG는 클립보드 직접 복사 → 슬랙·노션에 즉시 붙여넣기
- PR·블로그·문서에 바로 쓸 수 있는 품질

### 4. 외부 의존성 0개, 단일 HTML 파일

- 다크/라이트 테마 토글 + `prefers-color-scheme` 자동 감지
- SVG는 듀얼 테마로 내보내기 지원
- 별도 서버·패키지 설치 불필요 → 설치 장벽이 낮음

## 성장 지표

- 3개월 만에 **4,500 스타**
- 최근 1주일에만 **1,333 스타** 추가
