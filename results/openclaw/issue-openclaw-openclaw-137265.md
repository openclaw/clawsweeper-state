---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-137265"
mode: "plan"
run_id: "35311113499"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/35311113499"
head_sha: "f3b7e8dbb5d7735202c46c94043a641f26a15f56"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-09-18T06:12:54.829Z"
canonical: "#137265"
canonical_issue: "#137265"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-137265

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/35311113499](https://github.com/openclaw/clawsweeper/actions/runs/35311113499)

Workflow conclusion: success

Worker result: planned

Canonical: #137265

## Summary

Plan a narrow session-text extraction fix. The clean checkout matches preflight main 4c2cf51e120484977831ecd89960bcfce1b8255d and still drops input_text/output_text blocks. No files or GitHub state changed; reproduction and validation remain execution gates.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #137265 | fix_needed | planned | canonical | Existing supported transcript shapes are omitted before indexing. Prepare one implementation PR after reproducing on current main; leave closure and merge outside this lane. |
| #137937 | keep_closed | skipped | related | Retain as historical contributor work and preserve attribution. No closure, reopening, or branch mutation is planned. |

## Needs Human

- none
