---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-123318"
mode: "autonomous"
run_id: "32352756689"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32352756689"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T09:25:42.296Z"
canonical: "https://github.com/openclaw/openclaw/issues/123318"
canonical_issue: "https://github.com/openclaw/openclaw/issues/123318"
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

# issue-openclaw-openclaw-123318

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32352756689](https://github.com/openclaw/clawsweeper/actions/runs/32352756689)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/123318

## Summary

#123318 remains the canonical bug. Current main uses an unsafe stable/beta tag fetch; a narrow updater, real-Git regression, and documentation repair is planned. This worker could not create or validate the branch because the checkout is read-only, pnpm cannot initialize its Corepack cache, and the mandatory sibling ../codex checkout is absent.

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
| #123318 | fix_needed | blocked | canonical | A source-confirmed narrow repair is needed, but this environment cannot produce the required writable, locally validated PR branch. |
| #86218 | keep_closed | skipped | related | Already closed; no action. |
| #119098 | keep_closed | skipped | independent | Already closed; no action. |
| cluster:issue-openclaw-openclaw-123318 | build_fix_artifact | planned |  | Prepared for a writable executor; implementation and validation were blocked locally. |

## Needs Human

- none
