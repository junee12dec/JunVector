---
title: "GStack Browse — Claude Code 에이전트에 눈을 달다"
date: 2026-04-05
tags: [ai/claude, dev/browser-automation, dev/tools]
description: "YC CEO Garry Tan이 공개한 GStack Browse는 Claude Code에서 실제 브라우저를 100ms 속도로 조작하고 실시간으로 모니터링할 수 있는 headed 브라우저 자동화 도구다."
source: "https://www.threads.com/@unclejobs.ai/post/DWvpO8hCUhN"
---

# GStack Browse — Claude Code 에이전트에 눈을 달다

> Y Combinator CEO Garry Tan 발표. GitHub 6만 스타.

## 핵심 문제 해결

기존 AI 브라우저 자동화의 두 가지 문제:
1. **느림** — Chrome MCP의 Claude는 페이지 이동에 2~4초
2. **안 보임** — headless 모드라 에이전트가 뭘 하는지 알 수 없음

GStack Browse는 **100ms 속도 + 실시간 시각 확인**으로 두 문제를 동시에 해결.

## 작동 구조

장기 실행 Chromium 데몬 방식:
- 매번 새 브라우저를 띄우는 게 아니라 **한 번 켜놓고 HTTP로 명령**을 주고받는 구조
- 첫 실행: 3~5초
- 이후 명령: **100~200ms**
- 쿠키, 탭, localStorage가 명령 사이에 유지
- 30분 유휴 시 자동 종료
- Playwright 기반, 안티봇 스텔스 내장
- 50개 이상의 브라우저 명령 지원

## GStack Browser (`/open-gstack-browser`) — headed 모드

실제 Chrome 창이 뜨는 시각화 기능:
- 위쪽에 **녹색 빛줄**이 깜빡여 GStack 제어 중인 창 표시
- 오른쪽 하단에 "gstack" 알약 모양 표시
- **사이드 패널**: 실행 중인 브라우저 명령의 라이브 피드
- **채팅 사이드바**: 자연어로 에이전트에게 직접 지시 가능

사이드바는 두 곳에 동시 연결:
- 사이드바 자체의 Claude Code 세션
- 원래 터미널의 Claude Code 인스턴스

→ Comet Browser, Atlas Browser 같은 유료 AI 브라우저의 오픈소스 버전

## 실제 활용

- 로그인 → 앱 클릭 → 스크린샷 → 콘솔 에러 읽기 → 깨진 부분 탐지
- `/qa` 실행 시: git diff 분석 → 영향받는 페이지 자동 탐지 → 테스트 → 버그 수정 → 재검증
- **health score** 0~100으로 출력
- `/connect-chrome`: 실제 Chrome 연결 → 로그인된 상태로 인증된 페이지 테스트 (Chrome, Arc, Brave, Edge 쿠키 지원)

## 성능 비교

| 도구 | 페이지 이동 속도 |
|------|-----------------|
| Chrome MCP + Claude | 2~4초 |
| GStack Playwright CLI | **100ms** |

차이: **20~40배**

## 링크

- Garry Tan 발표: https://x.com/garrytan
- GitHub: https://github.com/garrytan/gstack
- BROWSER.md: https://github.com/garrytan/gstack/blob/main/BROWSER.md
