---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-137845"
mode: "autonomous"
run_id: "33832389817"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33832389817"
head_sha: "d32eaf1ba7b63662c2b9f0697073d8208bacbd82"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-04T03:49:42.344Z"
canonical: "https://github.com/openclaw/openclaw/issues/137845"
canonical_issue: "https://github.com/openclaw/openclaw/issues/137845"
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

# issue-openclaw-openclaw-137845

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33832389817](https://github.com/openclaw/clawsweeper/actions/runs/33832389817)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/137845

## Summary

#137845 remains the canonical non-security bug. Current main misattributes a redacted, unclassified pre-provider error because lifecycle-held providerStarted is not passed to the user-facing formatter. A narrow new-fix-PR plan is ready, but this worker cannot modify or validate it: the checkout is read-only, node_modules is absent, and the required ../codex source checkout is absent.

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
| #137845 | fix_needed | planned | canonical | Repair the lifecycle-owned user-facing formatting boundary without changing failover, retries, provider selection, or configuration. |
| cluster:issue-openclaw-openclaw-137845 | build_fix_artifact | planned | canonical | Open or update clawsweeper/issue-openclaw-openclaw-137845 after the executor completes the required writable-checkout validation. |
| #51336 | keep_related | planned | related | Distinct user-visible policy and root cause; leave its product decision open. |
| #100600 | keep_closed | skipped | related | Already closed; no closure action is valid. |
| #112226 | keep_closed | skipped | related | Already closed; no closure action is valid. |
| #118793 | keep_related | planned | related | Same broad error area, separate invariant. |
| #136836 | keep_closed | skipped | related | Already merged historical context; it does not cover #137845's remaining copy defect. |
| #137826 | keep_closed | skipped | related | Already closed; no closure action is valid. |

## Needs Human

- none
