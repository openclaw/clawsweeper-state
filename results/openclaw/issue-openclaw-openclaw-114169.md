---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-114169"
mode: "autonomous"
run_id: "31041676846"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31041676846"
head_sha: "2c3ad8f46c9a9ddd3c0e2c0c961bdbf397d14514"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-05T20:04:49.545Z"
canonical: "https://github.com/openclaw/openclaw/issues/114169"
canonical_issue: "https://github.com/openclaw/openclaw/issues/114169"
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

# issue-openclaw-openclaw-114169

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31041676846](https://github.com/openclaw/clawsweeper/actions/runs/31041676846)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/114169

## Summary

Current main confirms a WhatsApp-only stale busy-activity path. Plan a narrow plugin-owned heartbeat fix; do not add a global timeout configuration surface.

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
| #114169 | fix_needed | planned | canonical | Repair the WhatsApp producer-side activity fact rather than weakening the shared hung-run safeguard with configuration. |
| #114840 | keep_closed | skipped | superseded | Already closed historical context; no mutation is valid. |
| cluster:issue-openclaw-openclaw-114169 | build_fix_artifact | planned | canonical | A narrow new fix PR can directly repair the verified producer-side invariant. |

## Needs Human

- none
