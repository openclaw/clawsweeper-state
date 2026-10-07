---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-140932"
mode: "autonomous"
run_id: "37675658427"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37675658427"
head_sha: "34cc1aa014a16295779cdca4e336479bad5636ec"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-07T19:56:52.859Z"
canonical: "https://github.com/openclaw/openclaw/issues/140932"
canonical_issue: "https://github.com/openclaw/openclaw/issues/140932"
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

# issue-openclaw-openclaw-140932

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37675658427](https://github.com/openclaw/clawsweeper/actions/runs/37675658427)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/140932

## Summary

Source inspection confirms missing EmbeddingGemma formatting in the checked-out main. Repair artifact prepared; implementation, failing regression, and live CLI validation are blocked by the read-only workspace and absent dependencies. No files or GitHub state changed.

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
| #140932 | fix_needed | planned | canonical | A narrow plugin-owned bug repair is warranted. Executable reproduction and implementation require a writable, dependency-equipped executor; source inspection is not a passing regression or live CLI proof. |
| #147181 | keep_related | planned | related | Distinct feature scope; leave open and exclude configurable query instructions from this repair. |
| #42408 | keep_related | planned | related | Related retrieval symptoms with distinct causes; leave open without expanding this repair. |
| cluster:issue-openclaw-openclaw-140932 | build_fix_artifact | planned |  | Artifact preparation is complete. Implementation and publication remain dependent on successful reproduction, repair, review, and validation in the executor. |

## Needs Human

- none
