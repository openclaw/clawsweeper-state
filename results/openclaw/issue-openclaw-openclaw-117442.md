---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-117442"
mode: "autonomous"
run_id: "30703808751"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30703808751"
head_sha: "e9f97b34fd5950884dd6b9ec45f46f4851cf506c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-01T14:49:54.269Z"
canonical: "https://github.com/openclaw/openclaw/issues/117442"
canonical_issue: "https://github.com/openclaw/openclaw/issues/117442"
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

# issue-openclaw-openclaw-117442

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30703808751](https://github.com/openclaw/clawsweeper/actions/runs/30703808751)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/117442

## Summary

Verified the open LINE markdown-table data-loss report against `main` at `133a8a6274296133eeb625ff37811bdb857a3374`. Both rendering paths discard rows before `processLineMessage` can apply its existing 30 KB UTF-8 fallback. A narrow new fix PR should remove those pre-measure caps and add focused regression coverage.

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
| #117442 | keep_canonical | planned | canonical | The report is a real, open canonical behavior bug. No active contributor PR is present in the supplied live-state artifact. |
| cluster:issue-openclaw-openclaw-117442 | fix_needed | planned | canonical | Remove the pre-measure caps so the existing 30 KB fallback owns the complete-table delivery decision. |
| cluster:issue-openclaw-openclaw-117442 | build_fix_artifact | planned | canonical | Create and validate the narrow fix through the deterministic executor on `clawsweeper/issue-openclaw-openclaw-117442`. |

## Needs Human

- none
