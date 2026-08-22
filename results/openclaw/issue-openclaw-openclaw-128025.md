---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-128025"
mode: "autonomous"
run_id: "32597007431"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32597007431"
head_sha: "648ad3538d987a05833ed3bcdff1cf1d8961cc48"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-22T20:44:03.356Z"
canonical: "#128025"
canonical_issue: "#128025"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-128025

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32597007431](https://github.com/openclaw/clawsweeper/actions/runs/32597007431)

Workflow conclusion: success

Worker result: blocked

Canonical: #128025

## Summary

#128025 remains a reproducible canonical bug on main. A narrow owner-boundary repair and regression are identified, but this sandbox is read-only, lacks required sibling ../codex source, and cannot run pnpm because Corepack cannot create its cache.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| #128025 | fix_needed | blocked | canonical | Implementation and validation are blocked by the read-only worker environment and the mandatory missing Codex sibling-source gate. |

## Needs Human

- Provide a writable repair checkout with sibling ../codex source and a writable pnpm/Corepack cache, then apply and validate the attached narrow fix artifact.
