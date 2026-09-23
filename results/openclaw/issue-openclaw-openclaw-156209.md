---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-156209"
mode: "plan"
run_id: "35828587835"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35828587835"
head_sha: "06fcd2f2b8572d65ed8cf67f95361b9ab0a14f2c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-23T06:52:22.652Z"
canonical: "#156209"
canonical_issue: "#156209"
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

# issue-openclaw-openclaw-156209

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35828587835](https://github.com/openclaw/clawsweeper/actions/runs/35828587835)

Workflow conclusion: success

Worker result: planned

Canonical: #156209

## Summary

Plan a narrow importer repair. Source inspection confirms the omission at the preflight main SHA. No files or GitHub state changed; runtime reproduction, tests, and review remain pending.

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
| #156209 | fix_needed | planned | canonical | Repair the existing import contract with type: concept.type in the output frontmatter. Preserve existing metadata, identifiers, links, filesystem guards, and lifecycle behavior. Reproduce on current main before implementing. |
| #156213 | keep_related | planned | related | The importer fix does not establish whole-vault OKF conformance. Keep the broader product request separate and open. |

## Needs Human

- none
