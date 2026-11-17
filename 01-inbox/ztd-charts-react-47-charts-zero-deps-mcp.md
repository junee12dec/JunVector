---
title: "ztd-charts — 의존성 0인 React 차트 47종 + AI가 쓰는 JSON 스펙·CLI·MCP (MIT)"
date: 2026-11-17
tags: [design/diagram, dev/frontend, ai/mcp]
description: "순수 SVG로 그리는 React 차트 라이브러리. 47종 차트를 JSON 스펙으로도 쓸 수 있고, CLI·MCP 서버로 AI가 데이터에 맞는 차트를 골라 PNG·SVG·HTML로 만들어 준다. 한국어 숫자 형식(1.2만, 3.4억)을 지원한다."
source: "https://www.threads.com/@gangjoon__/post/Df17R_0kT8Z"
---

# ztd-charts — 의존성 0인 React 차트 47종 + AI가 쓰는 JSON 스펙·CLI·MCP

- 저장소: https://github.com/Junhan2/ztd-charts (MIT, 저장 시점 336⭐)
- 문서·갤러리: https://charts.ztd.app/docs/
- 소개 글: @gangjoon__ (Threads, 2026-11-17) — 33종에서 47종으로 늘어난 업데이트 소식

## 특징 (README 기준)

- **카드 하나에 요점 하나**: 강조할 항목 하나만 강조색을 쓰고 나머지는 무채색으로 둔다. 차트 아래에 굵은 한 줄 결론(takeaway)을 붙여, 축을 읽기 전에 요점이 보이게 한다.
- **설명하는 모션**: 스크롤해 들어오면 그려지고, 데이터가 바뀌면 지금 위치에서 이어서 움직인다. 범위를 드래그하면 그 구간의 변화·최고·최저를 보여 준다.
- **기본 접근성**: 키보드 탐색, 차트마다 스크린 리더 설명과 데이터 표, 모션 줄이기, 모든 라벨 WCAG AA 대비.
- **가벼움**: 순수 SVG, 런타임 의존성 0 (React만 peer dependency). 공용 코어를 포함해 차트 하나가 Brotli 기준 약 12~26kB. 데이터가 아주 크면 알아서 canvas로 바뀐다.
- **AI용**: 모든 차트를 공개 JSON Schema가 있는 JSON 스펙으로도 쓸 수 있다. CLI·MCP 서버·에이전트 스킬이 스펙을 검증하고 PNG·SVG·HTML로 렌더링한다.
- **영어·한국어**: 기본은 en-US. `locale="ko-KR"`이면 숫자 형식(1.2만, 3.4억)과 차트 문구가 한국어로 바뀐다.

## 47종 차트

| 묶음 | 차트 |
|---|---|
| 비율 | 파이 · 도넛 · 와플 · 마리메코 · 누적 막대 |
| 계층 | 트리맵 · 선버스트 · 트리 |
| 흐름 | 퍼널 · 생키 · 코드 다이어그램 |
| 비교 | 막대 · 폭포 · 파레토 · 레이더 · 슬로프 · 덤벨 · 롤리팝 · 막대 레이스 |
| 추세 | 라인(범위 띠 포함) · 영역 · 스트림그래프 · 스파크라인 · 캘린더 히트맵 · 범프 · 캔들스틱 · 스카이라인 · 타임라인 · 코호트 · 호라이즌 |
| 분포 | 박스 플롯(바이올린 포함) · 비스웜 · 리지라인 · 히스토그램 |
| 관계 | 히트맵 · 버블 · 산점도 · 평행 좌표 · 네트워크 |
| 지도 | 타일 격자 지도 · 단계구분도 · 버블(심볼) 지도 · 흐름 지도 |
| KPI | 게이지 · 불릿 · 방사형 막대 · KPI 표 |

이번에 추가된 차트의 쓰임 (작성자 댓글):
1. 나라별 매출을 세계 지도에 색으로 (단계구분도)
2. 해마다 바뀌는 순위를 막대 레이스로
3. 가입한 달마다 남은 사용자를 코호트로
4. 매출·사용자 수·이탈률을 KPI 표 한 장에

차트 14종과 활용 예시 61가지가 추가됐다. 첨부 영상 첫 화면에는 47종 전체가 한국어 라벨로 격자에 나열돼 있다.

## 쓰는 방법 4가지

1. **React**: `npm i ztd-charts` 후 컴포넌트로 사용

   ```tsx
   import { ChartCard, PieChart } from "ztd-charts";

   <ChartCard title="Sales by device" takeaway="Mobile brings in most sales">
     <PieChart data={sales} label="device" value="share" highlight="Mobile" />
   </ChartCard>
   ```

   같은 차트를 JSON 스펙으로: `<Chart spec={{ type: "pie", data: sales, encoding: { label: "device", value: "share" }, options: { highlight: "Mobile" } }} />`

2. **CLI**: `npx ztd-charts-cli suggest sales.csv --out-dir charts` — 데이터에 맞는 차트를 골라 만들어 준다
3. **MCP**: `claude mcp add ztd-charts -- npx -y ztd-charts-mcp` — Claude 같은 AI가 이 라이브러리로 시각화한다
4. **AI에게 지시**: "차트나 시각화는 앞으로 https://github.com/Junhan2/ztd-charts 사용해줘"

갤러리에 차트별 데모·props·복사 가능한 코드와 예시 대시보드가 있다.
