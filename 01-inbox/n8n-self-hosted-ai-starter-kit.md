---
title: "n8n Self-Hosted AI Starter Kit — n8n·Ollama·Qdrant·Postgres로 로컬 AI 워크플로우 환경 구축"
date: 2026-08-08
tags: [dev/self-hosted, ai/workflow, dev/tools]
description: "n8n이 큐레이션한 Docker Compose 템플릿으로 로컬 AI 개발 환경을 빠르게 구축. n8n(400개+ 통합 로우코드 플랫폼)·Ollama(로컬 LLM)·Qdrant(벡터 DB)·PostgreSQL을 한 번에 구성하며 데이터를 외부에 보내지 않고 AI 워크플로우 운영 가능."
source: "https://github.com/n8n-io/self-hosted-ai-starter-kit"
---

# n8n Self-Hosted AI Starter Kit

GitHub: [n8n-io/self-hosted-ai-starter-kit](https://github.com/n8n-io/self-hosted-ai-starter-kit)  
별 15,000 / 라이선스: Apache 2.0

## 포함 스택

| 구성요소 | 역할 |
|---------|------|
| **n8n** | 400개+ 통합 지원 로우코드 자동화 플랫폼 + AI 컴포넌트 |
| **Ollama** | 로컬 LLM 실행 (Llama3.2 등 자동 다운로드) |
| **Qdrant** | 오픈소스 고성능 벡터 데이터베이스 |
| **PostgreSQL** | 대용량 데이터 저장소 |

## 설치

```bash
git clone https://github.com/n8n-io/self-hosted-ai-starter-kit.git
cd self-hosted-ai-starter-kit
cp .env.example .env

# GPU 환경별 실행
docker compose --profile gpu-nvidia up   # Nvidia GPU
docker compose --profile gpu-amd up      # AMD GPU (Linux)
docker compose up                        # Mac M1/Apple Silicon (Ollama 별도 실행)
docker compose --profile cpu up          # CPU 전용
```

브라우저: `http://localhost:5678/`

## 활용 시나리오

- AI 에이전트로 약속 일정 자동화
- **데이터 유출 없이** 회사 내부 PDF 요약
- Slack 봇 고도화
- 민감한 금융 문서 로컬 분석 (저비용)

## 핵심 가치

> 외부 서버로 데이터를 보내지 않고 사내 AI 워크플로우를 운영.

로컬 공유 파일: `/data/shared` 마운트 경로로 n8n에서 파일 접근 가능.
