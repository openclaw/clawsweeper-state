---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-149101"
mode: "autonomous"
run_id: "34972596303"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34972596303"
head_sha: "1ed7bd4e13fb03334798e4d027ba3383ac9e5f01"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-15T14:07:28.484Z"
canonical: "https://github.com/openclaw/openclaw/issues/149101"
canonical_issue: "https://github.com/openclaw/openclaw/issues/149101"
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

# issue-openclaw-openclaw-149101

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34972596303](https://github.com/openclaw/clawsweeper/actions/runs/34972596303)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/149101

## Summary

Confirmed the display defect on preflight main using source-extracted rendering. Prepared a two-file fix plan. Implementation and full CLI validation remain blocked by the read-only host and missing dependencies; no files or GitHub state changed.

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
| #149101 | fix_needed | planned | canonical | A narrow presentation repair is supported by current source and existing sibling behavior; eligibility, discovery, remote capabilities, and JSON need no changes. |
| cluster:issue-openclaw-openclaw-149101 | build_fix_artifact | planned |  | The fix is sufficiently narrow for the deterministic executor and requires no product decision. |
| cluster:issue-openclaw-openclaw-149101 | open_fix_pr | blocked |  | Implementation and publication are blocked on a writable executor completing reproduction, repair, validation, review, and duplicate-PR reconciliation. |

## Needs Human

- none
