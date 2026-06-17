---
title: "DeerFlow 2.0 — ByteDance의 오픈소스 슈퍼 에이전트 (리서치·코딩·제작 자동화, 71k⭐)"
date: 2026-06-15
tags: [ai/agent, dev/framework, ai/llm, selfhosted/platform]
description: "ByteDance가 만든 오픈소스 슈퍼 에이전트 프레임워크. 하위 에이전트·메모리·샌드박스·도구를 통합해 복잡한 리서치·코딩·제작 작업을 끝까지 처리한다. GitHub Trending 1위, MIT 라이선스."
source: "https://github.com/bytedance/deer-flow"
---

# DeerFlow 2.0 — ByteDance의 오픈소스 슈퍼 에이전트

**GitHub**: https://github.com/bytedance/deer-flow  
**⭐ 71.2k stars** / 9.7k forks / MIT 라이선스  
**출처**: ByteDance / GitHub Trending 1위 (2026-02)

> "묻기만 하면 리서치·코딩·제작까지 대신 처리하는 슈퍼 에이전트"

---

## 핵심 아키텍처

### 하위 에이전트 분해
리드 에이전트가 복잡한 작업을 여러 **하위 에이전트**로 분해해 병렬 탐색 후 결과를 통합.

### 격리 샌드박스
각 태스크는 전용 파일시스템을 가진 **격리 환경**에서 실행:
- 로컬 실행
- Docker 컨테이너
- Kubernetes Pod (프로비저너 서비스 경유)

### 지속 메모리
사용자 선호도·워크플로우를 **세션 간 유지**하며 학습. 로컬 제어 방식.

---

## 주요 기능

| 기능 | 내용 |
|------|------|
| Skills Framework | 리서치·보고서·슬라이드 생성·커스텀 워크플로 스킬 |
| Tool Integration | 웹 검색·파일 작업·Bash 실행·MCP 서버 |
| 메시징 연동 | Telegram·Slack·Feishu·WeChat·WeCom·DingTalk |
| 옵저버빌리티 | LangSmith·Langfuse 트레이싱 |
| Claude Code 통합 | Anthropic Claude Code 환경 직접 연동 |

**기반 프레임워크**: LangChain/LangGraph

---

## 설치 (Docker 권장)

```bash
# 권장 사양: 8+ vCPU, 16GB RAM
docker compose up
```

로컬 개발: `make dev`

---

## 보안 주의사항

> 고권한 시스템 명령 실행이 가능하므로, 신뢰할 수 없는 네트워크에 배포 시 인증 게이트웨이·IP 허용 목록·네트워크 격리 필수.

---

## 관련 노트

- [[odysseus-pewdiepie-selfhosted-ai-workspace]] — 셀프호스팅 AI 워크스페이스 (유사한 올인원 에이전트 접근법)
- [[production-ai-agent-architecture-4layers]] — 프로덕션 에이전트 아키텍처 4계층 (DeerFlow의 설계 맥락)
- [[12-factor-agents-production-ai-engineering]] — 프로덕션 AI 에이전트 12원칙 (에이전트 오케스트레이션 원칙)
- [[flowise-drag-drop-ai-agent-builder]] — Flowise 노코드 에이전트 빌더 (셀프호스팅 AI 에이전트 생태계)
- [[moai-adk-claude-code-agent-dev-kit]] — Moai-ADK Claude Code 에이전트 키트 (하네스 엔지니어링 접근법 비교)
