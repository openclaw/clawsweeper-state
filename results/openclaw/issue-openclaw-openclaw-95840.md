---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-95840"
mode: "autonomous"
run_id: "32348593389"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32348593389"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-20T08:34:36.673Z"
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
needs_human_count: 1
---

# issue-openclaw-openclaw-95840

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32348593389](https://github.com/openclaw/clawsweeper/actions/runs/32348593389)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/95840

## Summary

Latest main source reproduces the direct-OpenAI omission: cache-TTL eligibility delegates to a provider hook, but the OpenAI plugin supplies none; the fallback excludes OpenAI, which suppresses pruning setup and post-attempt marker recording. A narrow new fix PR is appropriate, but implementation is blocked here because the checkout is read-only, the required sibling ../codex source is absent, and pnpm cannot create its Corepack cache.

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
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| issue_implementation_status_comment | updated | #95840 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #95840 | fix_needed | blocked | canonical | Real configured-path bug; repair requires a writable Codex-gated execution environment. |
| #95610 | keep_related | planned | related | Keep open as a distinct cache-efficiency report. |
| cluster:issue-openclaw-openclaw-95840 | build_fix_artifact | blocked |  | Artifact is ready for the writable executor, pending the mandatory direct ../codex inspection and local validation. |

## Needs Human

- Provide a writable execution checkout with sibling ../codex available for the mandatory direct protocol/runtime inspection; then apply and validate the planned new fix PR.
