---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125776"
mode: "autonomous"
run_id: "32538180212"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32538180212"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-21T23:59:05.463Z"
canonical: "https://github.com/openclaw/openclaw/issues/125776"
canonical_issue: "https://github.com/openclaw/openclaw/issues/125776"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-125776

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32538180212](https://github.com/openclaw/clawsweeper/actions/runs/32538180212)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/125776

## Summary

#125776 remains the canonical, source-reproducible bug. Current main drops the dynamic tool call ID at the shared result-progress callback, so Telegram appends an unkeyed result beside its existing tool:<callId> row. A narrow new-fix PR is defined, but this worker cannot implement or validate it: ../codex is absent and the required clone fails in the read-only workspace; the checkout also lacks tsx for the changed-gate harness.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #116512 | keep_related | planned | related | Keep open independently; it is related progress-rendering work, not a duplicate of the dynamic-tool identity loss. |
| #125776 | fix_needed | blocked | canonical | Implementation is blocked only on provisioning a writable checkout with the required ../codex source and installed dependencies; the repair artifact is otherwise executable. |
| #125779 | keep_closed | skipped | superseded | Already closed; do not mutate or treat it as the candidate fix. |
| cluster:issue-openclaw-openclaw-125776 | build_fix_artifact | planned | canonical | Create one narrow new-fix PR after the executor satisfies the upstream Codex source gate and installs dependencies. |

## Needs Human

- none
