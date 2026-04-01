---
title: "Google Stitch 2.0 + Claude Code 디자인 워크플로우"
date: 2026-03-30
tags: [ai/claude-code, dev/workflow, ai/design]
description: "Google Stitch 2.0과 Claude Code를 조합해 디자인부터 배포까지 한 흐름으로 이어지는 워크플로우 소개. 디자인 시스템 파일이 전체 프로젝트의 일관성을 유지하는 핵심 역할을 한다."
source: "https://www.threads.com/@cheoeum.ai/post/DWgbI5MDJlS?xmt=AQF0qXROn8z1SAdcTkpwOZULaF70jSNwlYX97-ACg_m3Pt8wMpXiZqgmBIK9novBAZ9gWijH&slof=1"
---

# Google Stitch 2.0 + Claude Code 디자인 워크플로우

AI로 앱을 만들었는데도 화면이 촌스럽다면, 문제는 AI가 아니라 **워크플로우**일 가능성이 크다.

지금 주목받는 조합은 **Google Stitch 2.0**과 **Claude Code**다.

## 핵심 흐름

예전에는 디자인을 고치려면 디자이너를 따로 부르고, Figma를 기다리고, 다시 개발에 옮겨야 했다.
이제는 그 중간 단계를 거의 건너뛸 수 있다.

- **Stitch 2.0**이 먼저 화면을 그려주고
- **Claude Code**가 그 디자인을 실제 코드로 옮긴다

"예쁜 시안"에서 끝나지 않고, 바로 작동하는 앱으로 이어진다.

## 디자인 시스템 파일의 역할

Stitch는 단순히 화면만 만드는 게 아니라, **디자인 시스템**까지 함께 만든다.
폰트 규칙, 색상 체계, 컴포넌트 규칙이 `design.md` 하나에 정리된다.

이 파일이 중요한 이유:
Claude Code가 새 화면을 만들 때마다 이 규칙을 다시 읽기 때문이다.
즉, **화면마다 색이 달라지고 폰트가 흔들리는 문제**를 크게 줄여준다.

한 번 만든 디자인 언어가 프로젝트 전체의 기준점이 되어, 새 기능을 붙여도 분위기가 무너지지 않는다.

## 통합 스택

Claude Code는 Stitch의 HTML/CSS를 읽고, 아래 서비스들과 연결할 수 있다:

| 서비스 | 역할 |
|--------|------|
| Supabase | 로그인 및 권한 |
| Stripe | 결제 |
| Resend | 이메일 |

디자인부터 배포까지 한 흐름으로 이어진다.

## 한계

- 폰트나 색상이 완벽히 맞지 않을 수 있음
- 긴 세션은 토큰 비용이 커질 수 있음
- Stitch가 만든 기능을 앱이 실제로 지원하는지 반드시 확인 필요

## 결론

예전엔 수천 달러와 몇 주가 필요했던 일이, 이제는 한 사람이 오후에 끝낼 수 있는 작업이 되고 있다.

> 차이는 'AI를 쓰느냐'가 아니라, **AI를 어떤 구조로 묶느냐**에서 벌어진다.

---

출처 원본: https://x.com/prajwaltomar_/status/2037104246647382058
