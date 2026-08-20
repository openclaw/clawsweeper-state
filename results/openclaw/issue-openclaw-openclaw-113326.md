---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-113326"
mode: "autonomous"
run_id: "32370258771"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32370258771"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T13:02:07.708Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32370258771](https://github.com/openclaw/clawsweeper/actions/runs/32370258771)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/113326

## Summary

Current main cbe070071 source-proves the reported defect: the non-TTY guard rejects login before resolving the explicitly selected device-code method. A narrow fix plan is ready, but implementation and validation are blocked because ../codex is absent (required direct Codex-source gate), the workspace is read-only, and pnpm/Corepack cannot create its cache (EROFS).

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
| #113326 | fix_needed | blocked | canonical | Implementation requires a writable checkout, direct ../codex protocol inspection, and a runnable pnpm environment. |
| #100067 | keep_independent | planned | independent | Separate root cause and product scope. |
| #50452 | keep_closed | skipped | related | Closed items receive no closeout action. |
| #71864 | keep_closed | skipped | independent | Closed items receive no closeout action. |
| #79021 | keep_closed | skipped | related | Closed items receive no closeout action. |
| cluster:issue-openclaw-openclaw-113326 | build_fix_artifact | planned | canonical | Artifact is ready for a write-enabled executor after the required Codex-source gate. |

## Needs Human

- none
