---
title: "Hallmark — 'AI가 만든 티' 나는 웹디자인을 없애주는 디자인 매뉴얼 스킬 (★23,700)"
date: 2026-08-08
tags: [design/web, ai/claude-code, productivity/workflow]
description: "Claude Code·Codex 같은 AI 코딩 도구에 디자인 판단 기준을 심어주는 오픈소스 스킬. 뻔한 AI 디자인 패턴 회피·57개 품질 기준 검사·Design DNA 추출 등 4가지 모드로 웹사이트 품질을 끌어올린다."
source: "https://github.com/Nutlope/hallmark"
---

# Hallmark — AI 웹디자인 안티패턴 제거 스킬

GitHub: [Nutlope/hallmark](https://github.com/Nutlope/hallmark)  
별 23,700 / Claude Code·Codex 호환

## 문제 의식

> "큰 제목, 짧은 설명, 버튼 하나, 카드 3개, 배경색 그라데이션, 왼쪽 강조색 손톱 모양 박스..."  
> 색깔만 다르고 전부 본 것 같은 디자인.

AI에게 "예쁘게 만들어"가 아니라 **디자인 판단 기준을 심어주는 매뉴얼** 역할.

## 4가지 모드

| 모드 | 설명 |
|------|------|
| **Build** | 새 사이트를 디자인 기준에 맞게 처음부터 만들기 |
| **Audit** | 이미 만든 사이트에서 어색한 부분 찾기 |
| **Redesign** | 내용 유지 + 디자인만 다시 설계 |
| **Study** | 마음에 드는 사이트가 왜 좋아 보이는지 분석 → **Design DNA** 추출 |

## 핵심 작동 방식

- "이 사이트랑 똑같이 만들어줘" X
- "왜 좋아 보이는지 분석해서 그 **원리**를 내 사이트에 적용해줘" O
- 결과물 완성 후 **57개 품질 기준**으로 자동 검사

## 비개발자용 시작 프롬프트

```
Hallmark(https://github.com/Nutlope/hallmark)를 설치해줘.

설치 과정에서 내가 직접 해야 하는 일이 있다면 하나씩 쉽게 안내하고,
설치가 끝나면 현재 프로젝트를 먼저 Audit한 뒤
결과를 비개발자도 이해할 수 있게 설명해줘.
내 승인 없이 파일을 수정하거나 Redesign하지 마.
```

## 핵심 인사이트

> "AI가 코드를 잘 만드는 시대일수록, 차이는  
> '만들 수 있느냐'가 아니라 **'어떤 기준으로 만들게 하느냐'** 에서 생긴다."
