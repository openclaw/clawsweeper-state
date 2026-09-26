---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-158944"
mode: "autonomous"
run_id: "36250339633"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36250339633"
head_sha: "726760a4e31bd88b10982908e042f59f01c7a18b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-26T15:41:54.800Z"
canonical: "https://github.com/openclaw/openclaw/issues/158944"
canonical_issue: "https://github.com/openclaw/openclaw/issues/158944"
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

# issue-openclaw-openclaw-158944

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36250339633](https://github.com/openclaw/clawsweeper/actions/runs/36250339633)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/158944

## Summary

The bug reproduces on checkout 785fdcaa54574186236343ccf3f98680083bf459: the shared formatter labels plugin expiry and cancellation as Denied. A narrow fix is planned, but the read-only checkout and absent dependencies prevented editing, validation, and PR creation.

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
| #158944 | fix_needed | planned | canonical | The reported behavior remains reproducible in the current source. |
| cluster:issue-openclaw-openclaw-158944 | build_fix_artifact | planned |  | The existing owners support a narrow fix without changing approval authorization. |
| cluster:issue-openclaw-openclaw-158944 | open_fix_pr | blocked |  | Implementation requires a writable checkout with repository dependencies available. |

## Needs Human

- none
