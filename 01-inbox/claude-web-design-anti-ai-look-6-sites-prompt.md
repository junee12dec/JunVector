---
title: "Claude로 웹사이트 만들 때 AI 티 없애는 사이트 6개 + CLAUDE.md 프롬프트"
date: 2026-11-10
tags: [ai/claude, design/web, productivity/tools]
description: "Claude Opus 5.5로 웹사이트 만들 때 AI스러운 느낌을 없애주는 사이트 6곳과 CLAUDE.md에 바로 붙여 넣을 수 있는 프론트엔드 참고 지침 프롬프트."
source: "https://www.threads.com/share/BA1iJfZyrk"
---

# Claude로 웹사이트 만들 때 AI 티 없애는 사이트 6개

---

## 1단계 — 스타일 정할 때

### styles.refero.design
링크: [styles.refero.design](http://styles.refero.design)

실제 서비스 2,000곳의 색·글꼴·간격을 **AI가 읽는 DESIGN 파일**로 정리.  
"레트로", "SaaS" 같은 분위기로 검색 → 스타일 파일을 프로젝트에 복사.

### VoltAgent/awesome-design-md ⭐110,000
링크: [github.com/VoltAgent/awesome-design-md](http://github.com/VoltAgent/awesome-design-md)

애플·스트라이프·리니어·피그마 등 브랜드 **74곳** 디자인을 같은 형식으로 정리.  
원하는 브랜드 폴더 파일을 프로젝트 루트에 복사 → AI가 그 스타일로 화면 제작.

---

## 2단계 — 컴포넌트 고를 때

### 21st.dev
링크: [21st.dev](http://21st.dev)

React·Tailwind 컴포넌트·템플릿 **12,000개**.  
MCP 연결 시 Claude Code가 직접 검색·가져옴. 검색 무료, 코드 복사 하루 2개 무료.

### component.gallery
링크: [component.gallery](http://component.gallery)

버튼·탭·모달 등 컴포넌트 60종을 **디자인 시스템 95곳**이 각각 어떻게 만들었는지 모음.  
만들기 전에 잘 만든 예시부터 보고 기준 잡기 좋음.

---

## 3단계 — 모션 넣을 때

### kinetics.colorion.co
링크: [kinetics.colorion.co](http://kinetics.colorion.co)

스프링처럼 튕기는 물리 기반 애니메이션 **153개**.  
효과마다 CSS·React 코드 + AI 프롬프트 복사 가능, 튕기는 정도 조절 가능.

---

## 4단계 — 마지막 다듬을 때

### impeccable.style
링크: [impeccable.style](http://impeccable.style)

Claude Code에 설치하는 **디자인 명령어 모음** (무료 오픈소스).

```bash
/plugin marketplace add pbakaus/impeccable
```

명령어: `polish`(마무리) · `distill`(덜어내기) · `bolder`(더 과감하게)

---

## CLAUDE.md 프롬프트

`~/.claude/CLAUDE.md`에 붙여 넣을 **프론트엔드 참고 섹션**:

```
새 페이지를 만들 때, 내가 디자인이 별로라고 할 때, 아래 사이트 이름을 말할 때만 쓰고 작은 수정은 그냥 해.

- 스타일: styles.refero.design이나 VoltAgent/awesome-design-md에서 제품에 맞는 DESIGN 파일(.md)을 골라 프로젝트 루트에 넣고, 프로젝트 CLAUDE.md에서 @로 불러와. 색, 글꼴, 간격은 그걸 따라.
- 컴포넌트: 21st.dev부터 보고 MCP가 있으면 바로 불러. 무료 한도가 있으니 부르기 전에 뭘 찾는지 말해줘. 그다음 component.gallery에서 다른 디자인 시스템은 어떻게 만들었는지 봐.
- 모션: kinetics.colorion.co에서 프롬프트나 React 코드를 가져와.
- 다 했는데 어색하면 impeccable.style의 polish, distill로 다듬어.

지켜야 할 것:
- 프로젝트에 이미 있는 디자인 시스템과 컴포넌트가 먼저야.
- 필요한 MCP, 스킬, CLI가 없으면 설치할지 물어보고 흉내 내지 마.
- 페이지 내용을 못 읽으면 멈추고 붙여넣어 달라고 해. 기억으로 채우지 마.
- 바깥 자료를 쓸 때마다 어디서 뭘 바꿨는지 알려줘.
- 추가할 내용을 먼저 보여주고, 내가 확인하면 그때 써.
```
