---
title: "oh-my-design(OMD) — 대기업 디자인 시스템 58개로 DESIGN.md를 뚝딱 만드는 도구"
date: 2026-07-20
tags: [design/system, ai/tools, dev/frontend]
description: "대기업 디자인 시스템 58개 중 하나를 고르고, A/B 취향 선택·색상·다크모드를 세팅하면 DESIGN.md와 shadcn CSS 변수가 즉시 export되는 오픈소스 웹 앱. AI 호출 0번, 비용 0원."
source: "https://www.threads.com/@daon_k/post/DXFHGmhDcns"
---

# oh-my-design(OMD) — 대기업 디자인 시스템 58개로 DESIGN.md를 뚝딱 만드는 도구

**앱**: https://oh-my-design-lemon.vercel.app  
**GitHub**: https://github.com/kwakseongjae/oh-my-design

---

## 문제 인식

DESIGN.md를 제대로 만들려면 색상 정하고, 토큰 정리하고, 컴포넌트 맞추다 하루가 사라진다.

## OMD 워크플로우

1. **디자인 시스템 선택** — 대기업 디자인 시스템 58개 중 하나 선택
2. **A/B 취향 맞추기** — 버튼·테이블·헤더·카드 A/B로 취향 선택
3. **세부 설정** — 색상, radius, 다크모드 세팅
4. **DESIGN.md export** — 바로 파일로 내려받기
5. **shadcn CSS 변수** 함께 제공 → 프로젝트에 그대로 붙이기

## 핵심 특징

- **AI 호출 0번, 비용 0원** — 완전 오프라인 로직
- **해시 인코딩** — 설정값이 해시로 저장돼 `npx` 한 줄로 어디서든 동일 재생성
- **MIT 오픈소스**

## 활용 방법

```bash
# 해시로 저장된 설정을 어디서든 재생성
npx oh-my-design <hash>
```

또는 앱에서 직접 설정 후 DESIGN.md를 Claude Code·Cursor에 주입.

---

## 히스토리

| 날짜 | 버전 |
|------|------|
| 2026-04-17 | 초기 공개 — 토스·당근·카카오·배민 4개 한국 서비스 레퍼런스 |
| 2026-07-20 | 대규모 업데이트 — 대기업 디자인 시스템 58개 + A/B 비교 + shadcn 변수 export |
