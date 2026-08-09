---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120735"
mode: "plan"
run_id: "31293489332"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31293489332"
head_sha: "095f5c5a9492b90777e7c96eb1ff319b861863cf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-09T04:01:58.903Z"
canonical: "https://github.com/openclaw/openclaw/issues/120735"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120735"
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

# issue-openclaw-openclaw-120735

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31293489332](https://github.com/openclaw/clawsweeper/actions/runs/31293489332)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/120735

## Summary

Current main still intentionally skips downloading animated TGS and video WebM Telegram stickers, but leaves the agent body and group-history projection empty. Plan a narrow Telegram context repair that adds an unavailable-media notice without changing download, conversion, command parsing, or typed sticker facts.

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
| #120735 | fix_needed | planned | canonical | A narrow bug fix is appropriate: make the intentionally unavailable media visible to the agent while retaining the existing no-download invariant. |
| cluster:issue-openclaw-openclaw-120735 | build_fix_artifact | planned | canonical | Create one narrow implementation PR from clawsweeper/issue-openclaw-openclaw-120735. |
| #83748 | keep_closed | skipped | related | Historical related context only; no closure action is valid. |
| #93130 | keep_closed | skipped | related | Already merged historical PR; no mutation is valid. |

## Needs Human

- none
