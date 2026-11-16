---
title: "ELI5 — Anthropic 사내 유행 Claude Code 스킬 (글 줄이고 그림 키운 HTML 한 장 설명)"
date: 2026-08-22
tags: [ai/claude-code, productivity/workflow, dev/tools]
description: "Claude Code 팀의 Thariq이 공개한 /eli5 커뮤니티 스킬. 코드·설계·장애 원인을 아무것도 모르는 사람에게 설명하듯 그림 중심 HTML 한 장으로 시각화해준다."
source: "https://www.threads.com/share/BAauZkFcRa/"
---

# ELI5 — Anthropic 사내 유행 Claude Code 스킬

> Claude Code 팀의 **Thariq**이 사내에서 유행 중인 ELI5 스킬을 공개했습니다.

## 동작 방식

`/eli5` 뒤에 궁금한 걸 붙이면, 아무것도 모르는 사람에게 설명하듯 **글은 줄이고 그림을 키운 HTML 자료 한 장**을 만들어준다.

## 활용 예시

- 이 모듈이 어떻게 돌아가는지
- 왜 이 설계를 골랐는지
- 이번 장애가 왜 났는지

코드를 파기 전에 그림 한 장으로 먼저 전체 구조를 잡을 때 유용하다.

## 설치 방법

커뮤니티 플러그인 마켓에 올라와 있어서 Claude Code에서 바로 설치 가능:

```bash
# 1단계: 커뮤니티 플러그인 마켓 추가
claude plugin marketplace add anthropics/claude-plugins-community

# 2단계: ELI5 스킬 설치
claude plugin install eli5@claude-community
```

## 사용법

```
/eli5 [설명하고 싶은 내용]
```

예:
```
/eli5 이 인증 모듈이 어떻게 동작하는지
/eli5 왜 마이크로서비스 대신 모놀리식을 선택했는지
/eli5 오늘 새벽 3시 장애 원인
```
