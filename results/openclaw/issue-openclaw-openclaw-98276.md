---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-98276"
mode: "plan"
run_id: "30641842989"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30641842989"
head_sha: "60ad8788f54555eed573d42b38f25f26b8feb62e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-07-31T16:06:14.602Z"
canonical: "https://github.com/openclaw/openclaw/issues/98276"
canonical_issue: "https://github.com/openclaw/openclaw/issues/98276"
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

# issue-openclaw-openclaw-98276

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30641842989](https://github.com/openclaw/clawsweeper/actions/runs/30641842989)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/98276

## Summary

#98276 remains the canonical non-security packaging bug. The hydrated preflight shows no viable open PR: #98326 is closed and unmergeable, while #98274 is a separate ACP terminal-state issue. The local plan checkout retains the direct CI tar producer, which archives only dist, dist-runtime, and package dist outputs even though the established bootstrap contract requires package-root templates. Plan a new narrow credited fix PR after the executor synchronizes to the artifact main SHA and re-verifies the same producer/resolver contract.

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
| #97916 | keep_closed | skipped | related | Historical context only; closure actions are invalid for this already-closed, distinct PR. |
| #98274 | keep_related | planned | related | Related downstream symptom with a separate runtime-contract decision; keep open independently. |
| #98276 | fix_needed | planned | canonical | A narrow artifact-contract helper and extracted-runtime smoke are appropriate; executor must synchronize once to preflight main and re-verify before editing. |
| #98326 | keep_closed | skipped | superseded | Closed historical source only; carry forward its narrow idea and contributor credit without reusing the fork branch. |
| cluster:issue-openclaw-openclaw-98276 | build_fix_artifact | planned | canonical | New credited fix PR is the only viable canonical path. |

## Needs Human

- none
