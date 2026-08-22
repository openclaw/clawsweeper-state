---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-127287"
mode: "autonomous"
run_id: "32565335590"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32565335590"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-22T09:46:57.586Z"
canonical: "https://github.com/openclaw/openclaw/issues/127287"
canonical_issue: "https://github.com/openclaw/openclaw/issues/127287"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-127287

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32565335590](https://github.com/openclaw/clawsweeper/actions/runs/32565335590)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/127287

## Summary

Implementation is blocked before editing: the mandatory sibling Codex source checkout (`../codex`) is absent, and this read-only, network-restricted worker cannot clone it. Local source inspection agrees with the supplied regression evidence: current main unconditionally sends `copilot-developer-cli` from the provider identity helper and through catalog/embedding paths.

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
| Needs human | 1 |

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
| #127287 | fix_needed | blocked | needs_human | Do not edit or claim a Codex protocol verdict until a direct inspection of the required sibling Codex source is possible. |
| cluster:issue-openclaw-openclaw-127287 | build_fix_artifact | planned | needs_human | A narrow new fix PR remains the intended path once the hard gate is satisfied. |

## Needs Human

- Provide the required ../codex checkout (or authorize an environment where it can be cloned and inspected) before implementation or any correctness verdict.
