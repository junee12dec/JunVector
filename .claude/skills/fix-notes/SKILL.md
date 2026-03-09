# /fix-notes 스킬

Save 스킬을 거치지 않고 Obsidian에 직접 추가된 노트를 찾아, save 규칙(frontmatter + kebab-case 파일명 + MOC 링크)에 맞게 일괄 정규화한다.

---

## 실행 절차

### 1단계 — 비정형 노트 탐지

지정된 폴더(기본값: 볼트 전체)를 스캔해서 아래 조건 중 하나라도 해당하는 파일을 수집한다.

| 조건 | 판별 기준 |
|------|-----------|
| frontmatter 없음 | 파일 첫 줄이 `---`로 시작하지 않는 경우 |
| 필수 필드 누락 | `title`, `date`, `tags` 중 하나라도 없는 경우 |
| 파일명 비정형 | 한글, 공백, 특수문자, 언더스코어가 포함된 경우 |

- `MOC.md`, 파일명이 이미 kebab-case인 파일은 건너뛴다.
- `99-meta/`의 템플릿 파일은 건너뛴다.

탐지 결과를 사용자에게 보여준다:

```
비정형 노트 N개 발견:

1. 05-resources/Peter Cha(@_petercha)님.md
   문제: 파일명 비정형, frontmatter 없음
2. 05-resources/Untitled.md
   문제: 파일명 비정형, frontmatter 없음
...

전체 정규화할까? (Y / 번호 선택 / N)
```

사용자가 N이면 종료한다.

---

### 2단계 — 노트별 내용 분석

처리할 각 노트에 대해:

1. **파일 내용 읽기** — URL인지 텍스트인지 파악한다.
2. **URL 처리** — save 스킬과 동일한 방식으로 처리한다:
   - YouTube URL: 자막 추출 시도 → 실패 시 URL만 보존
   - 웹 URL: 본문 크롤링 시도 → 실패 시 URL만 보존
   - 크롤링 실패는 사용자에게 알리고 URL만으로 노트를 생성한다.
3. **텍스트 처리** — 내용을 그대로 사용하되 frontmatter만 추가한다.
4. **한국어 번역** — 영어 또는 외국어 본문이면 한국어로 번역한다.

---

### 3단계 — 정규화 계획 제시

각 노트에 대해 아래 항목을 결정한 뒤, **실행 전에 한 번에** 사용자에게 보여준다:

```
정규화 계획:

1. Peter Cha(@_petercha)님.md
   → 파일명: peter-cha-threads-post.md
   → title: "Peter Cha(@_petercha) Threads 게시물"
   → tags: [people/creator]
   → description: "Peter Cha의 Threads 게시물. URL만 보존."

2. Untitled.md
   → 파일명: youtube-video-abc123.md
   → title: "YouTube 영상 — abc123"
   → tags: [video/youtube]
   → description: "YouTube 영상 링크. URL만 보존."

진행할까? (Y / 개별 수정 원하는 번호 입력)
```

- 파일명은 `title`에서 영어 단어를 추출하거나 URL의 도메인·경로를 참고해 생성한다.
- 같은 폴더에 동일한 파일명이 이미 존재하면 `-2`, `-3`을 붙인다.

---

### 4단계 — 정규화 실행

사용자 확인 후, 각 노트를 순서대로 처리한다:

1. 새 frontmatter와 본문을 포함한 내용을 작성한다:

```markdown
---
title: "노트 제목"
date: YYYY-MM-DD   # 오늘 날짜
tags: [카테고리/소주제]
description: "핵심 내용 요약 (한국어 1-2문장)"
source: "https://..."   # URL에서 가져온 경우에만
---

# 노트 제목

(본문 내용)
```

2. 새 파일명으로 파일을 생성한다.
3. 기존 비정형 파일을 삭제한다.
4. 해당 폴더의 `MOC.md`를 업데이트한다:
   - 기존 링크(있으면) 제거
   - 새 링크 추가: `- [[새파일명|노트 제목]] — 날짜`

---

### 5단계 — 완료 보고

```
정규화 완료: N개 노트

변환 내역:
- Peter Cha(@_petercha)님.md → [[peter-cha-threads-post]]
- Untitled.md → [[youtube-video-abc123]]

MOC 업데이트: 05-resources/MOC.md

다음으로 무엇을 할까?
A. 딥다이브 — 특정 노트 주제를 더 깊이 탐구 (/deep-dive)
B. 폴더 정리 — 노트를 적절한 PARA 폴더로 이동 (/organize)
C. 종료
```

---

## 주의사항

- **실행 전 반드시 계획을 보여주고 확인받는다.** 확인 없이 파일을 수정·삭제하지 않는다.
- `date`는 기존 파일 생성일을 파악할 수 없으면 오늘 날짜를 사용한다.
- 파일명 변환 시 원본 의미를 최대한 유지한다.
- 본문이 이미 충분한 내용을 갖추고 있으면 frontmatter만 추가하고 본문은 그대로 둔다.
- 처리 중 오류가 발생하면 해당 노트만 건너뛰고 나머지를 계속 처리한다.

---

## 전체 흐름 요약

```
볼트 스캔 → 비정형 노트 목록 제시
  → 사용자 확인
  → 노트별 내용 분석 (URL 크롤링 시도)
  → 정규화 계획 제시 (파일명 + frontmatter 초안)
  → 사용자 확인
  → 파일 생성 → 기존 파일 삭제 → MOC 업데이트
  → 완료 보고 & 다음 행동 제안
```
