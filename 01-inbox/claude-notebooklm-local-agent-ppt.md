---
title: "Claude + NotebookLM 로컬 연결 — 명령 한 줄로 마케팅 PPT 생성"
date: 2026-03-13
tags: [ai/claude, ai/notebooklm, productivity/automation, dev/tools]
description: "Claude와 NotebookLM을 로컬에서 연결해 URL 하나로 15장짜리 슬라이드를 자동 생성하는 에이전트 설정법. notebooklm-py 패키지로 별도 로그인 없이 파일 다운로드까지 가능."
source: "https://www.threads.com/@moongi_adventures/post/DVzjwK5AIK7"
---

# Claude + NotebookLM 로컬 연결 — 명령 한 줄로 마케팅 PPT 생성

## 개요

Claude와 NotebookLM을 로컬에서 연결해, Claude에 명령을 내리면 NotebookLM이 실행되는 구조.
웹에서 별도 로그인 없이, 파일도 로컬로 바로 다운로드된다.

**실제 사용 예**: 골프장 URL 하나 입력 → 프롬프트 작성 → 명령어 몇 줄 → 15장짜리 마케팅 PPT 생성

## 설치 및 사용법

```bash
# 1. 패키지 설치
py -m pip install notebooklm-py

# 2. 구글 로그인
py -m notebooklm login

# 3. 노트북 만들고 URL 소스 추가 (NotebookLM UI 또는 CLI)

# 4. 슬라이드 생성
py -m notebooklm generate slide-deck "프롬프트 내용" --wait
```

## 핵심 장점

- 툴을 각각 열 필요 없이 **로컬 한 곳에서 통합 운영**
- Claude → NotebookLM 명령 흐름으로 **에이전트화**
- 온라인 접속 없이 파일 로컬 다운로드 가능
