---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-132766"
mode: "autonomous"
run_id: "33315380587"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33315380587"
head_sha: "c179a466606f782ae73404357a0c94e6bead5807"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-30T15:15:18.191Z"
canonical: "https://github.com/openclaw/openclaw/issues/132766"
canonical_issue: "https://github.com/openclaw/openclaw/issues/132766"
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

# issue-openclaw-openclaw-132766

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33315380587](https://github.com/openclaw/clawsweeper/actions/runs/33315380587)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/132766

## Summary

Confirmed on current main (1505218b3e42d42c0bcc99930ef6d4c36b545ae9): three outbound mirror writers request the ambient transcript fence with no destination scope, so a foreign run fence reaches a target-session append and is refused after the channel send succeeds. The supplied checkout is read-only, so this worker cannot add the required failing regression, patch, or validate a branch; a narrow executable fix artifact is provided.

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
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #121003 | keep_closed | skipped | related | Historical context only; no mutation is valid for a closed PR. |
| #122630 | keep_closed | skipped | related | Adjacent but distinct closed context. |
| #125885 | keep_closed | skipped | superseded | Closed historical predecessor; do not mutate. |
| #132766 | fix_needed | blocked | canonical | Implementation is blocked only by the worker sandbox; the source-level reproduction remains valid on current main. |
| cluster:issue-openclaw-openclaw-132766 | build_fix_artifact | planned | canonical | A new focused fix PR is required; no viable open candidate PR exists. |

## Needs Human

- none
