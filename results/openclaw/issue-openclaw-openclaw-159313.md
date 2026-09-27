---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-159313"
mode: "autonomous"
run_id: "36287872753"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36287872753"
head_sha: "e1a1bc03b8cb207ef3f8661f2224aae1a128ee7c"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-09-27T02:42:53.616Z"
canonical: "https://github.com/openclaw/openclaw/issues/159313"
canonical_issue: "https://github.com/openclaw/openclaw/issues/159313"
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

# issue-openclaw-openclaw-159313

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36287872753](https://github.com/openclaw/clawsweeper/actions/runs/36287872753)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/159313

## Summary

The current checkout still propagates EBADF from the plugin descriptor-copy fast path. Implementation is blocked before the required failing regression: this read-only host is Linux x86_64, has no Bun or installed dependencies, and cannot run the requested macOS arm64/Bun 1.4.2 reproduction. No code or GitHub state was changed.

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
| #159313 | fix_needed | planned | canonical | The reported bug has a narrow owner-path fix, but the job requires reproduction or a failing production-entry regression before implementation. |
| cluster:issue-openclaw-openclaw-159313 | build_fix_artifact | blocked |  | Blocked on the job's reproduce-first gate and the host's read-only Linux environment. Run the reported control and establish a failing regression through capturePluginGenerationArtifact on macOS arm64/Bun 1.4.2 before editing or opening the PR. |

## Needs Human

- none
