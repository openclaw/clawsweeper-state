---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-86050"
mode: "autonomous"
run_id: "33185196269"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33185196269"
head_sha: "f72ea010c1d7fd134b1bd0826b3a707778c312bc"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-28T15:46:45.465Z"
canonical: "https://github.com/openclaw/openclaw/issues/86050"
canonical_issue: "https://github.com/openclaw/openclaw/issues/86050"
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

# issue-openclaw-openclaw-86050

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33185196269](https://github.com/openclaw/clawsweeper/actions/runs/33185196269)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/86050

## Summary

#86050 remains source-reproducible on main 3ab172649f7d7a8068935818180461b32e016176. A narrow repair plan is ready, but this worker cannot modify, validate, or push it: the checkout is read-only, local tsx tooling is absent, and mandatory ../codex source inspection is unavailable.

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
| #86050 | fix_needed | blocked | canonical | The reported regression is real, but this worker cannot create the required branch or run its mandated validation. |
| cluster:issue-openclaw-openclaw-86050 | build_fix_artifact | planned | canonical | A deterministic executor can apply this focused new-PR plan on clawsweeper/issue-openclaw-openclaw-86050. |
| #86649 | keep_closed | skipped | superseded | Already closed; no mutation or closure action is valid. |
| #95404 | keep_closed | skipped | related | Closed historical sibling. |
| #95422 | keep_closed | skipped | related | Closed historical sibling. |

## Needs Human

- none
