---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-156425"
mode: "autonomous"
run_id: "35848303241"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35848303241"
head_sha: "60a77566c685fbe18600595a28964e5bd8135878"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-23T11:03:57.713Z"
canonical: "https://github.com/openclaw/openclaw/issues/156425"
canonical_issue: "https://github.com/openclaw/openclaw/issues/156425"
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

# issue-openclaw-openclaw-156425

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35848303241](https://github.com/openclaw/clawsweeper/actions/runs/35848303241)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/156425

## Summary

Source inspection confirms both defects on preflight main 94c6b2079dd919628ae5119d2fd7f9807f730016. Narrow repair artifact prepared; implementation and runtime reproduction are blocked by the read-only host and absent dependencies. No files or GitHub state changed.

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
| #156425 | fix_needed | planned | canonical | Existing durable-turn behavior needs a bounded terminal-selection repair and session-scoped accepted-turn drain. |
| #135628 | keep_related | planned | related | Session-scoped finalization addresses this turn's interference without resolving the broader recovery issue. |
| #127992 | keep_closed | skipped | related | Merged historical context, not a repair or closure target. |
| #151936 | keep_closed | skipped | related | Merged maintenance work provides fixtures and behavior to preserve; it does not repair missing terminal candidates. |
| cluster:issue-openclaw-openclaw-156425 | build_fix_artifact | planned | canonical | The repair remains narrow and suitable for an executor with a writable isolated checkout. |
| cluster:issue-openclaw-openclaw-156425 | open_fix_pr | blocked | canonical | Implementation and PR readiness require the writable executor. Reuse clawsweeper/issue-openclaw-openclaw-156425 and publish only after reproduction, repair, validation, and review. |

## Needs Human

- none
