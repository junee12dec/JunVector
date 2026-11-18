---
title: "Lemo-Opuscar — Claude Code가 코드만으로 영상을 만드는 스타일 라이브러리 99종 (수채화·3D·모션그래픽)"
date: 2026-11-18
tags: [ai/video, ai/skill, ai/claude-code, design/motion]
description: "스타일 하나를 고르고 이야기를 말하면, 에이전트가 영상 생성 모델 없이 canvas·WebGL 프레임 렌더링, 무료 음원 작곡, TTS 내레이션, 믹싱까지 코드로 짧은 영상을 만든다. 15개 분류 99개 스타일마다 데모 영상과 STYLE.md가 있고, 브랜드에 맞춘 내 스타일도 저장해 쓸 수 있다."
source: "https://www.threads.com/@hyunsoo.it/post/Df4y73mD7Bo"
---

# Lemo-Opuscar — Claude Code가 코드만으로 영상을 만드는 스타일 라이브러리

- 저장소: https://github.com/lemomo-ai/lemo-opuscar (저장 시점 약 18,200⭐, 만든 곳: Lemomo / LemoLab)
- 갤러리: https://lemomo-ai.github.io/lemo-opuscar/ (영어·중국어)
- 소개 글: @hyunsoo.it (Threads, 2026-11-18) — "수채화, 3D, 모션그래픽… 이 영상들 전부 Claude가 코드로 만든 것. 설명 영상이나 제품 소개를 만들 사람은 갤러리부터 볼 만하다."

## 무엇인가

**99개 영상 스타일**을 15개 분류로 모은 Claude Code용 라이브러리. 스타일마다 스타일 프롬프트(`STYLE.md`)와, Claude가 영상 모델 없이 **전부 코드로 만든** 데모 영상이 붙어 있다.

- 그림: canvas·WebGL 페이지를 프레임 단위로 렌더링
- 음악: 무료 샘플 라이브러리로 새로 작곡
- 내레이션: TTS
- 영상 생성 모델·스톡 영상은 쓰지 않는다

## 쓰는 법

1. **스타일 고르기**: 갤러리에서 그림의 생김새로 찾거나, 만들 것(설명 영상, 출시 영상, 뉴스, 뮤직비디오)으로 검색
2. **데모 보기**: 스타일마다 짧은 데모 영상, 스틸 컷, 어디에 맞는지, 에이전트가 따를 `STYLE.md`가 있는 페이지
3. **에이전트에게 한 문장으로 요청**:

   ```text
   Make a film in the Neon Tubes style about the coffee farm my family runs.
   Make a 45-second film in the watercolor style about the coffee farm my family runs. Warm female narrator.
   ```

   길이, 내레이터, 내 사진·음악을 더할 수 있다. 스타일 이름은 영어·중국어·폴더 이름 모두 된다.

시작하면 한 번에 묻는다: 주제에서 정하지 못한 것, 내 목소리·음악·자료가 있는지, **스토리보드를 먼저 볼지**(보겠다고 하면 실제 스타일로 핵심 장면을 그려 한 번 멈춘다).

## 에이전트가 작은 스튜디오처럼 일한다

| 파일 | 에이전트에게 주는 것 |
|------|----------------------|
| `DIRECTOR.md` | 연출: 이야기, 소리, 리듬, 카메라, 연기, 자체 점검 |
| `TECHNIQUE.md` | 제작: 프레임 렌더링, 음성, 음악, 믹싱 |
| `styles/<스타일>/STYLE.md` | 그 스타일이 어떻게 보이고 들리는지 (이야기는 사용자 몫) |

## 설치

```sh
claude plugin marketplace add lemomo-ai/lemo-opuscar
claude plugin install lemo-opuscar@lemolab
```

- 처음 쓸 때 안내서·도구·스타일 프롬프트를 `~/lemo-opuscar`에 내려받고, 영상 프로젝트는 시작한 폴더에 만든다.
- 뭘 할지 모르겠으면 `/lemo-opuscar:lemo-opuscar`만 입력하면 언어와 할 일(라이브러리 스타일로 영상, 내 스타일 만들기, 저장한 스타일로 영상)을 묻는다.
- Claude용으로 만들었다 (Fable·Opus·Sonnet). Claude Code에서 `/effort high`로 두라고 권한다. 다른 모델은 스타일을 잘 재현하지 못할 수 있다.

## 시작하기 전에 (README)

- 영상 하나에 에이전트 기준 **약 30~60분**과 상당한 토큰이 든다.
- Node 20+, ffmpeg 7+, Python 3.11+(또는 uv)가 필요하고 나머지는 에이전트가 설치한다. Ubuntu 24.04 기본 ffmpeg 6.1은 너무 오래돼 정적 빌드를 써야 한다.
- 스타일 3개(Manga Panels, Text Flash Cuts, Comic History Cartoon)는 캐릭터를 그릴 이미지 생성 도구(Codex CLI 등)를 따로 준비해야 한다.
- 기본 출력 1920×1080, 24fps.

## 내 스타일 만들기

브랜드 색·로고·캐릭터·채널 분위기에 맞춰 라이브러리 스타일을 바꾸거나, 빈 페이지에서 새로 만든다.
1. 한 번에 한 질문씩 계획 (용도, 플랫폼 비율, 브랜드 요소, 바꿀 것, 이름)
2. 바뀌는 것과 비용을 요약해 보여 주고, 동의 전에는 아무것도 쓰지 않는다
3. 실제 코드로 그린 스타일 프레임 한 장을 원본과 나란히 비교
4. 15~30초 데모 영상 (음악·효과음 포함)
5. 마음에 들면 `~/lemo-my-styles/<이름>/`에 저장해 다음 영상에 이름으로 부른다

## 15개 분류

| # | 분류 | 내용 |
|---|------|------|
| 01 | Edit & Documentary | 실제 영상·문서·데이터를 편집: 자막 뉴스, 뉴스릴, 몽타주, 방송 그래픽 |
| 02 | Painting & Illustration | 한 획씩 그린 그림: 크레용, 수채화, 유화, 펜과 담채, 색연필 (5종) |
| 03 | Sketch & Board | 설명하며 그림: 화이트보드, 분필, 마커, 스케치노트, 졸라맨 |
| 04 | Traditional Crafts | 수묵화, 그림자극, 우키요에, 전지 공예, 스테인드글라스, 금박 |
| 05 | Print & Printmaking | 리소그래프, 하프톤, 목판화, 동판화, 실크스크린, 콜라주 |
| 06 | Graphic & Type | 평면 도형과 글자: 스위스 그리드, 타이틀 시퀀스, 픽토그램, 실루엣 (8종) |
| 07 | Line Diagrams | 작동 원리를 보여 주는 선화: 청사진, 단면도, 매뉴얼, 분해도 |
| 08 | Cartoons | 1930년대 러버호스, 80년대 셀 애니메, 시트콤 툰, 만화 칸 |
| 09 | Games | 16비트 픽셀 RPG, 2.5D 픽셀 아트, 마이크로게임, 게임쇼 |
| 10 | Film & Tape | 무성영화, VHS 파운드 푸티지, CRT 터미널, 긁힌 필름, 이중 노출 |
| 11 | Screens & Interfaces | 화면·인터페이스 |
| 12 | Light & Lines | 빛과 선 |
| 13 | 3D & Miniature | 실제 3D 장면과 작은 세계: 브릭, 팝업북, 틸트시프트 도시, 유리, 디오라마 (8종) |
| 14 | Instruments & Evidence | 계기·증거 |
| 15 | Data & Maps | 데이터·지도 |

11·12·14·15는 README에 분류 이름만 글자로 있어서 이름만 옮겼다.

첨부 이미지 3장의 데모 예:
- 02 Painting & Illustration: Crayon Picture Book "The Moon Can't Sleep" (0:52), Watercolor Brush "Follow the Rain" (1:54), Impasto Oil Painting "The Colour of Rain" (0:40), Urban Sketch · Pen & Wash "Where the Wind Went" (0:33), Colored-Pencil Science Illustration "The Other Half" (0:51)
- 06 Graphic & Type: Swiss Motion Graphics "Five Rules for a Poster", 60s Spy Title Sequence "The Velvet Cipher", Art Deco "Midnight at the Starlight Hotel", Pictogram Motion "Left Behind", Bauhaus Shapes "COMPOUND", Scale Zoom Explainer "The Long Way Down"
- 13 3D & Miniature: Brick Toy "Rocket from Spare Parts" (0:54), Paper Pop-up Book "Pip's Paper Adventure" (2:13), Tilt-Shift Miniature "Toy Town Rush Hour" (0:38)

## 라이선스 (README 요약)

- **코드**: MIT
- **문서**(각 스타일의 `STYLE.md`, `DIRECTOR.md`·`TECHNIQUE.md` 등 안내서, 이미지 생성 프롬프트): CC BY-NC 4.0 — 비상업적 공유·수정 가능. 단, 이 문서로 내 영상(상업 영상 포함)을 만드는 것은 된다.
- **데모 영상·포스터·스틸**: CC BY 4.0 — "Lemo-Opuscar by Lemomo (LemoLab)" 표기하면 상업적 사용 가능.
- **라이브러리로 만든 내 영상**: 내 것. 상업용도 되고 출처 표기 의무 없음 (다만 안에 쓴 제3자 소재는 각자의 조건을 따른다).
- 일부 내레이션 트랙 6개는 TTS 서비스 조건 때문에 CC BY 4.0에서 제외된다.
