---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-126056"
mode: "autonomous"
run_id: "32199563855"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32199563855"
head_sha: "02c930c53d1c7e22ce89d23ba76e6b547a4e2a7f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-19T00:13:31.901Z"
canonical: "#126056"
canonical_issue: null
canonical_pr: "#126056"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-126056

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32199563855](https://github.com/openclaw/clawsweeper/actions/runs/32199563855)

Workflow conclusion: success

Worker result: planned

Canonical: #126056

## Summary

#126056 is the canonical open repair path. It is not merge-ready: it is behind main, its exact-head review is still in progress, and the supplied preflight records failed type/lint/boundary checks plus pending required checks. Repair the existing same-repository branch, preserving its source history and release-note context.

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
| #126056 | fix_needed | planned | canonical | Repair is authorized and branch-writable, but exact-head review and CI gates are incomplete. |
| #126056 | build_fix_artifact | planned | canonical | Use the existing canonical PR rather than a replacement. |

## Needs Human

- none
