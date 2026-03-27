---
title: "Recordly — 자동 줌·커서 애니메이션으로 프로 데모 영상 만드는 오픈소스 화면 녹화 툴"
date: 2026-03-26
tags: [productivity/tools, dev/tools, media/video]
description: "자동 줌, 커서 바운스·모션 블러, 웹캠 오버레이 등 Screen Studio 느낌의 연출을 무료로 제공하는 오픈소스 화면 녹화·편집 도구. Windows·Linux·macOS 모두 지원."
source: "https://github.com/webadderall/Recordly"
---

# Recordly — 자동 줌·커서 애니메이션으로 프로 데모 영상 만드는 오픈소스 화면 녹화 툴

> 그냥 녹화만 해도 데모 영상이 훨씬 프로처럼 나옴. Screen Studio 느낌, 무료.

- 라이선스: AGPL 3.0
- GitHub: https://github.com/webadderall/Recordly

## 핵심 기능

### 녹화·편집
- 화면·창 캡처 → 에디터 직접 연결
- 드래그앤드롭 타임라인으로 트리밍·줌·속도 조절
- 텍스트·이미지·주석 오버레이

### 시각 연출 (핵심 차별점)
| 기능 | 설명 |
|------|------|
| 자동 줌 제안 | 커서 움직임 기반으로 자동 줌 포인트 추천 |
| 커서 스무딩 | 부드러운 커서 이동 |
| 모션 블러 | 커서 이동 시 블러 효과 |
| 커서 바운스 | 클릭 시 커서 튕기는 애니메이션 |
| 웹캠 오버레이 | 버블 형태, 위치 조절, 줌 반응형 스케일링 |
| 프레임 스타일링 | 배경·그라디언트·블러·라운드 모서리 |

### 내보내기
- MP4, GIF (품질·프레임레이트 조절)
- 화면비 프리셋, 출력 크기 커스텀

## 시스템 요구사항

| 플랫폼 | 요구 버전 |
|--------|----------|
| macOS | 12.3+ (Monterey) |
| Windows | Build 19041+ (2020년 5월 이후) |
| Linux | PipeWire 지원 최신 배포판 |

## 설치

- **릴리즈 다운로드**: GitHub Releases 페이지
- **Arch/Manjaro**: AUR 지원
- **소스 빌드**: `npm install && npm run dev`
