---
repo: "openclaw/wacrawl"
cluster_id: "issue-openclaw-wacrawl-114"
mode: "autonomous"
run_id: "36705482852"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36705482852"
head_sha: "74dc4c6a2fc204e456fb92677ca9271af104e9cc"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-30T12:59:39.309Z"
canonical: "https://github.com/openclaw/wacrawl/issues/114"
canonical_issue: "https://github.com/openclaw/wacrawl/issues/114"
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

# issue-openclaw-wacrawl-114

Repo: openclaw/wacrawl

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36705482852](https://github.com/openclaw/clawsweeper/actions/runs/36705482852)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/wacrawl/issues/114

## Summary

Issue #114 remains viable on main d25fce36: legacy adoption scans every archived message for each unmatched incoming message. A narrow fix is specified below, but the checkout and Go module cache are read only, so no patch, tests, or PR branch could be prepared.

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
| #114 | fix_needed | planned | canonical | The reported large-archive adoption bottleneck remains in current main. |
| cluster:issue-openclaw-wacrawl-114 | build_fix_artifact | planned |  | A two-file repair and scaled regression are specified in the fix artifact. |
| cluster:issue-openclaw-wacrawl-114 | open_fix_pr | blocked |  | Implementation requires a writable checkout and Go cache before the PR can be opened. |

## Needs Human

- none
