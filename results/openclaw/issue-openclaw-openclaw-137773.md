---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-137773"
mode: "autonomous"
run_id: "33827269826"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33827269826"
head_sha: "6f229a508dd718a406651e1b3744a5c02617265e"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-04T02:46:51.006Z"
canonical: "https://github.com/openclaw/openclaw/issues/137773"
canonical_issue: "https://github.com/openclaw/openclaw/issues/137773"
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

# issue-openclaw-openclaw-137773

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33827269826](https://github.com/openclaw/clawsweeper/actions/runs/33827269826)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/137773

## Summary

#137773 is a reproducible, canonical Docker ownership defect. Current main creates /home/node/.cache as root in the browser-install layer before USER node; only its ms-playwright child is later chowned. A narrow new fix PR should create the cache parent as node-owned and extend the existing Dockerfile contract test. This worker could not implement or validate it because the checkout is read-only, dependencies cannot install (EROFS), Docker daemon access is denied, and ../codex cannot be fetched for the repository-required direct Codex-source gate.

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
| #137211 | keep_related | planned | related | Adjacent cache-related work, but a distinct root cause and runtime surface. |
| #137773 | fix_needed | blocked | canonical | Implementation is blocked only by worker-environment restrictions; the deterministic executor should apply the narrow artifact in a writable checkout with Docker access. |
| cluster:issue-openclaw-openclaw-137773 | build_fix_artifact | planned | canonical | Narrow, non-security repair artifact for a new credited ClawSweeper PR. |

## Needs Human

- none
