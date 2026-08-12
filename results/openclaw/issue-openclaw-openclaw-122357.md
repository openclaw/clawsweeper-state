---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122357"
mode: "autonomous"
run_id: "31552571429"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31552571429"
head_sha: "9c7445bdca92d05b5a38317b498d7f41fc19bc2b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-12T01:16:14.085Z"
canonical: "https://github.com/openclaw/openclaw/issues/122357"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122357"
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

# issue-openclaw-openclaw-122357

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31552571429](https://github.com/openclaw/clawsweeper/actions/runs/31552571429)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/122357

## Summary

Confirmed on main ff73a14f: Memory Wiki imports and declares mdast-util-from-markdown, but the root npm manifest does not declare it and postinstall removes bundled-plugin node_modules. The checkout is read-only and has no node_modules, so this worker cannot create the required branch, apply the repair, or run package proof. A narrow new-PR artifact is ready.

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
| #122357 | fix_needed | blocked | canonical | Implementation is blocked only by the worker's read-only filesystem sandbox; no maintainer judgment is needed. |
| cluster:issue-openclaw-openclaw-122357 | build_fix_artifact | planned |  | Narrow repair artifact for a new ClawSweeper fix PR. |

## Needs Human

- none
