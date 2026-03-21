---
title: "opendataloader-pdf — PDF 구조화 데이터 추출 라이브러리 (GitHub Trending 1위)"
date: 2026-03-19
tags: [dev/python, ai/data, dev/llm-tooling]
description: "PDF에서 Markdown·JSON·HTML로 구조화된 데이터를 추출하는 오픈소스 라이브러리. 로컬 고속 모드와 AI 하이브리드 모드를 자동 선택하며, 표 정확도 0.93, 전체 정확도 0.90."
source: "https://github.com/opendataloader-project/opendataloader-pdf"
---

# opendataloader-pdf — PDF 구조화 데이터 추출 라이브러리

> PDF 데이터 추출 라이브러리 opendataloader-pdf가 이번 주 GitHub Trending 1위를 기록했습니다.
> LLM 학습 데이터 준비나 문서 자동화 파이프라인을 구축 중이라면 한번 살펴볼 만합니다.
>
> — @bizmentor_kr (Threads)

## 핵심 기능

논문, 보고서, 스캔 문서 등 다양한 PDF에서 AI가 바로 쓸 수 있는 형식으로 데이터를 추출한다.

**추출 가능한 요소:**
- 텍스트 (읽기 순서 + 바운딩 박스 보존)
- 표 (단순/복잡/테두리 없는 표 포함)
- 제목 계층 구조
- 목록 (번호, 불릿, 중첩)
- 이미지 (좌표 포함)
- 수식 (LaTeX)
- 차트·이미지 설명 (AI 모드)

## 설치 및 빠른 시작

```bash
# Python
pip install -U opendataloader-pdf

# 하이브리드 모드 (AI 포함)
pip install "opendataloader-pdf[hybrid]"

# Node.js
npm install @opendataloader/pdf
```

```python
import opendataloader_pdf

opendataloader_pdf.convert(
    input_path=["file1.pdf", "file2.pdf", "folder/"],
    output_dir="output/",
    format="markdown,json"
)
```

**LangChain 연동:**
```bash
pip install langchain-opendataloader-pdf
```

## 출력 형식

| 형식 | 용도 |
|------|------|
| **JSON** | 바운딩 박스·시맨틱 타입 포함 구조화 데이터 |
| **Markdown** | LLM 컨텍스트·RAG 청크용 클린 텍스트 |
| **HTML** | 스타일링 포함 웹 표시용 |
| **Annotated PDF** | 감지된 구조 시각적 디버깅 |
| **Text** | 일반 텍스트 |

## 처리 모드

| 모드 | 속도 | 특징 |
|------|------|------|
| **Fast (기본)** | 0.05초/페이지 | 결정론적 로컬 Java 처리, 일반 디지털 PDF 최적 |
| **Hybrid** | 0.43초/페이지 | 복잡 페이지를 AI 백엔드로 라우팅, 스캔 PDF·수식·차트 처리 |

→ **페이지 복잡도에 따라 자동 모드 선택** (8코어 이상: 100페이지+/초 배치 처리)

## 벤치마크 (200개 실제 PDF)

| 지표 | 점수 |
|------|------|
| 전체 정확도 | **0.90** (전체 1위) |
| 표 추출 정확도 | **0.93** |

## 고급 기능

- **OCR**: 스캔 PDF 80개 이상 언어 지원 (`--force-ocr`)
- **Tagged PDF**: 기존 PDF 구조 태그 추출 (`use_struct_tree=True`)
- **AI 안전**: 숨겨진 텍스트·오프페이지 콘텐츠 필터링, 프롬프트 인젝션 방어
- **데이터 정제**: 이메일, URL, 전화번호 자동 마스킹 (선택)

**요구사항:** Java 11+, Python 3.10+ (GPU 불필요)

## 언제 쓸까

- LLM 학습 데이터 파이프라인 구축
- 논문·보고서 대량 처리 자동화
- RAG 시스템을 위한 문서 청킹
- 스캔 문서 디지털화

## 메모

- PDF Association + veraPDF 개발사 Dual Lab과 협업 개발
- Q2 2026에 비태그 PDF 자동 태깅 기능 출시 예정
- Node.js, Java(Maven) SDK도 제공
