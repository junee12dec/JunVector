---
title: "Hermes Desktop — GitHub Actions로 자동 배포하는 Hermes Agent 데스크톱 앱"
date: 2026-05-15
tags: [ai/agent, dev/electron, dev/tool, productivity/automation]
description: "NousResearch Hermes Agent를 CLI 없이 사용할 수 있는 Electron 기반 크로스플랫폼 데스크톱 앱. GitHub Actions로 배포 자동화, 10+ LLM 프로바이더 지원, 22개 슬래시 명령 내장."
source: "https://www.threads.com/@viralmoneyai/post/DYVcQE3mK1X"
---

# Hermes Desktop — GitHub Actions로 자동 배포하는 Hermes Agent 데스크톱 앱

**GitHub**: https://github.com/fathah/hermes-desktop  
**기반**: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

CLI를 손으로 설치·관리할 필요 없이, 앱 하나로 Hermes Agent 설치→프로바이더 설정→일상 사용을 한 곳에서 처리한다.  
→ CLI 기반 활용 팁: [[hermes-agent-self-growing-ai-agent-tips]]

---

## 주요 기능

- **설치 마법사**: 의존성 포함 첫 실행 설정 자동화
- **로컬/원격 모드**: `127.0.0.1:8642` 로컬 또는 원격 API 서버 선택
- **10+ LLM 프로바이더**: OpenRouter, Anthropic, OpenAI, Google, xAI 등
- **스트리밍 채팅**: SSE 기반 실시간 응답 + 마크다운 렌더링
- **토큰 비용 추적**: 실시간 프롬프트/완성 토큰 수·비용 표시
- **22개 슬래시 명령**: `/web`, `/image`, `/code`, `/shell` 등

---

## 설치 — 플랫폼별 패키지

| 플랫폼 | 형식 | 비고 |
|--------|------|------|
| macOS | `.dmg` | 코드 서명 필요 |
| Linux | `.AppImage` / `.deb` / `.rpm` | — |
| Windows | `.exe` | SmartScreen 경고 예상 |

**Windows winget**: `microsoft/winget-pkgs` 제출 대기 중

---

## GitHub Actions 배포

저장소에 `.github/workflows` 포함 — 빌드·배포 자동화 내장.  
GitHub Action 하나로 PC에 앱을 배포하는 구조라 초보자에게 적합.

---

## 기술 스택

| 기술 | 버전 |
|------|------|
| Electron | v39 |
| React | v19 |
| TypeScript | v5.9 (코드의 89.7%) |
| Tailwind CSS | v4 |
| Vite | v7 |
| better-sqlite3 | FTS5 풀텍스트 검색 |
| i18next | 다국어 지원 |

---

## 관련 노트

- [[hermes-agent-self-growing-ai-agent-tips]] — Hermes Agent CLI 활용 팁 (메모리·스킬·토큰 절약)
- [[hermes-agent-launch-announcement]] — Hermes Agent 출시 발표
