---
title: "DR-DCI — 검색으로 작업 공간을 넓히고 셸 명령으로 증거를 확인하는 에이전트 검색 (논문·코드 공개)"
date: 2026-11-16
tags: [ai/rag, ai/agent, ai/research]
description: "에이전트가 검색기로 관련 문서를 작업 공간에 끌어온 뒤 그 안에서만 rg·find 같은 셸 명령으로 비교·검증하는 방식. 검색의 넓은 탐색과 직접 탐색(DCI)의 정확한 확인을 함께 얻어, 1천만 문서 규모에서도 안정적으로 동작한다."
source: "https://arxiv.org/abs/2606.14885"
---

# DR-DCI — 검색으로 작업 공간을 넓히고 셸 명령으로 증거를 확인하는 에이전트 검색

- 논문: *Dr-DCI: Scaling Direct Corpus Interaction via Dynamic Workspace Expansion* (arXiv 2606.14885, 2026-06)
- 저자: Yi Lu, Zhuofeng Li, Ping Nie, Haoxiang Zhang, Yuyu Zhang, Kai Zou, Wenhu Chen, Jimmy Lin, Dongfu Jiang, Yu Zhang (토론토대, 텍사스 A&M, 워털루대, UC 샌디에이고 등)
- 코드: https://github.com/EigenTom/DR-DCI

## 풀려는 문제

대규모 문서 집합을 에이전트가 검색할 때 두 방식에 각각 한계가 있다.

| 방식 | 장점 | 한계 |
|------|------|------|
| **검색기 인터페이스** (BM25, ColBERT 등) | 후보를 넓게 찾아 순위를 매긴다 | 증거를 순위 목록이나 잘린 문서로만 보여 줘서, 에이전트가 자료를 재구성하거나 여러 문서에 걸친 조건을 확인하기 어렵다 |
| **직접 탐색 (DCI, Direct Corpus Interaction)** | `rg`, `find`, `sed`, 범위를 정한 파일 읽기 같은 셸 명령으로 검색·필터·비교·검증을 자유롭게 한다 | 문서 집합 전체에 명령을 돌리면 규모가 커질수록 느려지고 불안정해진다 |

## 핵심 아이디어 — 동적 작업 공간 확장

- 에이전트는 비어 있거나 작은 작업 공간에서 시작한다.
- `pull(query, topK)`를 호출하면 숨겨진 전체 문서 집합에서 관련 문서를 검색해 작업 공간에 파일로 꺼내 놓는다.
- 그다음 작업 공간 안에서만 DCI 방식으로 셸 명령을 써서 증거를 찾고 확인한다.
- 작업 공간은 시간이 지나면서 커진다. **검색은 탐색 범위를 넓게 유지하고, DCI는 증거를 정확하게 가리는 일을 맡는다.**
- 즉 검색을 에이전트가 부를 수 있는 "작업 공간 넓히기" 행동 하나로 다룬다.

## 결과

- **BrowseComp-Plus**: 정확도 71.2%. 원래 DCI와 일부 기능을 뺀 변형보다 최대 8.3%p 높고, 도구 호출 수·실행 시간·추정 비용은 줄었다.
- **작업 공간을 유지한 채 컨텍스트를 초기화**하면 정확도가 73.3%로 더 오른다.
- **규모 확장**: 문서 10만 개에서 1천만 개까지 성능이 유지된다. 같은 조건에서 원래 DCI는 불안정해지고 BM25는 크게 떨어진다.
- **Wiki-18 QA** (문서 하나당 파일 하나, 2천만 개 규모): 6개 벤치마크 평균 63.0점으로, 검색 기반 방식과 학습된 검색 에이전트보다 높다.
- **성능을 가르는 요소** (ablation): 순위가 붙은 미리보기, 그리고 여러 문서를 오가는 DCI.

## 코드로 해 보기 (README 기준)

```bash
bash setup.sh            # 한 번에 설치 (uv sync + 번들된 Pi 코딩 에이전트 빌드)
cp .env.template .env    # OPENAI_API_KEY 또는 ANTHROPIC_API_KEY 설정

# 로컬 문서 폴더에 DCI 에이전트 돌리기
uv run dci-agent-lite --terminal --provider openai --model gpt-5.4-nano \
  --cwd "corpus/wiki_corpus" --extra-arg="--thinking high"
```

- 동적 작업 공간을 쓰려면 검색기 서버(FAISS·Pyserini 유틸리티 제공, 기본 `http://127.0.0.1:8002/retrieve`)를 먼저 띄운다.
- BrowseComp-Plus, BRIGHT, 위키피디아식 QA, OpenResearcher식 문서 집합용 실행 스크립트가 들어 있다.
- 타임아웃, 출력 자르기, 컨텍스트 관리, 작업 공간 캐시 같은 장시간 실행 옵션을 CLI 플래그와 환경 변수로 조정한다.
