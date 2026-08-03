# Open ClawSweeper Repair PR Finalizer

Generated: 2026-08-03T15:51:47.599Z

## Summary

| Metric | Count |
| --- | ---: |
| open_prs | 20 |
| ready_candidates | 0 |
| security_hold | 0 |
| needs_rebase | 2 |
| mergeability_unknown | 0 |
| needs_checks | 20 |
| needs_review | 0 |
| needs_merge_preflight | 20 |
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
| [#118721](https://github.com/openclaw/openclaw/pull/118721) | fix(workboard): bound SQLite card-list hydration | issue-openclaw-openclaw-118706 | MERGEABLE | BEHIND | CANCELLED:10 SKIPPED:48 SUCCESS:52; blockers:5 | needs_merge_state:BEHIND, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight, needs_result_backfill | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118696](https://github.com/openclaw/openclaw/pull/118696) | fix(gateway): terminate supervised subprocesses on shutdown | issue-openclaw-openclaw-118652 | MERGEABLE | BEHIND | CANCELLED:15 SKIPPED:45 SUCCESS:89 NEUTRAL:1; blockers:7 | needs_merge_state:BEHIND, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118688](https://github.com/openclaw/openclaw/pull/118688) | fix(agents): redrive suspended completions after compaction unlock | issue-openclaw-openclaw-118625 | MERGEABLE | BEHIND | CANCELLED:1 SUCCESS:80 SKIPPED:38 NEUTRAL:1; blockers:1 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118685](https://github.com/openclaw/openclaw/pull/118685) | fix(agents): record stop reason in completion trajectory | issue-openclaw-openclaw-118673 | MERGEABLE | BEHIND | CANCELLED:7 SKIPPED:42 SUCCESS:82 NEUTRAL:1; blockers:4 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118680](https://github.com/openclaw/openclaw/pull/118680) | fix(config): accept declared model compatibility routing settings | issue-openclaw-openclaw-118667 | MERGEABLE | BEHIND | CANCELLED:13 SKIPPED:45 SUCCESS:86 NEUTRAL:1; blockers:7 | needs_merge_state:BEHIND, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight, needs_result_backfill | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118679](https://github.com/openclaw/openclaw/pull/118679) | fix(workboard): reconcile terminal subagent runs | issue-openclaw-openclaw-118669 | MERGEABLE | BEHIND | CANCELLED:7 SKIPPED:45 SUCCESS:74; blockers:4 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118656](https://github.com/openclaw/openclaw/pull/118656) | fix(nextcloud-talk): repump independent room lanes during delivery | issue-openclaw-openclaw-118649 | MERGEABLE | BEHIND | CANCELLED:11 SKIPPED:47 SUCCESS:53 NEUTRAL:1; blockers:4 | needs_merge_state:BEHIND, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118599](https://github.com/openclaw/openclaw/pull/118599) | fix(gateway): coordinate singleton lock through shared state | issue-openclaw-openclaw-117635 | MERGEABLE | BEHIND | CANCELLED:9 SKIPPED:43 SUCCESS:82 NEUTRAL:1; blockers:5 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118361](https://github.com/openclaw/openclaw/pull/118361) | fix(browser): make extension deep doctor probe page snapshots | issue-openclaw-openclaw-116747 | MERGEABLE | BEHIND | CANCELLED:10 SKIPPED:45 SUCCESS:72 FAILURE:2; blockers:7 | needs_merge_state:BEHIND, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118309](https://github.com/openclaw/openclaw/pull/118309) | fix(claude-cli): deduplicate live and imported assistant turns | issue-openclaw-openclaw-118185 | MERGEABLE | BEHIND | CANCELLED:10 SKIPPED:47 SUCCESS:83 NEUTRAL:1; blockers:6 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118303](https://github.com/openclaw/openclaw/pull/118303) | fix(minimax): route M3 image calls through MiniMax VL | issue-openclaw-openclaw-116601 | MERGEABLE | BEHIND | CANCELLED:3 SKIPPED:40 SUCCESS:78 NEUTRAL:1; blockers:2 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118282](https://github.com/openclaw/openclaw/pull/118282) | fix(doctor): import legacy exec approvals with null usage metadata | issue-openclaw-openclaw-118242 | MERGEABLE | BEHIND | CANCELLED:11 SKIPPED:44 SUCCESS:83 NEUTRAL:1; blockers:6 | needs_merge_state:BEHIND, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight, needs_result_backfill | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118045](https://github.com/openclaw/openclaw/pull/118045) | docs: remove retired openai-codex from /login valid args | automerge-openclaw-openclaw-114609 | MERGEABLE | BEHIND | CANCELLED:8 SKIPPED:37 SUCCESS:22; blockers:4 | needs_merge_state:BEHIND, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#117976](https://github.com/openclaw/openclaw/pull/117976) | fix(memory): resolve Google embedding provider alias | issue-openclaw-openclaw-90786 | MERGEABLE | BEHIND | CANCELLED:13 SKIPPED:47 SUCCESS:88 NEUTRAL:1; blockers:7 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#117954](https://github.com/openclaw/openclaw/pull/117954) | fix(whatsapp): honor disabled self-chat admission | issue-openclaw-openclaw-117941 | CONFLICTING | DIRTY | CANCELLED:12 SKIPPED:45 SUCCESS:74 NEUTRAL:1; blockers:8 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#117952](https://github.com/openclaw/openclaw/pull/117952) | fix(control-ui): wait for delayed Talk source replies | issue-openclaw-openclaw-117899 | CONFLICTING | DIRTY | CANCELLED:9 SKIPPED:40 SUCCESS:86 FAILURE:2 NEUTRAL:1; blockers:7 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#117951](https://github.com/openclaw/openclaw/pull/117951) | fix(gateway): preserve assistant media in live chat events | issue-openclaw-openclaw-73478 | MERGEABLE | BEHIND | CANCELLED:7 SKIPPED:47 SUCCESS:88 NEUTRAL:1; blockers:4 | needs_merge_state:BEHIND, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#117911](https://github.com/openclaw/openclaw/pull/117911) | fix(exec): explain Linux OOM-score-adjusted SIGKILLs | issue-openclaw-openclaw-69242 | MERGEABLE | BEHIND | CANCELLED:11 SKIPPED:48 SUCCESS:89 NEUTRAL:1; blockers:6 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#117906](https://github.com/openclaw/openclaw/pull/117906) | fix(feishu): preserve self mentions in agent-facing group messages | issue-openclaw-openclaw-72504 | MERGEABLE | BEHIND | CANCELLED:14 SKIPPED:49 SUCCESS:56 NEUTRAL:1; blockers:7 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#117721](https://github.com/openclaw/openclaw/pull/117721) | fix(control-ui): render live thinking agent events in WebChat | issue-openclaw-openclaw-88079 | MERGEABLE | BEHIND | CANCELLED:17 SKIPPED:37 SUCCESS:91; blockers:9 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
