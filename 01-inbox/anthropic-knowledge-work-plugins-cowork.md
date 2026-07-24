---
title: "Anthropic Knowledge Work Plugins — Claude를 직무 전문가로 만드는 공식 플러그인 모음"
date: 2026-07-22
tags: [ai/claude, ai/coding-agent, productivity/automation]
description: "Anthropic이 공개한 Claude Cowork용 직무별 플러그인 11종. 엔지니어링·영업·PM·데이터·법무 등 각 역할에 맞는 슬래시 커맨드·스킬·도구 연결을 한 번에 구성한다."
source: "https://github.com/anthropics/knowledge-work-plugins"
---

# Anthropic Knowledge Work Plugins — Claude를 직무 전문가로 만드는 공식 플러그인 모음

GitHub: [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) ⭐ 23k

## 개념

Claude에게 **회사 도구·업무 프로세스·슬래시 커맨드·도메인 지식**을 한 번에 주입해 특정 직무 전문가처럼 동작하게 만드는 플러그인 모음.

각 플러그인 구조:
```
plugin-name/
├── .claude-plugin/plugin.json  # 플러그인 매니페스트
├── .mcp.json                   # 외부 도구 연결 설정
├── commands/                   # 슬래시 커맨드
└── skills/                     # 도메인 지식
```

## 11개 공식 플러그인

| 플러그인 | 역할 | 주요 연결 도구 |
|---------|------|--------------|
| **engineering** | 코드 리뷰, 버그 추적, 배포 체크리스트 | Slack, GitHub, Jira, Linear |
| **data** | SQL 쿼리, 통계 분석, 대시보드 생성 | Snowflake, BigQuery, Hex |
| **product-management** | 스펙 작성, 로드맵, 스프린트 계획 | Linear, Figma, Amplitude |
| **sales** | 고객 조사, 콜 준비, 파이프라인 검토 | HubSpot, Clay, ZoomInfo |
| **customer-support** | 티켓 분류, 응답 작성, 에스컬레이션 | Intercom, Guru, Jira |
| **marketing** | 콘텐츠 작성, 캠페인 계획, 성과 분석 | Canva, Figma, Ahrefs |
| **legal** | 계약 검토, 규정 준수, NDA 분류 | Box, MS 365 |
| **finance** | 재무제표, 계정 조정, 감사 지원 | Snowflake, BigQuery |
| **enterprise-search** | 이메일·채팅·문서 통합 검색 | Slack, Notion, Jira |
| **bio-research** | 문헌 검색, 유전체학 | PubMed, ChEMBL, Benchling |
| **cowork-plugin-management** | 새 플러그인 생성·커스터마이징 | — |

## 설치

```bash
# Claude Cowork 마켓플레이스
claude.com/plugins

# Claude Code CLI
claude plugin install engineering@knowledge-work-plugins
```

## 커스터마이징 포인트

1. `.mcp.json` 수정 → 실제 회사 도구 연결
2. `skills/` 수정 → 회사 용어·조직 구조 반영
3. `commands/` 수정 → 팀 워크플로우에 맞춤
