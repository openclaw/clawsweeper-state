---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-125745"
mode: "autonomous"
run_id: "32128208370"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32128208370"
head_sha: "647503ec44b8e777dd172adf974a945367da0d19"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-18T10:59:14.830Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32128208370](https://github.com/openclaw/clawsweeper/actions/runs/32128208370)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/125745

## Summary

Confirmed current-main bug: direct-credential probes create an isolated auth profile, but invoke the embedded runner in normal prepared-runtime mode; an active Gateway then rebinds the run to its canonical agent directory before auth selection. A narrow repair plan is ready, but this read-only checkout cannot create the required branch or install missing test dependencies, and the mandatory sibling ../codex source checkout is absent.

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
| #125745 | fix_needed | planned | canonical | The issue remains the canonical open bug. The repair is narrow and requires a new credited fix PR, but this worker cannot modify the read-only checkout or validate until dependencies and the mandatory Codex source inspection are available. |
| cluster:issue-openclaw-openclaw-125745 | build_fix_artifact | planned | canonical | Artifact is ready for a writable executor; implementation and validation are blocked only by the current environment. |

## Needs Human

- none
