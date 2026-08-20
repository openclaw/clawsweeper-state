---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-126571"
mode: "autonomous"
run_id: "32343784687"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32343784687"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T07:39:16.558Z"
canonical: "https://github.com/openclaw/openclaw/issues/126571"
canonical_issue: "https://github.com/openclaw/openclaw/issues/126571"
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

# issue-openclaw-openclaw-126571

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32343784687](https://github.com/openclaw/clawsweeper/actions/runs/32343784687)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/126571

## Summary

The narrow repair is identified, but this read-only checkout cannot verify or create it: preflight main 16bec3c7272887531b27137435738a3de4f8de90 is absent locally, ../codex is absent (a repository hard gate), node_modules is absent, and pnpm cannot initialize its cache on the read-only filesystem. The executor should refresh main, satisfy the Codex-source gate, apply the artifact, and run the listed tests before opening the one credited PR.

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
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #114964 | keep_independent | planned | independent | Independent Doctor migration defect. |
| #125578 | keep_independent | planned | independent | Independent Gateway-startup policy report. |
| #126571 | fix_needed | planned | canonical | Canonical bug; a new narrow fix PR is appropriate. |
| #126572 | keep_closed | skipped | related | Closed historical context; never mutate. |
| cluster:issue-openclaw-openclaw-126571 | build_fix_artifact | planned | canonical | Narrow implementation plan ready for an executor with a writable, current checkout. |
| cluster:issue-openclaw-openclaw-126571 | open_fix_pr | blocked | canonical | Executor must refresh main, obtain dependencies, satisfy the direct Codex-source gate, and validate before opening the PR. |

## Needs Human

- none
