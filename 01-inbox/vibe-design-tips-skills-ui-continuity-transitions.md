---
title: "Vibe Design Tips 스킬 — 바이브 코딩 제품의 완성도를 올리는 디자인 팁 21개 (화면 전환은 진단부터)"
date: 2026-11-20
tags: [ai/skill, design/motion, design/ui]
description: "디자인 규칙이나 효과 하나씩을 라이브 데모와 함께 담은 팁 21개를 Claude Code·Codex·Cursor 스킬로 묶었다. 제품 UI를 점검해 바꿀 곳을 제안하고 고른 팁만 적용한다. 015번 화면 전환 가이드는 효과부터 붙이지 않고 흐름이 끊기는 곳을 먼저 찾는다."
source: "https://www.threads.com/@ehddudrlaa/post/Df9ZDj-E_Wc"
---

# Vibe Design Tips 스킬 — 디자인 팁 21개

- 저장소: https://github.com/kubai087/vibedesign-skills (버전 2026.11.20)
- 사이트·데모: https://vibedesign.tips
- 만든 사람: Kubai — 볼트의 [[kubai-icons-animated-2600-claude-skill|kubai-icons]]를 만든 사람과 같다
- 시리즈 이름: "999 tips to make your vibe-coded product feel crafted" (바이브 코딩한 제품을 정성 들인 것처럼 만드는 999가지 팁)
- 소개 글: @ehddudrlaa (Threads, 2026-11-20) — 015번 화면 전환 가이드를 중심으로 정리

## 설치·사용

AI 코딩 도구에 이렇게 말한다:

```text
Install the kubai-design-tips Skill by following https://raw.githubusercontent.com/kubai087/vibedesign-skills/main/INSTALL.md
```

Claude Code에서 직접 설치:

```sh
git clone --depth 1 https://github.com/kubai087/vibedesign-skills.git ~/.vibedesign-skills
ln -sfn ~/.vibedesign-skills/skills/kubai-design-tips ~/.claude/skills/kubai-design-tips
```

사용:

```text
/kubai-design-tips review the UI of this project      # 제품 UI 점검 → 바꿀 곳 제안 → 고른 팁 적용
/kubai-design-tips 019                                # 번호로 팁 하나 지정
/kubai-design-tips add scroll cards to the landing page
```

`kubai-design-tips` 하나에 모든 팁이 들어 있고, 팁마다 따로 쓰는 스킬도 있다.

## 015번 — 화면 전환은 진단부터 (UI continuity)

소개 글이 정리한 내용:

1. **핵심은 화면 사이의 연결**: 누른 요소가 다음 상태로 이어지게 한다. 화면이 바뀌어도 같은 요소라는 걸 알아볼 수 있게 만든다.
2. **전환 시간의 시작값** (휴대전화 기준, 데스크톱은 약 2/3):
   - 전체 화면 열기: 450~700ms
   - 메뉴·바텀 시트: 350~500ms
   - 탭 표시: 400~450ms
3. **움직임 줄이기 설정도 함께**: 이동·확대 효과를 빼고 약 150ms 동안 화면을 겹쳐 전환하는 방식으로 대체한다.
4. **프롬프트도 진단부터**: 프로젝트 읽기 → 끊기는 곳 찾기 → 개선안 최대 10개 보고 → 사용자 승인 후 하나씩 구현.

작성자 의견: 혼자 앱을 다듬을 때 이 점검 순서부터 써 볼 만하다.

## 팁 21개

| 번호 | 팁 | 내용 |
|------|-----|------|
| 001 | Skeuomorphic buttons | 누르는 느낌이 있는 입체 버튼 |
| 002 | Cascade menu | 계단식 메뉴의 안전 영역과 지연 |
| 003 | ASCII and dither | ASCII·픽셀 디더 효과 |
| 004 | Continuous corners | 연속 곡률 모서리 |
| 005 | Drag to reorder | 비켜 주는 움직임이 있는 드래그 정렬 |
| 006 | Book cards | 마우스를 올리면 책처럼 펼쳐지는 카드 |
| 007 | Type switches | 한중영 혼합 타이포 CSS 설정 |
| 008 | Wiki layout | PC·모바일 모두 맞는 위키 레이아웃 |
| 009 | Overlays | 떠 있는 창 컴포넌트 고르는 규칙 |
| 010 | Liquid glass | 리퀴드 글래스 재질 |
| 011 | Easing curves | 상황별 이징 곡선 고르기 |
| 012 | Message bubbles | 메시지 말풍선의 재질과 움직임 |
| 013 | Shockwave glow | 충격파 빛 효과 |
| 014 | Card delete | 카드가 사라지는 네 가지 효과 |
| **015** | **UI continuity** | **화면 연속성 진단과 개선** |
| 016 | Toast or notification | 토스트와 알림 중 고르기 |
| 017 | Loading states | 로딩 상태 진단과 개선 |
| 018 | Holo card | 기울이고 뒤집히는 홀로그램 카드 |
| 019 | Scroll cards | 스크롤로 움직이는 카드 다섯 가지 |
| 020 | Choice controls | 선택 컨트롤 진단과 개선 |
| 021 | Ring cards | 원형으로 도는 카드와 흐르는 그라데이션 |

각 팁마다 https://vibedesign.tips/<번호>-<이름>/ 에 데모가 있다.

## 참고

- 저장 시점 별 3개의 새 저장소다. 라이선스 표기는 확인하지 못했다.
- 015번 팁 본문은 직접 읽지 않았고, 수치와 순서는 Threads 글 기준이다.
