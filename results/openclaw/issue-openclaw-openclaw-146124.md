---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-146124"
mode: "autonomous"
run_id: "34703310600"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34703310600"
head_sha: "23c848fb2fb4f7f695788942cfe8c8d9ffa11ccc"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-12T16:29:15.881Z"
canonical: "https://github.com/openclaw/openclaw/issues/146124"
canonical_issue: "https://github.com/openclaw/openclaw/issues/146124"
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

# issue-openclaw-openclaw-146124

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34703310600](https://github.com/openclaw/clawsweeper/actions/runs/34703310600)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/146124

## Summary

Reproduced the heartbeat filtering defect with unchanged source functions at preflight main a4f011c418ce826b8ec3a2b1a620a0edf7eba2e1. Prepared a narrow fix artifact. Local implementation and browser validation are blocked by read-only access and missing dependencies; no files or GitHub state changed.

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
| #146124 | fix_needed | planned | canonical | A narrow omission in the existing shared UI predicate remains reproducible on the supplied current main. |
| #141476 | keep_closed | skipped | related | Merged Team Mode work is historical context, not an open repair or closure target. |
| cluster:issue-openclaw-openclaw-146124 | build_fix_artifact | planned | canonical | Artifact preparation is complete. Local implementation is blocked by host permissions; the executor can apply this bounded plan on the designated branch. |

## Needs Human

- none
