---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-158099"
mode: "plan"
run_id: "36141889973"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36141889973"
head_sha: "7ccc3fe0a786c836fd8d91d78603fd31f40681e4"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-25T13:38:41.873Z"
canonical: "https://github.com/openclaw/openclaw/issues/158099"
canonical_issue: "https://github.com/openclaw/openclaw/issues/158099"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-158099

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36141889973](https://github.com/openclaw/clawsweeper/actions/runs/36141889973)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/158099

## Summary

At main dcc9fb958ab2fbc80fdef6d92fe6c190656c39da, deferred Gateway startup calls install discovery before the existing automatic-check opt-out guard. Plan a focused regression and fix; no code or GitHub state was changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| #158099 | fix_needed | planned | canonical | Establish a failing regression at the deferred Gateway startup entry point, then guard automatic initialization for both existing opt-outs while preserving enabled startup and on-demand discovery. |

## Needs Human

- none
