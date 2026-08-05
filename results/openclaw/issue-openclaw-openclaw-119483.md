---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119483"
mode: "autonomous"
run_id: "30977882727"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30977882727"
head_sha: "49e8c7de6cfed4a7c34ea4b6449a5ee83e2df6a8"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-05T05:30:40.519Z"
canonical: "https://github.com/openclaw/openclaw/issues/119483"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119483"
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

# issue-openclaw-openclaw-119483

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30977882727](https://github.com/openclaw/clawsweeper/actions/runs/30977882727)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/119483

## Summary

#119483 is a real legacy session-execution decoding gap. The current agent exec path already preserves valid UTF-8 and falls back to the Windows console code page only for invalid UTF-8; no Python-specific UTF-8 flag should be injected. Older session bash and extension-exec paths still hard-code UTF-8 decoding, so a narrow PR should reuse the shared streaming decoder there.

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
| #119483 | fix_needed | planned | canonical | Repair both session-owned UTF-8-only consumers through the established decoder; do not alter arbitrary Python invocation arguments or environment. |
| cluster:issue-openclaw-openclaw-119483 | build_fix_artifact | planned | canonical | A narrow new PR can share the existing decode policy across the remaining session-owned subprocess surfaces. |
| cluster:issue-openclaw-openclaw-119483 | open_fix_pr | planned | canonical | The job permits a new fix PR but forbids merge and issue closure. |

## Needs Human

- none
