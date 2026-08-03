---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-117635"
mode: "autonomous"
run_id: "30788286836"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30788286836"
head_sha: "e55de43cfc039ea45931eb4e947364399afc280c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-03T06:32:36.062Z"
canonical: "https://github.com/openclaw/openclaw/issues/117635"
canonical_issue: "https://github.com/openclaw/openclaw/issues/117635"
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

# issue-openclaw-openclaw-117635

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30788286836](https://github.com/openclaw/clawsweeper/actions/runs/30788286836)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/117635

## Summary

Current main at e4884d981a40308bc192175e5cd9522f4c29182d retains the reported cross-container singleton defect: gateway state ownership is hashed from the canonical shared state directory, but the physical lock and SQLite coordinator default to the process-local temporary directory. Docker Compose mounts `/home/node/.openclaw` into both services while each container has its own `/tmp`, so two gateway containers can acquire separate physical locks and poll the same channel. A narrow new fix PR is appropriate.

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
| #117635 | fix_needed | planned | canonical | The issue is a source-proven default-path ownership bug with a localized implementation and test surface. #86119 is a distinct embedded-run lifecycle leak; #107322 is closed and unrelated to this lock-location repair. |
| #86119 | keep_related | planned | related | Both reports can manifest as duplicate or lingering runtime activity, but their root causes and repair owners differ. Keep #86119 open for its separate lifecycle investigation. |
| #107322 | keep_closed | skipped | independent | Closed historical context only; no action or reclassification is required. |
| cluster:issue-openclaw-openclaw-117635 | build_fix_artifact | planned |  | Create one narrow implementation PR from `clawsweeper/issue-openclaw-openclaw-117635`; no merge or issue close is permitted in this job. |

## Needs Human

- none
