---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-82121"
mode: "autonomous"
run_id: "36270528292"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36270528292"
head_sha: "5f73370171673b318108ffb1a5d59761c9624846"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-26T21:19:42.054Z"
canonical: "https://github.com/openclaw/openclaw/issues/82121"
canonical_issue: "https://github.com/openclaw/openclaw/issues/82121"
canonical_pr: null
actions_total: 3
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36270528292](https://github.com/openclaw/clawsweeper/actions/runs/36270528292)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/82121

## Summary

At main b2265de26980f16451d847d3442d552f10244e85, the latest-reply reader still returns display-capped chat.history text as delivery text. A narrow fix is warranted, but this read-only checkout has no node_modules, so I could not add the required failing regression, implement the fix, or validate a PR branch. No GitHub mutation was made.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #82121 | fix_needed | planned | canonical | The existing delivery path can present a preview as a complete reply. |
| cluster:issue-openclaw-openclaw-82121 | build_fix_artifact | planned |  | Narrow implementation plan for the canonical issue. |
| cluster:issue-openclaw-openclaw-82121 | open_fix_pr | blocked |  | The implementation and required validation need a writable checkout with dependencies. |

## Needs Human

- none
