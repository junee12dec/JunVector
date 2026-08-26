---
title: "Complete Shelf — MengTo의 3D 웹 서재 오픈소스 + 전자책 포장을 바꾸는 방법"
date: 2026-08-05
tags: [dev/frontend, design/ebook, ai/claude-code]
description: "index.html 파일 하나로 동작하는 3D 회전 서재 오픈소스. Claude Code에 레포를 던져 40분 만에 내 책으로 교체 가능하며, MengTo가 텍스처 잡는 데 쓴 프롬프트까지 공개되어 있다."
source: "https://www.threads.com/share/_xuNb4l4U/"
---

# Complete Shelf — MengTo의 3D 웹 서재 오픈소스

- **데모**: https://mengto.github.io/complete-shelf/
- **GitHub**: https://github.com/MengTo/complete-shelf
- **원문**: https://x.com/MengTo/status/2083704026160673099

## 무엇인가

웹 브라우저에서 동작하는 3D 서재. 서가를 가로로 훑다가 책을 꺼내고, 표지를 펼쳐 페이지를 넘기는 인터랙션을 구현했다.

- 프레임워크 없음, 빌드 없음 — **index.html 파일 하나**
- Stripe Press에서 영감 받은 실물 책 느낌의 3D 표현
- 기본 탑재 7권: Codex, Claude Code, Cursor, Figma 등 AI 도구들을 천 장정 양장본으로 표현

## 핵심 가치

### 전자책 포장 문제
> "싸 보이는 건 지식이 아니라 포장이다."

종이책은 표지·판형·장정에 공을 들이지만, 전자책은 PDF + 결제 링크가 전부인 경우가 많다. 이 프로젝트는 그 포장 격차를 웹으로 해결한다.

### 공개된 프롬프트
MengTo 본인도 텍스처 잡는 데 프롬프트를 여러 번 고쳤는데, **그 프롬프트를 통째로 공개**했다. 타인의 시행착오를 단축할 수 있다.

## Claude Code로 커스터마이징한 결과

레포를 Claude Code에 던지고 "일곱 권을 내 책으로 바꿔줘"라고 입력.  
→ 40분 만에 6권의 커스텀 책 완성 (본책·작업책·점검표·자료집)  
→ 표지와 페이지 넘기는 인터랙션 그대로 유지  
→ 한 번에 완성은 아님 — 표지 교체, 폰트 변경을 몇 번 재지시

## 활용 시나리오

- 전자책·강의 자료를 고급스러운 3D 서재로 포장
- 포트폴리오에 내 작업물 책 형태로 전시
- 강의 사이트의 커리큘럼 시각화
