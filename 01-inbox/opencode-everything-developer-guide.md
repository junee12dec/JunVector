---
title: "OpenCode 완전 개발자 가이드 — 에이전트·스킬·플러그인·MCP 통합 총정리"
date: 2026-08-08
tags: [dev/ai-tools, ai/agent, ai/mcp]
description: "GitHub 별 182K+, 월 800만 사용자의 오픈소스 AI 코딩 에이전트 OpenCode의 에이전트·스킬·커스텀 명령어·플러그인·MCP 통합을 커뮤니티가 정리한 개발자 가이드. 헤드리스·CI 활용법까지 포함."
source: "https://github.com/wesammustafa/OpenCode-Everything-You-Need-to-Know"
---

# OpenCode 완전 개발자 가이드

GitHub: [wesammustafa/OpenCode-Everything-You-Need-to-Know](https://github.com/wesammustafa/OpenCode-Everything-You-Need-to-Know)  
별 366 / 공식 문서: opencode.ai/docs

> OpenCode: 터미널·데스크탑·IDE 확장으로 제공되는 오픈소스 AI 코딩 에이전트  
> 별 182K+ / 월 800만 사용자 / MIT 라이선스

## 설치

```bash
curl -fsSL https://opencode.ai/install | bash
opencode auth login
cd ~/your-project && opencode
```

## 5가지 핵심 구성 요소

### 1. 에이전트 (Agents)

내장: `build`(기본, 전체 도구), `plan`(읽기 전용), `general`, `explore`, `scout`

커스텀: `.opencode/agents/<name>.md`로 정의

```yaml
---
description: 시니어 프론트엔드 엔지니어
mode: primary
model: anthropic/claude-sonnet-5
permission:
  bash:
    "pnpm test*": "allow"
---
```

### 2. 스킬 (Agent Skills)

`.opencode/skills/<name>/SKILL.md` — 모델이 자동으로 발견하는 워크플로우

### 3. 커스텀 명령어 (Commands)

`.opencode/commands/<name>.md` — `/name`으로 호출

```markdown
---
description: 테스트 실행 및 실패 진단
agent: build
---
!pnpm test --reporter=verbose
```

내장: `/init`, `/help`, `/new`, `/models`, `/connect`, `/share`

### 4. 플러그인 (Plugins)

JS/TS로 작성, 생명주기 이벤트에 반응

- `protect-secrets.js` — `.env`, `secrets/` 편집 차단
- `audit-log.js` — 모든 도구 호출을 `.opencode/audit.jsonl`에 기록

⚠️ 플러그인은 사용자 권한으로 실행 — 신뢰할 수 있는 코드만 사용

### 5. MCP 서버

`opencode.json`에 설정:

```json
{
  "mcp": {
    "playwright": {
      "type": "local",
      "command": ["npx", "-y", "@playwright/mcp@latest"]
    }
  }
}
```

가이드 포함: Playwright, Context7, Sentry, Grep by Vercel

## 프로젝트 구조

```
.opencode/
├── agents/      # 커스텀 에이전트 정의
├── commands/    # 슬래시 명령어
├── plugins/     # JS 플러그인
├── skills/      # 에이전트 스킬
└── AGENTS.md    # 프로젝트 가이드라인 (컨벤션·금지 사항)
```

## 기본 워크플로우

```
[plan]  > OAuth 구현 방법 설명해줘     # 읽기 전용 분석
[Tab]                                    # plan ↔ build 전환
[build] > 구현해줘
> @src/api/auth.ts 입력 검증 검토       # 파일 참조
> !pnpm test --reporter=verbose         # 쉘 직접 실행
```

## 헤드리스·CI 활용

```bash
opencode run "최근 5개 커밋 요약"
opencode run --format json "모든 TODO 나열" > todos.json
opencode serve --port 4096              # 헤드리스 서버
opencode github install                 # GitHub Actions 에이전트
```

## 관련 노트

- [[opencode-setup-MOC|사내 OpenCode 셋업 프로젝트]] — 이 가이드를 실제 사내 환경에 적용한 4-Layer 아키텍처
