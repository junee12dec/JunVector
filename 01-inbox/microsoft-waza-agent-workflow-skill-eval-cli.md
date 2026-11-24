---
title: "Microsoft Waza — AI 에이전트 워크플로·스킬·커스텀 에이전트를 반복 가능한 시나리오로 평가하는 CLI (MIT)"
date: 2026-11-23
tags: [ai/agent, ai/skill, dev/tools]
description: "에이전트가 의도한 작업을 정확히 수행하는지 확인하는 Microsoft의 평가 CLI. 저장소·CLI·MCP 시나리오를 만들고, 채점기로 점수를 매기는 시도를 돌리고, 증거를 남겨 CI 회귀 관문으로 쓴다."
source: "https://www.threads.com/@aaron_place_h/post/DgFY94cEmLX"
---

# Microsoft Waza — 에이전트 워크플로 평가 CLI

- 저장소: https://github.com/microsoft/waza (MIT, Go, 저장 시점 약 1,500⭐)
- 문서: https://microsoft.github.io/waza/
- 소개 글: @aaron_place_h (Threads, 2026-11-23) — 정리 글 https://digitalbourgeois.tistory.com/4672 (저장할 때 네트워크 정책에 막혀 읽지 못함)

## 무엇인가

AI 에이전트 워크플로, **스킬**, 커스텀 에이전트를 평가하는 Go CLI.
- 저장소·CLI·MCP **시나리오**를 작성한다
- **채점기(grader)** 로 점수를 매기는 시도(trial)를 반복해서 돌린다
- 남은 **증거(evidence)** 를 살펴본다
- **CI 회귀 관문**으로 연결한다

문서가 권하는 순서: 개념과 학습 순서 → 오프라인 하네스 빠른 시작 → 인증된 워크플로 평가 → CI 회귀 관문.

README의 주의: **목(mock)으로 통과한 것은 하네스가 돈다는 뜻이지, 에이전트 품질이나 실제 서비스의 안전을 보여 주지 않는다.**

## 버전 (README 기준)

- 배포된 CLI는 `v0.42.0` (2026-11-21). 빠르게 버전이 오르는 중이다.
- v0.39~v0.42에 걸쳐 시나리오 작성, 사전 점검(preflight), 선택 파일 증거, 대시보드 Lab, 실행 시도 기록·체크포인트 복구, 실행 텔레메트리(OpenTelemetry 내보내기) 등이 추가됐다.
- 기본으로 **사용 통계 텔레메트리가 켜져 있고 끌 수 있다**(opt-out).

## 설치

```bash
curl -fsSL https://raw.githubusercontent.com/microsoft/waza/main/install.sh | bash
```

- Windows PowerShell: `irm https://raw.githubusercontent.com/microsoft/waza/main/install.ps1 | iex`
- 소개 글의 안내대로 **실행 전에 스크립트 내용을 먼저 확인**한다. 스크립트는 OS·아키텍처를 감지해 최신 바이너리를 받고 체크섬을 확인한다.
- GitHub Releases에서 바이너리를 직접 받거나, Azure Developer CLI(azd) 확장으로도 쓸 수 있다.
- `copilot-sdk` 실행기용으로 GitHub Copilot CLI를 내장하고 있다.

## 참고

- README 앞부분만 읽었다 (본문 대부분이 버전별 변경 사항이다). 시나리오·채점기 작성법은 문서 사이트에서 확인해야 한다.
