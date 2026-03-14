---
title: "Claude + NotebookLM으로 30장 PPT 만드는 3단계 워크플로우"
date: 2026-03-13
tags: [ai/claude, ai/notebooklm, productivity/ppt, productivity/automation]
description: "Claude에서 JSON 설계도를 받아 NotebookLM에 분할 주입하는 방식으로 30장 PPT를 체계적으로 생성하는 실전 워크플로우. 15장씩 두 파트로 나누는 것이 핵심."
source: "https://www.threads.com/@ai__frontier/post/DVz3jkkEsjd"
---

# Claude + NotebookLM으로 30장 PPT 만드는 3단계 워크플로우

## STEP 1 — Claude에게 30장 JSON 설계 요청

아래 프롬프트 형식으로 Claude에 요청:

```
[주제 및 내용]

이 주제로 30장짜리 PPT를 만들 거야.
1번부터 30번 슬라이드까지
각각의 제목, 핵심 내용, 디자인 가이드를 포함한
JSON 형식 설계도를 짜줘.
```

## STEP 2 — 설계도 '반으로 쪼개기' (중요!)

Claude가 뽑아준 30장 JSON을 **그대로 넣지 말고** 두 파트로 분리해서 저장:

| 파트 | 범위 | 내용 |
|------|------|------|
| Part A | 1~15페이지 | 배경, 현황, 원인 분석 등 |
| Part B | 16~30페이지 | 전략, 해결책, 기대효과 등 |

NotebookLM에서 소스 추가 → 복사된 텍스트에서 따로따로 기입.

## STEP 3 — NotebookLM에 '분할 주입'

1. NotebookLM에서 새 노트를 **두 개** 생성
2. 출처 Sidebar에서 Part A, Part B **따로따로 활성화**
3. 슬라이드 자료 버튼 클릭 → 편집 버튼 누르기
4. `"15장 슬라이드 생성해줘"` 프롬프트 작성 후 실행

## 핵심 포인트

- NotebookLM의 소스 용량 제한 때문에 **반드시 분할**해야 함
- 각 파트를 별도 노트북에서 생성하면 15장 × 2 = **총 30장** 완성
- JSON 설계도를 먼저 잡으면 일관된 스타일과 흐름 유지 가능
