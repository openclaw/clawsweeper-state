---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119551"
mode: "autonomous"
run_id: "31078375679"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31078375679"
head_sha: "480d56953f381b127bdc0b5a7029efeeaa717595"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-06T07:43:41.000Z"
canonical: "https://github.com/openclaw/openclaw/issues/119551"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119551"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-119551

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31078375679](https://github.com/openclaw/clawsweeper/actions/runs/31078375679)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/119551

## Summary

#119551 is reproducible on main 1f10ef80: configured ACP bindings initialize without the owning agent's explicit model. The narrow repair is clear, but this worker checkout is read-only, so implementation and validation must be performed by the executor from the attached fix artifact.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | Codex /review did not pass after final base synchronization: Not merge-ready: stale ACP metadata can bypass model reconfiguration and silently reuse the old ACPX model. |
| issue_implementation_status_comment | updated | #119551 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #119551 | fix_needed | blocked | canonical | Implement the artifact on clawsweeper/issue-openclaw-openclaw-119551, then run focused proof and pnpm check:changed before opening the PR. |
| cluster:issue-openclaw-openclaw-119551 | build_fix_artifact | planned | canonical | Narrow bug-only repair artifact for a new ClawSweeper PR. |
| #106008 | keep_related | planned | related | Related ACP model-routing work with independent scope; leave open. |
| #119599 | keep_closed | skipped | superseded | Historical source material only; no closure or mutation is valid. |

## Needs Human

- none
