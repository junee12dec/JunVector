---
title: "PRD-Taskmaster — 코딩 시작 전 제품 요구사항을 명확히 정의하는 Claude Code 스킬 (477⭐)"
date: 2026-05-31
tags: [ai/claude, agent/skill, dev/tool, productivity/automation]
description: "막연한 아이디어를 코딩하기 전에 12개 이상의 질문으로 PRD·사용자 스토리·아키텍처 문서를 자동 생성하는 Claude Code 스킬. AI 에이전트가 추측 없이 명확한 지도를 갖고 개발을 시작하게 한다."
source: "https://github.com/anombyte93/prd-taskmaster"
---

# PRD-Taskmaster — 코딩 시작 전 제품 명세를 완성하는 Claude Code 스킬

**GitHub**: https://github.com/anombyte93/prd-taskmaster  
**⭐ 477 stars** / MIT 라이선스

> "AI 코딩 프로젝트는 코드가 나빠서 실패하는 게 아니다. 아이디어가 처음부터 명확히 정의되지 않아서 실패한다."

---

## 문제: 에이전트의 추측

```
"대시보드 만들어줘"
  → 사용자를 추측
  → 기능을 추측
  → 범위를 추측
  → 기술 스택을 추측
  → "완성"의 기준을 추측
```

**vibe coding은 에이전트가 틀린 것을 자신 있게 만들 때까지만 재미있다.**

---

## 해결: 코딩 전에 PRD 먼저

PRD-Taskmaster는 개인 PM처럼 12개 이상의 집중 질문을 한다:

| 질문 영역 | 내용 |
|-----------|------|
| 문제 | 해결하려는 문제가 무엇인가 |
| 타겟 사용자 | 누가 쓰는가 |
| 핵심 워크플로우 | 주요 사용 흐름 |
| 기술 스택 | 어떤 기술로 만드는가 |
| 성공 기준 | 언제 "완성"인가 |
| 제약 조건 | 무엇을 피해야 하는가 |
| 범위 | 포함할 것 / 제외할 것 |

---

## 생성 산출물

```
.taskmaster/
├── docs/prd.md          ← 전체 PRD (경영진 요약·문제 정의·목표·사용자 스토리)
├── architecture.md      ← 아키텍처 문서
├── tasks/               ← 실행 가능한 서브태스크
└── notes/               ← 메모
```

+ 프로젝트 루트에 `CLAUDE.md` (Claude Code용) / `codex.md` (Codex용) 자동 생성

---

## 자동 검증 (13가지)

- 모호한 언어 감지
- 테스트 가능성 확인
- 의존성 매핑
- 기타 품질 체크

---

## 설치

```bash
cd ~/.claude/skills
git clone https://github.com/anombyte93/prd-taskmaster.git
```

프로젝트에서 "PRD 생성" 관련 메시지 입력 시 자동 활성화.

---

## 관련 노트

- [[12-factor-agents-production-ai-engineering]] — 프로덕션 에이전트 12원칙 (PRD-Taskmaster가 해결하는 '명확한 태스크 정의' 원칙 포함)
- [[production-ai-agent-architecture-4layers]] — 프로덕션 에이전트 아키텍처 (PRD → 설계 → 구현 흐름 연관)
- [[arckit-enterprise-architecture-ai-toolkit]] — ArcKit 아키텍처 거버넌스 툴킷 (유사한 코딩 전 문서화 접근)
- [[claude-codebase-architecture-html-json-prompt]] — Claude로 코드베이스 구조 매핑 (PRD 이후 단계)
