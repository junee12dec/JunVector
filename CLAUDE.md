# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

# Obsidian Vault — Claude 운영 규칙

## 볼트 구조 (PARA)

이 볼트는 PARA 방식으로 관리한다:

| 폴더 | 용도 |
|------|------|
| `01-inbox/` | 미분류 노트 — 모든 새 노트의 기본 저장 위치 |
| `02-daily-notes/` | 일일 노트 (`YYYY/MM/YYYY-MM-DD.md`) |
| `03-projects/` | 진행 중인 프로젝트 (끝이 있는 일) |
| `04-areas/` | 지속적으로 관리하는 영역 (끝이 없는 일) |
| `05-resources/` | 참고 자료, 관심사 |
| `06-archives/` | 완료된 프로젝트 |
| `99-meta/` | 템플릿, 첨부파일 |

---

## 스킬 파일 위치

커스텀 스킬은 `.claude/skills/` 아래에 각각 `SKILL.md`로 정의되어 있다:

| 스킬 | 파일 경로 | 역할 |
|------|-----------|------|
| `/save` | `.claude/skills/save/SKILL.md` | URL·텍스트를 노트로 변환해 `01-inbox/`에 저장 |
| `/organize` | `.claude/skills/organize/SKILL.md` | `01-inbox/` 노트를 PARA 폴더로 분류·이동 |
| `/deep-dive` | `.claude/skills/deep-dive/SKILL.md` | 노트 주제를 대화로 탐구하고 원본 노트에 추가 |
| `/fix-notes` | `.claude/skills/fix-notes/SKILL.md` | save 규칙을 따르지 않는 노트를 일괄 정규화 |
| `/organize-resources` | `.claude/skills/organize-resources/SKILL.md` | `/organize`의 확장판 — `05-resources/` 서브폴더까지 2단계 분류 |

---

## 노트 형식 (Frontmatter)

모든 `.md` 파일 저장 시 아래 frontmatter를 포함한다:

```yaml
---
title: "노트 제목"
date: 2024-07-27
tags: [카테고리/소주제]
description: "핵심 내용 요약 (한국어 1-2문장)"
source: "https://..."   # URL에서 저장했을 때만
---
```

- **파일명**: 영어 소문자 kebab-case (예: `my-note-title.md`)
- **tags 형식**: `카테고리/소주제` (예: `ai/claude`, `productivity/automation`)

---

## 유효성 규칙

새 노트를 만들 때:

- `title`, `date`, `tags` 세 항목은 필수
- 파일명은 영어 소문자, 하이픈만 사용 (공백·언더스코어 금지)
- `[[wikilink]]`는 실제 존재하는 파일만 사용

---

## MOC (Map of Contents)

- 각 PARA 폴더에는 `MOC.md` 파일이 있다
- `/organize`로 노트를 폴더로 옮길 때 해당 `MOC.md`에 노트 링크를 추가한다
- 새 폴더를 만들 때는 `MOC.md`도 함께 만든다

---

## 대화 행동

- 내가 질문하면 볼트에 관련 노트가 있는지 먼저 검색하고 답변해줘
- "전에 정리한 거 있어?", "관련 노트 찾아봐" 같은 요청에는 반드시 볼트 검색부터
- 일반 지식 질문이면 검색 없이 바로 답변해도 됨

---

## 콘텐츠 워크플로우

| 요청 | 실행 |
|------|------|
| 기록 요청 | `/save` 스킬 실행 |
| 딥다이브 요청 | `/deep-dive` 스킬 실행 |
| 정리 요청 (PARA 수준) | `/organize` 스킬 실행 |
| 정리 요청 (서브폴더까지) | `/organize-resources` 스킬 실행 |
| 직접 추가한 노트 정규화 요청 | `/fix-notes` 스킬 실행 |

---

## 플랜 모드

여러 파일에 걸친 작업 전에는:

1. 실행 전에 계획을 간결하게 정리해서 보여준다
2. 사용자 확인 후 실행한다

---

## 관련 노트 연결 (선택)

노트를 저장하거나 정리할 때, 볼트에 관련 노트가 있으면 2–5개 연결을 제안한다.
볼트에 노트가 쌓일수록 이 기능의 가치가 커진다.
