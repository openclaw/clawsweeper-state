---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-87336"
mode: "autonomous"
run_id: "31213028861"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31213028861"
head_sha: "f6f6bfca7d65aa54eec9daa82ab84cda9ad6e0e8"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-07T20:48:04.455Z"
canonical: "https://github.com/openclaw/openclaw/issues/87336"
canonical_issue: "https://github.com/openclaw/openclaw/issues/87336"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-87336

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31213028861](https://github.com/openclaw/clawsweeper/actions/runs/31213028861)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/87336

## Summary

Current main still dispatches arbitrary missing sessions_send targets. A narrow fix artifact is ready, but this checkout is read-only and lacks both the requested repair branch and pinned base, so no patch or exact-head validation can be produced here.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/120347 | clawsweeper/issue-openclaw-openclaw-87336 |  |
| issue_implementation_status_comment | updated | #87336 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #120347 | merge_canonical | blocked | fix_pr | checks are not clean: checks-node-compact-small-6: FAILURE, openclaw/ci-gate: FAILURE |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #87336 | fix_needed | planned | canonical | Confirmed ordinary correctness defect; no security, auth, approval, sandbox, config, protocol, or sessions_spawn change is required. |
| cluster:issue-openclaw-openclaw-87336 | build_fix_artifact | planned | canonical | Apply this artifact in a writable checkout seeded with the pinned base and clawsweeper/issue-openclaw-openclaw-87336. |
| #15558 | keep_closed | skipped | related | Historical context only; already closed. |

## Needs Human

- none
