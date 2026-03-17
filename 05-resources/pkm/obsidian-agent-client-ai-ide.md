---
title: "Obsidian Agent Client — 노트에서 Claude Code·Gemini·Codex 직접 실행"
date: 2026-03-17
tags: [tool/obsidian, ai/claude-code, productivity/pkm]
description: "Obsidian 노트에서 터미널 없이 AI 에이전트를 직접 실행하는 플러그인. 출시 6개월 만에 75,000 다운로드, 세컨드 브레인을 자연어 IDE로 전환한다."
source: "https://www.threads.com/@aisolutiondev/post/DV-iL8wFKwP?xmt=AQF00NcxT19n9i8Pr7rDEQcXo9Y6BcCvtL1eGtf2WnIXOgJthqwGboLfOYvshfqt_8GbFQQ&slof=1"
---

# Obsidian Agent Client — 노트에서 Claude Code·Gemini·Codex 직접 실행

Obsidian 안에서 AI 에이전트를 바로 실행할 수 있는 플러그인. 터미널을 열 필요 없이 노트 작성과 코드 구현을 한 곳에서 처리한다.

- GitHub: https://github.com/RAIT-09/obsidian-agent-client
- 출시 6개월 만에 **75,000 다운로드**

## 지원 AI 에이전트

- **Claude Code**
- **Gemini CLI**
- **Codex**
- 커스텀 에이전트 (OpenCode, Qwen Code, Kiro, Mistral Vibe 등)

## 주요 기능

| 기능 | 설명 |
|------|------|
| `@notename` 구문 | 노트를 AI 컨텍스트로 바로 참조 |
| 이미지 첨부 | 이미지를 대화에 포함 |
| 슬래시 명령어 | 빠른 액션 실행 |
| 멀티 에이전트 | 여러 에이전트 동시 실행 |
| 플로팅 채팅 창 | 작업 중 떠다니는 채팅 패널 |
| 모델 전환 | 대화 중 AI 모델 변경 |
| 세션 이력 관리 | 대화 기록 저장·복원 |
| 마크다운 내보내기 | 대화 결과를 노트로 저장 |
| 터미널 통합 | 인라인 터미널 지원 |

## 설치 방법

**BRAT 플러그인 사용 (권장)**

1. Obsidian에서 BRAT 플러그인 설치
2. BRAT 설정 → 베타 플러그인 추가
3. URL 입력: `https://github.com/RAIT-09/obsidian-agent-client`
4. Agent Client 활성화

**수동 설치**

Releases에서 `main.js`, `manifest.json`, `styles.css`를 다운로드해 플러그인 폴더에 배치.

## 설정 요구사항

- Node.js 경로 설정
- 각 에이전트의 ACP 어댑터 경로 설정
- API 키 또는 CLI 인증 필요
