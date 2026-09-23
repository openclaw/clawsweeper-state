---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-79469"
mode: "autonomous"
run_id: "35912670873"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35912670873"
head_sha: "549143746fd2f0012b31121b8996c74ddee8afd9"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-23T20:38:30.631Z"
canonical: "https://github.com/openclaw/openclaw/issues/79469"
canonical_issue: "https://github.com/openclaw/openclaw/issues/79469"
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

# issue-openclaw-openclaw-79469

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35912670873](https://github.com/openclaw/clawsweeper/actions/runs/35912670873)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/79469

## Summary

Current main still projects only the stored reasoning override, while the Control UI requires that override to equal "on" to show saved thinking. The documented inherited-on path is therefore hidden. Implementation is blocked in this read-only checkout, which also lacks dependencies; no red/green test, browser proof, patch, or PR was produced.

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
| #79469 | fix_needed | planned | canonical | The configured inherited-on visibility defect remains source-reproducible on current main. |
| #88079 | keep_related | planned | related | Live streaming and provider parsing require separate validation. |
| #117365 | keep_related | planned | related | The contributor's disclosure work remains independently useful. |
| #150148 | keep_related | planned | related | Keep live-stream repair outside this bug-only implementation. |
| cluster:issue-openclaw-openclaw-79469 | build_fix_artifact | blocked |  | A writable checkout with installed dependencies is required to establish the requested failing regression, implement the fix, validate it, and capture real Gateway/Control UI evidence. |

## Needs Human

- none
