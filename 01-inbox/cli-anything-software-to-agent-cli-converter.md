---
title: "CLI-Anything — 모든 소프트웨어를 에이전트용 CLI로 변환하는 도구 (명령어 1개)"
date: 2026-05-01
tags: [agent/tool, dev/cli, ai/automation]
description: "GIMP·Blender·LibreOffice·OBS 등 어떤 소프트웨어든 명령어 하나로 에이전트 네이티브 CLI로 자동 생성. AI 에이전트가 GUI를 다루는 대신 CLI로 소프트웨어를 제어하게 만드는 핵심 도구."
source: "https://www.threads.com/@githubprojects/post/DX8aPCvGp0N"
---

# CLI-Anything — 모든 소프트웨어를 에이전트용 CLI로 변환

명령어 하나로 어떤 소프트웨어든 AI 에이전트가 쓸 수 있는 CLI로 자동 생성.

---

## 핵심 문제 해결

AI 에이전트는 GUI를 잘 못 다룬다 — 스크린샷, 픽셀 클릭, 불안정한 RPA 체인.  
CLI-Anything은 이를 우회: **실제 소프트웨어 백엔드에 CLI 인터페이스를 덮어씌움**.  
장난감 재구현 없이 진짜 소프트웨어가 렌더링을 처리한다.

---

## 자동 생성 기능

코드베이스를 가리키면 자동으로 생성되는 것:
- 완전한 **Click CLI**
- **REPL** (대화형 셸)
- **JSON 출력**
- **Undo/Redo** 지원
- **테스트 스위트**

---

## 7단계 파이프라인

1. **Analyze source** — 소스 코드 분석
2. **Design commands** — 커맨드 설계
3. **Implement CLI** — CLI 구현
4. **Plan tests** — 테스트 계획
5. **Write tests** — 테스트 작성
6. **Document** — 문서화
7. **Publish to PATH** — 시스템 PATH에 등록

---

## 이미 제공된 하네스 (35+개)

Blender / GIMP / Inkscape / Audacity / Godot / FreeCAD / n8n / Ollama / ComfyUI / Draw.io + 더 많은 도구

**테스트**: 2,280+ 테스트, 통과율 100%

---

## CLI-Hub

에이전트가 필요한 CLI를 **자율적으로 탐색하고 설치** — 사람 개입 없이.

---

## 호환 에이전트

Claude Code / OpenClaw / Pi / Codex / OpenCode / Goose 등
