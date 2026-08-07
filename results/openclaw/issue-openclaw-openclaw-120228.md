---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120228"
mode: "autonomous"
run_id: "31183768985"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31183768985"
head_sha: "f6f6bfca7d65aa54eec9daa82ab84cda9ad6e0e8"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-07T13:49:42.002Z"
canonical: "https://github.com/openclaw/openclaw/issues/120228"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120228"
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

# issue-openclaw-openclaw-120228

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31183768985](https://github.com/openclaw/clawsweeper/actions/runs/31183768985)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/120228

## Summary

#120228 is a real current-main Android default-path layout regression. A narrow credited fix PR should separate non-submission actions from the editor row and add a 360dp Compose layout regression test.

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
| #120228 | keep_canonical | planned | canonical | Open canonical bug; no hydrated implementation PR exists, and the current default Android layout structurally reproduces the reported narrow editor. |
| cluster:issue-openclaw-openclaw-120228 | fix_needed | planned | canonical | A focused owner-boundary UI repair is safe to automate; no config, storage, protocol, or security boundary changes are needed. |
| cluster:issue-openclaw-openclaw-120228 | build_fix_artifact | planned | canonical | Artifact supplies a narrow new-PR implementation and proof plan. |

## Needs Human

- none
