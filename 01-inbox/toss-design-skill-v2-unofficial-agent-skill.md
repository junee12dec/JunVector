---
title: "토스 디자인 스킬 v2 — toss.tech 디자인 아티클 143편의 판단 기준을 출처와 함께 담은 비공식 에이전트 스킬"
date: 2026-11-23
tags: [ai/skill, design/ui, design/system]
description: "AI가 UI를 만들 때 토스처럼 판단하게 하는 비공식 스킬. 디자인 원칙, UX 라이팅, 퍼널, 접근성, 리서치, 시각 스타일까지 toss.tech 글에 나온 기준만 골라 정리했고, 모든 규칙에 근거가 된 글의 제목과 URL을 붙였다."
source: "https://www.threads.com/@_beancurd_/post/DgEC2thIxpX"
---

# 토스 디자인 스킬 v2 (비공식)

- 저장소: https://github.com/Ilbie/Toss-Design-Skill (저장 시점 약 75⭐)
- 설치: `npx skills add Ilbie/Toss-Design-Skill` — 요청이 스킬과 맞으면 에이전트가 알아서 불러온다
- 소개 글: @_beancurd_ (Threads, 2026-11-23) — "AI가 UI를 만들 때 토스처럼 판단하게 해 주는 스킬"
- **토스(비바리퍼블리카)와 무관한 비공식 프로젝트**다.

## 무엇을 담았나

toss.tech 디자인 아티클 **143편**에서 판단 기준만 골라 정리했다. 디자인 원칙, UX 라이팅, 퍼널, 접근성, 리서치, 시각 스타일까지. **모든 규칙에 근거가 된 글의 제목과 URL**이 붙어 있다.

## 이럴 때 쓴다

| 상황 | 예시 요청 |
|------|-----------|
| 화면·UI 만들기 | "설정 화면 만들어 줘" |
| 화면·플로우 설계와 리뷰 | "이 가입 플로우 리뷰해 줘" |
| UX 문구·에러 메시지·푸시 | "결제 실패 에러 문구 다듬어 줘" |
| 접근성·다크패턴 점검 | "이 해지 화면 다크패턴 아니야?" |
| 리서치·A/B 테스트·기능 판단 | "이 기능 넣을지 뺄지 정리해 줘" |

첨부 이미지 2장(결과 예): 다크 테마의 **설정 화면**(프로필, 계정·알림과 보안·화면 묶음, 오른쪽에 현재 값 표시, 맨 아래 로그아웃과 버전), **캘린더 앱 화면**(월 달력, "오늘 · 11월 23일 월요일 일정 3개", "32분 뒤 시작" 같은 남은 시간 표시, 하단 "일정 추가하기" 버튼).

## 구성

```
Toss-Design-Skill/
├── SKILL.md        # 핵심 원칙과 상황별로 읽을 파일 안내
├── references/     # 주제별 정리 21개 + 출처 목록(sources.md)
└── images/         # README용 버전 비교 스크린샷
```

| 분류 | 파일 |
|------|------|
| 원칙과 판단 | principles · decision-making · ethics |
| 문제 해결 | problem-solving · problem-solving-cases |
| UX 라이팅 | ux-writing · ux-writing-errors-marketing |
| 흐름과 구조 | funnels-and-flows · domain-flows-and-ia |
| 시각과 인터랙션 | visual-style · interaction · graphics-branding |
| 접근성 | accessibility-inclusion |
| 리서치와 데이터 | research-methods · research-ops · data-and-experiments |
| 팀과 시스템 | design-systems-and-standards · working-with-teams · team-roles-and-growth · internal-tools-b2b |
| AI | ai-practices |

SKILL.md는 핵심만 두고 상황에 맞는 reference 파일을 읽으라고 안내하는 구조다.

## 팁과 주의 (README)

- 여러 모델로 돌려 봤을 때 **Claude 계열**이 이 스킬을 가장 잘 활용하는 것 같다고 한다.
- 사고방식과 원칙을 참고하는 자료이고, 토스 화면을 그대로 따라 만드는 용도가 아니다.
- 토스 명칭, 로고, 토스페이스·Toss Product Sans 같은 전용 자산은 결과물에 쓰지 말 것.
- MIT 라이선스는 저장소에서 직접 쓴 문서에만 적용되고, toss.tech 원문·이미지·상표의 권리는 각 권리자에게 있다.
