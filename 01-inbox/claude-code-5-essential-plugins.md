---
title: "Claude Code 필수 플러그인 5선 — Context7·Strix·Playwright·Supabase·Skill UI"
date: 2026-08-08
tags: [ai/claude-code, dev/tools, productivity/workflow]
description: "Claude Code와 함께 설치해야 할 필수 도구 5가지 정리. AI가 최신 문서로 코딩하고(Context7), 보안 취약점을 스스로 점검하고(Strix), 만든 화면을 직접 검수하고(Playwright), DB를 말로 관리하고(Supabase), 디자인 DNA를 추출하는(Skill UI) 환경 구성."
source: "https://www.threads.com/share/_wEyLUxzV/"
---

# Claude Code 필수 플러그인 5선

> "이게 없으면 그 일을 전부 사람이 떠안게 됩니다."

## 1. Context7 — AI에게 최신 문서를 공급

**문제**: AI가 오래된 정보로 없는 기능을 코딩하는 실수  
**해결**: 현재 사용 중인 라이브러리의 최신 공식 문서를 실시간 전달

```bash
npx ctx7 setup
```

사용법: 대화 시 `use context7` 덧붙이기  
✅ 무료 / Node.js 18+

---

## 2. Strix — 해커처럼 내 앱 보안 점검

**문제**: 앱 공개 전 보안 취약점 미탐지  
**해결**: AI 요원이 실제 공격 방식으로 취약점 찾고 수정까지 도움 (GitHub 별 5만+)

```bash
curl -sSL https://strix.ai/install | bash
```

⚠️ Docker 필요 / AI API 키 사용료 발생 가능 / 처음이라면 나중에 설치 권장

---

## 3. Playwright CLI — AI가 만든 화면을 스스로 검수

**문제**: AI가 "완성"이라고 하는데 화면이 깨져 있는 반복 상황  
**해결**: 브라우저를 직접 열어 스크린샷 촬영 → 깨진 부분 스스로 발견·수정 (Microsoft 공식)

```bash
npm install -g @playwright/cli@latest
```

사용법: "방금 만든 화면 열어서 확인해 줘"  
✅ 무료 / 설치 후 자동 인식 / Node.js 18+

---

## 4. Supabase 플러그인 — DB를 터미널에서 말로 관리

**문제**: 데이터베이스 경험 없이 저장 기능 구현 어려움  
**해결**: 테이블 생성·구조 변경·배포까지 자연어 명령으로 처리 (Supabase 공식)

```bash
npx plugins add supabase-community/supabase-plugin
```

사전 준비: supabase.com 무료 계정  
✅ 플러그인 무료 / Supabase 기본 플랜 무료

---

## 5. Skill UI — 마음에 드는 사이트의 디자인 DNA 추출

**문제**: 디자인 감각 없이 완성도 있는 화면 만들기 어려움  
**해결**: URL 입력 → 색상·폰트·컴포넌트 분석 → 문서 생성 → AI에게 전달해 동일 스타일 구현

```bash
npm install -g skillui
# 사용: skillui https://참고할사이트주소
```

✅ AI·API 키 불필요 / 무료 / Node.js 18+

---

## 설치 우선순위 (초보자 권장)

1. **Context7** — 즉시 효과, 설치 가장 간단
2. **Playwright CLI** — 화면 검수 자동화, 즉시 체감
3. **Skill UI** — 디자인 문제 해결, 의존성 없음
4. **Supabase 플러그인** — 저장 기능 필요 시
5. **Strix** — Docker 준비 후 마지막에
