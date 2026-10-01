---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-162217"
mode: "autonomous"
run_id: "36795883196"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36795883196"
head_sha: "8c7a382f5bca9a09564ce326f3c4892dff7ef4a6"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-01T00:46:06.066Z"
canonical: "https://github.com/openclaw/openclaw/issues/162217"
canonical_issue: "https://github.com/openclaw/openclaw/issues/162217"
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

# issue-openclaw-openclaw-162217

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36795883196](https://github.com/openclaw/clawsweeper/actions/runs/36795883196)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/162217

## Summary

At the preflight main SHA, the Codex bridge records a finality marker only in message-tool-only mode. Automatic mode therefore lacks the marker that distinguishes a progress send from a completed source reply. The repair is scoped, but this checkout is read-only: I could not add the failing regression, patch the bridge, or run validation.

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
| #162217 | fix_needed | planned | canonical | A confirmed current-source automatic-mode progress send still needs a finality marker so the later final answer can be delivered. |
| cluster:issue-openclaw-openclaw-162217 | build_fix_artifact | blocked |  | Implementation and validation require a writable authorized checkout. |

## Needs Human

- none
