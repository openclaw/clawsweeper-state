---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-95840"
mode: "autonomous"
run_id: "32382869621"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32382869621"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T15:18:24.929Z"
canonical: "https://github.com/openclaw/openclaw/issues/95840"
canonical_issue: "https://github.com/openclaw/openclaw/issues/95840"
canonical_pr: null
actions_total: 6
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32382869621](https://github.com/openclaw/clawsweeper/actions/runs/32382869621)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/95840

## Summary

Current main has the direct-OpenAI cache-TTL eligibility gap, but this read-only checkout lacks both required dependencies and the mandatory sibling ../codex source checkout. A narrow, provider-owned fix artifact is ready for a writable executor.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #95840 | fix_needed | blocked | canonical | Implementation is blocked only by the read-only/missing-dependency environment and the repository-required direct ../codex source inspection; the repair itself is narrow and specified below. |
| cluster:issue-openclaw-openclaw-95840 | build_fix_artifact | planned | canonical | Create one narrow PR from clawsweeper/issue-openclaw-openclaw-95840 after provisioning dependencies and ../codex. |
| #95610 | keep_related | planned | related | Related OpenAI cache-efficiency work has a separate root cause and remains open. |
| #95859 | keep_closed | skipped | superseded | Historical context only. |
| #96383 | keep_closed | skipped | superseded | Historical context only. |
| #102440 | keep_closed | skipped | superseded | Historical context only. |

## Needs Human

- Provision a writable checkout with dependencies and the mandatory sibling ../codex source checkout before implementation or a Codex verdict.
