---
title: "LLM Wiki + Obsidian 세컨드 브레인 직접 구축 후기"
date: 2026-04-11
tags: [productivity/obsidian, ai/knowledge-management, ai/claude]
description: "Karpathy의 LLM Wiki를 Obsidian + Claude Code로 직접 구현한 후기. 153개 파일에서 146개 요약, 48개 엔티티, 29개 컨셉을 자동 생성하는 세컨드 브레인 구축 경험기."
source: "https://www.threads.com/@aboutcorelab/post/DW-fojLk2RS?xmt=AQF0lYs6qL6g9Q6vFpceSXNEuoI8c9d82CW1eYG1PvJfPdcj66CaTE7Zi69DZ_tgGqGUhS69&slof=1"
---

# LLM Wiki + Obsidian 세컨드 브레인 직접 구축 후기

## 핵심 요약

안드레 카파시의 'LLM Wiki'를 Obsidian + Claude Code로 직접 구현한 실전 후기.
잠자고 있던 **153개 리포트**가 진짜 세컨드 브레인으로 전환된 경험기.

---

## 구현 결과

Obsidian에 기록된 153개 파일을 투입한 결과:

| 항목 | 수치 |
|------|------|
| 소스 자동 요약 | 146개 |
| 엔티티 자동 추출 (기업·인물·기술) | 48개 |
| 컨셉 자동 생성 + 문서 간 연결 | 29개 |

---

## Obsidian Claudian 플러그인

- 터미널 없이 위키에 바로 질문 가능
- 답변을 다시 지식으로 저장하는 구조
- 지식이 쌓일수록 점점 똑똑해지는 자기강화 루프

---

## 시작 방법

1. 카파시의 `llm-wiki` gist 열기
2. Claude Code에 "이걸 참고해서 내 볼트에 위키 만들어줘" 입력
3. 기존 Obsidian 파일 투입 → 자동 처리 시작

---

## 인사이트

- 기존 노트가 많을수록 즉시 효과가 크다 (153개 → 즉시 활용 가능한 지식 네트워크)
- 엔티티 추출로 기업·인물·기술 관계를 자동 매핑
- "쌓을수록 똑똑해진다"는 지식 복리 구조가 핵심 가치
