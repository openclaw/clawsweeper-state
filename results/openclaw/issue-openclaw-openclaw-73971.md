---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-73971"
mode: "autonomous"
run_id: "30742916861"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30742916861"
head_sha: "7e4d8cb7cee432b87afec79e1fbfa3209c084474"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-02T10:16:44.786Z"
canonical: "https://github.com/openclaw/openclaw/issues/73971"
canonical_issue: "https://github.com/openclaw/openclaw/issues/73971"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-73971

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30742916861](https://github.com/openclaw/clawsweeper/actions/runs/30742916861)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/73971

## Summary

#73971 remains reproducible on current main (0bc32f0f5cf5b2202ae0918a26b0a252c1b59495). The Control UI labels array rows one-based but renders the Gateway validation payload as raw JSON, retaining zero-based path segments. Plan a narrow UI-only PR that formats array segments for display using the current form value, while preserving the raw Gateway/config issue contract.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #4 | keep_closed | skipped | independent | Closed historical context only; no mutation is appropriate. |
| #42664 | keep_closed | skipped | related | Related validation-error work is already closed and does not resolve the UI row-number mismatch. |
| #93519 | keep_closed | skipped | superseded | Useful prior art, but its broad payload-contract change is not the narrowest canonical repair. |
| #73971 | fix_needed | planned | canonical | A narrow Control UI presentation repair is viable; no active implementation PR exists. |
| cluster:issue-openclaw-openclaw-73971 | build_fix_artifact | planned | canonical | The repair is bounded to the existing Control UI presentation owner and focused browser test coverage. |

## Needs Human

- none
