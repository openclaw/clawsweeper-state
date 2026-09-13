---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-146821"
mode: "autonomous"
run_id: "34744648008"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/34744648008"
head_sha: "d75f027faca8704bcc220f7ae5127cc93bedaa67"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-13T07:27:58.893Z"
canonical: "https://github.com/openclaw/openclaw/issues/146821"
canonical_issue: "https://github.com/openclaw/openclaw/issues/146821"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-146821

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/34744648008](https://github.com/openclaw/clawsweeper/actions/runs/34744648008)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/146821

## Summary

Confirmed the native 45-second deadline and misleading fallback on preflight main 3f849337ee978fcf8b23072de1ca203d3f23656f. Prepared a narrow repair artifact. Implementation and native reproduction are blocked by the read-only Linux host without Xcode; no files or GitHub state changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #146821 | fix_needed | blocked | canonical | Implementation requires a writable authorized macOS/Xcode host and a failing regression through the native callback before production edits. Source verification alone does not satisfy the requested execution proof. |
| #135795 | keep_closed | skipped | related | Historical ownership repair; it does not fix the native deadline mismatch. |
| #139279 | keep_related | planned | related | Distinct policy and progress-cue work; leave open outside this bug-only implementation. |
| #142173 | route_security | planned | security_sensitive | Quarantine this exact PR for central OpenClaw security handling without public mutation or a vulnerability verdict. The independent native timeout repair does not depend on it. |
| cluster:issue-openclaw-openclaw-146821 | build_fix_artifact | planned | canonical | The narrow repair remains justified; applying it and proving native behavior require the specified host. |

## Needs Human

- none
