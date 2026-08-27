---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-20837"
mode: "autonomous"
run_id: "33037711869"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33037711869"
head_sha: "387cf82c7eba81fa6dfd1cff12765cf2c2d80a27"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-27T04:11:03.130Z"
canonical: "https://github.com/openclaw/openclaw/issues/20837"
canonical_issue: "https://github.com/openclaw/openclaw/issues/20837"
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

# issue-openclaw-openclaw-20837

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33037711869](https://github.com/openclaw/clawsweeper/actions/runs/33037711869)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/20837

## Summary

#20837 is a current, source-reproducible command-prompt fidelity bug. Current main hard-codes unknown host/OS/arch and drops originating channel, account-aware capabilities, shell, and message guidance for both `/context` fallback and `/export-session`. Implementation is blocked because this checkout is read-only with dependencies absent, and the required sibling `../codex` source is unavailable for the mandatory direct Codex check.

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
| issue_implementation_status_comment | updated | #20837 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #20837 | keep_canonical | planned | canonical | Open canonical issue with a narrow bug-only repair path; no closure or merge is permitted by this job. |
| #21271 | keep_closed | skipped | superseded | Already closed; do not mutate or close again. |
| cluster:issue-openclaw-openclaw-20837 | fix_needed | blocked | canonical | The repair is narrow and appropriate, but this worker cannot edit, install dependencies, or validate in the read-only checkout. |
| cluster:issue-openclaw-openclaw-20837 | build_fix_artifact | blocked | canonical | Executor should implement and validate this artifact in a writable checkout after satisfying the required direct Codex-source gate. |

## Needs Human

- none
