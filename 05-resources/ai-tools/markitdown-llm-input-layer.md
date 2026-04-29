---
title: "MarkItDown — LLM 입력 정리 레이어로 보는 마이크로소프트 오픈소스"
date: 2026-04-11
tags: [ai/tools, dev/llm-tooling, productivity/automation]
description: "MarkItDown은 단순 PDF→Markdown 변환기가 아니라 PDF·Word·PPT·Excel·이미지 OCR·오디오 전사·YouTube 자막·ZIP까지 LLM이 읽을 수 있는 형태로 정리해 주는 입력 레이어다."
source: "https://github.com/microsoft/markitdown"
---

# MarkItDown — LLM 입력 정리 레이어로 보는 마이크로소프트 오픈소스

## 핵심 관점

MarkItDown을 PDF→Markdown 툴로 보면 반만 본 거다.

이 repo의 진짜 포인트는 **LLM 입력 정리 레이어**다. PDF, Word, PowerPoint, Excel뿐 아니라 이미지 OCR, 오디오 전사, YouTube 자막, ZIP 내부 파일까지 Markdown으로 끌어온다.

## 잘 안 보이는 포인트 3가지

1. **스트림 중심 인터페이스** — 0.1.0부터 스트림 기반으로 설계됨
2. **optional dependency + plugin 구조** — 필요한 기능만 설치, 외부 확장 가능
3. **markitdown-mcp** — MCP 서버로 LLM 앱과의 연결을 확장

## 왜 중요한가

> "화려한 생성 모델보다 'AI가 읽을 수 있게 정리하는 층'이 왜 중요한지 보여주는 repo"

LLM의 성능은 모델만큼이나 입력 품질에 달려 있다. 다양한 포맷의 문서를 일관된 Markdown으로 정규화하는 레이어는 RAG, 에이전트 파이프라인 모두에서 필수 인프라가 된다.

## 지원 포맷

| 카테고리 | 포맷 |
|---------|------|
| 문서 | PDF, Word (.docx), PowerPoint (.pptx), Excel (.xlsx) |
| 미디어 | 이미지 (OCR), 오디오 (전사) |
| 웹/기타 | YouTube 자막, ZIP 내부 파일 |

## 링크

- GitHub: https://github.com/microsoft/markitdown
