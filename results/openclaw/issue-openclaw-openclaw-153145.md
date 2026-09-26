---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-153145"
mode: "autonomous"
run_id: "36244490954"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36244490954"
head_sha: "726760a4e31bd88b10982908e042f59f01c7a18b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-26T13:20:38.855Z"
canonical: "https://github.com/openclaw/openclaw/issues/153145"
canonical_issue: "https://github.com/openclaw/openclaw/issues/153145"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-153145

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36244490954](https://github.com/openclaw/clawsweeper/actions/runs/36244490954)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/153145

## Summary

Current main still has a source-confirmed Talk Mode reply-loss path: an accepted run can outlast the fixed 45-second event wait and 12-second history fallback. No patch or native reproduction was completed because this checkout is read-only and the runner is Linux.

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
| #153145 | fix_needed | planned | canonical | A focused native-client fix remains needed. |
| #153444 | keep_closed | skipped | related | Historical source work only; preserve contributor credit in the new fix. |
| #60636 | keep_closed | skipped | related | Adjacent timeout boundary, not the macOS Talk Mode observation defect. |
| cluster:issue-openclaw-openclaw-153145 | build_fix_artifact | blocked |  | Implementation requires a writable checkout and disposable macOS runner. Do not open a PR from this result. |

## Needs Human

- none
