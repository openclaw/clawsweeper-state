---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-120652"
mode: "autonomous"
run_id: "31438822527"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31438822527"
head_sha: "51ac499c741b7b4b9b2bd1b7d78686055f8f3738"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-10T22:43:38.892Z"
canonical: "#120652"
canonical_issue: "#97601"
canonical_pr: "#120652"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-120652

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31438822527](https://github.com/openclaw/clawsweeper/actions/runs/31438822527)

Workflow conclusion: success

Worker result: planned

Canonical: #120652

## Summary

Repair #120652 on its writable same-repo branch: rebase onto current main, preserve the durable-tool-result contract, remove fast-auto suppression bypasses and Telegram's direct fallback, then run focused core/Telegram proof plus the changed gate. Keep #97601 open until the repaired PR is validated and lands.

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
| #97601 | keep_related | planned | related | The issue is the user-facing canonical report, while #120652 is the repair candidate. |
| #120652 | fix_needed | planned | canonical | Repair the existing contributor branch rather than replace it; merge is disabled by the job. |
| #120652 | build_fix_artifact | planned | canonical | A narrow rebase-aware repair artifact is available for the writable source branch. |

## Needs Human

- none
