---
title: "RAG-Anything — PDF 표·수식·차트까지 이해하는 멀티모달 RAG 프레임워크"
date: 2026-04-25
tags: [dev/rag, dev/llm-ops, ai/multimodal]
description: "텍스트 전용 기존 RAG의 한계를 넘어 PDF·Office·이미지의 표·수식·차트까지 멀티모달로 처리하는 올인원 RAG 프레임워크. pip 한 줄로 설치."
source: "https://www.threads.com/@hermes_agent_kr/post/DXgkeDEgojP"
---

# RAG-Anything — PDF 표·수식·차트까지 이해하는 멀티모달 RAG 프레임워크

**GitHub**: https://github.com/HKUDS/RAG-Anything  
**Stars**: 18,500+

```bash
pip install raganything
```

---

## 기존 RAG의 한계

기존 RAG: **텍스트만** 처리 → PDF 속 표, 수식, 차트는 무시  
RAG-Anything: 텍스트 + 이미지 + 표 + 수식 **모두 이해**

## 핵심 기술 5가지

| 기술 | 설명 |
|------|------|
| **MinerU 기반 파싱** | PDF, Office, 이미지 고정밀 일괄 처리 |
| **멀티모달 지식 그래프** | 텍스트·이미지·표 간 관계 자동 매핑 |
| **하이브리드 검색** | 벡터 임베딩 + 그래프 구조 융합 |
| **VLM 질의응답** | 이미지 포함된 질문도 처리 |
| **간편 설치** | `pip install raganything` 한 줄 |

## 활용 대상

- 논문·보고서 등 **도표·수식이 많은 문서** 기반 AI 구축
- 금융·의료·법률 등 **복잡한 PDF** 처리가 필요한 RAG 시스템
- 멀티모달 문서 검색 파이프라인

---

## 링크

- GitHub: https://github.com/HKUDS/RAG-Anything
