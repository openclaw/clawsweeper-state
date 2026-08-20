---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-126631"
mode: "autonomous"
run_id: "32357820326"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32357820326"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-20T10:23:56.275Z"
canonical: "https://github.com/openclaw/openclaw/issues/126631"
canonical_issue: "https://github.com/openclaw/openclaw/issues/126631"
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

# issue-openclaw-openclaw-126631

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32357820326](https://github.com/openclaw/clawsweeper/actions/runs/32357820326)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/126631

## Summary

A narrow owner-boundary repair is planned for the writable-sandbox mount target. Current main materializes skills outside the agent workspace, then mounts them at `/workspace/.openclaw/sandbox-skills/skills` without precreating that destination in the writable host workspace; Docker creates the missing destination as root. The executor must first satisfy the repository-required direct `../codex` source inspection gate, unavailable in this read-only checkout.

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
| #126631 | fix_needed | planned | canonical | Canonical open issue with a bounded sandbox-provisioning defect; no implementation PR is hydrated. |
| cluster:issue-openclaw-openclaw-126631 | build_fix_artifact | planned | canonical | Create one credited ClawSweeper PR from `clawsweeper/issue-openclaw-openclaw-126631` after the executor completes the mandatory direct Codex-source check. |

## Needs Human

- none
