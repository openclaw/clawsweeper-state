---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-123318"
mode: "autonomous"
run_id: "32339471420"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32339471420"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T06:36:35.735Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32339471420](https://github.com/openclaw/clawsweeper/actions/runs/32339471420)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/123318

## Summary

#123318 remains the canonical reproducible stable/beta git-updater defect. Current main uses an unforced tag fetch at src/infra/update-runner-git.ts:370-381; a force-moved tag therefore aborts before tag resolution. A narrow credited fix PR is appropriate, but this worker cannot create the branch, run the real-Git fixture, or validate it because the supplied filesystem is read-only. The mandatory sibling ../codex source is also absent and cannot be cloned under the sandbox.

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
| #86218 | keep_closed | skipped | related | Historical related context only. |
| #119098 | keep_closed | skipped | independent | Independent historical context only. |
| #123318 | fix_needed | blocked | canonical | Implementation and required real-Git regression proof require a writable checkout; no local branch or validation result can be honestly produced in this sandbox. |
| cluster:issue-openclaw-openclaw-123318 | build_fix_artifact | planned | canonical | A narrow new PR can repair the canonical tag-refresh owner once a writable executor is available. |

## Needs Human

- none
