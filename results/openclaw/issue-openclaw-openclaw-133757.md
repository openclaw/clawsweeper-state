---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-133757"
mode: "autonomous"
run_id: "33354161396"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33354161396"
head_sha: "c377cfc04209464760ed5a1537fa693c71e77cf5"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-31T03:50:15.429Z"
canonical: "https://github.com/openclaw/openclaw/issues/133757"
canonical_issue: "https://github.com/openclaw/openclaw/issues/133757"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-133757

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33354161396](https://github.com/openclaw/clawsweeper/actions/runs/33354161396)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/133757

## Summary

Implementation is blocked in this read-only checkout. Source inspection found the group route call still receives the account-start config while only direct messages refresh it, but the required sibling ../codex source is absent and focused tests cannot start because tsx is not installed.

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
| #133757 | fix_needed | blocked | canonical | A writable executor must restore dependencies and the required ../codex source preflight, add and demonstrate the failing regression, then apply the narrow repair. |
| #121970 | keep_closed | skipped | related | Already closed; no mutation or revival. |
| cluster:issue-openclaw-openclaw-133757 | build_fix_artifact | planned | canonical | Provide the executor a narrow, credited new-PR plan after it resolves the local preflight blockers. |

## Needs Human

- none
