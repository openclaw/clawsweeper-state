---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-128017"
mode: "autonomous"
run_id: "32599907560"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32599907560"
head_sha: "648ad3538d987a05833ed3bcdff1cf1d8961cc48"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-22T21:43:11.094Z"
canonical: "#128017"
canonical_issue: "#128017"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-128017

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32599907560](https://github.com/openclaw/clawsweeper/actions/runs/32599907560)

Workflow conclusion: success

Worker result: blocked

Canonical: #128017

## Summary

#128017 is a valid canonical bug on main d6679815: standalone OpenClaw marker lines enter both local-page matching and fallback snippets. No branch changes were possible because this worker has a read-only filesystem; the required test command also cannot initialize Corepack. A narrow, ready-to-apply fix artifact is supplied.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| #128017 | fix_needed | blocked | canonical | Apply the supplied narrow fix in a writable checkout, then run the required regression and changed-file gates before opening the one allowed fix PR. |

## Needs Human

- none
