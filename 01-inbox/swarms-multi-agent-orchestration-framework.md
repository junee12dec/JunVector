---
title: "Swarms — 여러 AI 에이전트를 순차·병렬·계층 워크플로우로 묶는 파이썬 멀티 에이전트 프레임워크"
date: 2026-11-18
tags: [ai/agent, dev/open-source]
description: "에이전트 하나(LLM+도구+메모리)를 기본 단위로, 순차·병렬·그래프·계층·토론 등 미리 만든 멀티 에이전트 구조를 골라 쓰는 파이썬 프레임워크. 에이전트를 MCP 서버나 A2A 서버로 내보낼 수 있고, AI 코딩 도구용 CLAUDE.md와 문서 MCP를 제공한다."
source: "https://www.threads.com/@gitrepos_/post/Df1POaCjiwx"
---

# Swarms — 여러 AI 에이전트를 워크플로우로 묶는 멀티 에이전트 프레임워크

- 저장소: https://github.com/kyegomez/swarms (Apache-2.0, 파이썬)
- 문서: https://docs.swarms.world
- 소개 글: @gitrepos_ (Threads, 2026-11-17) — "⭐ 7.4k". 첨부 이미지의 README 배지는 5.2k로 찍혀 있어 배지가 갱신되지 않은 것으로 보인다.
- 스스로를 "엔터프라이즈급, 프로덕션 준비가 된 멀티 에이전트 오케스트레이션 프레임워크"라고 소개한다.

## 설치

```bash
pip3 install -U swarms
uv pip install swarms     # 권장
```

`swarms[fast]`(빠른 모델 호출·그래프), Docker 이미지도 있다.

## 기본 단위: Agent

에이전트 = LLM + 도구 + 메모리.

```python
from swarms import Agent

agent = Agent(model_name="gpt-5.4", max_loops="auto")
agent.run("What are the key benefits of using a multi-agent system?")
```

- `max_loops="auto"`: 에이전트가 계획·실행·반성을 반복하다가 작업이 끝났다고 판단할 때 멈춘다. 단계 수를 모르는 열린 조사에 권장.
- 고정값(`max_loops=1` 등): 지연·비용이 중요한 프로덕션 파이프라인, 단계가 정해진 작업에 쓴다.

## 멀티 에이전트 구조

| 구조 | 동작 | 맞는 일 |
|------|------|---------|
| SequentialWorkflow | 앞 에이전트의 출력이 다음 에이전트의 입력 | 단계가 정해진 처리, 보고서 생성 |
| ConcurrentWorkflow | 여러 에이전트가 동시에 실행 | 일괄 처리, 병렬 분석 |
| AgentRearrange | `a -> b, c`처럼 관계를 문자열로 지정 | 유연한 분배·라우팅 |
| GraphWorkflow | 에이전트를 DAG의 노드로 | 의존 관계가 복잡한 작업 |
| MixtureOfAgents | 전문가 에이전트 여럿의 답을 병렬로 받아 종합 | 복잡한 문제 해결 |
| GroupChat | 대화하며 함께 결정 | 토론, 협상, 브레인스토밍 |
| ForestSwarm | 작업에 맞는 에이전트(트리)를 골라 실행 | 전문성 기반 라우팅 |
| HierarchicalSwarm | 디렉터가 계획을 세우고 작업자에게 분배, 피드백 반복 | 프로젝트 관리, 팀 조율 |
| HeavySwarm | 질문 생성 → 조사·분석·대안·검증 에이전트 병렬 실행 → 종합 (Grok Heavy에서 착안) | 깊은 조사·분석, 전략 기획 |
| SwarmRouter | 하나의 인터페이스에서 `swarm_type`만 바꿔 구조를 갈아 끼움 | 전략 비교, 통합 관리 |

- 이 밖에 60종 이상의 구조가 문서에 있다고 한다.
- `AutoSwarmBuilder`: 작업 설명만 주면 에이전트·프롬프트·워크플로우를 자동 생성한다 (빠른 프로토타입용).

예 — 조사자와 작가를 순서대로:

```python
from swarms import Agent, SequentialWorkflow

researcher = Agent(agent_name="Researcher", system_prompt="...research and summarize...", model_name="gpt-5.4")
writer = Agent(agent_name="Writer", system_prompt="...write a blog post...", model_name="gpt-5.4")
SequentialWorkflow(agents=[researcher, writer]).run("The history and future of artificial intelligence")
```

## 연동

- **MCP**: 외부 MCP 서버의 도구를 쓰는 것뿐 아니라, `MCPDeployer`로 에이전트·스웜을 **MCP 서버로 내보내** 다른 에이전트가 도구로 호출하게 할 수 있다 (API 키 인증 포함).
- **A2A**: `A2AServer`로 다른 프레임워크의 에이전트가 찾아 호출할 수 있게 공개하고, `A2AClient`로 원격 A2A 에이전트를 부른다.
- **Agent Skills**: Anthropic의 SKILL.md 형식 스킬을 불러와 코드 수정 없이 에이전트를 특화한다.
- 그 외: Open Responses(멀티 프로바이더 LLM 인터페이스), X402(암호화폐 결제로 에이전트 유료화), Swarms Marketplace(프롬프트·에이전트·도구 공유), LangChain·AutoGen·CrewAI 호환.

## AI 코딩 도구로 쓰기

- 저장소에 들어 있는 `CLAUDE.md`·`AGENTS.md`를 프로젝트에 복사하면 Claude Code·Cursor·Codex가 Swarms 코드를 관용적으로 쓴다.
- 문서 MCP(키 불필요): `claude mcp add --transport http swarms-docs https://docs.swarms.world/mcp`
- 전체 문서 텍스트: `docs.swarms.world/llms.txt`(목차), `llms-full.txt`(전체)
