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

**왼쪽 — 과정 목차** (전체 목록은 아래 "40개 과정 전체" 참고)

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

## 40개 과정 전체 (사이트 기준, 2026-11-18 확인)

| 장 | 레슨 |
|----|------|
| 01. Foundations (3) | How a Request Travels · Latency & Throughput · Napkin Math |
| 02. Scaling (5) | Vertical vs Horizontal · Load Balancing · Stateless Services · Caching · Content Delivery |
| 03. Data & Storage (11) | SQL vs NoSQL · Indexes · Storage Engines · Replication · Sharding · Consistent Hashing · Unique IDs at Scale · CAP & Consistency · Consensus & Leaders · Transactions & Isolation · Files & Media |
| 04. Communication (4) | REST, RPC & GraphQL · Message Queues · Pub/Sub & Events · Real-time Updates |
| 05. Reliability (4) | Redundancy & Failover · Rate Limiting · Timeouts & Retries · Observability |
| 06. Architecture (4) | Monolith vs Microservices · Service Discovery · Sagas & Distributed Tx · Batch & Stream Processing |
| 07. Security (3) | Authentication · Authorization · Encryption & Secrets |
| 08. Shipping (2) | Testing · CI/CD & Deployments |
| 09. Whole Systems (4) | HLD & LLD · Design a URL Shortener · Design a News Feed · Design a Chat System |

레슨마다 주소가 따로 있다 (예: `https://designed-to-scale.vercel.app/#/caching/1`, `#/sharding/1`, `#/design-chat/1`).

## 레슨 예: 01-1 "How a Request Travels" (10분, Beginner, 10단계)

- 목표: 페이지 하나가 뜰 때까지 요청을 한 단계씩 따라가며 시간이 실제로 어디서 쓰이는지 찾는다.
- 실시간 수치: DNS 조회 · 연결 · 요청+서버 처리 · 다운로드 · 합계
- 단계: Enter 누르기 → 주소 찾기 → 연결 → 요청 → 데이터 가져오기 → 응답 → 추가 파일 → 느린 쿼리 → 먼 거리 → 정리
- 1단계 "문제": 사용자들이 쇼핑몰이 느리다고 한다. 빠르게 만들려면 먼저 시간이 어디서 쓰이는지 알아야 하니, 페이지 로드 하나를 따라가 본다.
- 핵심 아이디어: 모든 웹 요청은 기계끼리의 대화이고, 단계마다 시간이 들며 그 비용이 쌓인다.

## 참고

- 처음 저장할 때는 사이트가 네트워크 정책에 막혀 영상 첫 화면만으로 정리했다. 이후 사이트를 허용해 목차와 첫 레슨을 직접 확인했다 (전체 레슨은 40개이고, 처음에 첫 화면에서 "48"로 읽은 것은 잘못이었다).
- 상단의 Practice · Design Lab · Cheatsheets 탭은 확인할 때 눌러도 레슨 화면에서 바뀌지 않아 내용을 보지 못했다.
- 이 사이트의 공개 GitHub 저장소는 찾지 못했다. 만든 사람의 GitHub(https://github.com/dilums)의 공개 저장소 115개 중에도 없다.
