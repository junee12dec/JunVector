---
title: "Quarkdown — 논문·프레젠테이션·웹사이트·책을 하나의 Markdown 문법으로 (14k⭐)"
date: 2026-05-15
tags: [dev/tool, productivity/writing, design/document]
description: "Markdown에 함수·조건문·루프를 더한 Turing 완전 조판 시스템. 단일 문법으로 학술논문, 슬라이드, 정적 웹사이트, 기술 문서, 도서를 모두 출력한다."
source: "https://www.threads.com/@githubprojects/post/DYf0sjUEjQl"
---

# Quarkdown — Markdown with Superpowers

**GitHub**: https://github.com/iamgio/quarkdown  
**⭐ 14,000+ stars**

> "One syntax for papers, presentations, websites, and books."

CommonMark/GFM에 함수·조건문·루프를 더한 현대적 조판 시스템.  
단일 `.qmd` 파일을 여러 형식으로 컴파일한다.

---

## 지원 출력 형식

| 형식 | 용도 |
|------|------|
| **HTML Plain** | 연속 흐름 문서 (Notion/Obsidian 스타일) |
| **HTML Paged** | 논문·기사·도서 (paged.js 기반) |
| **HTML Slides** | 대화형 프레젠테이션 (reveal.js 기반) |
| **HTML Docs** | 위키·기술 문서·지식베이스 |
| **PDF** | 모든 HTML 타입에서 출력 가능 |
| **Plain Text** | 순수 텍스트 |

---

## 핵심 기능

- **함수형 Markdown**: `.function {arg1} {arg2}` 문법으로 함수 호출
- **Turing 완전**: 조건문, 루프, 사용자 정의 함수·변수 모두 지원
- **표준 라이브러리**: 레이아웃 빌더, I/O, 수학 연산 내장
- **VS Code 확장**: 라이브 미리보기 지원

---

## 설치

```bash
# Linux/macOS
curl -fsSL https://raw.githubusercontent.com/quarkdown-labs/get-quarkdown/refs/heads/main/install.sh | sudo bash

# Homebrew
brew install quarkdown-labs/quarkdown/quarkdown

# Windows (PowerShell)
irm https://raw.githubusercontent.com/quarkdown-labs/get-quarkdown/refs/heads/main/install.ps1 | iex
```

**요구사항**: Java 17+ / PDF 내보내기 시 Node.js·npm 추가 필요

---

## 문법 예시

```markdown
# 일반 Markdown
이것은 **굵은** 텍스트입니다.

# Quarkdown 확장 — 함수 호출
.row {
  .column { 왼쪽 내용 }
  .column { 오른쪽 내용 }
}

# 조건문
.if { .islight } {
  라이트 모드 텍스트
}
```

---

## 어디에 쓸까

- 학술 논문 → PDF (paged 모드)
- 강의 슬라이드 → HTML Slides
- 프로젝트 문서 → HTML Docs
- 개인 지식베이스 → HTML Plain
- 전자책 → HTML Paged

한 번 작성하면 형식만 바꿔 모든 용도로 재활용 가능.
