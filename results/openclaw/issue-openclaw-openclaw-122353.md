---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-122353"
mode: "autonomous"
run_id: "31552289045"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31552289045"
head_sha: "9c7445bdca92d05b5a38317b498d7f41fc19bc2b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-12T01:10:44.608Z"
canonical: "https://github.com/openclaw/openclaw/issues/122353"
canonical_issue: "https://github.com/openclaw/openclaw/issues/122353"
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

# issue-openclaw-openclaw-122353

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31552289045](https://github.com/openclaw/clawsweeper/actions/runs/31552289045)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/122353

## Summary

Current main reproduces #122353: quoted prose causes `extractBalancedJsonPrefix` to return `{here}` before the later valid JSON object. The narrow Normalization Core repair is specified, but this worker checkout is read-only and lacks `tsx`, so no branch delta or validated PR can be produced here.

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
| #122353 | fix_needed | blocked | canonical | Implementation is blocked only by the restricted local checkout; the bug and repair scope are unambiguous. |
| cluster:issue-openclaw-openclaw-122353 | build_fix_artifact | planned | canonical | A single narrow PR can repair the canonical issue once executed in a writable checkout. |

## Needs Human

- none
