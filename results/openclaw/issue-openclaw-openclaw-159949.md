---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-159949"
mode: "autonomous"
run_id: "36358129874"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36358129874"
head_sha: "3a18b3d1a20770d6b719c377f2a9be24f214a082"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-28T00:40:00.358Z"
canonical: "https://github.com/openclaw/openclaw/issues/159949"
canonical_issue: "https://github.com/openclaw/openclaw/issues/159949"
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

# issue-openclaw-openclaw-159949

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36358129874](https://github.com/openclaw/clawsweeper/actions/runs/36358129874)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/159949

## Summary

Current main e71571231be00a39ea88bcc02e7facb41ed23dff still has the reported tool-boundary defect. Both schemas reject JSON null, and both execution paths forward the literal "null" as an anchor; the board rejects that anchor on an empty tab. Implementation and executable regression proof are blocked because this checkout is read-only and has no installed dependencies. The strict-provider serialization claim has no trace in the supplied evidence.

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
| #159949 | fix_needed | planned | canonical | A narrow bug fix is warranted after failing regressions are established through both tool entry points. |
| #137287 | keep_closed | skipped | related | Historical implementation context, not an active fix or closure target. |
| cluster:issue-openclaw-openclaw-159949 | build_fix_artifact | blocked |  | The executor needs a writable checkout with dependencies to establish failing regressions, implement the fix, and run the required checks. |

## Needs Human

- none
