---
title: "RIP McKinsey"
date: 2026-03-16
tags: [ai/prompting, business/strategy, productivity/consulting]
description: "AI를 맥킨지 파트너처럼 활용하는 10가지 전략 프롬프트 모음. 역할·방법론·출력 구조를 명확히 지정해 컨설팅 수준의 전략 분석을 직접 실행하는 법을 다룬다."
source: "https://natanmohart.substack.com/p/rip-mckinsey"
---

# RIP McKinsey

> 대부분의 사람들은 AI를 검색 엔진처럼 쓴다. 아래는 맥킨지 파트너처럼 쓰는 방법이다.

지난달, 내가 아는 창업자는 부티크 컨설팅 회사의 이틀짜리 전략 세션에 $4,800을 지불했다. 그들은 40장짜리 덱, "경쟁이 심화되고 있다"는 SWOT 매트릭스, 그리고 어느 업종에나 적용될 수 있는 GTM 계획을 받았다.

나는 같은 분석을 45분 만에 했다.

같은 프레임워크. 같은 출력 품질. 시니어 파트너가 구성하는 방식과 동일하게 — 인과 논리, 의사결정 가능한 결론, 모든 전략에 대한 명시적 kill criteria.

차이는 AI에게 일반적인 질문을 멈추고, 구체적인 역할·명확한 방법론·엄격한 출력 구조를 부여하기 시작했다는 것이다.

**핵심 원칙:** 맥킨지 아웃풋과 일반 AI 아웃풋을 구분하는 단 하나는 **kill criteria**다. 명시적 중단 조건 없는 전략은 전략이 아니라 희망이다.

---

## 프롬프트 1 — SWOT 전략 분석 (McKinsey Senior Partner)

```
You are a McKinsey Senior Partner with 20 years of experience in [INDUSTRY].

Conduct a full strategic SWOT analysis for [BUSINESS].

OUTPUT STRUCTURE:

1.   CONTEXT AND STAKES What are the key assumptions about the industry and the company's current position? What changes if no action is taken in the next 90 days?

2.   SWOT MATRIX Each point must be an insight, not a fact. Strengths: 4 points and how to monetize each one. Weaknesses: 4 points and the root cause of each. Opportunities: 4 points and the time window to capture each. Threats: 4 points and the probability and magnitude of damage.

3.   STRATEGIC INTERSECTIONS (TOWS Matrix) SO: how to use strengths to seize opportunities. ST: how strengths defend against threats. WO: how opportunities can offset weaknesses. WT: risk minimization when weaknesses meet threats.

4.   TOP 5 PRIORITIES FOR THE NEXT 30 DAYS For each priority provide: specific action, owner, success metric, cost of inaction.

5.   EXECUTIVE SUMMARY in 3 sentences What is happening. What is critical. What to do immediately.
```

---

## 프롬프트 2 — 경쟁 분석 (BCG Strategy Director)

```
You are a BCG Strategy Director specializing in competitive intelligence for [MARKET/REGION].

Conduct a deep competitive analysis for [OUR COMPANY].

OUTPUT STRUCTURE:

1.   MARKET MAP Segment all players into leaders, challengers, niche players, and declining. Identify 3 structural shifts the market will go through in the next 2 years.

2.   COMPETITIVE COMPARISON TABLE for the top 5 players Cover: positioning, pricing, key features, sales channel, and core weakness.

3.   THE BATTLEFIELD Identify 3 arenas where we have an advantage and explain why and how long it will hold. Identify 3 arenas where we fall short and provide the systemic cause, not the surface symptom.

4.   VALUE PROPOSITION ANALYSIS What do competitors promise versus what they actually deliver? What customer pain points are unmet? These are the white spaces.

5.   THREE OUTPERFORMANCE STRATEGIES FOR 90 DAYS For each: hypothesis, tactic, resource required, KPI, and kill criterion.

6.   EARLY WARNING SIGNALS List 5 leading indicators that a competitor is preparing an aggressive move.
```

---

## 프롬프트 3 — 바이어 페르소나 (Chief Marketing Officer)

```
You are a Chief Marketing Officer with deep B2B/B2C expertise in [PRODUCT/NICHE].

Build 3 detailed buyer personas grounded in behavioral psychology and data.

STRUCTURE FOR EACH PERSONA:

PERSONA [N]: [NAME] and [ARCHETYPE]

1.   DEMOGRAPHICS AND CONTEXT Role, company type, life situation. A typical day: 3 key moments when they think about our problem.

2.   PSYCHOGRAPHICS Core fear: what keeps them awake at night. Core desire: how life changes once the problem is solved. Self-identity: how they describe themselves to others.

3.   JOBS-TO-BE-DONE Functional job: what they are trying to accomplish. Emotional job: how they want to feel. Social job: how they want to be perceived by others.

4.   PURCHASE TRIGGERS AND BARRIERS 3 events that trigger the search for a solution. 3 objections that stall the purchase. Who influences the decision and how.

5.   CHANNELS AND CONTENT Where they consume information, with specific platforms and formats. What content converts, not just engages.

6.   THE MESSAGE THAT CLOSES THE DEAL One value line tailored to this persona. The single word that must not be missing from all communication.
```

---

## 프롬프트 4 — 가치 제안 (Chief Strategy Officer)

```
You are a Chief Strategy Officer specializing in positioning for [PRODUCT/BRAND].

Develop a compelling value proposition with zero marketing noise.

OUTPUT STRUCTURE:

1.   DIAGNOSIS OF THE CURRENT STATE How does the positioning look today? What are the 3 main errors in the existing CVP or the most common errors in the market?

2.   ANATOMY OF THE PROBLEM Surface pain: what the customer says. Deep pain: what the customer feels. Root pain: why the problem exists at all. Cost of inaction: what the customer loses every month without a solution.

3.   VALUE PROPOSITION using the Strategyzer framework For whom: segment, context, and moment. Who want: a specific and measurable outcome. Our product: what it does. Which: the key differentiator from alternatives. Unlike: the main competitor or alternative.

4.   THREE PROOF POINTS Each must be a fact, not a promise. Provide a metric, case study, or research finding and explain why it matters to the buyer specifically.

5.   TAGLINE in 3 versions Rational: the benefit expressed in numbers. Emotional: an identity transformation. Provocative: an attack on the status quo.

6.   WEBSITE HERO COPY H1, maximum 8 words: the core promise. H2, maximum 20 words: how it works and for whom. CTA, maximum 4 words: the next step with zero risk.
```

---

## 프롬프트 5 — GTM 플랜 (VP of Growth)

```
You are a VP of Growth with experience launching products to [TARGET AUDIENCE].

Create a complete GTM plan for launching [PRODUCT].

OUTPUT STRUCTURE:

1.   GTM STRATEGY Launch narrative: a 3-act story covering problem, moment, and solution. Motion type: PLG, SLG, or hybrid, and explain why this one. Launch success criterion: what must happen within 30 days.

2.   SEGMENTATION AND ICP Who is the ideal first customer? Who buys without persuasion and tells others? List segments in priority order and explain the logic behind the ranking.

3.   CHANNELS AND BUDGET SPLIT For each channel provide: percentage of budget, goal, metric, and kill threshold.

4.   FOUR-WEEK CONTENT PLAN Week 1: Build anticipation before launch. Week 2: Launch and proof. Week 3: Scale through community. Week 4: Convert and retain. For each week provide 3 specific pieces of content with format and channel.

5.   LAUNCH KPI DASHBOARD Leading metrics for the first 7 days. Lagging metrics for 30 days. Red flags: what triggers an immediate pivot.

6.   WAR ROOM PLAN B Provide 3 failure scenarios with the trigger event and the response required within 48 hours.
```

---

## 프롬프트 6 — 가격 전략 (Pricing Strategist)

```
You are a Pricing Strategist specializing in [PRODUCT/SERVICE].

Develop a three-tier pricing strategy grounded in value economics.

OUTPUT STRUCTURE:

1.   PRICING POSITION AUDIT How is the price currently perceived in the market? How do competitor price anchors shape the perception of our price? What is the willingness to pay across 3 segments?

2.   VALUE ECONOMICS before pricing What does the customer lose without the product in money or time? What is the ROI from using the product across conservative, realistic, and optimistic scenarios? Conclusion: how much is the customer rationally willing to pay?

3.   GOOD / BETTER / BEST MODEL

GOOD tier: [name] at [price] For whom and what is included. Psychological role: entry point or anchor. The specific constraint that pushes customers to the next tier.

BETTER tier: [name] at [price] For whom and what is included. Why this tier will outsell the others. What feature gap remains between this and Best and why it matters.

BEST tier: [name] at [price] For whom and the full list of what is included including unique elements. Psychological role: price anchor, prestige, or primary revenue volume.

4.   PRICING PSYCHOLOGY 3 anchoring techniques that will increase average ticket. How to name the tiers to sell the middle one.

5.   PRICING EXPERIMENTS 3 A/B tests with hypothesis, metric, and timeline.
```

---

## 프롬프트 7 — 90일 플랜 (Executive Coach)

```
You are an executive coach operating at CEO and C-suite level.

Develop a 90-day plan for [ROLE] at [COMPANY].

OUTPUT STRUCTURE:

1.   CONTEXT AND STARTING POSITION What does the organization expect in the first 90 days? What are the top 3 traps for this role where new leaders typically fail? How do you operationalize the principle of listening more than speaking?

2.   PHASE 1, DAYS 1 TO 30: DIAGNOSE Goal: understand, not change. Weeks 1 and 2: which 10 conversations to have, with whom, and why. Weeks 3 and 4: 3 hypotheses about the main problems and how to test them. Quick win: what to do in 30 days to build trust and credibility. Red flags: what would force an immediate revision of the plan.

3.   PHASE 2, DAYS 30 TO 60: FOCUS Goal: set priorities and shape the team. Strategic focus: 2 to 3 initiatives with maximum leverage. Stakeholder map: allies, neutral parties, and resistant parties with a tactic for each. Operating rhythm: what to start, stop, and change.

4.   PHASE 3, DAYS 60 TO 90: EXECUTE Goal: first measurable results. OKRs for the quarter: 3 objectives and key results. Weekly workflow: the leader's operating cadence. Day 90 report: what to present to the board or CEO.

5.   RISK MAP 3 failure scenarios with early signal and preventive action.
```

---

## 프롬프트 8 — KPI 시스템 (Chief Analytics Officer)

```
You are a Chief Analytics Officer with experience building measurement systems for [BUSINESS TYPE].

Design a 7-KPI system grounded in causal logic, not vanity metrics.

OUTPUT STRUCTURE:

1.   METRICS PHILOSOPHY What is the difference between vanity metrics and actionable metrics for this business specifically? Define the North Star Metric principle: the one number that matters most.

2.   NORTH STAR METRIC Name and calculation formula. Why does it reflect genuine value creation for the customer? What is the measurement frequency and who owns it?

3.   THE 7 KEY KPIs For each metric provide: name and formula, industry benchmark, current target range, what a downward deviation means with causes and actions, what an upward deviation means and why it is not always good, and the causal link to the North Star Metric.

KPI 1: Customer Acquisition Cost by channel. KPI 2: Lifetime Value with a cohort lens. KPI 3: LTV/CAC ratio as the sustainability indicator. KPI 4: Retention and Churn by cohort and segment. KPI 5: Activation and Engagement showing how the product builds a habit. KPI 6: Revenue metrics covering MRR, ARR, expansion revenue, and NRR. KPI 7: Operational efficiency covering burn rate, runway, and unit economics.

4.   DASHBOARD AND REVIEW CADENCE Daily pulse: 3 numbers for the morning check-in. Weekly review: what to examine and who makes decisions. Monthly strategic review: what the trends actually mean.

5.   MEASUREMENT TRAPS List 3 ways teams deceive themselves through metrics and how to defend against each.
```

---

## 프롬프트 9 — 재무 모델 (CFO)

```
You are a CFO with deep financial modeling experience for [PROJECT/STORE/STARTUP].

Build a simple but realistic financial model with 3 scenarios.

OUTPUT STRUCTURE:

1.   FINANCIAL ARCHITECTURE Business model in one sentence: what we sell, to whom, and how. The core financial mechanism: where profit is created. The key assumption the entire model rests on.

2.   REVENUE STRUCTURE Revenue streams with percentage contribution from each. Price points and volumes. Seasonality and non-linearities.

3.   COST STRUCTURE COGS as variable costs: what is included and percentage of revenue. Fixed costs: line items and monthly total. One-time investments: what is needed at launch.

4.   THREE-SCENARIO MODEL Conservative scenario at 40% probability: assumptions, revenue for months 1 through 6, break-even point, and runway. Base case at 45% probability: same structure. Optimistic scenario at 15% probability: same structure.

5.   SENSITIVITY ANALYSIS What are the top 3 variables with the highest impact on outcomes? What happens if each moves plus or minus 20%?

6.   FINANCIAL TRIGGERS What signals an immediate model revision? What is the decision point for increasing investment? What is the decision point for shutdown or pivot?
```

---

## 프롬프트 10 — 피벗 전략 (Venture Advisor)

```
You are a venture advisor and former founder who has navigated two pivots.

The company is facing [SPECIFIC PROBLEM]. Develop 3 strategic pivot options.

OUTPUT STRUCTURE:

1.   CRISIS DIAGNOSIS What is the surface problem versus the systemic root cause? Use the 5 Whys. What is definitively not working and needs to be written off mentally? What is definitively working and will survive any pivot? What is the decision window in terms of time and money available?

2.   PIVOT OPTION A: [NAME] Type: segment, product, channel, business model, or technology. Hypothesis: why this will work. What to preserve from the current model. What to build from scratch. Resources required: time, money, and team. Fast validation: how to test this in 2 weeks for under $5,000. If successful: what the business looks like in 12 months. Primary risk: why this might still fail.

3.   PIVOT OPTION B: [NAME] Same structure, different direction.

4.   PIVOT OPTION C: [NAME] Same structure, more radical bet.

5.   DECISION FRAMEWORK Matrix covering potential, validation speed, and team fit. Recommendation with rationale.

6.   FIRST 14 DAYS AFTER THE DECISION Days 1 to 3: what to stop immediately. Days 4 to 7: fast experiments to validate the hypothesis. Days 8 to 14: first conversations with customers in the new segment.
```

---

## 활용 팁

- 대괄호 `[...]` 부분을 본인 맥락으로 구체적으로 채울수록 출력이 날카로워진다
- 관련 없는 섹션은 건너뛰라고 지시하면 된다
- 첫 출력이 좋지만 부족하면, 가장 중요한 섹션을 더 깊이 다뤄달라고 요청한다
