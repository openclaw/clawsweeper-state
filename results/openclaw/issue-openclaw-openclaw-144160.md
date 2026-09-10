---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-144160"
mode: "autonomous"
run_id: "34499075060"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34499075060"
head_sha: "c9a57f70fdab4c412fb73c769d2ebe2bb6492494"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-10T16:48:24.528Z"
canonical: "https://github.com/openclaw/openclaw/issues/144160"
canonical_issue: "https://github.com/openclaw/openclaw/issues/144160"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-144160

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34499075060](https://github.com/openclaw/clawsweeper/actions/runs/34499075060)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/144160

## Summary

Confirmed the reported fallback remains on preflight main d70f83517220507b6719f1286bcba08462134e24. Narrow fix artifact prepared. Implementation and runtime reproduction are blocked by the read-only host and missing dependencies; no files or GitHub state changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #144160 | fix_needed | planned | canonical | The existing owner can fix this ordinary model-resolution bug by removing only the positional cap fallback. No feature, schema, or policy decision is needed. |
| #126611 | keep_related | planned | related | Separate root cause and active contributor work; leave open without adopting or replacing its branch. |
| #98312 | keep_closed | skipped | related | Historical evidence only. |
| #114710 | keep_closed | skipped | related | Historical evidence only; no auth or endpoint-classification changes are proposed. |
| #124665 | keep_closed | skipped | related | Historical evidence only; do not reopen context configuration or SDK decisions. |
| cluster:issue-openclaw-openclaw-144160 | build_fix_artifact | planned | canonical | Prepare one new fix PR on clawsweeper/issue-openclaw-openclaw-144160, conditional on a failing regression before editing and passing validation afterward. |
| cluster:issue-openclaw-openclaw-144160 | open_fix_pr | blocked | canonical | Implementation, failing-regression proof, fresh review, and repaired-branch validation require the executor's writable environment before PR publication. |

## Needs Human

- none
