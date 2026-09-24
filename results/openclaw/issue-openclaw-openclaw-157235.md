---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-157235"
mode: "autonomous"
run_id: "35993548070"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35993548070"
head_sha: "f4322a8542135175b2a96f6a63fde8685ef14cf5"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-24T12:23:06.294Z"
canonical: "https://github.com/openclaw/openclaw/issues/157235"
canonical_issue: "https://github.com/openclaw/openclaw/issues/157235"
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

# issue-openclaw-openclaw-157235

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35993548070](https://github.com/openclaw/clawsweeper/actions/runs/35993548070)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/157235

## Summary

Current main has a source-backed Windows backup path defect, but the required failing archive-creation regression and native Windows validation could not run: this checkout is read-only, lacks node_modules, and is on Linux. No code or GitHub state was changed.

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
| #157235 | fix_needed | planned | canonical | A registered namespace spelling can reach archive naming; the requested entry-point regression remains unrun. |
| #148020 | keep_related | planned | related | Its filename-collision and restore-policy decision is outside this Windows namespace fix. |
| cluster:issue-openclaw-openclaw-157235 | build_fix_artifact | blocked |  | Implementation is blocked by the host limits, not by an unresolved product decision. |

## Needs Human

- none
