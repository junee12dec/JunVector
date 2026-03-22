---
title: "10분 만에 완성하는 스크롤 애니메이션 포트폴리오 (AI 도구 활용)"
date: 2026-03-19
tags: [dev/frontend, productivity/vibe-coding, dev/portfolio]
description: "Google Whisk, ezgif, Google Antigravity를 조합해 스크롤 연동 이미지 시퀀스 애니메이션이 포함된 프리미엄 포트폴리오 웹사이트를 10분 안에 구축하는 단계별 가이드."
---

# 10분 만에 완성하는 스크롤 애니메이션 포트폴리오

AI 기반 도구를 사용하여 애니메이션 비주얼이 포함된 프리미엄 개인 웹사이트를 만드는 단계별 가이드.

## 전체 프로세스 개요

| Phase | 내용 |
|-------|------|
| Phase 1 | 비주얼 에셋 생성 (Google Whisk) |
| Phase 2 | 웹용 변환 (ezgif) |
| Phase 3 | AI 엔지니어링 (Google Antigravity) |

---

## Phase 1 — 비주얼 에셋 생성

### STEP 01: 정적 프레임 생성 (Google Whisk)

접속: `labs.google/fx/tools/whisk`

자신의 사진을 **Subject**로 업로드 후 아래 프롬프트 입력:

> **Whisk 스타일 프롬프트**
>
> - 스타일: 딥 블루와 파격적인 오렌지가 대비되는 고대비 듀얼 톤 조명의 시네마틱 포트폴리오
> - 무드: 드라마틱하고 프리미엄, 영화 포스터 히어로 섹션 같은 현대적 느낌
> - 조명: 상단/전면 강한 웜 오렌지/레드 키 라이트 + 반대편 쿨 블루 그라데이션 필 라이트
> - 배경: 상단 다크 네이비 → 하단 웜 오렌지/레드 그라데이션
> - 피사체: 위를 응시하는 클로즈업, 영감을 주는 영웅적 분위기
> - 카메라: 로우 앵글, 매끄럽고 전문적인 글로시 마감, 선택적 미세 필름 그레인
> - 구도: 피사체 중앙 배치, 텍스트 오버레이를 위한 좌우 여백 확보

### STEP 02: 이미지 애니메이션화

마음에 드는 프레임 선택 → **Animate** 버튼 클릭

> 애니메이션 프롬프트: `"A smooth cinematic 3D transition"`

---

## Phase 2 — 웹용 애니메이션 변환

### STEP 03: WebP 변환 (ezgif)

`ezgif.com/video-to-webp` 접속 → 애니메이션 업로드

| 설정 | 값 |
|------|-----|
| Resolution | Original |
| FPS | 15 (또는 가장 가까운 기본값) |
| Quality | 85 |

### STEP 04: 프레임 추출

1. ezgif에서 **Split** 버튼 클릭
2. ZIP 파일 다운로드 후 압축 해제

---

## Phase 3 — Google Antigravity로 코드 생성

### STEP 05: 프로젝트 설정

`antigravity.google` (무료 다운로드)

1. 압축 해제한 프레임 폴더를 드래그 앤 드롭
2. 폴더 이름을 반드시 **`sequence`** 로 변경 (AI가 프레임을 찾는 데 필수)

### STEP 06: AI 코드 생성

Agent Chat 패널 → **Gemini 3 Pro (high)** 선택 → 아래 프롬프트 실행:

```
역할: Next.js, Framer Motion, 고성능 스크롤 인터랙션 전문 시니어 크리에이티브 개발자.

작업: 하이엔드 스크롤링 개인 포트폴리오 웹사이트 구축.
핵심 메커니즘: 사용자가 스크롤할 때 이미지 시퀀스를 훑는 스크롤 링크 애니메이션.

기술 스택:
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- HTML5 Canvas (성능용)

에셋: /sequence/ 폴더 내 순차적으로 이름이 지정된 WebP 프레임 (약 89개).

주요 컴포넌트:
- ScrollyCanvas.tsx: 500vh 부모 스티키 캔버스, 이미지 프리로드 및 스크롤 인덱스 매핑
- Overlay.tsx: 캔버스 위 패럴랙스 텍스트 (0% 이름, 30% 소개, 60% 비전)
- Projects.tsx: 스크롤 존 이후 배치되는 글래스모피즘 그리드

규칙:
- 비디오 태그 대신 캔버스 사용
- 반응형 object-fit:cover 적용
- Nano Banana UI 구성 요소 활용
```

### STEP 07: 미리보기 및 개인화

```bash
npm run dev
```

이후 AI에게 프로젝트, 경력, 기술 정보를 제공하면 콘텐츠 자동 채워짐.

---

## 도구 요약

| 도구 | 용도 |
|------|------|
| **Google Whisk** | AI 이미지·애니메이션 생성 (`labs.google/fx/tools/whisk`) |
| **ezgif** | 비디오 → WebP 변환 + 프레임 분할 (`ezgif.com/video-to-webp`) |
| **Google Antigravity** | AI 기반 Next.js 스캐폴딩 (`antigravity.google`) |
| **Nano Banana** | UI 컴포넌트 라이브러리 (Antigravity를 통해 접속) |

## 핵심 기술 포인트

- **HTML5 Canvas 사용**: `<video>` 태그 대신 캔버스로 스크롤 연동 이미지 시퀀스 재생 → 성능 최적화
- **스티키 캔버스 패턴**: 500vh 높이 컨테이너 + 고정 캔버스로 스크롤 진행도에 따라 프레임 인덱스 계산
- **글래스모피즘 그리드**: 스크롤 존 이후 프로젝트 섹션에 배치
