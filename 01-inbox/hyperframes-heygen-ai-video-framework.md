---
title: "HyperFrames — HeyGen이 오픈소스로 푼 AI 전용 영상 프레임워크"
date: 2026-04-18
tags: [ai/tools, dev/video, productivity/automation]
description: "HeyGen(ARR 1,400억)이 Apache 2.0으로 공개한 HTML 기반 영상 제작 프레임워크. Claude Code에 한 줄 설치 후 텍스트 한 줄로 MP4를 뽑아내는 'AI 전용 도구'로, Remotion의 HTML 대안."
source: "https://www.threads.com/@unclejobs.ai/post/DXTxldyif1h"
---

# HyperFrames — HeyGen이 오픈소스로 푼 AI 전용 영상 프레임워크

**GitHub**: http://github.com/heygen-com/hyperframes  
**프롬프트 가이드**: http://hyperframes.heygen.com/guides/prompting  
Apache 2.0 · 상업 이용 자유 · 로컬 실행

---

## 한 줄 요약

> "10초짜리 제품 소개 영상." → 터미널에 치면 MP4가 떨어진다.

---

## 설치 (AI에 한 줄로 주입)

```bash
npx skills add heygen-com/hyperframes
```

Claude Code, Cursor, Codex CLI, Gemini CLI — 어떤 AI 코딩 툴이든 이 명령 하나로 HyperFrames 문법을 즉석에서 학습. 이후엔 자연어 한 줄로 컴포지션 작성 → 렌더 → MP4 출력이 한 번에 끝난다.

---

## 문법 구조

React 없이 HTML 그대로 쓴다:

```html
<h1 class="clip" data-start="0" data-duration="3">안녕</h1>
```

"0초부터 3초간 '안녕' 띄워라." 끝.

CSS 애니메이션, GSAP, Three.js — 브라우저에서 돌아가는 건 전부 올린다.

---

## Remotion과의 차이

| 항목 | Remotion | HyperFrames |
|------|----------|-------------|
| 설계 목적 | 사람이 짜는 걸 AI가 돕는다 | **AI가 짜는 걸 전제로 설계** |
| 진입 장벽 | React + JSX + 컴포지션 API | HTML |
| 결정론적 렌더 | 권장 (강제 아님) | **Math.random() 차단** — 부분 재렌더 가능 |
| 세팅 | React 프로젝트 설치 필요 | `npx skills add` 한 줄 |
| 라이선스 | 상업 이용 시 팀 라이선스 유료 | Apache 2.0 무료 |

---

## HeyGen의 전략

ARR 1,400억 원 회사가 핵심 기능을 무료로 푼 이유:

> "무료 바닥을 깔고 그 위에서 돈을 번다"

1. HyperFrames로 "AI 영상 = HyperFrames"를 표준으로 굳힌다
2. 그 위에 자사 아바타·TTS를 유료 플러그인으로 얹는다

**선례**: Docker → Vercel → Supabase가 걸었던 같은 길.

---

## 키워드: 바이브쇼츠

바이브 코딩이 쇼츠 제작까지 확장되는 흐름.  
"영상 한 편에 4명(감독·편집자·성우·디자이너) → 터미널 한 줄"

---

## 링크

- GitHub: http://github.com/heygen-com/hyperframes
- 프롬프트 가이드: http://hyperframes.heygen.com/guides/prompting
