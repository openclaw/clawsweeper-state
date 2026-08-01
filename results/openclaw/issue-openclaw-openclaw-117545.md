---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-117545"
mode: "autonomous"
run_id: "30715971168"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30715971168"
head_sha: "7e4d8cb7cee432b87afec79e1fbfa3209c084474"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-01T20:06:21.874Z"
canonical: "https://github.com/openclaw/openclaw/issues/117545"
canonical_issue: "https://github.com/openclaw/openclaw/issues/117545"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-117545

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30715971168](https://github.com/openclaw/clawsweeper/actions/runs/30715971168)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/117545

## Summary

Current main contains the reported overlay-precedence defect, but this worker cannot safely implement the requested retirement policy: the required authenticated, redacted NVIDIA live classification is unavailable in the restricted environment, and the read-only checkout cannot install the missing test dependency.

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
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| issue_implementation_status_comment | updated | #117545 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #117545 | keep_canonical | planned | canonical | Keep the issue open as the canonical repair thread while live provider evidence identifies which IDs qualify for unconditional suppression. |
| cluster:issue-openclaw-openclaw-117545 | fix_needed | blocked | needs_human | The source-level repair is narrow, but the provider-owned policy cannot safely be changed without the required live classification. |
| cluster:issue-openclaw-openclaw-117545 | build_fix_artifact | blocked | needs_human | A concrete patch awaits the authenticated provider classification; no code or PR branch can be safely produced in this checkout. |

## Needs Human

- Provide safe, redacted authenticated NVIDIA `/v1/models` listing and direct completion outcomes for the reported IDs, explicitly separating globally retired IDs from account-specific entitlement failures such as Kimi K2.6. Re-run the cluster in a writable checkout with network access and dependencies installed.
