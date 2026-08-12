---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122476"
mode: "autonomous"
run_id: "31569284709"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31569284709"
head_sha: "a1795973a9e6bb00b73cd6adc21a4ea02ca78ced"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-12T06:29:55.654Z"
canonical: "https://github.com/openclaw/openclaw/issues/122476"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122476"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-122476

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31569284709](https://github.com/openclaw/clawsweeper/actions/runs/31569284709)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/122476

## Summary

#122476 is a real current-main bug: uppercase streamed `N` is allowed by both the shared auto-reply prefix classifier and the Gateway sibling classifier, so it can reach a Matrix draft before final NO_REPLY suppression. A narrow new-fix-PR artifact is ready, but this read-only checkout lacks tsx/node_modules, so no branch or validation could be produced locally.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #122476 | fix_needed | blocked | canonical | Implementation is blocked only by the read-only, dependency-incomplete checkout; the provided fix artifact is executable by the repair executor. |
| cluster:issue-openclaw-openclaw-122476 | build_fix_artifact | planned | canonical | Create one narrow PR from clawsweeper/issue-openclaw-openclaw-122476. |
| #50365 | keep_closed | skipped | superseded | Historical evidence only; no mutation is valid for a closed PR. |
| #51739 | keep_closed | skipped | related | Merged historical context; no mutation is valid. |
| #62845 | keep_closed | skipped | superseded | Historical evidence only; no mutation is valid. |

## Needs Human

- none
