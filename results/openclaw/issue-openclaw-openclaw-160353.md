---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-160353"
mode: "autonomous"
run_id: "36407304036"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36407304036"
head_sha: "c1a83a00a73a800f45ff67ef5c7677ba4f17a8da"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-09-28T10:38:47.516Z"
canonical: "https://github.com/openclaw/openclaw/issues/160353"
canonical_issue: "https://github.com/openclaw/openclaw/issues/160353"
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

# issue-openclaw-openclaw-160353

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36407304036](https://github.com/openclaw/clawsweeper/actions/runs/36407304036)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/160353

## Summary

The issue is valid on main at 3903ccc777261db6e71fb840478cd82052ad6386. The IMAP watcher retains every unseen message source before processing. A focused fix PR is warranted; no code or GitHub state was changed in this read-only worker.

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
| #160353 | fix_needed | planned | canonical | Bound per-sweep retention while preserving UID order, cursor advancement, retries, reconnects, and sender authentication. |
| cluster:issue-openclaw-openclaw-160353 | build_fix_artifact | planned |  | Prepare one narrow implementation PR on clawsweeper/issue-openclaw-openclaw-160353. |
| cluster:issue-openclaw-openclaw-160353 | open_fix_pr | planned |  | The job permits a fix PR but forbids merge and issue closure. |

## Needs Human

- none
