---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-158876"
mode: "autonomous"
run_id: "36241908753"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36241908753"
head_sha: "726760a4e31bd88b10982908e042f59f01c7a18b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-26T13:07:24.216Z"
canonical: "https://github.com/openclaw/openclaw/issues/158876"
canonical_issue: "https://github.com/openclaw/openclaw/issues/158876"
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

# issue-openclaw-openclaw-158876

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36241908753](https://github.com/openclaw/clawsweeper/actions/runs/36241908753)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/158876

## Summary

At the preflight main SHA, the registered OpenAI video provider still advertises sora-2 to API-key users and submits to the public /videos endpoint. The defect is source-supported, but this read-only checkout has no installed dependencies, so I could not add and run the required failing regression, implement the fix, or validate a PR branch.

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
| #158874 | keep_related | planned | related | Separate logging defect; leave open. |
| #158875 | keep_related | planned | related | Separate task-attribution defect; leave open. |
| #158876 | fix_needed | planned | canonical | Narrow existing-behavior repair is warranted; implementation requires a writable host with dependencies. |
| cluster:issue-openclaw-openclaw-158876 | build_fix_artifact | blocked |  | A writable implementation host must first establish a failing registered-plugin regression, then implement and validate the narrow fix. |

## Needs Human

- none
