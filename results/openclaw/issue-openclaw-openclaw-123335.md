---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-123335"
mode: "autonomous"
run_id: "33299277767"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33299277767"
head_sha: "fa535d54a032862b022147a7cba4eaa3bdeb4a7b"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-30T07:43:30.840Z"
canonical: "https://github.com/openclaw/openclaw/issues/123335"
canonical_issue: "https://github.com/openclaw/openclaw/issues/123335"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-123335

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33299277767](https://github.com/openclaw/clawsweeper/actions/runs/33299277767)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/123335

## Summary

Planned a narrow CLI startup-policy repair for #123335. Current main still scaffolds `plugin:build` to run `openclaw plugins build`, whose default startup path invokes the operator config guard. Preserve the existing published-CLI dependency choice; exempt only local plugin authoring commands from that guard.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #123335 | fix_needed | planned | canonical | The defect is an incorrect core startup-policy classification, not generated package-version metadata. |
| #98484 | keep_closed | skipped | independent | Already closed; no mutation. |
| #98583 | keep_closed | skipped | independent | Already closed; no mutation. |
| #107021 | keep_closed | skipped | independent | Already closed; no mutation. |
| #114482 | keep_closed | skipped | related | Already closed; no mutation. |
| cluster:issue-openclaw-openclaw-123335 | build_fix_artifact | planned |  | A small new fix PR is appropriate; no merge or closure is permitted by this job. |

## Needs Human

- none
