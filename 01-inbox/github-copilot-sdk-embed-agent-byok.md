---
title: "GitHub Copilot SDK — 내 앱에 Copilot 에이전트를 직접 심는 멀티 언어 SDK (Python·TS·Go·.NET·Java·Rust)"
date: 2026-06-05
tags: [dev/tool, ai/agent, dev/sdk, ai/copilot]
description: "GitHub Copilot의 에이전트 엔진을 직접 앱에 내장할 수 있는 공식 SDK. Python·TypeScript·Go·.NET·Java·Rust 6개 언어를 지원하며, GitHub 구독 없이 BYOK(자체 키)로도 사용 가능하다."
source: "https://github.com/github/copilot-sdk"
---

# GitHub Copilot SDK — 내 앱에 Copilot 에이전트를 직접 심기

**GitHub**: https://github.com/github/copilot-sdk  
**⭐ 9,000+** / MIT 라이선스  
**상태**: GA (2026-06-02 정식 출시, 2026-01 기술 프리뷰 → 2026-04 퍼블릭 프리뷰)

> "Copilot CLI 뒤에서 작동하는 것과 동일한 에이전트 런타임을 프로그래밍 방식으로 호출한다."

---

## 구조

```
내 앱
  ↓
SDK (6개 언어)
  ↓ JSON-RPC
Copilot CLI (서버 모드)
  ↓
planning → tool 호출 → 파일 편집 (오케스트레이션)
```

SDK가 CLI 프로세스 생명주기를 자동으로 관리한다.

---

## 지원 언어 & 설치

| 언어 | 설치 |
|------|------|
| TypeScript/Node.js | `npm install @github/copilot-sdk` |
| Python | `pip install github-copilot-sdk` |
| Go | `go get github.com/github/copilot-sdk/go` |
| .NET | `dotnet add package GitHub.Copilot.SDK` |
| Java | Maven: `com.github:copilot-sdk-java` |
| Rust | `cargo add github-copilot-sdk` |

---

## 인증 방식

- GitHub OAuth / App 토큰 (구독 필요)
- 환경 변수: `COPILOT_GITHUB_TOKEN`, `GH_TOKEN`, `GITHUB_TOKEN`
- **BYOK** — GitHub 구독 없이 자체 키 사용 가능

### BYOK 지원 LLM

OpenAI, Anthropic, Ollama, Microsoft Foundry 등

---

## v0.2.2 주요 기능

`enableConfigDiscovery` 옵션 하나로:
- `.mcp.json` 자동 감지
- `skill` 디렉터리 자동 탐색

---

## 관련 노트

- [[claude-code-team-automation-wikidocs-guide]] — Claude Code 팀 자동화 (에이전트 SDK 활용 맥락)
- [[semble-code-search-mcp-server-for-agents]] — MCP 서버 구축 (copilot-sdk의 .mcp.json 연동 맥락)
- [[odysseus-pewdiepie-selfhosted-ai-workspace]] — 셀프호스팅 AI 워크스페이스 (BYOK 모델 활용 사례)
- [[12-factor-agents-production-ai-engineering]] — 프로덕션 AI 에이전트 12원칙 (SDK 설계 시 참고)
