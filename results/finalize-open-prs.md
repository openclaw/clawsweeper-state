# Open ClawSweeper Repair PR Finalizer

Generated: 2026-08-09T14:37:19.706Z

## Summary

| Metric | Count |
| --- | ---: |
| open_prs | 5 |
| ready_candidates | 0 |
| security_hold | 0 |
| needs_rebase | 2 |
| mergeability_unknown | 0 |
| needs_checks | 1 |
| needs_review | 0 |
| needs_merge_preflight | 5 |
| needs_result_backfill | 0 |

## Dispatch

Enabled: no

Status: report_only

| PR | Cluster | Job | Mode | Blockers |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Open PRs

| PR | Title | Cluster | Mergeable | Merge State | Checks | Blockers | Next action |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [#121050](https://github.com/openclaw/openclaw/pull/121050) | fix(control-ui): retain webchat context for config restarts | issue-openclaw-openclaw-55372 | MERGEABLE | BEHIND | SKIPPED:46 SUCCESS:88 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#120652](https://github.com/openclaw/openclaw/pull/120652) | fix: suppress fast-auto status updates when progress is hidden | issue-openclaw-openclaw-97601 | CONFLICTING | DIRTY | SKIPPED:50 SUCCESS:83 NEUTRAL:1 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#120569](https://github.com/openclaw/openclaw/pull/120569) | fix(ai): mark missing OpenAI Completions usage unavailable | issue-openclaw-openclaw-120356 | MERGEABLE | BEHIND | SKIPPED:52 SUCCESS:82 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#120550](https://github.com/openclaw/openclaw/pull/120550) | fix(agents): preserve latest context-usage provenance | issue-openclaw-openclaw-120536 | CONFLICTING | DIRTY | SKIPPED:53 SUCCESS:82 NEUTRAL:1 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#120347](https://github.com/openclaw/openclaw/pull/120347) | fix(gateway): reject missing sessions_send targets | issue-openclaw-openclaw-87336 | MERGEABLE | BEHIND | SKIPPED:52 SUCCESS:80 FAILURE:2 NEUTRAL:1; blockers:2 | needs_merge_state:BEHIND, needs_checks:CI / checks-node-compact-small-6:FAILURE; CI / openclaw/ci-gate:FAILURE, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
