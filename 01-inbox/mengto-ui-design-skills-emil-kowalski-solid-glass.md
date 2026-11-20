---
title: "Meng To가 고른 UI 디자인 스킬 — Emil Kowalski 애니메이션 스킬·MengTo/skills·Solid Glass"
date: 2026-11-18
tags: [ai/skill, design/motion, design/ui, design/system]
description: "에이전트에 디자인 감각을 주는 UI 스킬 6개 중 볼트에 없던 3개. 애니메이션 실수를 잡는 Emil Kowalski의 스킬 모음, 화면 녹화를 상세 프롬프트로 바꾸는 Meng To의 스킬 모음, 평면 UI와 리퀴드 글래스 사이의 AI 앱용 디자인 시스템 Solid Glass."
source: "https://www.threads.com/@mengto/post/Df4JJlVhz1l"
---

# Meng To가 고른 UI 디자인 스킬

@mengto (Meng To, Threads 2026-11-18)의 "에이전트에 진짜 감각을 주는 UI 디자인 스킬 개인 목록" 6개 중, 볼트에 없던 3개를 원문(GitHub README)까지 읽어 정리했다.

나머지 3개는 볼트에 이미 있다:
- Impeccable ("anti-slop 페이지가 정말 좋다") → [[impeccable-ai-design-skill-package]]
- Stageshow by Benji Taylor ("가짜 UI 스틸과 벤토 그리드") → [[stageshow-faux-product-ui-agent-skill]]
- Open Design ("로컬 우선 오픈소스 AI 디자인 스튜디오") → [[open-design-claude-design-95-opensource]]

## 1. Emil Kowalski의 UI·애니메이션·인터랙션 스킬

- 저장소: https://github.com/emilkowalski/skills · 스킬별 안내: https://aiforui.dev/skills (이 사이트는 저장 시 네트워크 정책에 막혀 읽지 못했고, 아래는 README 기준)
- 설치: `npx skills@latest add emilkowalski/skills`
- 만든 사람: Vercel·Linear에서 일한 디자인 엔지니어. 토스트 라이브러리 Sonner의 제작자.
- **왜**: 에이전트는 애니메이션 재료를 잘못 고른다. 예를 들어 들어오는 애니메이션에 `ease-out`이 아닌 `ease-in`을 쓴다. 이런 작은 실수가 쌓여 인터페이스의 완성도를 가른다. 스킬은 에이전트가 할 수 있는 작은 실수들과 고치는 법을 나열한다.
- 작성자 말: "AI는 전문성을 대신하지 않고 증폭한다. 그러니 코딩·디자인 등 전문성을 길러라."

| 스킬 | 하는 일 |
|------|---------|
| emil-design-eng | 핵심 스킬. 주로 애니메이션, 일부 디자인 조언 |
| animate | 곡선·길이·속성을 제대로 골라 애니메이션을 처음부터 만든다 |
| animate-expo | 같은 기준을 React Native·Expo에 (제스처, 시트, 햅틱, 화면 전환) |
| review-animations | 작성자 규칙으로 애니메이션을 엄격하게 리뷰 |
| improve-animations | 코드베이스 전체 애니메이션을 점검해 우선순위가 매겨진 실행 계획을 만든다 |
| find-animation-opportunities | 모션이 진짜 도움이 될 곳과 움직이면 안 될 곳을 찾는다 |
| remove-animations | 필요 없는 애니메이션을 뺀다 (단축키 동작의 모션, 섹션마다 페이드인, 툴팁마다 지연) |
| choreograph | 함께 움직이는 요소들의 선후·병렬·정지를 조율 |
| animation-performance | 프레임이 떨어지는 애니메이션을 고친다 |
| animation-vocabulary | 정확한 용어로 원하는 애니메이션을 AI에게 요청하는 법 |
| apple-design | WWDC 디자인 세션의 원칙을 웹용으로 정리 |
| gestures | 손가락을 1:1로 따라가고 놓는 속도를 이어받는 드래그·스와이프·시트 |
| pick-ui-library | 직접 짜거나 버려진 패키지를 쓰는 대신 믿을 만한 라이브러리를 고르게 함 |
| prototype | 설명한 UI를 여러 버전으로 만들어 전환하며 비교 |
| mobile-native | 웹 앱을 휴대폰에서 네이티브처럼 (hover 고착, 탭 하이라이트, 100vh 버그, 입력 시 확대, safe area 등) |
| break-ui | 긴 이름·빈 목록·큰 숫자 같은 최악의 데이터로 UI를 깨뜨려 본다 |
| **learn-taste** | 세션 끝에 실행. 직접 고친 것까지 모든 디자인 수정을 모아 이유와 함께 `DESIGN.md`의 규칙으로 바꾼다 |
| ask-emil | 상황을 말하면 맞는 스킬이나 순서를 알려 준다 |
| ask-sonner | Sonner 설정·스타일·문제 해결 가이드 |

## 2. MengTo/skills — Meng To 본인의 UI·웹 디자인·일러스트 스킬

- 저장소: https://github.com/MengTo/skills
- Codex·Claude·Cursor 등으로 풍부한 UI, 플레이 가능한 게임, 프론트엔드 시스템, 에이전트 루프, 자동화를 만드는 스킬 모음.
- **대표 웹 디자인 흐름 4개**:
  1. Video to Super Prompt — 디자인·랜딩 페이지·애니메이션의 화면 녹화를, 한 번에 HTML로 만들 수 있을 만큼 상세한 프롬프트로 바꾼다
  2. HTML to Interaction Prompts — 기존 HTML 페이지를 섹션·애니메이션·버튼·hover·WebGL 효과 단위의 재사용 프롬프트로 쪼갠다
  3. Stitched Full Page Capture — 히어로만이 아니라 페이지 전체를 캡처해 구조·흐름·위계의 참고로 준다
  4. Daily UI Inspiration — 둘러보기·캡처·분석·프롬프트 생성을 묶어 좋은 랜딩 페이지를 프롬프트 묶음으로 만드는 루프
- 그 밖에: 3D 렌더링 스킬(사실적인 물, 수중 빛줄기, 가상 투어, 사계절 등), 일러스트 스킬(손으로 쓴 SVG 일러스트 스타일 14종 — 평면·외곽선 만화, 하프톤, 한 줄 그림, 아이소메트릭, 빈티지 엠블럼 등).
- **철학**: 프롬프트는 자산이다(파일로 저장하고 버전 관리), 분위기보다 명세(명확한 제약·위계, 한 번에 1~2개만 바꾸기), 문단보다 레퍼런스(스크린샷이 글꼴·간격·색·리듬을 전달), 스킬은 운영 절차다(언제 쓰는지, 먼저 할 일, 기본값, 피할 실수).
- 같은 작성자의 다른 노트: [[mengto-complete-shelf-3d-ebook-bookshelf|Complete Shelf]]

## 3. Solid Glass — 평면 UI와 리퀴드 글래스 사이

- 저장소: https://github.com/deeplethe/solid-glass (MIT, 저장 시점 약 2,300⭐) · 사이트: https://deeplethe.github.io/solid-glass
- **AI 애플리케이션용 디자인 시스템**. 멀리서는 단단해 보이고 가까이서는 미묘한 유리 질감이 보인다. 섬세한 하이라이트, 가는 테두리, 부드러운 그림자로 깊이를 만들고, 투명함·굴절보다 명료함과 안정감을 앞세운다.
- **왜 이 위치인가**: 평면 디자인은 질감이 없는 불투명 덩어리이고, 리퀴드 글래스는 거의 투명해서 글이 많은 화면에서는 배경과 글자가 싸운다. Solid Glass는 윤곽만 비치게 해 유리임을 알 만큼만, 읽기를 방해하지 않을 만큼만 보인다.
- **AI 앱에 맞춘 이유**: 스트리밍되는 답변, 작업하는 에이전트, 사람의 결정을 기다리는 화면처럼 정보가 계속 바뀐다. 중립적인 면으로 산만함을 줄이고, 깊이로 위계를 만들고, 색과 모션은 의미 있는 피드백에만 쓴다.
- **설치**: CSS 한 장. shadcn/ui 컴포넌트를 `data-slot`과 기존 클래스로 찾아 입히므로 기존 컴포넌트를 고칠 필요가 없다 (React 19, Tailwind CSS 4, Base UI 기반 shadcn/ui).

  ```bash
  npx shadcn@latest add deeplethe/solid-glass/solid-glass
  ```

- **에이전트 화면용 자체 컴포넌트**: `status-glyph`(턴이 진행 중인지와 무엇을 하는지 세 개의 빛점으로), `turn-status`, `composer`(입력창), `tool-steps`(거친 단계), `diff-view`, `ask-card`(에이전트의 질문), `context-ring`(컨텍스트 사용량), `task-notice`, `reasoning`.
- 다크가 기본 설계이고 라이트도 있다. Create 페이지에서 두께·색조·반경·테두리·블러를 조절해 CSS를 뽑을 수 있다.
