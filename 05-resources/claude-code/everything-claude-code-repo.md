---
title: "Everything Claude Code — 토큰 비용 절감 & 생산성 극대화 레포지토리"
date: 2026-03-22
tags: [claude-code/optimization, dev/productivity]
description: "Claude Code 사용 시 토큰 비용을 최대 70% 절감하고 생산성을 높여주는 종합 레포지토리. 28개 전문 에이전트, 116개+ 스킬, 59개 명령어가 포함된 프로덕션급 시스템."
source: "https://github.com/affaan-m/everything-claude-code"
---

# Everything Claude Code — 토큰 비용 절감 & 생산성 극대화 레포지토리

> 원본 소개 (Threads @feelfree_ai): https://www.threads.com/@feelfree_ai/post/DWLQb4iAOAH

## 한 줄 요약

Claude Code(및 Cursor, OpenCode 등 AI 에이전트 플랫폼)를 위한 종합 성능 최적화 시스템. 단순 프롬프트 모음이 아니라 실무 바로 적용 가능한 프로덕션급 구성 요소 세트.

## 주요 구성

| 구성 요소 | 수량 | 내용 |
|-----------|------|------|
| 전문 에이전트 | 28개 | 계획, 아키텍처, 코드 리뷰, 보안 검사, 빌드 오류 해결, E2E 테스트 등 |
| 스킬 | 116개+ | TypeScript, Python, Go, Java, Rust 등 언어별 패턴 + TDD, 보안, DB 최적화 |
| 실행 명령어 | 59개 | `/plan`, `/tdd`, `/code-review`, `/build-fix`, `/e2e` 등 |

## 핵심 기능

- **토큰 최적화**: Sonnet 최적화 + 씽킹 토큰 제한 → 비용 최대 70% 절감
- **메모리 지속성**: 세션 간 컨텍스트 자동 저장/로드
- **지속적 학습**: 세션에서 패턴 자동 추출 → 재사용 가능한 스킬로 변환
- **검증 루프**: 1,200개+ 테스트 기반 보안 스캐너
- **병렬화**: Git worktree, 캐스케이드 방식, 다중 인스턴스 확장

## 설치

```bash
# 레포지토리 설치 후 언어별 필요 컴포넌트만 선택 설치 가능
# 복잡한 설정 없이 명령어 몇 번으로 적용
```

## 통계

- ⭐ 50K+ 스타, 6K+ 포크
- 30+ 기여자, 5개 언어 지원
- Anthropic 해커톤 수상
