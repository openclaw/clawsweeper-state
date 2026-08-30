---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-115354"
mode: "autonomous"
run_id: "33282395117"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33282395117"
head_sha: "9f4da9302aea1e41525039417ad128b0522391a0"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-30T00:20:21.880Z"
canonical: "https://github.com/openclaw/openclaw/issues/115354"
canonical_issue: "https://github.com/openclaw/openclaw/issues/115354"
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

# issue-openclaw-openclaw-115354

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33282395117](https://github.com/openclaw/clawsweeper/actions/runs/33282395117)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/115354

## Summary

#115354 remains a reproducible lifecycle bug on main: direct Plugin SDK deletion commits the session removal but does not unbind runtime conversation bindings, while Gateway deletion already awaits the shared unbind lifecycle. Implementation is blocked in this read-only checkout: dependencies are absent, Corepack cannot create its cache, and the mandated sibling ../codex source is absent and cannot be cloned.

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
| #115354 | fix_needed | blocked | canonical | The source-level failure is clear, but this worker cannot create the mandatory Codex sibling checkout, write a regression, or run the required validation. |
| #115391 | keep_closed | skipped | related | Historical partial-overlap evidence only; no mutation is valid for an already-closed PR. |
| cluster:issue-openclaw-openclaw-115354 | build_fix_artifact | planned | canonical | A narrow credited fix PR remains appropriate once the executor has a writable checkout and can satisfy the Codex-source and validation gates. |

## Needs Human

- none
