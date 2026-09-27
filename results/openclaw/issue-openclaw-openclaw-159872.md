---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-159872"
mode: "autonomous"
run_id: "36347252471"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36347252471"
head_sha: "3a18b3d1a20770d6b719c377f2a9be24f214a082"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-27T21:03:01.330Z"
canonical: "https://github.com/openclaw/openclaw/issues/159872"
canonical_issue: "https://github.com/openclaw/openclaw/issues/159872"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-159872

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36347252471](https://github.com/openclaw/clawsweeper/actions/runs/36347252471)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/159872

## Summary

The reported source mismatch reproduces on preflight main 4cf8aae1: requesting memory and sessions with both session gates off resolves to memory only; enabling experimental.sessionMemory includes sessions. Implementation and entry-point validation are blocked because this checkout is read-only and has no installed dependencies.

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
| #159872 | keep_canonical | planned | canonical | Keep the issue open while the diagnostic fix is prepared. |
| cluster:issue-openclaw-openclaw-159872 | fix_needed | planned |  | Report the excluded source and an enablement hint through Doctor and memory status while preserving the indexing gate. |
| cluster:issue-openclaw-openclaw-159872 | build_fix_artifact | blocked |  | Implementation requires a writable checkout with installed dependencies. |

## Needs Human

- none
