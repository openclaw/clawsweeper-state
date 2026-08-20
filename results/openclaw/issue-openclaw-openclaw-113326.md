---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-113326"
mode: "autonomous"
run_id: "32383518241"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32383518241"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-20T16:15:53.890Z"
canonical: "https://github.com/openclaw/openclaw/issues/113326"
canonical_issue: "https://github.com/openclaw/openclaw/issues/113326"
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

# issue-openclaw-openclaw-113326

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32383518241](https://github.com/openclaw/clawsweeper/actions/runs/32383518241)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/113326

## Summary

Current main at 855599d7e940595afd0baad6508f8130d35c1170 unconditionally rejects non-TTY `models auth login` before explicit provider/device-code resolution. A narrow fix path is identified, but this read-only worker cannot edit or validate, and the mandatory sibling `../codex` source checkout is absent so its required contract inspection cannot be completed.

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
| issue_implementation_status_comment | updated | #113326 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #113326 | fix_needed | blocked | canonical | Implementation is appropriate but blocked pending a writable checkout with the required sibling Codex source and runnable dependencies. |
| #100067 | keep_related | planned | related | Related auth area, but not the same root cause or repair scope. |
| #50452 | keep_closed | skipped | related | Already closed; no mutation. |
| #71864 | keep_closed | skipped | related | Already closed; no mutation. |
| #79021 | keep_closed | skipped | related | Already closed; no mutation. |
| cluster:issue-openclaw-openclaw-113326 | build_fix_artifact | blocked | canonical | Ready for a writable executor after the Codex-source gate is satisfied. |

## Needs Human

- none
