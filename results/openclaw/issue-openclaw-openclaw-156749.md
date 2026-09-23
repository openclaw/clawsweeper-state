---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-156749"
mode: "plan"
run_id: "35925413547"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35925413547"
head_sha: "6500b62dfd4c4efb0e2b821c1e9c427e128febef"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-23T22:57:01.732Z"
canonical: "https://github.com/openclaw/openclaw/issues/156749"
canonical_issue: "https://github.com/openclaw/openclaw/issues/156749"
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

# issue-openclaw-openclaw-156749

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35925413547](https://github.com/openclaw/clawsweeper/actions/runs/35925413547)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/156749

## Summary

Current main still admits a Chrome Web Store URL as an eligible tab. The issue reports that its rejected debugger attachment then makes Target.getTargets fail for the entire inventory. Plan a narrow extension eligibility fix; no code or GitHub state was changed.

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
| https://github.com/openclaw/openclaw/issues/156749 | fix_needed | planned | canonical | Exclude Chrome-known debugger-forbidden pages at the extension tab eligibility owner before publishing inventory, while retaining complete-inventory errors for unknown attachment failures. |
| https://github.com/openclaw/openclaw/issues/116747 | keep_closed | skipped | related | Historical context only. |
| https://github.com/openclaw/openclaw/pull/139275 | keep_closed | skipped | related | Historical implementation context only. |
| https://github.com/openclaw/openclaw/issues/150774 | keep_closed | skipped | related | Historical context only. |

## Needs Human

- none
