---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-157477"
mode: "autonomous"
run_id: "36041916997"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36041916997"
head_sha: "f4322a8542135175b2a96f6a63fde8685ef14cf5"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-24T19:09:37.141Z"
canonical: "https://github.com/openclaw/openclaw/issues/157477"
canonical_issue: "https://github.com/openclaw/openclaw/issues/157477"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-157477

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36041916997](https://github.com/openclaw/clawsweeper/actions/runs/36041916997)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/157477

## Summary

The bug remains source-verifiable at main c6c78100: Gateway reads expose scheduleErrorCount, but the closed Automations output schema rejects it. Implementation is blocked in this read-only checkout; no regression was run or patch created.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #157477 | fix_needed | planned | canonical | A narrow read-schema correction is needed. Runtime reproduction and implementation remain outstanding. |
| cluster:issue-openclaw-openclaw-157477 | build_fix_artifact | blocked |  | Implementation requires a writable, dependency-ready checkout. |

## Needs Human

- none
