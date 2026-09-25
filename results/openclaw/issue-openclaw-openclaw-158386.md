---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-158386"
mode: "plan"
run_id: "36201140036"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36201140036"
head_sha: "9fb3a5d5887891c08e0310cafc54b09ab3023c2a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-25T23:33:13.083Z"
canonical: "#158386"
canonical_issue: "#158386"
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

# issue-openclaw-openclaw-158386

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36201140036](https://github.com/openclaw/clawsweeper/actions/runs/36201140036)

Workflow conclusion: success

Worker result: planned

Canonical: #158386

## Summary

Plan only; no files or GitHub state changed. Current main matches the preflight SHA. The shared Windows task audit reports omitted default-true fields as drift, and its publication callback rejects that drift. The executor must demonstrate a failing regression before editing.

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
| #158386 | fix_needed | planned | canonical | A narrow bug fix is supported. First make the Doctor and real publication-path regressions fail on current main. Treat an omitted Enabled leaf as true only when its parent element exists and the expected value is true; retain the existing publication exception for an intentionally disabled task. |
| #158331 | keep_closed | skipped | independent | Closed historical context outside this bug. |
| #158332 | keep_independent | planned | independent | Different subsystem and failure; retain its own discussion. |
| #158333 | keep_independent | planned | independent | Separate feature request outside this bug-fix cluster. |

## Needs Human

- none
