---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-121446"
mode: "autonomous"
run_id: "31360539960"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31360539960"
head_sha: "13709144f5bd54cee22ec6a64ebc2b8fe0b021d5"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-10T06:31:23.630Z"
canonical: "https://github.com/openclaw/openclaw/issues/121446"
canonical_issue: "https://github.com/openclaw/openclaw/issues/121446"
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

# issue-openclaw-openclaw-121446

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31360539960](https://github.com/openclaw/clawsweeper/actions/runs/31360539960)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/121446

## Summary

Current main has the Slack implicit-default SecretRef activation mismatch. A narrow, Slack-local repair is planned, but this worker cannot edit or validate because the checkout is read-only and the required tsx dependency is absent.

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
| #121446 | fix_needed | planned | canonical | With an enabled named account overriding both root tokens, Slack still starts its implicit default account but the collector has no inherited owner for either root SecretRef. |
| #96929 | keep_closed | skipped | related | Already closed; historical evidence only. |
| #96935 | route_security | planned | security_sensitive | Route only this exact security-sensitive reference to central OpenClaw security handling. |
| cluster:issue-openclaw-openclaw-121446 | build_fix_artifact | planned | canonical | The executor needs a writable checkout with dependencies installed to add the regression, verify it fails pre-fix, implement, and validate. |

## Needs Human

- none
