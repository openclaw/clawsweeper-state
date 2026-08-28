---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-131700"
mode: "autonomous"
run_id: "33159725508"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33159725508"
head_sha: "d56daf07f0c32a58f28283936dc4568cf5069828"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-28T10:03:14.393Z"
canonical: "https://github.com/openclaw/openclaw/issues/131700"
canonical_issue: "https://github.com/openclaw/openclaw/issues/131700"
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

# issue-openclaw-openclaw-131700

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33159725508](https://github.com/openclaw/clawsweeper/actions/runs/33159725508)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/131700

## Summary

Current main reproduces the identity mismatch in source: Copilot overwrites the admitted OpenClaw session ID with its native SDK ID. A narrow two-file repair is defined, but this read-only checkout lacks dependencies, so no branch/test validation or PR can be produced here.

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
| #131700 | fix_needed | planned | canonical | Canonical open bug; repair belongs at the Copilot result producer and does not require a core, config, schema, migration, or policy change. |
| cluster:issue-openclaw-openclaw-131700 | build_fix_artifact | blocked | canonical | The executor needs a writable checkout with dependencies before applying and validating the narrow repair. |

## Needs Human

- none
