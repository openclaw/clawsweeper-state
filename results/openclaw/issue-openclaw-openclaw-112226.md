---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-112226"
mode: "autonomous"
run_id: "30682961268"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30682961268"
head_sha: "8e620fc4fb3fe04761a8b0245b9e89cb553ebb5a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-01T04:07:02.717Z"
canonical: "https://github.com/openclaw/openclaw/issues/112226"
canonical_issue: "https://github.com/openclaw/openclaw/issues/112226"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-112226

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30682961268](https://github.com/openclaw/clawsweeper/actions/runs/30682961268)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/112226

## Summary

Current main at e3b069270c8c52f7436d6078b7f76bb39fd98382 still leaves the reported `.credentials.json` ENOENT body outside the shared auth matcher. The safe, narrow repair is to classify only credential-file ENOENT failures as `auth`; the existing fallback owner already advances `auth` failures through configured model candidates. This does not broaden fallback to arbitrary unclassified failures.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 |
| issue_implementation_status_comment | updated | #112226 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #99174 | keep_closed | skipped | related | Already closed and related only; do not mutate or reclassify it as the canonical fix for the credential-file failure. |
| #112226 | keep_canonical | planned | canonical | Open canonical issue with a source-reproducible, non-security provider-auth resilience bug and no hydrated implementation PR. |
| cluster:issue-openclaw-openclaw-112226 | fix_needed | planned | canonical | A focused implementation PR is appropriate and permitted; no close or merge action is requested or allowed. |
| cluster:issue-openclaw-openclaw-112226 | build_fix_artifact | planned | canonical | Construct a new narrow implementation PR from clawsweeper/issue-openclaw-openclaw-112226. |
| cluster:issue-openclaw-openclaw-112226 | open_fix_pr | planned | canonical | Open the generated PR only after the repair contract and validation commands pass. |

## Needs Human

- none
