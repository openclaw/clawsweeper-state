---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-123318"
mode: "autonomous"
run_id: "32395262716"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32395262716"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T17:22:37.596Z"
canonical: "https://github.com/openclaw/openclaw/issues/123318"
canonical_issue: "https://github.com/openclaw/openclaw/issues/123318"
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

# issue-openclaw-openclaw-123318

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32395262716](https://github.com/openclaw/clawsweeper/actions/runs/32395262716)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/123318

## Summary

#123318 remains the canonical, source-proven stable/beta updater bug on main bbbd70542b4436c7cca1c3b51ea9e06410b5f4dc. The release-channel owner calls `git fetch --all --prune --tags` before resolving and checking out a release tag; Git 2.52 documents `--force` as forcing local-reference overwrite. A narrow `--force` addition, restricted to this existing stable/beta fetch, is the repair path. No code, fixture, branch, PR, label, or GitHub mutation was made: this worker's filesystem is read-only, so it could not create the required disposable Git fixture or edit/validate a branch; the mandatory sibling ../codex checkout is also absent and cannot be cloned under this policy.

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
| #123318 | fix_needed | blocked | canonical | Implementation is blocked only by this read-only worker environment. A writable executor should apply the attached narrow artifact, reproduce before editing, and complete the required validation. |
| cluster:issue-openclaw-openclaw-123318 | build_fix_artifact | planned | canonical | A new narrow fix PR is appropriate; no contributor PR exists to repair or credit. |

## Needs Human

- none
