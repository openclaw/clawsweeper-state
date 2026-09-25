---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-153145"
mode: "autonomous"
run_id: "36150730464"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36150730464"
head_sha: "9fb3a5d5887891c08e0310cafc54b09ab3023c2a"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-25T15:01:24.756Z"
canonical: "https://github.com/openclaw/openclaw/issues/153145"
canonical_issue: "https://github.com/openclaw/openclaw/issues/153145"
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

# issue-openclaw-openclaw-153145

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36150730464](https://github.com/openclaw/clawsweeper/actions/runs/36150730464)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/153145

## Summary

The defect remains in main at 3bc6df79: macOS Talk Mode stops observing an active response after a 45-second event wait and 12-second history fallback. Implementation is blocked because this checkout is read-only and runs on Linux; the required failing native regression and macOS flow could not be executed.

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
| #153145 | fix_needed | planned | canonical | A narrow native reply-observation repair is needed. |
| cluster:issue-openclaw-openclaw-153145 | build_fix_artifact | blocked |  | Implementation and required native proof need a writable checkout and disposable macOS runner. |

## Needs Human

- none
