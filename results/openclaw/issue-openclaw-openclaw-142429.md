---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-142429"
mode: "autonomous"
run_id: "34265533658"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34265533658"
head_sha: "e4c2d57ad229dc8cef15dd5ef3d613386ced664b"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-08T19:03:16.147Z"
canonical: "https://github.com/openclaw/openclaw/issues/142429"
canonical_issue: "https://github.com/openclaw/openclaw/issues/142429"
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

# issue-openclaw-openclaw-142429

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34265533658](https://github.com/openclaw/clawsweeper/actions/runs/34265533658)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/142429

## Summary

Source inspection supports a narrow scope-presentation fix. Implementation and validation remain blocked by the read-only workspace and missing dependencies. Latest-main and owning-PR refresh require executor GitHub access. No files or GitHub state changed.

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
| #142429 | fix_needed | planned | canonical | Keep the issue open and repair the presentation while preserving existing global writes and agent-scoped provider behavior. |
| cluster:issue-openclaw-openclaw-142429 | build_fix_artifact | planned |  | The executor can implement this bounded presentation repair after refreshing main and ownership and reproducing the defect there. |

## Needs Human

- none
