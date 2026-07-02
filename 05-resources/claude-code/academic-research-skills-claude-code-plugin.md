---
title: "Academic Research Skills — Claude Code로 논문 작성 전 과정 자동화 플러그인 (7.4k⭐)"
date: 2026-05-15
tags: [ai/claude, dev/tool, productivity/research, agent/multi-agent]
description: "Claude Code 플러그인 하나로 리서치→논문 작성→동료 검토 전 과정을 멀티 에이전트로 자동화. 30초 설치, 4개 스킬·42개 에이전트, APA/IEEE 등 주요 인용 형식 지원."
source: "https://github.com/Imbad0202/academic-research-skills"
---

# Academic Research Skills — Claude Code 학술 연구 자동화 플러그인

**GitHub**: https://github.com/Imbad0202/academic-research-skills  
**⭐ 7.4k stars** / 842 forks / 최신 버전 v3.7.0 (2026-05-05)  
**라이선스**: CC-BY-NC 4.0 (비상업용)

Claude Code 플러그인으로 학술 논문 작성의 전체 파이프라인을 자동화한다.  
자료 수집 → 글쓰기 → 검토·수정까지 멀티 에이전트가 처리.

---

## 설치 (30초)

```bash
/plugin marketplace add Imbad0202/academic-research-skills
/plugin install academic-research-skills
```

**요구사항**: `ANTHROPIC_API_KEY`, 선택: Pandoc, tectonic

---

## 4개 핵심 스킬

### 1. Deep Research `v2.8` — 13개 에이전트
문헌 탐색과 검증을 위한 연구팀.
- Socratic 가이드, PRISMA 체계적 검토
- Semantic Scholar API로 인용 검증
- 7가지 모드: Full / Quick / Systematic Review / Socratic / Fact-Check / Lit-Review / Review

### 2. Academic Paper `v3.0` — 12개 에이전트
논문 작성 전 과정.
- 스타일 교정, 작성 품질 검사, LaTeX 변환, 인용 변환
- 10가지 모드: Full / Plan / Outline / Revision / Abstract / Format-Convert / Citation-Check 등

### 3. Academic Paper Reviewer `v1.8` — 7개 에이전트
동료 검토 시뮬레이션.
- 0~100 품질 기준 채점
- 3명의 가상 검토자 + 악마의 옹호자(Devil's Advocate) 역할
- 6가지 모드

### 4. Academic Pipeline `v3.7` — 10단계 오케스트레이터
위 3개 스킬을 통합한 전체 파이프라인.
- 적응형 체크포인트
- 무결성 검증

---

## 주요 명령어

| 명령어 | 설명 |
|--------|------|
| `/ars-plan` | Socratic 대화로 논문 구조 설계 |
| `/ars-lit-review` | 빠른 문헌 검토 |
| `/ars-review` | 기존 논문 검토 |
| `status` | 파이프라인 진행 상태 확인 |

---

## 출력 형식 및 인용

**출력**: Markdown (기본) / DOCX (Pandoc 필요) / PDF via LaTeX  
**인용 형식**: APA 7.0 / Chicago / MLA / IEEE / Vancouver  
**언어**: 영어, 繁體中文 (한국어 미지원)

---

## 비용 추정

- 15,000단어 논문 기준 약 **$4~6**

---

## 활용 대상

- 논문·보고서를 써야 하는 대학원생
- 체계적 문헌 검토(Systematic Review) 필요한 연구자
- 보고서 초안이 필요한 직장인·프리랜서

---

## 환경 변수 (고급)

| 변수 | 기능 |
|------|------|
| `ARS_CROSS_MODEL` | GPT-5.4 / Gemini로 크로스 모델 검증 |
| `ARS_PASSPORT_RESET` | 컨텍스트 리셋 경계 설정 |
| `ARS_SOCRATIC_READING_PROBE` | 읽음 확인 프로브 |

---

## 관련 노트

- [[awesome-agent-skills-largest-curated-library]] — 1000+ 에이전트 스킬 라이브러리 (academic-research-skills 포함 가능)
- [[gstack-superpowers-ai-dev-workflow-6steps]] — Claude Code 플러그인 조합 워크플로우
