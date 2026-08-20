---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-113326"
mode: "autonomous"
run_id: "32368365548"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32368365548"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T12:42:39.185Z"
canonical: "https://github.com/openclaw/openclaw/issues/113326"
canonical_issue: "https://github.com/openclaw/openclaw/issues/113326"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-113326

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32368365548](https://github.com/openclaw/clawsweeper/actions/runs/32368365548)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/113326

## Summary

#113326 remains the canonical reproducible bug: the non-TTY guard rejects an explicit device-code login before provider-method resolution. A narrow fix artifact is ready, but this worker cannot patch or validate because the required Codex sibling source checkout is absent and the read-only environment prevents both cloning and Corepack dependency setup.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #50452 | keep_closed | skipped | related | Already closed; historical related context only. |
| #71864 | keep_closed | skipped | related | Already closed; not a duplicate of the non-TTY device-code failure. |
| #79021 | keep_closed | skipped | related | Already closed; distinct auth-recovery path. |
| #100067 | keep_independent | planned | independent | Independent migration/product-decision issue; leave open. |
| #113326 | fix_needed | blocked | canonical | The repair is narrow and source-reproducible, but implementation and validation require a writable checkout and the mandatory direct Codex-source inspection. |
| #113505 | keep_closed | skipped | related | Already closed; separate TTY-present behavior. |
| cluster:issue-openclaw-openclaw-113326 | build_fix_artifact | planned | canonical | Ready for a writable executor after the Codex-source and dependency blockers are resolved. |

## Needs Human

- Provide a writable repair executor with the required sibling OpenAI Codex source checkout available for direct inspection. The current environment cannot clone it or initialize Corepack because its filesystem is read-only.
