---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-165476"
mode: "autonomous"
run_id: "37290698037"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37290698037"
head_sha: "7b767cc6bf7ed7176a94b1e8732b478ea49012d2"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-10-05T09:52:01.086Z"
canonical: "https://github.com/openclaw/openclaw/issues/165476"
canonical_issue: "https://github.com/openclaw/openclaw/issues/165476"
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

# issue-openclaw-openclaw-165476

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37290698037](https://github.com/openclaw/clawsweeper/actions/runs/37290698037)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/165476

## Summary

Reproduced incorrect embedding routing on preflight main 13c1d87f6df4ad77a7afa0ebe631c8801997a69e. Prepared a narrow fix artifact. Local implementation and validation remain blocked by the read-only host; no files or GitHub state changed.

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
| #165476 | fix_needed | planned | canonical | Native subscription chat routing incorrectly supplies the embedding destination. The repair is ordinary bug work with no demonstrated trust-boundary bypass. Implementation requires the writable executor. |
| #160878 | keep_closed | skipped | related | Historical related auth repair, not a candidate for this endpoint-selection defect. |
| cluster:issue-openclaw-openclaw-165476 | build_fix_artifact | planned |  | A focused new fix PR is authorized. Reuse clawsweeper/issue-openclaw-openclaw-165476 and any existing implementation PR after refreshing live state. |

## Needs Human

- none
