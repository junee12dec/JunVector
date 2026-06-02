---
title: "Odysseus — PewDiePie가 공개한 셀프호스팅 AI 워크스페이스 (출시 24시간 만에 15k⭐)"
date: 2026-06-02
tags: [ai/tool, dev/selfhosted, ai/agent, productivity/workspace]
description: "세계 최대 유튜버 PewDiePie가 출시한 오픈소스 셀프호스팅 AI 워크스페이스. 대화·에이전트·MCP·파일·메모리·웹 검색·이메일·문서 편집을 하나의 인터페이스에서 제공하며 출시 24시간 만에 GitHub 15,000 스타를 돌파했다."
source: "https://github.com/pewdiepie-archdaemon/odysseus"
---

# Odysseus — PewDiePie의 셀프호스팅 AI 워크스페이스

**GitHub**: https://github.com/pewdiepie-archdaemon/odysseus  
**⭐ 24.8k stars** / MIT 라이선스  
**출시**: 24시간 만에 15,000 스타 돌파

---

## 주목 포인트: 크리에이터 이코노미의 확장

> "과거에는 크리에이터가 콘텐츠를 만들고 광고·굿즈를 판매하는 수준이었다면,
> 이제는 직접 소프트웨어와 AI 제품까지 출시하는 시대가 되고 있다."

신뢰와 팬덤을 가진 개인 브랜드가 AI 시장에서도 영향력을 갖기 시작한 사례.

---

## 핵심 기능

| 기능 | 내용 |
|------|------|
| Chat | ChatGPT 수준 대화 인터페이스 |
| Agents | 자율 에이전트 실행 |
| MCP | Model Context Protocol 통합 |
| Cookbook | 하드웨어 스캔 → 최적 모델 자동 추천 |
| Deep Research | 심층 리서치 워크플로우 |
| Compare | 모델 간 응답 비교 |
| Documents | 문서·이미지 편집 |
| Memory / Skills | 장기 기억 + 스킬 시스템 |
| Email | IMAP/SMTP 이메일 처리 |
| Calendar | CalDAV 캘린더 연동 |
| PWA | 모바일 앱처럼 사용 가능 |

---

## 지원 LLM 백엔드

- vLLM
- llama.cpp
- Ollama
- OpenRouter
- OpenAI

---

## 설치

```bash
# Docker Compose (권장)
docker compose up -d
# → localhost:7000 에서 실행
```

네이티브 설치: Linux, macOS, Apple Silicon, Windows 모두 지원.

---

## 관련 노트

- [[rowboat-local-ai-coworker-knowledge-graph]] — 로컬 AI 코워커 (지식 그래프 기반, 유사한 로컬 AI 워크스페이스 범주)
- [[hermes-workspace-web-ui-native-workspace]] — Hermes Workspace Web UI (AI 에이전트용 통합 인터페이스)
- [[flowise-drag-drop-ai-agent-builder]] — Flowise 노코드 AI 에이전트 빌더 (셀프호스팅 AI 도구 범주)
- [[cocoindex-realtime-incremental-rag-pipeline]] — CocoIndex RAG 파이프라인 (셀프호스팅 AI 인프라 맥락)
