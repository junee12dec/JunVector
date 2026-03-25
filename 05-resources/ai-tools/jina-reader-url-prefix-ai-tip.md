---
title: "URL 앞에 r.jina.ai/ 붙이면 AI가 웹을 깔끔하게 읽는다"
date: 2026-03-24
tags: [ai/tools, productivity/tip]
description: "AI에게 웹 페이지를 읽힐 때 URL 앞에 r.jina.ai/를 붙이면 HTML 노이즈 없이 핵심 콘텐츠만 마크다운으로 변환돼 전달된다."
source: "https://www.threads.com/@unclejobs.ai/post/DWNi3dMCYU9"
---

# URL 앞에 r.jina.ai/ 붙이면 AI가 웹을 깔끔하게 읽는다

AI한테 "이 사이트 읽어봐"라고 시키면, HTML 태그, 광고, 네비게이션 바가 섞인 노이즈를 통째로 먹는다. 그러고는 엉뚱한 부분에서 정보를 뽑아오는 문제가 생긴다.

## 해결법

URL 앞에 `r.jina.ai/`만 붙이면 된다.

```
r.jina.ai/https://example.com/article
```

해당 페이지의 핵심 콘텐츠만 **깔끔한 마크다운**으로 변환돼서 돌아온다. HTML 노이즈 없이.

## 예시

- 원본: `https://docs.anthropic.com/ko/docs/overview`
- Jina 변환: `r.jina.ai/https://docs.anthropic.com/ko/docs/overview`

## 왜 유용한가

- AI의 컨텍스트 낭비를 줄인다 (불필요한 HTML 태그 제거)
- 정보 추출 정확도가 올라간다
- 프롬프트에 URL을 그대로 넣는 것보다 훨씬 효율적
