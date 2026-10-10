---
repo: "openclaw/libterminal"
cluster_id: "issue-openclaw-libterminal-41"
mode: "autonomous"
run_id: "38080331957"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/38080331957"
head_sha: "ef832edef590efd84628c44ff1ac9cf9c8f1fa0d"
workflow_conclusion: "failure"
result_status: "blocked"
published_at: "2026-10-10T19:37:13.559Z"
canonical: "https://github.com/openclaw/libterminal/issues/41"
canonical_issue: "https://github.com/openclaw/libterminal/issues/41"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# issue-openclaw-libterminal-41

Repo: openclaw/libterminal

Run: [https://github.com/openclaw/clawsweeper/actions/runs/38080331957](https://github.com/openclaw/clawsweeper/actions/runs/38080331957)

Workflow conclusion: failure

Worker result: blocked

Canonical: https://github.com/openclaw/libterminal/issues/41

## Summary

Implementation is blocked by issue #41's explicit upstream publication gates. The hydrated October 10 review reports both gates unmet; current main still pins ghostty-web@0.4.0. No files changed or PR planned. Direct upstream verification failed because GitHub DNS resolution is unavailable.

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
| Needs human | 2 |

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
| #41 | keep_canonical | planned | canonical | Keep the canonical tracking issue open. Resume implementation only after both publication gates are verified and an exact qualifying wrapper can be selected. |
| #77 | keep_closed | skipped | related | Historical preparation work does not satisfy runtime adoption; no further action on this closed PR. |
| #169 | needs_human | blocked | needs_human | Resolve the repository qualification error before classifying this target. The upstream PR link does not establish the kind or updated_at of openclaw/libterminal#169; retain null metadata and perform no mutation. |
| #182 | needs_human | blocked | needs_human | Resolve the repository qualification error before classifying this target. The upstream PR link does not establish the kind or updated_at of openclaw/libterminal#182; retain null metadata and perform no mutation. |

## Needs Human

- Resolve the misqualified #169 hydration entry: openclaw/libterminal#169 returned HTTP 404 with unknown kind and null updated_at, while the source links https://github.com/coder/ghostty-web/pull/169. Do not invent local target metadata or act on the upstream PR.
- Resolve the misqualified #182 hydration entry: openclaw/libterminal#182 returned HTTP 404 with unknown kind and null updated_at, while the source links https://github.com/coder/ghostty-web/pull/182. Do not invent local target metadata or act on the upstream PR.
