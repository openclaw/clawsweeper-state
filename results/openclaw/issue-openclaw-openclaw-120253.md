---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120253"
mode: "autonomous"
run_id: "31198891319"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31198891319"
head_sha: "f6f6bfca7d65aa54eec9daa82ab84cda9ad6e0e8"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-07T17:13:58.558Z"
canonical: "https://github.com/openclaw/openclaw/issues/120253"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120253"
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

# issue-openclaw-openclaw-120253

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31198891319](https://github.com/openclaw/clawsweeper/actions/runs/31198891319)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/120253

## Summary

#120253 is a reproducible, narrow data-loss bug on current main b738e257: backup maintenance deletes every same-config `.bak.*` name outside numeric slots 1–4. The canonical repair is to remove orphan scanning, retain exact numeric-ring rotation/copy/permission hardening, and preserve manual backups. This worker cannot edit or validate a branch because the checkout is read-only and its focused-test dependencies are absent.

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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/120298 | clawsweeper/issue-openclaw-openclaw-120253 |  |
| issue_implementation_status_comment | updated | #120253 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #120298 | merge_canonical | ready | fix_pr | issue implementation PR checks are green; merge intentionally blocked for this lane |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #120253 | fix_needed | planned | canonical | The issue is valid on current main and has a narrow owner-boundary repair; implementation is blocked only by this worker environment. |
| #39923 | keep_related | planned | related | Partial overlap only; the broader product decision remains open and is not changed by this bug fix. |
| cluster:issue-openclaw-openclaw-120253 | build_fix_artifact | planned | canonical | A new narrow fix PR is appropriate once a writable executor is available. |

## Needs Human

- none
