---
title: "agentmemory — AI 코딩 에이전트용 장기 기억 저장소 오픈소스 (11.2k⭐)"
date: 2026-05-15
tags: [ai/agent, dev/tool, agent/memory, productivity/automation]
description: "Claude Code, Codex CLI, Cursor, Gemini CLI 등 AI 코딩 에이전트의 세션 간 기억을 유지하는 오픈소스. 12개 자동 후크로 작업 내용을 캡처하고 다음 세션 시작 시 관련 기억을 주입한다."
source: "https://www.threads.com/@ai_jjuun/post/DYbv-bOk4jU"
---

# agentmemory — AI 코딩 에이전트용 장기 기억 저장소

**GitHub**: https://github.com/rohitg00/agentmemory  
**⭐ 11.2k stars** / 945 forks / 40개 릴리스  
**라이선스**: Apache-2.0

AI 코딩 에이전트한테 프로젝트 설명을 매번 다시 해야 하는 문제를 해결한다.  
이전 세션에서 한 작업을 저장하고, 다음 작업 시 필요한 기억을 자동으로 꺼내 쓴다.

---

## 설치

```bash
npm install -g @agentmemory/agentmemory
agentmemory   # 메모리 서버 시작 (포트 3111)

# 또는 npx 즉시 실행
npx @agentmemory/agentmemory
```

---

## 5가지 핵심 장점

| # | 장점 |
|---|------|
| ① | 프로젝트 구조를 매번 다시 설명할 필요가 줄어듦 |
| ② | 이전에 고친 버그·결정한 규칙을 다시 찾기 쉬움 |
| ③ | Codex, Claude Code, Cursor 등 여러 에이전트에서 공유 |
| ④ | 로컬 실행 가능, 외부 DB 없이 시작 |
| ⑤ | Viewer로 쌓인 기억 목록 확인 가능 |

---

## 지원 에이전트

**네이티브 통합** (플러그인 + 12개 후크 + MCP):
- Claude Code, Codex CLI, OpenClaw, Hermes, pi, OpenHuman

**MCP 서버 지원**:
- Cursor, Gemini CLI, OpenCode, Cline, Goose, Kilo Code
- Claude Desktop, Windsurf, Roo Code, Aider(REST API)

---

## 작동 방식

```
PostToolUse 후크 발동
  → SHA-256 중복 제거
  → 프라이버시 필터 (API 키·비밀번호 자동 제거)
  → 관찰 저장
  → LLM 압축
  → 벡터 임베딩
  → BM25 + 벡터 인덱싱

SessionStart 시
  → 하이브리드 검색 (BM25 + 벡터 + 지식 그래프, RRF 융합)
  → 관련 기억 컨텍스트 주입
```

### 4단계 메모리 진화

작업 메모리 → 에피소드 → 의미론 → 절차 메모리

---

## 기술 스택

| 항목 | 내용 |
|------|------|
| 언어 | TypeScript 81%, HTML 8%, JavaScript 8% |
| 저장소 | SQLite + 메모리 내 벡터 인덱스 |
| 임베딩 | 로컬(`all-MiniLM-L6-v2`) 또는 OpenAI/Gemini/Voyage AI |
| 배포 | Docker Compose, Fly.io, Railway 템플릿 |

**별도 DB·Redis·Express 불필요**

---

## 성능 지표

- **검색 정확도 (R@5)**: 95.2% (LongMemEval-S)
- **토큰 절감**: 연간 ~170K 토큰 (~$10 비용)
- **MCP 도구**: 51개 / **자동 후크**: 12개 / **테스트**: 950+ 통과

---

## 주의사항

민감한 코드·토큰·회사 프로젝트에 붙일 때는 **무엇이 저장되는지 먼저 확인**한다.  
(프라이버시 필터가 있지만 범위 파악 후 사용 권장)

---

## 관련 노트

- [[hermes-agent-self-growing-ai-agent-tips]] — Hermes Agent 메모리·스킬 관리 (유사한 세션 지속성 문제 해결)
- [[llm-wiki-self-updating-knowledge-base-karpathy]] — LLM이 지식을 스스로 축적하는 패턴 (agentmemory와 개념 연결)
