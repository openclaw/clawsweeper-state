---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-20837"
mode: "autonomous"
run_id: "33014527844"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33014527844"
head_sha: "afe976209aa58a5629041b42b66f6ee11b2812a7"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-27T00:08:37.830Z"
canonical: "https://github.com/openclaw/openclaw/issues/20837"
canonical_issue: "https://github.com/openclaw/openclaw/issues/20837"
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

# issue-openclaw-openclaw-20837

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33014527844](https://github.com/openclaw/clawsweeper/actions/runs/33014527844)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/20837

## Summary

#20837 remains a reproducible command-prompt fidelity bug on main 549360bc4261508a59ce6374d31cd2d207fac206. The shared command bundle hardcodes unknown host/OS/architecture and omits normalized channel, account-aware capabilities, shell, and channel actions; /context and /export-session both consume that bundle. No branch or tests could be produced because this checkout is read-only, has no node_modules, pnpm cannot initialize its Corepack cache on the read-only filesystem, and the mandatory sibling ../codex source is absent and cannot be cloned here.

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
| issue_implementation_status_comment | updated | #20837 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #20837 | fix_needed | blocked | canonical | A narrow fix is clear, but this worker cannot write the required branch or run the prescribed local validation. |
| #21271 | keep_closed | skipped | related | Historical source work only; retain attribution without reopening or closing it. |
| cluster:issue-openclaw-openclaw-20837 | build_fix_artifact | blocked | canonical | Artifact is executable in a writable checkout; this worker cannot create the repaired branch. |

## Needs Human

- none
