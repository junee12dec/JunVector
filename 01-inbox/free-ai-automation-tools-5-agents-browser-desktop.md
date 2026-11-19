---
title: "반복 업무를 맡기는 무료 AI 자동화 도구 5개 — AI 전문가 팀·내 크롬 조작·페이지 내 AI 도우미·데스크톱 앱 조작·AI용 헤드리스 브라우저"
date: 2026-11-19
tags: [ai/agent, dev/automation, ai/tools]
description: "한 줄 지시로 역할별 AI가 협업하는 agency-agents-zh, 로그인된 내 크롬을 에이전트가 쓰는 browser-harness, 웹사이트에 한 줄 넣으면 AI 도우미가 생기는 page-agent, 데스크톱 앱 버튼을 읽고 누르는 agent-desktop, AI용 경량 헤드리스 브라우저 moli. 모두 무료 오픈소스다."
source: "https://www.threads.com/@yun_ja_dong/post/Df7B76FCVNO"
---

# 반복 업무를 맡기는 무료 AI 자동화 도구 5개

@yun_ja_dong (Threads, 2026-11-19): "반복 업무에 쓰던 수백 시간을 돌려받는 방법. 개발자들 사이에서만 유명한 무료 프로그램 5개."
별 수·라이선스는 저장 시점 GitHub 기준이다.

| # | 이름 | 하는 일 | 별 · 라이선스 |
|---|------|---------|----------------|
| 1 | agency-agents-zh | 한 줄 지시로 역할별 AI 전문가들이 일을 나눠 협업 | 약 22,200 · MIT |
| 2 | browser-harness | Claude Code·Codex·Cursor가 **로그인된 내 크롬**을 직접 조작 | 약 19,200 · MIT |
| 3 | page-agent | 웹페이지 안에 넣는 AI 도우미. 말로 화면을 조작 | 약 29,700 · MIT |
| 4 | agent-desktop | AI 에이전트용 컴퓨터 조작 CLI. 데스크톱 앱 버튼을 읽고 누름 | 약 25,500 · Apache-2.0 |
| 5 | moli | AI 에이전트용 경량 헤드리스 브라우저 (Rust) | 약 24,100 · Apache-2.0 |

## 1. agency-agents-zh — AI 전문가 팀

- https://github.com/jnMetaCode/agency-agents-zh
- "신제품 홍보 계획 짜 줘" 한 줄이면 마케터·디자이너·기획자 역할의 AI가 일을 나눠 몇 분 만에 전체 계획을 만든다.
- 전문가마다 맡은 일과 일하는 순서가 정해져 있어 결과물이 정리된 채로 나온다. 혼자 사업하는 사람이 팀을 꾸린 것처럼 쓴다.
- 규모: 글에는 "22개 부서, AI 전문가 328명", GitHub 설명에는 "20개 부서, 바로 쓰는 역할 277개, 중국 시장용 원작 에이전트 64개 포함"으로 숫자가 다르다.
- Claude Code·Cursor·Copilot 등 20종 도구를 지원한다. 설명이 중국어 위주이고, 체험판 사이트가 있다.
- 볼트의 [[agency-agents-147-ai-agents-company-structure|Agency Agents]](원본, 147개)의 중국어판·확장판으로 보인다.

## 2. browser-harness — 내 크롬을 대신 눌러 주는 AI

- https://github.com/browser-use/browser-harness
- "내 X 프로필에서 최근 영상 글 20개 찾아서 내려받아 줘" → AI가 내 크롬을 열고 직접 찾아서 받아 온다.
- Claude Code나 Codex에 안내 문장 하나를 붙여넣으면 설정된다.
- **내가 로그인해 둔 크롬을 그대로 써서** 로그인이 필요한 사이트 일도 맡길 수 있다.
- 쓸수록 AI가 필요한 기능을 스스로 만들어 붙여 나아진다.
- 주의: 내 계정으로 움직이므로 맡길 일은 신중하게 고른다.

## 3. page-agent — 내 웹사이트 안의 AI 도우미

- https://github.com/alibaba/page-agent
- 페이지 안에서 도는 JavaScript GUI 에이전트. 웹사이트에 코드 한 줄을 넣으면 그 페이지에 AI 도우미가 생긴다.
- 관리 화면에서 스무 번 클릭하던 입력이 "이 고객 정보로 주문서 채워 줘" 한 문장으로 끝난다.
- 고객관리·재고관리 같은 사내 시스템에 잘 맞고, 화면 조작이 불편한 사람의 접근성에도 도움이 된다. 체험판 사이트가 있다.

## 4. agent-desktop — 데스크톱 프로그램 조작

- https://github.com/vercel-labs/agent-desktop
- AI가 슬랙 같은 데스크톱 프로그램 화면을 읽고, 버튼을 누르고, 글자를 입력한다.
- **스크린샷을 찍어 위치를 맞추는 방식이 아니라 프로그램 안의 버튼 목록(접근성 정보)을 직접 읽어** 움직인다.
- 맥·윈도우·리눅스 지원.
- 주의: 화면 내용이 기록에 남을 수 있으니 개인 정보를 조심한다.

## 5. moli — AI용 헤드리스 브라우저

- https://github.com/lexmount/moli
- 웹페이지 주소 하나로 그 페이지를 깔끔한 글 문서·이미지·PDF로 뽑는다.
- 화면 없이 뒤에서 도는 가벼운 브라우저라 AI의 웹 검색·읽기를 빠르게 처리한다. Rust로 만들었다.
- 윈도우·맥·리눅스 지원. 명령어로 쓰는 프로그램이다.

## 참고

- 다섯 개 모두 무료지만 쓰는 방식에 따라 AI 사용료나 좋은 컴퓨터가 필요할 수 있다.
- 각 저장소의 README는 읽지 않았다. 설명은 Threads 글과 GitHub 저장소 설명을 합친 것이다.
