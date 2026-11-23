---
title: "Claude-BugHunter — 버그 바운티·외부 레드팀 업무를 83개 에이전트 스킬로 나눈 번들 (도메인 지식 패키징 사례, MIT)"
date: 2026-11-23
tags: [ai/skill, ai/claude-code]
description: "범용 보안 프롬프트 하나 대신 업무 단계와 취약점 유형별로 나눈 83개 스킬로, 허가된 범위의 버그 바운티·레드팀 업무를 지원한다. 공개된 HackerOne 리포트 681건의 패턴을 정리했고, 리포트 전에 범위·품질을 점검하는 7문항 관문을 둔다. 도메인 전문 지식을 스킬로 묶는 방법의 레퍼런스로 볼 만하다."
source: "https://www.threads.com/@lucas_flatwhite/post/DgFcKw-kdNY"
---

# Claude-BugHunter — 보안 업무를 83개 스킬로 나눈 번들

- 저장소: https://github.com/elementalsouls/Claude-BugHunter (MIT, 저장 시점 약 19,600⭐)
- 만든 사람: Sachin Sharma (버그 헌팅·생성형 AI 보안 연구)
- 소개 글: @lucas_flatwhite (Threads, 2026-11-23) — "이런 프로젝트는 **도메인 전문 지식을 어떻게 패키징하는지** 보여 주는 좋은 레퍼런스"
- 용도: **허가된 범위(in-scope)** 의 버그 바운티와 외부 레드팀 업무 지원

## 규모 (첨부 이미지 기준)

스킬 83 · 슬래시 명령 15 · 헌트 모듈 58 · 공개 HackerOne 리포트 681건 · 지원 하네스 5 · MIT

## 구조 — 네 개의 층

범용 보안 프롬프트 하나 대신, **업무 단계 × 취약점 유형**으로 스킬을 나눴다.

| 층 | 내용 |
|----|------|
| **생각 (Think)** | 방법론·레드팀 사고방식 스킬: 5단계 비선형 작업 흐름, 비판적 사고 틀, 운영 규율 |
| **웹앱 헌팅 (Hunt)** | 공개 리포트 681건에서 정리한 취약점 유형별 스킬 58개 (24개 핵심 취약점 분류) |
| **외부 노출면 (Perimeter)** | 기업 플랫폼(M365/Entra, Okta, VPN 장비, 클라우드 IAM 등) 공격 경로 |
| **검증과 리포트 (Ship)** | 7문항 검증 관문, 심각도 판정, 범위 밖 판정 대응, 개인정보 가리기, 산출물 |

작업 흐름: 범위 확인 → 정찰 → 헌팅 → 검증 → 제출 (scope → recon → hunt → validate → ship)

## 패키징 방식에서 배울 점

1. **이름을 부르지 않아도 주제로 자동 로드**: 테스트하려는 내용을 평소 말로 설명하면 관련 스킬이 알아서 불려 온다.
2. **근거 있는 지식**: 공개 리포트 681건의 패턴을 정리했고, 그중 433건은 개별 출처를 달아 검증할 수 있게 했다.
3. **품질·적법성 관문**: 리포트를 내기 전 **7-Question Gate**로 범위 포함 여부와 오탐을 걸러 낸다.
4. **여러 하네스 호환**: 같은 `SKILL.md` 형식이라 Claude Code, OpenCode, Codex CLI, Hermes Agent, Google AntiGravity에서 쓴다. 하네스마다 다른 설정 형식(JSON·TOML·YAML)을 설치 스크립트가 맞춰 준다.

## 설치

```text
/plugin marketplace add elementalsouls/Claude-BugHunter
/plugin install claude-bughunter@elementalsouls
```

또는 저장소를 받아 `bash scripts/install.sh` (여러 하네스: `--all`). HackerOne API 토큰은 선택이다.

## 참고

- 보안 테스트는 반드시 허가받은 대상과 범위 안에서만 해야 한다. 이 노트는 스킬 구성 방식을 참고하려고 정리했다.
- README 앞부분과 첨부 이미지 3장 중 1장을 확인했다.
