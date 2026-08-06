---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-118806"
mode: "autonomous"
run_id: "31068651376"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31068651376"
head_sha: "480d56953f381b127bdc0b5a7029efeeaa717595"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-06T03:36:16.483Z"
canonical: "#118806"
canonical_issue: "#118776"
canonical_pr: "#118806"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-118806

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31068651376](https://github.com/openclaw/clawsweeper/actions/runs/31068651376)

Workflow conclusion: success

Worker result: planned

Canonical: #118806

## Summary

#118806 is the canonical focused repair for #118776. It needs a contributor-branch repair: wildcard allow/alsoAllow entries are not honored when suppressing the new implicit leaf deny for sessions_yield; the existing failed checks and stale branch also require exact-head refresh and validation.

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
| #118776 | keep_related | planned | related | Keep the issue open while its canonical PR receives the required repair and exact-head validation. |
| #118806 | build_fix_artifact | planned | canonical | Repair the writable canonical branch; merge and close actions are disabled by this autofix job. |

## Needs Human

- none
