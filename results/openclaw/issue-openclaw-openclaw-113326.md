---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-113326"
mode: "autonomous"
run_id: "32363668782"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32363668782"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T11:41:55.630Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32363668782](https://github.com/openclaw/clawsweeper/actions/runs/32363668782)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/113326

## Summary

Confirmed canonical bug: explicit OpenAI device-code login is rejected by the pre-method non-TTY guard. A narrow command-owner repair is ready, but this read-only worker cannot create the required ../codex checkout for the repository’s mandatory direct Codex inspection, nor run pnpm because Corepack cannot create its cache.

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
| #113326 | fix_needed | planned | canonical | Current main contradicts the documented headless device-code path. This is distinct from the linked migration, stale-profile, agent-targeting, and TTY-orphan reports. |
| cluster:issue-openclaw-openclaw-113326 | build_fix_artifact | blocked | canonical | Implementation is blocked only by this worker’s immutable checkout and mandatory direct Codex-source gate; the deterministic executor should re-verify the same current-main evidence in a writable environment. |
| #100067 | keep_independent | planned | independent | Separate root cause and active maintainer product decision; leave open independently. |
| #50452 | keep_closed | skipped | independent | Already closed; historical context only. |
| #71864 | keep_closed | skipped | independent | Already closed; historical context only. |
| #79021 | keep_closed | skipped | independent | Already closed; historical context only. |
| #113505 | keep_closed | skipped | related | Already closed; related but not a duplicate repair target. |

## Needs Human

- none
