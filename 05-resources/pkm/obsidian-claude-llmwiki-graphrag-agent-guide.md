---
title: "Obsidian + Claude Code로 LLM Wiki·GraphRAG·AI 에이전트 봇 구축하기 — 원리부터 실전 가이드"
date: 2026-06-05
tags: [pkm/obsidian, ai/llm, ai/agent, dev/graphrag]
description: "Obsidian과 Claude Code·Codex를 결합해 LLM Wiki를 만들고, 부분적인 GraphRAG를 구축하며, 각 위키 파트를 담당하는 AI 에이전트 봇까지 설정하는 방법을 단계별로 정리한 실전 가이드."
source: "https://tofu-llmwiki-manual.manus.space"
---

# Obsidian + Claude Code로 LLM Wiki·GraphRAG·AI 에이전트 봇 구축하기

**가이드 페이지**: https://tofu-llmwiki-manual.manus.space  
**작성자**: @tofukyung

---

## 무엇을 다루는가

세 가지를 하나의 워크플로우로 연결한다:

| 단계 | 내용 |
|------|------|
| 1 | **LLM Wiki 구축** — Obsidian + Claude Code/Codex로 자기 갱신 위키 만들기 |
| 2 | **GraphRAG 활용** — 위키 내 관계를 그래프로 연결해 부분적 GraphRAG 구현 |
| 3 | **AI 에이전트 봇** — 각 위키 파트를 담당하며 스스로 발전하는 에이전트 설정 |

---

## 핵심 아이디어

- Obsidian의 **노트 간 링크 구조** → GraphRAG의 지식 그래프로 활용
- Claude Code / Codex → LLM Wiki의 Ingest·Lint 오퍼레이션 담당
- 파트별 전담 에이전트 → 위키가 인간 없이도 스스로 성장

---

## 관련 노트

- [[llm-wiki-self-updating-knowledge-base-karpathy]] — LLM Wiki의 원리 (Karpathy 패턴) — 이 가이드의 이론적 기반
- [[openkb-llmwiki-llm-knowledge-base-tools]] — openkb·llmwiki 실전 설치·사용 가이드 (동일 생태계 도구)
- [[graph-r1-rl-graphrag-iterative-reasoning]] — GraphRAG의 발전형 — RL로 훈련된 반복 추론 시스템
- [[cocoindex-realtime-incremental-rag-pipeline]] — 실시간 증분 RAG 파이프라인 (LLM Wiki의 데이터 인프라 맥락)
- [[rowboat-local-ai-coworker-knowledge-graph]] — 지식 그래프 기반 로컬 AI 코워커 (같은 개인 지식베이스 활용 범주)
