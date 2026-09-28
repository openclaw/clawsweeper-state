---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-160095"
mode: "autonomous"
run_id: "36377366274"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36377366274"
head_sha: "8d659e7cb903370596e26acea5b81399f291c174"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-28T04:35:46.249Z"
canonical: "https://github.com/openclaw/openclaw/issues/160095"
canonical_issue: "https://github.com/openclaw/openclaw/issues/160095"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-160095

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36377366274](https://github.com/openclaw/clawsweeper/actions/runs/36377366274)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/160095

## Summary

The stale adapter path remains in main at 9ac4735581d6ea74e0d2e5f78fcd9de25a4c6ec1. The generated wrapper selects any nonempty installedBinPath without checking whether the file still exists. This worker has read-only filesystem access, so it could not add and run the required failing regression or prepare a validated branch. No GitHub mutation was made.

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
| #160095 | fix_needed | planned | canonical | A focused plugin-owned repair is needed. The required generated-wrapper reproduction and implementation could not run in this read-only worker. |
| #157312 | keep_related | planned | related | Preserve its separate reproduction and investigation. |
| #158390 | keep_related | planned | related | The wrapper launch failure is split into the canonical issue; capture growth remains separate. |
| #157568 | keep_closed | skipped | related | Historical context only. |
| #158414 | keep_closed | skipped | related | Historical context only. |
| #158769 | keep_closed | skipped | related | Historical context only. |
| cluster:issue-openclaw-openclaw-160095 | build_fix_artifact | blocked |  | Implementation needs a writable executor checkout. |

## Needs Human

- none
