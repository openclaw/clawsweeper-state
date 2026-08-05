---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119484"
mode: "autonomous"
run_id: "30981917516"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30981917516"
head_sha: "49e8c7de6cfed4a7c34ea4b6449a5ee83e2df6a8"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-05T06:50:01.100Z"
canonical: "https://github.com/openclaw/openclaw/issues/119484"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119484"
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

# issue-openclaw-openclaw-119484

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30981917516](https://github.com/openclaw/clawsweeper/actions/runs/30981917516)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/119484

## Summary

#119484 is a reproducible current-main bug. A narrow new-fix-PR artifact is ready, but this worker cannot modify the read-only checkout or run the required write-producing/Windows validation.

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
| #119484 | fix_needed | blocked | canonical | Implementation is blocked only by this worker's read-only filesystem sandbox. The deterministic executor should apply the attached new-fix-PR artifact on clawsweeper/issue-openclaw-openclaw-119484. |
| cluster:issue-openclaw-openclaw-119484 | build_fix_artifact | planned |  | Ready for the executor to implement, validate, label, and open the single credited fix PR. |

## Needs Human

- none
