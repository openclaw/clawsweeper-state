---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-118372"
mode: "autonomous"
run_id: "30779195329"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30779195329"
head_sha: "fd51157a108041712de66756c2617f7a118068cb"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-03T02:48:25.973Z"
canonical: "https://github.com/openclaw/openclaw/issues/118372"
canonical_issue: "https://github.com/openclaw/openclaw/issues/118372"
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

# issue-openclaw-openclaw-118372

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30779195329](https://github.com/openclaw/clawsweeper/actions/runs/30779195329)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/118372

## Summary

#118372 is an open canonical issue on current main. A narrow repair path is available: launchd currently writes gateway stderr to /dev/null while macOS diagnostics intentionally ignore the already-defined supervisor stderr path. Route stderr to the existing gateway error log and include its bounded tail in diagnostics. The reported manual npm-upgrade service-env crash remains unproven because its stack trace was discarded; this repair preserves the evidence needed for any subsequent root-cause fix.

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
| #118372 | keep_canonical | planned | canonical | This is the only hydrated cluster item and remains the authoritative report for the macOS launchd diagnostics defect. |
| #118372 | fix_needed | planned | canonical | A narrow, non-security repair directly satisfies the actionable stderr-retention request and fixes the diagnostic path that currently discards the only evidence needed to diagnose the broader crash loop. |
| cluster:issue-openclaw-openclaw-118372 | build_fix_artifact | planned | canonical | Create one narrow credited implementation PR from clawsweeper/issue-openclaw-openclaw-118372; no existing contributor PR is available to repair. |

## Needs Human

- none
