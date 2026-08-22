---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-127287"
mode: "autonomous"
run_id: "32548357363"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32548357363"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-22T03:23:45.833Z"
canonical: "#127287"
canonical_issue: "#127287"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-127287

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32548357363](https://github.com/openclaw/clawsweeper/actions/runs/32548357363)

Workflow conclusion: success

Worker result: blocked

Canonical: #127287

## Summary

#127287 remains a narrow, reproducible provider regression: accepted GHE domains route to tenant hosts but all request surfaces retain the public CLI integration identity. A canonical new-fix-PR plan is ready, but this worker cannot implement or validate it because the filesystem is read-only, ../codex is absent (required direct-source gate), and dependencies cannot be installed or run.

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
| Needs human | 1 |

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
| #127287 | fix_needed | blocked | canonical | Implementation and required validation are impossible in this read-only checkout; no code or GitHub mutation was performed. |
| #127287 | build_fix_artifact | planned | canonical | A narrow non-security repair remains appropriate once the execution environment is restored. |

## Needs Human

- Provide a writable repair checkout with dependencies and the required sibling ../codex source checkout; a redacted real GHE catalog and inference result is still required before merge.
