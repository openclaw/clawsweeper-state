---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-87426"
mode: "autonomous"
run_id: "30854033021"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30854033021"
head_sha: "326104b08f93941c21ab7afd2cd57a60b51ff583"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-03T21:26:20.365Z"
canonical: "https://github.com/openclaw/openclaw/issues/87426"
canonical_issue: "https://github.com/openclaw/openclaw/issues/87426"
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

# issue-openclaw-openclaw-87426

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30854033021](https://github.com/openclaw/clawsweeper/actions/runs/30854033021)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/87426

## Summary

#87426 remains a reproducible narrow bug on current main e4b6bde45a0769865219fa0b086618c66decdc13. The default explain-mode tool metadata preserves the stage-paraphrase, and the terminal error summary carries only that metadata; the payload formatter therefore cannot prefer a redacted compact command for no-reply cron failures. Plan a new focused PR that records a dedicated compact redacted exec command at the terminal-error owner, preserves ordinary progress text, and uses that fact only for exec/bash failure presentation. Focused validation could not start because the read-only checkout lacks the required p-map dependency; executor must run pnpm install in its writable environment before the declared tests.

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
| #87426 | fix_needed | planned | canonical | A narrow owner-boundary repair is appropriate; no open viable implementation PR exists. |
| #97511 | keep_closed | skipped | related | Historical related fix only; it is already closed and must not receive a mutation. |
| #104389 | keep_related | planned | related | Same exec-failure presentation family, but a distinct user-boundary policy problem with separate maintainer decisions. |
| cluster:issue-openclaw-openclaw-87426 | build_fix_artifact | planned | canonical | Create one new narrow credited fix PR from clawsweeper/issue-openclaw-openclaw-87426 after writable-environment validation. |

## Needs Human

- none
