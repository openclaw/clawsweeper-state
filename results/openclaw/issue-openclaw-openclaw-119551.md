---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119551"
mode: "autonomous"
run_id: "31106840902"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31106840902"
head_sha: "daf339e6d1d35d6246ffd2bfd3aae5f61342ad32"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-06T14:39:15.156Z"
canonical: "https://github.com/openclaw/openclaw/issues/119551"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119551"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-119551

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31106840902](https://github.com/openclaw/clawsweeper/actions/runs/31106840902)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/119551

## Summary

Current main reproduces #119551: configured ACP bindings omit the owning agent’s explicit primary model and explicit-selection provenance, and reuse sessions after that configured model changes. The narrow two-file repair is defined, but this checkout is read-only and lacks dependencies, so no branch or validated PR can be produced here.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/119968 | clawsweeper/issue-openclaw-openclaw-119551 |  |
| issue_implementation_status_comment | updated | #119551 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #119968 | merge_canonical | ready | fix_pr | issue implementation PR checks are green; merge intentionally blocked for this lane |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #106008 | keep_related | planned | related | Keep open as a separate ACP startup-model follow-up. |
| #119551 | fix_needed | planned | canonical | A narrow canonical repair PR is required; no viable open candidate PR exists. |
| #119599 | keep_closed | skipped | superseded | Already closed; retain only as credited historical evidence. |
| cluster:issue-openclaw-openclaw-119551 | build_fix_artifact | planned | canonical | Artifact is sufficient for the executor to create one narrow credited fix PR. |
| cluster:issue-openclaw-openclaw-119551 | open_fix_pr | blocked | canonical | Apply the artifact in a writable checkout with dependencies, then open/update clawsweeper/issue-openclaw-openclaw-119551 and apply the required ClawSweeper labels. |

## Needs Human

- none
