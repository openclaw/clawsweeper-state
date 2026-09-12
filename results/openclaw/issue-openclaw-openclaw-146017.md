---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-146017"
mode: "autonomous"
run_id: "34699182468"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34699182468"
head_sha: "23c848fb2fb4f7f695788942cfe8c8d9ffa11ccc"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-12T15:38:41.085Z"
canonical: "https://github.com/openclaw/openclaw/issues/146017"
canonical_issue: "https://github.com/openclaw/openclaw/issues/146017"
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

# issue-openclaw-openclaw-146017

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34699182468](https://github.com/openclaw/clawsweeper/actions/runs/34699182468)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/146017

## Summary

The defect remains in preflight main. Implementation is blocked by the read-only host, missing dependencies/build artifacts, and unverified published-driver compatibility. No files or GitHub state changed.

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
| #146017 | fix_needed | planned | canonical | Source supports the reported root cause. Runtime reproduction remains unperformed, so the issue must remain open and cannot be described as fixed. |
| cluster:issue-openclaw-openclaw-146017 | build_fix_artifact | blocked |  | Implementation and PR publication remain blocked until reproduction and published-driver compatibility are demonstrated in an authorized writable environment. Do not bypass Policy or invent a default rateLimit to satisfy the gate. |

## Needs Human

- none
