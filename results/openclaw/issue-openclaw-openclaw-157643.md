---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-157643"
mode: "autonomous"
run_id: "36070706976"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36070706976"
head_sha: "f06c3bf687a4aee9bf03f2cd9e7646806382374a"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-24T23:51:46.075Z"
canonical: "https://github.com/openclaw/openclaw/issues/157643"
canonical_issue: "https://github.com/openclaw/openclaw/issues/157643"
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

# issue-openclaw-openclaw-157643

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36070706976](https://github.com/openclaw/clawsweeper/actions/runs/36070706976)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/157643

## Summary

Current main drops the requested start date when usage.cost queues a background refresh, and the worker inventories old transcripts before applying its date filter. A narrow fix PR is warranted. The reported repeated timeout cycle remains unproven.

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
| #157643 | fix_needed | planned | canonical | The bounded usage.cost request can restore transcripts outside its requested window. |
| cluster:issue-openclaw-openclaw-157643 | build_fix_artifact | planned |  | Prepare one narrow implementation PR on clawsweeper/issue-openclaw-openclaw-157643. |

## Needs Human

- none
