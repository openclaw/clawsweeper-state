---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-95840"
mode: "autonomous"
run_id: "32336519158"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32336519158"
head_sha: "3ca46ac6db373015b558de3423b73b0a837dbb3b"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T05:54:45.403Z"
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

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32336519158](https://github.com/openclaw/clawsweeper/actions/runs/32336519158)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/95840

## Summary

Current main deterministically excludes direct OpenAI from cache-TTL eligibility, suppressing both pruning setup and the successful-attempt marker. A narrow provider-owned repair is ready, but this worker could not edit or run Vitest: the checkout is read-only, dependencies are absent, and Corepack cannot create its cache. The mandatory sibling Codex-source inspection is also unavailable because ../codex is absent and cannot be cloned in this environment.

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
| #95840 | fix_needed | blocked | canonical | Implementation is blocked only by the read-only worker environment and unavailable mandatory ../codex source; the narrow fix artifact is ready for an executor with a writable checkout. |
| #95610 | keep_related | planned | related | Both concern OpenAI cache efficiency, but they retain separate fixes and validation paths. |
| cluster:issue-openclaw-openclaw-95840 | build_fix_artifact | planned | canonical | Create one narrow credited fix PR from clawsweeper/issue-openclaw-openclaw-95840 after reproducing and validating in a writable checkout. |

## Needs Human

- none
