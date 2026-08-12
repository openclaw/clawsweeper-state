---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122618"
mode: "autonomous"
run_id: "31599955656"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31599955656"
head_sha: "ac340908bf694c902f5a673374be1639ef9f220f"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-12T13:22:52.406Z"
canonical: "https://github.com/openclaw/openclaw/issues/122618"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122618"
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

# issue-openclaw-openclaw-122618

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31599955656](https://github.com/openclaw/clawsweeper/actions/runs/31599955656)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/122618

## Summary

Confirmed on main fb9a62e9956883c1b0aed5fa742d6e527cb9e86d: the final suffix cap can discard the entire structured summary body. A narrow two-file fix is planned, but this worker has a read-only checkout and focused Vitest cannot start because `tsx` is unavailable.

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
| #122618 | keep_canonical | planned | canonical | The report is a reproducible existing-behavior bug with one owner-boundary repair path. |
| #122618 | fix_needed | planned | canonical | Use a half-budget body floor only when necessary, retain the UTF-16-safe suffix tail, and preserve the full suffix when it already fits beside the body. |
| cluster:issue-openclaw-openclaw-122618 | build_fix_artifact | planned | canonical | A writable executor can implement this narrow repair and open the single required ClawSweeper fix PR. |

## Needs Human

- none
