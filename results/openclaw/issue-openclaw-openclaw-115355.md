---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-115355"
mode: "autonomous"
run_id: "30691701115"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30691701115"
head_sha: "b347894406412c2b52bfa97a73bf9f5da4ea1598"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-01T08:31:36.343Z"
canonical: "https://github.com/openclaw/openclaw/issues/115355"
canonical_issue: "https://github.com/openclaw/openclaw/issues/115355"
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

# issue-openclaw-openclaw-115355

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30691701115](https://github.com/openclaw/clawsweeper/actions/runs/30691701115)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/115355

## Summary

The issue remains valid on current main `338a7ccb2f7058f8b81535fa4c4f76baaa053aaf`: the live-tool chip test clicks the real handler, which calls `window.history.replaceState` and mutates the shared jsdom URL before its after-test cleanup. A one-file test-only repair is ready, but this worker checkout is read-only, so implementation and focused validation must be completed by the repair executor on `clawsweeper/issue-openclaw-openclaw-115355`.

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
| #115355 | fix_needed | planned | canonical | A narrow regression repair remains necessary: test-local interception can preserve the asserted deep-link request without mutating shared jsdom history. |
| cluster:issue-openclaw-openclaw-115355 | build_fix_artifact | planned |  | Provide an executable one-file repair plan for the deterministic applicator. |
| #114662 | keep_independent | planned | independent | Different owner boundary and user-visible behavior. |
| #114750 | keep_independent | planned | independent | Different runtime and repair scope. |
| #114628 | keep_closed | skipped | independent | Already closed; no mutation allowed or needed. |
| #114991 | keep_closed | skipped | independent | Already closed and independent. |
| #115221 | keep_closed | skipped | related | Historical related context; it does not satisfy the issue's prevention invariant. |
| #115332 | keep_closed | skipped | related | Historical related context; already closed. |
| #115356 | keep_closed | skipped | superseded | Already closed historical proposal; the new canonical fix must be built from current main. |
| #115995 | keep_closed | skipped | superseded | Already closed historical proposal; preserve its context without mutation. |

## Needs Human

- none
