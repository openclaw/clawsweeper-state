---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-150142"
mode: "autonomous"
run_id: "35118860149"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35118860149"
head_sha: "f48f1cee58c5ac867114cc77fb088b172aa4e9a9"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-16T17:19:24.730Z"
canonical: "https://github.com/openclaw/openclaw/issues/150142"
canonical_issue: "https://github.com/openclaw/openclaw/issues/150142"
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

# issue-openclaw-openclaw-150142

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35118860149](https://github.com/openclaw/clawsweeper/actions/runs/35118860149)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/150142

## Summary

Reproduced the caption defects through production-generated scripts on preflight main ca086327834a8bef1690ab5437ba39c5887745be. Prepared a narrow fix plan; implementation is blocked by the read-only host. No files or GitHub state changed. Targeted tests, review, and real Meet proof remain outstanding.

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
| #150142 | fix_needed | blocked | canonical | The bug is reproduced and the repair scope is clear. Local implementation is blocked by the enforced read-only filesystem; dependencies are also absent. Continue through the writable executor using the cluster fix artifact. |
| #146076 | keep_related | planned | related | Preserve this useful contributor PR as a separate repair. Closing and merging are outside this job's authority. |
| cluster:issue-openclaw-openclaw-150142 | build_fix_artifact | planned | canonical | A narrow new fix PR is appropriate. The artifact can proceed independently of the worker host's implementation restriction. |

## Needs Human

- none
