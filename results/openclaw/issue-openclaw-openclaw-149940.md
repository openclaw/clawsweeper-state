---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-149940"
mode: "plan"
run_id: "35085536451"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35085536451"
head_sha: "02cd682921ca0c796212319c1a28c9b1e4bfac58"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-16T10:36:31.408Z"
canonical: "#149940"
canonical_issue: "#149940"
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

# issue-openclaw-openclaw-149940

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35085536451](https://github.com/openclaw/clawsweeper/actions/runs/35085536451)

Workflow conclusion: success

Worker result: planned

Canonical: #149940

## Summary

Plan a narrow prompt repair for #149940. The checkout matches preflight main 2ef2537cd0392bc825038936f244ecfc94457810 and retains the reported instruction gap. Hydrated open PRs address distinct mechanisms. No files or GitHub state changed; runner reproduction and validation remain pending.

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
| #149940 | build_fix_artifact | planned | canonical | A distinct follow-up to the merged default/custom prompt fix remains appropriate. Recheck matching contributor work before implementation and require failing runner regressions before changing production code. |
| #146503 | keep_related | planned | related | Tool availability and tool-absent prompt completion are different repair paths. Preserve this contributor PR without a merge recommendation. |
| #149156 | keep_related | planned | related | This broader delivery-policy change does not replace the narrowly authorized prompt repair. |
| #149549 | keep_closed | skipped | related | Historical implementation context; preserve its contributor attribution. |
| #147092 | keep_closed | skipped | related | Historical context for the existing fallback contract; no closure action applies. |

## Needs Human

- none
