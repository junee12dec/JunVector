---
title: "공식 MCP 레퍼런스 서버 5개 — sequential-thinking·memory·filesystem·fetch·git (설치 명령 포함)"
date: 2026-11-23
tags: [ai/mcp, ai/claude-code]
description: "Claude Code에 붙이기 좋은 MCP 공식 저장소의 레퍼런스 서버 5개와 설치 명령. 단, 공식 README는 이 서버들을 실서비스용이 아니라 MCP 기능을 보여 주는 학습용 예시라고 경고한다."
source: "https://www.threads.com/@starlight_korean/post/DgE1cJhCdVJ"
---

# 공식 MCP 레퍼런스 서버 5개

@starlight_korean (Threads, 2026-11-23): "클로드 코드 쓸 때 이것도 안 깔면 손해. 깃허브 별 9만 2천 개 넘은 공식 MCP 서버 5개."
글은 설치 명령을 "댓글을 남기면 보내 준다"고 했지만, 아래 명령은 공식 저장소의 각 서버 README에서 직접 확인했다.

- 저장소: https://github.com/modelcontextprotocol/servers (MCP 운영 그룹이 관리)
- 별 약 92,000개는 **저장소 전체**의 수치다 (서버 하나하나의 수치가 아니다).

## 5개 서버

| # | 서버 | 하는 일 (글 설명) | 설치 실행 명령 |
|---|------|-------------------|----------------|
| 1 | sequential-thinking | 복잡한 설계·버그를 단계별 사고로 쪼개 스스로 검증 | `npx -y @modelcontextprotocol/server-sequential-thinking` |
| 2 | memory | 세션이 끊겨도 프로젝트 규칙·맥락을 지식 그래프로 기억 | `npx -y @modelcontextprotocol/server-memory` |
| 3 | filesystem | 허용한 폴더만 지정해 안전하게 파일 읽기·쓰기 | `npx -y @modelcontextprotocol/server-filesystem <허용할 폴더>` |
| 4 | fetch | 문서·API URL을 LLM이 읽기 좋게 가져오기 | `uvx mcp-server-fetch` |
| 5 | git | 커밋 이력·diff·브랜치 상태를 대화에서 조회 | `uvx mcp-server-git --repository <레포 경로>` |

Claude Code에 붙이는 형태 (예):

```bash
claude mcp add sequential-thinking -- npx -y @modelcontextprotocol/server-sequential-thinking
claude mcp add fetch -- uvx mcp-server-fetch
```

(각 서버 README에는 Codex용 `codex mcp add ...`와 `--transport streamable-http` 실행 예도 있다.)

같은 저장소의 레퍼런스 서버는 이 5개 외에 Everything(테스트용), Time(시간대 변환)이 있다. GitHub, Slack, PostgreSQL, Puppeteer 등 예전 서버들은 별도 저장소(servers-archived)로 옮겨졌다.

## 공식 README의 경고

> 이 저장소의 서버는 MCP 기능과 SDK 사용법을 보여 주는 **레퍼런스 구현**이다. 자기 MCP 서버를 만드는 개발자를 위한 **학습용 예시**이지, **실서비스용 해법이 아니다**. 각자의 보안 요구와 위협 모델에 맞게 보호 장치를 직접 갖춰야 한다.

→ 특히 filesystem·git처럼 파일과 저장소에 접근하는 서버는 허용 범위를 좁게 잡아 쓴다. MCP 서버 목록을 찾는다면 공식 레지스트리(https://registry.modelcontextprotocol.io/)를 보라고 안내한다.

## 참고

- 글의 첨부 카드 7장 중 2장(1번 sequential-thinking 카드, 마지막 "댓글 남기기" 카드)을 확인했다.
- Claude Code 자체에도 파일 읽기·쓰기, 웹 가져오기, git 명령 실행 기능이 있어서, filesystem·fetch·git 서버가 꼭 필요한지는 쓰는 환경에 따라 다르다.
