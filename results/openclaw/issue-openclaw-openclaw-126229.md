---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-126229"
mode: "autonomous"
run_id: "32264093082"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32264093082"
head_sha: "02c930c53d1c7e22ce89d23ba76e6b547a4e2a7f"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-19T14:52:05.873Z"
canonical: "https://github.com/openclaw/openclaw/issues/126229"
canonical_issue: "https://github.com/openclaw/openclaw/issues/126229"
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

# issue-openclaw-openclaw-126229

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32264093082](https://github.com/openclaw/clawsweeper/actions/runs/32264093082)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/126229

## Summary

#126229 remains a reproducible canonical bug: the shared sanitizer appends the bounded-preview sentinel but drops the boolean returned by truncateChatHistoryText, so session.message and history/SSE payloads lack __openclaw.truncated. No patch was made because this checkout is read-only, has no dependencies, and the mandatory sibling ../codex source is unavailable for direct inspection.

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
| #126229 | fix_needed | planned | canonical | Current main is affected; no viable PR is hydrated. |
| cluster:issue-openclaw-openclaw-126229 | build_fix_artifact | blocked | canonical | The repair is narrow and ready for a writable executor, but this worker cannot safely implement or validate it. |
| #122043 | keep_related | planned | related | Related cap behavior, distinct client-owner repair. |
| #95318 | keep_closed | skipped | related | Already closed; historical context only. |
| #122207 | keep_closed | skipped | related | Already merged and not a candidate for this API-contract repair. |
| #123324 | keep_closed | skipped | related | Already merged and not a candidate for this API-contract repair. |

## Needs Human

- none
