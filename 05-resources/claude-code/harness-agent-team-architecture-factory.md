---
title: "Harness — 프로젝트 설명 한 줄로 에이전트 팀 아키텍처를 찍어내는 factory"
date: 2026-04-27
tags: [ai/claude, dev/agent, productivity/automation]
description: "도메인 설명 한 줄을 입력하면 6가지 패턴 중 적합한 에이전트 팀 구조와 .claude/agents/, .claude/skills/ 산출물을 자동 생성하는 Claude Code용 팀 아키텍처 factory."
source: "https://www.threads.com/@hermes_agent_kr/post/DXq447Uk_E_"
---

# Harness — 프로젝트 설명 한 줄로 에이전트 팀 아키텍처를 찍어내는 factory

> "도메인을 설명하는 한 문장이 곧 에이전트 팀 설계도로 바뀐다"

**GitHub**: https://github.com/revfactory/harness

---

## 개요

Claude Code용 플러그인이 아닌, **팀 아키텍처를 찍어내는 factory**.

| 항목 | 내용 |
|------|------|
| **입력** | 프로젝트 설명 한 줄 |
| **출력** | 6가지 패턴 중 맞는 구조 + `.claude/agents/` + `.claude/skills/` 산출물 |

---

## 6가지 팀 패턴

| 패턴 | 설명 |
|------|------|
| **Pipeline** | 순차적 단계별 처리 |
| **Fan-out/Fan-in** | 병렬 분산 후 취합 |
| **Expert Pool** | 전문가 풀에서 필요한 에이전트 선택 |
| **Producer-Reviewer** | 생성 + 검토 분리 |
| **Supervisor** | 감독 에이전트가 하위 에이전트 조율 |
| **Hierarchical Delegation** | 계층적 위임 구조 |

- **기본 모드**: Agent Teams (지속적 팀 구조)
- **단발성 작업**: Subagents로 전환

---

## 핵심 기능: `/harness:evolve`

실제 사용 후 달라진 구조를 **델타(delta)로 되먹여** 다음 초안을 더 shipped 상태에 가깝게 만든다.

> "프롬프트 한 줄을 재사용 가능한 팀 설계 자산으로 축적하는 **메타 제작기**"

단순히 팀을 만드는 것을 넘어, 사용 경험을 바탕으로 팀 설계가 스스로 진화한다.

---

## 링크

- GitHub: https://github.com/revfactory/harness
