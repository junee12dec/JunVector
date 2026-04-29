---
title: "Codex 이미지 생성 Claude 스킬 — GPT 구독 OAuth로 API 과금 없이"
date: 2026-04-23
tags: [ai/claude, dev/tool, ai/image-generation]
description: "GPT 구독 OAuth를 활용해 API 과금 없이 Claude Code에서 Codex 이미지 생성을 사용하는 Claude 스킬. `/codex-image + 프롬프트`로 바로 실행."
source: "https://www.threads.com/@dev_one_l/post/DXdafvemjmX"
---

# Codex 이미지 생성 Claude 스킬 — GPT 구독 OAuth로 API 과금 없이

> "API 과금 불필요. GPT 구독제 OAuth로 Claude Code에서 Codex 이미지 생성 가능"

---

## 개요

Claude Code 안에서 OpenAI Codex 이미지 생성을 사용하는 Claude 스킬.  
별도 API 키 과금 없이 **GPT 구독 계정의 OAuth 인증**으로 동작한다.

## 사용법

```
/codex-image + 이미지 프롬프트
```

Claude Code에 스킬을 설치한 뒤 위 명령으로 바로 이미지 생성.

---

## 관련 레포 3종

| 레포 | 역할 |
|------|------|
| [codex-image](https://github.com/wjb127/codex-image) | 핵심 스킬 — `/codex-image` 명령으로 Codex 이미지 생성 |
| [codex-sangpye-skill](https://github.com/NewTurn2017/codex-sangpye-skill) | 상세페이지 자동 생성 스킬 |
| [codex-for-claude-code](https://github.com/Yusang-park/codex-for-claude-code) | Codex **모델** 자체를 OAuth로 Claude Code에서 사용 |

## 영감 출처

- Codex 리뷰
- [daedal](https://github.com/daedal) 레포

---

## 핵심 포인트

- **API 과금 없음** — GPT 구독만 있으면 OAuth로 인증
- **이미지 생성**: Codex를 이미지 래퍼로 활용
- **자매품**: 이미지 생성뿐 아니라 Codex 모델 자체도 Claude Code에서 OAuth로 사용 가능
