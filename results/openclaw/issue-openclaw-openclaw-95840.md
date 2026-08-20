---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-95840"
mode: "autonomous"
run_id: "32358574208"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32358574208"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-08-20T10:32:57.234Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32358574208](https://github.com/openclaw/clawsweeper/actions/runs/32358574208)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/95840

## Summary

#95840 is a real configured-path defect, but the existing eligibility hook cannot distinguish official direct OpenAI endpoints from a custom OpenAI-compatible base URL. Maintainer scope confirmation is required before a safe narrow repair.

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
| #95610 | keep_related | planned | related | Leave open as a related cache-efficiency report. |
| #95840 | needs_human | planned | canonical | Confirm whether cache-TTL is intended for every canonical `openai` route, including configured custom and ChatGPT endpoints, or only the official Platform endpoint. The current hook cannot enforce the latter without a contract expansion; this job explicitly requires stopping when endpoint/transport scope is not established. |

## Needs Human

- Decide the supported direct-OpenAI scope: all canonical `openai` provider routes, or only `<external link> If Platform-only is intended, approve a narrow eligibility-context extension carrying resolved base URL/transport before implementation.
