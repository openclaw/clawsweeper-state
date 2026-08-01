---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-116976"
mode: "autonomous"
run_id: "30685036432"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30685036432"
head_sha: "a80c24ebf2f19d74cd07645f8d377271c587586b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-01T06:21:15.757Z"
canonical: "#116976"
canonical_issue: null
canonical_pr: "#116976"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-116976

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30685036432](https://github.com/openclaw/clawsweeper/actions/runs/30685036432)

Workflow conclusion: success

Worker result: planned

Canonical: #116976

## Summary

#116976 is the canonical writable replacement for closed source PR #114611. Current main at c7917cca still contains the retired `hostnameAllowlist` documentation example, while the browser navigation owner consumes `allowedHostnames` and its matcher/test suite confirms wildcard entries match subdomains but not the bare suffix. The open PR must be rebased from its reviewed head onto current main and retain the narrow docs correction before it can be reconsidered for merge.

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
| #114611 | keep_closed | skipped | superseded | Historical source PR only; keep it closed and preserve its contributor credit through the replacement PR. |
| #116976 | fix_needed | planned | canonical | The canonical PR is a narrow, safe docs correction but is stale against current main; repair its writable branch rather than replacing it. |
| #116976 | build_fix_artifact | planned | canonical | Prepare a bounded repair artifact for the single canonical PR; no merge or GitHub mutation is planned by this worker. |

## Needs Human

- none
