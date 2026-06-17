---
title: "CLI 마법사가 되는 터미널 도구 5선 — bottom·starship·eza·zoxide·atuin"
date: 2026-06-05
tags: [dev/cli, dev/tool, productivity/terminal]
description: "htop·ls·cd·history 등 기본 셸 명령을 현대적으로 대체하는 Rust 기반 터미널 도구 5개 모음. 시스템 모니터·커스텀 프롬프트·파일 목록·디렉터리 점프·셸 히스토리 검색을 각각 업그레이드한다."
source: "https://www.threads.com/@githubprojects/post/DZWcNngFEj_"
---

# CLI 마법사가 되는 터미널 도구 5선

---

## 1. bottom (btm) — 현대적인 시스템 모니터

**GitHub**: https://github.com/ClementTsang/bottom

> htop보다 아름답고 기능 풍부한 시스템 모니터

- CPU·메모리·디스크·네트워크·프로세스를 TUI로 시각화
- Rust 기반, 크로스플랫폼

```bash
# 설치
brew install bottom     # macOS
cargo install bottom    # Cargo
```

---

## 2. starship — 어떤 셸에서도 동작하는 초고속 프롬프트

**GitHub**: https://github.com/starship/starship

> bash·zsh·fish·PowerShell 등 모든 셸 지원

- Git 브랜치·언어 버전·클라우드 상태 등 자동 표시
- Rust로 작성, 밀리초 단위 응답

```bash
curl -sS https://starship.rs/install.sh | sh
```

---

## 3. eza — Git 통합 + 컬러를 갖춘 ls 대체제

**GitHub**: https://github.com/eza-community/eza

> `ls` 명령의 현대적 재구현

- Git 상태 컬러링, 트리 뷰, 아이콘 지원
- `exa`의 후속 커뮤니티 포크

```bash
brew install eza
alias ls='eza'
```

---

## 4. zoxide — 사용 습관을 학습하는 스마트 cd

**GitHub**: https://github.com/ajeetdsouza/zoxide

> 자주 방문한 디렉터리를 학습해 `z foo` 한 번으로 이동

- fzf와 연동해 대화형 선택 가능
- bash·zsh·fish·PowerShell·nushell 지원

```bash
brew install zoxide
eval "$(zoxide init bash)"  # .bashrc에 추가
```

---

## 5. atuin — 검색·동기화·통계가 있는 마법 셸 히스토리

**GitHub**: https://github.com/atuinsh/atuin

> 모든 기기의 셸 히스토리를 암호화해 동기화

- SQLite 기반 전체 컨텍스트 저장 (실행 시간·디렉터리·종료 코드)
- `Ctrl+R` 대화형 퍼지 검색
- 셀프호스팅 동기화 서버 지원

```bash
bash <(curl https://raw.githubusercontent.com/atuinsh/atuin/main/install.sh)
```

---

## 한눈에 비교

| 도구 | 대체 대상 | 핵심 장점 |
|------|-----------|-----------|
| bottom | htop | TUI 시각화, 다양한 위젯 |
| starship | 기본 PS1 | 어떤 셸도 지원, 초고속 |
| eza | ls | Git 상태·아이콘·트리 |
| zoxide | cd | 학습형 디렉터리 점프 |
| atuin | Ctrl+R | 동기화·통계·컨텍스트 히스토리 |
