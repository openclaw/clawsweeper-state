---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120735"
mode: "plan"
run_id: "31299201949"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31299201949"
head_sha: "6971afb72029ac8c845bb29c337134f2534b1dbc"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-09T06:40:21.051Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31299201949](https://github.com/openclaw/clawsweeper/actions/runs/31299201949)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/120735

## Summary

#120735 is the live canonical animated/video Telegram sticker-context bug. Current main intentionally avoids downloading TGS/WebM stickers, but the pathless result loses its unavailable reason before agent context is built. Plan a narrow credited fix PR; #83748 and merged #93130 are closed historical static-WEBP work, not duplicates.

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
| #83748 | keep_closed | skipped | related | Already closed historical context; no close or mutation is valid. |
| #93130 | keep_closed | skipped | related | Already merged historical static-sticker repair; it is not the canonical fix for the live unsupported-sticker context defect. |
| #120735 | fix_needed | planned | canonical | A narrow Telegram owner-boundary repair is warranted; no viable open contributor PR exists. |
| cluster:issue-openclaw-openclaw-120735 | build_fix_artifact | planned | canonical | Create one narrow fix PR from clawsweeper/issue-openclaw-openclaw-120735. |

## Needs Human

- none
