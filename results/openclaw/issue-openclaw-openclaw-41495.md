---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-41495"
mode: "autonomous"
run_id: "30933728183"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30933728183"
head_sha: "2a61adcc1f062561ba3c9deb62cc0df97cdc81d2"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-08-04T17:31:45.831Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30933728183](https://github.com/openclaw/clawsweeper/actions/runs/30933728183)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/41495

## Summary

The stale prompt is reproducible, but a safe typed portable button repair needs a product/API decision: explicit callback actions are opaque and unclaimed clicks silently end, while the only generic agent-return path is deprecated raw value fallback.

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
| #41495 | keep_canonical | planned | canonical | Keep the live canonical issue open while maintainers choose the supported generic interaction contract. |
| cluster:issue-openclaw-openclaw-41495 | needs_human | planned | needs_human | Do not create a prompt-only PR that promotes deprecated raw callback inference or causes opaque callback clicks to silently do nothing. |

## Needs Human

- Choose one supported contract for model-authored generic choices: add a first-class typed response/select action with cross-channel agent routing, or explicitly retain and document value as a supported model-facing callback contract. Either choice exceeds the stated prompt-only bug-fix boundary.
