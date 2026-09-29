---
repo: "openclaw/notcrawl"
cluster_id: "issue-openclaw-notcrawl-156"
mode: "autonomous"
run_id: "36621866727"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36621866727"
head_sha: "7829cdce71310b549c119c670e7bd69e04f7e242"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-29T19:53:52.988Z"
canonical: "https://github.com/openclaw/notcrawl/issues/156"
canonical_issue: "https://github.com/openclaw/notcrawl/issues/156"
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

# issue-openclaw-notcrawl-156

Repo: openclaw/notcrawl

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36621866727](https://github.com/openclaw/clawsweeper/actions/runs/36621866727)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/notcrawl/issues/156

## Summary

Issue #156 remains reproducible from source on main 204af2f8be192709ee3f0acaef120d583465ab3c: a client timeout on a replay-safe request is excluded from the existing retry loop while the caller remains active. A narrow fix is warranted, but this checkout is read-only, so no regression test, patch, or local validation could be completed.

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
| #156 | fix_needed | planned | canonical | The merged transport retry and 60-second timeout changes do not cover this timeout case. |
| cluster:issue-openclaw-notcrawl-156 | build_fix_artifact | blocked |  | Implementation is blocked by the read-only checkout. |

## Needs Human

- none
