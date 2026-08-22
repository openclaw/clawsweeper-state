---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-127287"
mode: "autonomous"
run_id: "32549594881"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32549594881"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-22T03:52:50.870Z"
canonical: "https://github.com/openclaw/openclaw/issues/127287"
canonical_issue: "https://github.com/openclaw/openclaw/issues/127287"
canonical_pr: null
actions_total: 2
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32549594881](https://github.com/openclaw/clawsweeper/actions/runs/32549594881)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/127287

## Summary

#127287 remains the canonical open regression. Current main resolves an allowed GHE domain but unconditionally emits the CLI integration identity on prepared runtime, catalog, and embedding requests. A narrow provider-only repair is planned; this worker could not implement or validate it because ../codex is absent and the read-only checkout cannot initialize pnpm or install dependencies.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #127287 | fix_needed | blocked | canonical | Implementation and proof require a writable checkout with dependencies, direct ../codex inspection, and redacted real GHE tenant validation. |
| cluster:issue-openclaw-openclaw-127287 | build_fix_artifact | planned | canonical | Create one narrow new fix PR after satisfying the blocked local and live-provider gates. |

## Needs Human

- none
