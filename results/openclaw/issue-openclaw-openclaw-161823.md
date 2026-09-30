---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-161823"
mode: "autonomous"
run_id: "36705647395"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36705647395"
head_sha: "74dc4c6a2fc204e456fb92677ca9271af104e9cc"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-30T11:28:52.072Z"
canonical: "https://github.com/openclaw/openclaw/issues/161823"
canonical_issue: "https://github.com/openclaw/openclaw/issues/161823"
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

# issue-openclaw-openclaw-161823

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36705647395](https://github.com/openclaw/clawsweeper/actions/runs/36705647395)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/161823

## Summary

The reported bug remains at main 8c9040c6. Memory status treats a metadata-eligible, system-only session as missing, while indexing parses and excludes it. The checkout is read-only, so no code was changed or tests run; a narrow fix is planned for the executor.

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
| #161823 | fix_needed | planned | canonical | The status and indexing admission decisions disagree for system-only sessions. |
| cluster:issue-openclaw-openclaw-161823 | build_fix_artifact | planned |  | The write-capable executor can implement and validate the narrow Memory Core fix. |

## Needs Human

- none
