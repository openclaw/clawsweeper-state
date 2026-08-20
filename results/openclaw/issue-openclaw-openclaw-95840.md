---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-95840"
mode: "autonomous"
run_id: "32361201102"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32361201102"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-20T11:06:09.577Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32361201102](https://github.com/openclaw/clawsweeper/actions/runs/32361201102)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/95840

## Summary

No code or GitHub mutations made. The source defect is present locally, but the existing eligibility-hook context cannot safely distinguish direct OpenAI from custom OpenAI-compatible endpoints; implementation is blocked pending that owner-boundary decision.

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
| #95840 | fix_needed | blocked | canonical | A direct-OpenAI-only predicate cannot be proven with the existing hook because endpoint identity is unavailable. An API-only predicate risks enabling the explicitly excluded custom OpenAI-compatible routes. |
| cluster:issue-openclaw-openclaw-95840 | build_fix_artifact | blocked | needs_human | No executable fix PR is safe until maintainers choose whether eligibility applies to all openai-responses routes or authorize endpoint identity in the hook contract. |
| #95610 | keep_related | planned | related | Keep open as a related OpenAI caching issue; it is not a duplicate of this provider-eligibility defect. |

## Needs Human

- Decide whether cache-TTL eligibility may cover every `openai` provider route using `openai-responses`, or authorize a hook-context expansion that supplies the resolved endpoint so the OpenAI plugin can safely limit eligibility to the official platform endpoint.
