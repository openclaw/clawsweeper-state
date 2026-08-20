---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-95840"
mode: "autonomous"
run_id: "32340963296"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32340963296"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T06:54:25.766Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32340963296](https://github.com/openclaw/clawsweeper/actions/runs/32340963296)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/95840

## Summary

#95840 remains the canonical bug. Current main calls the provider-owned cache-TTL hook first, but extensions/openai does not implement it, leaving direct OpenAI on the false generic fallback. Implementation and validation are blocked only by this read-only sandbox: it cannot create the mandatory ../codex checkout, edit the branch, or let Corepack create its cache.

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
| #95840 | fix_needed | blocked | canonical | The deterministic executor must use a writable checkout, inspect ../codex as required by AGENTS.md, implement the provider-owned hook, and run the focused regressions before opening the configured fix PR. |
| #95610 | keep_related | planned | related | Keep #95610 open independently; this repair must not alter prompt assembly or OpenRouter policy. |
| cluster:issue-openclaw-openclaw-95840 | build_fix_artifact | planned | canonical | Narrow fix artifact for the writable executor. |

## Needs Human

- none
