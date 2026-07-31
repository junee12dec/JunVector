---
title: "clean-architecture-skills — 로버트 마틴 클린 아키텍처 + 켄트 백 리팩토링 Claude Code 스킬"
date: 2026-07-25
tags: [ai/coding-agent, dev/architecture, dev/refactoring]
description: "한국 개발자가 만든 Claude Code 스킬 모음. 로버트 마틴의 클린 아키텍처 원칙으로 의존성·계층 구조·SOLID를 검토하고, 켄트 백 스타일로 리팩토링을 진행한다."
source: "https://github.com/nathankim0/clean-architecture-skills"
---

# clean-architecture-skills — 로버트 마틴 클린 아키텍처 + 켄트 백 리팩토링 Claude Code 스킬

GitHub: [nathankim0/clean-architecture-skills](https://github.com/nathankim0/clean-architecture-skills)

## 포함된 스킬 2종

### 1. Clean Architecture 스킬 (로버트 C. 마틴)

> "소스 코드 의존성은 반드시 내부(고수준 정책)를 향해야 한다"

- **의존성 규칙 검증** — 코드 의존성이 내부를 향하는지 확인
- **계층 구조 분석** — Entities → Use Cases → Interface Adapters → Infrastructure
- **의존성 역전 원칙(DIP)** 적용 검토
- **SOLID 원칙** 준수 여부 확인

### 2. Kent Beck Style 스킬 (켄트 백 리팩토링)

- 코드 냄새 감지
- 리팩토링 기법 제시
- YAGNI, KISS 단순 설계 원칙
- 의도를 드러내는 코드 작성법

## 설치 및 사용

```bash
/plugin marketplace add nathankim0/clean-architecture-skills
/plugin install clean-architecture@clean-architecture-skills
```

**활용 예시:**
- "프로젝트 아키텍처를 클린 아키텍처 원칙으로 검토해줘"
- "이 긴 메서드를 리팩토링하도록 도와줘"
- "이 코드의 네이밍을 개선해줘"

## 관련 위인들의 원칙

| 인물 | 기여 |
|------|------|
| 로버트 마틴 (Uncle Bob) | 클린 아키텍처, SOLID 원칙 |
| 켄트 백 | TDD, 리팩토링, XP |
| 마틴 파울러 | 리팩토링 패턴 |
| 크리스토퍼 알렉산더 | 패턴 언어 (디자인 패턴의 기원) |
