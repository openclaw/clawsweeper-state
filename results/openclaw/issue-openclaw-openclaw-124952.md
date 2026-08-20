---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-124952"
mode: "autonomous"
run_id: "32408463286"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32408463286"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T20:27:56.794Z"
canonical: "https://github.com/openclaw/openclaw/issues/124952"
canonical_issue: "https://github.com/openclaw/openclaw/issues/124952"
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

# issue-openclaw-openclaw-124952

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32408463286](https://github.com/openclaw/clawsweeper/actions/runs/32408463286)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/124952

## Summary

#124952 is a current, reproducible Doctor migration gap. A narrow new fix PR is warranted, but this read-only worker cannot patch or validate it locally.

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
| #124952 | fix_needed | blocked | canonical | The deterministic executor should implement this artifact on clawsweeper/issue-openclaw-openclaw-124952, prove the new regression fails on current main, then validate and open the allowed fix PR. |
| cluster:issue-openclaw-openclaw-124952 | build_fix_artifact | planned | canonical | Create one narrow credited fix PR; do not revive either closed contributor branch. |

## Needs Human

- none
