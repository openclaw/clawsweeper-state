---
repo: "openclaw/openclaw-windows-node"
cluster_id: "issue-openclaw-openclaw-windows-node-1432"
mode: "autonomous"
run_id: "36412761636"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36412761636"
head_sha: "c1a83a00a73a800f45ff67ef5c7677ba4f17a8da"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-09-28T11:03:53.627Z"
canonical: "https://github.com/openclaw/openclaw-windows-node/issues/1432"
canonical_issue: "https://github.com/openclaw/openclaw-windows-node/issues/1432"
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

# issue-openclaw-openclaw-windows-node-1432

Repo: openclaw/openclaw-windows-node

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36412761636](https://github.com/openclaw/clawsweeper/actions/runs/36412761636)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw-windows-node/issues/1432

## Summary

No fix PR is justified yet. At current main 3331b5e, PowerShell sandbox handling and the Windows UI access setting already exist. Issue #1432 lacks the failing raw invocation, effective sandbox settings, diagnostics, and a current reproduction needed to identify the cause of 0xc0000142. No code was changed, so change-triggered validation was not run.

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
| issue_implementation_status_comment | updated | #1432 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #1432 | keep_canonical | planned | canonical | Implementation is blocked until a current failing invocation and launch diagnostics distinguish UI-deny from another launch failure. |
| #1143 | keep_closed | skipped | related | Historical context; the cause of #1432 has not been established. |
| #1147 | route_security | planned | security_sensitive | Quarantine this historical security-boundary PR from automated repair; no mutation is proposed. |
| #1189 | keep_closed | skipped | related | Historical, distinct failure; no action on the closed issue. |
| #1327 | route_security | planned | security_sensitive | Quarantine this historical security-boundary PR from automated repair; no mutation is proposed. |

## Needs Human

- none
