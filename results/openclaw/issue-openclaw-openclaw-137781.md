---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-137781"
mode: "autonomous"
run_id: "35304169563"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35304169563"
head_sha: "f3b7e8dbb5d7735202c46c94043a641f26a15f56"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-18T04:44:36.927Z"
canonical: "https://github.com/openclaw/openclaw/issues/137781"
canonical_issue: "https://github.com/openclaw/openclaw/issues/137781"
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

# issue-openclaw-openclaw-137781

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35304169563](https://github.com/openclaw/clawsweeper/actions/runs/35304169563)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/137781

## Summary

Source confirms the metadata downgrade path on preflight main. Implementation and runtime reproduction are blocked by the read-only host and missing dependencies. No files or GitHub state changed; a narrow executor fix artifact is provided. The reported UNIQUE failure remains unverified.

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
| #137781 | fix_needed | blocked | canonical | The canonical bug has a supported source path, but the required failing regression and locally validated implementation need a writable executor environment. |
| #139011 | keep_closed | skipped | related | Historical context only, as explicitly required by the job. |
| cluster:issue-openclaw-openclaw-137781 | build_fix_artifact | planned | canonical | A narrow prevention fix remains appropriate; artifact preparation is complete despite the local implementation blocker. |

## Needs Human

- none
