---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119253"
mode: "autonomous"
run_id: "30919381942"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30919381942"
head_sha: "2a61adcc1f062561ba3c9deb62cc0df97cdc81d2"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-04T17:07:16.095Z"
canonical: "https://github.com/openclaw/openclaw/issues/119253"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119253"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-119253

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30919381942](https://github.com/openclaw/clawsweeper/actions/runs/30919381942)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/119253

## Summary

Confirmed a narrow audit-producer omission on main. The final embedded catalog leaves direct bundle MCP and LSP tools unwrapped when Tool Search is disabled; writing and validation are blocked by the read-only checkout and missing dependencies.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/119265 | clawsweeper/issue-openclaw-openclaw-119253 |  |
| issue_implementation_status_comment | updated | #119253 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #119265 | merge_canonical | blocked | fix_pr | checks are not clean: build-artifacts: IN_PROGRESS |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #79451 | keep_related | planned | related | Related tool-policy area; leave open for its owner-led path. |
| #91454 | keep_closed | skipped | related | Already closed; no mutation. |
| #111254 | keep_related | planned | related | Keep open for its separate owner-led investigation. |
| #113440 | keep_independent | planned | independent | Product/API feature work is outside this narrow repair. |
| #114154 | keep_related | planned | related | Related bundle-MCP surface, different failure stage. |
| #114602 | keep_related | planned | related | Leave the existing linked implementation path intact. |
| #119253 | fix_needed | blocked | canonical | Real narrow bug, but this worker cannot modify the checkout. |
| cluster:issue-openclaw-openclaw-119253 | build_fix_artifact | planned | canonical | A writable executor can apply and validate the bounded fix. |

## Needs Human

- none
