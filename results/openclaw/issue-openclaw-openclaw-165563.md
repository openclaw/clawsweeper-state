---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-165563"
mode: "autonomous"
run_id: "37308948519"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37308948519"
head_sha: "7b767cc6bf7ed7176a94b1e8732b478ea49012d2"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-05T12:27:15.706Z"
canonical: "https://github.com/openclaw/openclaw/issues/165563"
canonical_issue: "https://github.com/openclaw/openclaw/issues/165563"
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

# issue-openclaw-openclaw-165563

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37308948519](https://github.com/openclaw/clawsweeper/actions/runs/37308948519)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/165563

## Summary

Reported source defects remain at preflight main 223f6e441ecb9bb80bbd80d885997a8ecc7270db. Reproduction and implementation are blocked by the read-only host and missing dependencies. A narrow executor fix artifact is prepared; no files or GitHub state changed.

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
| #165563 | fix_needed | planned | canonical | The source supports the reported repair, but scanner reproduction has not been established on this host. The executor must reproduce all three reported failures before editing and stop if they no longer reproduce. |
| #165288 | keep_closed | skipped | related | Merged historical context; no mutation is appropriate. |
| #165435 | keep_closed | skipped | related | Merged historical context; retain the benchmark and repair its scanner entry declarations. |
| cluster:issue-openclaw-openclaw-165563 | build_fix_artifact | planned | canonical | The repair plan is narrow and unambiguous. Host limitations block implementation, not classification or artifact preparation. |

## Needs Human

- none
