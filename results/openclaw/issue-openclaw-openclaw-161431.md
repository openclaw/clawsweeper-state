---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-161431"
mode: "autonomous"
run_id: "36646696413"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36646696413"
head_sha: "7829cdce71310b549c119c670e7bd69e04f7e242"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-29T23:47:57.142Z"
canonical: "https://github.com/openclaw/openclaw/issues/161431"
canonical_issue: "https://github.com/openclaw/openclaw/issues/161431"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-161431

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36646696413](https://github.com/openclaw/clawsweeper/actions/runs/36646696413)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/161431

## Summary

Current main still drops the responding agent ID during TTS summarization. A narrow fix PR is warranted; the earlier merged cold-start PR addressed a different failure. No GitHub mutation was made.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 |
| issue_implementation_status_comment | updated | #161431 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #161431 | fix_needed | planned | canonical | The open issue describes a current, bounded bug with a clear TTS owner and no viable open candidate PR. |
| cluster:issue-openclaw-openclaw-161431 | build_fix_artifact | planned |  |  |
| cluster:issue-openclaw-openclaw-161431 | open_fix_pr | planned |  |  |

## Needs Human

- none
