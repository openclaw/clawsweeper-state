---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122295"
mode: "autonomous"
run_id: "31540241615"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31540241615"
head_sha: "4b79888c3f2ad4b9e0c2ee3345984adc995ea81d"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-11T22:06:31.078Z"
canonical: "https://github.com/openclaw/openclaw/issues/122295"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122295"
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

# issue-openclaw-openclaw-122295

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31540241615](https://github.com/openclaw/clawsweeper/actions/runs/31540241615)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/122295

## Summary

Current main has the reported Teams inbound media-limit precedence defect. A narrow repair is defined, but implementation is blocked because the checkout is read-only and lacks the `tsx` test dependency.

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
| #122295 | fix_needed | planned | canonical | A narrow bundled-Teams bug fix is warranted; it adds no config, migration, or security-boundary change. |
| cluster:issue-openclaw-openclaw-122295 | build_fix_artifact | blocked | canonical | Only implementation is blocked; the repair path is fully specified. |

## Needs Human

- none
