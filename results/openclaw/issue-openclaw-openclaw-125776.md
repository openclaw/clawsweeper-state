---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125776"
mode: "autonomous"
run_id: "32559396915"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32559396915"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-22T07:32:40.800Z"
canonical: "https://github.com/openclaw/openclaw/issues/125776"
canonical_issue: "https://github.com/openclaw/openclaw/issues/125776"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-125776

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32559396915](https://github.com/openclaw/clawsweeper/actions/runs/32559396915)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/125776

## Summary

#125776 is a reproducible source-level canonical bug: the dynamic-tool start reaches Telegram with toolCallId, but result callbacks discard it and render unkeyed text. Implementation is blocked because this environment is read-only, dependencies cannot be installed, and the mandatory ../codex contract checkout is absent.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #116512 | keep_related | planned | related | Keep open independently; it is not duplicate cleanup for this dynamic-tool repair. |
| #125776 | fix_needed | blocked | canonical | Executor needs a writable checkout with dependencies and the required direct ../codex inspection before implementing and validating the narrow repair. |
| #125779 | keep_closed | skipped | superseded | Already closed; preserve it only as historical source material. |
| cluster:issue-openclaw-openclaw-125776 | build_fix_artifact | planned | canonical | A fresh ClawSweeper PR is appropriate once the executor has a writable validated environment. |

## Needs Human

- none
