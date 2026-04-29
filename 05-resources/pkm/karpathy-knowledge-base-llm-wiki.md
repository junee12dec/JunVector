---
title: "Karpathy의 Knowledge Base — LLM이 사관이 되는 개인 위키"
date: 2026-04-05
tags: [ai/pkm, ai/llm, productivity/knowledge-management]
description: "Karpathy가 제안한 LLM 기반 개인 지식 관리 방식. raw data를 LLM이 wiki로 compile하고, 관계 기반 연결로 지식을 축적한다."
source: "https://www.threads.com/@larrabee.kor/post/DWu0F2ZE206"
---

# Karpathy의 Knowledge Base — LLM이 사관이 되는 개인 위키

카파시가 X에서 LLM으로 개인 지식을 관리하는 방식을 공유했는데, 엄청난 속도로 바이럴되고 있다.

## 핵심 개념

raw data를 LLM이 wiki로 **"compile"** 한다. 새 자료가 들어오면:

1. 기존 내용과의 **모순 체크**
2. 기존 문서와의 **연결 갱신**
3. 위키에 **누적**

## 왜 위키인가

위키는 원래 **관계의 도구**였다:

- 문서와 문서를 링크로 엮는다
- 개념 사이에 맥락을 만든다
- 하나가 바뀌면 연결된 것들이 함께 갱신된다

하지만 위키 유지는 전적으로 커뮤니티의 자발적 노력에 기대왔다. 나무위키의 "사관"처럼 자발적으로 작성·갱신하는 사람들이 있어야 했다.

**카파시는 이 사관을 LLM으로 교체**한다.

## 핵심 인사이트

**벡터 검색이나 임베딩 대신 위키라는 오래된 형식이 여전히 유효하다.**

> 지식은 유사도보다 **관계**로 엮일 때 의미가 있다.

최근 코드를 폴더 단위로 정리해서 LLM에 넘기는 게 낫다는 것과 같은 맥락. context를 잘 찾으려면 구조화된 관계가 필요하다.

## "Obsidian = IDE, LLM = 프로그래머, 위키 = 코드베이스"

지식을 코드처럼 다룬다:

| 코드 | 지식 |
|------|------|
| compile | raw data → wiki 변환 |
| lint | 모순·중복 체크 |
| version control | git으로 변경 이력 관리 |

## 지식 관리와 코드 관리의 통합

wiki는 `.md`로 이뤄진 **git repo**다. 지식 관리와 코드 관리가 하나의 맥락에서 합쳐지는 방향은 결국 git으로 수렴하는 게 아닐까.

## 참고 링크

- [카파시 X 스레드 1](https://x.com/i/status/2039805659525644595)
- [카파시 X 스레드 2](https://x.com/i/status/2040470801506541998)
- [카파시 Gist — Knowledge Base 상세](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
