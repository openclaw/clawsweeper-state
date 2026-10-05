---
repo: "openclaw/libterminal"
cluster_id: "issue-openclaw-libterminal-41"
mode: "autonomous"
run_id: "37291981072"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37291981072"
head_sha: "7b767cc6bf7ed7176a94b1e8732b478ea49012d2"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-05T09:46:45.263Z"
canonical: "https://github.com/openclaw/libterminal/issues/41"
canonical_issue: "https://github.com/openclaw/libterminal/issues/41"
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

# issue-openclaw-libterminal-41

Repo: openclaw/libterminal

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37291981072](https://github.com/openclaw/clawsweeper/actions/runs/37291981072)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/libterminal/issues/41

## Summary

Implementation is blocked on the issue's explicit stable-publication prerequisites. Current preflight and repository evidence do not identify a qualifying wrapper. No files changed, tests run, or PR proposed.

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
| #41 | keep_canonical | planned | canonical | Keep the adoption tracker open. Resume implementation only after both stable publications are verified; the job does not override those prerequisites. |
| #77 | keep_closed | skipped | related | Already-merged supporting work; it does not satisfy the adoption request. |
| #169 | keep_related | skipped | related | Retain as related upstream context only. Correct repository binding and hydration are required before any routing decision; no timestamp or target kind can safely be supplied for the unavailable local ref. Do not apply an action intended for coder/ghostty-web#169 to openclaw/libterminal#169. |
| #182 | keep_related | skipped | related | Retain as related upstream context only. Correct repository binding and hydration are required before any routing decision; no timestamp or target kind can safely be supplied for the unavailable local ref. Do not apply an action intended for coder/ghostty-web#182 to openclaw/libterminal#182. |

## Needs Human

- none
