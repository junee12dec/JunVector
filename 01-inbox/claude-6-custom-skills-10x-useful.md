---
title: "Claude를 10배 더 유용하게 만드는 커스텀 스킬 6가지"
date: 2026-03-25
tags: [ai/claude, skills/claude-code, dev/tools]
description: "CLAUDE.md 하나에 다 욱여넣는 대신 온디맨드로 로드하는 모듈형 스킬 구조 설명과, frontend-design·ui-ux-pro-max·seo·code-review·remotion·owasp-security 6가지 실전 스킬 설치 가이드."
---

# Claude를 10배 더 유용하게 만드는 커스텀 스킬 6가지

## Claude 스킬이란?

| 방식 | 특징 |
|------|------|
| **CLAUDE.md (기존)** | 매 세션마다 로드, 시간이 지날수록 비대해짐, 모든 것이 한 파일 |
| **Skills/ (새 방식)** | 필요할 때 `/skill-name`으로 온디맨드 로드, 스킬별 폴더 분리, 프로젝트 간 공유 가능 |

---

## 6가지 스킬

### 1. frontend-design
> 뻔한 AI 결과물이 아닌, 개성 있는 프로덕션급 프론트엔드 인터페이스 생성

- 굵직한 미적 방향성 선택 (brutalist, editorial, luxury, retro-futuristic...)
- 독특한 타이포그래피 (Arial, Inter 절대 금지)
- 제한적 색상 팔레트 (주색 1 + 강조색 1 + 뉴트럴)
- 모든 hover/focus에 마이크로 인터랙션
- 스피너 대신 스켈레톤 로딩 상태
- **설치**: `github.com/anthropics/claude-code/tree/main/plugins/frontend-design`
- **사용 시**: "랜딩 페이지 만들어줘" / "대시보드 디자인" / "마케팅 사이트 만들어줘"

### 2. ui-ux-pro-max
> 67가지 스타일, 161가지 팔레트, 57가지 폰트 페어링, 99가지 UX 규칙이 담긴 디자인 인텔리전스 DB

- 제품 + 대상 고객 분석 후 스타일·팔레트·폰트 자동 선택
- 전체 디자인 시스템 토큰 생성
- 납품 전 체크리스트: 명도 대비, 터치 타겟, 반응형 브레이크포인트
- **설치**: `github.com/nextlevelbuilder/ui-ux-pro-max-skill`
- **사용 시**: "피트니스 앱 대시보드 디자인" / "SaaS 온보딩 플로우" / "이커머스 상품 페이지"

### 3. seo
> 13개 서브스킬 + 8개 서브에이전트로 SEO 전방위 커버

| 서브스킬 | 역할 |
|---------|------|
| `/seo audit` | 전체 사이트 기술 감사 |
| `/seo page` | 단일 페이지 심층 분석 |
| `/seo content` | E-E-A-T 품질 스코어링 |
| `/seo schema` | JSON-LD 구조화 데이터 |
| `/seo geo` | AI Overviews / GEO 최적화 |
| `/seo plan` | SEO 전략 수립 |
| `/seo competitor` | 경쟁사 갭 분석 |

- SEO 건강 점수 (0-100), 7가지 가중 카테고리
- **설치**: `github.com/AgriciDaniel/claude-seo`

### 4. code-review
> React 19, Rust, TypeScript, Python, Go 등 멀티 언어 코드 리뷰어

- **4단계 리뷰**: 컨텍스트 수집 → 아키텍처 체크 → 라인별 → 요약
- **심각도 레이블**: `[blocking]` `[important]` `[nit]` `[suggestion]` `[learning]` `[praise]`
- 황금 규칙: 명령하지 말고 질문하라. 항상 WHY를 설명하라.
- **설치**: `github.com/awesome-skills/code-review-skill`
- **사용 시**: "이 PR 리뷰해줘" / "보안 이슈 체크" / "React 컴포넌트 리뷰"

### 5. remotion
> React로 비디오를 프로그래밍 방식으로 생성. 릴스, 광고, 캐러셀 — 모두 코드로

- 애니메이션, 트랜지션, 타이밍, 자막 관련 30개 이상의 규칙 파일
- `spring()`으로 물리 기반 모션
- 내보내기: MP4, GIF, PNG 시퀀스, ProRes
- **설치**: `remotion.dev/docs/ai/skills`
- **사용 시**: "인스타그램 광고 만들어줘" / "영상 인트로 제작" / "애니메이션 설명 영상"

### 6. owasp-security
> OWASP Top 10:2025 + ASVS 5.0 + 에이전틱 AI 보안 감사

- 10개 OWASP 카테고리 전체 스캔
- 코드 리뷰 체크리스트: 입력 처리, 인증, 접근 제어, 데이터 보호, 에러 처리
- 에이전틱 AI 보안 (ASI01-ASI10): 프롬프트 인젝션 방어, 툴 권한 경계
- 20개 이상 언어별 보안 특이사항
- 리포트: `CRITICAL / HIGH / MEDIUM / LOW`
- 보안 관련 프롬프트에 자동 활성화
- **설치**: `github.com/agamm/claude-code-owasp`

---

## 나만의 스킬 만들기 (3단계)

```bash
# 1. 폴더 생성
mkdir -p .claude/skills/my-skill/
```

```markdown
<!-- 2. SKILL.md 작성 -->
---
name: my-skill
description: What this skill does.
user-invocable: true
---

# My Custom Skill

Instructions for Claude go here.
Be specific. Give examples.
```

```bash
# 3. 끝. Claude가 자동 감지.
claude "use /my-skill to build X"
```

> **Pro tip**: frontmatter에 `tools:` 를 추가하면 Read, Grep, Bash 등 도구 접근 권한 부여 가능.

---

## 빠른 참조표

| 스킬 | 최적 용도 | 설치 |
|------|-----------|------|
| `frontend-design` | 랜딩 페이지, 대시보드, 마케팅 사이트 | github.com/anthropics/claude-code/...plugins/frontend-design |
| `ui-ux-pro-max` | 디자인 시스템, 스타일 선택, 컴포넌트 | github.com/nextlevelbuilder/ui-ux-pro-max-skill |
| `seo` | 사이트 감사, 스키마 마크업, 콘텐츠 최적화 | github.com/AgriciDaniel/claude-seo |
| `code-review` | PR 리뷰, 보안 점검, 코드 품질 | github.com/awesome-skills/code-review-skill |
| `remotion` | 비디오 생성, 광고, 릴스 | remotion.dev/docs/ai/skills |
| `owasp-security` | 보안 감사, 취약점 스캔 | github.com/agamm/claude-code-owasp |
