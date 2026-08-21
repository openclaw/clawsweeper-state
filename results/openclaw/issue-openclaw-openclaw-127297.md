---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-127297"
mode: "autonomous"
run_id: "32518002904"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32518002904"
head_sha: "eb8e2caabeb2ceabb5ef8145ebbb72ad6e6d3cff"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-21T19:35:40.991Z"
canonical: "https://github.com/openclaw/openclaw/issues/127297"
canonical_issue: "https://github.com/openclaw/openclaw/issues/127297"
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

# issue-openclaw-openclaw-127297

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32518002904](https://github.com/openclaw/clawsweeper/actions/runs/32518002904)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/127297

## Summary

Current main (0b8596607208b1be7c963c701cbce8d45d565bf2) still builds an exact npm remediation target from the raw gateway version, so `2026.7.1-2` becomes the invalid target `@openclaw/brave-plugin@2026.7.1-2`. A narrow two-file repair is ready to plan, but this read-only checkout has no dependencies and the mandatory sibling `../codex` source checkout is absent, so no locally validated branch or PR can be produced here.

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
| #127297 | fix_needed | blocked | canonical | The defect is source-proven and narrowly repairable, but this worker cannot modify or validate the branch in the read-only environment. |
| #123136 | keep_related | planned | related | Same plugin-drift area, but it has broader release/publication and recovery scope than the exact normalization defect. |
| cluster:issue-openclaw-openclaw-127297 | build_fix_artifact | planned | canonical | One narrow new fix PR is appropriate once a writable checkout with dependencies and the required sibling Codex source is available. |

## Needs Human

- none
