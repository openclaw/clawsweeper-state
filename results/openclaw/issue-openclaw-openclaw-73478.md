---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-73478"
mode: "plan"
run_id: "30744624314"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30744624314"
head_sha: "7e4d8cb7cee432b87afec79e1fbfa3209c084474"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-02T10:58:43.938Z"
canonical: "https://github.com/openclaw/openclaw/issues/73478"
canonical_issue: "https://github.com/openclaw/openclaw/issues/73478"
canonical_pr: "https://github.com/openclaw/openclaw/pull/117951"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-73478

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30744624314](https://github.com/openclaw/clawsweeper/actions/runs/30744624314)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/73478

## Summary

Keep #73478 open as the canonical bug report and retain #117951 as its active, validated implementation PR. Current main still projects assistant events as text-only: `resolveAssistantLiveChatInput` accepts only text/delta and the delta payload constructs only a text content block, so the issue remains reproducible until #117951 lands. #81136 is closed historical design context and receives no further mutation.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| https://github.com/openclaw/openclaw/issues/73478 | keep_canonical | planned | canonical | The report remains valid on current main and #117951 is the single active implementation path. Closure and merge are blocked by this job, so this plan makes no mutating recommendation. |
| https://github.com/openclaw/openclaw/pull/117951 | keep_canonical | planned | canonical | This is the active, narrow candidate for the canonical issue. Keep it as the implementation path; do not merge in this plan because the job explicitly blocks merge and requires human approval. |
| https://github.com/openclaw/openclaw/pull/81136 | keep_closed | skipped | superseded | Historical design context only; retain contributor context without reopening, closing, or otherwise mutating the already-closed PR. |

## Needs Human

- none
