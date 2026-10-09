---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-167835"
mode: "autonomous"
run_id: "37947220277"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37947220277"
head_sha: "b078ff01e48a5b18d93089f5e96b07a2e2adccae"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-10-09T14:59:45.448Z"
canonical: "https://github.com/openclaw/openclaw/issues/167835"
canonical_issue: "https://github.com/openclaw/openclaw/issues/167835"
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-167835

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37947220277](https://github.com/openclaw/clawsweeper/actions/runs/37947220277)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/167835

## Summary

Reproduced generation-path persistence on preflight main 8c22de3f1d06a878de0eb5c0531457584d874e82 through the service argument owner using an in-memory Windows filesystem fixture. Prepared a narrow executable fix plan. Implementation is blocked on this read-only host; no files or GitHub state changed, and native Windows validation remains required.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #167835 | fix_needed | planned | canonical | The reported existing behavior remains broken on the pinned main. Fix stable entrypoint selection without changing service authority or supervisor lineage. |
| #1505 | keep_closed | skipped | related | Historical evidence, not an actionable contributor PR or complete fix for this issue. |
| #138934 | keep_related | planned | related | Windows update recovery overlaps the area but is not proven to share the pnpm launcher root cause. |
| #140161 | keep_related | planned | related | Startup timing and supervisor exit behavior require their own investigation. |
| #144739 | keep_independent | planned | independent | Old-driver schema ownership is independent of Windows launcher entrypoint selection. |
| #145252 | keep_related | planned | related | Protected coordination scope is broader than this narrow launcher repair. |
| #161865 | keep_related | planned | related | Package-generation removal overlaps the trigger, but updater worker retention and Linux recovery are not covered by this Windows installation fix. |
| #162785 | keep_related | planned | related | Respawn classification and startup hangs are separate defects; this repair must preserve direct Node invocation and existing lineage checks. |
| cluster:issue-openclaw-openclaw-167835 | build_fix_artifact | planned |  | A focused non-security bug fix is justified and authorized. Prepare one PR on the designated branch; do not merge or close any item. |

## Needs Human

- none
