---
title: "Anthropic knowledge-work-plugins — 사무직 AI 비서 플러그인 11종 오픈소스"
date: 2026-10-23
tags: [ai/claude, productivity/automation, strategy/enterprise]
description: "Anthropic이 Claude Cowork용 직군별 플러그인 11종을 오픈소스로 공개. 생산성·영업·PM·법무·재무 등 스킬+슬래시커맨드+MCP 커넥터를 마크다운+JSON으로 제공해 팀 업무 방식에 맞게 커스터마이징 가능."
source: "https://www.threads.com/share/_p_irtP4p/"
---

# Anthropic knowledge-work-plugins — 사무직 AI 비서 11종

GitHub: [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)  
GitHub 별: ⭐ 31,000+

## 수록 직군별 플러그인 (11종)

| 직군 | 플러그인 |
|------|----------|
| 범용 | 생산성 (Productivity) |
| 세일즈 | 영업 (Sales) |
| 서포트 | 고객지원 (Customer Support) |
| 프로덕트 | PM |
| 마케팅 | Marketing |
| 법무 | Legal |
| 재무 | Finance |
| 데이터 | Data |
| 검색 | 엔터프라이즈 검색 (Enterprise Search) |
| 리서치 | 바이오 리서치 (Bio Research) |

## 구성 방식

각 플러그인은 한 묶음:
- **스킬** (Skill)
- **슬래시 커맨드** (Slash Commands)
- **MCP 커넥터** (MCP Connectors)

**파일 형식**: 마크다운 + JSON (코드 없음) → 팀 용어·업무방식대로 수정하기 쉬움.

## 쓸모

Slack·Notion·Jira 등 기존 툴을 연결하면 **Claude가 팀 업무 방식을 그대로 따라 함**.

## data 플러그인 자세히 (2026-11-26 추가)

출처: @starlight_korean (Threads, 2026-11-25, https://www.threads.com/@starlight_korean/post/DgJilZ0H4f4) + 저장소 `data/README.md`. 저장소는 저장 시점 별 약 3만 6,800개, Apache-2.0.

데이터를 조회·시각화·해석하는 플러그인 — SQL 작성, 통계 분석, 대시보드, 공유 전 검증. **Cowork용으로 설계됐고 Claude Code에서도 동작한다**고 README가 밝힌다.

**설치**

```
claude plugin marketplace add anthropics/knowledge-work-plugins
claude plugin install data@knowledge-work-plugins
```

**명령 6개** (설치 후 `/data:write-query`처럼 부른다)

| 명령 | 하는 일 |
|------|---------|
| `/analyze` | 빠른 조회부터 전체 분석까지 데이터 질문에 답함. 예: "이번 달 매출 왜 빠졌지?" → 쿼리를 돌려 원인 요약까지 |
| `/explore-data` | 데이터셋의 모양·품질·패턴 파악. CSV·엑셀을 올리면 결측치·이상치·패턴을 한 번에 훑음 |
| `/write-query` | 쓰는 SQL 방언(BigQuery·Snowflake 등)에 맞춰 모범 사례대로 최적화된 SQL 작성 |
| `/create-viz` | Python으로 보고서용 차트 제작 |
| `/build-dashboard` | 필터와 차트가 있는 인터랙티브 HTML 대시보드 제작 |
| `/validate` | 공유 전 점검: 방법론, 계산 정확성, 편향된 해석 |

**스킬 6개**: sql-queries, data-exploration, data-visualization, statistical-analysis, data-validation, interactive-dashboard-builder

**DB 연결 유무**
- 데이터 웨어하우스 MCP(Snowflake, Databricks, BigQuery 등)가 **있으면**: 직접 조회, 스키마·테이블 메타데이터 탐색, 복사·붙여넣기 없이 끝까지 분석, 결과를 보며 쿼리 개선.
- **없어도** CSV·엑셀 업로드나 SQL 결과 붙여넣기로 분석·시각화가 된다. SQL만 대신 써 주고 직접 돌릴 수도 있다.

글의 설치 가이드는 "댓글에 '데이터'를 남기면 준다"는 형식이라 공개 내용이 없었고, 위 설치 명령은 저장소 README에서 직접 확인했다.

## 관련 노트

볼트에 이미 같은 저장소 관련 노트가 있음 → [[anthropic-knowledge-work-plugins-cowork|Anthropic Knowledge Work Plugins (2026-07-22)]]  
이 노트는 11종 구성 및 커스터마이징 관점의 업데이트 기록.
