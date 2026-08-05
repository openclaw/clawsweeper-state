---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-114169"
mode: "autonomous"
run_id: "31044412285"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31044412285"
head_sha: "2c3ad8f46c9a9ddd3c0e2c0c961bdbf397d14514"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-05T21:07:02.136Z"
canonical: "https://github.com/openclaw/openclaw/issues/114169"
canonical_issue: "https://github.com/openclaw/openclaw/issues/114169"
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

# issue-openclaw-openclaw-114169

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31044412285](https://github.com/openclaw/clawsweeper/actions/runs/31044412285)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/114169

## Summary

Verified on main 2db3431f: WhatsApp can retain busy work with an unrefreshed activity timestamp. Plan a narrow WhatsApp status-lifecycle heartbeat; retain the fixed 25-minute gateway stuck policy and add no configuration.

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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/119735 | clawsweeper/issue-openclaw-openclaw-114169 |  |
| issue_implementation_status_comment | updated | #114169 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #119735 | merge_canonical | ready | fix_pr | issue implementation PR checks are green; merge intentionally blocked for this lane |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #114169 | fix_needed | planned | canonical | The canonical repair is at the WhatsApp busy-status lifecycle owner, not a configurable consumer-side timeout. |
| cluster:issue-openclaw-openclaw-114169 | build_fix_artifact | planned | canonical | A two-file, plugin-owned repair and focused regression are sufficient for a new fix PR. |

## Needs Human

- none
