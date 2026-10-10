---
repo: "openclaw/openclaw-windows-packaging"
cluster_id: "issue-openclaw-openclaw-windows-packaging-167"
mode: "plan"
run_id: "38059817602"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/38059817602"
head_sha: "50838a397382cbecd0de943145ea859e435f053b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-10-10T14:32:38.085Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/38059817602](https://github.com/openclaw/clawsweeper/actions/runs/38059817602)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw-windows-packaging/issues/167

## Summary

Plan a narrow managed byte-copy repair for #167. The clean checkout matches preflight main 4215593cd5abd4cd1f189e245dd64e7372415119 and still uses File.Copy in SessionNativeStager.CopyDirectory. No files or GitHub state changed. Windows regression, quality, Release, architecture, and installed-MSIX proof remain unrun.

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
| https://github.com/openclaw/openclaw-windows-packaging/issues/167 | build_fix_artifact | planned | canonical | The existing stager owns the defect and offers a focused repair without configuration, protocol, runtime, or security-boundary changes. |

## Needs Human

- none
