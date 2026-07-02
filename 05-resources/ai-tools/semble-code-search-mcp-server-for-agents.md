---
title: "Semble — AI 에이전트용 초고속 코드 검색 MCP 서버 (CPU 전용, 2k⭐)"
date: 2026-05-15
tags: [ai/agent, dev/tool, agent/mcp, dev/search]
description: "전체 레포 인덱싱 263ms, 쿼리 응답 1.5ms로 GPU·API 키 없이 CPU만으로 작동하는 에이전트용 코드 검색 라이브러리. MCP 서버로 Claude Code, Cursor, Codex에서 즉시 사용 가능."
source: "https://www.threads.com/@github.awesome/post/DYdj4sYmnR2"
---

# Semble — AI 에이전트용 초고속 코드 검색 MCP 서버

**GitHub**: https://github.com/MinishLab/semble  
**⭐ 2,000 stars** / 89 forks / 최신 v0.1.7 (2026-05)  
**라이선스**: MIT

에이전트용으로 설계된 코드 검색 라이브러리.  
GPU, API 키, 외부 서비스 없이 CPU 단독으로 실행되며, 속도가 압도적이다.

---

## 성능 수치

| 지표 | Semble | 비교 |
|------|--------|------|
| 인덱싱 속도 | **~263ms** (전체 레포) | 코드 특화 트랜스포머 대비 200배 빠름 |
| 쿼리 응답 | **~1.5ms** | — |
| 검색 품질 (NDCG@10) | **0.854** | 137M 파라미터 트랜스포머의 99% 수준 |
| 토큰 절감 | **~98%** | grep+read(100k 토큰) → ~2k 토큰 |

---

## 설치

```bash
pip install semble
# 또는
uv tool install semble

# MCP 포함
uvx --from "semble[mcp]" semble
```

---

## MCP 서버 설정

**Claude Code**:
```bash
claude mcp add semble -s user -- uvx --from "semble[mcp]" semble
```

**Codex**: `~/.codex/config.toml`에 추가  
**Cursor**: `~/.cursor/mcp.json`에 추가  
**OpenCode**: `~/.opencode/config.json`에 추가

---

## 기술 스택

| 기술 | 역할 |
|------|------|
| Model2Vec (potion-code-16M) | 임베딩 |
| BM25 + 시맨틱 하이브리드 | 검색 방식 |
| tree-sitter | 코드 인식 청킹 |
| Reciprocal Rank Fusion (RRF) | 순위 재정렬 |

**언어**: Python 99.7%

---

## 왜 쓰나

기존 grep+read 방식은 레포 전체를 읽어 100k 토큰을 소비한다.  
Semble은 같은 94% 재현율을 ~2k 토큰으로 달성한다.  
에이전트가 코드 검색할 때 컨텍스트 낭비를 대폭 줄여준다.

---

## 관련 노트

- [[agentmemory-long-term-memory-for-coding-agents]] — 코딩 에이전트의 세션 간 기억 유지 (Semble과 함께 에이전트 컨텍스트 효율화)
- [[claude-codebase-architecture-html-json-prompt]] — 코드베이스 전체를 Claude에게 설명하는 다른 접근법
