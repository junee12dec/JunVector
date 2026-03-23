---
title: "Paper-Banana를 Claude Code 스킬로 — 논문 그림 생성 자동화"
date: 2026-03-23
tags: [ai/claude-code, tool/skill, research/paper, ai/image-generation]
description: "paper-banana 논문의 반복적 그림 생성·비평·수정 파이프라인을 Claude Code 스킬로 등록하면, pip 설치 없이 논문 figure를 Claude Code 안에서 바로 생성할 수 있다."
source: "https://www.threads.com/@ed_hjpark/post/DWLw_tpEynm?xmt=AQF0KRH3JDzOV2Pi_upp80wmSCtmQ5WC0lsiV47c_wwqEP7H7011gWAgS2Jiv4iOrGa4goA&slof=1"
---

# Paper-Banana를 Claude Code 스킬로 — 논문 그림 생성 자동화

## 핵심 아이디어

[paper-banana](https://github.com/llmsresearch/paperbanana) 논문의 figure 생성 파이프라인을 Claude Code 스킬로 등록한 사례.

**paper-banana 작동 방식** (대략):
1. 논문 방법론을 입력
2. "어떤 그림을 그릴지" 프롬프트 자동 생성
3. 해당 프롬프트로 이미지 생성
4. 생성된 이미지를 보고 critic (비평)
5. 수정 → 수정 → 수정 (약 3회 반복)
6. 최종 figure 확정

## 왜 스킬로 등록했나

- pip 설치 + 환경 설정이라는 **심리적 장벽** 제거
- 코딩을 모르는 사람도 Claude Code 안에서 바로 실행 가능
- "모든 것은 딸깍"

## 의미

1. **논문 작업 통합**: Claude Code에서 논문 쓰다가 figure 필요하면 스킬 하나로 해결
2. **부품 누적 효과**: 이런 스킬이 쌓일수록 코어 데이터에 붙일 수 있는 작업이 늘어남
3. **스킬 = 설치형 프로그램 수준**: skill인데 사실상 하나의 도구를 인스톨한 것과 같음
4. **활용 확장**: nano-banana로 그리던 논문 figure 품질을 이 방식으로 더 올릴 수 있음

## 관련 메모

> 젠슨 황이 "연봉 50만 달러면 토큰 비용으로 25만 달러 낸다"고 했는데,
> 이런 식으로 쓰기 시작하면 실제로 그만큼 쓸 수 있겠다는 게 이해된다.
