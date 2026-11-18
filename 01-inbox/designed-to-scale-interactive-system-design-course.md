---
title: "Designed to Scale — 시스템 설계를 움직이는 그림으로 직접 조작하며 배우는 무료 학습 사이트 (40개 과정)"
date: 2026-11-18
tags: [learning/course, dev/architecture]
description: "부하 분산, 데이터 저장·처리 같은 시스템 설계 개념을 애니메이션 그림에서 직접 조작하고 결과를 확인하며 배우는 무료 사이트. 기초부터 확장·데이터·통신·신뢰성·아키텍처·보안·배포·전체 시스템까지 9개 장 40개 과정이다."
source: "https://www.threads.com/@choi.openai/post/Df3-VM-Dfi3"
---

# Designed to Scale — 시스템 설계를 직접 조작하며 배우는 무료 학습 사이트

- 사이트: https://designed-to-scale.vercel.app
- 만든 사람: 개발자 딜룸 산자야 (화면 오른쪽 위 표시 @DilumSanjaya)
- 소개 글: @choi.openai (Threads, 2026-11-18) — "책이나 강의로 설명을 듣는 것을 넘어, 직접 움직여 보고 결과를 확인하며 배우는 방식이 많아지고 있다."

## 무엇인가

서버에 사용자가 몰릴 때 부하를 어떻게 나누는지, 데이터를 어떻게 저장하고 처리하는지 같은 시스템 설계 개념을 **움직이는 그림**으로 이해하는 무료 학습 사이트. 총 40개 과정.

## 화면 구성 (첨부 영상 첫 화면 기준)

상단 메뉴: Learn · Practice · Design Lab · Cheatsheets, 검색, 언어(EN), 테마 전환.

**왼쪽 — 과정 목차 (9장, 48 lessons로 표시)**
01 Foundations · 02 Scaling · 03 Data & Storage · 04 Communication · 05 Reliability · 06 Architecture · 07 Security · 08 Shipping · 09 Whole Systems

02 Scaling 안의 레슨: Vertical vs Horizontal Scaling · Load Balancing · Stateless Services · Caching · Content Delivery

**가운데 — 레슨 화면 예: "Vertical vs Horizontal Scaling"** (11분, Beginner, 11단계)
- 질문: "서버 하나가 녹아내리고 있다. 더 큰 서버 하나를 살까, 더 많이 살까?"
- 실시간 수치: 사용자 500,000 · 초당 요청 20,000 · p95 지연 95ms · 오류 0% · 월 비용 $14,400
- 아이소메트릭 그림: 사용자 무리가 요청을 보내고, 서버 A~D 네 대가 부하(54%, 52%, 50%, 48%)를 나눠 받는다.
- 아래 단계 진행 막대: One server → Viral spike → Scale up → The ceiling → One failure → Scale out → Right time → Autoscale → Flash sale → Who routes? → Recap (6/11단계)

**오른쪽 — 설명 패널: "Way 2 — scale out"**
- 큰 서버 하나 대신 중간 크기 서버 여러 대를 같은 코드로 나란히 돌린다. 이것이 수평 확장(scale out)이다.
- 바뀐 것: 용량 ×3, 비용 $7,200 → $14,400/월, CPU 서버당 약 52%
- "이 레슨에서 배우는 것" 체크리스트: 과부하 서버의 증상 알아보기, 수직 확장과 그 한계, 서버 여러 대로 수평 확장, 하루 주기에 맞춘 오토스케일링과 미리 늘리기, 수평 확장에 로드 밸런서가 필요한 이유

진행률 표시: 8 / 40.

## 참고

- 사이트는 저장할 때 네트워크 정책에 막혀 직접 읽지 못했다. 위 화면 구성은 첨부 영상의 첫 화면에 보이는 것만 옮겼다. 첫 화면에는 목차가 "48 lessons"로 보이지만 소개 글은 "40개 과정"이라고 적고 있다.
- 공개 GitHub 저장소는 찾지 못했다.
