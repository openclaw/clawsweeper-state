---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120207"
mode: "autonomous"
run_id: "31171079611"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31171079611"
head_sha: "f6f6bfca7d65aa54eec9daa82ab84cda9ad6e0e8"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-07T12:01:32.080Z"
canonical: "https://github.com/openclaw/openclaw/issues/120207"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120207"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-120207

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31171079611](https://github.com/openclaw/clawsweeper/actions/runs/31171079611)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/120207

## Summary

Current main confirms #120207: Claude live-session failures finalize the parser then discard accumulated output. Plan a narrow failure-owned partial-output path that preserves timeout/abort semantics.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | Codex /review timed out after 30000ms |
| issue_implementation_status_comment | updated | #120207 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #120207 | fix_needed | planned | canonical | The reported loss is real for final/durable output. Repair must carry partial text as failure-owned terminal evidence while retaining the original timeout, abort, or provider failure. |
| #108315 | keep_related | planned | related | Related timeout symptom family, but distinct root-cause scope; keep #108315 open for live reproduction. |
| cluster:issue-openclaw-openclaw-120207 | build_fix_artifact | planned |  | A new focused PR is appropriate. |

## Needs Human

- none
