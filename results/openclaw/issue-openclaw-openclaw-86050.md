---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-86050"
mode: "autonomous"
run_id: "33202482019"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33202482019"
head_sha: "3a094723aa362ff8efc89805a48d900f1e3ec573"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-28T22:56:13.583Z"
canonical: "#86050"
canonical_issue: "#86050"
canonical_pr: "#132002"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-86050

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33202482019](https://github.com/openclaw/clawsweeper/actions/runs/33202482019)

Workflow conclusion: success

Worker result: planned

Canonical: #86050

## Summary

No replacement PR is needed: #86050 is closed after merged PR #132002. Current main contains the snapshot parser and regression coverage; local test invocation was unavailable because Corepack could not create its cache in the read-only worker filesystem.

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
| #86050 | keep_closed | skipped | fixed_by_candidate | Already closed and fixed by merged candidate; closure actions are forbidden for closed items. |
| #132002 | keep_closed | skipped | canonical | Merged implementation is the canonical fix. |
| #86649 | keep_closed | skipped | superseded | Already closed historical contributor attempt; #132002 supplies the landed repair. |
| #95404 | keep_closed | skipped | related | Closed adjacent-runtime context only. |
| #95422 | keep_closed | skipped | related | Closed adjacent-runtime context only. |

## Needs Human

- none
