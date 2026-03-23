---
title: "Karpathy의 AutoResearch — AI 에이전트가 이틀에 700개 실험"
date: 2026-03-23
tags: [ai/agent, research/automation, productivity/workflow]
description: "Karpathy가 만든 AutoResearch는 AI 에이전트가 논문 읽기·가설 수립·실험 설계를 자동화해 이틀에 700개 실험을 수행. 학계뿐 아니라 시장조사·경쟁사 분석에도 적용 가능한 구조."
source: "https://www.threads.com/@automation_claire/post/DWOP7zYE_EC"
---

# Karpathy의 AutoResearch — AI 에이전트가 이틀에 700개 실험

Andrej Karpathy가 공개한 [AutoResearch](https://github.com/karpathy/autoresearch)는 AI 에이전트가 LLM 훈련 실험 전 과정을 자동으로 반복 수행하는 프레임워크다. 사람이 몇 달 걸릴 작업을 이틀 만에 700개 실험으로 압축했다.

---

## 작동 방식

에이전트가 아래 루프를 반복한다:

1. **코드 수정** — `train.py` 한 파일만 수정 (모델, 옵티마이저, 훈련 루프 포함)
2. **실험 실행** — 고정 5분 예산으로 훈련
3. **결과 평가** — `val_bpb`(validation bits per byte) 지표로 측정
4. **다음 가설** — 결과를 보고 다음 실험 설계

### 핵심 구조 (3개 파일)

| 파일 | 역할 |
|------|------|
| `prepare.py` | 데이터 준비 + 평가 도구 (수정 불가) |
| `train.py` | 에이전트가 수정하는 유일한 파일 |
| `program.md` | 에이전트 지침 (사용자가 설정) |

---

## 왜 중요한가

학계 연구에만 해당하는 얘기가 아니다. 같은 구조가 비즈니스에 그대로 적용된다:

- **"자료 모으기 → 분석 → 정리"** 반복 파이프라인
- 시장조사, 경쟁사 분석, 트렌드 리서치
- 매주 반복되는 보고서 작성

이 파이프라인을 AI 에이전트에게 맡기면 리서치 시간이 10분의 1로 줄어들 수 있다.

---

## 링크

- GitHub: https://github.com/karpathy/autoresearch
