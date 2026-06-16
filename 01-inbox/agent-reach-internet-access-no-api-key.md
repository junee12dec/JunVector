---
title: "Agent-Reach — API 키 없이 AI 에이전트에게 인터넷 절반을 연결하는 Python CLI (31.9k⭐)"
date: 2026-06-16
tags: [ai/agent, dev/tool, productivity/automation, dev/cli]
description: "Claude Code·Cursor·Windsurf 등 AI 에이전트가 API 비용 없이 웹·YouTube·Twitter·Reddit·GitHub·LinkedIn·RSS 등을 읽을 수 있게 해주는 오픈소스 CLI. 에이전트에게 설치 문서 URL을 주면 자동 설치된다."
source: "https://github.com/Panniantong/Agent-Reach"
---

# Agent-Reach — AI 에이전트용 인터넷 접근 레이어

**GitHub**: https://github.com/Panniantong/Agent-Reach  
**⭐ 31.9k stars** / MIT 라이선스  
**언어**: Python (95%)

> "AI 에이전트에게 인터넷 전체를 볼 수 있는 눈을 준다 — API 비용 없이."

---

## 지원 플랫폼

| 글로벌 | 중국 |
|--------|------|
| 웹 페이지 | Bilibili (B站) |
| YouTube | 小红书 (XiaoHongShu) |
| Twitter/X | V2EX |
| Reddit | 雪球 (Xueqiu) |
| GitHub | |
| LinkedIn | |
| RSS 피드 | |
| 웹 검색 (Exa) | |

---

## 설치 방법

에이전트에게 직접 요청:
```
帮我安装 Agent Reach：https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/install.md
```

에이전트가 의존성 설치·설정까지 자동으로 처리한다.

**주요 의존성**: yt-dlp, twitter-cli, bili-cli, Jina Reader, feedparser

---

## 동작 방식

요청 → 1순위 백엔드 시도 → 실패 시 대체 백엔드 자동 전환  
(예: B站이 yt-dlp를 차단해도 대체 수단으로 자동 전환)

```bash
agent-reach doctor  # 진단 명령
```

---

## 보안 주의사항

- 쿠키·토큰은 **로컬 전용 저장** (600 파일 권한)
- 쿠키 기반 플랫폼은 **부계정 사용 권장** — 메인 계정 잠김 위험
- 안전 모드 설치 / Dry-run 미리보기 옵션 제공

---

## 관련 노트

- [[semble-code-search-mcp-server-for-agents]] — AI 에이전트용 코드 검색 MCP 서버 (에이전트 도구 확장 범주)
- [[odysseus-pewdiepie-selfhosted-ai-workspace]] — 셀프호스팅 AI 워크스페이스 (웹 검색 통합 범주)
- [[deerflow-bytedance-super-agent-framework]] — DeerFlow 슈퍼 에이전트 (Agent-Reach와 함께 쓰면 리서치 능력 극대화)
