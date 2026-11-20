---
title: "doksam-ui — shadcn/ui 기반 한국어 공통 UI 표준 카탈로그 (컴포넌트 104·패턴 31·템플릿 16, 폐쇄망 우선)"
date: 2026-11-18
tags: [design/system, dev/frontend, design/ui]
description: "버튼 하나, 빈 상태 하나를 매번 새로 정하지 않도록 이미 결정된 UI를 모아 둔 shadcn/ui 기반 카탈로그. 항목마다 데모·코드·Do/Don't가 있고 shadcn CLI로 바로 설치되며, 외부 CDN 없이 동작해 사내 폐쇄망에서도 쓸 수 있다."
source: "https://www.threads.com/@yudok1ee/post/Df4koIsky_4"
---

# doksam-ui — shadcn/ui 기반 공통 UI 표준 카탈로그

- 저장소: https://github.com/LeeYudok/doksam-ui (MIT, TypeScript)
- 라이브: https://ui.doksam.com
- 소개 글: @yudok1ee (Threads, 2026-11-18) — "AI 시켜서 리액트로 사이트 만들 때 딸깍하기 좋음"

## 무엇인가

doksam 프로젝트들의 공통 UI 표준. 여러 프로젝트가 화면을 만들 때마다 버튼 하나, 빈 상태 하나를 매번 새로 정하지 않도록 **이미 결정된 것**을 한곳에 모았다. 컴포넌트는 "무엇을 쓰는가", 패턴은 "어떻게 조합하는가"를 정한다.

## 3계층 카탈로그

| 계층 | 개수 | 성격 |
|------|------|------|
| 컴포넌트 | 104 | shadcn 기본 요소 + 조합 컴포넌트. 항목마다 데모·코드·Do/Don't |
| 패턴 | 31 | 화면 단위 조합 규칙 (공통 22, 금융 9) |
| 템플릿 | 16 | 대시보드·랜딩·콘솔 등 완성된 화면 |

그 밖에 토큰(색·간격·타이포), 테마·프로필, 아이콘 페이지가 있다. 작성 규칙의 기준은 `/rules` 페이지 하나다.

- 테마 프리셋 8종 (ocean · forest · violet · ember · rose · slate · gold · ink-bulb)
- 브랜드 프로필 3종 (admin · service · data — 테마와 폰트를 고정한 조합)
- 폰트 프리셋 5종 (로컬 벤더링)

## 가져다 쓰기 (shadcn 레지스트리)

컴포넌트·패턴을 shadcn CLI로 바로 설치한다 (현재 45개 항목 배포). 의존하는 `components/ui/*`도 함께 설치된다.

```bash
npx shadcn@latest add https://ui.doksam.com/r/badge-extended.json
npx shadcn@latest add https://ui.doksam.com/r/table-sortable.json
```

AI가 읽을 수 있는 `llms.txt`도 함께 생성한다.

## 설계 원칙

- **폐쇄망 우선**: 폰트를 포함한 리소스를 로컬에 두어 외부 CDN 없이 동작한다. 방문 분석용 GA만 환경 변수를 설정한 배포에서 불러온다.
- **시맨틱 토큰만**: 색은 `text-destructive`, `bg-success`, `text-chart-1` 같은 토큰으로만 쓰고, `bg-green-500` 같은 팔레트 하드코딩은 리뷰에서 막는다. 등락 색은 **한국 관례**(상승 빨강 `gain` / 하락 파랑)를 따른다.
- **아이콘은 Phosphor**: 이모지를 아이콘 대신 쓰지 않는다.
- **다국어**: 설명문은 한국어가 기본이고 en·ja·zh·es 번역을 둔다. 네 로케일의 키가 어긋나면 테스트가 실패한다.

## 로컬 실행

Node 22 이상, pnpm.

```bash
pnpm install
pnpm dev            # http://localhost:3000
```

CI와 같은 검증: `pnpm typecheck` → `pnpm lint` → `pnpm test`(vitest) → `pnpm test:e2e`(playwright) → `pnpm build`

## 참고

- 저장 시점 별 10개의 작은 개인 프로젝트다. 라이브 사이트는 읽지 않았고, 위 내용은 GitHub README 기준이다.
- 폰트 등 서드파티 자산은 대부분 SIL OFL이고 `THIRD_PARTY_LICENSES.md`에 정리돼 있다.
