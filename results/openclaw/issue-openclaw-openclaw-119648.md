---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119648"
mode: "plan"
run_id: "31023438615"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31023438615"
head_sha: "2c3ad8f46c9a9ddd3c0e2c0c961bdbf397d14514"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-05T16:13:45.077Z"
canonical: "https://github.com/openclaw/openclaw/issues/119648"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119648"
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

# issue-openclaw-openclaw-119648

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31023438615](https://github.com/openclaw/clawsweeper/actions/runs/31023438615)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/119648

## Summary

#119648 is an open, reproducible non-security lifecycle bug on current main. Plan a narrow credited fix PR that removes unscoped marker-owned systemd unit adoption while retaining canonical and explicit unit resolution.

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
| #119648 | fix_needed | planned | canonical | The bug is confirmed and bounded. No viable implementation PR is hydrated, so the canonical issue needs a new narrow fix path rather than closure or merge. |
| cluster:issue-openclaw-openclaw-119648 | build_fix_artifact | planned | canonical | A focused new fix PR is appropriate; no configuration, security-boundary, changelog, or broad Doctor-flow rewrite is required. |

## Needs Human

- none
