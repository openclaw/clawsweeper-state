---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120567"
mode: "autonomous"
run_id: "31255589161"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31255589161"
head_sha: "36179dceb26fbeca33d8a863746b4cf83e325e09"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-08T12:18:02.728Z"
canonical: "https://github.com/openclaw/openclaw/issues/120567"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120567"
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

# issue-openclaw-openclaw-120567

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31255589161](https://github.com/openclaw/clawsweeper/actions/runs/31255589161)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/120567

## Summary

Confirmed on main 90acd2bc: finished-session poll renders only the 2,000-character tail although the full retained aggregate is available only in non-model-visible details. Plan one narrow credited fix PR; local implementation/validation awaits a writable checkout with dependencies.

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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/120583 | clawsweeper/issue-openclaw-openclaw-120567 |  |
| issue_implementation_status_comment | updated | #120567 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #120583 | merge_canonical | ready | fix_pr | issue implementation PR checks are green; merge intentionally blocked for this lane |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #120567 | keep_canonical | planned | canonical | Open issue is the canonical, reproducible existing-behavior bug. |
| cluster:issue-openclaw-openclaw-120567 | fix_needed | planned | canonical | A narrow owner-boundary repair is sufficient; no configuration, retention-policy, schema, or product-direction change is needed. |
| cluster:issue-openclaw-openclaw-120567 | build_fix_artifact | planned | canonical | Artifact directs the executor to make and validate the narrow repair on clawsweeper/issue-openclaw-openclaw-120567. |
| cluster:issue-openclaw-openclaw-120567 | open_fix_pr | planned | canonical | The job permits one new fix PR and prohibits merge/close. |

## Needs Human

- none
