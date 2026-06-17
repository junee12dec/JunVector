---
title: "GitHub Spec Kit — 아이디어를 빌드 준비 스펙으로 바꾸는 스펙 주도 개발 도구 (112k⭐)"
date: 2026-06-05
tags: [dev/tool, ai/agent, productivity/workflow, dev/planning]
description: "GitHub가 출시한 오픈소스 스펙 주도 개발(SDD) 툴킷. 아이디어 → 스펙 → 계획 → 태스크 → 구현 5단계를 슬래시 명령으로 처리하며 Claude Code·Copilot·Gemini 등 30개 이상의 AI 에이전트와 호환된다."
source: "https://github.com/github/spec-kit"
---

# GitHub Spec Kit — 스펙 주도 개발(SDD) 툴킷

**GitHub**: https://github.com/github/spec-kit  
**⭐ 112k stars** / 9.8k forks / MIT 라이선스

> "바이브 코딩을 멈춰라. 추측 없이, 정의된 스펙으로 빌드하라."

---

## 기존 방식 vs Spec Kit

| 기존 (바이브 코딩) | Spec Kit (SDD) |
|--------------------|----------------|
| 아이디어 → 즉흥 코딩 | 아이디어 → 스펙 → 계획 → 구현 |
| 에이전트가 추측 | 정의된 시나리오 기반 |
| 랜덤 출력 많음 | 예측 가능한 결과물 |

---

## 5단계 SDD 워크플로우

```
1. /speckit.constitution  → 프로젝트 원칙·제약 수립
2. /speckit.specify       → 제품 요구사항 스펙 정의
3. /speckit.plan          → 기술 구현 계획 작성
4. /speckit.tasks         → 실행 가능한 태스크 분해
5. /speckit.implement     → 계획대로 구현 실행
```

---

## 설치

```bash
# uv (권장)
uv tool install specify-cli

# 프로젝트 초기화
specify init
```

**요구사항**: Python 3.11+ / Linux·macOS·Windows / Git

---

## 호환 AI 에이전트

Claude Code · GitHub Copilot · Gemini · 기타 **30개 이상** 지원

```bash
specify integration list  # 전체 목록 확인
```

---

## 관련 노트

- [[prd-taskmaster-claude-code-skill-product-spec]] — PRD-Taskmaster (코딩 전 제품 요구사항 정의 — 같은 SDD 접근법)
- [[arckit-enterprise-architecture-ai-toolkit]] — ArcKit (코딩 전 문서화·거버넌스 툴킷)
- [[12-factor-agents-production-ai-engineering]] — 프로덕션 에이전트 12원칙 (명확한 태스크 정의 원칙 공유)
- [[github-copilot-sdk-embed-agent-byok]] — GitHub Copilot SDK (같은 GitHub 에이전트 생태계)
