---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-159313"
mode: "plan"
run_id: "36290155625"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36290155625"
head_sha: "ccf606d924429a0a57b3d1e743d249f5002b9412"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-27T03:05:57.101Z"
canonical: "#159313"
canonical_issue: "#159313"
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

# issue-openclaw-openclaw-159313

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36290155625](https://github.com/openclaw/clawsweeper/actions/runs/36290155625)

Workflow conclusion: success

Worker result: planned

Canonical: #159313

## Summary

The checkout matches preflight main 2e09d9e2 and is clean. The reported Bun/macOS EBADF path remains in the source, but this Linux worker cannot perform the required Bun/macOS reproduction. Reproduce on macOS arm64 before making the narrow fix or opening a PR.

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
| https://github.com/openclaw/openclaw/issues/159313 | fix_needed | planned | canonical | Reproduce the failure on macOS arm64, then add a failing regression through generation capture and repair only the Bun/Darwin descriptor-copy fallback. |
| https://github.com/openclaw/openclaw/issues/155728 | keep_closed | skipped | related | Historical capture context; no closure action. |
| https://github.com/openclaw/openclaw/pull/159052 | keep_closed | skipped | related | It does not address the reported Bun descriptor-copy EBADF failure. |
| https://github.com/openclaw/openclaw/pull/159056 | keep_closed | skipped | independent | Separate release-branch work; no closure action. |

## Needs Human

- none
