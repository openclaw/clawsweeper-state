---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-126631"
mode: "autonomous"
run_id: "32359593136"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32359593136"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-20T10:45:18.845Z"
canonical: "#126631"
canonical_issue: "#126631"
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

# issue-openclaw-openclaw-126631

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32359593136](https://github.com/openclaw/clawsweeper/actions/runs/32359593136)

Workflow conclusion: success

Worker result: blocked

Canonical: #126631

## Summary

#126631 remains the canonical, narrow rw sandbox mount-target provisioning bug. A bounded new-fix-PR artifact is ready, but this read-only worker cannot create the required branch or edits; validation is additionally blocked by absent dependencies, unavailable Docker access, and the required sibling ../codex source checkout being absent.

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
| https://github.com/openclaw/openclaw/issues/126631 | fix_needed | planned | canonical | Create the Docker bind destination at the pre-container workspace-layout owner, without changing the separately materialized read-only skill source or mount flags. |
| https://github.com/openclaw/openclaw/issues/126631 | build_fix_artifact | planned | canonical | A new implementation branch is required, but this worker cannot write the checkout or open the PR. |
| https://github.com/openclaw/openclaw/issues/113166 | keep_related | planned | related | Related sandbox workspace area, but not a duplicate and unaffected by the mount-target provisioning repair. |

## Needs Human

- Provide a writable repair checkout with the required sibling ../codex source available, then let the deterministic executor create/update clawsweeper/issue-openclaw-openclaw-126631 and run the artifact validation. Docker access is required for the specified E2E proof; node_modules are absent in this checkout, and the worker cannot run pnpm install under the read-only filesystem policy.
