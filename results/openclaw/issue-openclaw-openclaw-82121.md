---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-82121"
mode: "plan"
run_id: "36248753986"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36248753986"
head_sha: "726760a4e31bd88b10982908e042f59f01c7a18b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-26T14:58:07.708Z"
canonical: "#82121"
canonical_issue: "#82121"
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

# issue-openclaw-openclaw-82121

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36248753986](https://github.com/openclaw/clawsweeper/actions/runs/36248753986)

Workflow conclusion: success

Worker result: planned

Canonical: #82121

## Summary

Plan a narrow fix for the open issue. The three linked PRs are closed and unmerged. Current main still reads a capped chat.history reply in the isolated automation path; the required failing regression and fix validation have not yet run.

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
| #82121 | fix_needed | planned | canonical | Recover the full assistant row using structured display-truncation metadata and chat.message.get before automation delivers it. |
| #82128 | keep_closed | skipped | related | Historical sanitizer proposal; no action on a closed PR. |
| #93694 | keep_closed | skipped | related | Useful prior recovery work to credit in the new fix. |
| #94094 | keep_closed | skipped | related | Historical sanitizer proposal; preserve literal marker text in the planned fix. |

## Needs Human

- none
