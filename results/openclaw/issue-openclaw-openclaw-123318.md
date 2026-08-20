---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-123318"
mode: "autonomous"
run_id: "32338613537"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32338613537"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-20T06:27:01.797Z"
canonical: "https://github.com/openclaw/openclaw/issues/123318"
canonical_issue: "https://github.com/openclaw/openclaw/issues/123318"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-123318

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32338613537](https://github.com/openclaw/clawsweeper/actions/runs/32338613537)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/123318

## Summary

#123318 remains a valid, narrow stable/beta git-updater defect on supplied main f61267528407d60bfd2d2ad54f7fb6ca8157c0ad. Plan one credited PR that force-refreshes release tags and proves the behavior with a real local-Git tag-recreation regression.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #86218 | keep_closed | skipped | related | Already closed; no action in this cluster. |
| #119098 | keep_closed | skipped | independent | Already closed and independent of recreated-tag handling. |
| #123318 | fix_needed | planned | canonical | No open implementation PR was hydrated; the fault is contained to the non-dev release-tag refresh owner. |
| cluster:issue-openclaw-openclaw-123318 | build_fix_artifact | planned | canonical | Narrow new-fix-PR path for the canonical issue. |
| cluster:issue-openclaw-openclaw-123318 | open_fix_pr | planned | canonical | Job authorizes one implementation PR and no candidate PR exists. |

## Needs Human

- none
