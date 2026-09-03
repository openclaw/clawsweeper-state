---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-137217"
mode: "autonomous"
run_id: "33740644805"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33740644805"
head_sha: "71e1290f7903e122ff8e5d3a66c5f11b0900a2b5"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-03T10:27:18.262Z"
canonical: "https://github.com/openclaw/openclaw/issues/137217"
canonical_issue: "https://github.com/openclaw/openclaw/issues/137217"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-137217

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33740644805](https://github.com/openclaw/clawsweeper/actions/runs/33740644805)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/137217

## Summary

#137217 remains the canonical bug. Current main excludes channel SecretRef targets from normal text status at src/commands/status.scan.ts:64, while the shared status resolver supports configured channel targets and read-only resolution. This leaves the Telegram inspector and heartbeat owner-route probe with an unresolved SecretRef. Implementation is blocked in this read-only checkout: node_modules/tsx is absent, the focused test cannot start, and the required sibling ../codex checkout is unavailable for the repository’s mandatory direct Codex inspection gate.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #137217 | fix_needed | blocked | canonical | A narrow repair is identified, but this worker cannot edit, install dependencies, validate, or satisfy the required direct ../codex inspection gate. |
| #88022 | keep_related | planned | related | Keep open for its stated trust-boundary/product decision. |
| #33070 | keep_closed | skipped | related | Historical context only; no closure action is valid. |
| #34292 | keep_closed | skipped | related | Historical context only; no closure action is valid. |
| #66254 | keep_closed | skipped | independent | Historical independent issue; no closure action is valid. |
| cluster:issue-openclaw-openclaw-137217 | build_fix_artifact | planned | canonical | Executor should create or update the single permitted ClawSweeper branch once writable dependencies and the Codex gate are available. |

## Needs Human

- none
