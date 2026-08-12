---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122746"
mode: "autonomous"
run_id: "31627092981"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31627092981"
head_sha: "e0dc54438e5e346f573af5e6d2cb07c6c1620a8f"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-12T18:32:59.564Z"
canonical: "https://github.com/openclaw/openclaw/issues/122746"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122746"
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

# issue-openclaw-openclaw-122746

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31627092981](https://github.com/openclaw/clawsweeper/actions/runs/31627092981)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/122746

## Summary

Confirmed on main 2ce420091e136da4c83e65071c6caea68f3b1ac1: config validation omits the manifest default-enablement input that plugin inventory supplies. A narrow two-file repair is planned, but this checkout is read-only and lacks tsx; dependency recovery failed with EROFS, so no branch or PR was created.

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
| #113713 | keep_closed | skipped | related | Already closed; no closeout action is valid. |
| #121329 | keep_closed | skipped | related | Already closed; no closeout action is valid. |
| #122738 | keep_closed | skipped | duplicate | Already closed duplicate; preserve it as historical evidence only. |
| #122746 | fix_needed | blocked | canonical | The bug is real and narrowly repairable, but implementation and local validation are blocked by the read-only worker checkout. |
| cluster:issue-openclaw-openclaw-122746 | build_fix_artifact | planned |  | Prepare a narrow new PR once a writable checkout with dependencies is available. |

## Needs Human

- none
