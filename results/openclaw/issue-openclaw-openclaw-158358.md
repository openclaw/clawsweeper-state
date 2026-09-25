---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-158358"
mode: "autonomous"
run_id: "36194143804"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36194143804"
head_sha: "9fb3a5d5887891c08e0310cafc54b09ab3023c2a"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-25T22:40:07.471Z"
canonical: "https://github.com/openclaw/openclaw/issues/158358"
canonical_issue: "https://github.com/openclaw/openclaw/issues/158358"
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

# issue-openclaw-openclaw-158358

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36194143804](https://github.com/openclaw/clawsweeper/actions/runs/36194143804)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/158358

## Summary

Current main still has the reported source-level mismatch: an omitted selection produces a bare Claude model ID while the catalog default supplies a 1M budget. Native reproduction and implementation are blocked because this read-only checkout has neither a Claude CLI executable nor installed dependencies. No code or GitHub state changed.

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
| #158358 | keep_canonical | planned | canonical | The issue describes the mismatch found in current source. |
| #158353 | keep_related | planned | related | Window selection may affect compaction frequency, but counter accounting is separate work. |
| cluster:issue-openclaw-openclaw-158358 | fix_needed | planned | canonical | The source-level mismatch warrants a focused repair after the required native reproduction. |
| cluster:issue-openclaw-openclaw-158358 | build_fix_artifact | blocked | canonical | The job requires a failing CLI-run preparation path and a real supported Claude CLI invocation before editing. Native proof is unavailable here. |

## Needs Human

- none
