---
title: "Claude Code 시스템 프롬프트 아키텍처"
date: 2026-03-31
tags: [ai/claude-code, ai/prompting]
description: "Claude Code의 시스템 프롬프트는 고정 문자열이 아닌 모듈식 section-builder 함수로 런타임에 동적 조립된다. 전역 캐시 가능한 prefix와 세션별 suffix를 분리해 프롬프트 캐싱을 최적화한다."
source: "https://www.threads.com/@lucas_flatwhite/post/DWjjh78kSes"
---

# Claude Code 시스템 프롬프트 아키텍처

> 참고 레포: https://github.com/lucas-flatwhite/claude-code-system-prompts

## 핵심 구조

Claude Code는 **정교한 다층 프롬프트 아키텍처**를 사용한다.

메인 시스템 프롬프트는 고정 문자열이 아니라, **모듈식 section-builder 함수들**을 통해 런타임에 동적으로 조립된다.

## 캐싱 최적화 메커니즘

경계 마커(boundary marker)가 두 영역을 구분한다:

| 영역 | 특성 | 용도 |
|------|------|------|
| **전역 prefix** | 캐시 가능 | 모든 세션에 공통된 고정 지침 |
| **세션별 suffix** | 세션마다 다름 | 컨텍스트, 사용자 설정 등 |

이 분리 구조 덕분에 API 호출 전반에서 **프롬프트 캐싱**이 가능하다.
즉, 공통 부분은 반복 전송하지 않아 비용과 지연을 줄인다.

## 의미

Claude Code 소스 코드 유출로 드러난 내부 아키텍처 중 하나다.
에이전트 개발 시 프롬프트 설계와 캐싱 전략에 참고할 수 있다.
