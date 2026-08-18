---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125745"
mode: "autonomous"
run_id: "32126281185"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32126281185"
head_sha: "647503ec44b8e777dd172adf974a945367da0d19"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-18T10:29:35.452Z"
canonical: "https://github.com/openclaw/openclaw/issues/125745"
canonical_issue: "https://github.com/openclaw/openclaw/issues/125745"
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

# issue-openclaw-openclaw-125745

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32126281185](https://github.com/openclaw/clawsweeper/actions/runs/32126281185)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/125745

## Summary

#125745 remains the open canonical bug. Current main source shows the isolated probe profile is created in a temporary agent directory, then ordinary prepared-runtime acquisition can rebind the run to the Gateway owner directory. A narrow repair artifact is ready, but this worker cannot implement or validate it: the checkout is read-only and the mandatory sibling ../codex source is absent and cannot be cloned under the sandbox restrictions.

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
| #125745 | fix_needed | blocked | canonical | Implementation is blocked only by the worker environment. The executor must first provide the required ../codex checkout, add the regression before editing, then run the listed focused checks. |
| cluster:issue-openclaw-openclaw-125745 | build_fix_artifact | planned | canonical | A narrow, provider-agnostic repair path is available once the executor has a writable checkout and clears the required Codex-source inspection gate. |

## Needs Human

- none
