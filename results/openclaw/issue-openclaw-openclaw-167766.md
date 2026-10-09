---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-167766"
mode: "autonomous"
run_id: "37918387724"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37918387724"
head_sha: "307fe46bf1813394c08495b341ce22315a0b7045"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-09T10:42:06.356Z"
canonical: "https://github.com/openclaw/openclaw/issues/167766"
canonical_issue: "https://github.com/openclaw/openclaw/issues/167766"
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

# issue-openclaw-openclaw-167766

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37918387724](https://github.com/openclaw/clawsweeper/actions/runs/37918387724)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/167766

## Summary

Reproduced terminal cleanup losing recovery identity for failed, timeout, and killed outcomes on preflight main 0513aeae6a87b5c9d9b16b5f623d23d5d830940f. Narrow fix artifact prepared. Implementation and full validation are blocked by the read-only checkout; no files or GitHub state changed.

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
| #167766 | fix_needed | planned | canonical | Existing recovery custody is partially erased by terminal reuse. The issue owns a distinct post-commit repair with no hydrated implementation PR. |
| #166022 | keep_related | planned | related | Different failure boundary and remaining work; retain the existing issue and contributor implementation path. |
| #166023 | keep_related | planned | related | Useful contributor work for the separate pre-commit defect. Do not replace, repair, merge, or supersede it in this cluster. |
| cluster:issue-openclaw-openclaw-167766 | build_fix_artifact | planned |  | A concrete executor plan is available; local implementation remains blocked by host permissions rather than maintainer ambiguity. |

## Needs Human

- none
