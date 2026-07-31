---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-98276"
mode: "autonomous"
run_id: "30665369090"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30665369090"
head_sha: "ec2f84cc3f00d92dadd4d5ee41c8e5d402268c04"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-07-31T22:14:49.922Z"
canonical: "https://github.com/openclaw/openclaw/issues/98276"
canonical_issue: "https://github.com/openclaw/openclaw/issues/98276"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-98276

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30665369090](https://github.com/openclaw/clawsweeper/actions/runs/30665369090)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/98276

## Summary

#98276 remains a reproducible packaging bug on the current checkout: CI archives only dist/, dist-runtime/, and packages/*/dist, while the runtime resolves package-root src/agents/templates and docs/reference/templates. Plan one narrow credited replacement PR that owns an explicit allowlisted archive manifest plus extracted-artifact proof; do not modify the resolver or ACP empty-turn behavior.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #97916 | keep_closed | skipped | related | Historical related context only; closed items receive no mutation. |
| #98274 | keep_related | planned | related | Same proof lane, but a different runtime contract and root cause. |
| #98276 | fix_needed | planned | canonical | The broken behavior is established by the current archive producer and the resolver's package-root contract. No viable open PR owns the repair. |
| #98326 | keep_closed | skipped | superseded | Useful historical source work, but it is already closed and cannot be safely repaired in place. |
| cluster:issue-openclaw-openclaw-98276 | build_fix_artifact | planned | canonical | Create one new, same-repo ClawSweeper branch and PR; no current contributor branch is viable. |

## Needs Human

- none
