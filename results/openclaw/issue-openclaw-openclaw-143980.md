---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-143980"
mode: "autonomous"
run_id: "34471013551"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34471013551"
head_sha: "fcaef5fe567b5ae6698d44c37357e12fd3bad60f"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-10T11:35:31.391Z"
canonical: "https://github.com/openclaw/openclaw/issues/143980"
canonical_issue: "https://github.com/openclaw/openclaw/issues/143980"
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

# issue-openclaw-openclaw-143980

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34471013551](https://github.com/openclaw/clawsweeper/actions/runs/34471013551)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/143980

## Summary

Confirmed the explicit-cwd mismatch in preflight main source and prepared a narrow fix artifact. Implementation and executable regression proof are blocked by the read-only host and missing dependencies. No files or GitHub state changed.

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
| #143980 | fix_needed | planned | canonical | The explicit container-coordinate bug remains supported by current source. The executor must establish the failing registered-tool-to-acceptance regression before implementation or PR publication. |
| #123585 | keep_related | planned | related | Distinct producer and failure mode; preserve the contributor's PR independently of this fix. |
| #92827 | route_security | planned | security_sensitive | Quarantine this item for central OpenClaw security handling without public mutation; it does not block the independent #143980 repair plan. |
| cluster:issue-openclaw-openclaw-143980 | build_fix_artifact | planned | canonical | Produce one new-fix-PR plan for the deterministic executor, conditional on successful pre-fix reproduction and subsequent validation. |

## Needs Human

- none
