# Open ClawSweeper Repair PR Finalizer

Generated: 2026-08-08T02:11:45.853Z

## Summary

| Metric | Count |
| --- | ---: |
| open_prs | 13 |
| ready_candidates | 0 |
| security_hold | 1 |
| needs_rebase | 2 |
| mergeability_unknown | 0 |
| needs_checks | 6 |
| needs_review | 0 |
| needs_merge_preflight | 13 |
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
| [#120347](https://github.com/openclaw/openclaw/pull/120347) | fix(gateway): reject missing sessions_send targets | issue-openclaw-openclaw-87336 | MERGEABLE | BEHIND | SKIPPED:52 SUCCESS:80 FAILURE:2 NEUTRAL:1; blockers:2 | needs_merge_state:BEHIND, needs_checks:CI / checks-node-compact-small-6:FAILURE; CI / openclaw/ci-gate:FAILURE, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#120298](https://github.com/openclaw/openclaw/pull/120298) | fix(config): preserve manual .bak.* backups | issue-openclaw-openclaw-120253 | MERGEABLE | BEHIND | SUCCESS:73 SKIPPED:37 IN_PROGRESS:3 FAILURE:4 NEUTRAL:1; blockers:7 | needs_merge_state:BEHIND, needs_checks:CI / checks-node-compact-large-8:IN_PROGRESS; CI / checks-node-compact-small-6:IN_PROGRESS; CI / checks-node-compact-small-7:IN_PROGRESS, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#120249](https://github.com/openclaw/openclaw/pull/120249) | fix(discord): honor maxLinesPerMessage for CLI sends | issue-openclaw-openclaw-91860 | MERGEABLE | BEHIND | SKIPPED:45 SUCCESS:89 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#120247](https://github.com/openclaw/openclaw/pull/120247) | fix(android): keep chat drafts readable on compact screens | issue-openclaw-openclaw-120228 | MERGEABLE | BEHIND | CANCELLED:1 SKIPPED:29 SUCCESS:75; blockers:1 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#120230](https://github.com/openclaw/openclaw/pull/120230) | fix(windows): preserve gateway restart CLI during Scheduled Task handoff | issue-openclaw-openclaw-120134 | MERGEABLE | BEHIND | SKIPPED:49 SUCCESS:82 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#120215](https://github.com/openclaw/openclaw/pull/120215) | fix(plugins): retain incognito scope for embedded session ownership | issue-openclaw-openclaw-120178 | MERGEABLE | BEHIND | SKIPPED:47 SUCCESS:81 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#120150](https://github.com/openclaw/openclaw/pull/120150) | fix(discord): identify native-command empty reply outcomes | issue-openclaw-openclaw-120142 | MERGEABLE | BEHIND | SKIPPED:50 SUCCESS:49 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#120143](https://github.com/openclaw/openclaw/pull/120143) | fix(matrix): warn when open DMs lack an allowlist wildcard | issue-openclaw-openclaw-89254 | MERGEABLE | BEHIND | SKIPPED:48 SUCCESS:83 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#120076](https://github.com/openclaw/openclaw/pull/120076) | fix(mcp): receive loopback OAuth login callbacks | issue-openclaw-openclaw-120019 | MERGEABLE | BEHIND | CANCELLED:1 SKIPPED:50 SUCCESS:80 NEUTRAL:1; blockers:1 | security_hold, needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED, needs_merge_preflight | route to central security triage |
| [#119983](https://github.com/openclaw/openclaw/pull/119983) | fix(workboard): include operator notes in Start prompt | issue-openclaw-openclaw-119962 | MERGEABLE | BEHIND | SKIPPED:27 SUCCESS:71 FAILURE:5; blockers:5 | needs_merge_state:BEHIND, needs_checks:CI / checks-ui-e2e (1/4):FAILURE; CI / checks-ui-e2e (3/4):FAILURE; CI / checks-node-compact-large-1:FAILURE, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#119975](https://github.com/openclaw/openclaw/pull/119975) | fix(gateway): report active unmanaged restart startup accurately | issue-openclaw-openclaw-119958 | CONFLICTING | DIRTY | SKIPPED:50 SUCCESS:83 NEUTRAL:1 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#119968](https://github.com/openclaw/openclaw/pull/119968) | fix(acp): pass configured binding owner model to runtime | issue-openclaw-openclaw-119551 | CONFLICTING | DIRTY | SKIPPED:55 SUCCESS:82 NEUTRAL:1 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#119901](https://github.com/openclaw/openclaw/pull/119901) | fix(doctor): analyze SQLite databases after offline compaction | issue-openclaw-openclaw-119884 | MERGEABLE | BEHIND | CANCELLED:1 SKIPPED:39 SUCCESS:83 NEUTRAL:1; blockers:1 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
