---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-113326"
mode: "autonomous"
run_id: "32354704110"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32354704110"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T09:50:40.145Z"
canonical: "https://github.com/openclaw/openclaw/issues/113326"
canonical_issue: "https://github.com/openclaw/openclaw/issues/113326"
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

# issue-openclaw-openclaw-113326

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32354704110](https://github.com/openclaw/clawsweeper/actions/runs/32354704110)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/113326

## Summary

Confirmed a narrow current-main bug: `--device-code` resolves to the OpenAI device-code method, but the command rejects non-TTY stdin before the provider can run. A fix artifact is ready; this read-only worker cannot edit, validate with pnpm, or satisfy the required direct sibling Codex-source inspection because `../codex` is absent.

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
| #113326 | keep_canonical | planned | canonical | Canonical, reproducible report for the non-TTY OpenAI device-code gate. |
| #100067 | keep_related | planned | related | Related authentication area, distinct root cause and maintainer decision. |
| cluster:issue-openclaw-openclaw-113326 | fix_needed | blocked | canonical | The repair is narrow and non-security, but implementation and validation are blocked by the worker environment. |
| cluster:issue-openclaw-openclaw-113326 | build_fix_artifact | planned | canonical | Open one narrow fix PR once the executor has a writable checkout, sibling Codex source, and package-manager cache. |

## Needs Human

- none
