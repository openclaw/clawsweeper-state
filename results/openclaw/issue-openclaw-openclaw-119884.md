---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119884"
mode: "autonomous"
run_id: "31087096308"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31087096308"
head_sha: "480d56953f381b127bdc0b5a7029efeeaa717595"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-06T09:41:23.660Z"
canonical: "https://github.com/openclaw/openclaw/issues/119884"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119884"
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

# issue-openclaw-openclaw-119884

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31087096308](https://github.com/openclaw/clawsweeper/actions/runs/31087096308)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/119884

## Summary

Confirmed on main c67556df: the shared offline compactor VACUUMs and checkpoints but never ANALYZEs. The narrow fix is ready as a new PR artifact; local focused Vitest could not start because the read-only checkout lacks p-map.

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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/119901 | clawsweeper/issue-openclaw-openclaw-119884 |  |
| issue_implementation_status_comment | updated | #119884 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #119901 | merge_canonical | ready | fix_pr | issue implementation PR checks are green; merge intentionally blocked for this lane |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #119884 | fix_needed | planned | canonical | The issue remains reproducible by source inspection and needs a narrow canonical offline-maintenance repair. |
| cluster:issue-openclaw-openclaw-119884 | build_fix_artifact | planned | canonical | Create one narrow credited fix PR from clawsweeper/issue-openclaw-openclaw-119884. |

## Needs Human

- none
