---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-20837"
mode: "autonomous"
run_id: "32987981537"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32987981537"
head_sha: "afe976209aa58a5629041b42b66f6ee11b2812a7"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-26T16:58:08.876Z"
canonical: "https://github.com/openclaw/openclaw/issues/20837"
canonical_issue: "https://github.com/openclaw/openclaw/issues/20837"
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

# issue-openclaw-openclaw-20837

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32987981537](https://github.com/openclaw/clawsweeper/actions/runs/32987981537)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/20837

## Summary

Current main f2ff510e source-reproduces the command-prompt metadata gap: the command bundle supplies unknown host/OS/arch and omits channel, account-aware capabilities, shell, and channel-action metadata, while normal embedded turns supply them. A narrow replacement PR is appropriate, but this worker cannot modify or validate it: the filesystem is read-only, dependencies are absent, and the required sibling ../codex source checkout is unavailable.

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
| #20837 | fix_needed | blocked | canonical | Implementation and local validation are blocked by the read-only checkout, missing dependencies, and unavailable required ../codex source; the narrow repair plan is otherwise ready for the deterministic executor. |
| #21271 | keep_closed | skipped | superseded | Already closed; no closure or mutation is permitted. Preserve @evansantos attribution in the replacement PR context. |
| cluster:issue-openclaw-openclaw-20837 | build_fix_artifact | planned | canonical | Create a narrow credited PR once the executor has a writable checkout, dependencies, and the required ../codex source available. |

## Needs Human

- none
