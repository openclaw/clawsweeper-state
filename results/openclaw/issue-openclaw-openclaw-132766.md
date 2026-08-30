---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-132766"
mode: "autonomous"
run_id: "33317642949"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33317642949"
head_sha: "c179a466606f782ae73404357a0c94e6bead5807"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-30T15:04:25.623Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33317642949](https://github.com/openclaw/clawsweeper/actions/runs/33317642949)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/132766

## Summary

No code or GitHub mutations were made. The source defect remains reproducible in this checkout, but implementation is blocked because the preflight main SHA is absent locally, node_modules is absent in a read-only checkout, and the mandatory sibling ../codex inspection cannot be performed or cloned on the read-only filesystem.

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
| #121003 | keep_closed | skipped | related | Already closed. |
| #122630 | keep_closed | skipped | related | Already closed and adjacent, not this canonical bug. |
| #125885 | keep_closed | skipped | superseded | Already closed; active canonical report is #132766. |
| #132766 | fix_needed | blocked | canonical | A fresh writable checkout at preflight main or newer is required. The supplied main SHA 7cd04f982867d8efc3517d901937c25e69e00a5e is absent from this shallow checkout; ../codex is absent and git clone failed with a read-only filesystem; node_modules is absent, so the required failing regression and validation cannot be run. |
| cluster:issue-openclaw-openclaw-132766 | build_fix_artifact | planned | canonical | Narrow new-fix-PR path is available once the environment blockers are removed. |

## Needs Human

- none
