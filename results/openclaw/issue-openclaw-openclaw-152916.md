---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-152916"
mode: "autonomous"
run_id: "35447462794"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35447462794"
head_sha: "bfc6b9dd78e3b0e25415ed1c87c1be0cefd2ba31"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-19T14:37:45.832Z"
canonical: "https://github.com/openclaw/openclaw/issues/152916"
canonical_issue: "https://github.com/openclaw/openclaw/issues/152916"
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

# issue-openclaw-openclaw-152916

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35447462794](https://github.com/openclaw/clawsweeper/actions/runs/35447462794)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/152916

## Summary

Confirmed the classifier defect on preflight main 5e825a7bb8482e8278c3e83d5f96ce31ba0317d4. A narrow fix is planned; implementation and required runner regression are blocked by this session's read-only filesystem and missing target dependencies. No files or GitHub state changed.

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
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #152916 | fix_needed | planned | canonical | The trailing documentation link defeats the existing empty-scratch contract. Repair recognition narrowly without changing scheduling, storage or provider retry behavior. |
| #85416 | keep_closed | skipped | related | Historical context only; it does not fix the current scratch classifier. |
| #113131 | keep_closed | skipped | related | Preserve the intentional retirement; do not restore file reads or the obsolete repair subsystem. |
| cluster:issue-openclaw-openclaw-152916 | build_fix_artifact | planned |  | A concrete fix plan is available without further maintainer judgment. Reuse clawsweeper/issue-openclaw-openclaw-152916 and establish the failing runner regression before implementing. |

## Needs Human

- none
