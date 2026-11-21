---
title: "ui-diff — UI를 바꾼 PR에 수정 전·후 화면과 달라진 픽셀을 PR 댓글 하나로 보여 주는 에이전트 스킬 (MIT)"
date: 2026-11-21
tags: [ai/skill, dev/tools, design/ui]
description: "두 브랜치에서 같은 페이지를 열어 스크린샷을 찍고 달라진 픽셀을 표시해, 수정 전·후 화면과 짧은 UX 요약을 PR 댓글 하나로 올린다. 의도한 변화 옆에서 함께 바뀐 의도치 않은 변화를 리뷰 때 잡아낸다."
source: "https://www.threads.com/@hoddukzoa/post/Df-9bpYI7BK"
---

# ui-diff — UI를 바꾼 PR의 전·후 화면 비교 스킬

- 저장소: https://github.com/imuratalpay/ui-diff (MIT, 저장 시점 약 70⭐)
- 사용 안내: https://skills.muratalpay.me/ui-diff
- Claude Code·Cursor·Codex용 에이전트 스킬 + 사람과 CI가 직접 쓰는 TypeScript CLI
- 소개 글: @hoddukzoa (Threads, 2026-11-21)

## 왜 쓰나

공식 예시(첨부 이미지): 버튼 스타일만 고치려던 PR에서 버튼이 커지고(폭 72 → 120) 모서리가 둥글어졌다(radius 6 → 14). 그런데 그 옆의 다른 요소도 함께 바뀌었다. **리뷰할 때 짚어야 할 건 오히려 두 번째 변화**이고, ui-diff는 달라진 부분을 확대해서 보여 준다.

첨부 이미지 구성: Before · After · Diff 세 칸. Diff 칸에서 바뀐 영역을 빗금과 치수(+48)로 표시하고, 아래에 `button radius 6→14`, `button width 72→120`, `toggle off→on`처럼 변화 목록을 적는다.

## 동작 방식 (README)

1. **바뀐 UI 파일 찾기**: base와 head 사이에서 바뀐 파일을 찾아 경로(route)에 대응시킨다. 설정 파일, 프레임워크 라우팅 규칙(Next.js, SvelteKit, Nuxt, Astro, Remix, TanStack Router, 일반 HTML), import 관계를 쓴다. 대응시키지 못한 파일은 에이전트가 정하도록 목록으로 넘긴다.
2. **두 버전 실행**: base와 head를 임시 git worktree에서 각자 빈 포트로 띄우거나, 이미 있는 미리보기 URL을 쓴다.
3. **결정론적으로 캡처** (Playwright): 애니메이션 종료·폰트와 이미지 로딩 대기, 난수 고정, 시계 고정(선택), 특정 요소 가리기, 스크롤바·개발용 오버레이 숨김, 연속 두 장이 같아질 때까지 다시 찍기. 기본은 데스크톱·모바일 두 크기, 다크 테마 등 설정 가능.
4. **픽셀 비교** (pixelmatch): `before | after | diff` 이미지 — 전체 페이지와, 가장 많이 바뀐 영역의 확대 컷.
5. **UX 요약**: 에이전트가 이미지와 측정값을 보고 쓴다 (CI용 데이터 기반 요약도 있음).
6. **PR 댓글 하나**: `gh`로 만들고, 다시 돌리면 같은 댓글을 고친다. 댓글이 쌓이지 않는다.

**동작 후 화면도 비교**: 스크린샷 전에 "메뉴를 열고 두 번째 탭을 누른다" 같은 순서를 지정하면 두 브랜치에서 똑같이 실행해, 처음 열었을 때는 보이지 않는 화면도 비교한다.

## 추가 기능 (플래그·설정)

| 기능 | 내용 |
|------|------|
| 변형 비교 `--variants` | 쿼리 파라미터 값별 화면을 한 표에 나란히, 리뷰어가 체크로 고름 |
| 모션 클립 `--motion` | hover·클릭·스크롤 순서의 전·후 GIF |
| **토큰 감사 `--tokens`** | 바뀐 영역에서 **디자인 토큰에 없는** 색·간격·반경·글꼴을 찾아 선택자와 함께 알림 (JSON, CSS 변수 등) |
| 보호된 미리보기 | Vercel 인증 등, 헤더·쿠키를 미리보기 주소에만 보냄 |
| 접근성 차이 `--a11y` | 양쪽에 axe-core를 돌려 새로 생기거나 고쳐진 문제만 보고 |

**이미지 공개 범위**: 이미지는 같은 저장소의 고아 브랜치에 커밋되어, 저장소를 읽을 수 있는 사람만 본다.

## 빠른 시작

필요: git, Node.js 20.10+ (Windows는 WSL2). PR 댓글을 올릴 때만 GitHub CLI 로그인이 필요하다.

```bash
git clone https://github.com/imuratalpay/ui-diff.git ~/src/ui-diff
~/src/ui-diff/install.sh --claude          # Claude Code (Cursor도 읽음). Codex는 --codex
alias ui-diff='node ~/src/ui-diff/skills/ui-diff/bin/ui-diff.mjs'
cd ~/src/my-app                            # 기능 브랜치에서
ui-diff init                               # ui-diff.config.json 생성: startCommand와 routes 확인
ui-diff run                                # 내 브랜치(커밋 안 한 변경 포함) vs 기본 브랜치
ui-diff publish                            # 결과를 PR 댓글로
```

- 첫 실행 때 Chromium(약 150MB)을 내려받는다.
- 결과는 `.ui-diff/`에: `comment.local.md`(댓글 미리보기), `compare/`(전·후·차이 이미지).
- 에이전트에게는: "Run the ui-diff skill on PR #123 and update the sticky PR comment."
