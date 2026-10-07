---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-127119"
mode: "autonomous"
run_id: "37577832191"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37577832191"
head_sha: "34cc1aa014a16295779cdca4e336479bad5636ec"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-07T06:22:57.471Z"
canonical: "https://github.com/openclaw/openclaw/issues/127119"
canonical_issue: "https://github.com/openclaw/openclaw/issues/127119"
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

# issue-openclaw-openclaw-127119

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37577832191](https://github.com/openclaw/clawsweeper/actions/runs/37577832191)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/127119

## Summary

Current-main source still selects the wrong output-token field. A narrow fix artifact is ready, but implementation and request-boundary reproduction are blocked by this read-only host, missing dependencies, and Corepack EROFS. No files or GitHub state changed; live-provider enforcement remains unverified.

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
| #127119 | fix_needed | planned | canonical | The source mismatch remains on supplied current main. Reproduce through the production builder before changing production code; stop if that regression does not fail for the intended field mismatch. |
| #127135 | keep_closed | skipped | related | Historical research and contributor credit only; no reopening, closure, or merge action. |
| cluster:issue-openclaw-openclaw-127119 | build_fix_artifact | planned |  | The fix plan is narrow and executable elsewhere. This worker cannot claim a repaired or validated branch. |

## Needs Human

- none
