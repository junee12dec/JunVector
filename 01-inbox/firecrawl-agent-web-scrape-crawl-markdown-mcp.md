---
title: "Firecrawl — 웹사이트를 깨끗한 마크다운으로 바꿔 에이전트에 먹이는 검색·스크레이핑·크롤링 도구 (로컬 바이너리 + MCP)"
date: 2026-11-19
tags: [ai/tools, dev/automation, ai/mcp]
description: "검색·스크레이핑·크롤링·맵핑을 하나의 API로 제공하는 에이전트용 웹 데이터 도구. 로컬 바이너리 하나로 내 컴퓨터에서 웹페이지를 마크다운으로 바꾸고, init 명령 하나로 Claude Code·Cursor·Codex에 MCP 서버로 붙는다."
source: "https://www.threads.com/@ai.mogoo/post/Df8GYftj3A9"
---

# Firecrawl — 웹을 에이전트가 읽는 마크다운으로

- 저장소: https://github.com/firecrawl/firecrawl (AGPL-3.0, 저장 시점 약 20만 4천⭐, 기여자 179명, 포크 1만 1천)
- 사이트: https://firecrawl.dev
- 소개 글: @ai.mogoo (Threads, 2026-11-19) — "에이전트에 최신 웹 정보를 먹이고 싶다면 직접 크롤러를 짤 필요가 없어진다."
- 자기 소개: "에이전트를 더 똑똑하게 만드는 지식 인프라. 검색, 스크레이핑, 550개 이상의 데이터 제공자를 하나의 API로."

## 쓰는 방법 세 가지

| 방식 | 내용 |
|------|------|
| **Firecrawl Local** | 내 컴퓨터에서 바이너리 하나로. DB·큐·컨테이너 없이 스크레이프·크롤·맵. MCP 서버로 붙고 localhost에서 Firecrawl API도 제공 |
| **Firecrawl Cloud** | firecrawl.dev 호스팅. Local의 기능 + 검색, 데이터 제공자 550+, 구조화 JSON, 스크린샷, 브라우저 동작 |
| **셀프호스팅** | `apps/api`의 전체 서버를 큐·워커·DB와 함께 내 인프라에 배포 |

## Firecrawl Local

설치 (Rust 필요):

```bash
cargo install firecrawl-local
```

Rust가 없으면 Cloud로 같은 일을 가입 없이: `npx -y firecrawl-cli@latest scrape https://firecrawl.dev`

```bash
firecrawl-local scrape https://firecrawl.dev --markdown          # 한 페이지를 마크다운으로
firecrawl-local crawl https://docs.firecrawl.dev --limit 50 --out ./pages   # 사이트를 페이지별 md 파일로
firecrawl-local map https://firecrawl.dev                        # 사이트의 모든 URL 목록
```

- JavaScript가 필요한 페이지는 내 컴퓨터의 Chrome·Chromium으로 렌더링한다. **PDF와 Office 문서도 로컬에서 파싱**한다.
- 로컬에서 안 열리는 한 페이지 스크레이프는 기본적으로 Cloud가 대신 가져오고 결과에 `"source": "firecrawl-cloud"`로 표시된다.

**에이전트에 붙이기**

```bash
firecrawl-local init
```

Claude Code, Claude Desktop, Cursor, Windsurf, Gemini CLI, Codex를 찾아 각각에 MCP 서버로 추가한다 (설정 파일은 먼저 백업). 스크레이프·크롤·맵·일괄 스크레이프는 내 컴퓨터에서, 나머지 도구는 Cloud로 간다.

**localhost API**: `firecrawl-local serve` → 포트 3002에서 Firecrawl v2 API를 그대로 제공하므로, Firecrawl SDK 코드를 `api_url="http://localhost:3002"`로만 바꿔 키 없이 쓸 수 있다.

## 어디서 무엇이 되나

| 기능 | Local | Cloud |
|------|-------|-------|
| 스크레이프 | 마크다운, HTML, 링크 | + 구조화 JSON, 요약, 스크린샷, 브라우저 동작 |
| 크롤·맵·일괄 스크레이프 | ✅ | ✅ |
| PDF·Office 문서 | ✅ | ✅ + 업로드 파일 파싱 |
| 검색 | Cloud 경유 (계정 불필요) | ✅ |
| Interact·Agent·Monitor | | ✅ |

## Firecrawl Cloud (README의 주장)

- JS가 많은 페이지와 동적 앱을 포함해 웹의 96%를 커버
- 수백만 페이지 기준 P95 지연 3.4초
- **Firecrawl Keyless**: API 키나 가입 없이 MCP·CLI·API에서 월 1,000 크레딧 무료

## 참고

- 라이선스가 AGPL-3.0이라, 고쳐서 서비스로 공개하면 소스 공개 의무가 생긴다.
- 볼트의 [[10-claude-mcp-skills-workflow-upgrade|Claude MCP 스킬 10가지]] 노트에 "Firecrawl Scraper"로 한 섹션 소개돼 있다.
