# Open ClawSweeper Repair PR Finalizer

Generated: 2026-08-05T21:13:17.679Z

## Summary

| Metric | Count |
| --- | ---: |
| open_prs | 15 |
| ready_candidates | 0 |
| security_hold | 0 |
| needs_rebase | 0 |
| mergeability_unknown | 0 |
| needs_checks | 10 |
| needs_review | 0 |
| needs_merge_preflight | 15 |
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
| [#119737](https://github.com/openclaw/openclaw/pull/119737) | fix(slack): require confirmed thread placement for terminal receipts | issue-openclaw-openclaw-96692 | MERGEABLE | BEHIND | SKIPPED:39 SUCCESS:61 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#119735](https://github.com/openclaw/openclaw/pull/119735) | fix(whatsapp): refresh activity for pending inbound work | issue-openclaw-openclaw-114169 | MERGEABLE | BEHIND | SKIPPED:40 SUCCESS:73 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#119731](https://github.com/openclaw/openclaw/pull/119731) | fix(agents): bound task-completion result prompts | issue-openclaw-openclaw-57148 | MERGEABLE | BEHIND | SKIPPED:41 SUCCESS:81 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#119722](https://github.com/openclaw/openclaw/pull/119722) | fix(uninstall): remove owned shell completion registrations with state | issue-openclaw-openclaw-112625 | MERGEABLE | BEHIND | CANCELLED:1 SUCCESS:79 SKIPPED:39 NEUTRAL:1; blockers:1 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#119718](https://github.com/openclaw/openclaw/pull/119718) | fix(googlechat): deliver remote media URLs as text links | issue-openclaw-openclaw-89430 | MERGEABLE | BEHIND | SKIPPED:50 SUCCESS:72 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#119717](https://github.com/openclaw/openclaw/pull/119717) | fix(telegram): prioritize configured commands in capped menus | issue-openclaw-openclaw-89252 | MERGEABLE | BEHIND | CANCELLED:1 SUCCESS:73 SKIPPED:38 NEUTRAL:1; blockers:1 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#119712](https://github.com/openclaw/openclaw/pull/119712) | fix(usage): preserve top-level cached tokens in completions streams | issue-openclaw-openclaw-119692 | MERGEABLE | BEHIND | SKIPPED:39 SUCCESS:80 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#119589](https://github.com/openclaw/openclaw/pull/119589) | fix(acp): retain final-only text until dispatch completes | issue-openclaw-openclaw-92199 | MERGEABLE | BEHIND | CANCELLED:12 SKIPPED:44 SUCCESS:58 NEUTRAL:1; blockers:6 | needs_merge_state:BEHIND, needs_checks:PR context and evidence / Real behavior proof:CANCELLED; PR context and evidence / Real behavior proof:CANCELLED; PR context and evidence / Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#119528](https://github.com/openclaw/openclaw/pull/119528) | fix(agents): timestamp recovered Claude CLI history | issue-openclaw-openclaw-94679 | MERGEABLE | BEHIND | CANCELLED:10 SKIPPED:45 SUCCESS:84 FAILURE:2 NEUTRAL:1; blockers:5 | needs_merge_state:BEHIND, needs_checks:PR context and evidence / Real behavior proof:CANCELLED; PR context and evidence / Real behavior proof:CANCELLED; PR context and evidence / Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#119512](https://github.com/openclaw/openclaw/pull/119512) | fix(sessions): reuse identities during target dedupe | issue-openclaw-openclaw-119440 | MERGEABLE | BEHIND | CANCELLED:9 SKIPPED:43 SUCCESS:87 NEUTRAL:1; blockers:4 | needs_merge_state:BEHIND, needs_checks:PR context and evidence / Real behavior proof:CANCELLED; PR context and evidence / Real behavior proof:CANCELLED; PR context and evidence / Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#119500](https://github.com/openclaw/openclaw/pull/119500) | fix(memory): detect unindexed memory files in status | issue-openclaw-openclaw-119411 | MERGEABLE | BEHIND | CANCELLED:8 SKIPPED:53 SUCCESS:58; blockers:4 | needs_merge_state:BEHIND, needs_checks:PR context and evidence / Real behavior proof:CANCELLED; PR context and evidence / Real behavior proof:CANCELLED; PR context and evidence / Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#119367](https://github.com/openclaw/openclaw/pull/119367) | fix(memory-core): resume validated session transcript appends | issue-openclaw-openclaw-119350 | MERGEABLE | BEHIND | CANCELLED:7 SKIPPED:46 SUCCESS:55; blockers:5 | needs_merge_state:BEHIND, needs_checks:PR context and evidence / Real behavior proof:CANCELLED; PR context and evidence / Real behavior proof:CANCELLED; PR context and evidence / Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#119265](https://github.com/openclaw/openclaw/pull/119265) | fix(agents): audit direct embedded bundle tool calls | issue-openclaw-openclaw-119253 | MERGEABLE | BEHIND | CANCELLED:7 SKIPPED:45 SUCCESS:89 NEUTRAL:1; blockers:2 | needs_merge_state:BEHIND, needs_checks:PR context and evidence / Real behavior proof:CANCELLED; PR context and evidence / Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#119172](https://github.com/openclaw/openclaw/pull/119172) | fix(slack): preserve original bytes for forced media uploads | issue-openclaw-openclaw-53932 | MERGEABLE | BEHIND | CANCELLED:20 SKIPPED:52 SUCCESS:91 NEUTRAL:1; blockers:9 | needs_merge_state:BEHIND, needs_checks:PR context and evidence / Real behavior proof:CANCELLED; PR context and evidence / Real behavior proof:CANCELLED; PR context and evidence / Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#119160](https://github.com/openclaw/openclaw/pull/119160) | fix(bedrock): honor Opus 5 maxTokens when reasoning is off | issue-openclaw-openclaw-119148 | MERGEABLE | BEHIND | CANCELLED:8 SKIPPED:47 SUCCESS:49; blockers:4 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED; PR context and evidence / Real behavior proof:CANCELLED; PR context and evidence / Real behavior proof:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
