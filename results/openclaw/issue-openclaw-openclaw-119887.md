---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119887"
mode: "autonomous"
run_id: "31086797318"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31086797318"
head_sha: "480d56953f381b127bdc0b5a7029efeeaa717595"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-06T09:50:38.560Z"
canonical: "https://github.com/openclaw/openclaw/issues/119887"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119887"
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

# issue-openclaw-openclaw-119887

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31086797318](https://github.com/openclaw/clawsweeper/actions/runs/31086797318)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/119887

## Summary

#119887 is a current, narrow Doctor-only recovery bug on main. Plan one new fix PR that strips only a non-empty terminal NUL run from an otherwise strictly valid archived JSONL payload, using the existing atomic replacement path; no runtime parser or schema change.

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
| #119887 | fix_needed | planned | canonical | No open implementation PR is hydrated. The issue is reproducible from current source and has a narrow owner-local repair path. |
| #113695 | keep_closed | skipped | related | Closed historical context, not a closure or merge target. |
| cluster:issue-openclaw-openclaw-119887 | build_fix_artifact | planned | canonical | Create the one permitted narrow implementation PR from clawsweeper/issue-openclaw-openclaw-119887. |

## Needs Human

- none
