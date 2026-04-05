---
title: "Obsidian Mind — 엔지니어를 위한 완성형 Claude Code 외부 뇌"
date: 2026-04-05
tags: [tools/obsidian, ai/claude-code, productivity/pkm]
description: "Claude Code와 연동해 세션을 넘어 지식·기억·성과를 자동으로 축적하는 완성형 Obsidian Vault 템플릿. 15개 슬래시 명령어와 9개 서브에이전트를 포함한다."
source: "https://www.threads.com/@lucas_flatwhite/post/DWtbUjWEcCb"
---

# Obsidian Mind — 엔지니어를 위한 완성형 Claude Code 외부 뇌

GitHub: https://github.com/breferrari/obsidian-mind

단순한 Obsidian 플러그인이 아닌, **엔지니어를 위한 완성형 Obsidian Vault 템플릿**이다. Obsidian을 Claude Code의 영구적인 외부 뇌로 만들어, 세션을 넘어 지식·기억·성과를 자동으로 쌓아간다.

## 핵심 기능

### 일상 자동화 시나리오

| 상황 | 명령어 | 결과 |
|------|--------|------|
| 아침 루틴 | `/standup` | 여러 정보를 자동 불러와 하루 계획 정리 |
| 주간 리뷰 | `/weekly` | 한 주 패턴·놓친 성과·다음 주 우선순위 종합 |
| 인시던트 발생 | `/incident-capture` | 타임라인, 관련 사람 노트, 근본 원인 자동 문서화 |
| 대화 중 중요 내용 | (자동) | Claude가 적절한 폴더에 노트 생성 + 링크 연결 |

### 구성 요소

- **brain 폴더** — Claude의 장기 기억 저장소
- **15개 슬래시 명령어** — 일상·업무·프로젝트 자동화
- **9개 전문 서브에이전트** — 역할별 특화 처리
- **Obsidian Bases 동적 대시보드** — Work Dashboard, People Directory, Incidents 등

## 이런 분께 적합

- Claude Code·Claude Projects를 매일 코딩/문제 해결/기획 파트너로 쓰는 엔지니어
- 매번 이전 맥락을 다시 설명하기 귀찮은 사람
- 생각과 성과를 체계적으로 기록하되 직접 관리 부담을 줄이고 싶은 분
- Obsidian 그래프 뷰·링크 시스템을 좋아하지만 처음 구조 잡기가 어려웠던 분

## 시작 방법

1. 저장소 Clone 또는 GitHub Template으로 복제
2. 해당 폴더를 Obsidian Vault로 열기 (CLI 활성화 필수)
3. Vault 폴더 안에서 `claude` 명령어 실행
4. `brain/North Star.md`에 자신의 목표 작성

이후부터는 Claude가 대부분의 정리 작업을 자동으로 처리한다.
