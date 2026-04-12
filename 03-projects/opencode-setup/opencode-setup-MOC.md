---
title: "OpenCode Setup — MOC"
date: 2026-04-12
tags: [project/opencode, ai-agent, workflow, automation, claude-code]
description: "OpenCode 세팅 프로젝트의 허브 페이지. 4개 Layer로 분기되는 전체 구조를 한눈에 파악한다."
type: MOC
status: active
updated: 2026-04-12
sources:
  - "https://github.com/affaan-m/everything-claude-code"
  - "https://github.com/garrytan/gbrain"
  - "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f"
---

# 사내 OpenCode 기반 업무효율화 셋업

## 목표

ECC(Everything Claude Code), GBrain, Karpathy LLM Wiki — 3개 프레임워크의 핵심 패턴을 합쳐 사내 OpenCode 셋업을 구축한다. Vue.js + Spring Boot 스택, 내부망 / 컨테이너화 불가 제약 하에서 동작하는 지식-누적형 에이전트 시스템이 결과물이다.

## 3개 프레임워크의 역할 분담

- Karpathy LLM Wiki — "지식을 어떻게 구조화할 것인가" 패턴 제공 (raw / wiki / schema 3계층)
- GBrain — "매 응답 전 brain 읽고, 학습 후 쓰는" brain-agent loop 메커니즘 제공
- ECC — OpenCode 위에서 agents / skills / hooks / commands 실행 계층 구조 제공

## 전체 아키텍처 (4 Layer)

원본 소스 → 지식 brain → 에이전트 실행 → 산출물 → 다시 brain 으로 피드백되는 복리 루프 구조.

- [[layer1-raw-sources]] — Slack, Confluence, Git repos, Excel 등 불변 원본 소스
- [[layer2-knowledge-brain]] — 마크다운 wiki + PGLite 임베딩 + ingest / query / lint 3대 오퍼레이션
- [[layer3-agent-harness]] — CLAUDE.md + opencode.json + agents / skills / hooks / MCP / commands
- [[layer4-outputs]] — 코드 리뷰 / 문서 생성 / 업무 자동화 / 인수인계 위키

## 핵심 원칙

**Read before respond → Write after learn.** 모든 에이전트 상호작용이 이 원칙을 따라야 다음 세션이 더 똑똑해진다. 응답 전 brain 조회, 응답 후 새 정보 기록. 이 루프가 깨지면 매 세션이 zero-shot RAG 로 퇴화한다.

## 사내 환경 제약 반영

- 컨테이너화 불가 → PGLite (Postgres 17.5 WASM 임베디드) 로 서버 없이 시작
- 내부망 → 모든 MCP 를 stdio 타입 로컬 프로세스로 구성, remote MCP 미사용
- API 키 관리 → `opencode-claude-auth` 플러그인 + `.secrets/` 디렉토리 로 토큰 격리

## 로드맵

1. Layer 3 부터 구축 (CLAUDE.md + opencode.json 최소 셋업)
2. Layer 2 의 raw/ wiki/ 디렉토리와 index.md / log.md 초기화
3. Ingest 오퍼레이션 먼저 가동 → 사내 기존 문서 10-20개로 검증
4. Query / Lint 오퍼레이션 추가
5. 사내 GitLab MCP 연동으로 PR 리뷰 자동화

## 관련 노트

- JunVector CLAUDE.md 운영 규칙과 병행 운영 가능 — 이 wiki 는 에이전트 중심, JunVector 는 인간 중심
- 참고: [[anthropic-2026-agentic-coding-trends-report]] (개발자 = AI 오케스트레이터 흐름)
