---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118029"
mode: "autonomous"
run_id: "30756039551"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30756039551"
head_sha: "8cdf2a157a0450c40b6a1e9d4474213cc901936d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-02T16:52:36.420Z"
canonical: "https://github.com/openclaw/openclaw/issues/118029"
canonical_issue: "https://github.com/openclaw/openclaw/issues/118029"
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

# issue-openclaw-openclaw-118029

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30756039551](https://github.com/openclaw/clawsweeper/actions/runs/30756039551)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/118029

## Summary

#118029 remains reproducible on pinned main 38a5d39b33284a8ca17efe120b239039b3f37c23. The parser creates an empty required address, while direct LineChannelData locations bypass parser validation through ordinary outbound, inline quick-reply batching, and auto-reply delivery. Build one narrow PR that makes location construction the canonical non-empty title/address boundary, rejects malformed directive state at its producer, and skips invalid direct locations without blocking surrounding text.

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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/118064 | clawsweeper/issue-openclaw-openclaw-118029 |  |
| issue_implementation_status_comment | updated | #118029 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #118064 | merge_canonical | ready | fix_pr | issue implementation PR checks are green; merge intentionally blocked for this lane |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #118029 | fix_needed | planned | canonical | This is a reproducible non-security message-loss bug with a narrow owner-boundary repair; no viable implementation PR is hydrated. |
| cluster:issue-openclaw-openclaw-118029 | build_fix_artifact | planned |  | The current fix artifact was too narrow because it covered only parser state; this replacement artifact covers the direct channel-data invariant without expanding product scope. |
| cluster:issue-openclaw-openclaw-118029 | open_fix_pr | planned |  | The job permits a new implementation PR but prohibits merge and issue closure. |

## Needs Human

- none
