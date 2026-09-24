---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-157067"
mode: "autonomous"
run_id: "35962557620"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35962557620"
head_sha: "7443df924f1b1209b9c325985170de3a36ed4e4e"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-24T06:36:17.923Z"
canonical: "https://github.com/openclaw/openclaw/issues/157067"
canonical_issue: "https://github.com/openclaw/openclaw/issues/157067"
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

# issue-openclaw-openclaw-157067

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35962557620](https://github.com/openclaw/clawsweeper/actions/runs/35962557620)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/157067

## Summary

The local source still forwards an uncloneable Windows environment Proxy in exact-entry worker requests. A synthetic worker transfer throws DataCloneError. Implementation and validation are blocked: this checkout is read-only, has no installed dependencies, and does not contain the preflight main SHA. No code or GitHub state was changed.

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
| #157067 | fix_needed | planned | canonical | The merged usage-worker fix in #152962 touches a different worker path. |
| #152962 | keep_closed | skipped | related | Historical related fix. |
| cluster:issue-openclaw-openclaw-157067 | build_fix_artifact | planned |  | A narrow fix path is identified, but implementation requires a writable checkout and current-main reproduction. |
| cluster:issue-openclaw-openclaw-157067 | open_fix_pr | blocked |  | The executor must first obtain a writable checkout at current main, reproduce the failure through the exact-entry worker, implement the fix, and validate it. |

## Needs Human

- none
