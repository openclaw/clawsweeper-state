---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-41495"
mode: "autonomous"
run_id: "30932522651"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30932522651"
head_sha: "2a61adcc1f062561ba3c9deb62cc0df97cdc81d2"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-08-04T17:18:40.011Z"
canonical: "https://github.com/openclaw/openclaw/issues/41495"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41495"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-41495

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30932522651](https://github.com/openclaw/clawsweeper/actions/runs/30932522651)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/41495

## Summary

No safe narrow repair is available under the requested typed portable-button boundary. The stale prompt is real, but the only existing generic model-turn path is deprecated raw callback value fallback; explicit typed callbacks are intentionally opaque and can silently do nothing when no plugin owns them.

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
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| issue_implementation_status_comment | updated | #41495 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #41495 | keep_canonical | planned | canonical | Keep the reproducible issue open while maintainers decide whether to add a first-class model-response presentation action with cross-channel routing semantics. |
| cluster:issue-openclaw-openclaw-41495 | needs_human | planned | needs_human | A safe fix requires product/API direction for a typed model-response action and canonical routing/fallback semantics. Updating shared guidance to opaque typed callbacks is unsafe; directing models to deprecated raw value callbacks conflicts with the requested no-inference portable contract. |

## Needs Human

- Decide whether OpenClaw should add a portable, model-authorable response/selection action that has a defined agent-visible outcome across channels. That work exceeds this issue's narrow prompt-only repair boundary.
