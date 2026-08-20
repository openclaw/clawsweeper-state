---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-95840"
mode: "autonomous"
run_id: "32356389227"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32356389227"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-20T10:07:35.510Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32356389227](https://github.com/openclaw/clawsweeper/actions/runs/32356389227)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/95840

## Summary

Current main still excludes direct OpenAI: the core eligibility path passes only provider, model ID, and API to the plugin hook, while the OpenAI plugin supports custom OpenAI-compatible base URLs under the same provider ID. The requested direct-endpoint-only fix cannot be implemented safely until maintainers define whether eligibility includes Platform only, Platform plus ChatGPT/Codex, or all `openai` routes. No files changed.

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
| #95610 | keep_related | planned | related | Same OpenAI cache-efficiency area, but a distinct root cause and fix surface. |
| #95840 | fix_needed | blocked | canonical | Maintainer endpoint-scope decision and the required direct Codex-source inspection are unavailable; the read-only checkout also cannot install dependencies or create the requested branch changes. |
| cluster:issue-openclaw-openclaw-95840 | build_fix_artifact | blocked | needs_human | The implementation contract must define the supported direct endpoint set before a narrow PR can be safely authored. |

## Needs Human

- Define cache-TTL eligibility for OpenAI routes: official Platform only, official Platform plus ChatGPT/Codex, or every route using provider id `openai`.
- Provide the mandatory sibling `../codex` source checkout (or a writable environment that can clone it) before implementation proceeds.
