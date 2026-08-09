---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120735"
mode: "plan"
run_id: "31313697718"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31313697718"
head_sha: "80847d16452c774d7c4e94abe2b9cfb6e1319b57"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-09T12:43:41.053Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31313697718](https://github.com/openclaw/clawsweeper/actions/runs/31313697718)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/120735

## Summary

#120735 is the open canonical bug: current main intentionally skips TGS/WebM sticker downloads but loses the known unsupported outcome before context rendering, leaving raw Telegram file refs. Plan one narrow Telegram fix PR; do not close or merge anything.

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
| #83748 | keep_closed | skipped | related | Historical closed context only; no closure action is valid. |
| #93130 | keep_closed | skipped | related | Historical merged context; no mutation is valid. |
| #120735 | fix_needed | planned | canonical | No viable open PR exists. Preserve the intentional no-download policy while carrying a typed unavailable reason into Telegram context and projection rendering. |
| cluster:issue-openclaw-openclaw-120735 | build_fix_artifact | planned | canonical | Prepare one credited replacement fix PR from clawsweeper/issue-openclaw-openclaw-120735. |

## Needs Human

- none
