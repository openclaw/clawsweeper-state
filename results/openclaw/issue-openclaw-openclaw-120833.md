---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120833"
mode: "autonomous"
run_id: "31293110224"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31293110224"
head_sha: "095f5c5a9492b90777e7c96eb1ff319b861863cf"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-09T05:00:48.313Z"
canonical: "https://github.com/openclaw/openclaw/issues/120833"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120833"
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

# issue-openclaw-openclaw-120833

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31293110224](https://github.com/openclaw/clawsweeper/actions/runs/31293110224)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/120833

## Summary

Confirmed a generic restart-recovery ordering race on main. A narrow fix plan is ready, but this read-only checkout cannot write the branch or install the missing focused-test dependency.

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
| #120833 | fix_needed | blocked | canonical | Implementation is blocked only by this worker's read-only checkout and unavailable dependencies; the issue classification and narrow repair plan are complete. |
| #120285 | keep_closed | skipped |  | Already closed; no action is valid. |
| #120538 | keep_closed | skipped |  | Already closed; no action is valid. |
| cluster:issue-openclaw-openclaw-120833 | build_fix_artifact | planned | canonical | A narrow generic lifecycle repair is appropriate; no Matrix-specific production logic is needed. |

## Needs Human

- none
