---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-119887"
mode: "autonomous"
run_id: "31092766349"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/31092766349"
head_sha: "480d56953f381b127bdc0b5a7029efeeaa717595"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-08-06T10:29:16.541Z"
canonical: "https://github.com/openclaw/openclaw/issues/119887"
canonical_issue: "https://github.com/openclaw/openclaw/issues/119887"
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

# issue-openclaw-openclaw-119887

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/31092766349](https://github.com/openclaw/clawsweeper/actions/runs/31092766349)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/119887

## Summary

Current main 7321c4424683ee5831f1d5602c403f0c66f51259 still rejects valid archived JSONL with a terminal NUL run before Doctor can rewrite it. A narrow Doctor-only fix is warranted; no security-sensitive signal was found.

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
| https://github.com/openclaw/openclaw/issues/119887 | fix_needed | planned | canonical | Implement the reported Doctor-only recovery while retaining strict parsing and atomic replacement safeguards. |
| https://github.com/openclaw/openclaw/pull/113695 | keep_closed | skipped | related | Already merged; no closure or mutation is valid. |
| cluster:issue-openclaw-openclaw-119887 | build_fix_artifact | planned | canonical | Create one narrow ClawSweeper fix PR from clawsweeper/issue-openclaw-openclaw-119887. |

## Needs Human

- none
