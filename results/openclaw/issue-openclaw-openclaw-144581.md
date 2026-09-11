---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-144581"
mode: "plan"
run_id: "34559012333"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34559012333"
head_sha: "c9a57f70fdab4c412fb73c769d2ebe2bb6492494"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-11T03:43:49.981Z"
canonical: "#144581"
canonical_issue: "https://github.com/openclaw/openclaw/issues/144581"
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

# issue-openclaw-openclaw-144581

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34559012333](https://github.com/openclaw/clawsweeper/actions/runs/34559012333)

Workflow conclusion: success

Worker result: planned

Canonical: #144581

## Summary

Plan a narrow shared path-projection fix for #144581. The checkout matches preflight main ae94766f288b54ec7ac840cc4e1479232405949b. Read-only Windows path arithmetic reproduced malformed destinations in both namespace directions, including UNC paths. Native snapshot-worker reproduction and post-fix validation remain required; no files or GitHub state were changed.

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
| #144581 | fix_needed | planned | canonical | The issue has a bounded repair path shared by snapshot destinations and rehearsal configuration. Keep it open while the executor establishes the required failing worker regression and validates the repair. |
| #142749 | keep_closed | skipped | related | Historical context for a separate update stage; no further action or replacement attribution is appropriate. |

## Needs Human

- none
