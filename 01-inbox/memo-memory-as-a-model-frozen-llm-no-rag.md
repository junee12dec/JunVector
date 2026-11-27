---
title: "MeMo: Memory as a Model — 문서를 작은 Memory 모델에 학습시키고, 얼려 둔 LLM은 그 모델에 물어서 답하는 RAG 대안 (arXiv 2605.15156)"
date: 2026-11-27
tags: [ai/research, ai/rag, ai/llm]
description: "새 지식을 벡터 DB가 아니라 전용 Memory 모델에 넣고 LLM 파라미터는 그대로 두는 모듈형 프레임워크. 문서 간 관계 포착, 검색 잡음에 강함, 망각 없음, 가중치 접근 불필요, 추론 시 검색 비용이 코퍼스 크기와 무관하다는 점을 내세운다. 소개 글의 'RAG는 죽었다'는 과장이다."
source: "https://www.threads.com/@todays__code/post/DgO9s_BEkLO"
---

# MeMo — Memory as a Model

- 논문: *MeMo: Memory as a Model*, arXiv:2605.15156 (2026-05-14 제출, 2026-05-20 개정판 v2). https://arxiv.org/abs/2605.15156
- 저자: Ryan Wei Heng Quek, Sanghyuk Lee, Alfred Wei Lun Leong, Arun Verma, Alok Prakash, Nancy F. Chen, Bryan Kian Hsiang Low, Daniela Rus, Armando Solar-Lezama. 소속은 싱가포르국립대(NUS), A*STAR, 도쿄대, Liquid AI, MIT CSAIL, 싱가포르-MIT 연구기술센터(SMART) 등이다.
- 소개 글: @todays__code (Threads, 2026-11-27). 첨부 이미지는 논문 첫 쪽(제목·저자·초록)이다.
- 코드 저장소는 찾지 못했다. Hugging Face 논문 페이지에 연결된 GitHub 저장소가 없었다.

## 소개 글의 주장

- "RAG는 공식적으로 죽었다. MIT가 RAG가 필요 없는 AI를 만들었다."
- 지식을 데이터베이스에 저장하는 대신, 내 문서로 **작고 전용인 Memory 모델을 학습**시킨다.
- 추론 때 주력 LLM은 **100% 그대로**(frozen)다. 벡터 DB도, 청킹도, 가중치 접근도 필요 없다.
- 주력 LLM이 Memory 모델에 **3번 질문**해(탐정이 증인을 신문하듯) 정확한 사실을 뽑아 답을 합성한다.

## 논문 초록이 말하는 것

LLM은 사전학습 뒤에는 얼어 있다. 실무에서는 최신·도메인 지식이 필요하다. MeMo(Memory as a Model)는 **새 지식을 전용 Memory 모델에 인코딩하고 LLM 파라미터는 바꾸지 않는** 모듈형 프레임워크다. 기존 방법 대비 장점 5가지:

| | 장점 |
|---|------|
| (a) | 문서에 걸친 **복잡한 관계**를 포착한다 |
| (b) | **검색 잡음에 강하다** |
| (c) | LLM의 **치명적 망각**(catastrophic forgetting)을 피한다 |
| (d) | LLM의 **가중치나 출력 로짓에 접근할 필요가 없어**, 오픈·클로즈드 LLM 모두에 플러그앤플레이로 붙는다 |
| (e) | 추론 시 **검색 비용이 코퍼스 크기와 무관**하다 |

평가는 BrowseComp-Plus, NarrativeQA, MuSiQue 세 벤치마크에서 했고, "다양한 설정에서 기존 방법 대비 강한 성능"이라고만 초록에 적혀 있다.

## 글과 논문의 차이 (확인한 범위)

- "RAG는 죽었다"는 초록에 없는 표현이다. 초록은 기존 방법(RAG 포함)과 비교해 장점이 있다고만 한다. 구체적인 수치와 비교 대상은 초록만으로는 알 수 없다.
- "MIT가 만들었다"는 일부만 맞다. 저자에 MIT CSAIL(Rus, Solar-Lezama)이 있지만 주저자 쪽은 싱가포르국립대 소속이다.
- "3번 질문"은 초록에 나오지 않는 세부라서 확인하지 못했다.
- 이 글이 올라온 것은 논문 공개 약 6개월 뒤다.

## 이 볼트와 이어지는 점

- [[madi-rag-index-sync|madi RAG 계획]]은 근거가 바뀌면 AI도 알게 하는 문제다. MeMo는 지식이 모델 가중치에 들어가므로, 문서가 바뀌면 Memory 모델을 다시 학습해야 하는지가 열린 질문이다. 근거 출처 추적(`sources`)과 변경 감지가 이 방식에서는 어떻게 되는지는 논문을 읽어 봐야 한다.
- (e) 코퍼스 크기와 무관한 검색 비용은 DR-DCI 쪽 논의(문서가 커지면 색인·검색 부담)와 반대편의 접근이다. [[dr-dci-agentic-search-dynamic-workspace-expansion|DR-DCI]]는 색인 없이 원본을 직접 뒤지고, MeMo는 지식을 모델에 압축한다.

## 참고

- 초록과 논문 첫 쪽 이미지, arXiv 메타데이터만 확인했다. 본문(구조, 학습 방법, 수치)은 읽지 않았다.
