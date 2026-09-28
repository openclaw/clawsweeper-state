---
repo: "openclaw/notcrawl"
cluster_id: "issue-openclaw-notcrawl-155"
mode: "autonomous"
run_id: "36500207415"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36500207415"
head_sha: "32cd4db41a50b57f301a955bd0e291cbfeb714e1"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-28T23:55:45.524Z"
canonical: "https://github.com/openclaw/notcrawl/issues/155"
canonical_issue: "https://github.com/openclaw/notcrawl/issues/155"
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

# issue-openclaw-notcrawl-155

Repo: openclaw/notcrawl

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36500207415](https://github.com/openclaw/clawsweeper/actions/runs/36500207415)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/notcrawl/issues/155

## Summary

Issue #155 remains reproducible in the checkout at main SHA 204af2f8be192709ee3f0acaef120d583465ab3c. A narrow fix is planned, but the read-only workspace prevented implementation, regression tests, and a PR.

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
| #155 | fix_needed | planned | canonical | The archived cells can support Markdown output and search without changing the archive schema. |
| #101 | keep_related | planned | related | The simple-table fix does not settle #101's richer output policy. |
| cluster:issue-openclaw-notcrawl-155 | build_fix_artifact | planned |  | Implement and validate the focused table regression when a writable checkout is available. |
| cluster:issue-openclaw-notcrawl-155 | open_fix_pr | blocked |  | Implementation requires a writable checkout and successful local validation. |

## Needs Human

- none
