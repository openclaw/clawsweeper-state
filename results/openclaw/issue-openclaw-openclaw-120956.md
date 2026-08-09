---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120956"
mode: "autonomous"
run_id: "31319438465"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31319438465"
head_sha: "80847d16452c774d7c4e94abe2b9cfb6e1319b57"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-09T15:20:10.943Z"
canonical: "https://github.com/openclaw/openclaw/issues/120956"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120956"
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

# issue-openclaw-openclaw-120956

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31319438465](https://github.com/openclaw/clawsweeper/actions/runs/31319438465)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/120956

## Summary

#120956 is a current, source-reproducible Workboard persistence bug. A narrow doctor-owned repair is planned, but this worker cannot create the branch or run tests because the checkout is read-only and node_modules is absent.

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
| #120956 | keep_canonical | planned | canonical | Canonical bug remains valid on current main; no candidate PR is hydrated. |
| cluster:issue-openclaw-openclaw-120956 | fix_needed | planned | canonical | Repair belongs at the plugin doctor/state owner boundary; no runtime fallback, config change, manifest change, schema bump, or changelog edit is needed. |
| cluster:issue-openclaw-openclaw-120956 | build_fix_artifact | planned | canonical | Artifact is ready for the deterministic executor. |
| cluster:issue-openclaw-openclaw-120956 | open_fix_pr | blocked | canonical | Deterministic executor should implement the attached new-fix-PR artifact on clawsweeper/issue-openclaw-openclaw-120956. |

## Needs Human

- none
