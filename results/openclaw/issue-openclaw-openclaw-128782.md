---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-128782"
mode: "autonomous"
run_id: "32746666387"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32746666387"
head_sha: "ce250708c1ea10228f29fc5740cba95460dcdf74"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-24T16:57:50.992Z"
canonical: "https://github.com/openclaw/openclaw/issues/128782"
canonical_issue: "https://github.com/openclaw/openclaw/issues/128782"
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

# issue-openclaw-openclaw-128782

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32746666387](https://github.com/openclaw/clawsweeper/actions/runs/32746666387)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/128782

## Summary

Current main still lets npm postinstall call the plugin-registry migration, which opens the shared SQLite state database for a write. Plan a narrow new PR that removes that lifecycle call, retains explicit `openclaw doctor --fix` migration ownership, and adds isolated package-postinstall regression coverage.

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
| #128782 | fix_needed | planned | canonical | The reported install-time state mutation remains present on current main and has a bounded producer-side repair. |
| #127997 | keep_independent | planned | independent | Open contributor PR is unrelated to this install-side-effect cluster. |
| #120663 | keep_closed | skipped | related | Closed context only. |
| #122617 | keep_closed | skipped | related | Closed context only. |
| cluster:issue-openclaw-openclaw-128782 | build_fix_artifact | planned |  | A narrow credited fix PR is appropriate; no existing viable PR addresses this behavior. |

## Needs Human

- none
