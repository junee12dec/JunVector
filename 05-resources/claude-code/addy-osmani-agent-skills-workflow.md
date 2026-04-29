---
title: "Addy Osmani의 agent-skills — AI 에이전트에 시니어 엔지니어 습관 심기"
date: 2026-04-06
tags: [ai/agent-skills, dev/workflow, ai/coding-agent]
description: "구글 Cloud AI 디렉터 Addy Osmani가 시니어 엔지니어의 워크플로 19개를 마크다운으로 패키징한 agent-skills 오픈소스 프로젝트 소개."
source: "https://www.threads.com/@unclejobs.ai/post/DWy4tLakxU3"
---

# Addy Osmani의 agent-skills — AI 에이전트에 시니어 엔지니어 습관 심기

## Addy Osmani는 누구인가

구글에서만 14년. Chrome DevTools, Lighthouse, Core Web Vitals를 만든 사람.
DevTools 사용자만 4,000만 명 이상.
현재는 구글 Cloud AI 디렉터로 Gemini, Vertex AI, Agent Development Kit을 담당.

---

## 왜 만들었나

AI 코딩 에이전트는 "빨리 끝내기"에 최적화돼 있다. "제대로 하기"는 아니다.

- 스펙을 건너뛰고 바로 코딩 시작
- 테스트를 대충 넘기거나 생략
- 보안 리뷰는 시키지 않으면 알아서 하지 않음

**비유**: 코딩 실력은 뛰어나지만 혼자 두면 기획서 안 읽고 코드부터 짜는 신입 개발자.
**해결**: 옆에 시니어를 앉혀놓는 것 — 그게 agent-skills.

> "좋은 스펙을 주면 AI는 좋은 스펙을 따른다. 나쁜 스펙을 주면 나쁜 스펙도 따른다.
> 병목은 AI가 아니었다. 항상 브리프였다." — Addy Osmani, O'Reilly

---

## 6단계 개발 프로세스

| 단계 | 내용 |
|------|------|
| **Define** | 아이디어 정제, 코드 쓰기 전에 스펙 먼저 작성 |
| **Plan** | 스펙을 작고 검증 가능한 태스크로 분해 |
| **Build** | 얇은 조각으로 나눠 하나씩 구현 → 테스트 → 확인 |
| **Verify** | 테스트 코드 먼저, 실제 브라우저 확인, 체계적 디버깅 |
| **Review** | 코드 품질 · 보안 · 성능 세 방향 검토 |
| **Ship** | 체크리스트 확인, 롤백 준비, 단계적 출시 |

각 단계에 구체적인 프로세스, 검증 단계, 안티패턴이 담긴 스킬 파일. 총 19개 스킬.

---

## 눈여겨볼 스킬 3개

### spec-driven-development
코드 한 줄 쓰기 전에 명세서를 먼저 작성하게 강제.
`Specify → Plan → Tasks → Implement` 순서로 통과해야 다음 단계로.

> "당신의 전문 지식이 그 어느 때보다 중요하다.
> DB 테이블 간의 관계, 서드파티 라이브러리의 함정, 시니어 엔지니어 머릿속의 비즈니스 규칙.
> 이런 건 훈련 데이터에 없다. 스펙에 직접 넣어야 한다."

### context-engineering
에이전트에게 맞는 정보를 맞는 타이밍에 주는 방법.
CLAUDE.md 전략, 선별적 정보 포함, 계층적 요약, MCP 연동.

> "에이전트 출력이 이상해지면 모델을 바꾸기 전에 컨텍스트를 점검하라."

### browser-testing-with-devtools
Chrome DevTools MCP로 에이전트에게 "눈"을 준다.
DOM 검사, 콘솔 로그, 네트워크 트레이스, 성능 프로파일링, 스크린샷 비교.
코드 분석이 아니라 실제 브라우저에서 돌아가는 런타임 데이터를 보게 한다.

---

## 구글 엔지니어링 원칙이 녹아 있다

- **Shift Left**: 문제를 개발 초기에 잡아라. 배포 후 발견하면 비용이 몇 배.
- **Chesterton's Fence**: 왜 있는지 이해하기 전에 없애지 마라.
- **Hyrum's Law**: 사용자가 충분히 많으면 모든 동작이 의존성이 된다.

---

## 설치 및 사용

```bash
# npx
npx skills add addyosmani/agent-skills

# Claude Code
claude plugin add agent-skills
```

**슬래시 커맨드 7개**:
`/spec` · `/plan` · `/build` · `/test` · `/review` · `/code-simplify` · `/ship`

**에이전트 페르소나 3개**:
`code-reviewer` · `test-engineer` · `security-auditor`

Claude Code, Cursor, Windsurf, GitHub Copilot, Codex 등 마크다운을 받는 모든 에이전트에서 작동.

---

## 핵심 메시지

> "소프트웨어 엔지니어링은 더 이상 코드를 쓰는 것이 아니다.
> 소프트웨어를 만드는 팩토리를 만드는 것이다." — Addy Osmani

도구가 아니라 **습관**이 품질을 결정한다.

---

## 링크

- GitHub: https://github.com/addyosmani/agent-skills
- Beyond Vibe Coding: https://beyond.addy.ie
- Addy Osmani: https://addyosmani.com
