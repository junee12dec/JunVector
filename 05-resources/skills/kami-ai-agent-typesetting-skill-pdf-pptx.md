---
title: "Kami — 에이전트가 만드는 문서의 조판을 맡는 스킬 (PDF·PNG·PPTX 출력)"
date: 2026-11-05
tags: [ai/agent, productivity/tools, design/document]
description: "내용만 쓰면 이력서·원페이저·슬라이드 등 조판을 자동으로 처리해주는 AI 에이전트 스킬. 템플릿 8종, PDF/PNG/편집 가능한 PPTX로 출력, 슬래시 명령 없이 자연어로 작동, 한국어 본명조 지원."
source: "https://github.com/tw93/Kami"
---

# Kami — 에이전트 문서 조판 스킬

GitHub: [tw93/Kami](https://github.com/tw93/Kami)  
라이선스: MIT

## 핵심 가치

> "내용만 쓰면 모양은 맡길 수 있다."

## 기능

- **템플릿 8종**: 이력서, 원페이저, 편지, 슬라이드 등
- **출력 형식**: PDF · PNG · 편집 가능한 파워포인트
- **작동 방식**: 슬래시 명령 없이 자연어로 — "내 프로젝트 포트폴리오 만들어줘"

## 한국어 지원

- 본명조 기반 폰트 대체 + 레이아웃 점검 지원
- 완성도는 영어·중국어가 더 높음 (한국어는 개선 중)

## 설치

```bash
npx skills add tw93/kami -a claude-code codex cursor -g -y
```

Claude Code · Codex · Cursor에 동시 설치.
