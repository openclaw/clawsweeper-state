---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-128821"
mode: "autonomous"
run_id: "32767847147"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32767847147"
head_sha: "ce250708c1ea10228f29fc5740cba95460dcdf74"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-24T20:48:13.651Z"
canonical: "#128821"
canonical_issue: "#128821"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# issue-openclaw-openclaw-128821

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32767847147](https://github.com/openclaw/clawsweeper/actions/runs/32767847147)

Workflow conclusion: success

Worker result: blocked

Canonical: #128821

## Summary

Source inspection identifies the nested-help metadata gap, but implementation is blocked by the read-only checkout: no dependencies/build output and no required sibling ../codex source checkout.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #128821 | fix_needed | blocked | canonical | A narrow canonical repair is indicated, but the required implementation and validation environment is unavailable. |

## Needs Human

- Provide a writable, dependency-ready checkout with built package output and sibling `../codex` so the repair can be implemented and validated.
