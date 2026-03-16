---
title: "Garry Tan의 gstack — Claude Code를 전문가 팀으로 바꾸는 오픈소스 셋업"
date: 2026-03-14
tags: [ai/claude, dev/tools]
description: "YC 대표 Garry Tan이 공개한 오픈소스 Claude Code 셋업. 슬래시 커맨드로 CEO 검토·아키텍처 리뷰·QA 자동화·배포까지 전문가 팀처럼 운영할 수 있다."
source: "https://www.threads.com/@geumverse_ai/post/DV1axt-k-Mo?xmt=AQF0zWp8c0mcinnRYVSWRgjgcSp8mNkHO3J7dCeulzx1GnMBAFJlSg1kNAPkNwLFuYTuQfb_&slof=1"
---

# Garry Tan의 gstack — Claude Code를 전문가 팀으로 바꾸는 오픈소스 셋업

> Y Combinator 대표 Garry Tan이 본인 Claude Code 셋업을 오픈소스로 공개 (⭐4k)
> GitHub: http://github.com/garrytan/gstack

Claude Code를 "혼자 다 하는 AI"가 아니라 **전문가 팀**으로 바꿔주는 도구.

## 슬래시 커맨드

| 커맨드 | 역할 |
|--------|------|
| `/plan-ceo-review` | 진짜 원하는 게 맞냐? 10배 나은 제품 발굴 |
| `/plan-eng-review` | 아키텍처·엣지케이스·다이어그램까지 점검 |
| `/review` | 코드리뷰 (XSS 취약점도 잡아냄) |
| `/ship` | 원커맨드 배포 |
| `/qa` | 브라우저 열어서 직접 QA 자동화 |
| `/retro` | 회고 |

## 특징

- 설치 명령어 한 줄
- MIT 라이선스 — 팀원과 공유 가능
- 한 CTO 평: "갓모드다. 신규 레포 90% 이상이 gstack 쓸 것 같다"
