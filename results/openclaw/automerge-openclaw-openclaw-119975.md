---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-119975"
mode: "autonomous"
run_id: "32322911674"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32322911674"
head_sha: "02c930c53d1c7e22ce89d23ba76e6b547a4e2a7f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-20T02:10:28.737Z"
canonical: "https://github.com/openclaw/openclaw/pull/119975"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119958"
canonical_pr: "https://github.com/openclaw/openclaw/pull/119975"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-119975

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32322911674](https://github.com/openclaw/clawsweeper/actions/runs/32322911674)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/119975

## Summary

#119975 remains the adopted repair path. Current main still turns the unmanaged listener-only 60-second wait into terminal failure; the recorded review blockers require a request-correlated, owner-produced startup state before this PR can be re-reviewed. No merge or close is authorized.

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
| https://github.com/openclaw/openclaw/issues/119958 | keep_canonical | planned | canonical | Keep the source report open while its adopted PR is repaired and revalidated. |
| https://github.com/openclaw/openclaw/pull/119975 | fix_needed | planned | canonical | Rebase and repair the contributor branch; do not merge or close it. |
| https://github.com/openclaw/openclaw/pull/119975 | build_fix_artifact | planned | canonical | Provide the deterministic edit pass with a bounded, credited repair contract. |

## Needs Human

- none
