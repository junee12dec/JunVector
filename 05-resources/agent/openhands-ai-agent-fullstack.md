---
title: "OpenHands — 코드·터미널·웹을 혼자 다 하는 오픈소스 AI 에이전트"
date: 2026-03-25
tags: [ai/agent, dev/automation, productivity/agent-management]
description: "코드 작성, 터미널 실행, 웹 브라우징, API 호출, GitHub 푸시까지 혼자 처리하는 완전 오픈소스 AI 에이전트. Claude/GPT/Gemini 등 모든 모델과 호환되며 SWEBench 77.6점을 달성했다."
source: "https://github.com/OpenHands/OpenHands"
---

# OpenHands — 코드·터미널·웹을 혼자 다 하는 오픈소스 AI 에이전트

> 코드도 쓰고 터미널도 치고 웹도 보는 AI 에이전트. 하나로 전부.

## 개요

**OpenHands**는 AI 기반 소프트웨어 개발 자동화 오픈소스 플랫폼이다.
단순한 코드 생성 도구가 아닌, 실제 개발자처럼 여러 도구를 넘나들며 작업을 완수하는 **풀스택 에이전트**다.

## 주요 기능

| 기능 | 설명 |
|------|------|
| 코드 작성 | 파일 생성·편집·리팩터링 |
| 터미널 실행 | 명령어 직접 실행, 빌드·테스트 |
| 웹 브라우징 | 문서·이슈 검색, 웹 페이지 탐색 |
| API 호출 | 외부 서비스 연동 |
| GitHub 푸시 | PR 생성, 커밋, 브랜치 관리까지 |

## 성능

- **SWEBench 점수**: **77.6점** (실제 GitHub 이슈 자동 해결 벤치마크)
- 라이선스: MIT (코어 컴포넌트)

## 모델 독립성

Claude, GPT, Gemini, Minimax 등 **어떤 LLM이든 백엔드로 연결 가능**.
특정 모델에 종속되지 않아 비용·성능 최적화가 자유롭다.

## 배포 옵션

| 방식 | 설명 |
|------|------|
| Cloud (무료) | `app.all-hands.dev` — GitHub/GitLab 로그인으로 즉시 사용 |
| CLI | `docs.openhands.dev` 참고 |
| Local GUI | REST API + React 앱 |
| SDK | Python 라이브러리 |
| Enterprise | RBAC, 멀티유저, Slack/Jira/Linear 연동 |

## 빠른 시작

```bash
# Cloud 버전 (무료)
# https://app.all-hands.dev 에서 GitHub 로그인
```

```bash
# 로컬 CLI
# docs.openhands.dev/sdk 참고
```

## 참고 링크

- GitHub: https://github.com/OpenHands/OpenHands
- Cloud: https://app.all-hands.dev
- 문서: https://docs.openhands.dev
- Threads 소개: https://www.threads.com/@aisolutiondev/post/DWTjic1FDsO
- X(트위터): https://x.com/_vmlops/status/2036607941521092977
