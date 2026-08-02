---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118274"
mode: "autonomous"
run_id: "30772091359"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30772091359"
head_sha: "de31c9959070dd22ec785fdbcc924fc8e6de1e06"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-02T23:29:34.106Z"
canonical: "https://github.com/openclaw/openclaw/issues/118274"
canonical_issue: "https://github.com/openclaw/openclaw/issues/118274"
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

# issue-openclaw-openclaw-118274

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30772091359](https://github.com/openclaw/clawsweeper/actions/runs/30772091359)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/118274

## Summary

#118274 remains a reproducible, non-security canonical bug on `openclaw/openclaw@5aae66f4e368187e2edb242f123585db74c11b77`. The shared settled-tool finalization guard treats any `lastToolError` and any errored terminal `toolResult` as proof that tools were not settled, even when every terminal tool call has a matching post-assistant result and no work remains active. Plan a narrow one-shot, tools-disabled finalization repair with focused embedded-runner and isolated-cron regressions. No GitHub or checkout mutation was performed.

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
| #118274 | keep_canonical | planned | canonical | The issue describes a broken existing terminal-outcome invariant, not a new feature or policy decision. The owner is the generic embedded-runner settled-tool continuation path, and the narrow repair benefits channels and isolated cron through the existing shared flow. |
| cluster:issue-openclaw-openclaw-118274 | fix_needed | planned | canonical | No viable candidate PR is hydrated. The job permits one narrow new fix PR on clawsweeper/issue-openclaw-openclaw-118274. |
| cluster:issue-openclaw-openclaw-118274 | build_fix_artifact | planned | canonical | The resulting PR remains limited to the settled-turn owner, its regression suite, and the existing cron projection test. |
| cluster:issue-openclaw-openclaw-118274 | open_fix_pr | planned | canonical | The job permits raising one implementation PR but prohibits merge and issue closure. |

## Needs Human

- none
