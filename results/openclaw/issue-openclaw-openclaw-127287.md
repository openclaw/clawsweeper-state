---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-127287"
mode: "autonomous"
run_id: "32551896161"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32551896161"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-22T05:41:22.961Z"
canonical: "https://github.com/openclaw/openclaw/issues/127287"
canonical_issue: "https://github.com/openclaw/openclaw/issues/127287"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-127287

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32551896161](https://github.com/openclaw/clawsweeper/actions/runs/32551896161)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/127287

## Summary

Current main reproduces the bounded GHE request-identity regression. A narrow provider-owned fix plan is ready, but this read-only checkout cannot create/validate the branch and the mandatory sibling Codex source checkout is unavailable for direct inspection.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #127287 | fix_needed | planned | canonical | A provider-local, no-new-config repair is appropriate; the requested arbitrary integration-id override is unnecessary. |
| cluster:issue-openclaw-openclaw-127287 | build_fix_artifact | planned | canonical | Executable narrow repair plan prepared for a new ClawSweeper PR. |
| cluster:issue-openclaw-openclaw-127287 | open_fix_pr | blocked | canonical | Resume in a writable repair checkout that includes the required sibling Codex source, then run the artifact validation and open the one requested PR. |
| #13505 | keep_closed | skipped | related | Closed context ref. |
| #99221 | keep_closed | skipped | related | Closed context ref. |
| #102219 | keep_closed | skipped | related | Closed context ref. |
| #105584 | keep_closed | skipped | related | Closed context ref. |
| #114282 | keep_closed | skipped | related | Closed context ref. |

## Needs Human

- none
