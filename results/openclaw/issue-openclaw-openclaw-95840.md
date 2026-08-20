---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-95840"
mode: "autonomous"
run_id: "32360805447"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32360805447"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-08-20T10:59:08.915Z"
canonical: "https://github.com/openclaw/openclaw/issues/95840"
canonical_issue: "https://github.com/openclaw/openclaw/issues/95840"
canonical_pr: null
actions_total: 2
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32360805447](https://github.com/openclaw/clawsweeper/actions/runs/32360805447)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/95840

## Summary

#95840 is a real configured cache-TTL eligibility defect on main, but the requested direct-OpenAI-only boundary cannot be represented by the existing hook: it has no base-URL/auth context. Maintainer direction is required before widening eligibility to every `openai` Responses route.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #95610 | keep_related | planned | related | Keep open as a related OpenAI cache-efficiency report. |
| #95840 | needs_human | blocked | needs_human | Confirm whether “direct OpenAI” means every owner-scoped `openai` + `openai-responses` route, or only the official Platform endpoint. The latter requires a broader provider-hook context and is outside this narrow repair. |

## Needs Human

- Decide whether cache-TTL eligibility may cover all `provider: openai` / `modelApi: openai-responses` routes, including configured custom base URLs. If official Platform-only behavior is required, approve a separate provider-hook context expansion that carries authoritative endpoint information.
