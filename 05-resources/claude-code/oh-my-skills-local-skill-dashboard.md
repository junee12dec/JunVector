---
title: "oh-my-skills — Codex·Claude Code 설치 스킬을 한눈에 관리하는 로컬 대시보드"
date: 2026-05-28
tags: [ai/claude, agent/skill, dev/tool, productivity/automation]
description: "설치한 AI 스킬이 너무 많아 뭘 깔았는지 모를 때 쓰는 로컬 스킬 관리 대시보드. Codex·Claude Code·Agent Skills를 스캔해 검색·중복 감지·편집까지 한 화면에서 처리."
source: "https://github.com/AIjunja/oh-my-skills"
---

# oh-my-skills — AI 스킬을 관리하는 로컬 대시보드

**GitHub**: https://github.com/AIjunja/oh-my-skills  
**⭐ 6 stars** (뉴비 오픈소스) / MIT 라이선스

> "AI 스킬을 너무 많이 깔아놓고 내가 뭘 설치했는지도 까먹어서 만들었습니다."

---

## 스캔 대상 경로

| 플랫폼 | 경로 |
|--------|------|
| Claude Code | `~/.claude/skills` |
| Codex | `~/.codex/skills` |
| Agent Skills | `~/.agents/skills` |
| 플러그인 캐시 | `~/.codex/plugins/cache` |

---

## 주요 기능

- **브라우저 GUI**: 로컬에서 스킬 검색·필터·편집
- **중복 스킬 감지**: 중복 설치된 스킬 자동 탐지
- **SKILL.md 바로 확인·수정**
- **CLI 내보내기**: Markdown/JSON 인벤토리 내보내기
- **백업·아카이빙**: 안전한 편집 및 정리
- **로컬 퍼스트**: 클라우드 의존 없음
- **한국어 지원** / 밝기 테마 전환

---

## 설치 및 실행

```bash
# 방법 1 — git clone
git clone https://github.com/AIjunja/oh-my-skills.git
cd oh-my-skills
python -m skill_ledger gui

# 방법 2 — pipx
pipx install git+https://github.com/AIjunja/oh-my-skills.git
oh-my-skills gui
```

**Claude Code / Codex에서 설치**:
1. GitHub 링크를 Claude Code / Codex에 던진다
2. "이 스킬 설치해줘"
3. "oh-my-skills로 내 스킬 대시보드 열어줘"
4. 끝

---

## 관련 노트

- [[awesome-agent-skills-largest-curated-library]] — 1000+ 에이전트 스킬 라이브러리 (oh-my-skills로 관리할 수 있는 스킬들의 출처)
- [[claude-24-installs-plugins-skills-mcp-curated]] — Claude 24가지 설치 목록 (설치 후 oh-my-skills로 관리)
- [[prompt-engineering-skills-multi-platform]] — 멀티 플랫폼 스킬 모음 (설치 후 oh-my-skills로 관리)
