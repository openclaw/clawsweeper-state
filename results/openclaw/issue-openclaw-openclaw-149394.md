---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-149394"
mode: "autonomous"
run_id: "35020665772"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35020665772"
head_sha: "1ed7bd4e13fb03334798e4d027ba3383ac9e5f01"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-15T21:36:47.767Z"
canonical: "https://github.com/openclaw/openclaw/issues/149394"
canonical_issue: "https://github.com/openclaw/openclaw/issues/149394"
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

# issue-openclaw-openclaw-149394

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35020665772](https://github.com/openclaw/clawsweeper/actions/runs/35020665772)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/149394

## Summary

Confirmed current-main rejection propagation through the status boundary using an injected probe failure. Prepared a narrow fix plan. Implementation, regression tests, and CLI proof are blocked by the read-only checkout and absent dependencies/build output. No files or GitHub state changed.

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
| #149394 | fix_needed | blocked | canonical | Implementation requires a writable isolated checkout with dependencies. Host permissions prohibit edits, installation, and build artifacts; no validated PR branch exists. |
| #139082 | keep_related | planned | related | Separate lifecycle failure; preserve its existing investigation. |
| #142452 | keep_closed | skipped | related | Historical context only. |
| cluster:issue-openclaw-openclaw-149394 | build_fix_artifact | planned | canonical | A narrow non-security repair remains appropriate; preparation can proceed independently of this worker's filesystem restrictions. |

## Needs Human

- none
