---
title: "Claude Code 15가지 숨겨진 기능 — Boris Cherny가 직접 공개"
date: 2026-03-30
tags: [ai/claude-code, productivity/workflow, dev/tools]
description: "Claude Code 창시자 Boris Cherny가 직접 공개한 숨겨진·덜 활용되는 기능 15가지. 모바일 코딩부터 /batch 팬아웃, Git Worktrees, Hooks까지 '자율 개발 플랫폼'으로 쓰는 법."
source: "https://www.threads.com/@aicoffeechat/post/DWgB8U5k1TU"
---

# Claude Code 15가지 숨겨진 기능 — Boris Cherny가 직접 공개

> **핵심 철학:** "개발자가 직접 하던 일을 시스템에 위임하라."

Claude Code를 터미널 코딩 도구로만 쓰고 있다면, 집의 1층 거실에서만 생활하는 것과 다름없다. 위층에는 15개의 방이 더 있다.

---

## 1/ 모바일 앱으로 코딩하기

iOS/Android용 Claude 앱 → 왼쪽 Code 탭. Boris Cherny 본인이 상당 부분의 코드를 iOS 앱에서 작성한다. 생산성이 '노트북 앞에 앉아 있는 시간'에 묶이는 제약이 사라진다.

---

## 2/ 세션 텔레포트 & 리모트 컨트롤

- `claude --teleport` / `/teleport` : 클라우드 세션을 로컬로 가져오기
- `/remote-control` : 로컬 세션을 폰/웹에서 조종

Boris Cherny는 모든 세션에서 리모트 컨트롤을 기본 활성화해 둠. 맥락 전환 비용이 0에 수렴한다.

---

## 3/ /loop과 /schedule — 잠든 사이에도 일하는 루프

최대 일주일 연속 가동 가능. Boris Cherny의 실제 루프 목록:

| 루프 명령어 | 주기 | 하는 일 |
|---|---|---|
| `/loop 5m /babysit` | 5분마다 | 코드 리뷰 대응, 리베이스, PR 인도 |
| `/loop 30m /slack-feedback` | 30분마다 | Slack 피드백 반영 PR 자동 생성 |
| `/loop /post-merge-sweeper` | 반복 | 놓친 리뷰 코멘트 찾아 PR 올림 |
| `/loop 1h /pr-pruner` | 1시간마다 | 오래된 PR 자동 정리 |

워크플로우를 스킬로 만들고 루프와 결합 → Claude Code를 24시간 개발 인프라로.

---

## 4/ Hooks — 에이전트 생명주기에 로직 심기

에이전트 생명주기 각 단계에 로직을 결정론적으로 삽입:

- **SessionStart**: 시작 시마다 컨텍스트 동적 로드
- **PreToolUse**: 모든 bash 명령어 로깅
- **PermissionRequest**: 권한 승인을 WhatsApp으로 라우팅해 원격 승인/거부
- **Stop**: Claude가 멈출 때마다 자동으로 "계속해" 찌르기

단순 대화형 도구 → '프로그래밍 가능한 에이전트 프레임워크'로 격상시키는 기반 기술.

---

## 5/ Cowork Dispatch

"코딩을 안 할 때는 Dispatch를 쓰고 있다" — Boris Cherny, 매일 사용.

Claude Desktop 앱의 보안 리모트 컨트롤. Slack, 이메일, 파일 관리 등 비코딩 작업을 위임. 컴퓨터 앞에 없을 때도 노트북 위의 Claude가 일한다.

---

## 6/ Chrome 확장 프로그램 — 검증 루프

**핵심 원칙:** Claude에게 자기 결과물을 검증할 수 있는 방법을 줘야 한다.

Chrome/Edge 확장 설치 → Claude Code가 브라우저를 직접 열어 UI 테스트 → 결과 만족까지 반복 수정. 검증 루프 유무가 품질을 2~3배 차이 나게 만든다.

---

## 7/ Desktop 앱 내장 브라우저

코드 작성 → 서버 실행 → 브라우저 테스트 → 반복 수정. 설정 없이 바로 가능.

---

## 8/ 세션 포크 — 실험은 가지치기로

- 세션 내: `/branch`
- CLI: `claude --resume <session-id> --fork-session`

컨텍스트를 보존한 채 분기 생성. 아키텍처 결정, 리팩토링 방향 탐색에 유용.

---

## 9/ /btw — 메인 작업 중단 없이 사이드 쿼리

에이전트가 일하는 중에 별도 질문. Boris Cherny가 "항상(all the time)" 쓴다고 강조. 개발자의 flow state를 보호하는 장치.

---

## 10/ Git Worktrees — 병렬 Claude의 비결

Boris Cherny: "터미널에서 5개, 웹에서 5~10개" 병렬 운영.

- `claude -w` 로 새 세션을 워크트리에서 시작
- Desktop 앱에서 "worktree" 체크박스

같은 저장소를 건드리면서도 충돌 없음. 대규모 병렬 작업에 필수.

---

## 11/ /batch — 수백 개 에이전트 팬아웃

루프가 시간 축 자동화라면, 배치는 **규모 축 자동화**.

실행 시 Claude가 인터뷰 진행 → 작업 분해 → 워크트리 에이전트 수십~수천 개 생성. 대규모 코드 마이그레이션·리팩토링에서 소규모 팀 전체의 생산성 발휘.

---

## 12/ --bare 플래그 — SDK 시작 속도 10배

비대화형/스크립트 사용 시 CLAUDE.md, 설정 파일, MCP 서버 탐색을 건너뜀. 시작 속도 최대 10배. Boris Cherny: "기본값을 --bare로 안 한 건 설계 실수였다" — 향후 버전에서 기본값 변경 예정.

```bash
claude -p --bare --system-prompt "..." --settings settings.json
```

---

## 13/ --add-dir — 멀티 레포 통합

`--add-dir` 또는 세션 중 `/add-dir` → 추가 폴더 접근 권한 + 인식 부여.

팀 단위: `settings.json`에 `additionalDirectories` 설정으로 자동 로드.

---

## 14/ --agent — 커스텀 에이전트

`.claude/agents` 디렉토리에 에이전트 정의 → `claude --agent=<이름>` 실행. 각 에이전트는 고유한 시스템 프롬프트 + 도구 세트 보유.

예: `code-simplifier`(코드 완성 후 단순화), `verify-app`(E2E 테스트). '하나의 거대한 에이전트'가 아닌 '역할별 모듈형 에이전트' 조합.

---

## 15/ /voice — 말로 코딩하기

Boris Cherny: 타이핑보다 말로 코딩하는 시간이 더 많다.

- CLI: `/voice` → 스페이스바 누르는 동안 음성 입력
- Desktop: 음성 버튼 / iOS: 기기 받아쓰기

2026년 3월 기준 20개 언어 지원 (한국어 포함, 3월에 10개 언어 추가).
