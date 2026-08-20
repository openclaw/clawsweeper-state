---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-95840"
mode: "autonomous"
run_id: "32350603531"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32350603531"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T09:02:04.626Z"
canonical: "https://github.com/openclaw/openclaw/issues/95840"
canonical_issue: "https://github.com/openclaw/openclaw/issues/95840"
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

# issue-openclaw-openclaw-95840

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32350603531](https://github.com/openclaw/clawsweeper/actions/runs/32350603531)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/95840

## Summary

Current main reproduces #95840: direct OpenAI has no provider-owned cache-TTL eligibility hook, so it falls through to false and skips both expired-history projection and post-attempt marker recording. A narrow provider-hook fix is planned, but this checkout is read-only, ../codex is unavailable for the mandatory direct inspection, and pnpm cannot initialize Corepack on the read-only filesystem.

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
| #95840 | fix_needed | blocked | canonical | Implementation is blocked only by this worker environment; the source-level defect and narrow provider-owned repair path are clear. |
| #95610 | keep_related | planned | related | Keep open as a related, independent OpenAI cache-efficiency issue. |
| cluster:issue-openclaw-openclaw-95840 | build_fix_artifact | planned | canonical | A writable executor can implement and validate this narrow fix. |

## Needs Human

- none
