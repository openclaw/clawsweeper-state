---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-98276"
mode: "autonomous"
run_id: "30672941818"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30672941818"
head_sha: "f0f71871e3f98bf1875c6ec6f89d14c75629aa6a"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-07-31T23:43:59.288Z"
canonical: "https://github.com/openclaw/openclaw/issues/98276"
canonical_issue: "https://github.com/openclaw/openclaw/issues/98276"
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

# issue-openclaw-openclaw-98276

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30672941818](https://github.com/openclaw/clawsweeper/actions/runs/30672941818)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/98276

## Summary

Current main at 95e097246b1a9b7f6becd211657ddccca16b749a still packs dist-runtime-build.tar.zst from only dist, dist-runtime, and packages/*/dist, while workspace template discovery requires package-root resources. #98276 remains a narrow, non-security CI artifact defect. Plan a credited new fix PR; #98274 remains a distinct ACP behavior follow-up.

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
| #97916 | keep_closed | skipped | related | Already closed historical context; no mutation is valid. |
| #98274 | keep_related | planned | related | Related downstream symptom family with a distinct root cause and maintainer decision. |
| #98276 | fix_needed | planned | canonical | Current main still reproduces the artifact manifest gap, and the bounded repair is allowed by the job. |
| #98326 | keep_closed | skipped | superseded | Already closed historical contributor PR; no closure or branch mutation is valid. |
| cluster:issue-openclaw-openclaw-98276 | build_fix_artifact | planned | canonical | A focused new fix PR is appropriate and allowed. |

## Needs Human

- none
