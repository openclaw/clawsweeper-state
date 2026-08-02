---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-72504"
mode: "plan"
run_id: "30739116200"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30739116200"
head_sha: "7e4d8cb7cee432b87afec79e1fbfa3209c084474"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-02T08:34:07.839Z"
canonical: "https://github.com/openclaw/openclaw/issues/72504"
canonical_issue: "https://github.com/openclaw/openclaw/issues/72504"
canonical_pr: "https://github.com/openclaw/openclaw/pull/117906"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-72504

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30739116200](https://github.com/openclaw/clawsweeper/actions/runs/30739116200)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/72504

## Summary

#72504 remains the canonical issue. Open PR #117906 is the viable same-repository implementation path, but its hydrated ClawSweeper review identifies an actionable direct-message command regression: preserving self-mention markup leaves direct command probing unnormalized. Plan a narrow repair of that existing branch; do not merge or close anything in this job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #72504 | keep_canonical | planned | canonical | Keep the canonical issue open while #117906 is repaired and validated. |
| #117906 | fix_needed | planned | canonical | Repair the active same-repository PR branch to restore direct mention-prefixed command probing without reverting agent-facing self-mention context. |
| #40768 | keep_related | planned | related | Keep #40768 open as a distinct activation/identity follow-up. |
| #72532 | keep_closed | skipped | superseded | Historical source evidence only; do not mutate an already-closed PR. |
| #72661 | keep_closed | skipped | superseded | Historical source evidence only; do not mutate an already-closed PR. |
| #87004 | keep_closed | skipped | duplicate | Already closed historical duplicate; no close action is valid. |
| cluster:issue-openclaw-openclaw-72504 | build_fix_artifact | planned |  | An executable repair plan is required because #117906 has a concrete unresolved review finding. |

## Needs Human

- none
