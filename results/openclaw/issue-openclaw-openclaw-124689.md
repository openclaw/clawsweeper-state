---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-124689"
mode: "autonomous"
run_id: "32616645204"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32616645204"
head_sha: "648ad3538d987a05833ed3bcdff1cf1d8961cc48"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-23T04:07:51.656Z"
canonical: "https://github.com/openclaw/openclaw/issues/124689"
canonical_issue: "https://github.com/openclaw/openclaw/issues/124689"
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

# issue-openclaw-openclaw-124689

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32616645204](https://github.com/openclaw/clawsweeper/actions/runs/32616645204)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/124689

## Summary

Current main selects the first requested-provider catalog row for non-Anthropic probes even when it is marked deprecated, so the reported misleading credential guidance remains reproducible by source. A narrow generic fix is planned, but this read-only worker cannot create the required ../codex checkout or install/run dependencies.

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
| #120752 | keep_related | planned | related | Adjacent session-state report; not a duplicate of the provider auth-probe defect. |
| #124689 | fix_needed | blocked | canonical | Implementation is blocked only by this worker environment. The deterministic executor should apply the narrow artifact in a writable checkout with the required Codex sibling source and dependencies. |
| cluster:issue-openclaw-openclaw-124689 | build_fix_artifact | planned | canonical | Create one narrow credited fix PR from clawsweeper/issue-openclaw-openclaw-124689 after rerunning the regression against pre-fix main. |

## Needs Human

- none
