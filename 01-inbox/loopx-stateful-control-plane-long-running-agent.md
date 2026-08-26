---
title: "LoopX — 장기 실행 AI 에이전트 팀을 위한 상태 커널 오픈소스"
date: 2026-08-08
tags: [ai/agent, dev/ai-infra, ai/claude-code]
description: "Codex·Claude Code·Cursor와 호환되는 provider-neutral 에이전트 제어 평면. 목표·게이트·할일·증거·할당량을 세션을 넘어 유지하며 '루프는 계속, 판단은 사람이'라는 철학으로 설계된 Python 오픈소스."
source: "https://github.com/huangruiteng/loopx"
---

# LoopX — 장기 실행 AI 에이전트 팀을 위한 상태 커널

GitHub: [huangruiteng/loopx](https://github.com/huangruiteng/loopx)  
스타: 3.5k / 라이선스: MIT / 언어: Python 3.11+

> "Keep the loop moving. Keep the judgment human."  
> 루프는 계속 움직이되, 판단은 인간이 한다.

## 무엇인가

LoopX는 에이전트 런타임을 교체하는 게 아니라, 그 위에 얹히는 **상태 제어 평면(control plane)**이다.

```
에이전트 런타임 (Codex / Claude Code / Cursor)
       ↕
LoopX 커널 — 상태·결정·연속성 관리
       ↕
Capability — 프로바이더 출력 정규화 & 전환 제안
```

에이전트가 한 턴에 할 수 있는 작업을 작은 슬라이스로 쪼개고, 그 슬라이스가 명시적 제약 안에서 실행되도록 통제한다.

## 핵심 개념 5가지

### 1. Goals (목표)
세션을 넘어 지속되는 목표. 범위·증거 브랜치·검토 이력을 함께 보관.

### 2. Gates (게이트)
인간 판단이 필요한 명시적 결정 포인트. "대기 중" 같은 모호한 상태 대신 구체적인 질문으로 치환. 게이트가 막힌 레인은 별도 안전 폴백 작업이 병렬로 진행.

### 3. Todos (할일)
소유권·클레임·리스·연속 마커가 붙은 타입드 태스크. 피어 에이전트 간 핸드오프 시 가시성 유지.

### 4. Quota (할당량)
지출 계산·스케줄러 힌트·충돌 복구를 통한 스케줄 적격성 관리. 무한 루프 방지.

### 5. Evidence (증거)
리비전 스탬프된 수정 지식. 검증·블로커·승인된 쓰기·결정 계보를 턴을 넘어 보존.

## 빠른 시작

```bash
# 설치 (클론 불필요)
curl -fsSL https://huangruiteng.github.io/loopx/install.sh | bash
export PATH="$HOME/.local/bin:$PATH"
loopx doctor

# 프로젝트 연결
cd /your-project
loopx connect
loopx status

# 목표 시작
loopx start-goal --guided --project . --goal-text "목표 입력"
```

## 핵심 루프 오퍼레이션

```bash
loopx quota should-run    # 실행 적격 여부 확인
loopx todo claim          # 소유권 클레임
loopx todo update         # 변경 사항 기록
loopx refresh-state       # 다음 턴 준비
loopx quota spend-slot    # 완료 후 할당량 소비
```

## 지원 런타임

| 런타임 | 연동 방식 |
|--------|-----------|
| Claude Code | 어댑터 설치 후 `/loopx` → `/loop` |
| Codex App | `$loopx` 명령어, 하트비트 자동화 |
| Codex CLI | `loopx agent-onboard --agent-type codex-app-ssh` |
| Cursor / Shell | 수동 연결 |

## LoopX가 하지 않는 것

- 에이전트 런타임 교체 / 실행 엔진 제공 X
- 자격증명 부여 / 파괴적·프로덕션 액션 승인 X
- 명시적 인증 없이 게시 X
- 자율 프로덕션 컨트롤러 역할 X

## 실증 사례

- 200+ 시간 공개 PR 기여 (OpenViking 프로젝트)
- 200+ 시간 Auto ML 실험 (가설·증거·게이트 포함)
- 13시간 C++ 정확도 향상 실행
- 4일 무인 실행
- 7개 머지된 PR 기여

## 관련 개념

[[loop-engineering-agentic-workflow]] — 루프 엔지니어링 개념 (Boris Cherny). LoopX는 이 철학의 실제 구현체에 해당.
