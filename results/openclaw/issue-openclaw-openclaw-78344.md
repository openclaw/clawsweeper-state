---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-78344"
mode: "plan"
run_id: "31346792916"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31346792916"
head_sha: "13f8ffdea32ad5d0940f490cf57e291414b9a26f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-10T01:54:04.366Z"
canonical: "#78344"
canonical_issue: "#78344"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-78344

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31346792916](https://github.com/openclaw/clawsweeper/actions/runs/31346792916)

Workflow conclusion: success

Worker result: planned

Canonical: #78344

## Summary

Current main still dispatches the restart-recovery continuation with internal provenance but without internal session effects. Gateway preflight therefore defaults it to visible effects. Plan a narrow new fix PR for #78344; related and closed context items remain unchanged.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #78344 | fix_needed | planned | canonical | A narrow producer-boundary repair is valid: keep the continuation model-visible while preventing it from becoming a visible user-turn/session effect. |
| cluster:issue-openclaw-openclaw-78344 | build_fix_artifact | planned | canonical | Create one new ClawSweeper PR from the configured branch after implementing and validating the narrow fix. |
| #43567 | keep_related | planned | related | Same runtime-message family, but a distinct product decision and root cause; do not close or alter it in this fix lane. |
| #92870 | keep_related | planned | related | Related transcript-attribution work with unique remaining scope; no security routing or closure is warranted. |
| #69492 | keep_closed | skipped | related | Historical context only; no closure action is valid. |
| #70289 | keep_closed | skipped | related | Historical context only; no closure action is valid. |
| #70373 | keep_closed | skipped | related | Historical context only; no closure action is valid. |
| #95154 | keep_closed | skipped | superseded | Closed historical PR; do not revive or close it from this lane. |

## Needs Human

- none
