---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-95840"
mode: "autonomous"
run_id: "32359150580"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32359150580"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-08-20T10:39:06.672Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32359150580](https://github.com/openclaw/clawsweeper/actions/runs/32359150580)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/95840

## Summary

Source inspection on main bbee5467 confirms configured cache-TTL pruning is gated off for OpenAI. A safe direct-OpenAI-only repair cannot use the existing provider hook: its context omits the resolved endpoint, while the OpenAI plugin supports custom OpenAI-compatible base URLs. Expanding eligibility would violate the job’s required exclusion unless a maintainer approves an endpoint fact at that boundary.

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
| #95610 | keep_related | planned | related | Both affect OpenAI cache efficiency but require independent fixes. |
| #95840 | fix_needed | blocked | canonical | Do not add an OpenAI isCacheTtlEligible hook that returns true without endpoint data: it would also cover custom OpenAI-compatible routes, contrary to the explicitly bounded repair request. |

## Needs Human

- Decide whether the existing ProviderCacheTtlEligibilityContext may carry the resolved base URL or an endpoint classification so the OpenAI plugin can return true only for the official direct Platform transport. Without that decision, the requested direct-only exclusion cannot be implemented safely.
