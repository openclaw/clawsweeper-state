---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-113326"
mode: "autonomous"
run_id: "32377454401"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32377454401"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T14:17:49.066Z"
canonical: "https://github.com/openclaw/openclaw/issues/113326"
canonical_issue: "https://github.com/openclaw/openclaw/issues/113326"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-113326

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32377454401](https://github.com/openclaw/clawsweeper/actions/runs/32377454401)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/113326

## Summary

#113326 remains a reproducible narrow bug: current main unconditionally rejects non-TTY login at src/commands/models/auth.ts:1097 before explicit device-code selection can run, despite documented headless device pairing. No branch was changed because this worker has a read-only filesystem and could not create the mandatory sibling ../codex checkout for the Codex contract gate.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #113326 | fix_needed | planned | canonical | A narrow repair should allow only an explicitly selected device-code method to use createNonInteractiveLoggingPrompter; ordinary OAuth and every unspecified login remain TTY-only. |
| #100067 | keep_independent | planned | independent | Leave open independently. |
| #50452 | keep_closed | skipped | related | Already closed; not a mutation target. |
| #71864 | keep_closed | skipped | related | Already closed; not a mutation target. |
| #79021 | keep_closed | skipped | related | Already closed; not a mutation target. |
| cluster:issue-openclaw-openclaw-113326 | build_fix_artifact | planned | canonical | Create one narrow credited fix PR from clawsweeper/issue-openclaw-openclaw-113326. |

## Needs Human

- none
