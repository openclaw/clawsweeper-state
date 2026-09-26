---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-159080"
mode: "autonomous"
run_id: "36261479117"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36261479117"
head_sha: "f9d81c419e55740d5a48a546b6cd27e49b35250d"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-26T18:26:32.285Z"
canonical: "https://github.com/openclaw/openclaw/issues/159080"
canonical_issue: "https://github.com/openclaw/openclaw/issues/159080"
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

# issue-openclaw-openclaw-159080

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36261479117](https://github.com/openclaw/clawsweeper/actions/runs/36261479117)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/159080

## Summary

Current main selects an ordinary LINE route before inspecting the conversation binding, supporting the reported failure. The read-only checkout has no node_modules, and the focused test stops with EROFS before running. No patch or PR could be prepared or validated.

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
| #159080 | fix_needed | planned | canonical | The reported two-agent case needs a failing entry-point regression before a fix is published. |
| #123159 | route_security | planned | security_sensitive | Quarantine this exact linked ref for central handling; the LINE issue remains a separate ordinary bug. |
| cluster:issue-openclaw-openclaw-159080 | build_fix_artifact | blocked |  | Implementation requires a writable checkout with installed dependencies so the two-agent failure can be reproduced and the repair validated. |

## Needs Human

- none
