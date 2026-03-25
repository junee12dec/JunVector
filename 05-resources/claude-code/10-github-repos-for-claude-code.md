---
title: "Claude Code 프로젝트를 10배 향상시키는 GitHub 레포 10개"
date: 2026-03-25
tags: [ai/claude, dev/tools, productivity/automation]
description: "Claude Code와 함께 사용할 수 있는 필수 GitHub 레포 10개. 스킬 자동화, 멀티 에이전트, MCP 서버, 메모리 등 다양한 영역을 커버한다."
source: "https://www.threads.net/@chase.h.ai"
---

# Claude Code 프로젝트를 10배 향상시키는 GitHub 레포 10개

by chase.h.ai

## 1. Superpowers — `github.com/obra/superpowers`

⭐ 28K+

Claude Code 세션마다 브레인스토밍, 계획, TDD, 코드 리뷰를 자동 적용. 설정 없이 바로 작동.

## 2. n8n-MCP — `github.com/czlonkowski/n8n-mcp`

Claude Code에 n8n 노드 1,084개에 대한 깊은 지식을 부여. 추측이 아닌 프로덕션 수준의 워크플로우를 생성.

## 3. Everything Claude Code — `github.com/affaan-m/everything-claude-code`

⭐ 36K+

Anthropic 해커톤 우승작. 에이전트 9개, 스킬 11개, 커맨드 11개, 훅 10개, 토큰 최적화, 보안 스캐너 포함.

```
/plugin marketplace add affaan-m/everything-claude-code
```

## 4. Context7 — `github.com/upstash/context7`

⭐ 30K+

수천 개의 라이브러리에서 현재 버전별 공식 문서를 프롬프트에 자동 주입. API 환각(hallucination) 방지.

```bash
claude mcp add context7 -- npx -y @upstash/context7-mcp@latest
```

## 5. Obsidian Skills — `github.com/kepano/obsidian-skills`

⭐ 7K+

Obsidian CEO가 제작. Claude Code로 옵시디언 볼트를 AI 기반 세컨드 브레인으로 만들고 관리할 수 있게 해줌.

## 6. Repomix — `github.com/yamadashy/repomix`

⭐ 20K+

전체 코드베이스를 AI 친화적 파일 하나로 압축. 토큰 카운팅, tree-sitter 압축, Claude Code 플러그인 지원.

```bash
npx repomix
```

## 7. GSD (Get Shit Done) — `github.com/glittercowboy/get-shit-done`

인터뷰 방식으로 스펙을 빌드한 후, 단계별로 검증하며 실행.

```bash
npx get-shit-done-cc
```

## 8. Claude Mem — `github.com/thedotmack/claude-mem`

⭐ 20K+ (2일 만에 달성)

세션마다 Claude가 한 모든 것을 캡처하고, 다음 세션에 관련 컨텍스트를 자동 주입. Claude Code의 영구 메모리.

## 9. UI/UX Pro Max Skill — `github.com/nextlevelbuilder/ui-ux-pro-max-skill`

⭐ 16K+

UI 스타일 50+, 컬러 팔레트 97개, 9개 기술 스택에 걸쳐 폰트 페어링 57가지. 디자인 시스템을 자동 생성해서 앱이 AI 슬롭처럼 보이지 않게 함.

## 10. Awesome Claude Code — `github.com/hesreallyhim/awesome-claude-code`

⭐ 20K+

Claude Code의 모든 스킬, 플러그인, 훅, 도구의 마스터 디렉토리.
