---
title: "MR Office — Word·Excel·PowerPoint·PDF를 브라우저에서 편집하는 오픈소스 AI 오피스, MCP로 Claude·Codex가 실제 Office 파일을 만들고 고친다 (AGPL-3.0)"
date: 2026-11-24
tags: [ai/mcp, productivity/tools, ai/tools]
description: "실제 Word·Excel·PowerPoint·PDF 파일을 편집하는 AI 오피스 스위트. 편집기마다 Copilot이 문서 객체를 직접 고치고 확인 후에만 반영하며, MCP 서버로 Claude Code·Codex·Cursor가 Office 파일을 만들고 읽고 내보낼 수 있다. 편집기 소스는 AGPL-3.0으로 공개됐다."
source: "https://www.threads.com/@aif_daily/post/DgHfektiLoh"
---

# MR Office — AI 오피스 스위트와 Office 파일용 MCP

- 저장소: https://github.com/XinaTian/MROffice (편집기 소스, AGPL-3.0, 저장 시점 약 3,300⭐)
- 서비스: https://mroffice.ai (온라인 + 무료 데스크톱 앱)
- 소개 글: @aif_daily (Threads, 2026-11-24)

## 무엇인가

"Microsoft Office에 가장 가까운 AI 오피스"를 표방한다. 브라우저에서 **문서·스프레드시트·프레젠테이션·PDF·코드** 편집기를 제공하고, 실제 `.docx`·`.xlsx`·`.pptx`·`.pdf` 파일을 다룬다. 실시간 공동 편집, 휴대폰, 데스크톱 앱(오프라인) 지원.

## 파일 안에서 일하는 AI

- **편집기마다 Copilot**: 원하는 부분을 고르거나 동그라미 치고 말하면, 문단·표·셀·수식·도형·슬라이드를 **그 자리에서** 고친다 (채팅에 붙여넣은 텍스트가 아니라 파일의 객체를 직접).
- **검토 후 반영**: AI의 제안은 확인해야만 적용된다. 그 사이 파일이 바뀌면 제안은 무효가 되어 내가 쓴 내용을 덮어쓰지 않는다.
- 워크스페이스의 파일·메모를 출처와 함께 답하는 AI 창, 사람·프로젝트·결정을 기억하는 메모리 그래프, 대화마다 모델 선택.

## 에이전트가 Office 파일을 고치게 하기 (MCP)

Claude, ChatGPT, Cursor, Codex, VS Code 등 MCP 클라이언트가 문서·스프레드시트를 **만들고, 열고, 고치고, 다시 읽고, 그림으로 보고, 내보낸다** (`create_document`, `open_document` 등).

```bash
claude mcp add mroffice -- npx -y mroffice-mcp     # Claude Code
codex mcp add mroffice -- npx -y mroffice-mcp      # Codex
```

설치 없이 호스팅 엔드포인트 `https://mcp.mroffice.ai/mcp`에 MR Office 계정으로 로그인해 쓸 수도 있다. README에 따르면 Word·Excel·PowerPoint 파일은 **내 계정으로 MR Office의 Office 엔진을 거친다**.

## 개발자용

- **내 웹앱에 편집기 넣기**: 서버가 짧은 세션 토큰을 발급하고 페이지에서 `open()`으로 편집기를 연다 (`npx mroffice-embed init`). 수식 엔진·공동 편집·내보내기 포함.
- **OAuth 2.1**: "MR Office로 로그인"을 내 앱에 붙일 수 있다.
- **셀프호스팅**: 이 저장소의 편집기 다섯 개를 npm React 컴포넌트(`mroffice-docs`, `mroffice-sheets`, `mroffice-slides`, `mroffice-pdf`, `mroffice-code`)로 내 제품에 넣을 수 있다. AGPL-3.0이라 수정한 버전을 네트워크로 제공하면 전체 소스를 공개해야 한다.

## 가격 (README, 2026-11 기준)

- 개인·소규모 팀: 온라인과 데스크톱 앱 무료, AI는 하루 무료 사용량
- 내 앱에 넣는 embed: 무료로 시작 (localhost 월 1,000세션 등)
- 사용량이 많은 기업: Starter 월 $29(5,000세션), Pro 월 $149(40,000세션)

## 참고

- README 앞부분 기준으로 정리했다. 온라인·MCP 사용 시 파일이 MR Office 서비스를 거치므로, 사내 보안 문서에는 쓰기 전에 처리 위치를 확인해야 한다.
