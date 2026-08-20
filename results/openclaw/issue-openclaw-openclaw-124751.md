---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-124751"
mode: "autonomous"
run_id: "32390926581"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32390926581"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-20T16:29:16.699Z"
canonical: "https://github.com/openclaw/openclaw/issues/124751"
canonical_issue: "https://github.com/openclaw/openclaw/issues/124751"
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

# issue-openclaw-openclaw-124751

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32390926581](https://github.com/openclaw/clawsweeper/actions/runs/32390926581)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/124751

## Summary

Current main still duplicates a partial chat.final and a fuller durable session.message when their identities differ. The narrow repair is a unique, same-user-turn provisional-final fallback in shared Apple reconciliation; producer-side propagation is wider than this bug lane. No files were changed because the checkout is read-only.

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
| #108692 | keep_closed | skipped | superseded | Already closed; current report’s duplicate-reply root cause remains open as #124751. |
| #123792 | keep_independent | planned | independent | Related session-display symptoms, but a different runtime, data shape, and canonical work item. |
| #124751 | fix_needed | planned | canonical | A narrow shared-Apple repair can preserve the terminal bubble UUID while replacing it with the durable canonical row, without global text deduplication or provider changes. |
| cluster:issue-openclaw-openclaw-124751 | build_fix_artifact | planned | canonical | Create one narrow credited fix PR from clawsweeper/issue-openclaw-openclaw-124751 after adding the regression and proving the shared fallback. |

## Needs Human

- none
