---
title: "OpenSRE — 프로덕션 인시던트를 자동 조사하는 오픈소스 AI SRE 에이전트"
date: 2026-04-25
tags: [dev/sre, dev/agent, dev/observability]
description: "서버 장애 발생 시 로그·메트릭·트레이스를 자동 수집·분석하고 런북 기반 추론으로 원인을 찾아주는 오픈소스 AI SRE 에이전트 프레임워크. 60+ 도구 통합, 멀티 LLM 지원."
source: "https://github.com/Tracer-Cloud/opensre"
---

# OpenSRE — 프로덕션 인시던트를 자동 조사하는 오픈소스 AI SRE 에이전트

> "새벽 3시, 서버 장애 알림. 이제 AI가 대신 조사합니다."

**GitHub**: https://github.com/Tracer-Cloud/opensre  
**Stars**: 2,100+ · **라이선스**: Apache 2.0

---

## 핵심 기능

| 기능 | 설명 |
|------|------|
| **자동 수집·분석** | 로그·메트릭·트레이스 자동 수집 & 교차 분석 |
| **런북 인식 추론** | 기존 런북(Runbook) 지식을 활용한 추론 엔진 |
| **60+ 도구 통합** | Grafana, Datadog, Kubernetes, AWS 등 |
| **멀티 LLM** | Claude, GPT, Gemini, Ollama 지원 |
| **프라이버시 퍼스트** | 로그 외부 유출 없음 |

## 사용 시나리오

1. 새벽 장애 알림 수신 → OpenSRE가 자동으로 관련 로그·메트릭 수집
2. 런북 기반 추론으로 원인 후보 도출
3. 연결된 모니터링 도구(Grafana, Datadog 등)에서 교차 검증
4. 엔지니어에게 분석 리포트 전달

## 의미

on-call 엔지니어의 새벽 수동 조사를 AI가 대체.  
Langfuse 등 옵저버빌리티 툴과 결합하면 **LLM 앱 장애 대응 자동화**까지 확장 가능.

---

## 링크

- GitHub: https://github.com/Tracer-Cloud/opensre
