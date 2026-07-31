---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-116921"
mode: "plan"
run_id: "30649401183"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30649401183"
head_sha: "197d807562e5a5808a8986e161520eccf76ae8af"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-07-31T18:00:54.373Z"
canonical: "https://github.com/openclaw/openclaw/issues/116921"
canonical_issue: "https://github.com/openclaw/openclaw/issues/116921"
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

# issue-openclaw-openclaw-116921

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30649401183](https://github.com/openclaw/clawsweeper/actions/runs/30649401183)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/116921

## Summary

Issue #116921 remains a narrow, reproducible Control UI bug on current main 5332641ed3bab552d23fb16c67bc697a373ea9d7. A positive openRequest still unconditionally expands the rail, overwriting the explicit persisted off preference and sending visible=true. No implementation PR is hydrated in the preflight artifact, so the canonical path is one new, focused credited fix PR.

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
| #116921 | fix_needed | planned | canonical | The hydrated issue evidence and current source agree on a bounded existing-behavior regression. It needs a new narrow implementation PR; no closure or merge action is permitted by this job. |
| cluster:issue-openclaw-openclaw-116921 | build_fix_artifact | planned | canonical | Plan one new fix PR from the prescribed repair branch after first adding and observing the failing hide-to-openRequest regression. |

## Needs Human

- none
