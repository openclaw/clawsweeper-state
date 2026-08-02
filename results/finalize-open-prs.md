# Open ClawSweeper Repair PR Finalizer

Generated: 2026-08-02T16:53:46.488Z

## Summary

| Metric | Count |
| --- | ---: |
| open_prs | 13 |
| ready_candidates | 0 |
| security_hold | 0 |
| needs_rebase | 0 |
| mergeability_unknown | 0 |
| needs_checks | 12 |
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
| [#118064](https://github.com/openclaw/openclaw/pull/118064) | fix(line): skip invalid location messages before delivery | issue-openclaw-openclaw-118029 | MERGEABLE | BEHIND | CANCELLED:9 SKIPPED:44 SUCCESS:50 NEUTRAL:1; blockers:3 | needs_merge_state:BEHIND, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118055](https://github.com/openclaw/openclaw/pull/118055) | fix(line): clear default access token when removing account | issue-openclaw-openclaw-118039 | MERGEABLE | BEHIND | CANCELLED:9 SKIPPED:44 SUCCESS:50 NEUTRAL:1; blockers:5 | needs_merge_state:BEHIND, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#118045](https://github.com/openclaw/openclaw/pull/118045) | docs: remove retired openai-codex from /login valid args | automerge-openclaw-openclaw-114609 | MERGEABLE | BEHIND | CANCELLED:6 SKIPPED:35 SUCCESS:20; blockers:3 | needs_merge_state:BEHIND, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#117976](https://github.com/openclaw/openclaw/pull/117976) | fix(memory): resolve Google embedding provider alias | issue-openclaw-openclaw-90786 | MERGEABLE | BEHIND | CANCELLED:18 SKIPPED:52 SUCCESS:92 NEUTRAL:1; blockers:8 | needs_merge_state:BEHIND, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#117954](https://github.com/openclaw/openclaw/pull/117954) | fix(whatsapp): honor disabled self-chat admission | issue-openclaw-openclaw-117941 | MERGEABLE | BEHIND | CANCELLED:12 SKIPPED:45 SUCCESS:74 NEUTRAL:1; blockers:8 | needs_merge_state:BEHIND, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#117952](https://github.com/openclaw/openclaw/pull/117952) | fix(control-ui): wait for delayed Talk source replies | issue-openclaw-openclaw-117899 | MERGEABLE | BEHIND | CANCELLED:9 SKIPPED:40 SUCCESS:86 FAILURE:2 NEUTRAL:1; blockers:7 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#117951](https://github.com/openclaw/openclaw/pull/117951) | fix(gateway): preserve assistant media in live chat events | issue-openclaw-openclaw-73478 | MERGEABLE | BEHIND | CANCELLED:7 SKIPPED:44 SUCCESS:83 NEUTRAL:1; blockers:4 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#117911](https://github.com/openclaw/openclaw/pull/117911) | fix(exec): explain Linux OOM-score-adjusted SIGKILLs | issue-openclaw-openclaw-69242 | MERGEABLE | BEHIND | CANCELLED:11 SKIPPED:48 SUCCESS:89 NEUTRAL:1; blockers:6 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#117906](https://github.com/openclaw/openclaw/pull/117906) | fix(feishu): preserve self mentions in agent-facing group messages | issue-openclaw-openclaw-72504 | MERGEABLE | BEHIND | CANCELLED:14 SKIPPED:49 SUCCESS:56 NEUTRAL:1; blockers:7 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#117869](https://github.com/openclaw/openclaw/pull/117869) | fix(agents): preserve explicit model references in alias guidance | issue-openclaw-openclaw-61949 | MERGEABLE | BEHIND | SUCCESS:80 SKIPPED:39 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#117721](https://github.com/openclaw/openclaw/pull/117721) | fix(control-ui): render live thinking agent events in WebChat | issue-openclaw-openclaw-88079 | MERGEABLE | BEHIND | CANCELLED:11 SKIPPED:31 SUCCESS:85; blockers:6 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#117485](https://github.com/openclaw/openclaw/pull/117485) | fix(ios): route forced realtime consults through Gateway relay | issue-openclaw-openclaw-110171 | MERGEABLE | BEHIND | CANCELLED:1 SKIPPED:27 SUCCESS:25 FAILURE:4; blockers:5 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED; iOS Periphery Dead Code / Scan iOS dead code:FAILURE; Shared OpenClawKit Periphery / Intersect shared OpenClawKit dead code:FAILURE, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#117443](https://github.com/openclaw/openclaw/pull/117443) | fix(status): resolve effective channel model override | issue-openclaw-openclaw-89532 | MERGEABLE | BEHIND | CANCELLED:16 SKIPPED:51 SUCCESS:92 NEUTRAL:1; blockers:7 | needs_merge_state:BEHIND, needs_checks:Real behavior proof:CANCELLED; Real behavior proof:CANCELLED; Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
