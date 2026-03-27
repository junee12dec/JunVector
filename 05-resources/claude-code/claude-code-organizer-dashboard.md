---
title: "Claude Code Organizer — 메모리·스킬·MCP·훅을 스코프별로 관리하는 대시보드"
date: 2026-03-26
tags: [ai/claude, dev/tools, productivity/workflow]
description: "Claude Code의 메모리·스킬·MCP 서버·훅을 스코프(Global→Workspace→Project)별로 한눈에 정리하는 대시보드 도구. 컨텍스트 윈도우 낭비를 줄이고 드래그앤드롭으로 설정을 이동할 수 있다."
source: "https://github.com/mcpware/claude-code-organizer"
---

# Claude Code Organizer — 메모리·스킬·MCP·훅을 스코프별로 관리하는 대시보드

> Claude Code 설정이 꼬였다면, 메모리 위치를 매번 다시 설명했다면 → 이 도구 하나로 해결

MIT 라이선스. 제작: ithiria894

## 어떤 문제를 해결하나?

### 1. 토큰 낭비
Claude Code는 세션 시작 시 설정 파일을 자동으로 사전 로드한다.
실제 사례: 아무 입력 없이도 **21.9K 토큰이 즉시 소비**, 115.4K가 대기 → 200K 컨텍스트의 11% 선점.

### 2. 스코프 오염
설정 항목이 잘못된 스코프에 분산 → 중복 발생.
예: Teams 2회, Gmail 3회, Playwright 3회가 서로 다른 스코프에 중복 등록.

## 주요 기능

| 기능 | 설명 |
|------|------|
| 계층형 스코프 뷰 | Global → Workspace → Project 상속 관계 시각화 |
| 드래그앤드롭 이동 | 메모리·스킬·MCP 서버를 스코프 간 이동 |
| 컨텍스트 버짓 시각화 | 컴포넌트별 토큰 소비량 확인 |
| 실제 파일 시스템 작업 | `~/.claude/` 파일을 직접 이동 (뷰어가 아님) |
| 검색·필터링 | 모든 리소스 타입 통합 검색 |
| 100+ E2E 테스트 | 보안·파일시스템·버짓 계산 검증 |
| Zero dependencies | Node.js 내장 모듈만 사용 |

## 이동 가능한 리소스

- **이동 가능**: 메모리, 스킬, MCP 서버
- **조회 전용**: 설정(settings), 훅(hooks), 플러그인, 플랜

## 설치 및 실행

```bash
# 설치 없이 바로 실행 (추천)
npx @mcpware/claude-code-organizer

# 전역 설치 후 실행
npm install -g @mcpware/claude-code-organizer
claude-code-organizer
```

## 플랫폼 지원

| 플랫폼 | 지원 여부 |
|--------|----------|
| Ubuntu/Linux | ✅ 지원 |
| macOS | 아마 가능 (미검증) |
| WSL | 아마 가능 (미검증) |
| Windows | ❌ 미지원 |

## 링크

- GitHub: https://github.com/mcpware/claude-code-organizer
- 한국어 README: https://github.com/mcpware/claude-code-organizer/blob/main/README.ko.md
- Threads 소개: https://www.threads.com/@iam_mychan/post/DWXdqobEt9z
