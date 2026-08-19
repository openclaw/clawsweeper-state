---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-126227"
mode: "autonomous"
run_id: "32227057135"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32227057135"
head_sha: "02c930c53d1c7e22ce89d23ba76e6b547a4e2a7f"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-19T07:34:38.358Z"
canonical: "https://github.com/openclaw/openclaw/issues/126227"
canonical_issue: "https://github.com/openclaw/openclaw/issues/126227"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-126227

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32227057135](https://github.com/openclaw/clawsweeper/actions/runs/32227057135)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/126227

## Summary

Confirmed on current main 554dfbe0: both toRetryError and normalization-core toErrorObject use Object.assign onto a fresh Error. A JSON-parsed own enumerable __proto__ makes the result fail instanceof Error while retaining ordinary fields. Repair planning is complete, but implementation/validation is blocked in this read-only checkout: node_modules is absent, and ../codex is absent for the repository-required direct Codex-source audit.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #126227 | fix_needed | planned | canonical | A narrow producer-boundary repair is warranted; no viable PR is hydrated. |
| cluster:issue-openclaw-openclaw-126227 | build_fix_artifact | planned | canonical | Create one narrow credited PR from clawsweeper/issue-openclaw-openclaw-126227 after dependencies and required source-audit prerequisites are available. |
| cluster:issue-openclaw-openclaw-126227 | open_fix_pr | blocked | canonical | Open only after the executor installs dependencies, performs the required direct Codex-source audit, applies the artifact, and passes the listed validation. |

## Needs Human

- none
