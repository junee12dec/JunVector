# /organize-resources 스킬

`01-inbox/`의 노트를 읽고 PARA 폴더 → `05-resources/` 서브폴더까지 정확하게 분류해 이동한다.
기존 `/organize` 스킬에 **2단계 분류(PARA → 서브폴더)** 로직이 추가된 버전이다.

---

## 실행 절차

### 1단계 — 대상 노트 확인

- 특정 노트가 지정된 경우: 해당 노트만 처리한다.
- 노트가 지정되지 않은 경우: `01-inbox/`의 전체 노트 목록을 보여주고 선택을 요청한다.

```
01-inbox에 노트가 N개 있어:

1. [[파일명]] — description 한 줄
2. [[파일명]] — description 한 줄
...

어떤 노트를 정리할까? (번호 / "전체" / 파일명)
```

---

### 2단계 — PARA 1차 분류

노트의 frontmatter(`title`, `tags`, `description`)와 본문을 읽고 PARA 폴더를 결정한다.

| 폴더 | 판단 기준 |
|------|-----------|
| `03-projects/` | 완료 기한이 있는 작업. 끝이 명확한 것 |
| `04-areas/` | 지속적으로 유지·관리하는 책임 영역. 끝이 없는 것 |
| `05-resources/` | 특정 프로젝트에 속하지 않는 참고 자료, 관심사, 레퍼런스 |
| `06-archives/` | 이미 완료되었거나 더 이상 활성화하지 않는 것 |

---

### 3단계 — 05-resources 서브폴더 2차 분류

1차 분류 결과가 `05-resources/`인 경우, 아래 기준으로 서브폴더를 결정한다.

| 서브폴더 | 분류 기준 | 대표 태그 |
|----------|-----------|-----------|
| `claude-code/` | Claude Code 스킬, 셋업, 에이전트, 워크플로우 | `ai/claude`, `ai/claude-code`, `tool/skill` |
| `ai-tools/` | Claude Code 외 AI 도구, 에이전트 프레임워크, 자동화 | `ai/agent`, `productivity/automation`, `tool/*` |
| `notebooklm/` | NotebookLM 활용, 슬라이드, PPT 자동화 | `ai/notebooklm`, `productivity/presentation` |
| `dev/` | 개발 도구, API, no-code, vibe-coding | `dev/*` |
| `pkm/` | 제2두뇌, 노트 시스템, 옵시디언 관련 | `pkm/*`, `productivity/pkm` |
| `pm/` | 프로덕트 매니지먼트, 기획, PM 스킬 | `pm/*` |
| `people/` | 특정 인물 관련 정보, 인터뷰, 발언 모음 | `people/*` |
| `media/` | 영상, 팟캐스트, 아티클 등 미디어 콘텐츠 | `media/*` |
| `learning/` | 강의, 튜토리얼, 학습 자료 | `learning/*` |

**서브폴더가 없는 경우**: `05-resources/` 루트에 저장하고 새 서브폴더 생성을 제안한다.

**판단이 애매한 경우**: 두 가지 후보를 이유와 함께 제시하고 선택을 요청한다.

---

### 4단계 — 분류 결과 제시 & 확인

전체 분류 결과를 표로 보여주고 한 번에 확인받는다.

```
분류 결과:

| # | 노트 | 이동 위치 | 이유 |
|---|------|-----------|------|
| 1 | [[파일명]] | 05-resources/claude-code/ | Claude Code 스킬 레퍼런스 |
| 2 | [[파일명]] | 05-resources/notebooklm/ | NotebookLM 프롬프트 템플릿 |
...

전부 이동할까? (Y / 수정할 항목 번호)
```

---

### 5단계 — 노트 이동

사용자 확인 후 순서대로 이동한다.

- 이동 경로: `01-inbox/<파일명>.md` → `<서브폴더>/<파일명>.md`
- 파일명은 변경하지 않는다.
- `01-inbox/MOC.md`에서 해당 링크를 제거한다.

---

### 6단계 — 대상 폴더 MOC 업데이트

이동한 서브폴더의 `MOC.md` "노트 목록" 섹션 끝에 링크를 추가한다.

```markdown
- [[파일명|노트 제목]] — 날짜
```

`MOC.md`가 없는 서브폴더라면 아래 템플릿으로 새로 만든다:

```markdown
---
title: "<폴더명> MOC"
date: YYYY-MM-DD
tags: [meta/moc]
description: "<주제> 관련 자료 목차."
---

# <폴더명>

> <주제> 관련 참고 자료 모음.

## 노트 목록

- [[파일명|노트 제목]] — 날짜
```

---

### 7단계 — 완료 보고

```
완료:

✓ [[파일명]] → 05-resources/claude-code/
✓ [[파일명]] → 05-resources/notebooklm/
...

MOC 업데이트: claude-code, notebooklm, ai-tools

다음으로 무엇을 할까?
A. 딥다이브 — 특정 노트 주제 탐구 (/deep-dive)
B. 계속 정리 — inbox의 다른 노트 정리
C. 종료
```

---

## 전체 흐름 요약

```
대상 노트 확인
  → frontmatter + 본문 읽기
  → 1차: PARA 분류
  → 2차: 05-resources 서브폴더 분류 (resources일 경우)
  → 표로 결과 제시 & 사용자 확인
  → 노트 이동 (inbox MOC 링크 제거)
  → 서브폴더 MOC에 링크 추가 (없으면 MOC 신규 생성)
  → 완료 보고 & 다음 행동 제안
```

---

## 주의사항

- 이동 전에 반드시 사용자 확인을 받는다. 확인 없이 파일을 이동하지 않는다.
- 판단 근거를 항상 한 줄로 함께 제시한다.
- `02-daily-notes/`와 `99-meta/`로는 이동하지 않는다.
- 여러 노트를 처리할 때는 확인은 전체를 한 번에 받고, 이동은 하나씩 순서대로 처리한다.
- 서브폴더가 존재하는지 먼저 확인하고, 없으면 생성 후 MOC도 함께 만든다.
