---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-142789"
mode: "autonomous"
run_id: "37757383043"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37757383043"
head_sha: "dbd42faaac5974121b30866352ac0c3718ce1ed9"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-08T10:14:36.027Z"
canonical: "https://github.com/openclaw/openclaw/issues/142789"
canonical_issue: "https://github.com/openclaw/openclaw/issues/142789"
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

# issue-openclaw-openclaw-142789

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37757383043](https://github.com/openclaw/clawsweeper/actions/runs/37757383043)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/142789

## Summary

The terminal ownership defect remains source-evident on preflight main. A narrow fix artifact is ready for the executor, but implementation and runtime reproduction are blocked by this read-only host, absent dependencies, and Corepack EROFS. No files or GitHub state were changed.

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
| #142789 | fix_needed | planned | canonical | Repair existing session-qualified admission through the shared owner resolver. Preserve the issue until implementation and required proof complete. |
| #142964 | keep_closed | skipped | related | Historical evidence and contributor credit only; this closed PR cannot own the active implementation or receive another closure. |
| cluster:issue-openclaw-openclaw-142789 | build_fix_artifact | planned |  | The executor can apply this narrow plan on a writable prepared host. Establish the failing production-boundary regression before editing; PR publication remains contingent on reproduction, repair, review, and validation. |

## Needs Human

- none
