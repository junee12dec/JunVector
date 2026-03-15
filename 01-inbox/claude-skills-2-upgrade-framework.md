---
title: "Claude Skills 2.0 업그레이드 프레임워크"
date: 2026-03-15
tags: [ai/claude, productivity/automation, dev/skills]
description: "앤트로픽의 Skills 2.0 프레임워크 개요와, 기존 스킬 파일을 자동 진단·최적화해주는 skills-2.0-upgrade 툴 소개."
source: "https://www.threads.com/@tofukyung/post/DV68fjngkf3"
---

# Claude Skills 2.0 업그레이드 프레임워크

## Skills 2.0이란?

2025년 3월 앤트로픽이 공개한 스킬 개발/평가 프레임워크.
스킬 생성 시 4개의 에이전트가 역할을 분담한다:

| 에이전트 | 역할 |
|----------|------|
| Executor | 스킬 실행 |
| Grader | 결과 채점 |
| Comparator | 버전 비교 |
| Analyzer | 성능 분석 |

핵심 원칙:
- 자동 블라인드 테스트 및 벤치마크 측정
- **Frontmatter 트리거** 명시 (언제·어떻게 쓰는지 = 책 표지)
- **Skills.md 효율화** — 500자 이하 목차 형태로 유지

## skills-2.0-upgrade 툴

- GitHub: https://github.com/treylom/skills-2.0-upgrade
- 사용법: 링크를 AI에 주고 "이거 설치해서 내 스킬 업그레이드 해줘"

### 동작 흐름

1. 전체 또는 일부 스킬 진단 여부 선택
2. 진단 리포트 생성
3. 실제 수정 여부 확인 후 수정 진행

### 적용 결과 예시

- 스킬 md 파일 700줄 → 700자 이하로 압축
- Skills 2.0 이행도: **62% → 94.3%**
- 배포 시 보안 문제 점검 기능 포함

## 참고 자료 (방법론 출처)

- [obra/superpowers](https://github.com/obra/superpowers)
- [fivetaku/skillers-suda](https://github.com/fivetaku/skillers-suda)
