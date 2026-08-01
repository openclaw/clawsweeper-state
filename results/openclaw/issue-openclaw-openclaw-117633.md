---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-117633"
mode: "autonomous"
run_id: "30718303671"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30718303671"
head_sha: "7e4d8cb7cee432b87afec79e1fbfa3209c084474"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-01T21:12:01.606Z"
canonical: "https://github.com/openclaw/openclaw/issues/117633"
canonical_issue: "https://github.com/openclaw/openclaw/issues/117633"
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

# issue-openclaw-openclaw-117633

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30718303671](https://github.com/openclaw/clawsweeper/actions/runs/30718303671)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/117633

## Summary

Current main at 813b7975aa48c7b3bda6af03e47c4dfd5bb8b3da still drops the selected ClawHub publisher identity: search-result UI actions pass only `slug`, `skills.detail` accepts and forwards only `slug`, and `skills.install` likewise passes only the bare slug into the lifecycle parser. The lifecycle and ClawHub client already support `ownerHandle`, so this is a narrow existing-behavior repair. Implementation is blocked only because this worker checkout is filesystem read-only; the supplied artifact is ready for the deterministic executor to implement on `clawsweeper/issue-openclaw-openclaw-117633`.

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
| #117633 | fix_needed | blocked | canonical | Narrow bug confirmed on current main, but implementation must be performed by the deterministic executor in a writable checkout. |
| cluster:issue-openclaw-openclaw-117633 | build_fix_artifact | planned | canonical | Create one narrow credited autofix PR from the designated branch after applying the artifact. |

## Needs Human

- none
