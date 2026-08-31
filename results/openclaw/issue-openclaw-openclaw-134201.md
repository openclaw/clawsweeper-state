---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-134201"
mode: "autonomous"
run_id: "33412370496"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33412370496"
head_sha: "659dee73d0706fee9776f7986d9861e82b897d24"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-31T16:31:40.553Z"
canonical: "https://github.com/openclaw/openclaw/issues/134201"
canonical_issue: "https://github.com/openclaw/openclaw/issues/134201"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-134201

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33412370496](https://github.com/openclaw/clawsweeper/actions/runs/33412370496)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/134201

## Summary

#134201 remains the canonical, source-proven installer bug. Current main appends `--silent` after `--loglevel error` in scripts/install.sh:1110, and npm maps that alias to `--loglevel silent`; EEXIST recovery subsequently depends on the captured log. The narrow repair is ready: remove the obsolete silent-flag path and add an owner-boundary fake-npm regression that fails before the change and proves the dangling launcher is moved before retry. This runner cannot apply or validate it: its filesystem is read-only (the focused test command fails before test collection with Corepack EROFS), and the required sibling ../codex checkout is absent and cannot be cloned under the sandbox.

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
| https://github.com/openclaw/openclaw/issues/134201 | keep_canonical | planned | canonical | One narrow bug-fix PR should own implementation and validation; no close or merge is permitted by this job. |
| https://github.com/openclaw/openclaw/issues/134201 | fix_needed | blocked | canonical | The defect is reproducible from the current command and npm contract, but this read-only worker cannot edit the branch or run the requested test harness. |
| https://github.com/openclaw/openclaw/issues/134201 | build_fix_artifact | planned | canonical | A narrow replacement PR is appropriate once a writable executor is available. |

## Needs Human

- Provide a writable repair checkout (and the required sibling ../codex source checkout) so ClawSweeper can apply the two-file repair and run the mandated focused validation.
