---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-113326"
mode: "autonomous"
run_id: "32362574762"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32362574762"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T11:24:05.312Z"
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
needs_human_count: 0
---

# issue-openclaw-openclaw-113326

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32362574762](https://github.com/openclaw/clawsweeper/actions/runs/32362574762)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/113326

## Summary

Confirmed source-level bug on main: the non-TTY guard in src/commands/models/auth.ts:1097 runs before explicit device-code method resolution. A narrow core CLI repair is appropriate, but this read-only checkout lacks dependencies and mandatory ../codex source, so no patch or validation can be completed here. Prepared a new-PR repair artifact.

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
| #113326 | fix_needed | planned | canonical | Narrow documented behavior regression; repair the command boundary without merging credential stores or weakening non-device-code OAuth rejection. |
| #100067 | keep_independent | planned | independent | Separate migration/product-policy surface. |
| #50452 | keep_closed | skipped | independent | Historical context only. |
| #71864 | keep_closed | skipped | independent | Historical context only. |
| #79021 | keep_closed | skipped | related | Related auth family, distinct runtime recovery invariant. |
| #113505 | keep_closed | skipped | related | Related command, distinct execution branch. |
| cluster:issue-openclaw-openclaw-113326 | build_fix_artifact | planned | canonical | Executor should implement and validate the narrow repair on clawsweeper/issue-openclaw-openclaw-113326. |

## Needs Human

- none
