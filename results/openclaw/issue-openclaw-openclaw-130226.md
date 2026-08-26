---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-130226"
mode: "autonomous"
run_id: "33016229171"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33016229171"
head_sha: "afe976209aa58a5629041b42b66f6ee11b2812a7"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-26T21:49:33.162Z"
canonical: "https://github.com/openclaw/openclaw/issues/130226"
canonical_issue: "https://github.com/openclaw/openclaw/issues/130226"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-130226

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33016229171](https://github.com/openclaw/clawsweeper/actions/runs/33016229171)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/130226

## Summary

Confirmed on main aec260b7002cf56232add300f3dd3454c81a10cf: mid-turn preflight preserves the reserve-adjusted budget, but overflow recovery passes raw contextTokenBudget to context-engine compaction. The checkout is read-only, so no branch or validation run could be produced; a narrow, regression-first fix artifact is ready.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #130226 | fix_needed | blocked | canonical | Implementation is blocked only by the worker filesystem policy; the defect and narrow owner-boundary repair are clear. |
| cluster:issue-openclaw-openclaw-130226 | build_fix_artifact | planned | canonical | Create one narrow credited fix PR from clawsweeper/issue-openclaw-openclaw-130226. |

## Needs Human

- none
