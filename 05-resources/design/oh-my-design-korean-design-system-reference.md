---
title: "oh-my-design — 토스·당근·카카오·배민 디자인 시스템을 DESIGN.md로 뽑는 도구"
date: 2026-04-17
tags: [design/system, ai/tools, dev/frontend]
description: "한국 대표 서비스(토스·당근·카카오·배달의민족)의 디자인 시스템을 DESIGN.md로 변환해 AI 코딩 툴에 주입할 수 있는 오픈소스 도구. '토스처럼 만들어줘'가 실제로 가능해진다."
source: "https://www.threads.com/@daon_k/post/DXGhGgXgEms"
---

# oh-my-design — 토스·당근·카카오·배민 디자인 시스템을 DESIGN.md로 뽑는 도구

**사이트**: https://www.oh-my-design.kr  
**GitHub**: https://github.com/kwakseongjae/oh-my-design

---

## 등장 배경

일본에는 **awesome-design-md-jp**가 있다 — Apple Japan, 메르카리, LINE, 쿡패드, pixiv, Zenn 등 24개 서비스의 디자인 시스템을 CJK 타이포그래피까지 포함해 정리한 오픈소스.

한국판이 없었다. AI에게 "토스처럼 만들어줘"라고 해도 레퍼런스가 없으니 제대로 구현이 안 됐다.

## OMD가 추가한 국내 레퍼런스

| 서비스 | 비고 |
|--------|------|
| 토스 | DESIGN.md 추출 가능 |
| 당근 | DESIGN.md 추출 가능 |
| 카카오 | DESIGN.md 추출 가능 |
| 배달의민족 | DESIGN.md 추출 가능 |
| 네이버 | 공개 문서 부족으로 제외 |

## 활용 방법

1. oh-my-design.kr에서 원하는 서비스 선택
2. DESIGN.md 생성
3. Claude Code·Cursor 등 AI 코딩 툴에 주입
4. "토스 스타일로 이 페이지 만들어줘" → 실제 동작

## 다음 예정

- 국내 레퍼런스 기반으로 실제 DESIGN.md 추출
- 프롬프트 한 번으로 페이지 생성한 결과물 공유 예정

## 관련 링크

- 사이트: https://www.oh-my-design.kr
- GitHub: https://github.com/kwakseongjae/oh-my-design
