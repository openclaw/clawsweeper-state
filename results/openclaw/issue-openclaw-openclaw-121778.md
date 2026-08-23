---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-121778"
mode: "autonomous"
run_id: "32663469884"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32663469884"
head_sha: "2da70c23b043609f338c2b05eb2d5d7f091946f3"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-08-23T20:17:42.740Z"
canonical: "https://github.com/openclaw/openclaw/issues/121778"
canonical_issue: "https://github.com/openclaw/openclaw/issues/121778"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-121778

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32663469884](https://github.com/openclaw/clawsweeper/actions/runs/32663469884)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/121778

## Summary

No repair PR is planned. Current main intentionally exposes portable `presentation`, not Discord-native `components`, on the generic message tool; accepting stringified raw components would establish a new public native escape hatch rather than repair a documented contract.

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
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| issue_implementation_status_comment | updated | #121778 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #121778 | needs_human | blocked | needs_human | A maintainer must decide whether generic message-tool callers may use Discord-native components. If yes, this is a public schema/product-contract change requiring a broader design and migration of the existing presentation policy; if no, #121778 should document or route callers to presentation rather than add coercion. |
| #121991 | keep_closed | skipped | superseded | Already closed; no closure or replacement action is valid until the public-contract decision for #121778 is made. |
| #122943 | keep_closed | skipped | superseded | Already closed; it cannot serve as an automated fix path. |

## Needs Human

- Decide whether raw Discord-native `components` is a supported public generic message-tool contract. The current schema and Discord contract test say no; the supported existing route is `presentation`.
