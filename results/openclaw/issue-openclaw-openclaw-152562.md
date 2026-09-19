---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-152562"
mode: "autonomous"
run_id: "35425407960"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35425407960"
head_sha: "bfc6b9dd78e3b0e25415ed1c87c1be0cefd2ba31"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-19T06:34:11.873Z"
canonical: "https://github.com/openclaw/openclaw/issues/152562"
canonical_issue: "https://github.com/openclaw/openclaw/issues/152562"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-152562

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35425407960](https://github.com/openclaw/clawsweeper/actions/runs/35425407960)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/152562

## Summary

Source inspection confirms the status-projection defect on preflight main. Implementation and regression proof are blocked by the read-only host and missing dependencies. No files or GitHub state changed; a narrow fix artifact is prepared.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #152562 | fix_needed | blocked | canonical | The host permits reads only, preventing dependency installation, regression-test edits, and implementation. Establish a failing current-main regression in a writable executor before repairing or publishing. |
| #141458 | keep_related | planned | related | Separate behavior and repair scope; preserve the contributor PR without merging, replacing, or closing it in this job. |
| #91165 | keep_closed | skipped | related | Historical context only; not a landing branch or closure target. |
| #91596 | keep_closed | skipped | related | Index validity and displayed model are distinct; retain as historical evidence. |
| #91706 | keep_closed | skipped | related | Preserve the existing adapter owner; do not resurrect the historical implementation. |
| #144464 | keep_closed | skipped | related | Configuration contract context, not the displayed-model fix; no SDK changes are needed. |
| cluster:issue-openclaw-openclaw-152562 | build_fix_artifact | planned |  | A narrow non-security reporting repair has an existing owner and no viable hydrated PR for this specific defect. |

## Needs Human

- none
