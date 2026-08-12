---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122615"
mode: "autonomous"
run_id: "31599531990"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31599531990"
head_sha: "ac340908bf694c902f5a673374be1639ef9f220f"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-12T13:13:16.639Z"
canonical: "https://github.com/openclaw/openclaw/issues/122615"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122615"
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

# issue-openclaw-openclaw-122615

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31599531990](https://github.com/openclaw/clawsweeper/actions/runs/31599531990)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/122615

## Summary

Current main fb9a62e9956883c1b0aed5fa742d6e527cb9e86d reproduces the source-level loss: an active requester queue refusal (`runtime_rejected`) becomes an unreasoned dropped steer result, dispatch preserves no reason, and lifecycle persistence replaces it with `sink_unavailable`. The checkout is read-only and has no dependencies; `pnpm install` fails with EROFS creating Corepack cache, so no patch, branch, or test run was possible.

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
| #122615 | fix_needed | blocked | canonical | Implementation is source-proven and narrow, but this worker cannot edit the read-only checkout or install dependencies to run the mandatory pre-/post-fix regression. |
| #92433 | keep_related | planned | related | Keep open: the reports share the announce area but have different owner boundaries and no duplicate closeout is authorized. |
| cluster:issue-openclaw-openclaw-122615 | build_fix_artifact | planned | canonical | A fresh writable ClawSweeper branch can apply this narrow owner-boundary repair and validate it. |

## Needs Human

- none
