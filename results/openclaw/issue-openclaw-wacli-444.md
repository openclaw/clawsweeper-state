---
repo: "openclaw/wacli"
cluster_id: "issue-openclaw-wacli-444"
mode: "autonomous"
run_id: "36388777723"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36388777723"
head_sha: "c1a83a00a73a800f45ff67ef5c7677ba4f17a8da"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-28T06:58:21.864Z"
canonical: "https://github.com/openclaw/wacli/issues/444"
canonical_issue: "https://github.com/openclaw/wacli/issues/444"
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

# issue-openclaw-wacli-444

Repo: openclaw/wacli

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36388777723](https://github.com/openclaw/clawsweeper/actions/runs/36388777723)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/wacli/issues/444

## Summary

Issue #444 remains reproducible in the request path on main b87e617: mapped 1:1 backfill sends both anchor attempts to the LID and has no phone-JID fallback. A narrow fix is specified, but this worker's read-only filesystem prevents adding the regression test, editing the code, running the required gate, or preparing a PR branch.

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
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #444 | fix_needed | planned | canonical | The reported PN-responsive, LID-silent 1:1 case still has no fallback. |
| cluster:issue-openclaw-wacli-444 | build_fix_artifact | planned |  |  |
| cluster:issue-openclaw-wacli-444 | open_fix_pr | blocked |  | A writable checkout is required to implement and validate the branch before a PR can be opened. |

## Needs Human

- none
