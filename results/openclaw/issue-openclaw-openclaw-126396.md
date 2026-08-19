---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-126396"
mode: "autonomous"
run_id: "32291310224"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32291310224"
head_sha: "02c930c53d1c7e22ce89d23ba76e6b547a4e2a7f"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-19T19:43:46.505Z"
canonical: "https://github.com/openclaw/openclaw/issues/126396"
canonical_issue: "https://github.com/openclaw/openclaw/issues/126396"
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

# issue-openclaw-openclaw-126396

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32291310224](https://github.com/openclaw/clawsweeper/actions/runs/32291310224)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/126396

## Summary

#126396 is a current, source-reproducible documentation regression on main. Runtime types and construction expose only `tasks.runs`, read-only `tasks.flows`, and mutation-capable `tasks.managedFlows`; the two bundled TaskFlow skills still teach the removed singular API. A narrow two-file fix PR is appropriate, but this read-only worker cannot create its branch or complete the required docs checks: `pnpm docs:list` fails before execution because Corepack cannot create its cache, `node_modules` is absent, and the mandatory sibling `../codex` source is unavailable for the repository hard gate.

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
| #126396 | build_fix_artifact | planned | canonical | Prepare one narrow replacement PR; do not close or merge the canonical issue. |

## Needs Human

- none
