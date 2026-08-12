---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122353"
mode: "autonomous"
run_id: "31553240528"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31553240528"
head_sha: "9c7445bdca92d05b5a38317b498d7f41fc19bc2b"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-12T01:26:26.673Z"
canonical: "#122353"
canonical_issue: "#122353"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-122353

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31553240528](https://github.com/openclaw/clawsweeper/actions/runs/31553240528)

Workflow conclusion: success

Worker result: blocked

Canonical: #122353

## Summary

#122353 is a current-main, non-security parser defect. Reproduction returns `{here}` from quoted prose. No change or PR could be produced because this worker filesystem is read-only and the missing test runtime cannot be installed (Corepack EROFS).

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| #122353 | fix_needed | blocked | canonical | The repair requires edits and validation, but the worker has no write access. The working tree remains clean. |

## Needs Human

- none
