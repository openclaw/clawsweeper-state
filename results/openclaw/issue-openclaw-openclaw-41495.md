---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-41495"
mode: "autonomous"
run_id: "30933304475"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30933304475"
head_sha: "2a61adcc1f062561ba3c9deb62cc0df97cdc81d2"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-08-04T17:25:56.557Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30933304475](https://github.com/openclaw/clawsweeper/actions/runs/30933304475)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/41495

## Summary

The stale inline-button prompt is reproducible, but no safe narrow repair satisfies the requested typed, portable interaction contract. Existing typed callbacks are deliberately opaque; the only generic model-turn fallback is deprecated raw callback data.

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
| #41495 | keep_canonical | planned | canonical | Keep the canonical issue open pending a maintainer decision on the generic model-authored button outcome. |
| cluster:issue-openclaw-openclaw-41495 | needs_human | planned | needs_human | Maintainer direction is needed on a first-class portable model-response/select action and its cross-channel routing semantics. A prompt-only change to opaque callbacks risks silent clicks; directing models to deprecated raw values violates the requested typed/no-inference boundary. |

## Needs Human

- Should OpenClaw add a portable, model-authorable response action with defined agent-visible routing across channels? This product/API decision is required before a safe fix PR can replace the stale shared guidance.
