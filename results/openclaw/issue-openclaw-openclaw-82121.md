---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-82121"
mode: "autonomous"
run_id: "36255976814"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36255976814"
head_sha: "f9d81c419e55740d5a48a546b6cd27e49b35250d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-26T16:41:04.576Z"
canonical: "#82121"
canonical_issue: "#82121"
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

# issue-openclaw-openclaw-82121

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36255976814](https://github.com/openclaw/clawsweeper/actions/runs/36255976814)

Workflow conclusion: success

Worker result: planned

Canonical: #82121

## Summary

Current main still reads display-capped chat.history text as a complete reply. Plan a narrow, provenance-based repair after a regression fails through the latest-reply reader and isolated delivery caller. No code or GitHub state was changed.

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
| https://github.com/openclaw/openclaw/issues/82121 | fix_needed | planned | canonical | Keep the issue open while a failing regression and repair are prepared. |
| clawsweeper/issue-openclaw-openclaw-82121 | build_fix_artifact | planned |  | First demonstrate the failure on current main; then repair only the latest-reply delivery boundary. |
| https://github.com/openclaw/openclaw/pull/82128 | keep_closed | skipped | related | Historical source work; no closure action is valid. |
| https://github.com/openclaw/openclaw/pull/93694 | keep_closed | skipped | related | Credit the contributor's useful approach in the new PR. |
| https://github.com/openclaw/openclaw/pull/94094 | keep_closed | skipped | related | Historical context; no closure action is valid. |

## Needs Human

- none
