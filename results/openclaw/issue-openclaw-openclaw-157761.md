---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-157761"
mode: "plan"
run_id: "36083075260"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36083075260"
head_sha: "f06c3bf687a4aee9bf03f2cd9e7646806382374a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-25T01:44:00.195Z"
canonical: "https://github.com/openclaw/openclaw/issues/157761"
canonical_issue: "https://github.com/openclaw/openclaw/issues/157761"
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

# issue-openclaw-openclaw-157761

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36083075260](https://github.com/openclaw/clawsweeper/actions/runs/36083075260)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/157761

## Summary

On main at 691d2e5, unregistered SecretRef targets lack schemaValidated, but dry-run’s full-schema condition excludes builder operations. Add a registered-CLI regression that fails before the fix, then validate unrecognized builder targets while preserving the recognized-target fast path and ordinary value-mode behavior. No code was changed or tests run in plan mode.

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
| https://github.com/openclaw/openclaw/issues/157761 | fix_needed | planned | canonical | The issue has a bounded bug-fix path; reproduction and validation remain required before opening a fix PR. |

## Needs Human

- none
