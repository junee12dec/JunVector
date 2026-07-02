---
title: "Architecture Diagram Generator — 아키텍처 다이어그램을 HTML/SVG로 자동 생성하는 Claude 스킬 (5.2k⭐)"
date: 2026-05-22
tags: [ai/claude, dev/tool, agent/skill, design/diagram]
description: "텍스트 설명만으로 다크 테마 시스템 아키텍처 다이어그램을 독립형 HTML/SVG 파일로 생성하는 Claude AI 스킬. Hermes에서는 /architecture-diagram 프롬프트로도 사용 가능."
source: "https://github.com/Cocoon-AI/architecture-diagram-generator"
---

# Architecture Diagram Generator — 아키텍처 다이어그램 자동 생성 Claude 스킬

**GitHub**: https://github.com/Cocoon-AI/architecture-diagram-generator  
**⭐ 5.2k stars** / 391 forks  
**라이선스**: MIT / v1.1

> "Generate beautiful dark-themed system architecture diagrams as standalone HTML/SVG files. Works as a Claude AI skill."

텍스트 설명 → 다크 테마 아키텍처 다이어그램 (HTML/SVG) 자동 생성.  
**Hermes**에서는 스킬 설치 후 `/architecture-diagram` 프롬프트로도 사용 가능.

---

## 핵심 기능

| 기능 | 설명 |
|------|------|
| **AI 기반 생성** | 텍스트 설명만으로 다이어그램 자동 생성 |
| **독립형 출력** | 단일 HTML 파일 — 어떤 브라우저에서도 열림 |
| **다크 테마** | Slate-950 배경 + 서브틀 그리드 패턴 |
| **의미론적 색상** | 컴포넌트 유형별 일관된 색상 체계 |
| **자동 내보내기** | 복사·PNG·PDF 내장 |

---

## 설치 (Claude.ai 스킬)

1. `architecture-diagram.zip` 다운로드
2. claude.ai → **Customize** → **Skills** 접속
3. **+ Create skill** → **Upload a skill** 선택
4. 스킬 활성화

> 사전 조건: **Code Execution** 활성화 필요

---

## 사용법

```
Use your architecture diagram skill to create an architecture diagram from this description:
[아키텍처 설명]
```

**Hermes 사용 시**:
```
/architecture-diagram [설명]
```

---

## 지원 다이어그램 예시

- **웹 애플리케이션**: React + Node.js + PostgreSQL
- **AWS 서버리스**: Lambda + API Gateway + DynamoDB
- **마이크로서비스**: Kubernetes + API Gateway

---

## 관련 노트

- [[hermes-workspace-web-ui-native-workspace]] — Hermes Web UI (/architecture-diagram 프롬프트 실행 환경)
- [[hermes-desktop-electron-app-github-actions]] — Hermes 데스크톱 앱 (같은 Hermes 생태계)
- [[awesome-agent-skills-largest-curated-library]] — 에이전트 스킬 큐레이션 라이브러리
- [[claude-codebase-architecture-html-json-prompt]] — Claude로 코드베이스 아키텍처 매핑하는 프롬프트 (유사한 아키텍처 시각화 맥락)
