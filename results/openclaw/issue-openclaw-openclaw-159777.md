---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-159777"
mode: "autonomous"
run_id: "36333231414"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36333231414"
head_sha: "3a18b3d1a20770d6b719c377f2a9be24f214a082"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-27T16:45:51.170Z"
canonical: "https://github.com/openclaw/openclaw/issues/159777"
canonical_issue: "https://github.com/openclaw/openclaw/issues/159777"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-159777

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36333231414](https://github.com/openclaw/clawsweeper/actions/runs/36333231414)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/159777

## Summary

Issue #159777 has a narrow test-only fix path. The session-mode test checks an append-only output slice that can contain a late redraw of the previous session. The existing completed-frame screen helper can check the target footer instead. The local checkout is shallow and does not contain the preflight main SHA, so the executor must refresh and recheck the final branch before opening a PR. No code or GitHub state was changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #159777 | fix_needed | planned | canonical | Replace the affected assertion with completed target-screen evidence while retaining the backend-call and delivery checks. |
| #127237 | keep_related | planned | related | Keep the distinct timeout and ordering work in its existing thread. |
| #158136 | keep_independent | planned | independent | The CLI PR neither fixes nor owns this test failure. |
| #158748 | keep_closed | skipped | related | Historical source for the reusable helper; no action on a closed PR. |
| cluster:issue-openclaw-openclaw-159777 | build_fix_artifact | planned |  | Create one narrow issue implementation PR after confirming the assertion remains on current main. |

## Needs Human

- none
