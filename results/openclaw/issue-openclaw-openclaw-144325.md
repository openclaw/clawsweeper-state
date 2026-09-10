---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-144325"
mode: "autonomous"
run_id: "34520663217"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34520663217"
head_sha: "c9a57f70fdab4c412fb73c769d2ebe2bb6492494"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-10T19:43:16.433Z"
canonical: "https://github.com/openclaw/openclaw/issues/144325"
canonical_issue: "https://github.com/openclaw/openclaw/issues/144325"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-144325

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34520663217](https://github.com/openclaw/clawsweeper/actions/runs/34520663217)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/144325

## Summary

Source inspection supports a narrow Doctor migration-order repair at preflight main bda26b81055406d1b7640895f53033ca4bd0cc0a. Implementation and executable reproduction are blocked by the read-only host and absent dependencies. No files or GitHub state changed; an executor-ready repair plan follows.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #144325 | fix_needed | planned | canonical | Keep this issue as the canonical bug. Stabilize migration owner sequencing within Doctor after selection and activation filtering, without altering global precedence or relaxing immutable-plan checks. |
| #142681 | keep_related | planned | related | Related update-recovery symptoms, but the remaining partial-clone import work is not covered by alias-order normalization. |
| #136045 | keep_closed | skipped | related | Historical merged work; no closure or branch action. |
| #143138 | keep_closed | skipped | related | Historical merged work addressing a different refusal mechanism. |
| cluster:issue-openclaw-openclaw-144325 | build_fix_artifact | planned | canonical | A narrow new-fix path is supported by source evidence. The executor must establish the requested failing regression before editing production code. |
| cluster:issue-openclaw-openclaw-144325 | open_fix_pr | blocked | canonical | Implementation and publication remain blocked until a writable executor reproduces the defect, applies the narrow fix, completes validation and review, and captures isolated CLI recovery. |

## Needs Human

- none
