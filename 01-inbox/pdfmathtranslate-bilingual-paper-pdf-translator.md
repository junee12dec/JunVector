---
title: "PDFMathTranslate — 수식·표·그림·목차를 그대로 살려 논문 PDF를 이중언어(원문+번역)로 바꿔 주는 오픈소스 (pdf2zh, AGPL-3.0)"
date: 2026-11-26
tags: [dev/tools, learning/resources]
description: "영어 논문 PDF의 레이아웃(수식·표·그림·목차·주석)을 유지한 채 한국어 등으로 번역해 원문과 번역을 나란히 보여 주는 오픈소스. CLI(pdf2zh)·브라우저 GUI·Docker·Zotero 플러그인으로 쓰고, 번역 엔진은 OpenAI·DeepL·Google·Ollama 등에서 고른다."
source: "https://www.threads.com/@goraebab0109/post/DgL8ROKAf6l"
---

# PDFMathTranslate — 논문 PDF 이중언어 번역

- 저장소: https://github.com/PDFMathTranslate/PDFMathTranslate (AGPL-3.0, 저장 시점 약 3만 8,700⭐, 2026-11-26에도 갱신됨)
- 소개 글: @goraebab0109 (Threads, 2026-11-26) — "영어 논문 읽다가 수식·표 깨진 번역본에 한숨 쉬신 적 있죠"
- 활용(소개 글): 해외 논문 1차 독해, 세미나 자료 준비
- README 설명: EMNLP 2025 Demo 논문으로 발표된 프로젝트

## 하는 일

- 수식·차트·목차·주석을 보존한 채 PDF 전체를 번역해 **원문과 번역을 나란히 비교**할 수 있는 이중언어 PDF를 만든다.
- 여러 언어와 여러 번역 서비스를 지원한다 (Google·DeepL·Ollama·OpenAI 등).
- 사용 형태: 명령줄(`pdf2zh`), 브라우저 GUI, Docker, Zotero 플러그인 (README 설명에는 MCP도 있다).

## 설치·사용 (README)

Python 3.11~3.12 필요.

```bash
pip install uv
uv tool install --python 3.12 pdf2zh
pdf2zh document.pdf        # 현재 폴더에 번역본 생성
```

- 브라우저 GUI: `pip install pdf2zh` 후 `pdf2zh -i` → http://localhost:7860/
- Windows: 릴리스 페이지의 `pdf2zh-version-win64.zip`을 풀어 `pdf2zh.exe` 실행
- 설치 없이 써 보기: 공개 무료 서비스 pdf2zh.com, Immersive Translate(BabelDOC), HuggingFace·ModelScope 데모 (자원이 제한적이라 남용 금지)

## 최근 업데이트 (README)

- `--ultrafast`: 텍스트가 살아 있는 PDF 전용 고속 모드. 텍스트 위치 기반 휴리스틱 배치를 쓰고 레이아웃 모델·OCR은 건너뛴다 (2026-10-02).
- 스캔 PDF용 OCR은 **실험적** 지원 (2026-09-08).
- 한글과 영문이 붙는 경계에 공백을 자동으로 넣는다 (2026-10-03).
- **v2.0은 별도 저장소로 분리**됐다: [PDFMathTranslate-next](https://github.com/PDFMathTranslate/PDFMathTranslate-next). 이 저장소에는 `--mode precise`로 v2.0 번역 커널을 시험하는 실험 지원이 있다.

## 주의

- 소개 글: 손글씨·인라인 수식은 오인식될 수 있다.
- **AGPL-3.0**이라 사내 서비스로 가져다 쓰거나 고쳐서 배포할 때 라이선스 조건을 확인해야 한다.
- OpenAI·DeepL 등 외부 번역 엔진을 쓰면 논문 내용이 외부로 나간다. 사내 보안 문서에는 Ollama 같은 로컬 모델 구성을 먼저 확인해야 한다.

## 참고

- README 앞부분 기준으로 정리했고, 번역 품질이나 속도는 직접 돌려 보지 않았다.
