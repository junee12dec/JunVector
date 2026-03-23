---
title: "CCAF 시험 완전 정복 가이드 — Claude Certified Architect Foundations"
date: 2026-03-23
tags: [ai/claude, learning/certification, dev/architecture]
description: "Anthropic 공식 자격증 CCAF의 5대 도메인과 비중을 정리한 학습 가이드. D1 에이전트 아키텍처(27%)와 D3 Claude Code 워크플로(20%)가 절반 가까이를 차지하므로 이 두 영역 우선 학습이 효율적."
source: "https://www.threads.com/@rkm1st/post/DWLuiJaEdUL"
---

# CCAF 시험 완전 정복 가이드 — Claude Certified Architect Foundations

**CCAF(Claude Certified Architect – Foundations)**는 Anthropic의 공식 기술 자격증으로, Claude 기반 프로덕션 시스템을 설계·배포할 때 필요한 실전 판단력을 검증하는 시험이다.

학습 노트 사이트: https://bitboom.github.io/ccaf101/

---

## 5대 핵심 평가 도메인

| 도메인 | 비중 | 핵심 주제 |
|--------|------|-----------|
| **D1. 에이전트 아키텍처** | 27% | 멀티 에이전트 설계, 오케스트레이션 패턴 |
| **D2. 도구 설계 및 MCP** | 18% | Tool use 설계, MCP 프로토콜 |
| **D3. Claude Code 워크플로** | 20% | Claude Code 실전 활용, 자동화 |
| **D4. 구조화된 출력** | 20% | JSON/XML 출력 제어, 스키마 설계 |
| **D5. 문맥 관리 및 신뢰성** | 15% | 컨텍스트 윈도우 관리, 신뢰성 패턴 |

> **전략 포인트**: D1 + D3만 합쳐도 47%. 처음 준비한다면 이 두 영역부터.

---

## 도메인별 학습 포인트

### D1. 에이전트 아키텍처 (27%) ★★★

가장 비중이 높은 도메인. 프로덕션 멀티 에이전트 시스템 설계 능력을 검증한다.

**주요 개념:**
- 오케스트레이터-서브에이전트 패턴
- 에이전트 간 통신과 상태 관리
- 에러 처리와 폴백 전략
- 병렬 vs 순차 에이전트 실행

### D2. 도구 설계 및 MCP (18%)

Tool use와 MCP(Model Context Protocol)를 프로덕션 수준으로 설계하는 능력.

**주요 개념:**
- Tool 정의 및 스키마 설계
- MCP 서버 구현과 연동
- 도구 선택 최적화
- 외부 API 통합 패턴

### D3. Claude Code 워크플로 (20%) ★★

실제 개발 환경에서 Claude Code를 활용하는 워크플로.

**주요 개념:**
- CLAUDE.md 설정과 프로젝트 컨텍스트
- 훅(hooks) 설정과 자동화
- 스킬(skills) 시스템 구현
- 에이전트 SDK 활용

### D4. 구조화된 출력 (20%)

일관되고 파싱 가능한 출력을 생성하는 기법.

**주요 개념:**
- JSON/XML 스키마 설계
- 출력 형식 강제(output coercion) 기법
- 프롬프트 엔지니어링으로 구조 제어
- 유효성 검증 파이프라인

### D5. 문맥 관리 및 신뢰성 (15%)

장시간 실행되는 에이전트 시스템의 신뢰성 확보.

**주요 개념:**
- 컨텍스트 윈도우 최적화
- 메모리 관리 전략
- 에이전트 성능 저하 방지
- 신뢰성 패턴 (재시도, 체크포인트)

---

## 학습 전략

### 1순위 (47% 커버)
1. **D1 에이전트 아키텍처** — 멀티 에이전트 패턴 집중
2. **D3 Claude Code 워크플로** — 실습 위주 학습

### 2순위 (38% 커버)
3. **D2 도구 설계 및 MCP** — MCP 서버 직접 구현해보기
4. **D4 구조화된 출력** — 다양한 스키마 실습

### 3순위 (15% 커버)
5. **D5 문맥 관리** — Anthropic 공식 문서 중심

---

## 참고 자료

- 학습 노트 사이트: https://bitboom.github.io/ccaf101/
- 원문 포스트: https://www.threads.com/@rkm1st/post/DWLuiJaEdUL
- 인포그래픽 6장 포함 (일부 오타 있음 — 흐름 파악용)
