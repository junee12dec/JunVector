---
title: "LLM Knowledge Base 실전 구현 — 개인 위키에서 팀 위키로"
date: 2026-04-06
tags: [ai/pkm, productivity/knowledge-management, ai/llm, productivity/team]
description: "Karpathy의 LLM Knowledge Base 개념을 Claude Code 환경에서 직접 구현한 경험 공유. 메모 36개 → 9개 주제, 38페이지 위키. wiki/CLAUDE.md/LESSONS.md/MEMORY.md 구조 제안."
source: "https://www.threads.com/@pyopyo___/post/DWxwcMMkjtK"
---

# LLM Knowledge Base 실전 구현 — 개인 위키에서 팀 위키로

> Andrej Karpathy: "요즘 내 AI 사용량 대부분은 코드를 짜는 게 아니라, 지식을 정리하고 관리하는 데 쓰이고 있다."

메모, 아티클, 강의 노트 같은 자료를 AI에게 넘기면 주제별 위키를 자동으로 만들어주고, 새 자료가 들어올 때마다 알아서 업데이트해주는 방식.

## 실전 경험 (Claude Code 환경)

흩어져 있던 메모 36개 투입 결과:
- **9개 주제 영역**
- **38페이지짜리 개인 위키**

## 권장 파일 구조

```
📂 wiki/        — "이 분야에 대해 내가 아는 것들" (주제별 지식 축적)
📄 CLAUDE.md    — "이 프로젝트에서는 이렇게 일해" (AI 행동 규칙)
💡 LESSONS.md   — "이건 이렇게 하면 안 돼" (실패/성공 교훈)
🧠 MEMORY.md    — "지난번에 여기까지 했었지" (세션 간 기억)
```

**사용 패턴**: 프로젝트 시작 시 "이전에 비슷한 설문을 어떻게 설계했지?" 질문 →
wiki에서 방법론 + LESSONS.md에서 과거 교훈이 함께 출력

## 팀 위키로 확장

### 온보딩
신규 입사자가 "우리 팀에서 UT는 보통 어떻게 진행해?" 물으면 → 과거 프로젝트 교훈 + 방법론 + 도구 팁이 한 번에 출력

### 프로젝트 레퍼런스
"작년에 비슷한 설문 한 적 있었는데…" 기억 의존 대신 wiki에서 즉시 검색

### 교훈 축적
프로젝트 끝날 때마다 "뭘 배웠나" 입력 → 같은 실수 반복 방지 구조 자동화

### 도메인 지식
팀원들이 읽은 아티클, 컨퍼런스 메모 → 하나의 팀 위키로 합산

## 참고 링크

- [Karpathy 원문 (X)](https://x.com/karpathy/status/2039805659525644595)
- [한국어 실전 가이드 (Gist)](https://gist.github.com/unclejobs-ai/7af4a9e3446751b8e2c3bc66d23fa0ac)
