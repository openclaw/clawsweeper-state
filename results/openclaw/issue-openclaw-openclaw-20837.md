---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-20837"
mode: "autonomous"
run_id: "33016251707"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33016251707"
head_sha: "afe976209aa58a5629041b42b66f6ee11b2812a7"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-26T21:55:40.553Z"
canonical: "https://github.com/openclaw/openclaw/issues/20837"
canonical_issue: "https://github.com/openclaw/openclaw/issues/20837"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-20837

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33016251707](https://github.com/openclaw/clawsweeper/actions/runs/33016251707)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/20837

## Summary

The command-prompt metadata gap is source-visible on current main, but this read-only checkout lacks the mandatory sibling ../codex source and cannot clone it; dependencies are also absent and pnpm cannot create its Corepack cache. No code or PR plan is safe to execute under the repository hard gate.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| issue_implementation_status_comment | updated | #20837 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #20837 | fix_needed | blocked | canonical | Blocked only on the mandatory direct Codex-source gate and unavailable writable dependency environment; the issue remains the open canonical tracker. |
| #21271 | keep_closed | skipped | superseded | Closed context reference; retain attribution to @evansantos if implementation resumes. |
| cluster:issue-openclaw-openclaw-20837 | build_fix_artifact | blocked | canonical | Do not open a repair PR until an executor can inspect ../codex directly and run the required focused checks. |

## Needs Human

- Provide a writable execution environment containing ../codex (or permit its clone) so the repository-required direct Codex runtime-contract inspection and regression validation can be completed.
