---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-82121"
mode: "autonomous"
run_id: "36244953006"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36244953006"
head_sha: "726760a4e31bd88b10982908e042f59f01c7a18b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-26T13:51:47.587Z"
canonical: "https://github.com/openclaw/openclaw/issues/82121"
canonical_issue: "https://github.com/openclaw/openclaw/issues/82121"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-82121

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36244953006](https://github.com/openclaw/clawsweeper/actions/runs/36244953006)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/82121

## Summary

Current main still has a source-proven path that can deliver a capped chat.history preview as a reply. The checkout is read-only and has no installed dependencies, so I could not add the required failing regression, implement the fix, or validate a PR branch. No GitHub or repository changes were made.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #82121 | keep_canonical | planned | canonical | The reported delivery path remains present; runtime reproduction was blocked by the read-only checkout and missing dependencies. |
| cluster:issue-openclaw-openclaw-82121 | fix_needed | planned |  | Recover a proven capped assistant row through chat.message.get while preserving literal marker text and existing no-final-reply behavior. |
| cluster:issue-openclaw-openclaw-82121 | build_fix_artifact | planned |  |  |
| cluster:issue-openclaw-openclaw-82121 | open_fix_pr | blocked |  | A writable checkout with dependencies is required to reproduce the failure, implement the patch, and validate the branch before opening a PR. |

## Needs Human

- none
