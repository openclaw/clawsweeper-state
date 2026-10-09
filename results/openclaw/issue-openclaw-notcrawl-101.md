---
repo: "openclaw/notcrawl"
cluster_id: "issue-openclaw-notcrawl-101"
mode: "autonomous"
run_id: "37937284166"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37937284166"
head_sha: "11fdbcac1012c7c58c56efd5babadddf75c00e88"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-09T13:36:01.270Z"
canonical: "https://github.com/openclaw/notcrawl/issues/101"
canonical_issue: "https://github.com/openclaw/notcrawl/issues/101"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-notcrawl-101

Repo: openclaw/notcrawl

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37937284166](https://github.com/openclaw/clawsweeper/actions/runs/37937284166)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/notcrawl/issues/101

## Summary

Rich-block link rendering remains missing on preflight main 279160aff610f28bb812cf232415a5864915f3fd. A narrow fix artifact is ready for the executor, but this read-only worker could neither implement nor validate a branch. Transclusion duplication remains a separate, unverified concern.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #101 | fix_needed | planned | canonical | The verified rich-block omission supports a narrow rendering PR. Keep #101 open because the broader transclusion concern has not been reproduced or resolved. |
| cluster:issue-openclaw-notcrawl-101 | build_fix_artifact | planned |  | The artifact can be built by the deterministic executor. Local implementation and branch validation are blocked by the managed read-only filesystem. |

## Needs Human

- none
