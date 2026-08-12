---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122625"
mode: "autonomous"
run_id: "31603997159"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31603997159"
head_sha: "ac340908bf694c902f5a673374be1639ef9f220f"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-12T14:48:48.602Z"
canonical: "https://github.com/openclaw/openclaw/issues/122625"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122625"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-122625

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31603997159](https://github.com/openclaw/clawsweeper/actions/runs/31603997159)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/122625

## Summary

Current main cc99d99f still marks canonical Matrix room IDs non-exact under the default per-user DM scope; the explicit-recipient planner consequently rejects the route. The narrow plugin repair is defined, but this read-only checkout lacks node_modules and focused Vitest cannot resolve tsx.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #92653 | keep_related | planned | related | Keep the broader inbound-routing proposal open independently. |
| #122637 | keep_related | planned | related | Keep the separately reproduced inbound dispatch failure open for its own investigation. |
| #122625 | keep_canonical | planned | canonical | The hydrated issue remains the canonical, narrow explicit-delivery defect. |
| cluster:issue-openclaw-openclaw-122625 | fix_needed | blocked | canonical | The deterministic executor needs a writable checkout with dependencies to apply and validate the repair. |
| cluster:issue-openclaw-openclaw-122625 | build_fix_artifact | planned | canonical | Build one narrow credited PR on clawsweeper/issue-openclaw-openclaw-122625 after dependency installation. |

## Needs Human

- none
