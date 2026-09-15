---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-149313"
mode: "autonomous"
run_id: "35005173577"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35005173577"
head_sha: "1ed7bd4e13fb03334798e4d027ba3383ac9e5f01"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-15T18:37:32.858Z"
canonical: "https://github.com/openclaw/openclaw/issues/149313"
canonical_issue: "https://github.com/openclaw/openclaw/issues/149313"
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

# issue-openclaw-openclaw-149313

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35005173577](https://github.com/openclaw/clawsweeper/actions/runs/35005173577)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/149313

## Summary

Source confirms the topic identity omission on preflight main. Implementation and runtime reproduction are blocked by the read-only host and missing dependencies. No files or GitHub state changed; a narrow executor repair artifact is prepared.

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
| #149313 | fix_needed | planned | canonical | A bounded existing-behavior defect remains source-supported. The required failing receive-handler regression must run before implementation. |
| #46778 | keep_closed | skipped | related | Historical compatibility context; preserve the existing DM retry behavior. |
| #93449 | keep_closed | skipped | related | Merged compatibility context, not an open repair candidate or a fix for cross-topic suppression. |
| cluster:issue-openclaw-openclaw-149313 | build_fix_artifact | planned |  | The executor needs a writable, independently owned checkout to reproduce, implement and validate this narrow repair. |

## Needs Human

- none
