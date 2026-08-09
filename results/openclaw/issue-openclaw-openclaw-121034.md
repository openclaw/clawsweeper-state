---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-121034"
mode: "autonomous"
run_id: "31311473720"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31311473720"
head_sha: "80847d16452c774d7c4e94abe2b9cfb6e1319b57"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-09T11:52:45.180Z"
canonical: "https://github.com/openclaw/openclaw/issues/121034"
canonical_issue: "https://github.com/openclaw/openclaw/issues/121034"
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

# issue-openclaw-openclaw-121034

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31311473720](https://github.com/openclaw/clawsweeper/actions/runs/31311473720)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/121034

## Summary

Current main reproduces a plugin-local Claude ACP adapter defect. A narrow two-file fix artifact is ready; this read-only checkout has no dependencies, so no branch, test run, or PR was created here.

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
| #121034 | fix_needed | planned | canonical | A recognized Claude ACP adapter must receive its native Bedrock model/inference-profile ID, not OpenClaw's amazon-bedrock/ qualifier. |
| cluster:issue-openclaw-openclaw-121034 | build_fix_artifact | planned | canonical | Create the narrow credited repair PR from clawsweeper/issue-openclaw-openclaw-121034 after applying and validating the artifact. |

## Needs Human

- none
