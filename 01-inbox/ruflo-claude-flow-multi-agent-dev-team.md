---
title: "Ruflo (구 Claude Flow) — Claude Code에 기획·개발·테스트·리뷰·보안 역할별 AI 개발팀을 붙이는 무료 오픈소스"
date: 2026-10-01
tags: [ai/claude-code, ai/multi-agent, dev/tools]
description: "Claude Code에 팀장 AI가 작업을 쪼개 역할별 AI에게 나눠주고 공용 메모리에 학습 내용을 남기는 멀티에이전트 하네스. Node.js 20 이상과 Claude Code만 있으면 npx 한 줄로 시작 가능."
source: "https://www.gymcoding.co/articles/ruflo-claude-code-multi-agent-guide"
---

# Ruflo — Claude Code용 AI 개발팀 오픈소스

> 옛 이름: **Claude Flow**

가이드: [gymcoding.co/articles/ruflo-claude-code-multi-agent-guide](https://www.gymcoding.co/articles/ruflo-claude-code-multi-agent-guide)

## 동작 방식

작업 요청 → 팀장 AI가 분해 → 역할별 AI에게 배분 → 학습 내용을 공용 메모리에 저장 → 다음 작업에 재활용

### 역할별 AI

- 기획
- 개발
- 테스트
- 리뷰
- 보안

## 설치 및 시작

```bash
# 전제: Node.js 20+, Claude Code 설치
npx ruflo@latest init wizard
npx ruflo@latest doctor
```

설정은 프로젝트마다 한 번.

## 올바른 시작 순서

처음부터 "기능 만들어 줘"로 시작하지 말 것. 프로젝트를 파악하기 전에 파일을 고칠 수 있음.

```
분석 요청 → 계획 확인 → 진행 승인
```

## 핵심 특징

- **공용 메모리**: 에이전트가 알게 된 내용을 저장해 다음 작업에 재활용
- **무료 오픈소스**
- Claude Code 위에서 동작
