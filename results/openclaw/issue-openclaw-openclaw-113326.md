---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-113326"
mode: "autonomous"
run_id: "32363031631"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32363031631"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T11:31:48.145Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32363031631](https://github.com/openclaw/clawsweeper/actions/runs/32363031631)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/113326

## Summary

Confirmed #113326: current main rejects non-TTY input in modelsAuthLoginCommand before method selection, despite documented --device-code support. Implementation is blocked in this read-only, dependency-less checkout; a narrow credited fix PR artifact is ready.

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
| #113326 | fix_needed | blocked | canonical | The defect is clear, but this worker cannot edit, install dependencies, run the required regression suite, or complete the repository's direct sibling-Codex inspection gate. |
| cluster:issue-openclaw-openclaw-113326 | build_fix_artifact | planned | canonical | Create the branch in a writable checkout, complete required direct Codex-source inspection, then run the listed regression and changed-gate validation. |
| #100067 | keep_related | planned | related | Separate root cause and scope; leave open for its existing maintainer product decision. |
| #50452 | keep_closed | skipped | independent | Historical context only; no action on closed items. |
| #71864 | keep_closed | skipped | independent | Historical context only; no action on closed items. |
| #79021 | keep_closed | skipped | related | Adjacent OAuth recovery history, not the non-TTY method-selection defect. |
| #113505 | keep_closed | skipped | related | Adjacent but distinct TTY-present behavior; no action on closed items. |

## Needs Human

- none
