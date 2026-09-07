---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-141242"
mode: "autonomous"
run_id: "34127726741"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34127726741"
head_sha: "ce5cdbf0f3f561955174cf264ae5d944c03a527e"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-07T14:31:00.443Z"
canonical: "https://github.com/openclaw/openclaw/issues/141242"
canonical_issue: "https://github.com/openclaw/openclaw/issues/141242"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-141242

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34127726741](https://github.com/openclaw/clawsweeper/actions/runs/34127726741)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/141242

## Summary

Source inspection confirms the running-plus-endedAt misclassification on preflight main. A narrow fix artifact is ready, but implementation and regression execution are blocked by the read-only workspace and missing dependencies. No files or GitHub state changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #141242 | fix_needed | planned | canonical | The existing lifecycle contract supports a narrow predicate repair. Execution must first establish the failing ordered regression on current main; native Codex behavior remains unverified. |
| #99964 | keep_closed | skipped | related | Historical context; no closeout action. |
| #99985 | keep_closed | skipped | related | Preserve this prior fix; it does not exclude explicitly running sessions. |
| #102736 | keep_closed | skipped | related | Historical context with a different lifecycle status. |
| #137643 | keep_closed | skipped | related | Different cause of interrupted requester completion; no timeout-policy changes belong in this repair. |
| #138966 | keep_closed | skipped | related | Historical merged context; preserve its behavior. |
| cluster:issue-openclaw-openclaw-141242 | build_fix_artifact | planned |  | Hand off one bounded new-fix PR plan to the writable executor, gated on reproduction and refreshed ownership. |

## Needs Human

- none
