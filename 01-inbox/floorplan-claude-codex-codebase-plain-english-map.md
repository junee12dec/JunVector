---
title: "Floorplan — Claude Code·Codex가 코드베이스를 읽고 쉬운 말로 된 확대 가능한 앱 지도를 그려 주는 플러그인 (MIT)"
date: 2026-11-23
tags: [ai/claude-code, dev/architecture, design/diagram]
description: "AI와 함께 만든 앱이 실제로 어떻게 엮여 있는지 보여 주는 지도. 부품·파일·요청마다 쉬운 말 이름을 붙이고, 프론트엔드 요청과 서버 엔드포인트를 레포를 넘어 잇는다. 코드에 박힌 키 같은 흔한 실수를 짚는 점검과, AI가 방금 바꾼 부분을 초록색으로 표시하는 기능이 있다."
source: "https://www.threads.com/@developk88/post/DgEeSrmD3gI"
---

# Floorplan — 코드베이스를 쉬운 말 지도로

- 저장소: https://github.com/haydenschmitty/floorplan (MIT, 저장 시점 약 6,300⭐)
- 라이브 데모: https://haydenschmitty.github.io/floorplan-demo/ (네 개 레포로 만든 커피 구독 앱 Brewline의 지도)
- 소개 글: @developk88 (Threads, 2026-11-23) — "남이 짠 듯한 내 코드를 다시 파악할 때 쓸 만해 보인다."

## 왜

AI의 도움으로 앱을 만들었고 잘 돌아간다. 그런데 "누가 결제하면 무슨 일이 일어나지?", "이걸 바꾸면 뭐가 깨지지?"에는 답을 못 한다. Floorplan은 **아무도 그리지 않은 그림**을 준다.

- **만드는 사람**: 코드를 읽지 않고 내 말로 내 앱을 이해
- **팀**: 큰 그림부터 정확한 파일까지 몇 분 만에 온보딩
- **AI와 일할 때**: Claude나 Codex가 바꿀 때마다 어디를 왜 건드렸는지 확인

## 기능

| 기능 | 내용 |
|------|------|
| 모든 배율의 지도 | 앱 전체 → 부품 → 파일 묶음 → 파일 → 엔드포인트로 더블클릭해 들어간다. 각 화면에 "무엇이 이걸 쓰고, 이게 무엇을 쓰는지" |
| 어디서나 쉬운 말 | "Stripe API wrapper" 대신 "결제 화면에서 카드 결제를 받는다". 기술 용어는 마우스를 올리면 설명, 스위치 하나로 개발자 보기 |
| 레포를 넘는 실제 연결 | import를 따라가고, 프론트엔드의 각 요청을 그 요청에 답하는 서버 엔드포인트와 짝짓는다 — 레포가 나뉘어 있어도 |
| 화면에서 시작 | 아는 페이지 하나를 고르면 그 뒤의 부품, 요청, 서버 코드, 데이터, 외부 서비스를 모두 보여 준다 |
| 지도에 묻기 | "환불은 어떻게 고객 카드까지 가나?" → 답과 관련 조각만 담은 작은 지도, 단계별 안내 |
| **헬스 체크** | AI가 만든 앱의 흔한 실수: 코드에 있거나 브라우저로 보내지는 키, 누구나 읽는 Supabase 테이블, 열린 Firebase 규칙, 위조 가능한 Stripe 웹훅, 로그인 없는 엔드포인트. 각각 한 번에 고치는 프롬프트 제공 |
| **최근 작업** | AI가 방금 바꾼 카드가 초록색으로 켜지고, 그 변경이 요청한 일에 어떻게 도움이 되는지 메모가 붙는다 |
| 최신 유지, 내 컴퓨터에만 | 업데이트는 바뀐 것만 다시 읽고, 열려 있는 지도는 알아서 새로 고친다. 모두 내 컴퓨터에서 돌고 git에 커밋되지 않는다 |

그 밖에: 말로 요청하는 흐름 안내, 1분짜리 "Start here" 투어, HTML 파일 하나로 내보내기, 휴대폰·태블릿 레이아웃, 검색, 단축키.

**청사진(blueprint)**: 아직 만들지 않은 앱도 PRD·명세·설명에서 같은 형태의 지도를 그린다.

## Archify·Understand Anything과 비교 (README)

| | Floorplan | Archify | Understand Anything |
|---|---|---|---|
| 답하는 질문 | 내가 만든 앱이 실제로 어떻게 돌고, 무엇을 걱정해야 하나 | 이걸 어떻게 명확하게 보여 주나 | 이 큰 코드베이스가 함수 단위까지 어떻게 도나 |
| 대상 | 코드를 읽지 않고 AI로 만드는 사람 | 시스템·과정·아이디어를 설명하는 사람 | 큰 코드베이스를 익히는 개발자 |

→ 내 앱을 이해·점검할 땐 Floorplan, 문서·발표용 그림은 Archify, 큰 코드를 함수 단위로 공부할 땐 Understand Anything. Floorplan으로 앱을 지도화한 뒤 Archify로 흐름 하나를 발표용으로 그리는 식으로 함께 쓸 수 있다.

## 설치·사용

Node.js 18+와 Claude Code 또는 Codex가 필요하다. **API 키 없이 쓰던 플랜으로 돈다.**

```bash
claude plugin marketplace add haydenschmitty/floorplan
claude plugin install floorplan@floorplan
```

- Codex: 앱의 Plugins → Add a marketplace → `haydenschmitty/floorplan` 또는 `codex plugin marketplace add haydenschmitty/floorplan`
- 프로젝트를 열고 "Make me a floorplan of this app." (Codex는 `$floorplan`). 프론트엔드·백엔드 레포가 나뉘어 있으면 둘을 담은 폴더를 연다.
- 작업 후에는 "Update the floorplan." → 바뀐 것만 다시 읽고 최근 작업에 표시
- 데스크톱 앱만 쓰더라도 Claude Code CLI를 설치해 두면 지도의 질문 창이 실제 코드를 읽을 수 있다.
