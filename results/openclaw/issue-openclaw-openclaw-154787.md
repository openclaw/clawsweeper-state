---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-154787"
mode: "autonomous"
run_id: "35596211994"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35596211994"
head_sha: "71fbed1ffe4ae51659be3ea9c1e2b7e18858acb1"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-21T12:04:50.081Z"
canonical: "https://github.com/openclaw/openclaw/issues/154787"
canonical_issue: "https://github.com/openclaw/openclaw/issues/154787"
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

# issue-openclaw-openclaw-154787

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35596211994](https://github.com/openclaw/clawsweeper/actions/runs/35596211994)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/154787

## Summary

Verified both metadata omissions in source at preflight main 0883394977d1fb3af657635967f6e447bd7fff9a. Prepared a narrow fix plan. Local implementation and executable reproduction are blocked by the read-only host and missing dependencies; contributor-PR recheck requires authenticated GitHub access.

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
| #154787 | fix_needed | planned | canonical | A narrow UI repair remains justified. Before editing, the executor must recheck contributor work and establish a failing picker-opening regression on current main. |
| #148575 | keep_related | planned | related | Leave the runtime-budget repair with its existing owner. |
| #124207 | keep_closed | skipped | related | Historical renderer and provenance context; preserve its safeguards. |
| cluster:issue-openclaw-openclaw-154787 | build_fix_artifact | planned | canonical | Return the executable repair plan to the authorized executor; local implementation is blocked by host restrictions. |

## Needs Human

- none
