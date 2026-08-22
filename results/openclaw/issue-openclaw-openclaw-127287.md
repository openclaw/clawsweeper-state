---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-127287"
mode: "autonomous"
run_id: "32562662108"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32562662108"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-22T09:10:19.526Z"
canonical: "https://github.com/openclaw/openclaw/issues/127287"
canonical_issue: "https://github.com/openclaw/openclaw/issues/127287"
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

# issue-openclaw-openclaw-127287

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32562662108](https://github.com/openclaw/clawsweeper/actions/runs/32562662108)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/127287

## Summary

No code or GitHub mutation was made. The current checkout is clean at 36d50b20098e8e45bc7a97b020d9755ab7a27414; provider-local header construction still hard-codes copilot-developer-cli. Implementation is blocked because the required sibling ../codex source checkout is absent and this worker has a read-only filesystem, so it cannot satisfy the repository’s mandatory Codex-source gate or create and validate the required branch.

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
| #127287 | fix_needed | blocked | canonical | The hydrated open issue is the canonical bug report and the repair shape is narrow, but implementation cannot proceed without the mandatory direct Codex-source inspection and a writable checkout. |
| cluster:issue-openclaw-openclaw-127287 | build_fix_artifact | planned | canonical | Prepared executable repair plan for a writable executor with the mandatory Codex checkout. |

## Needs Human

- none
