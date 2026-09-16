---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-149940"
mode: "autonomous"
run_id: "35080708184"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35080708184"
head_sha: "02cd682921ca0c796212319c1a28c9b1e4bfac58"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-16T10:24:32.560Z"
canonical: "https://github.com/openclaw/openclaw/issues/149940"
canonical_issue: "https://github.com/openclaw/openclaw/issues/149940"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-149940

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35080708184](https://github.com/openclaw/clawsweeper/actions/runs/35080708184)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/149940

## Summary

The prompt gap remains in the inspected checkout. A narrow fix artifact is prepared, but implementation and regression validation are blocked by the read-only host and missing dependencies. No files or GitHub state changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #149940 | fix_needed | planned | canonical | Complete existing prompt guidance without changing delivery authorization. Refresh issue and matching PR state before implementation or publication. |
| #146503 | keep_related | planned | related | Separate tool-availability work; no repair, replacement, or merge is proposed in this cluster. |
| #149156 | keep_related | planned | related | Its delivery-policy scope and unresolved findings remain outside this prompt-only repair. It is not a canonical fix for #149940. |
| #147092 | keep_closed | skipped | related | Historical evidence only. |
| #149549 | keep_closed | skipped | related | Preserve this merged contribution as the foundation for the remaining consumer fix. |
| cluster:issue-openclaw-openclaw-149940 | build_fix_artifact | planned | canonical | The remaining prompt defect supports a narrow non-security fix artifact. |
| cluster:issue-openclaw-openclaw-149940 | open_fix_pr | blocked | canonical | Blocked until the executor reproduces the missing guidance through the runner, implements and validates the patch in a writable checkout, and refreshes matching PR state. |

## Needs Human

- none
