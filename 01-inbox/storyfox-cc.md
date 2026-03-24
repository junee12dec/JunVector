---
title: "Claude Code Cheat Sheet v2.1.81"
date: 2026-03-24
tags: [ai/claude, dev/cli, productivity/reference]
description: "Claude Code v2.1.81 전체 치트시트. 키보드 단축키, 슬래시 커맨드, 워크플로우, MCP 서버, 스킬/에이전트, CLI 플래그를 한 페이지에 정리한 레퍼런스."
source: "https://cc.storyfox.cz"
---

# Claude Code Cheat Sheet v2.1.81

> Last updated: March 23, 2026

## 최근 변경 사항

- `--bare` 플래그 추가 — 최소 헤드리스 모드 (hooks/LSP/플러그인 없음)
- `--channels` — 퍼미션 릴레이 & MCP 푸시 메시지 (프리뷰)
- `effort` 프론트매터 — 스킬 및 슬래시 커맨드에 적용
- `/fork` → `/branch`로 이름 변경 (alias 유지)
- `SendMessage` — auto-resumes 중지된 에이전트

---

## ⌨️ 키보드 단축키

### General Controls

| 단축키 | 동작 |
|--------|------|
| `C` | 입력/생성 취소 |
| `D` | 세션 종료 |
| `L` | 화면 지우기 |
| `O` | verbose 출력 토글 |
| `R` | 검색 기록 역방향 탐색 |
| `G` | 에디터에서 프롬프트 열기 |
| `B` | 백그라운드 작업 실행 |
| `T` | 작업 목록 토글 |
| `V` | 이미지 붙여넣기 |
| `F` | 백그라운드 에이전트 종료 (×2) |
| `Esc` / `Esc` | 되감기 / 실행 취소 |

### Mode Switching

| 단축키 | 동작 |
|--------|------|
| `Tab` | 퍼미션 모드 순환 |
| `P` | 모델 전환 |
| `T` | 생각(thinking) 토글 |

### Input

| 단축키 | 동작 |
|--------|------|
| `\ Enter` | 줄바꿈 (빠른 방법) |
| `J` | 줄바꿈 (control seq) |

### Prefixes

- `/` 슬래시 커맨드
- `!` 직접 bash
- `@` 파일 멘션 + 자동완성

### Session Picker

- `↑↓` 탐색
- `←→` 펼치기/접기
- `P` 미리보기
- `R` 이름 변경
- `/` 검색
- `A` 모든 프로젝트
- `B` 현재 브랜치

---

## 🔧 슬래시 커맨드

### Session

| 커맨드 | 설명 |
|--------|------|
| `/clear` | 대화 초기화 |
| `/compact [focus]` | 컨텍스트 압축 |
| `/resume` | 세션 재개/전환 |
| `/rename [name]` | 현재 세션 이름 변경 |
| `/branch [name]` | 브랜치 대화 (/fork alias) |
| `/cost` | 토큰 사용량 통계 |
| `/context` | 컨텍스트 시각화 (grid) |
| `/diff` | 인터랙티브 diff 뷰어 |
| `/copy` | 마지막 응답 복사 |
| `/export` | 대화 내보내기 |

### Config

| 커맨드 | 설명 |
|--------|------|
| `/config` | 설정 열기 |
| `/model [model]` | 모델 전환 (↔ effort) |
| `/fast [on\|off]` | 패스트 모드 토글 |
| `/vim` | vim 모드 토글 |
| `/theme` | 색상 테마 변경 |
| `/permissions` | 퍼미션 보기/업데이트 |
| `/effort [level]` | 노력 수준 설정 (low/med/high) |
| `/color [color]` | 프롬프트 바 색상 설정 |

### Tools

| 커맨드 | 설명 |
|--------|------|
| `/init` | CLAUDE.md 생성 |
| `/memory` | CLAUDE.md 파일 편집 |
| `/mcp` | MCP 서버 관리 |
| `/hooks` | hooks 관리 |
| `/skills` | 사용 가능한 스킬 목록 |
| `/agents` | 에이전트 관리 |
| `/chrome` | Chrome 통합 |
| `/reload-plugins` | 플러그인 다시 로드 |

### Special

| 커맨드 | 설명 |
|--------|------|
| `/btw <question>` | 사이드 질문 (컨텍스트 없음) |
| `/plan [desc]` | 플랜 모드 (+ auto-start) |
| `/loop [interval]` | 반복 스케줄 작업 |
| `/voice` | 음성-to-텍스트 (20개 언어) |
| `/doctor` | 설치 진단 |
| `/rc` | 원격 제어 활성화 |
| `/pr-comments [PR]` | GitHub PR 코멘트 가져오기 |
| `/stats` | 사용량 통계 및 선호도 |
| `/insights` | 세션 보고서 분석 |
| `/desktop` | Desktop 앱에서 계속 |
| `/remote-control` | 브라우저 터미널 → claude.ai/code 연결 |
| `/stickers` | 스티커 주문 🎉 |

---

## 🔄 워크플로우 & 팁

### Plan Mode

- `Tab` Normal → Auto → Plan
- `--permission-mode plan` 플랜 모드로 시작

### Thinking & Effort

- `T` thinking 토글
- `"ultrathink"` 현재 턴에 최대 노력
- `0` 생각 내용 보기 (verbose)

### Git Worktrees

| 옵션 | 설명 |
|------|------|
| `--worktree name` | 기능별 독립 브랜치 |
| `isolation: worktree` | 에이전트 전용 worktree |
| `sparsePaths` | 필요한 디렉토리만 체크아웃 |
| `/batch` | worktree 자동 생성 |

### Voice Mode

- `/voice` — push-to-talk 활성화
- `Space (hold)` — 녹음, 전송

### Context Management

- `/context` — 사용량 + 최적화 팁
- `/compact [focus]` — 포커스 압축
- Auto-compact ~95% 용량
- 1M context (Opus 4.6 Max/Team/Ent)
- CLAUDE.md는 압축 후에도 유지

### Session Power Moves

| 커맨드 | 설명 |
|--------|------|
| `claude -c` | 마지막 대화 계속 |
| `claude -r "name"` | 이름으로 세션 재개 |
| `/btw question` | 컨텍스트 없는 사이드 Q |

### SDK / Headless

| 옵션 | 설명 |
|------|------|
| `claude -p "query"` | 비대화형 |
| `--output-format json` | 구조화 출력 |
| `--max-budget-usd 5` | 비용 상한 |
| `cat file \| claude -p` | 파이프 입력 |

### Scheduling & Remote

- `/loop 5m msg` — 반복 작업
- `/rc` — 원격 제어
- `--remote` — claude.ai 웹 세션

---

## 🛠️ 스킬 & 에이전트

### Built-in Skills

| 스킬 | 설명 |
|------|------|
| `/simplify` | 코드 리뷰 (3 병렬 에이전트) |
| `/batch` | 대규모 변경 (5-30 worktrees) |
| `/debug [desc]` | debug log로 문제 해결 |
| `/loop [interval]` | 반복 스케줄 작업 |
| `/claude-api` | Load API + SDK 레퍼런스 |

### Custom Skill Locations

- `.claude/skills/<name>/` — 프로젝트 스킬
- `~/.claude/skills/<name>/` — 개인 스킬

### Skill Frontmatter

```yaml
description: # 자동 호출 트리거
allowed-tools: # 퍼미션 프롬프트 건너뜀
model: # 스킬용 모델 지정
effort: # 노력 수준 재정의
context: fork # 서브에이전트에서 실행
$ARGUMENTS: # 사용자 입력 자리표시자
${CLAUDE_SKILL_DIR}: # 스킬 자체 디렉토리
`cmd`: # 동적 컨텍스트 주입
```

### Built-in Agents

| 에이전트 | 설명 |
|----------|------|
| `Explore` | 빠른 읽기 전용 (Haiku) |
| `Plan` | 플랜 모드 연구 |
| `General` | 전체 도구, 복잡한 작업 |
| `Bash` | 별도 터미널 컨텍스트 |

### Agent Frontmatter

```yaml
permissionMode: default/acceptEdits/dontAsk/plan
isolation: worktree  # git worktree에서 실행
memory: user|project  # 지속적 메모리
background: true  # 백그라운드 작업
maxTurns: # 에이전트 최대 턴 수
SendMessage: # 에이전트 재개 (resume 대체)
```

---

## 🔌 MCP 서버

### Add Servers

- `--transport http` — 원격 HTTP (권장)
- `--transport stdio` — 로컬 프로세스
- `--transport sse` — 원격 SSE

### Scopes

- `Local` ~/.claude.json (프로젝트 별)
- `Project` .mcp.json (공유/VCS)
- `User` ~/.claude.json (전역)

### Manage

- `/mcp` — 인터랙티브 UI
- `claude mcp list` — 모든 서버 목록
- `claude mcp serve` — CC를 MCP 서버로
- `Elicitation` — 작업 중 서버가 입력 요청

---

## 🧠 메모리 & 파일

### CLAUDE.md 위치

| 경로 | 범위 |
|------|------|
| `./CLAUDE.md` | 프로젝트 (팀 공유) |
| `~/.claude/CLAUDE.md` | 개인 (전체 프로젝트) |
| `/etc/claude-code` | 관리형 (조직 전체) |

### Rules & Import

- `.claude/rules/*.md` — 프로젝트 규칙
- `~/.claude/rules/*.md` — 사용자 규칙
- `paths:` frontmatter — 경로별 규칙
- `@path/to/file` — CLAUDE.md에 임포트

### Auto Memory

`~/.claude/projects/<proj>/memory/`
MEMORY.md + 주제 파일, 자동 로드

---

## ⚙️ Config & Env

### Config Files

| 파일 | 용도 |
|------|------|
| `~/.claude/settings.json` | 사용자 설정 |
| `.claude/settings.json` | 프로젝트 (공유) |
| `.claude/settings.local.json` | 로컬 전용 |
| `~/.claude.json` | OAuth, MCP 상태 |
| `.mcp.json` | 프로젝트 MCP 서버 |

### Key Settings

| 설정 | 설명 |
|------|------|
| `modelOverrides` | 모델 선택기 → 커스텀 ID 매핑 |
| `autoMemoryDirectory` | 커스텀 메모리 디렉토리 |
| `worktree.sparsePaths` | Sparse checkout 디렉토리 |

### Key Env Vars

| 변수 | 설명 |
|------|------|
| `ANTHROPIC_API_KEY` | API 키 |
| `ANTHROPIC_MODEL` | 기본 모델 |
| `CLAUDE_CODE_EFFORT_LEVEL` | low/med/high |
| `MAX_THINKING_TOKENS` | 0=off |
| `ANTHROPIC_CUSTOM_MODEL_OPTION` | 커스텀 /model 항목 |
| `CLAUDE_CODE_PLUGIN_SEED_DIR` | 다중 플러그인 seed 디렉토리 |

---

## 🖥️ CLI & Flags

### Core Commands

```bash
claude              # 인터랙티브
claude "q"          # 프롬프트 포함
claude -p "q"       # 헤드리스
claude -c           # 마지막 대화 계속
claude -r "n"       # n으로 재개
claude update       # 업데이트
```

### Key Flags

| 플래그 | 설명 |
|--------|------|
| `--model` | 모델 설정 |
| `-w` | Git worktree |
| `-n / --name` | 세션 이름 |
| `--add-dir` | 디렉토리 추가 |
| `--agent` | 에이전트 사용 |
| `--allowedTools` | 사전 승인 도구 |
| `--output-format` | json/stream |
| `--json-schema` | 구조화 |
| `--max-turns` | 턴 수 제한 |
| `--max-budget-usd` | 비용 상한 |
| `--console` | Anthropic Console 인증 |
| `--verbose` | Verbose 출력 |
| `--bare` | 최소 헤드리스 (hooks/LSP 없음) |
| `--channels` | 퍼미션 릴레이 / MCP push |
| `--remote` | 웹 세션 |
| `--chrome` | Chrome |

---

## 퍼미션 모드

| 모드 | 설명 |
|------|------|
| `default` | 프롬프트 |
| `acceptEdits` | 편집 자동 수락 |
| `plan` | 읽기 전용 |
| `dontAsk` | 허용 거부 없음 |
| `bypassPermissions` | 모두 건너뜀 |

---

## 핵심 환경 변수 (빠른 참조)

```
ANTHROPIC_API_KEY  |  ANTHROPIC_MODEL  |  CLAUDE_CODE_EFFORT_LEVEL (low/med/high)
MAX_THINKING_TOKENS (0=off)  |  CLAUDE_CODE_MAX_OUTPUT_TOKENS (def 32K)
CLAUDE_CODE_DISABLE_CRON
```
