---
repo: "openclaw/openclaw-windows-packaging"
cluster_id: "issue-openclaw-openclaw-windows-packaging-167"
mode: "plan"
run_id: "38012072874"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/38012072874"
head_sha: "43e96c4fe318318af9e068f50b5e035f9221eae6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-10-10T01:47:40.430Z"
canonical: "https://github.com/openclaw/openclaw-windows-packaging/issues/167"
canonical_issue: "https://github.com/openclaw/openclaw-windows-packaging/issues/167"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-windows-packaging-167

Repo: openclaw/openclaw-windows-packaging

Run: [https://github.com/openclaw/clawsweeper/actions/runs/38012072874](https://github.com/openclaw/clawsweeper/actions/runs/38012072874)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw-windows-packaging/issues/167

## Summary

The narrow staging repair remains viable on preflight main 4215593cd5abd4cd1f189e245dd64e7372415119. SessionNativeStager still uses File.Copy. Return a fix plan for the executor; no files or GitHub state changed. Windows reproduction and implementation validation remain unrun.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| https://github.com/openclaw/openclaw-windows-packaging/issues/167 | fix_needed | planned | canonical | Replace metadata-preserving copying inside the existing staging owner with byte streaming into fresh agent-owned files. Keep the issue open; closure and merge are prohibited. |

## Needs Human

- none
