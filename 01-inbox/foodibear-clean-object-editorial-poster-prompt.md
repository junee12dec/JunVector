---
title: "FOODIBEAR 클린 오브제 에디토리얼 포스터 프롬프트 v1.0 — 사진 한 장으로 미니멀 포스터 완성"
date: 2026-07-25
tags: [design/poster, ai/image-generation, ai/prompt-engineering]
description: "사진 한 장을 넣으면 오브제·타이포·여백을 자동으로 잡아주는 에디토리얼 포스터 프롬프트. 음식·인물·동물·제품 등 모든 대상에 적용 가능하며 Oversized Typography + Single Hero Object + Negative Space가 핵심."
source: "https://www.threads.com/share/BAUCpt9UWx/"
---

# FOODIBEAR CLEAN OBJECT EDITORIAL POSTER SYSTEM v1.0

출처: @foodibear_ (Threads)

> 기존 [[food-abstract-graphic-poster-prompt-system|추상 그래픽 포스터 시스템]]과 다른 버전 —  
> 이 프롬프트는 오브제를 추상화하지 않고 **사진 그대로 실사로 유지**한 채 에디토리얼로 구성한다.

---

## 핵심 6요소

```
Oversized Typography
+ Single Hero Object (사진 원본 유지)
+ Generous Negative Space
+ Micro Copy
+ Clean Editorial Composition
+ Subtle Analog Texture
```

## 레이아웃 구조

```
[상단] Micro Copy (Left / Center / Right 분산)
[상단] Oversized Main Typography
       ↓ 여백
[중앙] Hero Object (실사 오브제)
       ↓ 여백
[하단] Bottom Editorial Copy
```

비율: **30~40% 그래픽 + 60~70% 여백**

---

## 핵심 규칙 요약

### 오브제 처리
- 이미지에서 가장 존재감 있는 대상을 Hero Object로 선정
- 형태·실루엣·재질·색상을 원본 그대로 유지 (추상화 금지)
- 오브제 주변 여백 충분히 확보
- subtle contact shadow 허용, 공중 부양 금지

### 타이포그래피
- 메인: Bold Modern Sans Serif, 매우 크게 (포스터 상단)
- 예시: `orange.` / `matcha.` / `STRAWBERRY.`
- 색상: Hero Object에서 추출한 대표 컬러
- 메인 타이포 바로 아래 설명문 금지

### 컬러 시스템
```
배경 1색 (흰색 계열)
+ 메인 액센트 1색 (오브제 추출)
+ 오브제 자연색
```

### 자동 생성 텍스트
1. Main Object Name (1단어 영문)
2. Top Micro Copy 2~3개 (매거진 캡션 톤)
3. Bottom Editorial Copy (1~2줄)

### 포맷
- 비율: **3:4 세로형**
- 배경: pure white ~ very light beige 계열
- 질감: 미세한 paper grain (자세히 봐야 보이는 수준)

---

## 금지 사항

네온·강한 그라데이션·3D 타이포·빈티지 효과·가짜 로고·가짜 가격·AI 비현실적 질감·원본 오브제 변형

---

## 전체 프롬프트 (복사용)

<details>
<summary>프롬프트 전문 펼치기</summary>

```
# FOODIBEAR CLEAN OBJECT EDITORIAL POSTER SYSTEM v1.0

## 1. ROLE
당신은 현대적인 브랜드 캠페인, 독립 매거진, 제품 아카이브,
라이프스타일 에디토리얼을 설계하는
Contemporary Object Editorial Art Director & Poster Designer입니다.

사용자가 첨부한 이미지를 분석하여
사진 속 가장 핵심적인 대상을 하나의 주제로 삼은
3:4 세로형 Clean Object Editorial Poster를 제작합니다.

핵심: Oversized Typography + Single Hero Object + Generous Negative Space
+ Micro Copy + Clean Editorial Composition + Subtle Analog Texture

## 2. REFERENCE IMAGE ANALYSIS
[REFERENCE IMAGE]
사진에서 가장 시각적 존재감이 강한 대상을 Hero Object로 선정.
형태·실루엣·비율·재질·표면 질감·고유 색상·특징적 디테일을 최대한 정확하게 유지.
대상을 임의로 변형하거나 존재하지 않는 요소를 추가하지 않음.

## 3. FORMAT
Poster Ratio: 3:4 Vertical
포스터에서 여백은 핵심적인 디자인 요소.
상단 타이포그래피 + 중앙~중앙하단 Hero Object + 하단 카피 구조.

## 4. VISUAL DIRECTION
Clean / Minimal / Fresh / Editorial / Contemporary / Graphic / Playful but Refined

## 5. BACKGROUND
깨끗한 단색 계열: pure white / soft white / warm ivory / pale cream / very light beige
배경이 Hero Object보다 강하면 안 됨.

## 6. HERO OBJECT
하나의 핵심 대상만. 중앙 또는 중앙 살짝 아래 배치.
subtle contact shadow / soft ambient shadow 허용.
오브제 공중 부양 금지.

## 7. MAIN TYPOGRAPHY
포스터 상단, 거대한 메인 타이포그래피.
대상을 직관적으로 표현하는 짧은 영문 단어 (가능하면 1단어).
예: orange. / matcha. / STRAWBERRY.
Bold Modern Sans Serif / 포스터 가로 폭 대부분 차지.
색상: Hero Object 대표 컬러 또는 포인트 컬러.
메인 타이포 바로 아래 설명문 배치 금지.

## 8. TOP MICRO COPY
최상단에 2~3개의 Micro Copy 분산 배치 (Left / Center / Right).
대상의 맛·향·질감·분위기를 짧고 위트 있게 영어로 표현.
예: "Sweet, bright, and juicy" / "Fresh from the morning" / "Small fruit, big mood"

## 9. BOTTOM COPY
하단에 짧은 1~2줄 Editorial Copy.
예: "Fresh, bright, and made for slow afternoons."

## 10. COLOR SYSTEM
1 Background Color + 1 Main Accent Color (오브제에서 추출) + Natural Object Colors

## 11. TYPOGRAPHY SYSTEM
LEVEL 1: Main Object Name - Extra Large, Bold
LEVEL 2: Top Micro Copy - Small, Editorial caption style
LEVEL 3: Bottom Copy - Small, Light
하나의 Modern Sans Serif 패밀리 안에서 굵기·크기만 조절.

## 12. COMPOSITION
약 30~40% Graphic & Object / 약 60~70% Negative Space
Hero Object와 Main Typography 겹침 금지.

## 13. TEXT GENERATION RULE
이미지 분석 후 자동 생성: Main Object Name + Top Micro Copy 2~3개 + Bottom Editorial Copy
의미 없는 랜덤 영어·가짜 브랜드명·가짜 가격 금지.

## 17. STRICT RULES (금지)
메인 타이포 바로 아래 설명 문단 / 복잡한 레이아웃 / 과도한 그래픽 장식
강한 그라데이션 / 네온 효과 / 3D 타이포 / 레트로 포스터 스타일 / 빈티지 필름 효과
가짜 브랜드 로고 / 가짜 가격 / 의미 없는 영어 / 원본 대상 형태 왜곡
AI 특유의 비현실적인 질감

최종 출력: 3:4 Vertical Contemporary Object Editorial Poster
```

</details>
