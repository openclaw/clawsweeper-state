---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-135836"
mode: "autonomous"
run_id: "33592053009"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33592053009"
head_sha: "43553c96ab2fcd03b7599eb67cd49e2507bb92ea"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-09-02T05:26:36.671Z"
canonical: "#135836"
canonical_issue: "#135836"
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

# issue-openclaw-openclaw-135836

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33592053009](https://github.com/openclaw/clawsweeper/actions/runs/33592053009)

Workflow conclusion: success

Worker result: blocked

Canonical: #135836

## Summary

#135836 remains a narrow canonical bug: the no-handler producer throws retryable PlatformMessageNotDispatchedError, but cron and announce classify its message as permanent before the shared proven-not-sent contract. Repair could not be created because this workspace is read-only, ../codex is absent (the mandatory direct inspection cannot be completed), and validation cannot start because node_modules/tsx is missing.

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
| #135836 | fix_needed | blocked | canonical | A writable checkout with dependencies and the required sibling Codex source is required to add regressions that fail pre-fix, implement the two owner repairs, and validate the branch. |
| #135836 | build_fix_artifact | planned | canonical | A narrow replacement PR is appropriate once the execution blockers are resolved. |

## Needs Human

- none
