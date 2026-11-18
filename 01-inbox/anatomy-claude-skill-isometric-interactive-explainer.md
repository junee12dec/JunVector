---
title: "Anatomy — 개념을 실제로 움직이는 아이소메트릭 기계 그림으로 만들어 설명하는 Claude 스킬 (MIT)"
date: 2026-11-18
tags: [ai/skill, design/diagram, productivity/presentation]
description: "기술 개념을 그 원리대로 작동하는 가상의 물건으로 바꿔, 수십 개 부품으로 된 인터랙티브 아이소메트릭 그림(SVG·WebGL·3D)으로 그려 주는 Claude Code 스킬. Claude로 만든 HTML 발표자료가 화제가 된 글에 '이 스킬을 쓰면 딸깍'이라는 추천과 함께 소개됐다."
source: "https://github.com/wheresryan22/anatomy"
---

# Anatomy — 개념을 실제로 움직이는 기계 그림으로 설명하는 Claude 스킬

- 저장소: https://github.com/wheresryan22/anatomy (MIT, 의존성 0, Node 20.10 이상)
- 웹사이트: https://skills.wheresryan.sh/anatomy
- 설치: `npx skills add wheresryan22/anatomy -g` (Claude Code·Antigravity·OpenCode·Codex·MiniMax Code 중 고름. `-a claude-code`로 바로 지정)
- 사용: `/anatomy explain how a token bucket rate limiter works, interactive` (Codex는 `$anatomy`)

## 저장한 계기

@paperlogy_life의 Threads 글(2026-11-18, https://www.threads.com/@paperlogy_life/post/Df3Q2N6jaQC)에 "오늘도 만들어본 html PPT, 클로드 진짜 미쳤냐", 작성자 댓글로 "사운드도 한국스럽게 만들어줬네요"라는 내용이 있었다. 첨부 영상은 첫 화면이 검은 화면이라 무엇을 만들었는지는 확인하지 못했다.

이 글과 함께 "여러분들 이 스킬 사용하시면 딸깍입니다"라며 Anatomy 저장소 링크를 전달받았다. 다만 README에는 발표자료(PPT)를 만든다는 설명은 없고, **설명용 인터랙티브 그림**을 만드는 스킬로 소개돼 있다. 발표자료 안에 넣을 그림을 만드는 데 쓰는 것으로 보인다.

## 무엇을 하나

Claude에게 기술 개념을 설명하는 그림을 요청하면, Anatomy는 **작동 방식 자체가 그 개념인 물건**을 지어낸다.
- 아무것도 바뀌지 않았으면 작업을 건너뛰는 캐시 키 → 모든 핀이 맞아야만 돌아가는 핀 텀블러 자물쇠
- GPU 컨텍스트 하나가 여러 캔버스를 처리 → 프린트 헤드 하나가 16개 칸을 오가는 갠트리 플로터

그다음 그 물건을 수십 개의 작고 입체적인 부품으로 짓고, 제목·힌트·실시간 수치가 있는 카드에 넣는다. 마우스와 키보드에 따라 차분하게 움직이고, 그림에 나오는 모든 숫자는 부품을 움직이는 같은 모델에서 나온다. Claude는 모든 이음매를 확대해 보며 스스로 결과를 점검한다.

## 만드는 그림 3종

| 종류 | 내용 | 예시 |
|------|------|------|
| **SVG** | 기본. 4단계 음영의 입체 부품을 뒤에서 앞으로 칠한다. 단독 HTML 페이지, 스타일이 들어간 `.svg` 파일 하나, React/Next.js 컴포넌트로 낼 수 있다 | dial-indicator, desk-computer, arcade-cabinet |
| **SVG + WebGL** | 불·배기·물·빛 반사·증기처럼 선으로 못 그리는 것을 셰이더로. WebGL이 없어도 SVG는 읽힌다 | raptor-engine, ripple-tank |
| **3D** (베타) | 다이얼·턴테이블 회전, 손가락 굽힘처럼 진짜 3D로 도는 부품만 매 프레임 다시 그린다 | turning-dial |

라이트·다크 테마를 지원하고, 라이트를 먼저 디자인한다.

## 좋은 그림을 얻는 세 가지 습관

1. **그림이 아니라 개념을 말한다.** 무엇을 설명할지와 실제 수치(크기, 개수, 속도, 임계값)를 준다. 물건을 지어내는 것이 일의 대부분이고, 상자와 화살표를 묘사하는 것보다 그 일을 더 잘한다.
2. **또는 물건을 말한다.** 원하는 기계(에스프레소 머신, 분젠 버너, 자물쇠)가 있으면 그것과 움직일 부분을 말한다.
3. **어디에 들어갈지 말한다.** 단독 HTML, SVG 파일 하나, React/Next.js 컴포넌트, 라이트·다크. 만드는 방식이 달라진다.

프롬프트 예: `/anatomy an isometric SVG explaining how a CDN edge cache works, cache hit vs miss, TTL of 60 s, for a dark landing page. Just the SVG file and a PNG preview.`

## 한계 (README)

- **차트 라이브러리가 아니다.** 축·계열·데이터 플롯이 없다. 숫자는 모델이 움직이는 실시간 수치와 부품의 실제 크기·개수로만 나온다.
- **기계·기구·도구·가구를 그린다.** 사람이나 정확한 지도는 그리지 않는다. 짓을 메커니즘이 없는 개념은 약하게 나온다.
- **일부러 느리다.** 부품 목록, 형상, 점검, 두 테마의 이음매 확대까지 긴 세션이 걸린다. 3D 전체 점검은 부품 30개에 15~20분.
- **셰이더는 WebGL이 필요하다.** 모션 줄이기 설정이면 모든 그림이 멈춘다.
