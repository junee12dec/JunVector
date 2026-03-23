---
title: "MiniMax AI 에이전트 스킬 오픈소스 공개"
date: 2026-03-23
tags: [ai/tools, dev/agent]
description: "MiniMax가 Claude Code·Cursor·Codex 등 주요 AI 에이전트를 위한 6종 스킬을 오픈소스로 공개. 프론트엔드·백엔드·모바일·GLSL·GIF 스티커 제작 지원, MiniMax 미디어 생성 API 내장."
source: "https://www.threads.com/@daon_k/post/DWNbsWaCU83?xmt=AQF07otAtxd_cA2BREPi9DT3sb5naenp5HQ7YENeEL4gex3fHAJ3Uh27mZ7NaLvthVrNUt0H&slof=1"
---

# MiniMax AI 에이전트 스킬 오픈소스 공개

MiniMax가 자사 AI 에이전트용 스킬을 오픈소스로 공개했다.

## 지원 에이전트

Claude Code, Cursor, Codex, OpenCode 모두 지원한다.

## 제공 스킬 (6종)

| 스킬 | 기술 스택 |
|------|-----------|
| 프론트엔드 개발 | React / Next.js |
| 풀스택 백엔드 아키텍처 | — |
| Android | Kotlin / Jetpack Compose |
| iOS | UIKit / SwiftUI |
| GLSL 셰이더 | — |
| GIF 스티커 제작 | — |

## 핵심 특징

`frontend-dev` 스킬에 MiniMax 자체 API(이미지, 영상, 오디오 생성)가 통합되어 있다. 에이전트가 UI를 짜면서 미디어 에셋도 직접 생성할 수 있는 구조다.

## Claude Code에서 사용하기

```bash
claude plugin marketplace add https://github.com/MiniMax-AI/skills
claude plugin install minimax-skills
```
