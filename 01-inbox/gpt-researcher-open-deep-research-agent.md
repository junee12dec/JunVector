---
title: "GPT Researcher — 웹과 내 로컬 문서를 함께 뒤져 출처 인용이 붙은 장문 리포트를 쓰는 오픈소스 심층 리서치 에이전트 (Apache-2.0)"
date: 2026-11-26
tags: [ai/agent, ai/research, ai/skill]
description: "계획(planner) 에이전트가 질문을 만들고 실행 에이전트들이 병렬로 자료를 모아, 출처 20개 이상과 본문 인용이 붙은 2,000단어 이상 리포트를 쓴다. 웹과 로컬 문서를 함께 조사하고, PDF·Word로 내보내며, Claude Skill이나 MCP로 붙일 수 있다."
source: "https://www.threads.com/@goraebab0109/post/DgL8G74Ac6d"
---

# GPT Researcher — 오픈소스 심층 리서치 에이전트

- 저장소: https://github.com/assafelovic/gpt-researcher (Apache-2.0, 저장 시점 약 3만 900⭐)
- 문서: https://docs.gptr.dev · 사이트: https://gptr.dev
- 소개 글: @goraebab0109 (Threads, 2026-11-26) — "논문 하나 쓰려고 자료 찾고 정리만 며칠, 지치죠"
- 활용: 선행연구 개요 잡기, 강의자료 배경 조사

## 왜 만들었나 (README)

- 사람이 하는 객관적 조사는 몇 주가 걸린다.
- 오래된 정보로 학습한 LLM은 환각으로 최신 조사에 맞지 않는다.
- LLM의 토큰 한계로 긴 리포트를 한 번에 쓰기 어렵다.
- 기존 서비스는 웹 출처가 제한돼 오정보와 얕은 결과가 나온다.
- 출처를 골라 쓰면 편향이 생긴다.

## 구조 — planner와 execution

핵심은 **계획(planner) 에이전트와 실행(execution) 에이전트**다. 계획 쪽이 조사 질문을 만들고, 실행 쪽이 질문별로 자료를 모은 뒤, 마지막에 하나의 리포트로 합친다.

1. 조사 질의에 맞는 전용 에이전트를 만든다
2. 과제에 대한 객관적 의견을 이루도록 질문을 만든다
3. 질문마다 크롤러 에이전트가 정보를 모은다
4. 각 자료를 요약하고 **출처를 추적**한다
5. 요약을 거르고 합쳐 최종 리포트를 만든다

## 기능

| 기능 | 내용 |
|------|------|
| 웹 + 로컬 문서 | 웹 자료와 내 로컬 문서를 함께 조사 |
| 장문 리포트 | 2,000단어 이상 |
| 출처 20개 이상 | 객관적 결론을 위해 집계, 본문에 인용 표시 |
| 재귀적 Deep Research | 주제를 넓게·깊게 탐색 (소개 글) |
| 멀티에이전트 병렬 | 계획→탐색→집필이 병렬로 돌아 환각·편향 감소 (소개 글) |
| JavaScript 웹 스크래핑 | 동적 페이지 지원 |
| 이미지 | 리포트용 이미지 수집·선별, Google Gemini(Nano Banana)로 **본문 삽화 생성** |
| 내보내기 | PDF, Word 등 |
| 기억 | 조사하는 동안 맥락 유지 |
| 프런트엔드 | 가벼운 HTML/CSS/JS판, NextJS + Tailwind판 |

## 설치·사용

**Claude Skill로**:

```bash
npx skills add assafelovic/gpt-researcher
```

설치하면 대화 안에서 Claude가 심층 리서치 기능을 쓴다.

**직접 실행**: Python 3.11 이상, API 키 설정 후

```bash
git clone https://github.com/assafelovic/gpt-researcher.git
cd gpt-researcher
export OPENAI_API_KEY=...
export TAVILY_API_KEY=...
pip install -r requirements.txt
python -m uvicorn main:app --reload     # http://localhost:8000
```

**pip 패키지**: `pip install gpt-researcher` → `GPTResearcher(query=...)`로 `conduct_research()` 후 `write_report()`. MCP 연동도 지원한다 (소개 글).

로컬 모델 등 OpenAI 호환 API는 `OPENAI_BASE_URL`로 지정할 수 있다.

## 비용과 주의 (소개 글)

- **OpenAI·Tavily 등 API 키가 필요**하다. 기본 모델 기준 **건당 약 $0.08**.
- 웹 검색 API로 질문이 외부 서비스에 나가므로, 사내 기밀 주제에는 로컬 모델과 사내 문서만 쓰는 구성을 먼저 확인해야 한다.

## 참고

- README 앞부분과 소개 글 기준으로 정리했다. 비용 수치는 소개 글에만 있고 직접 확인하지 않았다.
