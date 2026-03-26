---
title: "Garry Tan의 YC 운영 방식 — Claude Code 슬래시 커맨드 13개 전체 목록"
date: 2026-03-25
tags: [ai/claude, dev/tools, productivity/workflow]
description: "YC 대표 Garry Tan이 Claude Code 슬래시 커맨드 13개로 YC를 운영하는 방식 전체 공개. 기획 단계(6개)와 빌드·배포 단계(7개)로 나뉜 완전한 워크플로우."
source: "https://www.threads.com/@leadgenman/post/DWUoxzbjV3P"
---

# Garry Tan의 YC 운영 방식 — Claude Code 슬래시 커맨드 13개 전체 목록

> Garry Tan runs YC with 13 Claude Code "/" commands.

## 기획 단계 (Planning Phase) — 6개

| 커맨드 | 역할 |
|--------|------|
| `/office-hours` | 6가지 핵심 질문으로 기획 강제화 |
| `/plan-ceo-review` | "Brian Chesky 모드" — CEO 시각으로 검토 |
| `/plan-eng-review` | 아키텍처 확정 + 엣지케이스 잠금 |
| `/plan-design-review` | 모든 디자인 차원을 0-10점으로 평가 |
| `/design-consultation` | 처음부터 디자인 시스템 구축 |
| `/autoplan` | 위 3개 리뷰(eng/design/ceo)를 한 번에 실행 |

## 빌드 & 배포 단계 (Build & Ship) — 7개

| 커맨드 | 역할 |
|--------|------|
| `/review` | 코드 리뷰 |
| `/investigate` | 문제 조사·분석 |
| `/qa` | QA 자동화 |
| `/cso` | — |
| `/ship` | 원커맨드 배포 |
| `/land-and-deploy` | 브랜치 병합 + 배포 |
| `/retro` | 회고 |

## 전체 플로우 요약

```
기획: /office-hours → /autoplan (= /plan-ceo-review + /plan-eng-review + /plan-design-review)
또는 개별: /plan-ceo-review / /plan-eng-review / /plan-design-review / /design-consultation

빌드: /review → /investigate → /qa → /cso
배포: /ship → /land-and-deploy → /retro
```

## 관련 노트

- [[garry-tan-gstack-claude-code-setup|Garry Tan의 gstack]] — 동일 주제 이전 버전 노트 (커맨드 6개 정리)
