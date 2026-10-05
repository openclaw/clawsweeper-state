---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-165807"
mode: "autonomous"
run_id: "37376260127"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37376260127"
head_sha: "7b767cc6bf7ed7176a94b1e8732b478ea49012d2"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-05T22:08:43.642Z"
canonical: "https://github.com/openclaw/openclaw/issues/165807"
canonical_issue: "https://github.com/openclaw/openclaw/issues/165807"
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

# issue-openclaw-openclaw-165807

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37376260127](https://github.com/openclaw/clawsweeper/actions/runs/37376260127)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/165807

## Summary

Reproduced the TMPDIR precedence defect in the actual environment owner at preflight main 022a951094f9c2a3b0449bd6ebe973b8b8a7ebb6. A narrow fix artifact is ready for the executor. Local implementation and required validation are blocked by the read-only filesystem; no files or GitHub state were changed.

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
| #165807 | fix_needed | planned | canonical | Preserve the caller's nonblank TMPDIR narrowly in the managed updater environment owner. Implementation remains blocked on a writable executor checkout, rather than a maintainer decision. |
| #163465 | keep_closed | skipped | related | Distinct capacity history only; no reopening, closure, or additional implementation target. |
| cluster:issue-openclaw-openclaw-165807 | build_fix_artifact | planned |  | Artifact preparation is complete. Apply and validate it in the deterministic executor's writable checkout before opening or updating the implementation PR. |

## Needs Human

- none
