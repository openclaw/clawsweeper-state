---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-128017"
mode: "autonomous"
run_id: "32598357853"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32598357853"
head_sha: "648ad3538d987a05833ed3bcdff1cf1d8961cc48"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-22T21:10:42.869Z"
canonical: "https://github.com/openclaw/openclaw/issues/128017"
canonical_issue: "https://github.com/openclaw/openclaw/issues/128017"
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

# issue-openclaw-openclaw-128017

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32598357853](https://github.com/openclaw/clawsweeper/actions/runs/32598357853)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/128017

## Summary

Current main has the reported marker-only search/snippet defect. A narrow two-file repair is planned, but this read-only checkout cannot create the required branch/test changes or complete the mandatory direct ../codex source gate.

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
| #128017 | fix_needed | planned | canonical | The issue is a reproducible existing-behavior bug with one canonical plugin-owner repair path; implementation is blocked only by this worker's read-only environment. |
| cluster:issue-openclaw-openclaw-128017 | build_fix_artifact | planned | canonical | Create one credited ClawSweeper fix PR from the requested branch after applying the repair contract and validations. |

## Needs Human

- none
