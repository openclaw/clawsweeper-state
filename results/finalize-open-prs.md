# Open ClawSweeper Repair PR Finalizer

Generated: 2026-08-08T16:05:06.880Z

## Summary

| Metric | Count |
| --- | ---: |
| open_prs | 11 |
| ready_candidates | 0 |
| security_hold | 0 |
| needs_rebase | 1 |
| mergeability_unknown | 0 |
| needs_checks | 2 |
| needs_review | 0 |
| needs_merge_preflight | 11 |
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
| [#120586](https://github.com/openclaw/openclaw/pull/120586) | fix(control-ui): prioritize session provider quota window | issue-openclaw-openclaw-120557 | MERGEABLE | BEHIND | SKIPPED:33 SUCCESS:77 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#120583](https://github.com/openclaw/openclaw/pull/120583) | fix(process): disclose omitted retained output in finished polls | issue-openclaw-openclaw-120567 | MERGEABLE | BEHIND | SKIPPED:46 SUCCESS:83 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#120569](https://github.com/openclaw/openclaw/pull/120569) | fix(ai): mark missing OpenAI Completions usage unavailable | issue-openclaw-openclaw-120356 | MERGEABLE | BEHIND | SKIPPED:52 SUCCESS:82 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#120550](https://github.com/openclaw/openclaw/pull/120550) | fix(agents): preserve latest context-usage provenance | issue-openclaw-openclaw-120536 | CONFLICTING | DIRTY | SKIPPED:53 SUCCESS:82 NEUTRAL:1 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#120347](https://github.com/openclaw/openclaw/pull/120347) | fix(gateway): reject missing sessions_send targets | issue-openclaw-openclaw-87336 | MERGEABLE | BEHIND | SKIPPED:52 SUCCESS:80 FAILURE:2 NEUTRAL:1; blockers:2 | needs_merge_state:BEHIND, needs_checks:CI / checks-node-compact-small-6:FAILURE; CI / openclaw/ci-gate:FAILURE, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#120249](https://github.com/openclaw/openclaw/pull/120249) | fix(discord): honor maxLinesPerMessage for CLI sends | issue-openclaw-openclaw-91860 | MERGEABLE | BEHIND | SKIPPED:45 SUCCESS:89 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#120247](https://github.com/openclaw/openclaw/pull/120247) | fix(android): keep chat drafts readable on compact screens | issue-openclaw-openclaw-120228 | MERGEABLE | BEHIND | CANCELLED:1 SKIPPED:29 SUCCESS:75; blockers:1 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#120230](https://github.com/openclaw/openclaw/pull/120230) | fix(windows): preserve gateway restart CLI during Scheduled Task handoff | issue-openclaw-openclaw-120134 | MERGEABLE | BEHIND | SKIPPED:49 SUCCESS:82 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#120215](https://github.com/openclaw/openclaw/pull/120215) | fix(plugins): retain incognito scope for embedded session ownership | issue-openclaw-openclaw-120178 | MERGEABLE | BEHIND | SKIPPED:47 SUCCESS:81 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#120150](https://github.com/openclaw/openclaw/pull/120150) | fix(discord): identify native-command empty reply outcomes | issue-openclaw-openclaw-120142 | MERGEABLE | BEHIND | SKIPPED:50 SUCCESS:49 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#120143](https://github.com/openclaw/openclaw/pull/120143) | fix(matrix): warn when open DMs lack an allowlist wildcard | issue-openclaw-openclaw-89254 | MERGEABLE | BEHIND | SKIPPED:48 SUCCESS:83 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
