---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-156985"
mode: "plan"
run_id: "35956413082"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35956413082"
head_sha: "5ae902bf0a0f31d7c36618352b48621f39b40786"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-24T04:40:34.798Z"
canonical: "https://github.com/openclaw/openclaw/issues/156985"
canonical_issue: "https://github.com/openclaw/openclaw/issues/156985"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-156985

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35956413082](https://github.com/openclaw/clawsweeper/actions/runs/35956413082)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/156985

## Summary

Current main still mounts an uninitialized emptyDir directly at /tmp, matching the reported failure path. Reproduce fs-safe admission on an affected image before implementing the narrow manifest, regression-test, and documentation fix.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| https://github.com/openclaw/openclaw/issues/156985 | fix_needed | planned | canonical | The reported behavior is a deployment compatibility bug. Runtime reproduction on an affected image remains the first implementation gate. |

## Needs Human

- none
