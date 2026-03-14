---
title: "Obsidian + Claude Code로 AI 세컨드 브레인 구축하기"
date: 2026-03-10
tags: [productivity/pkm, ai/claude, tools/obsidian]
description: "Obsidian과 Claude Code를 연결해 15분 만에 AI 세컨드 브레인을 만드는 무료 셋업 가이드. CLAUDE.md와 메모리 파일을 핵심으로 사용한다."
source: "https://www.notion.so/Steal-My-AI-Second-Brain-Setup-With-Obsidian-Claude-Code-For-Free-7011022ac01683a4a2bf01fa9f378954"
---

# Obsidian + Claude Code로 AI 세컨드 브레인 구축하기

> 원출처: [Noah Vincent - Substack](https://noahvnct.substack.com/p/steal-my-ai-second-brain-setup-with)

## 핵심 개념

Obsidian(볼트) + Claude Code(AI 에이전트) 조합으로 **무료** AI 세컨드 브레인을 구축한다.
셋업 시간 15분 이내. 볼트 템플릿(IPARAG 구조 + CLAUDE.md 포함) 제공.

---

## 왜 Obsidian인가?

- 완전 무료, 구독 없음
- 파일이 로컬 마크다운으로 저장 → 데이터 소유권 100%
- 벤더 락인 없음 (Notion, Evernote 대비)
- 플레인 텍스트라 AI가 API 없이 네이티브로 읽음

## 왜 Claude Code인가?

- 볼트 안에서 살아있는 AI 에이전트
- 파일 읽기·쓰기·탐색 권한으로 볼트 전체를 이해
- Claude 앱 무료 다운로드, 풀 사용은 ~€20/월 구독 필요

---

## 셋업 3단계

### 1. Claude Code를 볼트에 연결

Claude 앱 → Code 섹션 → 폴더 선택 → Obsidian 볼트 폴더 지정
끝. Claude Code가 볼트 파일에 읽기/쓰기 권한을 가짐.

### 2. Obsidian CLI 활성화

Claude가 마크다운 파일을 하나씩 읽는 대신 네이티브 명령어로 볼트를 탐색하게 함.
→ 토큰 효율 대폭 향상, 구조적 이해 강화. 한 번만 설정.

### 3. CLAUDE.md 개인화

- 볼트 루트의 `CLAUDE.md`를 작성
- Claude가 **매 세션 시작 시 자동으로** 이 파일을 먼저 읽음
- 첫 프롬프트부터 내 시스템을 아는 상태로 시작

---

## 핵심 컨텍스트 파일 2개

| 파일 | 역할 |
|------|------|
| `CLAUDE.md` | 나의 시스템, 폴더 구조, 운영 규칙 정의 |
| `memory.md` | 누적되는 개인 컨텍스트 (프로젝트, 집중 영역, 선호 등) |

컨텍스트가 AI 메모리가 아닌 **내 파일에** 저장됨 → 편집 가능, 영구 보존, 완전 통제.

---

## 시간에 따른 진화

| 기간 | Claude가 아는 것 |
|------|-----------------|
| 첫날 | 폴더 구조 |
| 1주 후 | 진행 중인 프로젝트, 현재 집중 영역 |
| 1개월 후 | 내가 의식적으로 기억하는 것 이상의 지식 베이스 |

---

## 주의사항

AI를 **사고를 증폭시키는 파트너**로 사용할 것.
정보 연결·구조화는 AI에게 맡기되, 종합·판단·창조는 본인이 한다.
세컨드 브레인은 지능을 **대체**하는 게 아니라 **증폭**해야 한다.

---

## 관련 리소스

- 무료 볼트 템플릿: Noah's Ark Bank (IPARAG 구조 + CLAUDE.md 템플릿 포함)
- [GitHub — COG Second Brain](https://github.com/huytieu/COG-second-brain)
- [GitHub — Claudesidian](https://github.com/heyitsnoah/claudesidian)
- [대안 가이드 — whytryai.com](https://www.whytryai.com/p/claude-code-obsidian)
