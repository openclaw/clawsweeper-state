---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-95840"
mode: "autonomous"
run_id: "32356986398"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32356986398"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-08-20T10:12:52.894Z"
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
needs_human_count: 2
---

# issue-openclaw-openclaw-95840

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32356986398](https://github.com/openclaw/clawsweeper/actions/runs/32356986398)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/95840

## Summary

#95840 remains a configured-path defect on main, but direct-OpenAI-only eligibility cannot be safely specified from the current provider hook because it lacks the resolved endpoint. The required direct ../codex source inspection is also unavailable in this read-only worker.

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
| Needs human | 2 |

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
| #95840 | fix_needed | blocked | canonical | Blocked pending maintainer direction on whether transport-only eligibility (provider=openai and api=openai-responses) is acceptable for custom endpoints, or whether the provider hook must gain resolved-endpoint context. Direct Codex-source inspection is additionally unavailable in this worker. |
| #95610 | keep_related | planned | related | Related OpenAI cache-efficiency work with a distinct root cause; it remains independently open. |
| cluster:issue-openclaw-openclaw-95840 | build_fix_artifact | blocked | needs_human | Do not create an executable PR artifact until endpoint scope is chosen and the mandatory Codex-source inspection is possible. |

## Needs Human

- Decide whether cache-TTL eligibility may safely use provider=openai plus modelApi=openai-responses despite custom Responses-compatible endpoints sharing that shape, or authorize a separate endpoint-context contract change.
- Provide or permit creation of ../codex so the mandatory direct Codex-source inspection can be completed before an implementation verdict.
