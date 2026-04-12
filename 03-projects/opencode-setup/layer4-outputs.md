---
title: "Layer 4 — Outputs"
date: 2026-04-12
tags: [project/opencode, layer4, outputs, automation]
description: "산출물 정의와 feedback loop 를 다루는 최종 출력 레이어. 코드 리뷰·문서·업무 자동화·인수인계 위키 4종이 wiki 로 환류되는 복리 구조."
type: concept
status: active
updated: 2026-04-12
parent: "[[opencode-setup-MOC]]"
---

# Layer 4 — 업무 산출물

## 역할

에이전트 실행의 최종 결과물. 4가지 카테고리 모두 feedback loop 를 통해 다시 [[layer2-knowledge-brain]] 의 wiki 로 순환 → 복리 지식 효과.

## 산출물 카테고리

### 코드 리뷰

- spring-reviewer / vue-reviewer agent 가 생성
- 입력: PR diff (Git MCP 또는 로컬 `git diff`)
- 출력: 리뷰 코멘트 + 개선 제안 + 보안 취약점 플래그
- Feedback: 반복되는 패턴은 `spring-boot-patterns` skill 에 누적

### 문서 생성

- 입력: 코드베이스 + 사내 템플릿
- 출력: API 문서, 아키텍처 README, CHANGELOG, 기술 보고서
- 사내 환경: Word / PPT 변환은 docx / pptx skill 활용
- Feedback: 생성된 문서는 source 페이지로 wiki 에 ingest

### 업무 자동화

- 입력: 반복 작업 패턴 (Excel 집계, 리포트, 메일 템플릿)
- 출력: Python 스크립트, 매크로, 자동화 워크플로우
- 주요 스킬: excel-automation, email-template, report-builder
- Feedback: 자동화된 프로세스는 SOP 페이지로 정리 → 인수인계 자산화

### 인수인계 위키

- handover-wiki skill 이 생성
- 입력: Git 커밋 히스토리 + 회의록 + 본인 작업 기록
- 출력: 구조화된 인수인계 문서 (시스템 맵, 주요 의사결정, 알려진 이슈)
- 과거 KnowledgeGraph Wiki / NeuroVault 에서 시작된 문제의식 — 인수인계 문서의 연결성 / 검색성 부재 — 이 시스템이 근본 해결

## Feedback loop

모든 산출물은 단순히 외부로 배출되지 않고 wiki 로 환류된다.

- 코드 리뷰 → review 패턴 축적 → 다음 리뷰 품질 향상
- 문서 → source 페이지 → 추후 query 시 참조
- 자동화 스크립트 → concept 페이지 → 재사용
- 인수인계 문서 → entity (담당자) + concept (시스템) 페이지 동시 업데이트

## 측정 지표 (선택)

셋업 효과를 추적하려면:

- ingest 된 소스 수 / 월
- wiki 페이지 수 증가율
- query 답변 재사용률 (같은 질문 재발 빈도 감소)
- lint critical 이슈 0 유지 기간
- 수작업 Excel 시간 대비 자동화 절감 시간

## 관련

- [[layer3-agent-harness]] 의 6개 구성요소가 이 산출물들을 만든다
- 산출물 → [[layer2-knowledge-brain]] 으로 ingest → [[layer1-raw-sources]] 의 새 source 로 순환
