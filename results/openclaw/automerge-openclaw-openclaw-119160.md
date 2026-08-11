---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-119160"
mode: "autonomous"
run_id: "31508354955"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31508354955"
head_sha: "5439582beebe57b7e79dc4e3d7bb44acd9f7d65c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-11T15:47:33.233Z"
canonical: "#119148"
canonical_issue: "#119148"
canonical_pr: "#119160"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-119160

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31508354955](https://github.com/openclaw/clawsweeper/actions/runs/31508354955)

Workflow conclusion: success

Worker result: planned

Canonical: #119148

## Summary

Keep #119148 as the canonical bug report and repair its writable same-repository PR #119160. The hydrated PR is dirty against main dfb47122585ed1faf48a2d8cede7f93f92ac1bd7 despite a passing prior review and CI, so it needs a deterministic rebase plus exact-head validation; merge remains disabled by job policy.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #119148 | keep_canonical | planned | canonical | Canonical root-cause report; closure is disabled until a repaired candidate lands. |
| #119160 | build_fix_artifact | planned | canonical | Repair the existing credited PR rather than replace it; merge is explicitly disabled. |

## Needs Human

- none
