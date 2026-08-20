---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-95840"
mode: "autonomous"
run_id: "32339287170"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32339287170"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T06:31:54.021Z"
canonical: "https://github.com/openclaw/openclaw/issues/95840"
canonical_issue: "https://github.com/openclaw/openclaw/issues/95840"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-95840

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32339287170](https://github.com/openclaw/clawsweeper/actions/runs/32339287170)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/95840

## Summary

Current main exposes the provider-owned cache-TTL hook but the OpenAI plugin does not implement it; direct OpenAI therefore falls through to ineligible core defaults and skips both pruning projection and the post-attempt marker. A narrow new-PR artifact is ready, but this read-only worker cannot install dependencies or edit the branch, and the mandatory sibling ../codex source checkout is absent.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #95840 | fix_needed | blocked | canonical | Implementation is blocked only by the immutable worker environment. The executor should use the supplied narrow artifact after provisioning dependencies and the required sibling Codex checkout. |
| #95610 | keep_related | planned | related | Both concern OpenAI cache efficiency but retain separate reproduction paths and fixes. |
| cluster:issue-openclaw-openclaw-95840 | build_fix_artifact | planned | canonical | The provider-owned hook is the established solution and supports a narrow credited fix PR. |

## Needs Human

- none
