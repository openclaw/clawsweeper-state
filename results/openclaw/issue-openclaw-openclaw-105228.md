---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-105228"
mode: "autonomous"
run_id: "32576083337"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32576083337"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-22T13:47:39.464Z"
canonical: "https://github.com/openclaw/openclaw/issues/105228"
canonical_issue: "https://github.com/openclaw/openclaw/issues/105228"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-105228

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32576083337](https://github.com/openclaw/clawsweeper/actions/runs/32576083337)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/105228

## Summary

#105228 remains the canonical, source-reproducible ACP requester-stop race on main d3ad7108. The AbortSignal reaches createSessionsSpawnTool but is omitted from the ACP context; after awaited Gateway dispatch, the shared spawn pipeline registers unconditionally. No code or GitHub mutation was made: this checkout is read-only, node_modules is absent (focused Vitest cannot resolve tsx), and ../codex is absent for the repository-required direct Codex inspection.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #105228 | fix_needed | planned | canonical | Implement the narrow cancellation handoff repair on clawsweeper/issue-openclaw-openclaw-105228; current local execution is blocked only by read-only checkout, missing dependencies, and absent required ../codex source. |
| cluster:issue-openclaw-openclaw-105228 | build_fix_artifact | planned | canonical | Narrow new-fix-PR path; local implementation must wait for a writable, dependency-complete checkout and the mandated direct ../codex inspection. |
| #105346 | keep_closed | skipped | related | Already closed; no mutation. |
| #105766 | keep_closed | skipped | related | Already closed; no mutation. |
| #108357 | keep_closed | skipped | related | Already closed; no mutation. |
| #116406 | keep_closed | skipped | related | Already closed; no mutation. |

## Needs Human

- none
