---
title: "Design Diversity — Claude Code 산출물 디자인 다양성 확보 프롬프트형 디자인 팩 100종 카탈로그"
date: 2026-05-26
tags: [design/system, ai/claude, agent/skill, dev/frontend]
description: "공개 디자인 시스템을 증류한 100종 디자인 팩(PPT 50 + 웹 50) 카탈로그. Claude Code 스킬로 설치하면 미적 설명만으로 디자인 팩을 추천받거나 지정한 스타일 그대로 적용 가능."
source: "https://github.com/epoko77-ai/design-diversity"
---

# Design Diversity — Claude Code 디자인 다양성 확보 팩 100종

**GitHub**: https://github.com/epoko77-ai/design-diversity  
**⭐ 81 stars** / MIT 라이선스  
**카탈로그 웹사이트**: https://design-diversity.vercel.app

> "Claude Code 산출물의 디자인 다양성 확보 — 공개 디자인 시스템을 증류한 프롬프트형 디자인 팩 100종 카탈로그 (PPT 50 + 웹 50)"

---

## 핵심

공개 디자인 시스템을 **프롬프트 형태로 증류**한 100종 디자인 팩.  
색상·타이포그래피·레이아웃·간격·모션을 정밀하게 명세화해 Claude가 일관된 스타일로 산출물을 생성한다.

---

## 포함 내용

| 항목 | 수량 | 설명 |
|------|------|------|
| PPT 디자인 팩 | 50종 | 편집 가능한 네이티브 `.pptx` 파일 생성 |
| 웹 디자인 팩 | 50종 | HTML/CSS 웹사이트 생성 |
| **총계** | **100종** | 색상·타이포·레이아웃·간격·모션 명세 포함 |

---

## 설치 및 사용법

**Claude Code 스킬로 설치**:

```bash
# skills/design-pick/ 스킬 설치
```

**사용 예시**:

```
# 미적 설명으로 추천받기
"dark boutique 느낌의 웹페이지 만들어줘"

# 팩 이름으로 직접 지정
"web-velvet-dark-boutique 디자인 팩으로 적용해줘"
```

---

## 저장소 구조

```
skills/design-pick/   ← 번들된 디자인 레퍼런스가 담긴 Claude Code 스킬
design-packs/         ← 팩별 프롬프트·프리뷰 원본
site/                 ← Next.js 카탈로그 웹사이트
catalog.json          ← 100종 전체 머신 리더블 인덱스
```

**기술 스택**: TypeScript 62% / CSS 32% / JavaScript 6%

---

## 관련 노트

- [[open-design-claude-design-95-opensource]] — Claude Design 95% 재현 오픈소스 디자인 시스템 (같은 Claude 디자인 생태계)
- [[refero-styles-design-md-2000-products-library]] — 세계 최고 제품 2,000개의 DESIGN.md 라이브러리 (디자인 레퍼런스 맥락)
- [[storybook-ui-component-workshop]] — UI 컴포넌트 격리 개발·문서화 (웹 디자인 팩과 조합 가능)
- [[llm-ppt-design-workflow-getdesign-md]] — LLM PPT 디자인 개선 워크플로우 (PPT 팩과 연관)
