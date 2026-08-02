---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-117899"
mode: "autonomous"
run_id: "30742823338"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30742823338"
head_sha: "7e4d8cb7cee432b87afec79e1fbfa3209c084474"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-02T10:40:02.121Z"
canonical: "https://github.com/openclaw/openclaw/issues/117899"
canonical_issue: "https://github.com/openclaw/openclaw/issues/117899"
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

# issue-openclaw-openclaw-117899

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30742823338](https://github.com/openclaw/clawsweeper/actions/runs/30742823338)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/117899

## Summary

#117899 remains a valid, narrow Control UI Talk race on current main 30c87bde99774fdbd0b3b31c1921e3750a1d61e4. The same-run resolver starts a fixed 500 ms no-text fallback after `agent.wait` reports a non-timeout terminal result, while a later text-bearing `chat` final for that run can still arrive. Build one focused PR that aligns the fallback with the authoritative terminal-delivery grace and proves a delayed source reply wins. No GitHub mutation was performed.

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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/117952 | clawsweeper/issue-openclaw-openclaw-117899 |  |
| issue_implementation_status_comment | updated | #117899 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #117952 | merge_canonical | ready | fix_pr | issue implementation PR checks are green; merge intentionally blocked for this lane |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #117899 | keep_canonical | planned | canonical | This is the sole hydrated cluster item and owns the valid bug report. |
| #117899 | fix_needed | planned | canonical | A narrow UI repair can remove the premature 500 ms settlement without changing gateway protocol or configuration. |
| cluster:issue-openclaw-openclaw-117899 | build_fix_artifact | planned | canonical | Create one new PR from the prescribed branch; no contributor PR exists to repair or credit. |

## Needs Human

- none
