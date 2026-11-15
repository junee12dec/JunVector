---
title: "Hycli — 웹사이트를 리버싱해서 결정론적 CLI로 자동화하는 도구"
date: 2026-10-21
tags: [dev/tools, ai/agent, dev/automation]
description: "웹사이트를 리버싱해 결정론적 CLI 명령어로 바꿔주는 오픈소스. Playwright 스타일 AI 브라우저 대비 토큰 효율이 압도적으로 높고, 캡챠·로그인·스크래핑 방지까지 처리한다."
source: "https://www.threads.com/share/BAauj_a--1/"
---

# Hycli — 웹사이트를 결정론적 CLI로 자동화

GitHub: [Hybirdss/Hycli](https://github.com/Hybirdss/Hycli)

## 핵심 아이디어

웹사이트를 **리버싱**해서 CLI 명령어 셋으로 변환 → AI 에이전트가 브라우저를 직접 조작하지 않고 **명령어만 호출**.

| 비교 | Playwright 스타일 AI 브라우저 | Hycli |
|------|-------------------------------|-------|
| 접근 방식 | AI가 페이지를 읽고 클릭 | 결정론적 CLI 명령어 |
| 토큰 효율 | 낮음 (DOM 전체 읽음) | **압도적으로 높음** |
| 동작 안정성 | 확률적 | 결정론적 |

## 주요 기능

- **캡챠 무시** — 거의 모든 웹사이트 자동화 가능
- **로그인 인식** — AI가 로그인 정보를 읽지 않음 (보안)
- **스크래핑 방지 우회** 내장

## 적용 예시

블로그, 카페, 배달의민족, 당근마켓, 홈택스 등 실사용 중.

## 보안 설계

> web2 보안작업을 실제로 하는 입장에서, REA와는 다르게 악용방지를 이것저것 했다.

- 악용 방지 기법 다수 적용
- [[rea-ai-reverse-engineering-code-restore|REA]]와 달리 보안을 우선 설계

## 사용 팁

> 대시보드 내에서 쓰는 것보다 **AI 에이전트한테 GitHub을 던져주는 게** 더 성능이 좋다.
