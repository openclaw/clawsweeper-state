# Open ClawSweeper Repair PR Finalizer

Generated: 2026-08-09T05:02:14.520Z

## Summary

| Metric | Count |
| --- | ---: |
| open_prs | 9 |
| ready_candidates | 0 |
| security_hold | 0 |
| needs_rebase | 2 |
| mergeability_unknown | 0 |
| needs_checks | 3 |
| needs_review | 0 |
| needs_merge_preflight | 9 |
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
| [#120852](https://github.com/openclaw/openclaw/pull/120852) | test(doctor): give SecretRef scenario timeout headroom | issue-openclaw-openclaw-120832 | MERGEABLE | BEHIND | SKIPPED:33 SUCCESS:66 FAILURE:2; blockers:2 | needs_merge_state:BEHIND, needs_checks:CI / checks-node-compact-large-7:FAILURE; CI / openclaw/ci-gate:FAILURE, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#120652](https://github.com/openclaw/openclaw/pull/120652) | fix: suppress fast-auto status updates when progress is hidden | issue-openclaw-openclaw-97601 | MERGEABLE | BEHIND | SKIPPED:50 SUCCESS:83 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#120586](https://github.com/openclaw/openclaw/pull/120586) | fix(control-ui): prioritize session provider quota window | issue-openclaw-openclaw-120557 | CONFLICTING | DIRTY | SKIPPED:33 SUCCESS:77 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#120569](https://github.com/openclaw/openclaw/pull/120569) | fix(ai): mark missing OpenAI Completions usage unavailable | issue-openclaw-openclaw-120356 | MERGEABLE | BEHIND | SKIPPED:52 SUCCESS:82 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#120550](https://github.com/openclaw/openclaw/pull/120550) | fix(agents): preserve latest context-usage provenance | issue-openclaw-openclaw-120536 | CONFLICTING | DIRTY | SKIPPED:53 SUCCESS:82 NEUTRAL:1 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#120347](https://github.com/openclaw/openclaw/pull/120347) | fix(gateway): reject missing sessions_send targets | issue-openclaw-openclaw-87336 | MERGEABLE | BEHIND | SKIPPED:52 SUCCESS:80 FAILURE:2 NEUTRAL:1; blockers:2 | needs_merge_state:BEHIND, needs_checks:CI / checks-node-compact-small-6:FAILURE; CI / openclaw/ci-gate:FAILURE, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#120249](https://github.com/openclaw/openclaw/pull/120249) | fix(discord): honor maxLinesPerMessage for CLI sends | issue-openclaw-openclaw-91860 | MERGEABLE | BEHIND | SKIPPED:45 SUCCESS:89 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#120247](https://github.com/openclaw/openclaw/pull/120247) | fix(android): keep chat drafts readable on compact screens | issue-openclaw-openclaw-120228 | MERGEABLE | BEHIND | CANCELLED:1 SKIPPED:29 SUCCESS:75; blockers:1 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#120230](https://github.com/openclaw/openclaw/pull/120230) | fix(windows): preserve gateway restart CLI during Scheduled Task handoff | issue-openclaw-openclaw-120134 | MERGEABLE | BEHIND | SKIPPED:49 SUCCESS:82 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
