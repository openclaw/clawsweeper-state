---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-113326"
mode: "autonomous"
run_id: "36492041330"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36492041330"
head_sha: "32cd4db41a50b57f301a955bd0e291cbfeb714e1"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-28T23:16:35.031Z"
canonical: "https://github.com/openclaw/openclaw/issues/113326"
canonical_issue: "https://github.com/openclaw/openclaw/issues/113326"
canonical_pr: null
actions_total: 2
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36492041330](https://github.com/openclaw/clawsweeper/actions/runs/36492041330)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/113326

## Summary

At preflight main fd5a7172de91dd29a074d055ff207159c01db8ca, the CLI rejects non-TTY login before selecting OpenAI’s declared device-code method. A narrow fix is warranted, but the read-only checkout prevented a failing regression, implementation, validation, and PR preparation. No GitHub action was taken.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #113326 | fix_needed | planned | canonical | The documented device-code path is blocked at the CLI entry point. |
| cluster:issue-openclaw-openclaw-113326 | build_fix_artifact | blocked |  | Implementation and boundary proof require a writable checkout with dependencies and the required sibling Codex source. |

## Needs Human

- none
