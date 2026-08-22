---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-128017"
mode: "autonomous"
run_id: "32605533840"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32605533840"
head_sha: "648ad3538d987a05833ed3bcdff1cf1d8961cc48"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-22T23:44:09.507Z"
canonical: "https://github.com/openclaw/openclaw/issues/128017"
canonical_issue: "https://github.com/openclaw/openclaw/issues/128017"
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

# issue-openclaw-openclaw-128017

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32605533840](https://github.com/openclaw/clawsweeper/actions/runs/32605533840)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/128017

## Summary

#128017 remains the canonical open bug. Current main (8f18edfa10ab52b83083da4d1fd4e0f7e2d2e43f) has the confirmed owner-path defect: query.ts removes related blocks only, so standalone generated OpenClaw marker lines participate in raw-body scoring and snippet selection. No local change or PR could be produced because this worker checkout is read-only, dependencies are absent, and the required sibling ../codex checkout is unavailable.

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
| https://github.com/openclaw/openclaw/issues/128017 | keep_canonical | planned | canonical | The issue reports a narrow existing plugin behavior regression with no security signal or duplicate candidate. |
| https://github.com/openclaw/openclaw/issues/128017 | fix_needed | planned | canonical | A single canonical body-normalization helper in query.ts should feed both raw-body scoring and snippet selection. |
| https://github.com/openclaw/openclaw/issues/128017 | build_fix_artifact | planned | canonical | The implementation is narrow and specified, but must run in a writable checkout with dependencies and ../codex available. |
| https://github.com/openclaw/openclaw/issues/128017 | open_fix_pr | planned | canonical | The job authorizes one replacement implementation PR and forbids merge or issue closure. |

## Needs Human

- none
