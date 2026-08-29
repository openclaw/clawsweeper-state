---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-130144"
mode: "autonomous"
run_id: "33241856541"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33241856541"
head_sha: "e1eefe217304f0f510acb3890db1155cef61682e"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-29T08:17:16.154Z"
canonical: "https://github.com/openclaw/openclaw/issues/130144"
canonical_issue: "https://github.com/openclaw/openclaw/issues/130144"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-130144

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33241856541](https://github.com/openclaw/clawsweeper/actions/runs/33241856541)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/130144

## Summary

#130144 is a valid narrow Telegram-plugin repair. The existing shared `streaming.progress.maxLineChars` contract is accepted and documented, but Telegram’s native structured preview re-clips lines with a fixed 300-unit helper, bypassing that budget and its boundary-aware behavior. Plan one new credited fix PR; do not add a configuration option or edit CHANGELOG.md.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #130144 | fix_needed | planned | canonical | Open canonical issue; no viable implementation PR is hydrated. |
| #111944 | keep_related | planned | related | Related Telegram progress area, but a different root cause and validation path. |
| #87795 | keep_closed | skipped | superseded | Already closed; no closure action is valid. |
| #126477 | keep_closed | skipped | independent | Already closed historical context. |
| #126480 | keep_closed | skipped | independent | Already merged and outside this repair. |
| cluster:issue-openclaw-openclaw-130144 | build_fix_artifact | planned | canonical | A narrow implementation path exists and requires a new ClawSweeper PR. |

## Needs Human

- none
