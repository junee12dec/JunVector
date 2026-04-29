---
title: "Claude Code 웹 에이전트 팀 자동 세팅 가이드 파일 — 시몬"
date: 2026-04-05
tags: [ai/claude, dev/agent, productivity/automation]
description: "파일 하나를 멘션하면 Claude Code가 대화형으로 질문하면서 4개 에이전트(PM·디자이너·프론트엔드·리뷰어)와 파이프라인 스킬, 디자인 시스템까지 약 10분 만에 자동 세팅해주는 가이드 파일."
source: "https://www.threads.com/@simon.dsgn/post/DWwFTQIkq8K"
---

# Claude Code 웹 에이전트 팀 자동 세팅 가이드 파일 — 시몬

> 파일명: `claude-web-agent-setting-guide.md`  
> 배포: https://www.vibebuild.club/articles/ai-harness-guide-file

## 한 줄 요약

파일 하나를 `@멘션`하면 Claude Code가 Step 0~7을 대화형으로 진행해서 에이전트 팀 전체를 자동 세팅한다.

## 사용법

1. 새 폴더 생성
2. VS Code로 폴더 열기
3. `claude-web-agent-setting-guide.md` 파일 넣기
4. Claude Code 실행
5. `@claude-web-agent-setting-guide.md` 멘션 후 세팅 요청
6. AI 질문에 답변

전체 소요 시간: **약 10분**

## 기술 스택 (고정)

Next.js (App Router) + Tailwind CSS + TypeScript

## 세팅 완료 시 구성

| 구성 요소 | 내용 |
|-----------|------|
| 에이전트 4개 | project-manager, designer, frontend-dev, reviewer |
| 파이프라인 스킬 | 4개 에이전트를 순서대로 조율하는 오케스트레이터 |
| 디자인 시스템 | 디자인 토큰 파일 + CSS 변수 (Tailwind v4 기반) |
| CLAUDE.md | 프로젝트 지시 파일 |
| 스킬 설치 | 스택별 추천 스킬 포함 |

## Step 0~7 진행 순서

- **Step 0**: 경로 변수 설정 (에이전트, 스킬, 문서 저장 위치)
- **Step 1**: Next.js 프로젝트 초기화 (create-next-app + 빌드 확인)
- **Step 2**: 서비스 정의 (서비스명, 타겟, 핵심 기능 대화형 수집)
- **Step 3**: 브랜드 아이덴티티 + 디자인 시스템 (키컬러, 토큰, CSS 변수)
- **Step 4**: 스킬 설치 (find-skills, skill-creator, frontend-design)
- **Step 5**: 에이전트 4개 생성
- **Step 6**: 파이프라인 스킬 생성 (오케스트레이터)
- **Step 7**: CLAUDE.md 생성

## 파이프라인 실행 흐름

"랜딩페이지 만들어줘" 요청 시:

1. PM → 기능 명세 작성
2. **승인 게이트** ✓
3. 디자이너 → 화면 설계
4. **승인 게이트** ✓
5. 프론트엔드 개발자 → 코드 구현
6. 리뷰어 → 코드 검토

> 각 단계 사이에 승인 게이트가 있어 수정 요청 가능

## 확장 가능성

- 디자이너 에이전트는 현재 텍스트 기반 디자인 계획만 작성
- Figma MCP 또는 Pencil MCP 연결 시 실제 디자인 결과물 생성 가능

## 주의사항

- 에이전트 활용 작업은 토큰 소모가 많음
- Pro 플랜 사용자는 리밋에 빠르게 도달할 수 있음
