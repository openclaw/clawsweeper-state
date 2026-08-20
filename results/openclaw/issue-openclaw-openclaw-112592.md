---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-112592"
mode: "autonomous"
run_id: "32328305267"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32328305267"
head_sha: "e869bde55a75e87d8158e8cb59c0f2de2d59f37b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T03:38:25.274Z"
canonical: "https://github.com/openclaw/openclaw/issues/112592"
canonical_issue: "https://github.com/openclaw/openclaw/issues/112592"
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-112592

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32328305267](https://github.com/openclaw/clawsweeper/actions/runs/32328305267)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/112592

## Summary

Current main 916eef4e reproduces the source-level provenance defect: internal completion producers assign the routing sentinel `webchat` to `inputProvenance.sourceChannel`. A narrow fix artifact is ready, but this read-only worker cannot create the branch or run tests: the required sibling Codex checkout is unavailable and local package execution cannot initialize its cache/dependencies.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #112592 | fix_needed | planned | canonical | Canonical observability bug with a narrow producer-boundary repair; routing semantics remain unchanged. |
| cluster:issue-openclaw-openclaw-112592 | build_fix_artifact | planned | canonical | Artifact preserves the existing routing sentinel while introducing one provenance-only label. |
| cluster:issue-openclaw-openclaw-112592 | open_fix_pr | blocked | canonical | The deterministic executor needs a writable checkout with the required Codex sibling source and installed workspace dependencies before it can create or update clawsweeper/issue-openclaw-openclaw-112592. |
| #47745 | keep_closed | skipped | related | Already closed; historical context only. |
| #54441 | keep_closed | skipped | related | Already closed; outside this provenance-only repair. |
| #55931 | keep_closed | skipped | related | Already closed; related historical provenance evidence only. |
| #64917 | keep_related | planned | related | Distinct open delivery-contract cluster; do not broaden this provenance repair. |
| #93255 | keep_closed | skipped | independent | Already closed and independent. |
| #107546 | keep_closed | skipped | related | Already closed; historical evidence only. |
| #111358 | keep_related | planned | related | Distinct open route-resolution cluster; no change in this repair. |

## Needs Human

- none
