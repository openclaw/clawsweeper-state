---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-107814"
mode: "autonomous"
run_id: "31663313156"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31663313156"
head_sha: "56cb78d60734ddc62b5f1e49981bbb4556dcb58d"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-13T03:19:41.468Z"
canonical: "https://github.com/openclaw/openclaw/issues/107814"
canonical_issue: "https://github.com/openclaw/openclaw/issues/107814"
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

# issue-openclaw-openclaw-107814

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31663313156](https://github.com/openclaw/clawsweeper/actions/runs/31663313156)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/107814

## Summary

Current main aba94bbe still overwrites nonempty streamed tool arguments when a terminal Responses field is the string "{}". The narrow shared-parser repair remains appropriate, but this read-only checkout cannot implement or validate it: focused Vitest stops before collection because tsx is absent, and required sibling ../codex source is unavailable.

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
| #107814 | fix_needed | planned | canonical | The shared Responses stream owner should preserve valid streamed JSON when terminal data is an empty object, without a Spark-specific branch. |
| cluster:issue-openclaw-openclaw-107814 | build_fix_artifact | planned | canonical | Prepare one narrow credited fix PR in a writable, dependency-hydrated executor. |

## Needs Human

- none
