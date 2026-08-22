---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-124689"
mode: "autonomous"
run_id: "32550867263"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32550867263"
head_sha: "9a09faa3da3b94957e021a98fd00bb5061bff904"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-08-22T05:11:42.197Z"
canonical: "#124689"
canonical_issue: "#124689"
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

# issue-openclaw-openclaw-124689

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32550867263](https://github.com/openclaw/clawsweeper/actions/runs/32550867263)

Workflow conclusion: success

Worker result: blocked

Canonical: #124689

## Summary

Confirmed #124689 is a narrow non-security probe-selection bug on current main. `selectProbeModel` falls back to the first `ollama-cloud` catalog row without lifecycle filtering, so the ordered deprecated `kimi-k2.5` row wins even when a usable Cloud row follows; explicit configured candidates already bypass that fallback. The worker cannot modify the read-only checkout, install dependencies, run pnpm, create the required branch/PR, or complete the mandatory direct ../codex source inspection because that source checkout is absent.

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
| #120752 | keep_related | planned | related | Adjacent Control UI symptom family, but different owner boundary and repair. |
| #124689 | fix_needed | blocked | canonical | A narrow source-and-test repair is specified, but this worker has no writable filesystem or dependency cache. |
| #124689 | build_fix_artifact | planned | canonical | Ready for deterministic application in a writable checkout. |
| #124689 | open_fix_pr | blocked | canonical | Apply the attached artifact from the requested ClawSweeper branch in a writable runner. |

## Needs Human

- none
