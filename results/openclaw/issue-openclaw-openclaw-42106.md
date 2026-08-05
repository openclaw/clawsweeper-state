---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-42106"
mode: "autonomous"
run_id: "30977207327"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30977207327"
head_sha: "49e8c7de6cfed4a7c34ea4b6449a5ee83e2df6a8"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-05T05:55:37.841Z"
canonical: "https://github.com/openclaw/openclaw/issues/42106"
canonical_issue: "https://github.com/openclaw/openclaw/issues/42106"
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

# issue-openclaw-openclaw-42106

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30977207327](https://github.com/openclaw/clawsweeper/actions/runs/30977207327)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/42106

## Summary

#42106 remains a reproducible canonical bug on main 75ef5aeb: paragraph separators are consumed by the chunker and delivery trimming. A narrow credited fix PR is appropriate; local implementation/validation is blocked because this worker checkout is read-only and its focused test harness lacks p-map.

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
| #42106 | fix_needed | planned | canonical | Repair the shared chunker → subscriber → coalescer ownership path; no config, SDK, or public payload metadata is required. |
| cluster:issue-openclaw-openclaw-42106 | build_fix_artifact | planned | canonical | A narrow new fix PR can preserve the separator exactly once while retaining maxChars, fence, tag, and dedupe invariants. |
| cluster:issue-openclaw-openclaw-42106 | open_fix_pr | blocked | canonical | Executor should apply the artifact on clawsweeper/issue-openclaw-openclaw-42106, install dependencies on its selected proof host if needed, then validate before opening the PR. |
| #73981 | keep_closed | skipped | superseded | Closed context only; no mutation. |
| #94216 | keep_closed | skipped | superseded | Closed context only; retain credit in the replacement PR. |
| #94247 | keep_closed | skipped | superseded | Closed context only; retain credit in the replacement PR. |

## Needs Human

- none
