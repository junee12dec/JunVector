---
title: "Claude Code로 YouTube 영상 50개 분석 — NotebookLM-py 활용"
date: 2026-03-21
tags: [ai/claude, ai/notebooklm, productivity/automation, dev/python]
description: "Claude Code를 NotebookLM과 연결해 유튜브 영상 50개를 일괄 분석하는 워크플로우. 환각 없이, 최소한의 토큰으로 프로덕션 수준의 인사이트를 추출한다."
source: "https://www.threads.com/@buildc3/post/DWG-d2uGJpX"
---

# Claude Code로 YouTube 영상 50개 분석 — NotebookLM-py 활용

## 핵심 아이디어

> "Claude Code를 50개 YouTube 영상에 겨냥하고 생각하게 하면 어떻게 될까?
> 프로덕션 수준의 인사이트가 나온다. 환각 없이. 토큰은 거의 0에 가깝게."

Claude Code + NotebookLM을 조합하면:
- YouTube 영상을 대규모로 일괄 처리
- 환각 없는 정확한 분석 (소스 기반 답변)
- 토큰 효율 극대화

---

## notebooklm-py 라이브러리

**GitHub:** https://github.com/teng-lin/notebooklm-py
**라이선스:** MIT | 비공식 Python API

### 주요 기능

**콘텐츠 생성**
- 오디오 오버뷰 (팟캐스트, 다국어 지원)
- 영상, 슬라이드 덱, 퀴즈, 플래시카드, 인포그래픽, 마인드맵, 데이터 테이블
- 다양한 포맷으로 다운로드 (MP3, MP4, PDF, CSV, JSON)

**리서치 자동화**
- 소스 대량 임포트: URL, PDF, YouTube, Google Drive
- 웹·드라이브 리서치 에이전트 + 자동 임포트
- 소스 기반 채팅

**사용 방법 3가지**
1. Python async API — 앱 통합
2. CLI — 셸 스크립트·자동화
3. AI 에이전트 스킬 — Claude Code 등 LLM 에이전트 연동

### 웹 UI 대비 강점
- 퀴즈·플래시카드 내보내기 (여러 포맷)
- 마인드맵 JSON 추출
- 편집 가능한 PowerPoint 내보내기
- 배치 다운로드

### 주의사항
- 비공식 라이브러리 (미문서화 Google API 사용) → 언제든 변경 가능
- 프로토타입·개인 프로젝트용 권장, 프로덕션 서비스 직접 연동은 리스크 있음

---

## 활용 아이디어

- Claude Code + notebooklm-py 스킬로 `/research` 커맨드 구현
- YouTube 플레이리스트 전체를 NotebookLM에 임포트 → 주제별 인사이트 추출
- 볼트 리서치 파이프라인: URL 목록 → NotebookLM 소스 → 마인드맵 JSON → Obsidian 노트 자동 생성
