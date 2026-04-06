---
title: "DESIGN.md — AI 코딩 에이전트에 디자인 시스템 이식하는 법"
date: 2026-04-02
tags: [ai/agent, design/system]
description: "구글 Stitch에서 시작된 DESIGN.md 개념. 색상·폰트·여백 등 시각적 정체성을 마크다운으로 정의하면 AI 에이전트가 일관된 UI를 생성한다."
source: "https://www.threads.com/@choi.openai/post/DWn9J1mEpb4?xmt=AQF05j7XvNoE5u_XVpT_tEwKEjwiO0mR0Kbkpc4MSp7pGJm-62myMcPQ4LZCvdXiwJ3McgYF&slof=1"
---

# DESIGN.md — AI 코딩 에이전트에 디자인 시스템 이식하는 법

구글의 디자인 도구 **Stitch**에서 처음 도입한 `DESIGN.md` 개념이 화제.

README.md에 코드 설명을 적듯, `DESIGN.md`에는 **색상, 폰트, 여백, 그림자, 디자인 원칙** 등 프로젝트의 시각적 정체성을 마크다운으로 기술한다.

## 활용법

1. [awesome-design-md](https://github.com/VoltAgent/awesome-design-md) 저장소에서 원하는 서비스의 `DESIGN.md` 복사
   - 애플, 스포티파이, 노션, 에어비앤비 등 유명 서비스 포함
2. 내 프로젝트 폴더에 붙여넣기
3. AI 에이전트에게 "이 느낌으로 페이지를 만들어줘" 지시

## 의의

AI가 생성하는 UI가 엉성하고 일관성이 없었던 문제를 **텍스트 파일 하나**로 해결.
전문적인 디자인 시스템을 그대로 이식할 수 있게 됨.

## 포함된 사이트 목록

| 카테고리 | 사이트 |
|----------|--------|
| AI 툴 | Claude, Cursor, ElevenLabs, Mistral, Ollama |
| 디자인/빌더 | Notion, Figma, Framer, Webflow |
| 브랜드 | Spotify, SpaceX, Coinbase, Revolut |

## 팁

"Apple 느낌으로 만들어줘"처럼 모호한 지시보다 해당 서비스의 `DESIGN.md`를 프로젝트 루트에 넣고 Claude Code / Cursor에게 넘기는 게 훨씬 정확한 결과를 낸다.

## 참고

- GitHub: [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
