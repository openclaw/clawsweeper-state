---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-124689"
mode: "autonomous"
run_id: "32510449217"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32510449217"
head_sha: "eb8e2caabeb2ceabb5ef8145ebbb72ad6e6d3cff"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-21T18:11:13.417Z"
canonical: "https://github.com/openclaw/openclaw/issues/124689"
canonical_issue: "https://github.com/openclaw/openclaw/issues/124689"
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

# issue-openclaw-openclaw-124689

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32510449217](https://github.com/openclaw/clawsweeper/actions/runs/32510449217)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/124689

## Summary

Current main source confirms the narrow fallback-selection defect: unconfigured probes ignore catalog status and select deprecated kimi-k2.5 before usable Ollama Cloud rows. A two-file repair artifact is planned, but this read-only checkout has no dependencies and Corepack cannot create its cache, so no branch, regression test, or local validation could be completed. The required sibling Codex checkout is also absent; no Codex verdict or merge recommendation is made.

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
| #124689 | fix_needed | blocked | canonical | Implementation is blocked only by the read-only checkout and unavailable dependencies; the source-defined repair path is narrow and does not need product or provider-policy judgment. |
| cluster:issue-openclaw-openclaw-124689 | build_fix_artifact | planned | canonical | A writable executor can implement and validate this focused repair on clawsweeper/issue-openclaw-openclaw-124689. |

## Needs Human

- none
