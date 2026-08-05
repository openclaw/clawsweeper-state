---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-119172"
mode: "autonomous"
run_id: "31013321940"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31013321940"
head_sha: "4dc8d1d8c5331386a04bd78cc6d289e05f6e94d5"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-05T16:08:34.877Z"
canonical: "https://github.com/openclaw/openclaw/pull/119172"
canonical_issue: "https://github.com/openclaw/openclaw/issues/53932"
canonical_pr: "https://github.com/openclaw/openclaw/pull/119172"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-119172

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31013321940](https://github.com/openclaw/clawsweeper/actions/runs/31013321940)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/119172

## Summary

Keep #119172 open and repair its writable contributor branch. The Slack propagation fix is the canonical path for #53932, but the reviewed head is behind main and leaves the model-visible forceDocument contract contradictory for Slack.

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
| https://github.com/openclaw/openclaw/issues/53932 | keep_related | planned | related | No close action is permitted or safe until the repaired PR has an exact-head review and lands. |
| https://github.com/openclaw/openclaw/pull/119172 | fix_needed | planned | canonical | Repair the canonical branch, rebase it, regenerate prompt snapshots after the model-visible description update, then obtain one exact-head re-review. Merge is disabled by this job. |
| https://github.com/openclaw/openclaw/pull/119172 | build_fix_artifact | planned | canonical | The job requires a repair artifact for the existing PR; no replacement PR or closure is needed. |

## Needs Human

- none
