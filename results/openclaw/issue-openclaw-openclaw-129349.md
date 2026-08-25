---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-129349"
mode: "autonomous"
run_id: "32864612818"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32864612818"
head_sha: "d61664303d1bcab286362c8386cc2b5cb77e2c7f"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-25T15:30:19.790Z"
canonical: "#129349"
canonical_issue: "#129349"
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

# issue-openclaw-openclaw-129349

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32864612818](https://github.com/openclaw/clawsweeper/actions/runs/32864612818)

Workflow conclusion: success

Worker result: blocked

Canonical: #129349

## Summary

Current main contains the reported shared-parser behavior, but this run cannot safely materialize or validate a repair: the mandatory ../codex checkout is absent and cannot be cloned in the read-only environment, and dependencies cannot be installed. A narrow, branch-ready repair artifact is provided for a writable rerun.

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
| #129349 | build_fix_artifact | blocked | canonical | A writable rerun with ../codex available is required before any code change or proof claim. |
| #129360 | keep_related | planned | related | Keep the contributor PR open; do not merge, supersede, or close it from this lane. |

## Needs Human

- none
