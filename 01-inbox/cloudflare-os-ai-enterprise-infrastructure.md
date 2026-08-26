---
title: "cloudflare/cloudflare-os — Cloudflare 전 직원이 쓰는 사내 AI 운영체제 오픈소스 공개"
date: 2026-08-22
tags: [dev/self-hosted, ai/infrastructure, dev/cloudflare]
description: "Cloudflare가 실제 사내 운영 중인 AI OS를 오픈소스로 공개. 유저별 독립 인스턴스(Gadget), OAuth·로깅 보안 계층(Gatekeepers), 로컬 한 줄 실행, v2 얼리 액세스 등 사내 AI 인프라 설계 레퍼런스로 가치 있는 사례."
source: "https://www.threads.com/share/BBlCsKwVzZ/"
---

# cloudflare/cloudflare-os — Cloudflare 사내 AI 운영체제 오픈소스

GitHub: [cloudflare/cloudflare-os](https://github.com/cloudflare/cloudflare-os)  
별 9,182 (공개 당일 111개 추가)

> Cloudflare 전 직원이 실제로 쓰는 AI 운영체제를 통째로 오픈소스로 공개.  
> 회사 전체 워크플로를 공개한 사례라 **사내 AI 인프라 설계 레퍼런스**로 참고 가치 높음.

## 핵심 변경점 4가지

### 1. Gadget — 유저마다 완전히 독립된 인스턴스

- 슬라이드덱·화이트보드 요청 시 공유 서버 대신 **Durable Object 기반 개인 전용 샌드박스** 생성
- 다른 사람 데이터가 섞일 구조적 위험 없음
- **Blueprint**로 Gadget을 코드째 공유 가능

### 2. Gatekeepers — 승인과 로깅까지 맡는 보안 계층

- 외부 서비스 연결 시 별도 Worker가 **OAuth 인증 + 최소 권한 접근 + 액션 로깅** 담당
- 로컬에서 먼저 시뮬레이션 → 나중에 한꺼번에 승인 방식
- 매 단계 멈춰 기다리는 병목 제거

### 3. 로컬 실행 한 줄

```bash
pnpm run-local
```

- wrangler + workerd 스택 전체가 `localhost:8787`에서 실행
- Cloudflare 계정으로 원클릭 배포 지원
- 기반 런타임 workerd가 오픈소스 → 자체 서버 배포도 곧 지원 예정

### 4. v2 얼리 액세스 (2026년 8월 기준)

- 1세대에서 학습한 내용을 반영해 새 기반으로 재설계
- **Dynamic Workers** 등 최신 Workers 런타임 기능 적용

## 사내 AI 인프라 관점에서 주목할 점

| 문제 | 해결 방식 |
|------|-----------|
| 멀티테넌시 데이터 격리 | Durable Object 기반 개인 샌드박스 |
| 외부 서비스 권한 관리 | Gatekeeper Worker + 최소 권한 원칙 |
| 개발→운영 배포 경로 | 로컬 wrangler → Cloudflare 원클릭 |
| 워크플로 공유 | Blueprint 코드 공유 |
