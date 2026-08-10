---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-113326"
mode: "autonomous"
run_id: "31431421262"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31431421262"
head_sha: "19a744924f5e0acbc051c324e678c6981fc3940a"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-10T22:13:29.414Z"
canonical: "https://github.com/openclaw/openclaw/issues/113326"
canonical_issue: "https://github.com/openclaw/openclaw/issues/113326"
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

# issue-openclaw-openclaw-113326

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31431421262](https://github.com/openclaw/clawsweeper/actions/runs/31431421262)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/113326

## Summary

Confirmed source-level bug on main: models auth login rejects all non-TTY calls before resolving the explicitly selected device-code method. A narrow credited fix PR is appropriate, but this worker cannot edit, install dependencies, run tests, or clone required sibling ../codex because the checkout filesystem is read-only.

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
| #113326 | fix_needed | planned | canonical | Repair is narrow and source-reproducible, but implementation and final Codex contract inspection require a writable executor checkout. |
| #100067 | keep_independent | planned | independent | Related auth area but a distinct migration/product-decision cluster. |
| cluster:issue-openclaw-openclaw-113326 | build_fix_artifact | planned |  | Prepare the bounded PR once a writable executor checkout is available. |
| cluster:issue-openclaw-openclaw-113326 | open_fix_pr | planned |  | Issue implementation job permits one labeled ClawSweeper fix PR; this worker cannot create the branch in a read-only checkout. |

## Needs Human

- none
