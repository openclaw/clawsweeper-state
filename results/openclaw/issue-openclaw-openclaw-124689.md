---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-124689"
mode: "autonomous"
run_id: "32563519860"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32563519860"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-22T09:04:51.507Z"
canonical: "https://github.com/openclaw/openclaw/issues/124689"
canonical_issue: "https://github.com/openclaw/openclaw/issues/124689"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-124689

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32563519860](https://github.com/openclaw/clawsweeper/actions/runs/32563519860)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/124689

## Summary

#124689 remains the open canonical bug. Current main selects deprecated ollama-cloud/kimi-k2.5 whenever no exact ollama-cloud candidate exists. A narrow owner-level repair and regression are planned, but this read-only checkout cannot install dependencies or create the required sibling ../codex checkout, so no locally validated PR branch can be produced here.

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
| #124689 | fix_needed | planned | canonical | Source reproduction is clear: an unrelated ollama default leaves ollama-cloud without a direct candidate, and the fallback returns the first catalog row despite its deprecated status. |
| cluster:issue-openclaw-openclaw-124689 | build_fix_artifact | planned |  | Artifact is ready for a writable executor; implementation and validation are blocked only by the supplied checkout environment. |

## Needs Human

- none
