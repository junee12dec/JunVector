---
title: "html-plan — 구현 계획을 인터랙티브 HTML 한 장으로 만드는 Claude Code 커뮤니티 플러그인"
date: 2026-10-23
tags: [ai/claude, dev/tools, productivity/planning]
description: "Claude Code 팀 Thariq가 만든 커뮤니티 플러그인. 구현 계획을 긴 마크다운 대신 한 장의 인터랙티브 HTML로 시각화해 빠르게 읽고 결정한 뒤 Claude에 붙여넣으면 더 정확한 구현이 가능하다."
source: "https://www.threads.com/share/BAAbKOXQqY/"
---

# html-plan — 인터랙티브 구현 계획 플러그인

GitHub: [anthropics/claude-plugins-community/html-plan](https://github.com/anthropics/claude-plugins-community/tree/main/html-plan)  
예시 아티팩트: [claude.ai/artifact/CUF7bzFny3XUFVLAVt9rfc](https://claude.ai/artifact/CUF7bzFny3XUFVLAVt9rfc)

## 핵심 가치

구현 계획을 **긴 마크다운 → 한 장의 인터랙티브 HTML 페이지**로 변환.  
휙 읽고 결정할 수 있게 설계.

## 시각화 요소

- UI 목업
- 상태(State)
- 콜스택(Call Stack)
- 스키마(Schema)
- 코드 스니펫

## 사용 흐름

1. Claude에게 html-plan으로 구현 계획 생성 요청
2. HTML 페이지에서 **레벨별로 펼쳐가며** 검토
3. 선택지 고르고 코멘트 추가
4. 생성된 답변을 Claude에 붙여넣기 → **더 정확한 구현** 시작

## 설치 방법

```bash
claude plugin marketplace add anthropics/claude-plugins-community
claude plugin install html-plan@claude-community
```

## 제작자

Claude Code 팀 **Thariq** (ELI5 스킬 [[eli5-claude-code-community-skill-thariq|ELI5]] 제작자와 동일인)
