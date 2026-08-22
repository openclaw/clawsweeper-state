---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-128017"
mode: "autonomous"
run_id: "32592649522"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32592649522"
head_sha: "648ad3538d987a05833ed3bcdff1cf1d8961cc48"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-22T20:06:41.638Z"
canonical: "https://github.com/openclaw/openclaw/issues/128017"
canonical_issue: "https://github.com/openclaw/openclaw/issues/128017"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-128017

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32592649522](https://github.com/openclaw/clawsweeper/actions/runs/32592649522)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/128017

## Summary

Confirmed the marker-only search/snippet defect on current main (0a35d548). A narrow plugin-local repair is ready to plan, but this read-only checkout cannot create the branch or regression tests; focused validation is also blocked because `tsx` is not installed. The required sibling `../codex` source is absent and cannot be cloned here.

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
| #128017 | fix_needed | planned | canonical | The issue is a confirmed canonical bug. Its repair is blocked only by this worker environment's read-only filesystem, missing dependencies, and unavailable required Codex sibling source. |
| cluster:issue-openclaw-openclaw-128017 | build_fix_artifact | blocked | canonical | Executor should apply this narrow artifact in a writable checkout with dependencies and the required Codex sibling source available. |

## Needs Human

- none
