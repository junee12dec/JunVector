---
title: "Claude PPTX Skill — 코드로 만드는 픽셀 단위 슬라이드"
date: 2026-03-25
tags: [ai/claude, skills/pptx, productivity/presentation]
description: "Anthropic 공식 skills 레포에서 공개한 Claude PPTX 스킬. GUI 도구(Gamma, Beautiful.ai)가 못 하는 픽셀 단위 템플릿 제어와 자동 QA 루프로 슬라이드 생성 성공률을 67%에서 94%로 끌어올렸다."
source: "https://github.com/anthropics/skills"
---

# Claude PPTX Skill — 코드로 만드는 픽셀 단위 슬라이드

> "코드가 PPT 도구보다 훨씬 나은 슬라이드를 만들 수 있다는 걸 세상이 아직 모른다"
> — 1.2M 뷰를 기록한 한 마디

## 핵심 주장

| 항목 | 내용 |
|------|------|
| 픽셀 단위 제어 | Gamma, Beautiful.ai 등 GUI 도구로는 불가능한 정밀 템플릿 제어 |
| 자동 QA 루프 | 슬라이드 생성 성공률 **67% → 94%** 달성 |
| 기반 | `anthropics/skills` 공식 GitHub 레포 |

## anthropics/skills 레포 개요

Anthropic이 공개한 **스킬 레퍼런스 구현 모음**. 실제 프로덕션에서 사용 중인 복잡한 스킬을 개발자 참고용으로 공개했다.

- **라이선스**: Source-available (오픈소스 아님 — 참고용 공개)
- **사용 환경**: Claude Code, Claude.ai, Claude API
- **스킬 구조**: `SKILL.md` 파일 하나로 정의

### 지원 문서 스킬 카테고리

| 카테고리 | 포함 스킬 |
|---------|-----------|
| Document Skills | PPTX, DOCX, PDF, XLSX |
| Creative & Design | — |
| Development & Technical | — |
| Enterprise & Communication | — |

## PPTX 스킬의 차별점

### vs. GUI 기반 도구 (Gamma, Beautiful.ai)
- GUI 도구: 제공하는 템플릿 범위 안에서만 커스터마이징 가능
- PPTX 스킬: 코드로 레이아웃, 폰트, 색상, 위치를 픽셀 단위로 직접 제어

### 자동 QA 루프
- 생성 후 자동 검증 단계를 반복해 오류를 스스로 수정
- 성공률: 67% → **94%** (27%p 향상)

## 스킬 설치 (Claude Code)

```bash
# GitHub에서 skills 레포 확인
https://github.com/anthropics/skills
```

Claude Code 마켓플레이스 플러그인 등록 방식으로 연결 가능.

## 참고 링크

- GitHub: https://github.com/anthropics/skills
- Threads 소개: https://www.threads.com/@aisolutiondev/post/DWTd8dyFIKc
