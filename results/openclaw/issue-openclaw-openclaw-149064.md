---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-149064"
mode: "plan"
run_id: "34978528315"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34978528315"
head_sha: "1ed7bd4e13fb03334798e4d027ba3383ac9e5f01"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-15T14:05:07.893Z"
canonical: "#149064"
canonical_issue: "#149064"
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

# issue-openclaw-openclaw-149064

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34978528315](https://github.com/openclaw/clawsweeper/actions/runs/34978528315)

Workflow conclusion: success

Worker result: planned

Canonical: #149064

## Summary

Confirmed the reported source defect at preflight main 1260863645b989f6e33a788489f69d8bf29bc87b. Plan one Discord-owned fix PR for #149064. No files or GitHub state changed; regression tests and live CLI validation remain pending.

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
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #149064 | fix_needed | planned | canonical | Restore the documented exact-message behavior within the existing read action and authorization owner. |
| #81232 | keep_related | planned | related | Related exact-message retrieval need, but restoring an existing CLI flag does not fulfill the requested new public capability. |
| #81243 | keep_closed | skipped | related | Historical feature proposal, not an active repair candidate for the existing read flag. |
| #81272 | keep_closed | skipped | related | Historical feature proposal; no closure or replacement action is needed. |
| #144914 | route_security | planned | security_sensitive | Route only this item to central OpenClaw security handling, without public mutations or incorporating its changes into #149064. |

## Needs Human

- none
