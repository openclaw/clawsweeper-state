---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-111595"
mode: "autonomous"
run_id: "35904779438"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35904779438"
head_sha: "549143746fd2f0012b31121b8996c74ddee8afd9"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-23T19:37:29.336Z"
canonical: "https://github.com/openclaw/openclaw/issues/111595"
canonical_issue: "https://github.com/openclaw/openclaw/issues/111595"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-111595

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35904779438](https://github.com/openclaw/clawsweeper/actions/runs/35904779438)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/111595

## Summary

The defect reproduces from the grouping code on main a0bf24c0. A fix artifact is ready, but this worker cannot implement or validate it: the checkout is read-only, dependencies are absent, and GitHub CLI has no token. No code or GitHub state changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #111595 | fix_needed | planned | canonical | Equivalent Windows paths still split into separate catalog project groups. |
| #111596 | keep_closed | skipped |  | Useful historical implementation and credit source; no action on the closed PR. |
| #137115 | keep_related | planned | related | Path equivalence for one checkout does not resolve projectless-session classification. |
| #144427 | keep_closed | skipped |  | Historical related work outside this narrow Windows path-equivalence fix. |
| cluster:issue-openclaw-openclaw-111595 | build_fix_artifact | blocked |  | Implementation and PR creation require a writable, dependency-ready executor with GitHub access. |

## Needs Human

- none
