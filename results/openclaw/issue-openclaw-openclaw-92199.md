---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-92199"
mode: "autonomous"
run_id: "30997702131"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30997702131"
head_sha: "49e8c7de6cfed4a7c34ea4b6449a5ee83e2df6a8"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-05T10:40:39.756Z"
canonical: "https://github.com/openclaw/openclaw/issues/92199"
canonical_issue: "https://github.com/openclaw/openclaw/issues/92199"
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

# issue-openclaw-openclaw-92199

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30997702131](https://github.com/openclaw/clawsweeper/actions/runs/30997702131)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/92199

## Summary

Current main confirms the ACP final-only projector flushes and resets on streamed done/error before the dispatch-owned turn settles. A narrow channel-agnostic fix plan is ready; implementation is blocked because this checkout is read-only and dependencies are absent.

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
| #92199 | fix_needed | blocked | canonical | Only implementation is blocked by the read-only checkout; no GitHub mutation was attempted. |
| cluster:issue-openclaw-openclaw-92199 | build_fix_artifact | planned | canonical | A narrow new fix PR is appropriate once an editable checkout is available. |
| #84486 | keep_related | planned | related | Keep open without mutation; this repair must remain channel-agnostic. |
| #84501 | keep_closed | skipped | superseded | Closed context only; no action is valid. |

## Needs Human

- none
