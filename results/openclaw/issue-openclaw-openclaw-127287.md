---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-127287"
mode: "autonomous"
run_id: "32550868217"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32550868217"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-22T04:18:46.711Z"
canonical: "#127287"
canonical_issue: "#127287"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# issue-openclaw-openclaw-127287

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32550868217](https://github.com/openclaw/clawsweeper/actions/runs/32550868217)

Workflow conclusion: success

Worker result: blocked

Canonical: #127287

## Summary

Confirmed a bounded provider regression on current main: GHE domains resolve correctly but every inference, catalog, and standard-embedding request still hard-codes copilot-developer-cli. A narrow provider-local repair plan is ready, but this read-only checkout cannot create the required branch/install dependencies, and ../codex is absent so the repository’s mandatory direct Codex-source gate cannot be completed.

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
| Needs human | 2 |

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
| https://github.com/openclaw/openclaw/issues/127287 | build_fix_artifact | planned | canonical | Create one narrow ClawSweeper fix PR after restoring a writable validation environment and satisfying the required Codex-source inspection gate. |

## Needs Human

- Provide a writable repair environment with ../codex available (or explicitly resolve the repository’s direct Codex-source gate) so the branch can be built and validated.
- Provide a redacted real *.ghe.com tenant catalog and inference proof after the automated tests pass; no credential value should be included.
