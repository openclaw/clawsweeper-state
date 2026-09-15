---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-149232"
mode: "plan"
run_id: "35001943660"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35001943660"
head_sha: "1ed7bd4e13fb03334798e4d027ba3383ac9e5f01"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-15T17:43:49.577Z"
canonical: "https://github.com/openclaw/openclaw/issues/149232"
canonical_issue: "https://github.com/openclaw/openclaw/issues/149232"
canonical_pr: "https://github.com/openclaw/openclaw/pull/149268"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-149232

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35001943660](https://github.com/openclaw/clawsweeper/actions/runs/35001943660)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/149232

## Summary

Keep #149232 open and retain #149268 as its existing fix PR. Do not create a competing implementation. Failing CI blocks merge readiness; broader startup performance remains separate. No mutations or runtime tests were performed.

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
| #149232 | keep_canonical | planned | canonical | Preserve the canonical recovery report while the existing fix completes its gates; no competing fix artifact is warranted. |
| #149268 | keep_canonical | planned | canonical | Existing focused implementation already owns the repair. Preserve its author and validation history. CI failures prevent a merge recommendation but do not justify replacement; this job does not authorize merge. |
| #148529 | keep_related | planned | related | Related startup surface with distinct remaining performance work; #149268 does not establish resolution of this report. |
| #142476 | keep_closed | skipped | related | Historical context only; no further action. |

## Needs Human

- none
