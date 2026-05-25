---
title: "ArcKit — AI 네이티브 엔터프라이즈 아키텍처 거버넌스 툴킷 (68개 슬래시 명령, 10개 자율 에이전트)"
date: 2026-05-23
tags: [ai/agent, dev/tool, dev/architecture, agent/skill]
description: "Claude Code·Copilot·Gemini CLI·Codex에서 68개 슬래시 명령으로 아키텍처 산출물을 생성하는 오픈소스 툴킷. 10개 자율 리서치 에이전트, AWS/Azure/GCP MCP 서버, UK 정부 거버넌스 프레임워크 내장."
source: "https://github.com/tractorjuice/arc-kit"
---

# ArcKit — AI 네이티브 엔터프라이즈 아키텍처 거버넌스 툴킷

**GitHub**: https://github.com/tractorjuice/arc-kit  
**⭐ 1.9k stars** / MIT 라이선스  
**웹사이트**: https://arckit.org/

> "Enterprise Architecture Governance & Vendor Procurement Toolkit — free, open-source, and AI-native."

`arckit init my-project` 한 줄로 엔터프라이즈 아키텍처 워크스페이스 전체를 스캐폴딩.

---

## 핵심 수치

| 항목 | 수치 |
|------|------|
| 슬래시 명령 | 68개 공식 + 64개 커뮤니티 = **132개** |
| 자율 리서치 에이전트 | **10개** |
| 지원 AI 도구 | Claude Code, Copilot, Gemini CLI, Codex, OpenCode |
| 내장 MCP 서버 | AWS, Azure (Microsoft Learn), GCP, UK Gov Repo |

---

## 주요 슬래시 명령

**핵심 워크플로우** (순서대로 실행):

| 명령 | 산출물 |
|------|--------|
| `/arckit.principles` | 아키텍처 원칙 정의 |
| `/arckit.stakeholders` | 이해관계자 분석 |
| `/arckit.requirements` | 상세 요구사항 |
| `/arckit.data-model` | 데이터 모델·ERD |
| `/arckit.wardley` | Wardley 맵 |
| `/arckit.risk` | 위험 등록 (Orange Book) |
| `/arckit.sobc` | 전략적 비즈니스 케이스 |
| `/arckit.sow` | RFP 생성 |
| `/arckit.backlog` | 제품 백로그 |
| `/arckit.traceability` | 추적성 매트릭스 |

**규정 준수 (UK Government)**:

| 명령 | 기준 |
|------|------|
| `/arckit.tcop` | Technology Code of Practice |
| `/arckit.service-assessment` | GDS Service Standard |
| `/arckit.secure` | NCSC Cyber Assessment Framework |

---

## 왜 슬래시 명령인가

각 명령이 **무거운 거버넌스 문서**를 생성하고, 명령 간에 **의존 순서**가 있기 때문:  
원칙 → 이해관계자 → 요구사항 → 데이터 모델 → … → 추적성  
모든 산출물이 앞 단계 원칙·이해관계자로 거슬러 올라갈 수 있다.

---

## 기존 EA 도구와의 차이

| 기존 EA 플랫폼 | ArcKit |
|----------------|--------|
| 정적 문서 도구 | 자율 리서치 환경 |
| 고가 라이선스 | 무료·오픈소스 |
| 클라우드 조사 수동 | AWS/Azure/GCP MCP 에이전트가 자동 조사 |
| 거버넌스 프레임워크 별도 | UK Green Book·Orange Book 내장 |

---

## 설치

```bash
# Claude Code (가장 완전한 경험)
claude install latest
claude plugin install arckit

# 기타 AI 도구
pip install git+https://github.com/tractorjuice/arc-kit.git
arckit init my-project --ai codex  # 또는 --ai copilot
```

---

## 관련 노트

- [[architecture-diagram-generator-claude-skill-html-svg]] — 아키텍처 다이어그램 자동 생성 Claude 스킬 (ArcKit 산출물과 조합 가능)
- [[claude-codebase-architecture-html-json-prompt]] — Claude로 코드베이스 아키텍처 매핑 (유사한 아키텍처 문서화 맥락)
- [[awesome-agent-skills-largest-curated-library]] — 에이전트 스킬 생태계 라이브러리
- [[production-ai-agent-architecture-4layers]] — 프로덕션 에이전트 아키텍처 설계 원칙
