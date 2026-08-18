---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125792"
mode: "autonomous"
run_id: "32142439620"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32142439620"
head_sha: "647503ec44b8e777dd172adf974a945367da0d19"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-18T13:38:11.599Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32142439620](https://github.com/openclaw/clawsweeper/actions/runs/32142439620)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/125792

## Summary

Confirmed on current main: the managed preset renders chat ctx-size but omits it for the embedding model. A narrow credited fix PR is planned, but this read-only checkout cannot install dependencies, edit, or validate a branch.

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
| #125792 | fix_needed | planned | canonical | The plugin-owned renderer should set an embedding-only 2048 context cap while retaining the independent configured chat context. |
| cluster:issue-openclaw-openclaw-125792 | build_fix_artifact | planned |  | Artifact is narrow and preserves chat behavior; the executor must inspect the pinned server contract before editing. |
| cluster:issue-openclaw-openclaw-125792 | open_fix_pr | blocked | canonical | Provision a writable checkout with dependencies and the required Codex sibling, then apply and validate the artifact before opening the PR. |

## Needs Human

- none
