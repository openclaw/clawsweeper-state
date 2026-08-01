---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-117545"
mode: "autonomous"
run_id: "30716583623"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30716583623"
head_sha: "7e4d8cb7cee432b87afec79e1fbfa3209c084474"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-01T20:45:11.275Z"
canonical: "https://github.com/openclaw/openclaw/issues/117545"
canonical_issue: "https://github.com/openclaw/openclaw/issues/117545"
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

# issue-openclaw-openclaw-117545

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30716583623](https://github.com/openclaw/clawsweeper/actions/runs/30716583623)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/117545

## Summary

Current main `db49a9a565f82282c880850964042fe68083421e` source-proves a narrow lifecycle-metadata loss: a same-ID refreshed row retains trusted transport fields but drops existing NVIDIA manifest deprecation status, reason, and replacement metadata. A focused planner repair needs no new NVIDIA retirement policy; live checks remain only for the two unclassified reported IDs.

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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/117620 | clawsweeper/issue-openclaw-openclaw-117545 |  |
| issue_implementation_status_comment | updated | #117545 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #117620 | merge_canonical | ready | fix_pr | issue implementation PR checks are green; merge intentionally blocked for this lane |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #117545 | keep_canonical | planned | canonical | Keep the issue open as the canonical thread for the focused fix PR and its validation. |
| cluster:issue-openclaw-openclaw-117545 | fix_needed | planned | canonical | Create one narrow fix PR that preserves manifest-owned lifecycle metadata for same-ID remote overlays while retaining remote freshness for non-policy fields. |
| cluster:issue-openclaw-openclaw-117545 | build_fix_artifact | planned | canonical | The patch scope is explicit and suitable for a new ClawSweeper fix PR. |

## Needs Human

- none
