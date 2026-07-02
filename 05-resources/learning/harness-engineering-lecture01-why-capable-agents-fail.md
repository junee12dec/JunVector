---
title: "Harness Engineering 강의 1 — 강력한 모델이 실제 작업에서 실패하는 이유"
date: 2026-05-15
tags: [agent/architecture, ai/agent, dev/production, agent/harness]
description: "벤치마크 성능과 실제 엔지니어링 결과 사이의 '능력 격차'를 분석한 Harness Engineering 입문 강의. 모델의 문제가 아니라 실행 환경(하네스)의 구조적 결함이 실패 원인임을 Anthropic 실험으로 증명."
source: "https://walkinglabs.github.io/learn-harness-engineering/ko/lectures/lecture-01-why-capable-agents-still-fail/"
---

# Harness Engineering 강의 1 — 강력한 모델이 실제 작업에서 실패하는 이유

**강의 시리즈**: [Learn Harness Engineering](https://walkinglabs.github.io/learn-harness-engineering/ko/)  
**GitHub**: https://github.com/walkinglabs/learn-harness-engineering  
**구성**: 12개 강의 + 6개 프로젝트

---

## 핵심 주장

> "모델이 아니라 환경이 문제다."

같은 모델, 같은 과제여도 **하네스(실행 환경 구조)** 유무에 따라 결과가 완전히 달라진다.

---

## Anthropic 실험 — 하네스의 차이

| 조건 | 결과 |
|------|------|
| **하네스 없음** | 20분 내 $9 지출, 작동 안 함 |
| **완전한 하네스** | 6시간 $200 지출, 실제 작동하는 게임 에디터 완성 |

*같은 모델(Opus 4.5), 같은 과제*

---

## 능력 격차 (Capability Gap)

- SWE-bench Verified에서 50~60% 통과율 = **실제 이슈의 절반은 해결 못 함**
- 벤치마크 성능 ≠ 실제 엔지니어링 성능

---

## 주요 실패 원인

1. **세션 간 컨텍스트 손실**: 장기 작업에서 이전 세션 발견 사항이 전부 사라짐
   - 30분 초과 작업에서 실패율 급증
2. **조기 성공 선언**: 검증 없이 완료로 판정
3. **하네스 유발 실패**: 모델 능력은 충분한데 실행 환경에 구조적 결함

---

## 12개 강의 커리큘럼

| 강의 | 핵심 질문 | 아이디어 |
|------|-----------|---------|
| L01 | 강력한 모델이 왜 실패하는가? | 능력 격차: 벤치마크 ≠ 실제 |
| L02 | "하네스"의 실제 의미는? | 5개 하위시스템: 지시·상태·검증·범위·라이프사이클 |
| L03 | 저장소가 왜 단일 정보 출처여야 하는가? | "에이전트가 볼 수 없으면 존재하지 않음" |
| L04 | 거대한 단일 지시 파일이 왜 실패하는가? | 점진적 공개: 백과사전이 아닌 지도 제공 |
| L05 | 장기 작업이 왜 연속성을 잃는가? | 진행 상황을 디스크에 유지, 중단점에서 재개 |
| L06 | 초기화가 왜 별도 단계를 필요로 하는가? | 에이전트 작업 전 환경 상태 확인 |
| L07 | 에이전트가 왜 과도하게 접근·미완료 상태로 남는가? | "한 번에 한 기능, 명확한 완료 정의" |
| L08 | 기능 목록이 왜 하네스 기본 요소인가? | 기계 가독형 범위 = 에이전트가 무시 불가 |
| L09 | 에이전트가 왜 너무 빨리 성공을 선언하는가? | 검증 격차: 자신감 ≠ 정확성 |
| L10 | 엔드투엔드 테스트가 왜 결과를 바꾸는가? | "완전한 파이프라인 실행만이 실제 검증" |
| L11 | 관찰성이 왜 하네스 내부에 속하는가? | 볼 수 없으면 고칠 수 없다 |
| L12 | 모든 세션이 왜 깨끗한 상태로 끝나야 하는가? | 다음 세션의 성공은 이번 세션 정리에 달림 |

---

## 관련 노트

- [[ai-agent-production-failure-scientific-skills-sandboxed-runtime]] — 프로덕션 에이전트 실패 해부 (Scientific Skills 관점)
- [[production-ai-agent-architecture-4layers]] — 프로덕션 에이전트 아키텍처 4계층 (security/evaluation/observability/.claude)
- [[agentmemory-long-term-memory-for-coding-agents]] — L05(세션 간 연속성 손실) 문제에 대한 실용적 해결 도구
