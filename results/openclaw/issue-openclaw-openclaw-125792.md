---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125792"
mode: "autonomous"
run_id: "32134178924"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32134178924"
head_sha: "647503ec44b8e777dd172adf974a945367da0d19"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-18T12:09:47.567Z"
canonical: "https://github.com/openclaw/openclaw/issues/125792"
canonical_issue: "https://github.com/openclaw/openclaw/issues/125792"
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

# issue-openclaw-openclaw-125792

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32134178924](https://github.com/openclaw/clawsweeper/actions/runs/32134178924)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/125792

## Summary

#125792 is a reproducible canonical bug: managed embedding presets omit `ctx-size` while the local embedding input owner caps inputs at 2048. A narrow four-file repair is planned. Local implementation and validation are blocked because this checkout is read-only with no node_modules (`tsx` missing), DNS cannot fetch the pinned upstream llama.cpp contract, and the required sibling ../codex source is unavailable.

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
| #125792 | fix_needed | planned | canonical | No hydrated candidate PR exists. The repair belongs to the llama.cpp preset producer and requires no new option or migration. |
| cluster:issue-openclaw-openclaw-125792 | build_fix_artifact | planned | canonical | Executor should apply the narrow artifact on clawsweeper/issue-openclaw-openclaw-125792 after restoring dependencies and direct dependency-contract access. |

## Needs Human

- none
