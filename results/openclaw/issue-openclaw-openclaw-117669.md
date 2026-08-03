---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-117669"
mode: "autonomous"
run_id: "30773439361"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30773439361"
head_sha: "de31c9959070dd22ec785fdbcc924fc8e6de1e06"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-03T00:30:33.000Z"
canonical: "https://github.com/openclaw/openclaw/issues/117669"
canonical_issue: "https://github.com/openclaw/openclaw/issues/117669"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-117669

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30773439361](https://github.com/openclaw/clawsweeper/actions/runs/30773439361)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/117669

## Summary

Confirmed the canonical defect on current main b7f9cd0a01671f7be5fc34b4bd4bf6770603f480: recordGroundedShortTermCandidates normalizes the corpus path but calls isContaminatedDreamingSnippet(rawSnippet) without the existing session-corpus allowance, so User:/Assistant: corpus turns are dropped before the SQLite recall store. The durable-promotion call sites remain correctly strict. This worker has a read-only checkout, so it could not apply or run the focused regression; a narrow executable fix artifact is provided.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/118325 | clawsweeper/issue-openclaw-openclaw-117669 |  |
| issue_implementation_status_comment | updated | #117669 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #118325 | merge_canonical | ready | fix_pr | issue implementation PR checks are green; merge intentionally blocked for this lane |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #117669 | fix_needed | blocked | canonical | A narrow repair is source-confirmed, but the read-only checkout prevents applying and validating it in this worker. |
| #67580 | keep_closed | skipped | related | Already closed; no mutation is valid. |
| #117676 | keep_closed | skipped | superseded | Already closed and not a viable canonical implementation. |
| #117946 | keep_closed | skipped | superseded | Already closed; its narrow approach should be carried forward in the replacement fix with credit. |
| cluster:issue-openclaw-openclaw-117669 | build_fix_artifact | planned | canonical | Create one narrow branch/PR from current main after obtaining a writable execution checkout. |

## Needs Human

- none
