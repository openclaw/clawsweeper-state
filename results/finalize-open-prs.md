# Open ClawSweeper Repair PR Finalizer

Generated: 2026-08-04T15:22:13.597Z

## Summary

| Metric | Count |
| --- | ---: |
| open_prs | 15 |
| ready_candidates | 0 |
| security_hold | 0 |
| needs_rebase | 0 |
| mergeability_unknown | 0 |
| needs_checks | 15 |
| needs_review | 0 |
| needs_merge_preflight | 15 |
| needs_result_backfill | 3 |

## Dispatch

Enabled: no

Status: report_only

| PR | Cluster | Job | Mode | Blockers |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Open PRs

| PR | Title | Cluster | Mergeable | Merge State | Checks | Blockers | Next action |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [#119265](https://github.com/openclaw/openclaw/pull/119265) | fix(agents): audit direct embedded bundle tool calls | issue-openclaw-openclaw-119253 | MERGEABLE | BEHIND | CANCELLED:7 SKIPPED:44 SUCCESS:87 NEUTRAL:1; blockers:2 | needs_merge_state:BEHIND, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight, needs_result_backfill | repair failing checks or document unrelated main flake with touched-surface proof |
| [#119172](https://github.com/openclaw/openclaw/pull/119172) | fix(slack): preserve original bytes for forced media uploads | issue-openclaw-openclaw-53932 | MERGEABLE | BEHIND | CANCELLED:20 SKIPPED:51 SUCCESS:89 NEUTRAL:1; blockers:9 | needs_merge_state:BEHIND, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#119160](https://github.com/openclaw/openclaw/pull/119160) | fix(bedrock): honor Opus 5 maxTokens when reasoning is off | issue-openclaw-openclaw-119148 | MERGEABLE | BEHIND | CANCELLED:8 SKIPPED:47 SUCCESS:49; blockers:4 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118807](https://github.com/openclaw/openclaw/pull/118807) | fix(reply): defer steer messages while embedded compaction runs | issue-openclaw-openclaw-118771 | MERGEABLE | BEHIND | CANCELLED:10 SKIPPED:42 SUCCESS:82 FAILURE:2 NEUTRAL:1; blockers:7 | needs_merge_state:BEHIND, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118806](https://github.com/openclaw/openclaw/pull/118806) | fix(agents): remove yield from leaf subagents | issue-openclaw-openclaw-118776 | MERGEABLE | BEHIND | CANCELLED:13 SKIPPED:44 SUCCESS:81 FAILURE:2 NEUTRAL:1; blockers:8 | needs_merge_state:BEHIND, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118796](https://github.com/openclaw/openclaw/pull/118796) | fix(session): require a real context snapshot for CLI usage | issue-openclaw-openclaw-118772 | MERGEABLE | BEHIND | CANCELLED:10 SKIPPED:43 SUCCESS:83 FAILURE:2 NEUTRAL:1; blockers:7 | needs_merge_state:BEHIND, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118751](https://github.com/openclaw/openclaw/pull/118751) | fix(agents): reject failed embedded image hydration | issue-openclaw-openclaw-102190 | MERGEABLE | BEHIND | CANCELLED:12 SKIPPED:45 SUCCESS:84 NEUTRAL:1; blockers:6 | needs_merge_state:BEHIND, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118721](https://github.com/openclaw/openclaw/pull/118721) | fix(workboard): bound SQLite card-list hydration | issue-openclaw-openclaw-118706 | MERGEABLE | BEHIND | CANCELLED:10 SKIPPED:49 SUCCESS:54; blockers:5 | needs_merge_state:BEHIND, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight, needs_result_backfill | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118696](https://github.com/openclaw/openclaw/pull/118696) | fix(gateway): terminate supervised subprocesses on shutdown | issue-openclaw-openclaw-118652 | MERGEABLE | BEHIND | CANCELLED:15 SKIPPED:45 SUCCESS:89 NEUTRAL:1; blockers:7 | needs_merge_state:BEHIND, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118688](https://github.com/openclaw/openclaw/pull/118688) | fix(agents): redrive suspended completions after compaction unlock | issue-openclaw-openclaw-118625 | MERGEABLE | BEHIND | CANCELLED:8 SKIPPED:44 SUCCESS:84 NEUTRAL:1; blockers:4 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118685](https://github.com/openclaw/openclaw/pull/118685) | fix(agents): record stop reason in completion trajectory | issue-openclaw-openclaw-118673 | MERGEABLE | BEHIND | CANCELLED:1 SUCCESS:78 SKIPPED:38 FAILURE:2 NEUTRAL:1; blockers:3 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED; CI / checks-node-compact-small-4:FAILURE; CI / openclaw/ci-gate:FAILURE, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118680](https://github.com/openclaw/openclaw/pull/118680) | fix(config): accept declared model compatibility routing settings | issue-openclaw-openclaw-118667 | MERGEABLE | BEHIND | CANCELLED:13 SKIPPED:47 SUCCESS:90 NEUTRAL:1; blockers:7 | needs_merge_state:BEHIND, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight, needs_result_backfill | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118679](https://github.com/openclaw/openclaw/pull/118679) | fix(workboard): reconcile terminal subagent runs | issue-openclaw-openclaw-118669 | MERGEABLE | BEHIND | CANCELLED:11 SKIPPED:48 SUCCESS:76; blockers:6 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118656](https://github.com/openclaw/openclaw/pull/118656) | fix(nextcloud-talk): repump independent room lanes during delivery | issue-openclaw-openclaw-118649 | MERGEABLE | BEHIND | CANCELLED:14 SKIPPED:50 SUCCESS:56 NEUTRAL:1; blockers:6 | needs_merge_state:BEHIND, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118599](https://github.com/openclaw/openclaw/pull/118599) | fix(gateway): coordinate singleton lock through shared state | issue-openclaw-openclaw-117635 | MERGEABLE | BEHIND | CANCELLED:16 SKIPPED:50 SUCCESS:85 NEUTRAL:1; blockers:7 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
