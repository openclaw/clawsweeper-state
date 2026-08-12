---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122625"
mode: "autonomous"
run_id: "31600824648"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31600824648"
head_sha: "ac340908bf694c902f5a673374be1639ef9f220f"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-12T13:32:41.882Z"
canonical: "https://github.com/openclaw/openclaw/issues/122625"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122625"
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

# issue-openclaw-openclaw-122625

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31600824648](https://github.com/openclaw/clawsweeper/actions/runs/31600824648)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/122625

## Summary

Confirmed on main 9b90e104: Matrix marks canonical !room:server IDs non-exact under its default per-user DM scope, and the explicit-recipient planner rejects that non-exact route. A narrow plugin-only repair is ready, but this read-only checkout has no node_modules; focused validation stops on missing tsx.

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
| #92653 | keep_related | planned | related | Keep open independently; the proposed repair neither implements nor decides the broader inbound-routing feature. |
| #122625 | keep_canonical | planned | canonical | The issue remains a narrow, source-reproducible Matrix plugin bug. |
| cluster:issue-openclaw-openclaw-122625 | fix_needed | blocked | canonical | Implementation and validation are blocked only by the unavailable writable dependency installation; the deterministic executor can apply the narrow repair on its writable branch. |
| cluster:issue-openclaw-openclaw-122625 | build_fix_artifact | planned | canonical | Create one narrow credited fix PR from clawsweeper/issue-openclaw-openclaw-122625 after restoring dependencies and validating. |

## Needs Human

- none
