---
title: "open-slide × vgpu — 코딩 에이전트가 React로 쓰는 슬라이드 프레임워크에 WebGPU 실시간 3D 장면을 얹은 데모 (둘 다 MIT)"
date: 2026-11-24
tags: [productivity/presentation, ai/skill, design/motion]
description: "발표 자료를 설명하면 코딩 에이전트가 React 슬라이드로 써 주는 open-slide에, Vercel Labs의 WebGPU 라이브러리 vgpu로 슬라이드 안에서 3D 장면을 실시간으로 그린 데모. 슬라이드를 넘기면 화면이 바뀌는 대신 한 물체가 다른 형태로 변한다."
source: "https://www.threads.com/@hoddukzoa/post/DgGrvrVEzxN"
---

# open-slide × vgpu — 에이전트용 슬라이드 + 실시간 WebGPU 장면

- 소개 글: @hoddukzoa (Threads, 2026-11-24)
- 데모 제작: Yiwei Ho — https://x.com/1weiho/status/2124884351225913492

## 데모

슬라이드를 넘기면 화면이 바뀌는 대신 **눈앞의 3D 물체가 다른 형태로 변한다**. 액체의 움직임과 표면에 비치는 빛이 볼거리다. 미리 만든 영상을 붙인 게 아니라 **슬라이드 안에서 장면을 그리고**, open-slide의 전환 효과를 더해 두 장을 넘기는 동작이 한 물체의 변화를 보여 주는 연출이 된다.

영상 첫 화면: "A LIVE SHADER DECK — vgpu × open-slide, Real-time WebGPU, rendered inside every slide." 왼쪽 페이지 목록에 Metal · Liquid · Reflection · Light · Form · One world 순서의 슬라이드, 오른쪽에 크롬 질감의 3D 물체.

**역할 분담**: vgpu가 장면을 그리고, open-slide가 슬라이드 사이의 전환을 맡는다.

**시작하는 법 (제작자 안내)**: 기존 open-slide 프로젝트에서

```bash
npx skills add vercel-labs/vgpu   # 에이전트용 스킬 추가
pnpm add vgpu                     # 라이브러리 설치
```

## open-slide — 에이전트를 위한 슬라이드 프레임워크

- https://github.com/open-slide/open-slide (MIT, 저장 시점 약 9,900⭐) · https://open-slide.dev
- 발표 자료를 설명하면 코딩 에이전트가 **React**로 쓴다. 페이지 하나가 1920×1080 고정 캔버스의 React 컴포넌트다. 캔버스·크기 조정·이동·핫 리로드·편집·발표 모드는 프레임워크가 맡는다.

```bash
npx @open-slide/cli init my-deck
cd my-deck
npm run dev
```

- **에이전트 패널**: 쓰던 Claude Code나 Codex CLI를 연결해 브라우저에서 조종한다 (슬라이드에서 `A`). 새 덱을 설명하면 에이전트가 한 장씩 쓰고 캔버스가 따라간다. 지금 슬라이드와 선택한 요소가 메시지에 함께 가서 "이거 더 크게"가 바로 통한다. **기존 로그인을 써서 API 키가 필요 없다.**
- 터미널용 번들 스킬: `/create-slide`, `/apply-comments`, `/create-theme` (Claude Code, Codex, Cursor 등)
- **코멘트 모드** (`C`): 요소를 누르거나 영역을 드래그해 메모를 남기면 소스에 `@slide-comment` 표시로 저장되고, 에이전트가 한 번에 반영한다.
- **발표 모드**: 전체 화면, 키보드 이동, 다음 슬라이드·발표자 노트·타이머가 있는 발표자 화면.
- 그 밖에: 드래그·크기 조절·정렬 가이드가 있는 시각 편집기, 테마·페이지 전환·단계별 등장·공유 요소 모프, svgl 로고 검색과 Google Fonts, **HTML·PDF·PPTX 내보내기**, 정적 사이트로 배포.

## vgpu — TypeScript WebGPU 라이브러리

- https://github.com/vercel-labs/vgpu (MIT, 저장 시점 약 2,700⭐) · https://vgpu.sh
- 셰이더, 3D 장면, GPU 텐서, 신경망, 수학 시각화를 위한 WebGPU 라이브러리.
- `.wgsl` 셰이더 파일을 TypeScript 모듈처럼 import하고 타입을 자동으로 맞춘다.
- 하나의 `Gpu` 컨텍스트를 모든 함수의 첫 인자로 넘기는 작은 API, 숨은 전역 상태 없음.
- 작게 설계: 전체 화면 효과 하나가 gzip 25KB (CI로 강제).
- 같은 API로 **브라우저, 헤드리스 Node, 테스트용 결정론적 목**에서 돈다.
- 에이전트 대응: `npx vgpu docs`, `npx vgpu examples`, `npx vgpu check`, 그리고 vgpu.sh의 `agents.md`·`llms.txt`.

## 참고

- 데모 영상은 첫 화면만 읽었다. 두 저장소는 README 앞부분을 기준으로 정리했다.
