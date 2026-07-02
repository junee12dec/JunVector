---
title: "DESIGN.md — AI 코딩 에이전트용 디자인 시스템 파일 표준 (구글 OSS, 16.5k⭐)"
date: 2026-06-25
tags: [design/system, ai/coding-agent, dev/workflow]
description: "CLAUDE.md가 코딩 규칙을 정의하듯, DESIGN.md는 색상·폰트·여백·컴포넌트를 YAML+마크다운으로 정의해 AI가 매번 동일한 디자인 판단을 하게 만드는 구글 공식 오픈소스."
source: "https://github.com/google-labs-code/design.md"
---

# DESIGN.md — AI 코딩 에이전트용 디자인 시스템 파일 표준 (구글 OSS, 16.5k⭐)

## 한 줄 요약

CLAUDE.md의 디자인 버전. 브랜드 색상·폰트·여백·컴포넌트를 하나의 파일로 정의해 AI 에이전트가 일관된 디자인 판단을 하게 만드는 구글 공식 표준.

---

## 왜 필요한가

AI 코딩 에이전트에게 디자인 시스템을 매번 설명하는 건 비효율적이고 결과가 제각각이다.
DESIGN.md는 이 정보를 한 파일에 구조화해서 에이전트에게 한 번만 읽히면 된다.

> "사람마다 지시를 잘하는 능력에 의존하던 시대가 조금씩 끝나고 있다."

---

## 파일 구조

```yaml
---
# YAML 프론트매터: 머신 가독 디자인 토큰
colors:
  primary: "#1A73E8"
  ...
typography:
  ...
spacing:
  ...
---

## 마크다운 본문
# 인간 가독 디자인 원리와 적용 지침
```

- **YAML**: 정확한 토큰 값 (색상, 타이포그래피, 여백 등)
- **마크다운**: 왜 이 값인지, 어떻게 적용할지에 대한 맥락 설명

---

## CLI 도구

```bash
# 유효성 검사 + WCAG 명도비 확인
npx @google/design.md lint DESIGN.md

# 버전 간 토큰 변경 감지
npx @google/design.md diff before.md after.md

# Tailwind·DTCG 등으로 내보내기
npx @google/design.md export --format json-tailwind DESIGN.md

# 형식 명세 출력
npx @google/design.md spec
```

---

## CLAUDE.md vs DESIGN.md

| 파일 | 역할 |
|------|------|
| `CLAUDE.md` | 코딩 규칙·워크플로우·컨텍스트 |
| `DESIGN.md` | 색상·폰트·여백·컴포넌트 디자인 토큰 |

둘을 함께 쓰면 코드 품질과 디자인 일관성을 동시에 AI에게 위임 가능.

---

## 현재 상태

알파 버전 개발 중. 구글 Labs Code 공식 오픈소스.

---

## 링크

- GitHub: https://github.com/google-labs-code/design.md
