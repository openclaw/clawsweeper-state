---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-119367"
mode: "autonomous"
run_id: "31324117015"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31324117015"
head_sha: "80847d16452c774d7c4e94abe2b9cfb6e1319b57"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-09T16:42:32.069Z"
canonical: "#119367"
canonical_issue: "#119350"
canonical_pr: "#119367"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-119367

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31324117015](https://github.com/openclaw/clawsweeper/actions/runs/31324117015)

Workflow conclusion: success

Worker result: planned

Canonical: #119367

## Summary

#119367 is the focused repair for #119350 but is behind main and reported conflicted. Plan a contributor-branch rebase and exact-head validation; keep #119350 open until that repaired PR passes. #111811 addresses distinct sweep scheduling fairness.

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
| #119367 | build_fix_artifact | planned | canonical | Repair the same-repo writable contributor branch; merge is disabled by job frontmatter. |
| #119350 | keep_related | planned | fixed_by_candidate | Do not close before the candidate is rebased and validated. |
| #111811 | keep_independent | planned | independent | Adjacent shared path, but a distinct root cause and fix. |

## Needs Human

- none
