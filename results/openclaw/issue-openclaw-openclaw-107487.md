---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-107487"
mode: "autonomous"
run_id: "33322385054"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33322385054"
head_sha: "c179a466606f782ae73404357a0c94e6bead5807"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-30T16:39:59.572Z"
canonical: "https://github.com/openclaw/openclaw/issues/107487"
canonical_issue: "https://github.com/openclaw/openclaw/issues/107487"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-107487

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33322385054](https://github.com/openclaw/clawsweeper/actions/runs/33322385054)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/107487

## Summary

Current main retains the reported defect: `/acp close` omits `discardPersistentState`, while ACPX fresh preparation only masks the persisted record in memory and loses that state after restart. A narrow credited fix PR remains appropriate, but this read-only checkout lacks both the pinned `acpx@0.13.1` source required to confirm its durable record contract and the required sibling `../codex` checkout; dependencies and validation cannot run.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| issue_implementation_status_comment | updated | #107487 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #107487 | fix_needed | blocked | canonical | Implementation is blocked pending a writable checkout with installed `acpx@0.13.1` source for direct contract inspection, the required sibling Codex checkout, and runnable validation. |
| #109270 | keep_closed | skipped | related | Historical adjacent context only; no mutation is valid. |
| #111628 | keep_closed | skipped | superseded | Already closed; retain as credited historical evidence only. |
| cluster:issue-openclaw-openclaw-107487 | build_fix_artifact | blocked | canonical | Artifact is ready, but exact durable-record mutation and validation remain blocked on unavailable upstream source and read-only dependencies. |

## Needs Human

- none
