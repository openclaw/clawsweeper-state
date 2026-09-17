---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-151055"
mode: "autonomous"
run_id: "35259879896"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35259879896"
head_sha: "09f41a00561625480636e67500a70c45b2aec9d1"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-17T19:02:38.898Z"
canonical: "https://github.com/openclaw/openclaw/issues/151055"
canonical_issue: "https://github.com/openclaw/openclaw/issues/151055"
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

# issue-openclaw-openclaw-151055

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35259879896](https://github.com/openclaw/clawsweeper/actions/runs/35259879896)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/151055

## Summary

Current-main source supports the stale provider-config defect. A narrow fix artifact is ready, but implementation and runtime reproduction are blocked by this host's read-only filesystem and missing node_modules. No files or GitHub state changed.

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
| #151055 | fix_needed | blocked | canonical | Implementation requires a writable executor with dependencies. First demonstrate the failing regression on current main; do not publish a PR if reproduction fails. |
| #96534 | keep_related | planned | related | Distinct recovery work; leave open and outside this implementation. |
| #116562 | keep_closed | skipped | related | Historical related work, not a replacement source or canonical fix for #151055. |
| cluster:issue-openclaw-openclaw-151055 | build_fix_artifact | planned | canonical | A narrow existing-behavior repair remains appropriate; artifact preparation is complete, while local implementation and validation remain blocked. |

## Needs Human

- none
