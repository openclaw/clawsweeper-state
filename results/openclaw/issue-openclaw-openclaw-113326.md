---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-113326"
mode: "autonomous"
run_id: "32200696803"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32200696803"
head_sha: "02c930c53d1c7e22ce89d23ba76e6b547a4e2a7f"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-19T00:31:37.225Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32200696803](https://github.com/openclaw/clawsweeper/actions/runs/32200696803)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/113326

## Summary

#113326 remains a narrow, reproducible current-main bug: the unconditional non-TTY guard in src/commands/models/auth.ts:1097 rejects the documented explicit OpenAI device-code path before the existing provider flow runs. A new-fix-PR artifact is ready, but this worker cannot implement or validate it because the checkout is read-only, node_modules is absent, and the mandatory sibling ../codex source is unavailable for the required direct contract inspection.

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
| #113326 | fix_needed | planned | canonical | Repair the owner-boundary guard so only an explicit OpenAI device-code request bypasses the TTY refusal; prompt-driven and other auth methods remain rejected. |
| #100067 | keep_independent | planned | independent | Different root cause and repair owner; leave open independently. |
| #50452 | keep_closed | skipped | related | Already closed; no mutation. |
| #71864 | keep_closed | skipped | related | Already closed; no mutation. |
| #79021 | keep_closed | skipped | related | Already closed; no mutation. |
| cluster:issue-openclaw-openclaw-113326 | build_fix_artifact | planned | canonical | Narrow implementation and regression plan prepared for the deterministic executor. |
| cluster:issue-openclaw-openclaw-113326 | open_fix_pr | blocked | canonical | Open the PR only after a writable executor provides dependencies and the required sibling Codex checkout. |

## Needs Human

- none
