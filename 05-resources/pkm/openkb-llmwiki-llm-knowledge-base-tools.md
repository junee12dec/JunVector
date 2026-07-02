---
title: "openkb·llmwiki로 LLM 지식베이스 구축하기 — 설치·사용법 실전 가이드"
date: 2026-05-15
tags: [ai/llm, pkm/knowledge-base, dev/tool, agent/mcp]
description: "Karpathy의 LLM Wiki 패턴을 실제로 구현한 두 오픈소스 도구 openkb(pip CLI)와 llmwiki(Claude MCP 연동)의 설치 방법, 주요 명령어, 작동 방식을 정리한 실전 가이드."
source: "https://m.blog.naver.com/pjt3591oo/224280557887"
---

# openkb·llmwiki로 LLM 지식베이스 구축하기

Karpathy의 LLM Wiki 아이디어를 실제로 구현한 두 오픈소스 도구 사용법 정리.  
→ 개념 정리: [[llm-wiki-self-updating-knowledge-base-karpathy]]

---

## OpenKB

**GitHub**: https://github.com/VectifyAI/OpenKB  
**특징**: pip로 설치하는 CLI 도구. 벡터DB 없이 장문서 처리 가능.

### 설치

```bash
pip install openkb
# 또는 최신 버전
pip install git+https://github.com/VectifyAI/OpenKB.git
```

### 기본 사용법

```bash
mkdir my-kb && cd my-kb
openkb init          # 초기화
openkb add paper.pdf # 문서 추가
openkb query "질문"  # 질의
openkb chat          # 대화형 인터페이스
```

### 주요 명령어

| 명령어 | 설명 |
|--------|------|
| `openkb watch` | raw/ 폴더 자동 감시 — 파일 추가 시 자동 업데이트 |
| `openkb lint` | 위키 건강성 검사 (모순·고아 페이지 탐지) |
| `openkb chat` | 대화형 인터페이스 (세션 저장 지원) |

### 지원 포맷

PDF, Word, Markdown, PowerPoint, HTML, Excel + 이미지·표(멀티모달)

### 작동 방식

- **짧은 문서**: markitdown으로 변환 후 전체 텍스트 처리
- **긴 PDF**: PageIndex로 계층적 트리 인덱스 생성 → 벡터DB 없이 정확한 검색
- 문서 한 편 처리 시 위키 페이지 10~15개에 자동 영향

---

## llmwiki

**GitHub**: https://github.com/lucasastorian/llmwiki  
**특징**: Claude MCP로 연동 — Claude가 직접 위키를 작성·유지

### 설치

```bash
git clone https://github.com/lucasastorian/llmwiki.git
cd llmwiki

# API 서버
cd api && python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

# 웹 프론트엔드
cd ../web && npm install

# 초기화 및 실행
./llmwiki init ~/research
./llmwiki serve ~/research
```

**요구사항**: Python 3.11+, Node.js 20+

### Claude MCP 연동

```bash
./llmwiki mcp-config ~/research
# → JSON 스니펫을 Claude Desktop 설정에 추가
```

Claude에 다음과 같이 지시:
> "Read the guide, then ingest my sources and start building"

### Claude가 사용하는 도구

| 도구 | 설명 |
|------|------|
| `guide` | 워크스페이스 설명 및 파일 목록 |
| `search` | 파일 검색 |
| `read` | 문서 읽기 |
| `write` | 위키 페이지 작성 |
| `delete` | 문서 삭제 |

### 폴더 구조

```
~/research/
  papers/        ← 원본 논문·자료
  notes.md       ← 메모
  wiki/          ← Claude가 생성한 마크다운 위키
  .llmwiki/      ← SQLite 인덱스
```

---

## 두 도구 비교

| 항목 | openkb | llmwiki |
|------|--------|---------|
| 설치 | `pip install` | git clone |
| AI 연동 | 자체 LLM API | Claude MCP |
| 인터페이스 | CLI | CLI + 웹 UI |
| 자동화 | watch 모드 | Claude 직접 실행 |
| 장문서 처리 | PageIndex (벡터DB 불필요) | 표준 인덱싱 |

---

## 관련 노트

- [[llm-wiki-self-updating-knowledge-base-karpathy]] — LLM Wiki 패턴 개념 정리
