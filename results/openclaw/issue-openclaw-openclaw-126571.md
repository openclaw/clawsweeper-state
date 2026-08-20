---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-126571"
mode: "autonomous"
run_id: "32345080344"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32345080344"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T07:49:54.916Z"
canonical: "https://github.com/openclaw/openclaw/issues/126571"
canonical_issue: "https://github.com/openclaw/openclaw/issues/126571"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-126571

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32345080344](https://github.com/openclaw/clawsweeper/actions/runs/32345080344)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/126571

## Summary

Confirmed a narrow Doctor persistence defect on preflight main, but this read-only worker cannot satisfy the mandatory Codex-source, edit, or dependency-validation gates. No repository or GitHub state changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #126571 | fix_needed | planned | canonical | Broken existing Doctor migration; no product or security decision is needed. |
| #114964 | keep_related | planned | related | Distinct provider-model policy defect. |
| #125578 | keep_independent | planned | independent | Independent product-policy cluster. |
| #126572 | keep_closed | skipped | related | Already closed; no mutation. |
| cluster:issue-openclaw-openclaw-126571 | build_fix_artifact | blocked | canonical | A writable checkout with dependencies and sibling Codex source is required before editing, validating, or opening the PR. |

## Needs Human

- none
