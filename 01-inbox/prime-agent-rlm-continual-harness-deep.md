---
title: "Prime Agent 기술 심화 — RLM + Continual Harness로 ARC-AGI-3 인간 전문가 돌파"
date: 2026-08-08
tags: [ai/agent, dev/ai-infra, ai/research]
description: "Prime Intellect의 Prime Agent 기술 상세 정리. 코드로 서브에이전트를 호출하는 RLM 구조와, 실행 중 하네스 상태를 스스로 고치는 Continual Harness가 핵심. ARC-AGI-3에서 95.5%로 인간 전문가 기준선 돌파."
source: "https://www.threads.com/share/BAZb4JASDz/"
---

# Prime Agent — RLM + Continual Harness 기술 심화

GitHub: [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent)  
라이선스: MIT / 별 6,800+

→ 개요 노트: [[github-trending-agent-repos-prime-agent-witr]]

## 핵심 두 축

### 1. RLM (Recursive Language Model)

> 컨텍스트를 변수로, 서브에이전트를 함수 호출로.  
> 유일한 도구: **IPython REPL**

도구 호출이 JSON 스키마가 아니라 **코드**다.

```python
await rlm("Summarize auth flow", name="auth-expert")
```

- 즉시 리턴 → 결과는 **비동기 메시지**로 도착
- 병렬 팬아웃, 백그라운드 작업 가능
- **실행 중인 자식 에이전트에 추가 지시** 가능
- 서브에이전트는 세션과 IPython 커널을 **디스크에 유지**
- 30분 비활성 → 메모리 해제 → 다시 참조 시 자동 복원

### 2. Continual Harness

에이전트가 실행하면서 겪은 성공/실패가 궤적에 쌓임.  
`/refine`이 이 궤적을 읽고 하네스 상태에 작은 변경을 가함.

| 트리거 | 결과 |
|--------|------|
| 반복된 실패 | 메모리로 승격 |
| 재사용 가능한 전략 | 스킬로 등록 |
| 기본 시스템 프롬프트 | 불변 |

- 각 변경의 트리거와 결과 기록
- 롤백 지원

## 벤치마크 결과

| 벤치마크 | Prime Agent 결과 | 비교 |
|----------|-----------------|------|
| **ARC-AGI-3** | Opus 5 + Prime Agent = **95.5%** | 인간 전문가 기준선 95.4% **돌파** |
| OOLONG (128k 롱컨텍스트) | GPT-5.6 + Prime Agent = **0.940** | Codex = 0.500 |
| EmulatorBench (Rust 에뮬레이터) | GPT-5.6 + Prime Agent = **0.275** | **최고점** |

> 현재 어떤 모델도 Prime Agent 기준으로 학습되지 않았는데도 네이티브 하네스를 이겼다.  
> 모델-하네스 공동학습까지 결합하면 추가 성능 향상이 클 것으로 예상.

## 보안 리스크: 보상 해킹

정제 루프가 강력할수록 보상 해킹 리스크가 커진다.

> Factorio에서 에이전트가 RCON 명령으로 자원을 직접 기계에 넣는  
> 익스플로잇을 **스스로 발견**했다. "치트하지 마"라는 프롬프트가 있었어도.

시스템이 강해질수록 프롬프트 수준의 제약은 우회된다.

## 함의: 다음 패러다임

1. **하네스 설계가 정체되어 있었다는 증거** — 네이티브 하네스 없이도 성능 우위
2. **모델-하네스 공동학습**이 다음 패러다임 — 모델이 하네스 인터페이스에 맞게 학습되면 시너지 급증
3. JSON 스키마 도구 호출 → **코드 호출**로의 전환

## 관련 노트

- [[stanford-cs329a-lecture5-planning-agent-review]] — 파인튜닝 vs 하네스 투자 논의, 강의와 실증이 맞물림
- [[loopx-stateful-control-plane-long-running-agent]] — 같은 하네스 기반 장기 에이전트, 설계 철학 비교 가능
