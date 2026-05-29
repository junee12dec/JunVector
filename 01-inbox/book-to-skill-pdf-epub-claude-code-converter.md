---
title: "Book-to-SKILL — 기술서적 PDF·EPUB을 Claude Code 스킬로 자동 변환하는 오픈소스 (2.3k⭐)"
date: 2026-05-28
tags: [ai/claude, agent/skill, productivity/pkm, dev/tool]
description: "PDF·EPUB 등 기술 문서를 Claude Code 스킬 포맷으로 자동 변환하는 오픈소스 도구. 책에서 프레임워크·원칙·안티패턴을 추출해 구조화된 스킬로 만들어 작업 중 참조 가능."
source: "https://github.com/virgiliojr94/book-to-skill"
---

# Book-to-SKILL — 기술서적 PDF·EPUB을 Claude Code 스킬로 자동 변환

**GitHub**: https://github.com/virgiliojr94/book-to-skill  
**⭐ 2.3k stars** / MIT 라이선스

> "Turn any technical book PDF into a Claude Code skill — ready to study, reference, and use while you work."

---

## 핵심 아이디어

PDF를 통째로 컨텍스트에 밀어넣는 대신, **한 번 깊이 분석해서 스킬로 컴파일**해둔다.  
이후 질문에 관련된 챕터만 로드 → **토큰 절약 + 즉시 참조 가능**.

---

## 지원 포맷 (9가지)

PDF / EPUB / DOCX / TXT / Markdown / reStructuredText / AsciiDoc / HTML / RTF / MOBI·AZW

---

## 설치

```bash
# 수동 설치
mkdir -p ~/.claude/skills/book-to-skill/scripts
curl -o ~/.claude/skills/book-to-skill/SKILL.md \
  https://raw.githubusercontent.com/virgiliojr94/book-to-skill/master/SKILL.md
curl -o ~/.claude/skills/book-to-skill/scripts/extract.py \
  https://raw.githubusercontent.com/virgiliojr94/book-to-skill/master/scripts/extract.py
```

---

## 사용법

```
# 기본
/book-to-skill ~/Downloads/designing-data-intensive-applications.pdf

# 이름 지정
/book-to-skill ~/books/clean-code.epub clean-code
```

**생성된 스킬 활용**:

```
/designing-data-intensive-apps           # 핵심 개념 로드
/designing-data-intensive-apps replication  # 특정 주제 검색
/designing-data-intensive-apps ch05      # 5장 열기
```

---

## 추출 내용

- 저자의 실제 프레임워크·모델명
- 각 기법의 적용 시점
- 안티패턴 목록
- 챕터별 구조화 요약

---

## 관련 노트

- [[awesome-agent-skills-largest-curated-library]] — 1000+ 에이전트 스킬 라이브러리 (Book-to-SKILL로 만든 스킬을 모을 수 있는 생태계)
- [[prompt-engineering-skills-multi-platform]] — 멀티 플랫폼 프롬프트 엔지니어링 스킬 (스킬 포맷 설계 참조)
- [[llm-wiki-self-updating-knowledge-base-karpathy]] — 문서를 자기 갱신 위키로 만드는 패턴 (유사한 지식 구조화 접근)
- [[agentmemory-long-term-memory-for-coding-agents]] — AI 코딩 에이전트용 장기 기억 저장소 (책 지식을 장기 메모리로 활용하는 맥락)
