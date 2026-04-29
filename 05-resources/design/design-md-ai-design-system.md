---
title: "DESIGN.md — AI 코딩 에이전트에 디자인 시스템 이식하는 법"
date: 2026-04-02
tags: [ai/agent, design/system, dev/tool]
description: "Google Labs가 Apache 2.0으로 공개한 DESIGN.md — 프로젝트 루트에 파일 하나로 Claude Code·Cursor·Copilot이 모두 같은 브랜드로 UI를 만든다. YAML 토큰 + 마크다운 근거의 2층 구조."
source: "https://www.threads.com/@choi.openai/post/DWn9J1mEpb4?xmt=AQF05j7XvNoE5u_XVpT_tEwKEjwiO0mR0Kbkpc4MSp7pGJm-62myMcPQ4LZCvdXiwJ3McgYF&slof=1"
---

# DESIGN.md — AI 코딩 에이전트에 디자인 시스템 이식하는 법

> "매번 프롬프트에 브랜드 컬러 적던 시대가 끝납니다"

**2026-04-21**: Google Labs가 Apache 2.0 오픈소스로 공식 발표  
**공식 블로그**: https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-design-md/

---

## 한 줄 요약

디자인 시스템의 `README.md`.  
프로젝트 루트에 파일 하나 → Claude Code·Cursor·Copilot 모두 같은 브랜드로 UI 생성.

---

## 2층 구조

| 층 | 형식 | 역할 |
|----|------|------|
| 위 | YAML 프론트매터 | 기계가 읽는 토큰 (정확한 값) |
| 아래 | 마크다운 본문 | 사람이 읽는 근거 (의도·맥락) |

> 토큰만 있으면 AI가 값은 알지만 의도를 모른다.  
> 근거만 있으면 의도는 알지만 정확한 값을 모른다.  
> **두 층이 모두 있어야 완전하다.**

### 핵심 인사이트

`#B8422E` → 의미 없음  
`Boston Clay — the sole interaction driver` → AI가 "인터랙션 가능한 요소에만 써야 한다"는 것을 이해

DESIGN.md는 토큰을 **변수가 아닌 시맨틱 역할**로 가르친다.

---

## 표준 섹션 9개

1. Visual Theme
2. Color Palette & Roles
3. Typography Rules
4. Component Stylings
5. Layout Principles
6. Depth & Elevation
7. Do's and Don'ts
8. Responsive Behavior
9. **Agent Prompt Guide** ← 전통 디자인 시스템에 없는 신설. AI 에이전트를 청자로 가정.

---

## 같이 풀린 CLI 4종

```bash
npx @google/design.md lint       # WCAG 대비비 자동 검증 (접근성 감사)
npx @google/design.md diff       # 두 버전 비교, CI 디자인 드리프트 감지
npx @google/design.md export --format tailwind  # Tailwind config 변환
npx @google/design.md spec       # 사양을 에이전트 프롬프트에 주입
```

---

## Claude Code 통합법

`CLAUDE.md`에 한 줄 추가:

```
Always read DESIGN.md at project root before generating any UI.
```

- Cursor: `.cursorrules`에 추가
- Copilot: `spec` 명령으로 컨텍스트 주입

---

## awesome-design-md 커뮤니티 & getdesign.md

발표 직후 폭발적 반응 → **69개 이상** 실제 브랜드 DESIGN.md 수집  
VoltAgent의 awesome-design-md: **GitHub 64,000+ ⭐**

포함 브랜드: Stripe, Apple, Notion, Vercel, Linear, Cursor, Claude, Anthropic, Spotify, Tesla…  
각 폴더: `DESIGN.md` + `preview.html` + `preview-dark.html` 세트

**웹 포털**: https://getdesign.md/ — 브랜드 파일 바로 다운로드  
**GitHub**: https://github.com/VoltAgent/awesome-design-md

---

## 디자이너의 역할이 바뀐다

> "피그마 단계를 건너뛰고 바로 구현으로 넘어갈 수 있다" — Reddit, 긱뉴스 논의

디자이너의 일이 **캔버스에 그리는 것** → **AI가 읽을 수 있는 명세를 설계하는 것**으로 이동.

Claude 디자인 파일도 포함 — 디자인을 몰라도 Claude 스타일 UI를 바로 생성 가능.

## Figma와의 관계

둘 다 살아남는다:

| 도구 | 역할 |
|------|------|
| DESIGN.md | 아이디에이션, 빠른 프로토타입, 디자인-투-코드 |
| Figma | 다듬기, 깊은 협업, 최종 폴리시 |

---

## 한계

- **거버넌스**: 메인 메인테이너가 Google Labs 단독
- **팀 기능**: Figma의 권한·코멘트·브랜칭이 전부 Git에 위임 → 대규모 팀에 부족
- **픽셀 퍼펙트**: 가이던스 레이어이지 강제 레이어가 아님

---

## 오늘 바로 할 수 있는 것

1. 프로젝트 루트에 `DESIGN.md` 한 장 만들기
2. `CLAUDE.md`에 참조 규칙 한 줄 추가
3. `npx @google/design.md lint` 실행
4. AI에게 "대시보드 만들어줘" 다시 요청
