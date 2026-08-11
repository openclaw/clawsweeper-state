---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-120247"
mode: "autonomous"
run_id: "31481195601"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31481195601"
head_sha: "16e2959d529b25fdb5351c07ee9942ede27d6209"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-11T10:20:38.258Z"
canonical: "#120247"
canonical_issue: "#120228"
canonical_pr: "#120247"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-120247

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31481195601](https://github.com/openclaw/clawsweeper/actions/runs/31481195601)

Workflow conclusion: success

Worker result: planned

Canonical: #120247

## Summary

Keep #120247 open as the canonical repair. Rebase and repair its exact head: the current one-row composer reserves fixed control widths beside the editor, while preflight shows android-ktlint and ci-gate failing.

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
| #120228 | keep_related | planned | related | The issue reports the defect and locale-sensitive reproduction; closure is forbidden and the active PR should absorb that evidence. |
| #120247 | fix_needed | planned | canonical | The focused two-row approach is appropriate, but the branch requires rebase, formatting repair, exact-head validation, and a fresh review before it can be considered merge-ready. |
| #120247 | build_fix_artifact | planned | canonical | A same-repository writable branch exists, so repair the adopted PR rather than create a replacement. |

## Needs Human

- none
