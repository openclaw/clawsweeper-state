---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-95840"
mode: "autonomous"
run_id: "32354395750"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32354395750"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-20T09:42:52.379Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32354395750](https://github.com/openclaw/clawsweeper/actions/runs/32354395750)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/95840

## Summary

#95840 is a source-reproducible configured-path defect, but implementation is blocked pending an endpoint-scope decision: the existing provider eligibility hook receives provider/model/API but not base URL, so it cannot distinguish official api.openai.com Responses from a custom OpenAI-compatible Responses endpoint. The checkout is also read-only, lacks dependencies, and cannot satisfy the mandatory sibling Codex-source gate.

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
| #95840 | fix_needed | blocked | needs_human | A provider-only true predicate would include custom OpenAI-compatible Responses routes, contrary to the requested direct-OpenAI-only scope. Maintainer direction is required before widening the hook context or defining modelApi as sufficient provenance. |
| #95610 | keep_related | planned | related | Related cache-efficiency report; it has unique remaining work and must remain open. |
| cluster:issue-openclaw-openclaw-95840 | build_fix_artifact | blocked | needs_human | Do not open a PR until a maintainer selects the supported direct-OpenAI provenance rule and an executor can perform the mandatory Codex inspection and writable validation. |

## Needs Human

- Decide whether #95840 should cover only the official <external link> Responses endpoint. If yes, approve a narrow extension of ProviderCacheTtlEligibilityContext to carry prepared baseUrl provenance; the current hook cannot enforce that boundary. If modelApi === "openai-responses" is accepted as the contract instead, explicitly accept that custom OpenAI-compatible Responses endpoints may also become eligible.
