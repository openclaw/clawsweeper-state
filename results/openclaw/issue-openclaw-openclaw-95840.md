---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-95840"
mode: "autonomous"
run_id: "32353076005"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32353076005"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-08-20T09:31:33.349Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32353076005](https://github.com/openclaw/clawsweeper/actions/runs/32353076005)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/95840

## Summary

Current main reproduces the exclusion, but the requested direct-only scope is not representable by the existing provider eligibility hook. Maintainer confirmation is needed before changing its public context boundary.

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
| #95840 | needs_human | blocked | needs_human | Confirm whether official API Platform only, or Platform plus ChatGPT/Codex OAuth, is the supported cache-TTL boundary. The existing hook cannot distinguish either from all custom OpenAI-compatible routes; the mandatory ../codex checkout is also unavailable for the required direct Codex transport inspection. |
| #95610 | keep_related | planned | related | Both concern OpenAI cache efficiency, but they require separate owner-boundary repairs. |

## Needs Human

- Confirm the supported endpoint boundary for cache-TTL eligibility: official api.openai.com only, or that plus chatgpt.com/Codex OAuth. If direct-only means official endpoints, authorize extending the existing eligibility context with resolved model baseUrl so custom OpenAI-compatible routes remain excluded.
