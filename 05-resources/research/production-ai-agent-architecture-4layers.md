---
title: "프로덕션 AI 에이전트 아키텍처 — security·evaluation·observability·.claude 4계층"
date: 2026-05-09
tags: [agent/architecture, dev/production, ai/llm]
description: "데모는 파일 하나지만 프로덕션은 다르다 — security(입력·콘텐츠·출력 3중 가드), evaluation(골든 데이터셋+온라인 모니터), observability(단계별 트레이싱), .claude(코드베이스 컨텍스트)의 4계층 구조."
source: "https://www.threads.com/@vishi_explores/post/DYHJTGemUxM"
---

# 프로덕션 AI 에이전트 아키텍처 — 4계층 구조

> "The demo is one file. Production is this."

---

## 4개 핵심 계층

### `security/` — 입력·콘텐츠·출력 3중 가드
가드 하나가 아니라 세 지점에:
- **Input guard**: 사용자 입력 검증·필터링
- **Content guard**: 처리 중 콘텐츠 검사
- **Output guard**: 최종 응답 검증

### `evaluation/` — 골든 데이터셋 + 오프라인 + 온라인 모니터
**대부분의 팀이 이 레이어 전체를 건너뛰고 블라인드로 배포한다.**
- 골든 데이터셋으로 오프라인 평가
- 온라인 모니터로 프로덕션 성능 추적
- 피드백을 트레이스에 연결

### `observability/` — 단계별 트레이싱 + 비용 추적
- 단계별(per-stage) 트레이싱
- 피드백을 트레이스에 연결
- 쿼리당 비용 측정

### `.claude/` — 에이전트 코드베이스 컨텍스트
- AI 코딩 어시스턴트가 파일을 건드리기 전에 코드베이스를 파악
- 에이전트 워크플로우에서 좋은 터치

---

## 흔히 빠진 것들

- **Human-in-the-loop**: 어댑티브 라우터에 사람 검토 단계 없음
- **재귀 깊이 제한**: 자기수정 검색 루프에 한계 없으면 무한루프 위험
- **프롬프트 인젝션 방어**: 수집(ingestion) 단계에서 명시적 방어 필요

---

## 관련 도구

- **Langfuse** — LLM observability 대표 도구 [[langfuse-llm-observability-debug-tool]]
- **Archcore** (https://archcore.ai/) — 모든 결정·스펙·아티팩트를 `.archcore` 디렉터리 하나로 관리, 모든 에이전트와 호환
