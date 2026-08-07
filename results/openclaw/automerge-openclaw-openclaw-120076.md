---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-120076"
mode: "autonomous"
run_id: "31147962228"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31147962228"
head_sha: "2eb1787e0d183a84f29e84614b84f228037ba69f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-07T04:43:16.297Z"
canonical: "#120076"
canonical_issue: "#120019"
canonical_pr: "#120076"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-120076

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31147962228](https://github.com/openclaw/clawsweeper/actions/runs/31147962228)

Workflow conclusion: success

Worker result: planned

Canonical: #120076

## Summary

#120076 is the canonical repair path. Build a branch-repair artifact: propagate the loopback listener’s bind failure into the readiness gate so MCP login promptly retains its visible manual-code recovery path instead of hanging.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #120019 | keep_related | planned | related | Closure is blocked by the job and the issue remains the useful reproduction and follow-up thread. |
| #120076 | build_fix_artifact | planned | canonical | The same-repository branch is writable and needs a narrow lifecycle repair before any future merge review. |

## Needs Human

- none
