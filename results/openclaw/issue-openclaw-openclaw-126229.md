---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-126229"
mode: "autonomous"
run_id: "32267691728"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32267691728"
head_sha: "02c930c53d1c7e22ce89d23ba76e6b547a4e2a7f"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-19T16:32:56.210Z"
canonical: "https://github.com/openclaw/openclaw/issues/126229"
canonical_issue: "https://github.com/openclaw/openclaw/issues/126229"
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

# issue-openclaw-openclaw-126229

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32267691728](https://github.com/openclaw/clawsweeper/actions/runs/32267691728)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/126229

## Summary

#126229 is a reproducible canonical gateway projection bug: cap truncation discards the fact needed by session.message, history/SSE, and sessions_history consumers. A narrow fix plan is ready, but this read-only checkout has no node_modules and cannot create the required regression or branch; the mandated sibling ../codex source checkout is also absent and cannot be cloned here.

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
| #126229 | fix_needed | blocked | canonical | Implementation is blocked only by the read-only execution environment and missing required local dependencies/source checkout; the canonical issue and narrow repair scope remain clear. |
| cluster:issue-openclaw-openclaw-126229 | build_fix_artifact | planned | canonical | Executor should create the credited ClawSweeper PR once it has a writable checkout with dependencies and the required Codex source inspection. |
| #122043 | keep_related | planned | related | Keep open as a distinct client recovery-path issue; this metadata repair is related but does not replace it. |

## Needs Human

- none
