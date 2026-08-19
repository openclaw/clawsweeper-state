---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-126231"
mode: "autonomous"
run_id: "32231046503"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32231046503"
head_sha: "02c930c53d1c7e22ce89d23ba76e6b547a4e2a7f"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-19T08:19:26.561Z"
canonical: "#126231"
canonical_issue: "#126231"
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

# issue-openclaw-openclaw-126231

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32231046503](https://github.com/openclaw/clawsweeper/actions/runs/32231046503)

Workflow conclusion: success

Worker result: blocked

Canonical: #126231

## Summary

Confirmed #126231 on main: the pre-adoption watchdog bypasses the canonical retry disposition and directly dead-letters the claim. No branch, edit, test run, or PR was possible because this worker environment is read-only; the root-required sibling ../codex checkout is also unavailable.

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
| #126172 | keep_independent | planned | independent | Unrelated root cause; retain separately. |
| #126231 | fix_needed | blocked | canonical | Repair is well scoped but cannot be applied or validated in this read-only checkout. |
| #126231 | build_fix_artifact | blocked | canonical | A narrow replacement path is specified below; no writable execution path exists. |

## Needs Human

- none
