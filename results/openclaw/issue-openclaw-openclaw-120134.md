---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120134"
mode: "autonomous"
run_id: "31155296593"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31155296593"
head_sha: "f6f6bfca7d65aa54eec9daa82ab84cda9ad6e0e8"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-07T07:24:24.847Z"
canonical: "https://github.com/openclaw/openclaw/issues/120134"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120134"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-120134

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31155296593](https://github.com/openclaw/clawsweeper/actions/runs/31155296593)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/120134

## Summary

Current main reproduces the Windows Scheduled Task restart defect at source level. A narrow owner-boundary fix is ready as an artifact; implementation and validation are blocked because this checkout is read-only and lacks node_modules/p-map.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #63491 | keep_related | planned | related | Keep open as a related Windows Scheduled Task investigation; this narrow repair does not resolve its broader listener-loss report. |
| #90158 | keep_related | planned | related | The reported /Run failure occurs after #120134's cleanup-and-port-release stage and needs a separate recovery-policy decision. |
| #99518 | route_security | planned | security_sensitive | Approval-boundary policy is outside this ordinary bug-fix lane. |
| #120134 | fix_needed | planned | canonical | A verified-snapshot ancestor check can narrowly preserve the restarting CLI while retaining ordinary external tree cleanup and the existing port-release failure. |
| cluster:issue-openclaw-openclaw-120134 | build_fix_artifact | blocked | canonical | Executor should apply the narrow artifact on clawsweeper/issue-openclaw-openclaw-120134, install dependencies remotely, and obtain Windows lifecycle proof before opening the PR. |

## Needs Human

- none
