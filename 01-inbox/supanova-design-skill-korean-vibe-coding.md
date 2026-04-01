---
title: "Supanova Design Skill — 한국어 서비스 AI 디자인 티 제거 스킬"
date: 2026-04-01
tags: [design/ui, dev/frontend, productivity/vibe-coding, ai/claude]
description: "바이브코딩 결과물에서 AI 냄새(보라 그라데이션·Inter 폰트·이모지)를 원천 차단하고 Pretendard·한국어 최적화 레이아웃을 강제하는 Claude Code 디자인 스킬. 한국어 서비스 제작자에게 특히 유용."
source: "https://www.threads.com/@grit_with_me/post/DWltdc4kvdS"
---

# Supanova Design Skill — 한국어 서비스 AI 디자인 티 제거 스킬

- **GitHub**: https://github.com/uxjoseph/supanova-design-skill
- **대상**: 바이브코딩으로 한국어 서비스를 만드는 개발자

## 문제 인식

AI에게 랜딩페이지를 만들어달라고 하면 결과가 늘 비슷하다:
- 보라색·파란색 그라데이션
- Inter 폰트
- 가운데 정렬
- 이모지 아이콘 남발

이 패턴들이 "AI가 만든 티"의 핵심이다.

## Supanova의 접근법

AI가 뻔하게 만드는 패턴 자체를 **금지 목록**으로 차단한다.

### 금지 항목

| 금지 대상 | 이유 |
|-----------|------|
| Inter 폰트 | AI 기본값 1순위 |
| Noto Sans KR | 한국어 AI 기본값 |
| 보라색/파란색 AI 그라데이션 | 가장 흔한 AI 배경 패턴 |
| 이모지 아이콘 | AI가 즐겨 쓰는 장식 요소 |

## 한국어 서비스 특화 기능

- **Pretendard 폰트** 기본 적용
- **`word-break: keep-all`** 자동 적용 → 한국어 줄바꿈 깨짐 방지
- 번역투 없는 자연스러운 한국어 텍스트 생성

## 사용법

GitHub에서 스킬 파일을 내려받아 Claude Code에 적용.
