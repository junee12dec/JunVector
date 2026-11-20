---
title: "Claude에게는 도표 이름까지 말하라 — 42쪽 절차서를 Sankey 흐름도로 만든 공식 Artifacts 사례"
date: 2026-11-19
tags: [ai/claude, ai/prompt, design/diagram]
description: "\"보기 좋게 정리해 줘\" 대신 도표 이름(Sankey 등)과 보여 줄 흐름, 표현·조작 조건을 함께 적으면 Claude Artifacts가 원하는 도표를 만든다. 42쪽 구현 절차서를 클릭 가능한 단계별 카드가 있는 Sankey 다이어그램으로 만든 Claude 공식 교육 사례."
source: "https://www.threads.com/@ehddudrlaa/post/Df7lu3ak-Kf"
---

# Claude에게는 도표 이름까지 말하라

@ehddudrlaa (Threads, 2026-11-19): "막연한 요약 대신 무엇을 요청할지." 구현 절차서를 올리고 요청했더니 흐름을 보여 주는 도표로 만들었다는 경험과, Claude 공식 교육의 사례를 정리한 글.

- 공식 안내: https://academy.claude.com/use-cases/create-a-process-flowchart

## 공식 사례

- **Artifacts**: Claude가 대화 옆에서 문서나 도표 등을 만드는 기능.
- 공식 교육에서 **42쪽 절차서를 Sankey 다이어그램**(흐름의 연결과 양을 보여 주는 도표)으로 만든 사례를 소개한다. 단계별 카드를 클릭하는 형태.

첨부 이미지(결과물 예): "Enterprise Implementation Flow — Sankey visualization with volume-based flow distribution"
- 상단 요약 수치: 평균 60일, 성공률 97%, 경로 6개
- 시간축(Day 15 · Day 30 · Day 60) 위로 단계 카드와 흐름 띠: Direct Migration(주 경로 62%) → System Configuration → Production Go-Live, 갈래로 Data Preparation(23%), Premium Service(12%), Quality Failure(이탈 3%)
- 아래 분포 범례: Primary 62% · Data Prep 23% · Enhanced 12% · Exit 3%

## 요청에 들어간 것 — 도표 이름만이 아니다

공식 예시의 요청에는 표현·조작 조건이 함께 들어 있다.
1. 곡선으로 이어지는 경로
2. 굵은 글꼴과 자연색 계열
3. 확대와 화면 이동 기능

→ 원하는 **모양과 조작 방식까지** 함께 적는 것이 참고할 부분이다.

## 직접 시작할 때

- Artifacts는 Free 플랜에서도 쓸 수 있다.
- 업로드 파일은 하나당 20MB, SVG 파일은 2MB까지.
- 자료와 함께 적을 것: **원하는 도표 이름**, **보여 줄 흐름**, **표현 조건**.
- 작성자 의견: "보기 좋게 정리해 줘"보다 이렇게 요구를 구체화하는 게 낫다.

## 참고

- 공식 안내 페이지는 저장할 때 네트워크 정책에 막혀 읽지 못했다. 위 내용은 Threads 글과 첨부 이미지 기준이다.
