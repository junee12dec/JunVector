---
title: "Open Design — Claude Design 오픈소스 대안 (아티팩트 우선, 로컬 Daemon + Vercel)"
date: 2026-05-15
tags: [design/tool, ai/agent-skill, design/system, dev/tool]
description: "Anthropic Claude Design의 클로즈드 소스 문제를 해결한 오픈소스 대안. 동일한 아티팩트 우선 루프를 웹앱 + 로컬 Daemon 아키텍처로 구현, BYOK·자가 호스팅·Vercel 배포 지원."
source: "https://github.com/nexu-io/open-design"
---

# Open Design — Claude Design 오픈소스 대안

**GitHub**: https://github.com/nexu-io/open-design

> Claude Design이 세운 기준 그대로, 하지만 오픈소스로, 여러분의 것으로.

---

## 왜 만들었나

Anthropic Claude Design(2026-04-17, Opus 4.7 기반)은 LLM이 디자인 산출물을 직접 내놓기 시작했음을 증명했다.  
하지만 **클로즈드 소스·유료·클라우드 전용·Anthropic 모델 종속**이라는 한계가 있다.

Open Design(OD)은 그 오픈소스 대안이다:
- 동일한 루프, 동일한 '아티팩트 우선' 사고방식
- **벤더 종속 없음** — BYOK(자체 키), 자가 호스팅, Vercel 배포, 에이전트 교체 모두 가능
- 에이전트를 새로 만들지 않음 — 이미 설치된 CLI 에이전트(Claude Code 등)에 연결

---

## 아키텍처

```
웹앱 (Vercel 배포)
  ↕ HTTP
로컬 Daemon (pnpm tools-dev)
  ↕ PATH 스캔
설치된 CLI 에이전트 (Claude Code, Codex 등)
```

- 로컬 실행: `pnpm tools-dev`
- 웹 레이어: Vercel 배포
- 모든 레이어에서 BYOK 지원

---

## 워크플로 — 실제 작동 순서

예시: "시드 라운드를 위한 매거진 스타일 피치덱 만들어줘"

1. **초기화 질문 폼** 등장 (모델이 픽셀 하나 그리기 전)
2. 에이전트가 **5가지 시각적 방향** 중 하나 선택
3. **실시간 TodoWrite 계획 카드**가 UI에 스트리밍
4. Daemon이 디스크에 실제 **프로젝트 폴더 생성** (seed 템플릿 + 레이아웃 라이브러리 + 자가 점검 체크리스트)
5. 에이전트가 **pre-flight 점검** 수행
6. 출력물에 대해 **5차원 검토** 실행
7. 샌드박스 iframe에 렌더링되는 단일 `<artifact>` 내보내기

---

## 기반 4개 오픈소스 프로젝트

| 프로젝트 | 역할 | 기여 내용 |
|----------|------|-----------|
| `alchaincyf/huashu-design` | 디자인 철학 나침반 | Junior-Designer 워크플로, 5단계 브랜드 에셋 프로토콜, anti-AI-slop 체크리스트, 5차원 자기 검토, "5가지 학파 × 20가지 디자인 철학" |
| `op7418/guizang-ppt-skill` | 덱 모드 | 매거진 레이아웃, WebGL hero, P0/P1/P2 체크리스트 |
| `OpenCoworkAI/open-codesign` | UX 북극성 | 스트리밍 아티팩트 루프, 샌드박스 iframe 미리보기, 실시간 에이전트 패널, 5가지 내보내기(HTML/PDF/PPTX/ZIP/Markdown) |
| `multica-ai/multica` | Daemon 아키텍처 | PATH 스캔 에이전트 감지, 로컬 단일 특권 프로세스 Daemon |

---

## open-codesign과의 차이

| 항목 | Open Design (OD) | open-codesign |
|------|-----------------|---------------|
| 폼 팩터 | 웹앱 + 로컬 Daemon | Electron 데스크탑 앱 |
| 에이전트 | 이미 설치된 CLI 위임 | pi-ai 번들 |
| 배포 | Vercel + 로컬 | 로컬 전용 |

---

## 핵심 기능 요약

- 30+ 디자인 스킬 / 71+ 브랜드 시스템
- 스케치 모드 지원
- 모든 Code Agent 호환
- 결정론적 팔레트 라이브러리 + 체크리스트 문화

---

## 관련 노트

- [[refero-styles-design-md-2000-products-library]] — DESIGN.md 파일 기반 디자인 시스템 참고
