---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-119367"
mode: "autonomous"
run_id: "32311398489"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32311398489"
head_sha: "02c930c53d1c7e22ce89d23ba76e6b547a4e2a7f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-19T23:08:56.611Z"
canonical: "https://github.com/openclaw/openclaw/pull/119367"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119350"
canonical_pr: "https://github.com/openclaw/openclaw/pull/119367"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-119367

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32311398489](https://github.com/openclaw/clawsweeper/actions/runs/32311398489)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/119367

## Summary

#119367 remains the canonical repair PR for #119350. Repair its branch: current main still restarts changed transcript scans at line 0 after the 4,096-entry dedupe cache evicts older hashes, while the hydrated PR review identifies a compatibility regression and failed CI on the stale head.

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
| https://github.com/openclaw/openclaw/issues/119350 | keep_canonical | planned | canonical | Keep the root-cause report open while its adopted repair PR is updated and revalidated. |
| https://github.com/openclaw/openclaw/pull/111811 | keep_related | planned | related | Related ingestion work; it is neither a duplicate nor a safe replacement for the canonical append-resumption repair. |
| https://github.com/openclaw/openclaw/pull/119367 | fix_needed | planned | canonical | Rebase and repair the adopted branch before any merge evaluation. |
| https://github.com/openclaw/openclaw/pull/119367 | build_fix_artifact | planned | canonical | A narrow contributor-branch repair can preserve the canonical PR, the issue attribution, and the current release-note context. |

## Needs Human

- none
