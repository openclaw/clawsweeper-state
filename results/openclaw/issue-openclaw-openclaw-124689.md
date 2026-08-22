---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-124689"
mode: "autonomous"
run_id: "32563313904"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32563313904"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-22T08:59:20.786Z"
canonical: "https://github.com/openclaw/openclaw/issues/124689"
canonical_issue: "https://github.com/openclaw/openclaw/issues/124689"
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

# issue-openclaw-openclaw-124689

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32563313904](https://github.com/openclaw/clawsweeper/actions/runs/32563313904)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/124689

## Summary

Current-main source shows the probe planner discards the configured cross-provider cloud candidate and selects the first ollama-cloud catalog row, which is deprecated kimi-k2.5. A narrow fix artifact is ready; implementation and local validation are blocked by the read-only dependency-less checkout and unavailable sibling Codex source.

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
| #124689 | fix_needed | planned | canonical | Real current-main bug; executor should implement and validate the narrow owner-boundary repair. |
| #120752 | keep_related | planned | related | Distinct Control UI session-state defect. |
| #122851 | keep_related | planned | related | Distinct feature request. |
| cluster:issue-openclaw-openclaw-124689 | build_fix_artifact | planned | canonical | Open or update the mandated ClawSweeper fix PR after validation. |

## Needs Human

- none
