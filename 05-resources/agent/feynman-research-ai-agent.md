---
title: "Feynman — 논문 분석·실험 복제·피어 리뷰까지 하는 연구용 AI 에이전트"
date: 2026-03-26
tags: [ai/agent, ai/research, dev/tools]
description: "Claude Code 기반 오픈소스 연구 에이전트. 논문 검색·분석·메타 분석 리포트 생성부터 RunPod 실험 복제, 시뮬레이션 피어 리뷰까지 30분 안에 처리한다."
source: "https://github.com/getcompanion-ai/feynman"
---

# Feynman — 논문 분석·실험 복제·피어 리뷰까지 하는 연구용 AI 에이전트

> "논문 하나 분석해줘." → 30분 뒤 출처가 달린 메타 분석 리포트 반환

MIT 라이선스, 무료. 제작: getcompanion-ai 팀.

## 주요 기능

| 기능 | 설명 |
|------|------|
| 논문 검색·분석 | alphaXiv로 논문 검색 → 읽기 → 메타 분석 리포트 자동 생성 |
| 실험 복제 | RunPod에서 GPU 직접 실행 — 논문 주장이 실제로 재현되는지 확인 |
| 코드 감사 | 논문의 주장과 코드가 일치하는지 audit |
| 시뮬레이션 피어 리뷰 | 심각도별 피드백 생성 |
| 출처 자동 첨부 | 모든 결과물에 논문·문서·레포 URL 직접 링크 — 환각 방지 구조 |

## 기술 구조

- **에이전트 런타임**: Pi (자체 런타임)
- **논문 검색**: alphaXiv 연동
- **스킬 구조**: `~/.feynman/agent/skills/` — 마크다운 파일들로 구성
- Claude Code 없이 스킬만 단독 설치 가능
- 커맨드 한 줄로 Codex에도 연결 가능

## 연구 효율

| 작업 | 사람 혼자 | Feynman |
|------|-----------|---------|
| 논문 읽기 + 분석 + 실험 복제 + 피어 리뷰 | 며칠 | **30분** |

## 관련 생태계

같은 방향을 바라보는 프로젝트들:
- **Karpathy의 autoresearch** — AI 에이전트 자동 연구 실험
- **ARIS** (Auto-Research-In-Sleep)
- **claude-code-my-workflow**

> 공통 철학: 연구를 대체하는 게 아니라 **연구자의 시간을 압축**하는 도구

## 링크

- GitHub: https://github.com/getcompanion-ai/feynman
- Threads 소개: https://www.threads.com/@unclejobs.ai/post/DWVKZUOCU-c
