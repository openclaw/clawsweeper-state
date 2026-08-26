---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-129866"
mode: "autonomous"
run_id: "32930644703"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32930644703"
head_sha: "afe976209aa58a5629041b42b66f6ee11b2812a7"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-26T04:43:32.608Z"
canonical: "https://github.com/openclaw/openclaw/issues/129866"
canonical_issue: "https://github.com/openclaw/openclaw/issues/129866"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-129866

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32930644703](https://github.com/openclaw/clawsweeper/actions/runs/32930644703)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/129866

## Summary

#129866 is a current, narrow memory-tool regression: an absent optional wiki supplement is recorded as a partial-coverage warning for corpus=all, and model guidance requires surfacing it. A shared owner-boundary repair is specified, but this read-only checkout cannot run the regression or create the required PR.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #129866 | fix_needed | planned | canonical | Retain the structured wiki=not-registered outcome, but do not represent an absent optional wiki supplement as partial coverage for corpus=all. |
| cluster:issue-openclaw-openclaw-129866 | build_fix_artifact | planned | canonical | Prepare one narrow new fix PR for the canonical issue. |
| cluster:issue-openclaw-openclaw-129866 | open_fix_pr | blocked | canonical | A writable executor with dependencies and the required ../codex source checkout must validate and open/update clawsweeper/issue-openclaw-openclaw-129866. |
| #125978 | keep_closed | skipped | related | Already closed. |
| #126530 | keep_closed | skipped | related | Already closed. |
| #129865 | keep_closed | skipped | duplicate | Already closed; no closure mutation is permitted. |

## Needs Human

- none
