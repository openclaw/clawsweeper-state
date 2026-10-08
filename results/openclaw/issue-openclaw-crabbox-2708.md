---
repo: "openclaw/crabbox"
cluster_id: "issue-openclaw-crabbox-2708"
mode: "autonomous"
run_id: "37835702341"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37835702341"
head_sha: "602e573750d089c09f5d140558f62bde4dd73740"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-08T20:04:05.045Z"
canonical: "https://github.com/openclaw/crabbox/issues/2708"
canonical_issue: "https://github.com/openclaw/crabbox/issues/2708"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-crabbox-2708

Repo: openclaw/crabbox

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37835702341](https://github.com/openclaw/clawsweeper/actions/runs/37835702341)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/crabbox/issues/2708

## Summary

No safe repository-side implementation is established. Blacksmith must expose a durable Testbox-to-workflow binding before worker registration, retained through admission failure and cancellation. The inspected checkout matches preflight main 7d597efb297a121c77d84a0995448ea0e12c4637. No code changes or GitHub mutations were made; no PR is recommended.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #2708 | keep_canonical | planned | canonical | Keep the issue open as the canonical provider-capability request; the earlier settlement fixes do not resolve pre-worker dispatch association. |
| #2669 | keep_closed | skipped | related | Historical context only. |
| #2670 | keep_closed | skipped | related | Historical context; not an implementation candidate for this distinct capability gap. |
| #2682 | keep_closed | skipped | related | Historical context only. |
| #2683 | keep_closed | skipped | related | Historical context; it does not supply the missing pre-worker binding. |
| cluster:issue-openclaw-crabbox-2708 | fix_needed | blocked | related | Implementation is blocked on an external provider capability. With queued state and no authoritative association, Crabbox cannot distinguish slow allocation from failed dispatch. Resume only when the supported binding and terminal-state contract are available. The fix artifact records an audited no-PR outcome, not an executable implementation plan. |

## Needs Human

- none
