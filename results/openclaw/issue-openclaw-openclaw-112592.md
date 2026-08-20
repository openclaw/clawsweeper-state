---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-112592"
mode: "autonomous"
run_id: "32326667964"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/32326667964"
head_sha: "02c930c53d1c7e22ce89d23ba76e6b547a4e2a7f"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-08-20T03:10:28.285Z"
canonical: "https://github.com/openclaw/openclaw/issues/112592"
canonical_issue: "https://github.com/openclaw/openclaw/issues/112592"
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

# issue-openclaw-openclaw-112592

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/32326667964](https://github.com/openclaw/clawsweeper/actions/runs/32326667964)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/112592

## Summary

The narrow provenance repair remains planned, but this worker cannot implement or validate it: the checkout is read-only, sibling ../codex is absent (the repository’s required Codex-source gate), and pnpm cannot create its Corepack cache (EROFS). No GitHub mutation or code change was made.

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
| #112592 | fix_needed | blocked | canonical | Implementation and local validation are blocked by the read-only worker environment; dispatch the supplied new-fix-PR artifact in a writable checkout with ../codex available. |
| cluster:issue-openclaw-openclaw-112592 | build_fix_artifact | planned | canonical | Executable repair plan prepared; this worker could not apply it in the read-only checkout. |
| #64917 | keep_related | planned | related | Distinct open delivery-contract report. |
| #111358 | keep_related | planned | related | Distinct open delivery-contract report. |
| #47745 | keep_closed | skipped | related | Closed context only. |
| #54441 | keep_closed | skipped | related | Closed context only. |
| #55931 | keep_closed | skipped | related | Closed context only. |
| #93255 | keep_closed | skipped | independent | Closed context only. |
| #107546 | keep_closed | skipped | related | Closed context only. |

## Needs Human

- none
