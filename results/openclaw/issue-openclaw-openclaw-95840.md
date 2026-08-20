---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-95840"
mode: "autonomous"
run_id: "32361975962"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32361975962"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-20T11:18:36.539Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32361975962](https://github.com/openclaw/clawsweeper/actions/runs/32361975962)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/95840

## Summary

Current main has the reported source-level gap, but a safe direct-OpenAI-only repair is blocked: the cache-TTL hook context lacks resolved base URL, while custom OpenAI-compatible endpoints use the same provider and `openai-responses` API. This read-only checkout also lacks `../codex` and test dependencies, so no code or PR branch was created.

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
| #95610 | keep_related | planned | related | Keep open independently; it has distinct reproduction and implementation scope. |
| #95840 | fix_needed | blocked | canonical | Do not enable cache-TTL using only provider/model/API facts: that would extend the behavior to custom OpenAI-compatible routes contrary to the job boundary. |
| cluster:issue-openclaw-openclaw-95840 | build_fix_artifact | blocked | canonical | Awaiting an explicit endpoint/transport contract decision before creating an executable PR. |

## Needs Human

- Confirm the supported direct-OpenAI cache-TTL scope: whether both official Platform API and ChatGPT/Codex OAuth routes are eligible, and whether Azure aliases must remain excluded.
- Provide the mandatory sibling ../codex checkout (or a writable environment to obtain it) and dependencies so the required direct Codex inspection and regression validation can run.
