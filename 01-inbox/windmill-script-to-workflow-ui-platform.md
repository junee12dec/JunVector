---
title: "Windmill — 스크립트를 웹훅·워크플로우·UI로 변환하는 오픈소스 개발자 플랫폼 (16.5k⭐)"
date: 2026-05-15
tags: [dev/tool, productivity/automation, dev/workflow, selfhosted/platform]
description: "Python·TypeScript·Go·Bash 등 8개 언어 스크립트를 바로 웹훅·예약 작업·UI로 변환하는 오픈소스 플랫폼. Retool·Pipedream·Temporal의 자가 호스팅 대안으로 Airflow 대비 13배 빠름."
source: "https://www.threads.com/@burhan_ali313/post/DYiqAplCGZi"
---

# Windmill — 스크립트를 웹훅·워크플로우·UI로 변환하는 오픈소스 개발자 플랫폼

**GitHub**: https://github.com/windmill-labs/windmill  
**⭐ 16.5k stars** / 1,390개 릴리스  
**라이선스**: AGPLv3 / Apache 2.0 (이중)

> "스크립트를 공유 가능한 UI·웹훅·워크플로우로 바꾸는 오픈소스 개발자 플랫폼"

Retool, Pipedream, Temporal의 **오픈소스·자가 호스팅 대안**.

---

## 핵심 기능

- **스크립트 → UI 자동 변환**: 스크립트 작성만 하면 공유 가능한 UI 자동 생성
- **Flow**: 스크립트를 연결·조합해 복잡한 워크플로우 구성
- **저코드 UI 빌더**: 내부 앱을 저코드로 구축
- **다양한 트리거**: 일정(cron), 웹훅, HTTP 경로, Kafka 등

---

## 지원 언어 (8가지)

Python / TypeScript / JavaScript / Go / Bash / SQL / GraphQL / PowerShell  
+ PHP, C#, Java, Ansible, Rust (추가 지원)

---

## 설치

**Docker Compose (가장 간단)**:
```bash
curl https://raw.githubusercontent.com/windmill-labs/windmill/main/docker-compose.yml -o docker-compose.yml
docker compose up -d
```
기본 접속: `http://localhost` (admin@windmill.dev / changeme)

**Kubernetes (Helm)**:
```bash
helm repo add windmill https://windmill-labs.github.io/windmill-helm-charts/
helm install windmill-chart windmill/windmill
```

**외부 DB**: `DATABASE_URL`로 AWS RDS, GCP Cloud SQL 등 연결 가능

---

## 주요 사용 사례

- 내부 API·백그라운드 작업 구축
- 워크플로우 자동화
- 내부 관리 앱 개발
- 데이터 파이프라인 스케줄링

---

## 성능

Airflow 대비 **13배 빠름**

---

## 관련 노트

- [[flowise-drag-drop-ai-agent-builder]] — 드래그 앤 드롭 AI 에이전트 빌더 (비슷한 노코드·자동화 범주)
- [[awesome-selfhosted-picks-60-projects]] — 셀프호스팅 오픈소스 큐레이션 (Windmill과 같은 카테고리)
- [[cocoindex-realtime-incremental-rag-pipeline]] — 데이터 파이프라인 자동화 (유사한 파이프라인 자동화 맥락)
