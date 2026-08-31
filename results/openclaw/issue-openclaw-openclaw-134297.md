---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-134297"
mode: "autonomous"
run_id: "33418824565"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33418824565"
head_sha: "aba9826ab8c010a8f5a2b4411484dc4cb7e94f51"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-31T17:46:18.757Z"
canonical: "https://github.com/openclaw/openclaw/issues/134297"
canonical_issue: "https://github.com/openclaw/openclaw/issues/134297"
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

# issue-openclaw-openclaw-134297

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33418824565](https://github.com/openclaw/clawsweeper/actions/runs/33418824565)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/134297

## Summary

#134297 is a current, narrow Gateway diagnostic bug. A bounded per-socket-source dedupe repair is ready as a new fix PR artifact; local implementation and validation are blocked because this checkout is read-only with no dependencies, and the mandatory sibling ../codex source is absent and cannot be cloned.

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
| #125369 | keep_related | planned | related | Open, independent product/configuration work; no closure or fix action belongs in this bug-only cluster. |
| #125390 | keep_closed | skipped | related | Closed context ref; no mutation is permitted or needed. |
| #134297 | fix_needed | blocked | canonical | Implementation is blocked only in this read-only, dependency-free checkout; the deterministic executor can apply the narrow artifact on clawsweeper/issue-openclaw-openclaw-134297. |
| cluster:issue-openclaw-openclaw-134297 | build_fix_artifact | planned | canonical | Narrow non-security repair artifact for the canonical issue. |

## Needs Human

- none
