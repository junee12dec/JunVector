---
title: "loopy-era-trend-harvester — AI 트렌드를 Claude Code 시스템에 자동 반영하는 스킬"
date: 2026-04-06
tags: [ai/claude-code, productivity/automation, dev/skills]
description: "GitHub 트렌딩·RSS로 AI 트렌드를 수집하고, Claude가 loopy-era 정합성 점수를 매겨 자동으로 시스템에 반영하는 5단계 파이프라인. 하네스를 만드는 하네스 시스템."
source: "https://www.threads.com/@hue_0525/post/DWwOQCbkpkw"
---

# loopy-era-trend-harvester — AI 트렌드를 Claude Code 시스템에 자동 반영하는 스킬

> 하네스를 만드는 하네스 시스템을 업그레이드시키는 Flow.
> AI 트렌드를 자동 수집해 내 Claude Code 시스템에 반영하는 스킬을 **15번 iteration**으로 완성했다.

## 핵심 개념

외부 AI 트렌드를 수집해 내 Claude Code 하네스(CLAUDE.md, 스킬 파일 등)에 **자동으로 반영**하는 파이프라인.
단순 정보 수집이 아니라, 실측 판정(git stash 실험)을 통해 **실제로 점수가 오르는 변경만** 적용한다.

## 5단계 프로세스

```
외부 소스 수집 → LLM 분석 → 실측 판정 → 자동 적용 → 텔레그램 리포트
```

### Phase 1 — 수집
- GitHub 트렌딩 6개 언어
- AI 구루 10명의 GitHub 저장소
- 토픽 검색
- RSS 피드

### Phase 2 — 분석
- Claude가 **5축으로 loopy-era 정합성 점수** 측정
- 각 트렌드가 내 시스템과 얼마나 잘 맞는지 채점

### Phase 3.5 — 실측 판정 (핵심)
- `git stash`로 변경사항을 임시 적용
- 점수 변화 측정
- 점수가 오르면 keep, 안 오르면 discard

### Phase 4 — 자동 적용
조건: **score ≥ 7 + risk = low + type = rule** 인 경우만 자동 적용

### Phase 5 — 리포트
- 통계 요약을 텔레그램으로 전송

## 왜 중요한가

- **시스템이 스스로 진화한다**: 사람이 트렌드를 일일이 검토하지 않아도 됨
- **실측 기반 판정**: 점수 이론이 아니라 실제 git stash 실험으로 검증
- **안전 장치 내장**: risk=low, score≥7 조건으로 불안정한 변경 차단
- **하네스가 하네스를 업그레이드**: 메타 시스템 구조

## 참고 링크
- Threads 원문: https://www.threads.com/@hue_0525/post/DWwOQCbkpkw
- 상세 분석: https://hugh-kim.space/trend-harvester-analysis.html
