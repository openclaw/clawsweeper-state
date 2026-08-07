---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120130"
mode: "autonomous"
run_id: "31145040749"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31145040749"
head_sha: "2eb1787e0d183a84f29e84614b84f228037ba69f"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-07T03:48:31.689Z"
canonical: "https://github.com/openclaw/openclaw/issues/120130"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120130"
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

# issue-openclaw-openclaw-120130

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31145040749](https://github.com/openclaw/clawsweeper/actions/runs/31145040749)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/120130

## Summary

#120130 remains a reproducible test-only defect on supplied main 1823be79ce7910e282d34e9540b3dfbebefbd213. The fake schedules protocol replies independently of listener re-arm and the stale-receipt regression uses 60/120ms sleeps, allowing ordering races despite the serialized suite. No branch was modified: this sandbox is read-only and Swift execution returned permissionDenied. A narrow new fix PR is planned for remote macOS validation.

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
| #120130 | fix_needed | planned | canonical | A test-fixture repair can remove timing assumptions without changing GatewayNodeSession production behavior. |
| #118831 | keep_related | planned | related | Keep open independently; it is runner-policy context, not the same root cause or an implementation candidate. |
| cluster:issue-openclaw-openclaw-120130 | build_fix_artifact | planned |  | Create one focused branch/PR from current main. |
| cluster:issue-openclaw-openclaw-120130 | open_fix_pr | planned |  | No viable PR implements this GatewayNodeSession flake repair; #118831 is unrelated. |

## Needs Human

- none
