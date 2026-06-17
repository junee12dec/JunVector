---
title: "Taste Skill — AI가 만든 티 나지 않는 UI를 위한 안티 슬롭 프론트엔드 스킬 프레임워크 (30.9k⭐)"
date: 2026-06-01
tags: [design/system, ai/claude, agent/skill, dev/frontend]
description: "AI 코딩 에이전트가 생성하는 평범하고 복사한 것 같은 UI 문제를 해결하는 스킬 모음. 레이아웃·타이포·여백·모션·정보 밀도를 규칙 기반으로 관리해 AI가 만든 티를 없앤다."
source: "https://github.com/leonxlnx/taste-skill"
---

# Taste Skill — AI 생성 UI의 '복사 냄새'를 없애는 안티 슬롭 프레임워크

**GitHub**: https://github.com/leonxlnx/taste-skill  
**⭐ 30.9k stars** / 2.3k forks / MIT 라이선스  
**지원**: Claude Code, Codex, Cursor

> "The Anti-Slop Frontend Framework for AI Agents"

---

## 문제

Gemini, Claude Code, Codex로 서비스를 만드는 속도는 빨라졌지만, **결과물이 전부 비슷해진다.**  
AI가 만든 UI는 너무 평범하고 복사한 것 같다.

---

## 해결 방식

디자인을 단순히 "예쁘게 만들어라"가 아니라 **규칙 기반**으로 관리:

| 규칙 영역 | 내용 |
|-----------|------|
| 레이아웃 구조 | 계층과 그리드 시스템 |
| 타이포그래피 | 타입 스케일 규칙 |
| 여백 설계 | 간격 체계 |
| 모션 강도 | GSAP 패턴 포함 |
| 정보 밀도 | 콘텐츠 밀도 관리 |

**코드 생성 전에 "이 서비스는 어떤 사용자에게 보여질 것인가"부터 먼저 분석**하도록 설계.  
SKILL.md가 약 **1,200줄**에 달한다.

---

## 스킬 목록

| 스킬 | 용도 |
|------|------|
| `design-taste-frontend` | 기본 디자인 품질 개선 (v2 실험 포함) |
| `gpt-taste` | GPT/Codex 전용 강화 버전 |
| `image-to-code` | 이미지 분석 → UI 구현 |
| `redesign-existing-projects` | 기존 프로젝트 리디자인 |
| `minimalist-ui` | Linear·Notion 계열 절제된 디자인 |
| `industrial-brutalist-ui` | 강한 대비 + 실험적 레이아웃 |
| `high-end-visual-design` | 고급 비주얼 디자인 |
| `stitch-design-taste` | 스티치 디자인 스타일 |
| `imagegen-frontend-web/mobile` | 이미지 생성 (웹/모바일) |
| `brandkit` | 브랜드 키트 생성 |

---

## 설치

```bash
# 전체 설치
npx skills add https://github.com/Leonxlnx/taste-skill

# 특정 스킬만
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```

---

## 핵심 인사이트

> "누가 더 좋은 모델을 쓰느냐는 오래가지 않을 것 같다.
> 대신 어떤 기준을 가지고 있는가, 어떤 의사결정 체계를 AI에게 전달할 수 있는가, 이 차이가 더 중요해질 것이다."

---

## 관련 노트

- [[design-diversity-claude-design-pack-100]] — Claude Code 디자인 팩 100종 (같은 AI 디자인 품질 개선 범주)
- [[open-design-claude-design-95-opensource]] — Claude 디자인 시스템 재현 오픈소스
- [[refero-styles-design-md-2000-products-library]] — 세계 최고 제품 디자인 레퍼런스 (taste-skill의 기준점으로 활용 가능)
- [[satgat-kami-korean-design-skill]] — 한국형 디자인 스킬 (같은 AI 디자인 스킬 생태계)
