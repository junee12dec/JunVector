---
title: "Agency Agents — 회사 조직 구조로 짜인 147개 AI 에이전트 라이브러리 (100k⭐)"
date: 2026-05-22
tags: [ai/agent, productivity/automation, dev/tool, agent/skill]
description: "12개 부서(Engineering·Design·Marketing·Sales·PM 등)로 구성된 147개 전문 AI 에이전트 라이브러리. 단순 프롬프트 모음이 아니라 페르소나·워크플로·산출물까지 정의된 실전 에이전트 팀."
source: "https://github.com/msitarzewski/agency-agents"
---

# Agency Agents — 회사 조직 구조로 짜인 147개 AI 에이전트 라이브러리

**GitHub**: https://github.com/msitarzewski/agency-agents  
**⭐ ~100,000 stars** / MIT 라이선스  
**에이전트 수**: 147개 / **부서 수**: 12개  
**지원 도구**: 11개 (Claude Code, GitHub Copilot, Cursor, Aider, Windsurf 등)

> "진짜 회사 조직처럼 짜여있어서, 본인 일에 즉시 매칭되는 에이전트 팀."

Reddit 스레드에서 시작해 몇 달간 다듬어진 자료. 각 에이전트는 단순 프롬프트가 아니라 **페르소나·워크플로·산출물**까지 정의되어 있다.

---

## 핵심 차별점

다른 프롬프트 모음과 달리 **회사 부서 구조**로 구성:

- 12개 부서 (Engineering·Design·Marketing·Sales·PM 등)
- 각 부서 안에서 역할 분담 (예: Marketing → Growth Hacker·Content Creator·SEO Specialist)
- 부서 간 협업 시나리오까지 README에 정리

---

## 부서별 에이전트 구성

### Product Division (5개)
PM의 일을 단계별로 분해:

| 에이전트 | 역할 |
|----------|------|
| Trend Researcher | 시장·경쟁사 분석 |
| Feedback Synthesizer | 사용자 피드백 분석 |
| Sprint Prioritizer | 스프린트 우선순위 결정 |
| Product Manager | PRD·로드맵·GTM 작성 |
| Behavioral Nudge Engine | 사용자 행동 설계 |

### Marketing Division (28개)
채널별·기능별·목적별로 세분화:

- **플랫폼별**: Twitter, Instagram, TikTok, Reddit, LinkedIn 각 전담
- **기능별**: SEO Specialist, Growth Hacker, Content Creator, Email Strategist
- **목적별**: AI Citation Strategist (ChatGPT·Claude 답변에 브랜드 인용 전략)

### Design Division (8개)
디자인 워크플로 단계별 분담:

| 단계 | 에이전트 |
|------|----------|
| 초기 | UX Researcher |
| 와이어프레임 | UX Architect |
| 시각화 | UI Designer + Brand Guardian |
| 마무리 | Whimsy Injector |
| 이미지 | Image Prompt Engineer |

### Sales Division (9개)
B2B 영업 사이클 전 단계 커버:

| 에이전트 | 역할 |
|----------|------|
| Outbound Strategist | 콜드 아웃리치·리드 발굴 |
| Discovery Coach | 디스커버리 콜 (SPIN·Gap Selling) |
| Sales Engineer | 기술 데모·POC |
| Deal Strategist | MEDDPICC 자격 확인·딜 클로징 |
| Account Strategist | 계약 후 확장 (Land-and-expand) |
| Sales Coach | 영업 코칭 |

---

## 설치

```bash
./scripts/install.sh
```

설치 스크립트가 시스템에 설치된 도구를 자동 감지하고 설치 위치를 묻는다.  
한 번 설치하면 이후 모든 세션에서 자동 활성화.

**지원 도구 11개**:  
Claude Code, GitHub Copilot, Cursor, Aider, Windsurf, Antigravity, Gemini CLI, OpenCode, OpenClaw, Qwen Code, Kimi Code

---

## 사용 철학

> 한 명의 AI에게 다 시키지 말고, 각 작업에 맞는 전문가 에이전트를 호출하라.

각 직무 = **반복 가능한 워크플로 + 도메인 지식 + 페르소나**의 조합.

---

## 관련 노트

- [[awesome-agent-skills-largest-curated-library]] — 1000+ 에이전트 스킬 라이브러리 (비슷한 에이전트 큐레이션 범주)
- [[claude-code-team-automation-wikidocs-guide]] — Claude Code 팀 자동화 실전 가이드
- [[claude-code-4-plugins-superpowers-gstack-omc-gsd]] — Claude Code 플러그인 생태계
- [[gstack-superpowers-ai-dev-workflow-6steps]] — 에이전트 조합 워크플로우 실전
- [[production-ai-agent-architecture-4layers]] — 프로덕션 에이전트 아키텍처 설계
