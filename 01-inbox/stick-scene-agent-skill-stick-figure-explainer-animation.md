---
title: "stick-scene — 한 줄 설명을 졸라맨 애니메이션 장면으로 만들어 주는 에이전트 스킬 (roadmap.sh 제작자, MIT)"
date: 2026-11-18
tags: [ai/skill, design/motion, design/diagram]
description: "제품이 하는 일이나 어려운 개념을 한 줄로 말하면, 에이전트가 의존성 없는 canvas 하나짜리 손그림 졸라맨 애니메이션을 만들어 페이지에 넣어 준다. 랜딩 페이지 기능 설명, 교육 자료, 발표에 쓸 수 있다."
source: "https://www.threads.com/@choi.openai/post/Df4nc-yEVgs"
---

# stick-scene — 한 줄 설명을 졸라맨 애니메이션 장면으로 만드는 에이전트 스킬

- 저장소: https://github.com/nilbuild/stick-scene (MIT, 만든 사람: roadmap.sh의 Kamran Ahmed)
- 설치: `npx skills add nilbuild/stick-scene`
- 소개 글: @choi.openai (Threads, 2026-11-18) — "복잡한 개념을 설명하는 졸라맨 애니메이션도 AI로 만들 수 있다. 교육 자료, 발표, 콘텐츠 제작에도 활용해 볼 만하다."

## 무엇을 하나

에이전트가 **제품이 하는 일을 보여 주는 작은 졸라맨 장면**을 그린다.
- 장면 하나는 의존성 없는 `<canvas>` 하나다.
- 평소에는 숨 쉬고 두리번거리며 조용히 있다가, 화면에 들어오거나 클릭·hover하면 짧은 동작을 한다.
- 첨부 영상 첫 화면의 예: "Caching" 장면 — 사용자가 1번째 요청에서 miss, 2번째에 사본을 보관, 3번째에 hit. 그 밖에 Getting started, Tech debt, Voice typing, Overnight queue, Binary search, Rollbacks, Rate limiting, Stacks, Quick fix tower 같은 주제 버튼이 보인다.

## 만드는 법

```bash
/stick-scene [보여 주고 싶은 것]
/stick-scene a scene for the hero of this landing page
/stick-scene show that our CLI turns a YAML file into JSON
/stick-scene one scene for each feature section on the homepage
/stick-scene show an agent fixing the comments I leave on a diff
```

에이전트가 하는 일:
1. 프로젝트를 읽는다
2. 아이디어 2~3개를 제안해 고르게 한다
3. 장면을 쓴다
4. **프레임마다 렌더링해 겹치거나 잘리는 것이 없는지 확인한다**
5. 페이지에 넣는다

## 고쳐 달라고 할 때

무엇이 이상한지 그대로 말하면 된다.
- "메모가 얼굴을 가린다", "말풍선이 가장자리를 넘는다"
- "로봇이 시작하기 전에 잠깐 생각하게 해 줘"
- "더 느리게", "반복해 줘", "클릭할 때만 재생"
- "우리 브랜드 초록색으로", "청록색 에이전트를 하나 더"
- "재생되는 동안 페이지의 단계에 불을 켜 줘"

## 예시 장면 (`examples/`)

| 장면 | 내용 |
|------|------|
| Review | 줄에 댓글을 달면 에이전트가 고치고 내가 승인 |
| Database | 레버를 당기면 데이터베이스가 솟아오름 |
| Converter | YAML을 넣고 손잡이를 돌리면 JSON이 튀어나옴 |
| CI | 커밋을 워크플로우 아래로 밀어 넣음 |
| Login | 한 번 로그인하면 쿠키가 문을 열어 줌 |
| Queue | 이슈가 줄을 서고 에이전트가 밤새 처리 |
| Models | 스포트라이트가 모델을 고르고 손잡이가 노력 정도를 정함 |
| 그 밖에 | Email, Reports, Recording, Highlights, Messages |

## 페이지에 넣기

`runtime/stick.js`와 장면 파일을 사이트의 정적 폴더에 복사하고:

```html
<stick-scene scene="db-playground" play="view" style="height: 230px"></stick-scene>
<script src="/scenes/stick.js" defer></script>
<script src="/scenes/db-playground.js" defer></script>
```

| 속성 | 뜻 |
|------|-----|
| `scene` | 장면이 등록한 id |
| `play` | `view`(화면에 들어오면 한 번, 이후 클릭), `click`, `hover`, `loop`, `idle` |
| `no-floor` / `no-ground` | 바닥 띠 / 바닥선 없애기 (흰 페이지용) |
| `zoom` | 상자 안 그림 배율 (기본 1) |
| `label` | 스크린 리더가 읽을 문장 (기본은 장면 자체의 문장) |

크기는 CSS로 정한다. 화면 밖 장면은 그리지 않고, 모션 줄이기 설정이면 정지 화면 한 장만 보여 준다.
