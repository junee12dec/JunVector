---
title: "OpenGame — Claude Code·Codex 같은 코딩 에이전트를 게임 스튜디오로 바꿔 주는 오픈소스 (템플릿 25개, 에이전트 22종, MCP 도구 12개, Apache-2.0)"
date: 2026-11-27
tags: [ai/agent, ai/mcp, ai/skill, dev/open-source]
description: "내 로컬 코딩 에이전트에 MCP 서버와 스킬을 붙여 게임을 만들고, 검증·밸런스 시뮬레이션·헤드리스 플레이테스트·트레일러 생성까지 에이전트가 돌리게 한다. 플레이 가능한 템플릿 25개를 한 번에 리믹스할 수 있고, 내 에이전트와 내 API 키(BYOA+BYOK)를 쓴다."
source: "https://www.threads.com/@sinbaktem.lab/post/DgPGFRfFKJN"
---

# OpenGame — 코딩 에이전트를 게임 스튜디오로

- 저장소: https://github.com/nexu-io/opengame (Apache-2.0)
- 소개 글: @sinbaktem.lab (Threads, 2026-11-27) — "미니게임 아이디어를 말로 빨리 굴려 보고 싶은 사람에게". 글은 GitHub README(11/27 확인)를 근거로 했다고 밝혔다.
- 별 수: 글에는 1,434개, 저장 시점에 GitHub에서 다시 확인하니 약 1,674개 (저장소 설명: "Unity & Unreal for AI agents"). 같은 조직(nexu-io)의 `open-design`, `html-anything`는 볼트에 이미 있다.

## 글의 4가지 + README 확인

| 글의 주장 | README |
|---|---|
| 바로 해 볼 수 있는 게임 템플릿 25개 | 맞다. `templates/games/`에 플레이 가능한 HTML5·Canvas·Three.js 템플릿 25개 (3D·복셀·애니메·픽셀·9:16 세로형) |
| 로컬 에이전트 22개와 연결 | 맞다. Claude Code, Codex CLI, Gemini CLI, Cursor, DeepSeek TUI, WorkBuddy 등 22종 (BYOA) |
| 내 에이전트에 내 API 키 | 맞다 (BYOK). 이미지·음악·음성 모델은 Model Settings에 내 키를 넣는다 |
| Apache-2.0 | 맞다 |

저장소 설명에는 "100+ viral games to remix"가 있지만 README 본문의 템플릿은 25개다. 100개 쪽은 로드맵(Top 100 수익 미니게임 템플릿)으로 보인다.

## 어떻게 동작하나

**연결**: 에이전트에게 설정 문서를 따라 하라고 한 줄 시키거나, 진입 스킬을 설치한다.

```sh
npx skills add https://github.com/nexu-io/opengame/tree/skills --skill opengame
```

로컬 스튜디오 실행은 Git·Git LFS·npm·Node.js 22.18+가 필요하다. 클론한 뒤 `npm ci` → `npm run build:studio` → `npm start`. 템플릿을 처음 열 때 에셋을 내려받는다.

**Claude Code 연결**: stdio MCP 항목(`mcp.ts`)을 추가하고 `openmotion-game` 스킬을 설치한 뒤 `/mcp`로 도구가 켜졌는지 확인한다. 게임·에셋·키가 저장소 업데이트와 섞이지 않게 `MOTION_DATA_DIR`은 체크아웃 밖에 둔다.

**MCP 도구 12개** (`openmotion_game_*`): create, get, read_file, write_files, update_meta, validate, simulate, playtest, capture_cover, trailer, set_status, publish. 그 밖에 BYOK 멀티모달 모델을 찾는 `openmotion_media_use`와 에셋 생성·웹 공유를 하는 `openmotion_assets_use`가 있다.

**게임 엔지니어링 스킬**: `openmotion-game` 스킬과 설계·3C(캐릭터·카메라·조작)·게임 필·스타일·플레이어블 광고·품질 게이트를 다루는 참고 문서 18개.

## 핵심 아이디어

- **Game-as-Code 리믹스**: 템플릿은 `index.html`, 결정적 `logic.js`, `design/plan.md`·`style.md`·`assets.csv`·`verification.md`로 이뤄진 열어 볼 수 있는 소스다. 리믹스하면 조작·튜닝·테스트 훅이 이미 붙은 초안이 생기고, 물리와 승패 규칙은 유지한 채 캐릭터·팔레트·스프라이트·음악만 바꾼다. "빈 프롬프트로 완성도 높은 게임을 만들기는 어렵다"는 문제를 검증된 엔지니어링과 테마를 분리해 푼다.
- **에이전트가 코드만 내놓고 끝내지 않는 검증 루프** (README가 `ready`로 바꾸기 전에 강제한다고 설명):
  1. `validate` — 파일 구조·CDN 정책·결정적 export 확인과 50틱 스모크 테스트
  2. `simulate` — 숙련 경로는 승리, 약한 경로·방치는 패배하는지 3단계 결정적 시뮬레이션
  3. `playtest` — 헤드리스 Chromium에서 실제 키보드·마우스·터치로 조작, 390×844 모바일 레이아웃, 콘솔 오류 확인
  4. `capture_cover` — 게임 캔버스에서 1280×720 커버 캡처
  5. `trailer` — 실제 플레이 클립으로 약 19초 트레일러 렌더
- **에셋 대체물**: 키를 안 넣어도 절차적 Canvas/SVG 스프라이트, Web Audio 합성 음악·효과음, 절차적 Three.js 지오메트리로 돌아간다.
- **9:16 플레이어블 광고 모드**(`playableAd: true`)와 로컬 스튜디오 마켓 게시, 웹 공유 링크가 지금 되는 부분이다.

## 로드맵 (README 표의 "진행 중")

위챗·더우인·틱톡·itch.io 등 플랫폼 게시 가이드, 사용자 지정 도메인, 여러 LLM이 라이브 게임에서 맞붙는 아레나. 지금은 순수 HTML5/JS 프로젝트로 내보내 수동으로 플랫폼용 포장을 해야 한다.

## 참고

- 템플릿을 실제로 돌려 보거나 에이전트를 연결해 보지는 않았다. README 기준이다.
- 이 볼트에서는 게임 제작 자체보다 "에이전트가 만든 결과를 검증 도구(simulate·playtest)로 닫는 구조"가 참고가 된다.
