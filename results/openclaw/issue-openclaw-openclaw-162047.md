---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-162047"
mode: "autonomous"
run_id: "36761499676"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36761499676"
head_sha: "c73bf3840ef24af16b578f6fe3cfc927b5e81c3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-30T19:55:10.565Z"
canonical: "https://github.com/openclaw/openclaw/issues/162047"
canonical_issue: "https://github.com/openclaw/openclaw/issues/162047"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-162047

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36761499676](https://github.com/openclaw/clawsweeper/actions/runs/36761499676)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/162047

## Summary

At main 404e47a13c40264251ae718e2549edeb9dd4c1d9, both admission and recovery validate the full companion directory once per hardlinked target. The narrow fix path is clear, but this worker has a read-only checkout and no Windows host. It could not establish the required failing regression, edit the branch, or validate a PR.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #162047 | fix_needed | planned | canonical | The repeated work remains in the plugin validation owner. A failing owner-boundary regression is required before implementation. |
| #153401 | route_security | planned | security_sensitive | Quarantine this linked tracker for central OpenClaw security handling; its other recovery work is outside this fix. |
| #155859 | keep_related | planned | related | Distinct user flow and broader cost producers. |
| #157989 | keep_related | planned | related | Capture reuse is separate from repeated validation of hardlinked Doctor targets. |
| #160959 | keep_related | planned | related | Its capture path and Gateway availability symptom require separate work. |
| #161947 | keep_related | planned | related | Useful separate Doctor performance work, not a fix candidate for this issue. |
| cluster:issue-openclaw-openclaw-162047 | build_fix_artifact | planned |  | The executor must first establish a failing multi-target regression, then implement and validate the narrow fix. |
| cluster:issue-openclaw-openclaw-162047 | open_fix_pr | blocked |  | Open or update clawsweeper/issue-openclaw-openclaw-162047 only after implementation, focused validation, required review, and available Windows proof. |

## Needs Human

- none
