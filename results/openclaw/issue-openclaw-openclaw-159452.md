---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-159452"
mode: "autonomous"
run_id: "36297905366"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36297905366"
head_sha: "0c3e2698410c47b4964c5953bd39673ae93fb1e8"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-27T06:21:02.177Z"
canonical: "https://github.com/openclaw/openclaw/issues/159452"
canonical_issue: "https://github.com/openclaw/openclaw/issues/159452"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-159452

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36297905366](https://github.com/openclaw/clawsweeper/actions/runs/36297905366)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/159452

## Summary

Current main still drops workspace bindings during implicit daily and idle rollover. The checkout is read-only, so no regression test, patch, or validation was run. The fix plan requires the executor to reproduce the failure before editing.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #159452 | fix_needed | planned | canonical | The existing session workspace binding is lost on implicit rollover. |
| #159304 | route_security | planned | security_sensitive | Route this linked item to central OpenClaw security handling; it is outside this rollover fix. |
| cluster:issue-openclaw-openclaw-159452 | build_fix_artifact | planned |  | A narrow bug fix is supported by the current source and has no viable hydrated PR. |

## Needs Human

- none
