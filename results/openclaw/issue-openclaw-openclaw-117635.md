---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-117635"
mode: "autonomous"
run_id: "30795022765"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30795022765"
head_sha: "e55de43cfc039ea45931eb4e947364399afc280c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-03T09:36:43.360Z"
canonical: "https://github.com/openclaw/openclaw/issues/117635"
canonical_issue: "https://github.com/openclaw/openclaw/issues/117635"
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

# issue-openclaw-openclaw-117635

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30795022765](https://github.com/openclaw/clawsweeper/actions/runs/30795022765)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/117635

## Summary

#117635 is a reproducible current-main gateway ownership defect. The state singleton is named from canonical shared state but both state and config lock files are physically rooted in `resolveGatewayLockDir()` (`os.tmpdir()`), so containers with separate temporary directories do not contend. Prepare one narrow new fix PR that moves only the shared-state ownership lock boundary into the canonical state directory while retaining the ephemeral config lock, restart release flow, stale recovery, role behavior, and `OPENCLAW_ALLOW_MULTI_GATEWAY` semantics.

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
| #117635 | fix_needed | planned | canonical | Canonical issue is open, non-security-sensitive, source-reproducible, and has no hydrated implementation PR. |
| #86119 | keep_related | planned | related | Keep open as an independent lifecycle investigation; it shares deployment context but not the lock-location defect. |
| #107322 | keep_closed | skipped | related | Closed context evidence only; no closure or mutation is valid. |
| cluster:issue-openclaw-openclaw-117635 | build_fix_artifact | planned | canonical | Create one new narrow implementation PR from the requested ClawSweeper branch; no contributor PR needs repair or replacement. |

## Needs Human

- none
