---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-124689"
mode: "autonomous"
run_id: "32615566517"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32615566517"
head_sha: "648ad3538d987a05833ed3bcdff1cf1d8961cc48"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-23T03:40:25.413Z"
canonical: "https://github.com/openclaw/openclaw/issues/124689"
canonical_issue: "https://github.com/openclaw/openclaw/issues/124689"
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

# issue-openclaw-openclaw-124689

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32615566517](https://github.com/openclaw/clawsweeper/actions/runs/32615566517)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/124689

## Summary

Current main still selects the first requested-provider catalog row without considering lifecycle status, so a deprecated row can turn a configured-key probe into misleading guidance. The narrow repair is planned, but this read-only worker cannot create the required sibling ../codex checkout or modify/run the regression branch.

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
| #124689 | fix_needed | blocked | canonical | Implementation is blocked only by the worker environment. A writable executor with ../codex available can apply the narrow repair and run the listed checks. |
| #120752 | keep_related | planned | related | Keep open independently; it is not covered by this provider-probe repair. |
| cluster:issue-openclaw-openclaw-124689 | build_fix_artifact | planned | canonical | A narrow generic fix path exists; its local implementation was blocked by the read-only worker. |

## Needs Human

- none
