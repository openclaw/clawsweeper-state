---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-86050"
mode: "autonomous"
run_id: "33196594366"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33196594366"
head_sha: "566889b0dc5a0756e8ad7d2a36402e8ea84ac175"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-28T18:09:31.643Z"
canonical: "https://github.com/openclaw/openclaw/issues/86050"
canonical_issue: "https://github.com/openclaw/openclaw/issues/86050"
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

# issue-openclaw-openclaw-86050

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33196594366](https://github.com/openclaw/clawsweeper/actions/runs/33196594366)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/86050

## Summary

#86050 remains a source-reproducible Claude CLI streaming bug on checked-out main b5acb499: agent-mode Claude uses the Anthropic Agent SDK, which emits partial assistant records into the generic JSONL parser; that parser only accepts nested stream_event text deltas. Local implementation and validation are blocked because this worker filesystem is read-only and dependencies are absent; pnpm install fails with EROFS and the required Vitest retry cannot resolve tsx.

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
| #86050 | fix_needed | planned | canonical | A narrow implementation is appropriate, but this worker cannot write the repair branch or run validation in the read-only checkout. |
| cluster:issue-openclaw-openclaw-86050 | build_fix_artifact | planned | canonical | Produce one new, narrow credited-by-history fix PR from clawsweeper/issue-openclaw-openclaw-86050 once a writable checkout with dependencies is available. |
| cluster:issue-openclaw-openclaw-86050 | open_fix_pr | blocked | canonical | Implementation, branch validation, and PR creation require a writable executor checkout with dependencies. |
| #86649 | keep_closed | skipped | superseded | Already closed; no closure or mutation is permitted. |
| #95404 | keep_closed | skipped | related | Already closed and independently resolved. |
| #95422 | keep_closed | skipped | related | Already closed and outside this Claude CLI repair cluster. |

## Needs Human

- none
