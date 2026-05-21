---
title: "Prompt Engineering Skills — Claude Code·GPTs·Gemini Gems 공용 프롬프트 엔지니어링 스킬 모음"
date: 2026-05-15
tags: [ai/claude, productivity/prompt, ai/llm, agent/skill]
description: "Claude Code, ChatGPT GPTs, Gemini Gems에서 함께 쓸 수 있는 프롬프트 엔지니어링 스킬 8개 영역. 모델별 전략·이미지·리서치·슬라이드·Context Engineering을 단일 통합본 또는 분할 가이드로 설치."
source: "https://github.com/treylom/prompt-engineering-skills"
---

# Prompt Engineering Skills — 멀티 플랫폼 프롬프트 엔지니어링 스킬 모음

**GitHub**: https://github.com/treylom/prompt-engineering-skills  
**⭐ 96 stars** / 20 forks  
**라이선스**: MIT

Claude Code, ChatGPT GPTs, Gemini Gems에서 **함께 쓰는** 프롬프트 엔지니어링 스킬.  
단일 통합본(`prompt-engineering-guide.md`) 또는 영역별 분할 가이드로 설치 가능.

---

## 8개 스킬 영역

| 영역 | 파일 | 핵심 내용 |
|------|------|-----------|
| GPT 5.x | `gpt-5.5-prompt-enhancement.md` | Outcome-first 패턴, GPT-5.4 XML 패턴 |
| Claude 4.x | `claude-4.7-prompt-strategies.md` | Claude Opus 4.7/4.6 전략 |
| Gemini/Veo | `gemini-3.1-prompt-strategies.md` | Gemini 3.1, Veo 3.1 전략 |
| 이미지 프롬프트 | `image-prompt-guide.md` | gpt-image-2 포함 이미지 생성 가이드 |
| 리서치·팩트체크 | `research-prompt-guide.md` | 리서치 및 팩트체크 프롬프트 |
| 슬라이드·PPT | `slide-prompt-guide.md` | 슬라이드 생성 가이드 |
| 전문가 프라이밍 | `expert-domain-priming.md` | Expert Domain Priming 기법 |
| Context Engineering | `context-engineering-collection.md` | Context Engineering 원칙 컬렉션 |

---

## 설치

### Claude Code — 통합본만 (빠른 설치)

```bash
git clone https://github.com/treylom/prompt-engineering-skills.git /tmp/pes
mkdir -p ~/.claude/skills ~/.claude/commands
cp /tmp/pes/skills/prompt-engineering-guide.md ~/.claude/skills/
cp /tmp/pes/commands/*.md ~/.claude/commands/
```

### Claude Code — 전체 설치

통합본 + 분할 가이드 + Skills 2.0 분할 모듈 + instructions 모두 설치.  
(상세 명령어는 저장소 README 참조)

### GPTs / Gemini Gems

- **단순**: `prompt-engineering-guide.md` 1개만 업로드
- **분할**: 필요한 가이드 다수 업로드 (GPTs는 10개 파일 한도)

---

## 구조 (Skills 2.0)

```
skills/
  prompt-engineering-guide.md    ← 통합본 (단일 권원)
  prompt-engineering-guide/      ← 분할 모듈 (frontmatter + references)
  prompt-variation-guide/
commands/
instructions/
examples/
```

---

## 사용자 유형별 권장

| 유형 | 권장 |
|------|------|
| 신규 | 통합본 1개 |
| 고급 | Skills 2.0 분할 모듈 |
| GPTs | 한도(10개) 고려해 선택 |

---

## 관련 노트

- [[awesome-agent-skills-largest-curated-library]] — 1000+ 에이전트 스킬 라이브러리 (더 넓은 스킬 생태계)
- [[gstack-superpowers-ai-dev-workflow-6steps]] — Claude Code 플러그인 스킬 조합 워크플로우
- [[claude-code-4-plugins-superpowers-gstack-omc-gsd]] — Claude Code 스킬 생태계 관련 플러그인
