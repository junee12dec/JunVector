---
title: "태그 체계 (Taxonomy)"
date: 2026-11-15
tags: [meta/project]
description: "볼트에서 쓸 수 있는 태그의 전체 목록과 병합 규칙. 모든 스킬이 태그를 붙일 때 이 문서를 기준으로 삼는다."
---

# 태그 체계

볼트의 모든 노트는 **아래 표에 있는 태그만** 쓴다. 형식은 `대분류/소주제`이고 노트당 1~4개를 붙인다.

## 허용 태그

| 대분류 | 소주제 | 무엇을 담나 |
|--------|--------|-------------|
| `ai` | `claude` | Claude 모델·앱·활용법 전반 |
| | `claude-code` | Claude Code 설정·훅·플러그인·내부 동작 |
| | `agent` | 에이전트 프레임워크·하네스·멀티 에이전트·메모리 |
| | `skill` | 에이전트 스킬 (SKILL.md 형태로 배포되는 것) |
| | `mcp` | MCP 서버·커넥터 |
| | `rag` | RAG·지식 그래프·온톨로지·검색 |
| | `llm` | 모델 자체, 학습·파인튜닝·로컬 실행, 타사 모델 |
| | `prompt` | 프롬프트 모음·작성법 |
| | `image` | 이미지 생성·이미지 프롬프트 |
| | `video` | 영상 생성·모션 영상 |
| | `notebooklm` | NotebookLM |
| | `research` | 논문·동향 리포트·벤치마크 |
| | `tools` | 위에 속하지 않는 AI 도구·서비스 |
| `dev` | `tools` | 개발 도구·라이브러리 일반 |
| | `frontend` | 웹·모바일 UI 구현 |
| | `backend` | 서버·API·DB |
| | `architecture` | 설계·시스템 디자인·리팩토링 |
| | `cli` | 터미널·셸·dotfiles |
| | `self-hosted` | 직접 호스팅하는 서비스 |
| | `infra` | 배포·관측·운영 인프라 |
| | `data` | 데이터 파이프라인·벡터DB·ML 데이터 |
| | `automation` | 브라우저 자동화·노코드·스크립트 자동화 |
| | `open-source` | 오픈소스 모음·큐레이션 |
| `design` | `system` | 디자인 시스템·스타일·미감 |
| | `ui` | 화면·웹 디자인 |
| | `motion` | 모션·애니메이션 |
| | `resources` | 아이콘·폰트·레퍼런스·디자인 도구 |
| | `diagram` | 다이어그램·시각화 |
| | `document` | 문서·전자책 조판 |
| `productivity` | `automation` | 업무 자동화 |
| | `workflow` | 일하는 방식·바이브코딩·계획 |
| | `pkm` | 옵시디언·세컨드 브레인·지식 관리 |
| | `presentation` | 발표자료·PPT |
| | `content` | 글쓰기·콘텐츠 제작·미디어 |
| | `pm` | 프로덕트·프로젝트 관리 |
| | `tools` | 위에 속하지 않는 생산성 도구·템플릿 |
| `strategy` | `enterprise` | 기업의 AI 도입 |
| | `organization` | 조직·팀 설계 |
| | `career` | 커리어·채용·면접 |
| | `business` | 사업·수익화·마케팅 |
| `learning` | `resources` | 학습 자료 모음 |
| | `course` | 강의·코스 |
| | `certification` | 자격증 |
| | `people` | 참고할 사람·크리에이터 |
| `life` | `hotplace` | 장소·맛집·데이트 |
| | `travel` | 여행 |
| | `kids` | 육아·어린이 책 |
| `meta` | `moc` | MOC 파일 전용 |
| | `project` | 볼트 운영·프로젝트 문서 |

## 태그 고르는 규칙

1. **무엇에 관한 글인지**를 첫 태그로 붙인다. 도구 소개면 그 도구의 분야, 사례면 그 사례의 주제.
2. 둘째·셋째 태그는 **어디에 쓰는지**가 다를 때만 붙인다. 같은 뜻의 태그를 겹쳐 붙이지 않는다.
3. 맞는 소주제가 없으면 그 대분류의 `tools` 또는 `resources`를 쓴다. 새 태그를 만들지 않는다.
4. 표에 없는 태그가 꼭 필요하면 노트에 바로 쓰지 말고, 사용자에게 이 문서에 추가할지 먼저 묻는다.

## 자주 헷갈리는 경우

| 이렇게 쓰고 싶어지면 | 이렇게 쓴다 |
|----------------------|-------------|
| `dev/tool`, `ai/tool` | `dev/tools`, `ai/tools` |
| `ai/agents`, `agent/*`, `ai/coding-agent` | `ai/agent` |
| `ai/agent-skills`, `agent/skill`, `tool/skill` | `ai/skill` |
| `ai/prompt-engineering`, `productivity/prompt`, `design/prompt` | `ai/prompt` |
| `ai/image-generation` | `ai/image` |
| `dev/knowledge-graph`, `dev/rag` | `ai/rag` |
| `productivity/obsidian`, `pkm/*`, `productivity/knowledge-management` | `productivity/pkm` |
| `selfhosted/*` | `dev/self-hosted` |
| `productivity/team`, `strategy/ax` | `strategy/organization` |
| `lifestyle/*` | `life/hotplace` |
| `people/*` | `learning/people` |
| `media/*`, `video/youtube` | `productivity/content` |
