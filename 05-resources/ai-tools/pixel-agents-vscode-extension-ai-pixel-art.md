---
title: "Pixel Agents — AI 에이전트를 픽셀 아트 캐릭터로 시각화하는 VS Code 확장 (7.6k⭐)"
date: 2026-05-15
tags: [ai/agent, dev/vscode, dev/tool, design/aesthetic]
description: "Claude Code 터미널마다 픽셀 아트 캐릭터가 배정되어 가상 오피스 안에서 실제 작업(코드 작성·파일 검색·명령 실행)에 따라 애니메이션으로 움직이는 무료 VS Code 확장."
source: "https://www.threads.com/@drcintas/post/DYhPrdpEif2"
---

# Pixel Agents — AI 에이전트를 픽셀 아트 캐릭터로 시각화하는 VS Code 확장

**GitHub**: https://github.com/pablodelucca/pixel-agents  
**⭐ 7.6k stars** / 1.2k forks  
**라이선스**: MIT / 무료 오픈소스

각 Claude Code 터미널이 자신만의 애니메이션 픽셀 아트 캐릭터를 가지고 가상 오피스 안에서 일한다.

---

## 작동 방식

Claude Code의 **JSONL 파일을 감시**해서 에이전트 활동을 추적한다.  
코드 수정·변조 없이 순수 관찰만으로 작동.

```
Claude Code JSONL 로그 감시
  → 상태 머신 (대기 → 이동 → 입력/읽기)
  → BFS 경로 찾기
  → Canvas 2D 렌더링
  → VS Code 웹뷰에 표시
```

---

## 주요 기능

- **실시간 활동 추적**: 작업에 따라 캐릭터 애니메이션 변화
  - 코드 작성 중 / 파일 검색 중 / 명령 실행 중
- **가상 오피스 편집기**: 바닥·벽·가구 직접 설계
- **6가지 캐릭터**: 각 터미널·에이전트에 배정
- **음성 알림 + 말풍선**
- **하위 에이전트 시각화**
- 레이아웃 지속성 + 외부 자산 디렉토리 지원

---

## 설치

**VS Code Marketplace** 또는 **Open VSX**에서 검색 설치.

소스 빌드:
```bash
git clone https://github.com/pablodelucca/pixel-agents.git
cd pixel-agents && npm install
cd webview-ui && npm install && cd ..
npm run build
```

---

## 지원 에이전트

- **현재**: Claude Code 전용
- **장기 비전**: Codex, Gemini, Cursor, Copilot 등 플랫폼 무관 아키텍처

---

## 기술 스택

| 레이어 | 기술 |
|--------|------|
| 확장 | TypeScript, VS Code Webview API, esbuild |
| 웹뷰 | React 19, TypeScript, Vite, Canvas 2D |

---

## 관련 노트

- [[hermes-desktop-electron-app-github-actions]] — 에이전트를 데스크톱 앱으로 감싸는 다른 방식 (Electron 기반)
