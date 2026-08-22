---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-105228"
mode: "autonomous"
run_id: "32579287488"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32579287488"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-22T14:48:03.228Z"
canonical: "https://github.com/openclaw/openclaw/issues/105228"
canonical_issue: "https://github.com/openclaw/openclaw/issues/105228"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-105228

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32579287488](https://github.com/openclaw/clawsweeper/actions/runs/32579287488)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/105228

## Summary

Current main drops the admitted requester AbortSignal before ACP spawn. The narrow repair is viable, but this read-only checkout cannot create the regression, patch, or locally validate the PR branch.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #105228 | fix_needed | planned | canonical | Source reproduction is clear on preflight main: an abort during the awaited Gateway dispatch cannot be observed by the ACP owner, so late registration can retain an already-stopped child. |
| cluster:issue-openclaw-openclaw-105228 | build_fix_artifact | planned |  | Narrow new-fix-PR plan prepared. |
| cluster:issue-openclaw-openclaw-105228 | open_fix_pr | blocked |  | Requires a writable executor to apply the artifact on `clawsweeper/issue-openclaw-openclaw-105228` and run the listed validation. |
| #105346 | keep_closed | skipped | related | Historical context only; no mutation allowed for an already-closed PR. |
| #105766 | keep_closed | skipped | related | Historical context only. |
| #106612 | keep_closed | skipped | independent | Independent historical reference. |
| #108357 | keep_closed | skipped | related | Historical context only. |
| #116406 | keep_closed | skipped | related | Historical context only. |

## Needs Human

- none
