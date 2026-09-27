---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-159184"
mode: "autonomous"
run_id: "36314221798"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36314221798"
head_sha: "420da22ea0f2844e495eed9844c8b283fe63e8b7"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-27T11:44:06.113Z"
canonical: "https://github.com/openclaw/openclaw/issues/159184"
canonical_issue: "https://github.com/openclaw/openclaw/issues/159184"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-159184

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36314221798](https://github.com/openclaw/clawsweeper/actions/runs/36314221798)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/159184

## Summary

The retry fix is merged on main, but the reported prompt-size rejection still follows a rate-limit copy path that can tell users only to try again later. A narrow fix is warranted. This checkout is read-only and has no node_modules, so I could not add the required failing regression, edit code, or validate a PR branch.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #159184 | fix_needed | planned | canonical | The remaining copy defect needs an owner-boundary regression and a bounded guidance fix. |
| #141260 | keep_related | planned | related | Keep its reset-hint work in its own issue. |
| #159221 | keep_closed | skipped | related | Historical fix for the retry portion; already closed. |
| cluster:issue-openclaw-openclaw-159184 | build_fix_artifact | blocked |  | Implementation is blocked by the read-only checkout. The executor must first demonstrate the failing owner-boundary regression on this main SHA. |

## Needs Human

- none
