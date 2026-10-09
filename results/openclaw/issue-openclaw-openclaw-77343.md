---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-77343"
mode: "autonomous"
run_id: "37998407401"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/37998407401"
head_sha: "277f5a0c51f31a2403a5696eabc2225103735d11"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-10-09T22:23:29.036Z"
canonical: "https://github.com/openclaw/openclaw/issues/77343"
canonical_issue: "https://github.com/openclaw/openclaw/issues/77343"
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

# issue-openclaw-openclaw-77343

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/37998407401](https://github.com/openclaw/clawsweeper/actions/runs/37998407401)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/77343

## Summary

Reproduced both stale-label defects through the script event entry point on checkout main 9449b4e7dc97cd66a0e787db851c44f2a9ee447a. Prepared a narrow three-file fix artifact. Implementation is blocked in this worker by the read-only host; preflight main d331fd73241229029c32b2321c318417842f2bed is unavailable locally. No files or GitHub state changed.

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
| #77343 | fix_needed | planned | canonical | The existing automatic refresh behavior is broken. A new fix PR is appropriate; keep the issue open. |
| #77361 | route_security | planned | security_sensitive | Respect the supplied security routing marker without blocking the unrelated non-security issue implementation. |
| #103702 | keep_closed | skipped | related | Historical context only; no closure or branch repair is appropriate. |
| cluster:issue-openclaw-openclaw-77343 | build_fix_artifact | planned |  | A narrow fix is supported by reproduced behavior and does not require configuration, dependencies, classification-policy changes, or broader permissions. |

## Needs Human

- none
