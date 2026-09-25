---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-91941"
mode: "autonomous"
run_id: "36179135522"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36179135522"
head_sha: "9fb3a5d5887891c08e0310cafc54b09ab3023c2a"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-25T19:47:14.194Z"
canonical: "https://github.com/openclaw/openclaw/issues/91941"
canonical_issue: "https://github.com/openclaw/openclaw/issues/91941"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-91941

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36179135522](https://github.com/openclaw/clawsweeper/actions/runs/36179135522)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/91941

## Summary

Feishu streaming-card latency remains a credible open bug. The preflight identifies no open implementation PR. Plan one narrow fix that removes the dispatcher’s stale-snapshot backlog while retaining full-content CardKit writes.

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
| #91941 | fix_needed | planned | canonical | The earlier cadence-only proposal was closed after a live test found no meaningful improvement. The later session-owned proposal was also closed without merging. |
| cluster:issue-openclaw-openclaw-91941 | build_fix_artifact | planned |  |  |
| cluster:issue-openclaw-openclaw-91941 | open_fix_pr | planned |  |  |

## Needs Human

- none
