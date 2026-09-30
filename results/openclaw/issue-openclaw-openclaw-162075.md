---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-162075"
mode: "autonomous"
run_id: "36765864359"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36765864359"
head_sha: "ad9ac7f287fdf88e9de0de0ef7913d0c7b0c5e7a"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-30T20:12:57.299Z"
canonical: "https://github.com/openclaw/openclaw/issues/162075"
canonical_issue: "https://github.com/openclaw/openclaw/issues/162075"
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

# issue-openclaw-openclaw-162075

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36765864359](https://github.com/openclaw/clawsweeper/actions/runs/36765864359)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/162075

## Summary

The diagnostic gap remains at main f02c8eba42a217ec7b414e03a5c4d92693caa6b6. A narrow fix is appropriate, but this read-only checkout prevents implementation and validation.

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
| #162075 | fix_needed | planned | canonical | Improve diagnosis and conditional recovery guidance while preserving native restart refusal. |
| #155644 | keep_related | planned | related | Distinct ownership and recovery decision; leave its issue open. |
| #160267 | keep_related | planned | related | Distinct recovery policy question; leave its issue open. |
| cluster:issue-openclaw-openclaw-162075 | build_fix_artifact | blocked |  | Implementation requires a writable executor checkout. |

## Needs Human

- none
