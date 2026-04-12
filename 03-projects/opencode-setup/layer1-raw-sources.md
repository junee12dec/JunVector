---
title: "Layer 1 — Raw Sources"
date: 2026-04-12
tags: [project/opencode, layer1, raw-sources, ingest]
description: "OpenCode 세팅에 필요한 원본 소스 수집 레이어. 사내 모든 지식 흐름의 진입점이자 LLM 이 절대 수정하지 않는 verification baseline."
type: concept
status: active
updated: 2026-04-12
parent: "[[opencode-setup-MOC]]"
---

# Layer 1 — Raw sources (불변 원본)

## 역할

사내 모든 지식 흐름의 진입점. 한 번 투입된 소스는 LLM 이 절대 수정하지 않는 verification baseline 역할을 한다. 모든 wiki 페이지의 claim 은 raw/ 의 특정 파일로 역추적 가능해야 한다.

## 소스 카테고리

- Slack / 회의록 — 스레드 export, 회의록 파일, 녹취 전사본
- Confluence — 정책 문서, 업무 매뉴얼, 아키텍처 문서
- Git repos — 사내 GitLab / Gitea 의 코드베이스 스냅샷, 커밋 로그, PR 설명
- Excel / 업무 매뉴얼 — 반복 작업 템플릿, 집계 양식, SOP 문서
- 외부 웹 — Obsidian Web Clipper 로 마크다운 변환된 아티클

## 수집 방식

- 개별 투입: Web Clipper, 파일 복사, 수동 드롭
- 자동 수집: git log / Slack export / Confluence API 를 주기적으로 sync (사내망 내 cron)
- 전처리: PDF → md 변환, Excel → CSV, 이미지 → vision OCR 통과 후 raw/ 적재

## 디렉토리 구조

```
raw/
├─ articles/        외부 아티클 마크다운
├─ meetings/        회의록 / 녹취
├─ codebase/        Git 스냅샷 / 커밋 로그
├─ excel/           CSV 변환본 (원본 xlsx 는 attachments/)
├─ attachments/     이미지 / 원본 바이너리
└─ manuals/         SOP / 업무 매뉴얼
```

## 불변성 원칙

- LLM 은 raw/ 에 대해 read-only
- 수정이 필요하면 새 파일을 추가 (예: `article-2026-04-12-v2.md`)
- 삭제는 인간만 수행, 커밋 메시지로 사유 기록

## 관련

- ingest 오퍼레이션이 raw/ 를 소비해 [[layer2-knowledge-brain]] 의 wiki/ 로 컴파일한다
- 사내 환경에서는 [[layer3-agent-harness]] 의 filesystem MCP 가 raw/ 에 접근
