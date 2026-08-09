---
title: "GitHub 하루 급상승 에이전트 레포 3선 — prime-agent·agent-skills·witr"
date: 2026-08-08
tags: [ai/agent, dev/ai-infra, dev/tools]
description: "사람 없이 며칠짜리 작업을 돌리는 자율 에이전트 레포가 하루 만에 별 2,319개를 받은 사건. prime-agent(자율 RLM 에이전트), agent-skills(엔지니어링 규율 스킬), witr(프로세스 역추적 CLI) 세 레포 정리."
source: "https://www.threads.com/share/BBcajaqdIA/"
---

# GitHub 하루 급상승 에이전트 레포 3선

> 사람이 붙어 있지 않아도 되는 코딩 에이전트에 별이 몰리고 있다.

## 1위 — PrimeIntellect-ai/prime-agent (+2,319⭐/일)

**GitHub**: https://github.com/PrimeIntellect-ai/prime-agent  
누적 별 10,000 / 포크 1,019개

"스스로 개선하는" RLM(Reinforced Language Model) 에이전트.

### 핵심 구조: Continual Harness

- 파이썬 환경을 **계속 살려둔 채** 서브에이전트를 생성
- 하트비트와 스케줄로 **며칠짜리 작업을 자율 실행**
- 한 번 쓴 절차를 **스킬로 저장** → 다음 작업에 재사용
- 백그라운드 데몬으로 장기 실행

→ 사람이 옆에 없어도 작동하는 에이전트의 실제 구현체.

---

## 2위 — addyosmani/agent-skills (+670⭐/일)

**GitHub**: https://github.com/addyosmani/agent-skills  
누적 별 85,000

코딩 에이전트가 지켜야 할 엔지니어링 규율을 24개 스킬로 묶은 오픈소스.  
스펙 작성 → 리뷰 → 테스트 → 배포 전 과정 커버. Claude Code·Cursor·Copilot·Cline 등 70개 이상 도구에 CLI로 설치 가능.

→ 별도 노트 참고: [[addy-osmani-agent-skills-workflow]]

---

## 3위 — pranshuparmar/witr (+556⭐/일)

**GitHub**: https://github.com/pranshuparmar/witr  
누적 별 20,000

**"이거 왜 켜져 있지?"**에 답하는 CLI.

### 기능

- 프로세스·서비스·포트·컨테이너가 **무엇 때문에 시작됐는지** 인과 사슬 역추적
- CLI 모드 + 대화형 TUI 모드
- Linux·macOS·Windows·FreeBSD 전부 지원

### 왜 지금 뜨나

에이전트가 띄우는 프로세스가 늘어날수록, 어떤 에이전트가 무엇을 실행했는지 추적하는 도구의 가치가 커짐.

---

## 맥락: 트렌드 읽기

1위(+2,319)가 2·3위 합산(+1,226)보다 두 배 많았다. 공통점: 모두 **자율 에이전트 인프라** 관련. 사람 없이 오래 도는 에이전트를 만들고(prime-agent), 규율 잡고(agent-skills), 뭘 실행했는지 파악하는(witr) 방향으로 수요가 이동 중.
