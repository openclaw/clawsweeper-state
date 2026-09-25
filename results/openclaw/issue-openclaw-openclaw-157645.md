---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-157645"
mode: "autonomous"
run_id: "36071758086"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36071758086"
head_sha: "f06c3bf687a4aee9bf03f2cd9e7646806382374a"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-25T00:08:17.878Z"
canonical: "https://github.com/openclaw/openclaw/issues/157645"
canonical_issue: "https://github.com/openclaw/openclaw/issues/157645"
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

# issue-openclaw-openclaw-157645

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36071758086](https://github.com/openclaw/clawsweeper/actions/runs/36071758086)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/157645

## Summary

Current main still appears to route retained deleted-agent stores into plugin cleanup. The existing guard skips database admission refusals, but deletion is a separate fence. Reproduction and implementation could not run: this checkout is read-only and node_modules is absent.

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
| #157645 | fix_needed | planned | canonical | A focused failing regression through plugin-host cleanup and Gateway close is required before changing code. |
| cluster:issue-openclaw-openclaw-157645 | build_fix_artifact | blocked |  | Implementation is blocked by the host filesystem. Reproduce on a writable checkout before the executor opens a PR. |

## Needs Human

- none
