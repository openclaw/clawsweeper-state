---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-82121"
mode: "autonomous"
run_id: "36250517409"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36250517409"
head_sha: "726760a4e31bd88b10982908e042f59f01c7a18b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-26T15:47:16.082Z"
canonical: "https://github.com/openclaw/openclaw/issues/82121"
canonical_issue: "https://github.com/openclaw/openclaw/issues/82121"
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

# issue-openclaw-openclaw-82121

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36250517409](https://github.com/openclaw/clawsweeper/actions/runs/36250517409)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/82121

## Summary

The bug remains in main at 785fdcaa54574186236343ccf3f98680083bf459. Gateway history marks display-truncated messages, but the latest-reply reader can return the preview for cron delivery. The checkout is read-only and has no dependencies, so no regression, patch, or validation was completed.

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
| #82121 | fix_needed | planned | canonical | A provenance-backed full-message read is needed before this preview can be delivered as a complete reply. |
| cluster:issue-openclaw-openclaw-82121 | build_fix_artifact | blocked |  | Local implementation is blocked by the read-only filesystem and missing node_modules; no branch or PR was created. |

## Needs Human

- none
