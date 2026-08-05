---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119581"
mode: "autonomous"
run_id: "31000202378"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31000202378"
head_sha: "49e8c7de6cfed4a7c34ea4b6449a5ee83e2df6a8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-05T11:41:51.844Z"
canonical: "https://github.com/openclaw/openclaw/issues/119581"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119581"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-119581

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31000202378](https://github.com/openclaw/clawsweeper/actions/runs/31000202378)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/119581

## Summary

Confirmed on current main 80da61668eb6445d6430a8513301c222d820c9c0: the root-help identity resolver accepts the first root-help filename without verifying its required outputRootHelp export, causing the source fallback. A narrow new fix PR is warranted; no local changes were made because this worker checkout is read-only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/119590 | clawsweeper/issue-openclaw-openclaw-119581 |  |
| issue_implementation_status_comment | updated | #119581 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #119590 | merge_canonical | ready | fix_pr | issue implementation PR checks are green; merge intentionally blocked for this lane |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #119581 | fix_needed | planned | canonical | Current main still has the reported build-time selection defect. The canonical fix is a focused replacement PR from clawsweeper/issue-openclaw-openclaw-119581. |
| #114067 | keep_related | planned | related | Related root-help behavior, but a different root cause and validation path; leave it open independently. |
| cluster:issue-openclaw-openclaw-119581 | build_fix_artifact | planned | canonical | Create one narrow credited fix PR; preserve the existing fallback for genuinely missing or broken renderers. |

## Needs Human

- none
