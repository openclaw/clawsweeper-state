---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125792"
mode: "autonomous"
run_id: "32130637873"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32130637873"
head_sha: "647503ec44b8e777dd172adf974a945367da0d19"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-18T11:23:54.142Z"
canonical: "https://github.com/openclaw/openclaw/issues/125792"
canonical_issue: "https://github.com/openclaw/openclaw/issues/125792"
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

# issue-openclaw-openclaw-125792

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32130637873](https://github.com/openclaw/clawsweeper/actions/runs/32130637873)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/125792

## Summary

#125792 is a confirmed canonical bug on current main 7c65bbcee31bd31fa5b46c84f3a3f54c2cc522fb: the embedding preset omits ctx-size and managed preparation overwrites models.ini. A narrow plugin-only fix is planned, but implementation is blocked by the read-only checkout, missing dependencies, unavailable upstream b10357 contract, and the required sibling ../codex checkout being absent.

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
| #125792 | keep_canonical | planned | canonical | Open canonical issue with a reproducible plugin-owned defect; no closure or merge is authorized. |
| cluster:issue-openclaw-openclaw-125792 | fix_needed | blocked | canonical | The repair is narrow and appropriate, but no implementation delta or valid upstream-contract proof can be produced in this environment. |
| cluster:issue-openclaw-openclaw-125792 | build_fix_artifact | planned | canonical | A concrete repair plan exists, but implementation remains blocked in this worker environment. |

## Needs Human

- none
