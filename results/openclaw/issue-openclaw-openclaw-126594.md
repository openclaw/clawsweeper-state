---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-126594"
mode: "autonomous"
run_id: "32350580376"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32350580376"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T08:56:42.599Z"
canonical: "https://github.com/openclaw/openclaw/issues/126594"
canonical_issue: "https://github.com/openclaw/openclaw/issues/126594"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-126594

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32350580376](https://github.com/openclaw/clawsweeper/actions/runs/32350580376)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/126594

## Summary

The source still shows the Talk-only startup omission, but implementation is blocked: the preflight main SHA is unavailable in this checkout, the workspace is read-only, and required sibling ../codex source is absent. A narrow, executable fix plan is attached for an executor with a current writable checkout.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #126594 | fix_needed | blocked | canonical | Do not implement from this stale, read-only checkout. Rebase a writable executor checkout to current main, establish the table-driven regression, then apply the narrow collector repair. |
| cluster:issue-openclaw-openclaw-126594 | build_fix_artifact | planned | canonical | Executor must refresh to the actual current main SHA before applying this artifact. |

## Needs Human

- none
