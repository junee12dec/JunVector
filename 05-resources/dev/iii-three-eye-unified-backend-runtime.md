---
title: "iii (three eye) — API·큐·스케줄러·옵저버빌리티를 하나로 합친 오픈소스 백엔드 런타임 (17k⭐)"
date: 2026-05-29
tags: [dev/backend, dev/tool, selfhosted/platform, productivity/automation]
description: "Function·Trigger·Worker 3개 프리미티브로 API·큐·스케줄러·옵저버빌리티를 통합하는 단일 바이너리 런타임. TypeScript·Python·Rust 지원, CLI 한 줄로 새 도구 추가."
source: "https://github.com/iii-hq/iii"
---

# iii (three eye) — 백엔드 툴링 스택을 하나로 합친 런타임

**GitHub**: https://github.com/iii-hq/iii  
**⭐ 17.2k stars**  
**라이선스**: Engine — Elastic 2.0 / SDK·Console — Apache 2.0  
**발음**: "three eye"

> "Effortlessly compose, extend, and observe every service in real-time for the first time ever"

API + 큐 + 스케줄러 + 옵저버빌리티를 **단일 런타임**으로 통합.

---

## 3개 핵심 프리미티브

| 프리미티브 | 역할 |
|------------|------|
| **Function** | 작업의 단위 |
| **Trigger** | Function을 실행시키는 것 (이벤트·스케줄·HTTP 등) |
| **Worker** | 엔진에 연결되는 프로세스 |

---

## 기존 스택 대비

| 기존 | iii |
|------|-----|
| API 서버 별도 | ✅ 통합 |
| 큐(Redis/RabbitMQ 등) 별도 | ✅ 통합 |
| 스케줄러(cron) 별도 | ✅ 통합 |
| 옵저버빌리티 별도 | ✅ 통합 |

---

## 기술 스택

**Engine**: Rust (핵심 런타임)  
**SDK 지원**: TypeScript(Node.js) / Python / Rust  
**Console**: React + Rust  
**배포**: 단일 바이너리 설치

---

## 시작하기

```bash
iii project init myapp
cd myapp
iii
```

**워커 추가 (CLI 한 줄)**:
```bash
iii worker add <워커명>
```

모든 워커가 라이브 시스템 카탈로그에 등록되어 즉시 호출 가능.  
**AI 에이전트 통합**: 시스템 기능을 에이전트가 자동으로 발견·활용.

---

## 관련 노트

- [[windmill-script-to-workflow-ui-platform]] — 스크립트를 웹훅·워크플로우·UI로 변환하는 플랫폼 (유사한 백엔드 자동화 범주)
- [[cocoindex-realtime-incremental-rag-pipeline]] — 실시간 증분 데이터 파이프라인 (유사한 파이프라인·스케줄링 맥락)
- [[flowise-drag-drop-ai-agent-builder]] — AI 에이전트 빌더 (iii의 에이전트 통합 기능과 연관)
