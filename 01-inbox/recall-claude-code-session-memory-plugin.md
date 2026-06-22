---
title: "Recall — Claude Code 세션 기억을 이어주는 로컬 플러그인"
date: 2026-06-21
tags: [ai/coding-agent, dev/workflow, productivity/automation]
description: "Claude Code 세션마다 '어디까지 했더라'를 다시 설명하는 문제를 해결. 세션 기록을 .recall/에 로컬 저장하고 다음 세션에서 바로 이어받는 플러그인. API 키·외부 LLM 불필요."
source: "https://github.com/raiyanyahya/recall"
---

# Recall — Claude Code 세션 기억을 이어주는 로컬 플러그인

## 한 줄 요약

Claude Code가 "매번 차갑게 시작하는 느낌"을 없애는 플러그인. 세션 컨텍스트를 로컬에 저장해 다음 세션에서 바로 이어받는다.

---

## 해결하는 문제

> "지난번 어디까지 했더라"를 새 세션마다 다시 설명해야 하는 문제.

Claude Code는 세션 간 메모리가 없다. Recall은 이 공백을 로컬 파일로 채운다.

---

## 작동 방식

```
세션 중 작업
    ↓
/recall:save 실행
    ↓
.recall/context.md 생성
    ↓
다음 세션에서 자동 로드 → 바로 이어받기
```

### 저장 파일 구조

| 파일 | 내용 |
|------|------|
| `.recall/history.md` | 프로젝트별 세션 기록 누적 |
| `.recall/context.md` | 다음 세션용 컨텍스트 요약 |

### 저장되는 내용

- 목표 (Goal)
- 만진 파일 목록
- 실행한 명령
- 남은 작업
- `git diff --stat` 결과

---

## 기술 특징

- **완전 로컬**: TF-IDF + TextRank로 요약 생성 (외부 LLM 호출 없음)
- **의존성 없음**: API 키, 로컬 모델, pip install 불필요
- **기본값 git-ignore**: `.recall/`은 기본으로 무시 → 개인 메모리
- **팀 공유 옵션**: 팀 메모리로 쓰고 싶으면 커밋하면 됨

---

## 링크

- GitHub: https://github.com/raiyanyahya/recall
