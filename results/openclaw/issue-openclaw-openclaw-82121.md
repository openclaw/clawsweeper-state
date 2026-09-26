---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-82121"
mode: "autonomous"
run_id: "36260010647"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36260010647"
head_sha: "f9d81c419e55740d5a48a546b6cd27e49b35250d"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-26T18:11:55.372Z"
canonical: "https://github.com/openclaw/openclaw/issues/82121"
canonical_issue: "https://github.com/openclaw/openclaw/issues/82121"
canonical_pr: null
actions_total: 6
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36260010647](https://github.com/openclaw/clawsweeper/actions/runs/36260010647)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/82121

## Summary

The bug remains present at main 960f7022928d32f6b371cc7030e233b69ca88260. The latest-reply reader can return a display-truncated history row to isolated automation. The workspace is read-only, so the required failing regression, repair, and validation could not be completed. No code or GitHub state changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #82121 | fix_needed | planned | canonical | The current reader can present a bounded preview as a complete reply. |
| #82128 | keep_closed | skipped | related | Historical context; its marker-stripping approach does not preserve all literal assistant content. |
| #93694 | keep_closed | skipped | related | Useful source work for the narrow repair and contributor credit. |
| #94094 | keep_closed | skipped | related | Historical context for preserving literal assistant content. |
| cluster:issue-openclaw-openclaw-82121 | build_fix_artifact | planned |  | A narrow repair path exists, but this read-only workspace prevents implementation. |
| cluster:issue-openclaw-openclaw-82121 | open_fix_pr | blocked |  | A PR cannot be prepared until the regression fails on main, the repair is implemented, and the required checks pass. |

## Needs Human

- none
