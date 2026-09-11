---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-144776"
mode: "autonomous"
run_id: "34577258689"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34577258689"
head_sha: "e74b07a40a6ecb1c9743e17201ecca0d6114bce5"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-11T08:11:36.185Z"
canonical: "https://github.com/openclaw/openclaw/issues/144776"
canonical_issue: "https://github.com/openclaw/openclaw/issues/144776"
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

# issue-openclaw-openclaw-144776

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34577258689](https://github.com/openclaw/clawsweeper/actions/runs/34577258689)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/144776

## Summary

Confirmed the configured-base omission and loss of catalog rejection scope in source at preflight main 16671a3d6ea77b744923ea779a02e6d08fafbd59. Prepared a narrow fix plan using the issue's corrected diagnosis. Implementation, runtime reproduction, and live/UI proof remain blocked on this read-only host with no installed target dependencies. No files or GitHub state changed.

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
| #144776 | fix_needed | planned | canonical | Existing configuration and outcome contracts support a focused bug fix; no viable open implementation PR appears in the hydrated inventory. |
| #110873 | keep_closed | skipped | related | Historical context only; do not revive or supersede this branch. |
| #139649 | keep_closed | skipped | related | Retain the landed strict-failure behavior. |
| #140438 | keep_closed | skipped | related | Preserve selected-credential guarantees and OAuth behavior. |
| cluster:issue-openclaw-openclaw-144776 | build_fix_artifact | planned | canonical | A narrow implementation plan is supported by current source, with reproduction and proof explicitly pending. |
| cluster:issue-openclaw-openclaw-144776 | open_fix_pr | blocked | canonical | PR publication is blocked until the executor reproduces the defect through registered catalog execution, implements the scoped repair, completes validation and review, and records required live/UI evidence. |

## Needs Human

- none
