---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122295"
mode: "autonomous"
run_id: "31543212443"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31543212443"
head_sha: "83dddd63e750a50bd2ada147f3a7cc8feffeff9f"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-11T22:47:38.308Z"
canonical: "#122295"
canonical_issue: "#122295"
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

# issue-openclaw-openclaw-122295

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31543212443](https://github.com/openclaw/clawsweeper/actions/runs/31543212443)

Workflow conclusion: success

Worker result: blocked

Canonical: #122295

## Summary

Current main reproduces #122295: the Teams monitor derives inbound media limits only from agent defaults, unlike the plugin’s shared resolver used on outbound paths. A writable checkout is required to apply and validate the narrow two-file fix.

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
| #122295 | fix_needed | blocked | canonical | The filesystem sandbox is read-only, preventing the required source/test edits, dependency installation, branch update, and PR creation. |
| #122295 | build_fix_artifact | planned | canonical |  |

## Needs Human

- none
