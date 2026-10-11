---
title: "Semiotic — MCP 서버 내장 React 데이터 시각화 오픈소스 (실시간·네트워크 그래프·대시보드)"
date: 2026-09-07
tags: [dev/frontend, ai/mcp, dev/dataviz]
description: "React용 데이터 시각화 라이브러리로 일반 차트·실시간 스트리밍·네트워크 그래프·대시보드를 지원. MCP 서버가 내장돼 Claude Code 같은 AI 코딩 도구가 스키마를 읽고 차트를 더 정확하게 생성할 수 있다."
source: "https://github.com/nteract/semiotic"
---

# Semiotic — MCP 서버 내장 React 데이터 시각화 오픈소스

GitHub: [nteract/semiotic](https://github.com/nteract/semiotic)  
별 2,700 / 라이선스: Apache 2.0

> AI한테 차트 만들어달라고 했다가 축 깨지고 범례 꼬인 적 있으면 유용한 도구.

## 지원 시각화 유형

- 일반 차트 (라인·바·피·스캐터 등)
- **실시간 스트리밍 데이터** 시각화
- **네트워크 그래프**
- **대시보드**

## 핵심 차별점 — MCP 서버 내장

AI 코딩 도구(Claude Code 등)가 **MCP 서버를 통해 Semiotic 스키마를 직접 읽어** 차트를 더 정확하게 생성할 수 있음.

기존 문제: AI가 차트 컴포넌트 API를 잘못 이해해 축·범례가 깨지는 상황  
해결 방식: MCP로 정확한 스키마를 AI에게 전달 → 올바른 props 생성

## 스택

- **React** 기반
- MCP 서버 포함 (Claude Code, OpenCode 등과 연동 가능)
