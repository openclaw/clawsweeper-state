---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-111595"
mode: "plan"
run_id: "35920246495"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35920246495"
head_sha: "c0680bf79ab759f5fbb64dc983e52f5329e36857"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-23T21:10:06.179Z"
canonical: "#111595"
canonical_issue: "#111595"
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

# issue-openclaw-openclaw-111595

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35920246495](https://github.com/openclaw/clawsweeper/actions/runs/35920246495)

Workflow conclusion: success

Worker result: planned

Canonical: #111595

## Summary

At the preflight main SHA, catalog grouping still uses the folded cwd spelling as its Map key, so the Windows path-equivalence defect remains in source. Plan a narrow fix and a failing regression before implementation. No code, tests, or GitHub state were changed.

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
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #111595 | fix_needed | planned | canonical | Add a regression that fails on this main SHA, then repair the existing grouping and preference owners. Recheck active PR ownership and coordinate with the reported assignee before opening the fix PR. |
| #111596 | keep_closed | skipped | related | Use the prior work as implementation evidence and credit @ooiuuii in the new PR. It is already closed. |
| #137115 | keep_related | planned | related | Windows spelling equivalence does not resolve projectless-directory classification; keep that issue open for its own decision. |
| #144427 | keep_closed | skipped | related | Its broader changes are outside this bug-only repair; it is already closed. |

## Needs Human

- none
