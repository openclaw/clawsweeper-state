---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-120142"
mode: "autonomous"
run_id: "31148564805"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31148564805"
head_sha: "2eb1787e0d183a84f29e84614b84f228037ba69f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-07T05:21:02.918Z"
canonical: "https://github.com/openclaw/openclaw/issues/120142"
canonical_issue: "https://github.com/openclaw/openclaw/issues/120142"
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

# issue-openclaw-openclaw-120142

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31148564805](https://github.com/openclaw/clawsweeper/actions/runs/31148564805)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/120142

## Summary

Current main f87d8bb7 reproduces the opaque Discord fallback in both native-command consumers. A narrow, non-security fix should retain suppression and delivery behavior while rendering the command name plus only recorded facts. The checkout is read-only, so this is an executable fix artifact for the deterministic PR executor rather than a local branch change.

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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/120150 | clawsweeper/issue-openclaw-openclaw-120142 |  |
| issue_implementation_status_comment | updated | #120142 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #120150 | merge_canonical | ready | fix_pr | issue implementation PR checks are green; merge intentionally blocked for this lane |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #120142 | fix_needed | planned | canonical | Source-reproducible diagnostic bug; no configuration, API, dependency, or security-boundary change is needed. |
| cluster:issue-openclaw-openclaw-120142 | build_fix_artifact | planned | canonical | Create one narrow credited ClawSweeper fix PR. |
| #111870 | keep_independent | planned | independent | Different owner boundary and reproduction path. |
| #116277 | keep_closed | skipped | related | Already closed; not a mutation target. |
| #1221 | keep_closed | skipped | independent | Already closed; not a mutation target. |

## Needs Human

- none
