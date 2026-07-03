---
title: "OpenWiki — 코드베이스 문서를 자동으로 쓰고 유지하는 CLI (LangChain AI)"
date: 2026-07-03
tags: [dev/documentation, ai/coding-agent, dev/workflow]
description: "코드베이스 전체를 스캔해 에이전트 친화적 문서를 자동 생성·갱신하는 CLI. CLAUDE.md·AGENTS.md를 자동 업데이트하고 매일 GitHub PR을 열어 문서를 최신 상태로 유지."
source: "https://github.com/langchain-ai/openwiki"
---

# OpenWiki — 코드베이스 문서를 자동으로 쓰고 유지하는 CLI (LangChain AI)

## 한 줄 요약

낡은 README는 이제 끝. 코드베이스를 스캔해 AI 에이전트용 문서를 자동 생성하고, 코드가 바뀌면 문서도 따라 바뀐다.

---

## 주요 기능

- **초기 문서 자동 생성**: 저장소 전체를 스캔해 에이전트 친화적 문서 작성
- **CLAUDE.md · AGENTS.md 자동 업데이트**: 올바른 컨텍스트 참조 지시문 자동 삽입
- **매일 GitHub PR**: GitHub Actions로 변경사항을 감지해 문서 업데이트 PR을 일일 자동 생성
- **멀티 모델 지원**: OpenAI, Claude, OpenRouter, GLM, Kimi, 커스텀 모델

---

## 지원 모델

OpenRouter, Fireworks, Baseten, OpenAI, Anthropic 등.
사전 정의된 모델: GLM 5.2, Kimi K2.6, Sonnet 5.
사용자 정의 모델 ID도 지원.

---

## 설치 및 사용

```bash
npm install -g openwiki
openwiki --init
```

- `openwiki` — 대화형 모드
- `openwiki -p "지시문"` — 단일 실행 모드

설정은 `~/.openwiki/.env`에 로컬 저장.

---

## 왜 중요한가

AI 에이전트는 코드베이스를 이해하기 위해 CLAUDE.md 같은 컨텍스트 파일에 의존한다.
코드는 매일 바뀌지만 문서는 방치되는 게 현실.
OpenWiki는 이 간극을 자동화로 닫는다.

---

## 링크

- GitHub: https://github.com/langchain-ai/openwiki
