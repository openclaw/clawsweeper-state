---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125942"
mode: "autonomous"
run_id: "32182945350"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32182945350"
head_sha: "02c930c53d1c7e22ce89d23ba76e6b547a4e2a7f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-18T20:42:29.554Z"
canonical: "#125942"
canonical_issue: "#125942"
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

# issue-openclaw-openclaw-125942

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32182945350](https://github.com/openclaw/clawsweeper/actions/runs/32182945350)

Workflow conclusion: success

Worker result: planned

Canonical: #125942

## Summary

#125942 is a confirmed canonical bug: the shared transport projection drops the canonical non-trailing failed-turn marker before replay, leaving adjacent user turns. A narrow two-file fix PR is planned; this read-only checkout cannot apply or validate it.

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
| #125942 | keep_canonical | planned | canonical | The issue remains the single canonical implementation target; no duplicate or contributor PR was hydrated. |
| #125942 | fix_needed | planned | canonical | Retain only the exact stopReason:error single-text sentinel when a later user turn exists; preserve the existing raw failed tool-call/result removal path. |
| #125942 | build_fix_artifact | planned | canonical | The repair is bounded to the shared projection and a behavior-level transport regression; replay-history production code already owns marker generation. |
| #125942 | open_fix_pr | planned | canonical | Create or update the one authorized fix PR only after applying the artifact and completing its required validation. |

## Needs Human

- none
