---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-126806"
mode: "autonomous"
run_id: "32409040112"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32409040112"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T19:57:52.971Z"
canonical: "https://github.com/openclaw/openclaw/issues/126806"
canonical_issue: "https://github.com/openclaw/openclaw/issues/126806"
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

# issue-openclaw-openclaw-126806

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32409040112](https://github.com/openclaw/clawsweeper/actions/runs/32409040112)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/126806

## Summary

Narrow repair plan is ready, but this read-only checkout cannot install missing test tooling or modify the branch. Current main statically contains the reported destructive metadata recovery and three recovery paths that can overwrite without a persisted clobber snapshot.

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
| #126806 | fix_needed | blocked | canonical | Implementation and required regression validation are blocked by the read-only worker environment and missing local test dependencies; no branch or GitHub mutation was made. |
| cluster:issue-openclaw-openclaw-126806 | build_fix_artifact | planned | canonical | Executor can apply this narrow, source-audited repair on clawsweeper/issue-openclaw-openclaw-126806 once it has a writable checkout and dependencies. |

## Needs Human

- none
