---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-111595"
mode: "autonomous"
run_id: "35873780647"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35873780647"
head_sha: "74df933aeed3f01eddcf027150f1484fdcb57904"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-23T15:06:51.840Z"
canonical: "https://github.com/openclaw/openclaw/issues/111595"
canonical_issue: "https://github.com/openclaw/openclaw/issues/111595"
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

# issue-openclaw-openclaw-111595

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35873780647](https://github.com/openclaw/clawsweeper/actions/runs/35873780647)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/111595

## Summary

Reproduced both Windows grouping failures against preflight main. Prepared a narrow implementation artifact. Local implementation is blocked by the read-only host and absent dependencies; no files or GitHub state changed.

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
| #111595 | fix_needed | planned | canonical | Existing behavior is broken and the supplied inventory contains no viable open repair PR. Implementation requires a writable executor. |
| #111596 | keep_closed | skipped | related | Retain as credited historical implementation evidence; do not reopen, close, or treat it as landed. |
| #137115 | keep_related | planned | related | Leave open outside this repair; do not add projectless-directory heuristics. |
| #144427 | keep_closed | skipped | related | Historical adjacent work exceeds this bug-only scope and is not a candidate fix. |
| cluster:issue-openclaw-openclaw-111595 | build_fix_artifact | planned |  | Artifact preparation is complete; applying and validating it is blocked locally by host permissions, not an unresolved product decision. |

## Needs Human

- none
