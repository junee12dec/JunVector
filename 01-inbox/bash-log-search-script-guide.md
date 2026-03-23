---
title: "Bash 로그 검색 스크립트 실전 가이드"
date: 2026-03-23
tags: [dev/bash, dev/linux, learning/scripting]
description: "grep을 활용한 실무 로그 검색 기법. 날짜/시간 필터링, 다중 조건, 결과 저장, 재사용 함수까지 실전 예제로 익히는 Bash 스크립트 작성법."
source: "https://www.threads.com/@ai.corder/post/DWNgjrEEawX"
---

# Bash 로그 검색 스크립트 실전 가이드

실무에서 바로 사용 가능한 로그 검색 스크립트 작성법. grep, 날짜/시간 필터링, 여러 조건 조합, 결과 저장, 대소문자 무시 검색, 재사용 가능한 함수까지 실전 예제와 함께 익힌다.

---

## 1. grep으로 로그 검색하기

grep은 파일 안에서 특정 단어나 패턴을 찾아주는 검색 도구. 웹 브라우저의 Ctrl+F와 비슷하지만 훨씬 강력하다.

```bash
# ERROR가 포함된 줄 검색
grep "ERROR" /var/log/app.log

# 줄 번호와 함께 출력
grep -n "ERROR" /var/log/app.log

# 색상 강조로 출력
grep --color "ERROR" /var/log/app.log
```

수천 줄의 로그에서 몇 초 만에 필요한 정보만 추출할 수 있다.

---

## 2. 특정 날짜/시간 로그 추출

로그의 타임스탬프 패턴을 이용해 원하는 시간 범위를 지정한다.

```bash
# 특정 날짜 로그 추출
grep "2024-11-18" /var/log/app.log

# 특정 시간대 (14시~14시59분)
grep "2024-11-18 14:" /var/log/app.log

# 정규표현식으로 14:30~14:39 범위
grep "2024-11-18 14:3[0-9]" /var/log/app.log
```

정규표현식으로 시간 범위를 지정하면 장애 발생 시점을 빠르게 분석할 수 있다.

---

## 3. 여러 조건으로 필터링

AND(그리고)나 OR(또는) 논리로 여러 검색 조건을 동시에 적용한다.

```bash
# AND : ERROR이면서 payment 포함
grep "ERROR" /var/log/app.log | grep "payment"

# 3중 AND : 날짜 + ERROR + user_id
grep "2024-11-18" /var/log/app.log | grep "ERROR" | grep "user_id: 12345"

# OR : ERROR 또는 WARN
grep -E "ERROR|WARN" /var/log/app.log
```

파이프(|)로 grep을 연결하면 여러 조건을 동시에 적용할 수 있다. AND, OR, NOT 논리로 정확히 원하는 로그만 추출한다.

---

## 4. 검색 결과 파일로 저장

터미널에 출력되는 내용을 파일로 보내는 리다이렉션 기법.

```bash
# 새 파일로 저장 (덮어쓰기)
grep "ERROR" /var/log/app.log > error_logs.txt

# 기존 파일에 추가
grep "WARN" /var/log/app.log >> error_logs.txt

# 필터링 후 저장
grep "2024-11-18" /var/log/app.log | grep "ERROR" > today_errors.txt
```

`>` 기호로 검색 결과를 파일로 저장할 수 있다. 결과를 보관, 공유, 추가 분석할 때 필수적인 기능.

---

## 5. 대소문자 구분 없이 검색

"error", "Error", "ERROR", "eRRoR" 등 모든 대소문자 조합을 동일하게 취급하는 검색 방식.

```bash
# 대소문자 무시로 error 검색 (error, Error, ERROR 모두)
grep -i "error" /var/log/app.log

# 파이프와 함께 사용
grep -i "error" /var/log/app.log | grep -i "payment"

# 줄 번호 + 색상 + 대소문자 무시
grep -in --color "error" /var/log/app.log
```

`-i` 옵션으로 대소문자를 구분하지 않고 검색. "error", "Error", "ERROR" 등 모든 변형을 한 번에 찾아낸다.

---

## 6. 재사용 가능한 검색 함수

자주 사용하는 검색 패턴을 함수로 만들어 재사용한다.

```bash
# ~/.bashrc 또는 ~/.zshrc에 추가
search_log() {
    local keyword="$1"
    local logfile="${2:-/var/log/app.log}"
    grep -in --color "$keyword" "$logfile"
}

# 사용 예시
search_log "ERROR"
search_log "payment" /var/log/payment.log
```

함수로 만들면 매번 긴 명령어를 타이핑하지 않아도 된다.

---

## 핵심 옵션 정리

| 옵션 | 기능 |
|------|------|
| `-n` | 줄 번호 표시 |
| `-i` | 대소문자 무시 |
| `-E` | 확장 정규표현식 (OR 조건에 사용) |
| `--color` | 매칭 부분 색상 강조 |
| `>` | 결과를 파일로 저장 (덮어쓰기) |
| `>>` | 결과를 파일에 추가 |
| `\|` | 파이프로 AND 조건 연결 |
