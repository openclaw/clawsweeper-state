---
repo: "openclaw/crabbox"
cluster_id: "issue-openclaw-crabbox-2717"
mode: "autonomous"
run_id: "37729658734"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37729658734"
head_sha: "11c625de8a3cd43b7943a7d1f3100dde7a851216"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-10-08T04:57:23.848Z"
canonical: "https://github.com/openclaw/crabbox/issues/2717"
canonical_issue: "https://github.com/openclaw/crabbox/issues/2717"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-crabbox-2717

Repo: openclaw/crabbox

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37729658734](https://github.com/openclaw/clawsweeper/actions/runs/37729658734)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/crabbox/issues/2717

## Summary

Independent Windows image selection and guarded Server 2025 bake tooling are already present on supplied main 1330d44c74a26c0f5a843373beba8ae5cf93bff9. The remaining default switch explicitly requires live qualification and regional promoted-image rollout. No completed canary evidence is provided; no code changes or executable fix PR are proposed.

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
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| issue_implementation_status_comment | updated | #2717 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #2717 | keep_canonical | planned | canonical | Keep the canonical issue open for its remaining operational rollout; the selection feature is already implemented. |
| #2720 | keep_closed | skipped | related | Historical partial implementation; no further action. |
| #2734 | keep_closed | skipped | related | Historical rollout preparation; no further action. |
| cluster:issue-openclaw-crabbox-2717 | needs_human | blocked | needs_human | An operator must supply live qualification and regional promotion/rollback evidence, then a maintainer must decide readiness for the separate default-switch PR. The supplied artifacts cannot safely support an executable fix plan before those gates are satisfied. |

## Needs Human

- For https://github.com/openclaw/crabbox/issues/2717, an operator must provide Server 2025 native/desktop/WSL2 qualification evidence and regional promotion/rollback results; a maintainer must then confirm readiness for the separate default-switch PR.
