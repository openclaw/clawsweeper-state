---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-110171"
mode: "autonomous"
run_id: "30705707229"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/30705707229"
head_sha: "e9f97b34fd5950884dd6b9ec45f46f4851cf506c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-08-01T15:28:28.851Z"
canonical: "https://github.com/openclaw/openclaw/issues/110171"
canonical_issue: "https://github.com/openclaw/openclaw/issues/110171"
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

# issue-openclaw-openclaw-110171

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/30705707229](https://github.com/openclaw/clawsweeper/actions/runs/30705707229)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/110171

## Summary

Issue #110171 remains valid on current main (9e43844264a736b234e32af5b018da1e4a058c87). The iOS routing parser does not treat `talk.realtime.consultRouting: force-agent-consult` as Gateway-relay-required, and the OpenAI UI override independently selects direct WebRTC. The existing relay already enforces forced consultation, session reuse, and disables autonomous provider responses, so a narrow iOS routing repair is appropriate.

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
| #110171 | fix_needed | planned | canonical | Route the explicit forced-consult policy through the already-supported Gateway relay rather than adding a parallel context or provider-policy path. |
| #71195 | keep_related | planned | related | Both concern realtime Talk, but they have different client owners, reproduction paths, and implementation scope. |
| #91007 | keep_closed | skipped | related | Closed context reference only. |
| cluster:issue-openclaw-openclaw-110171 | build_fix_artifact | planned |  | Create one narrow, credited fix PR from `clawsweeper/issue-openclaw-openclaw-110171`. |

## Needs Human

- none
