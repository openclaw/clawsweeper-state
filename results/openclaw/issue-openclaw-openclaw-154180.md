---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-154180"
mode: "autonomous"
run_id: "35546583603"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35546583603"
head_sha: "a09e6cefb31adcd12bba10e1658cae5fced08c80"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-21T00:48:08.365Z"
canonical: "https://github.com/openclaw/openclaw/issues/154180"
canonical_issue: "https://github.com/openclaw/openclaw/issues/154180"
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

# issue-openclaw-openclaw-154180

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35546583603](https://github.com/openclaw/clawsweeper/actions/runs/35546583603)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/154180

## Summary

Reproduced MODULE_NOT_FOUND through the real source factory on preflight main. Prepared a narrow repair plan. Implementation, captured-package regression, and validation remain blocked locally by the read-only host and absent dependencies/build output.

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
| #154180 | fix_needed | planned | canonical | Existing source startup is demonstrably broken. Proceed with one narrow implementation PR after reproducing the full capture layout on the executor. |
| #81791 | keep_closed | skipped | related | Historical packaging context; it does not resolve captured TypeScript startup. |
| #81797 | keep_closed | skipped | related | Preserve the packaged-worker contract while repairing the distinct source/capture failure. |
| cluster:issue-openclaw-openclaw-154180 | build_fix_artifact | planned |  | The executor can implement this bounded startup repair; local writes and full validation are unavailable. |

## Needs Human

- none
