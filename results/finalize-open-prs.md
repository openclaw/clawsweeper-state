# Open ClawSweeper Repair PR Finalizer

Generated: 2026-08-07T09:35:33.259Z

## Summary

| Metric | Count |
| --- | ---: |
| open_prs | 16 |
| ready_candidates | 0 |
| security_hold | 2 |
| needs_rebase | 3 |
| mergeability_unknown | 0 |
| needs_checks | 8 |
| needs_review | 0 |
| needs_merge_preflight | 16 |
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
| [#120150](https://github.com/openclaw/openclaw/pull/120150) | fix(discord): identify native-command empty reply outcomes | issue-openclaw-openclaw-120142 | MERGEABLE | BEHIND | SKIPPED:50 SUCCESS:49 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#120143](https://github.com/openclaw/openclaw/pull/120143) | fix(matrix): warn when open DMs lack an allowlist wildcard | issue-openclaw-openclaw-89254 | MERGEABLE | BEHIND | SKIPPED:48 SUCCESS:83 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#120076](https://github.com/openclaw/openclaw/pull/120076) | fix(mcp): receive loopback OAuth login callbacks | issue-openclaw-openclaw-120019 | MERGEABLE | BEHIND | CANCELLED:1 SKIPPED:50 SUCCESS:80 NEUTRAL:1; blockers:1 | security_hold, needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED, needs_merge_preflight | route to central security triage |
| [#119983](https://github.com/openclaw/openclaw/pull/119983) | fix(workboard): include operator notes in Start prompt | issue-openclaw-openclaw-119962 | MERGEABLE | BEHIND | SKIPPED:27 SUCCESS:71 FAILURE:5; blockers:5 | needs_merge_state:BEHIND, needs_checks:CI / checks-ui-e2e (1/4):FAILURE; CI / checks-ui-e2e (3/4):FAILURE; CI / checks-node-compact-large-1:FAILURE, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#119975](https://github.com/openclaw/openclaw/pull/119975) | fix(gateway): report active unmanaged restart startup accurately | issue-openclaw-openclaw-119958 | CONFLICTING | DIRTY | SKIPPED:50 SUCCESS:83 NEUTRAL:1 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#119968](https://github.com/openclaw/openclaw/pull/119968) | fix(acp): pass configured binding owner model to runtime | issue-openclaw-openclaw-119551 | CONFLICTING | DIRTY | SKIPPED:55 SUCCESS:82 NEUTRAL:1 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#119901](https://github.com/openclaw/openclaw/pull/119901) | fix(doctor): analyze SQLite databases after offline compaction | issue-openclaw-openclaw-119884 | MERGEABLE | BEHIND | CANCELLED:1 SKIPPED:39 SUCCESS:83 NEUTRAL:1; blockers:1 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#119784](https://github.com/openclaw/openclaw/pull/119784) | fix(gateway): avoid parsing excluded chat history payloads | issue-openclaw-openclaw-119578 | CONFLICTING | DIRTY | SKIPPED:51 SUCCESS:84 NEUTRAL:1 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#119778](https://github.com/openclaw/openclaw/pull/119778) | fix(gateway): return retryable chat send error during transcript rebuild | issue-openclaw-openclaw-119754 | MERGEABLE | BEHIND | SKIPPED:49 SUCCESS:82 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#119737](https://github.com/openclaw/openclaw/pull/119737) | fix(slack): require confirmed thread placement for terminal receipts | issue-openclaw-openclaw-96692 | MERGEABLE | BEHIND | CANCELLED:1 SKIPPED:46 SUCCESS:59 NEUTRAL:1; blockers:1 | security_route, needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED, needs_merge_preflight | route to central security triage |
| [#119735](https://github.com/openclaw/openclaw/pull/119735) | fix(whatsapp): refresh activity for pending inbound work | issue-openclaw-openclaw-114169 | MERGEABLE | BEHIND | CANCELLED:1 SKIPPED:49 SUCCESS:71 NEUTRAL:1; blockers:1 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#119731](https://github.com/openclaw/openclaw/pull/119731) | fix(agents): bound task-completion result prompts | issue-openclaw-openclaw-57148 | MERGEABLE | BEHIND | SKIPPED:47 SUCCESS:81 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#119722](https://github.com/openclaw/openclaw/pull/119722) | fix(uninstall): remove owned shell completion registrations with state | issue-openclaw-openclaw-112625 | MERGEABLE | BEHIND | CANCELLED:1 SKIPPED:49 SUCCESS:79 NEUTRAL:1; blockers:1 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#119718](https://github.com/openclaw/openclaw/pull/119718) | fix(googlechat): deliver remote media URLs as text links | issue-openclaw-openclaw-89430 | MERGEABLE | BEHIND | CANCELLED:1 SKIPPED:46 SUCCESS:72 NEUTRAL:1; blockers:1 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#119717](https://github.com/openclaw/openclaw/pull/119717) | fix(telegram): prioritize configured commands in capped menus | issue-openclaw-openclaw-89252 | MERGEABLE | BEHIND | CANCELLED:1 SKIPPED:44 SUCCESS:73 NEUTRAL:1; blockers:1 | needs_merge_state:BEHIND, needs_checks:ClawSweeper Dispatch / dispatch:CANCELLED, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#119712](https://github.com/openclaw/openclaw/pull/119712) | fix(usage): preserve top-level cached tokens in completions streams | issue-openclaw-openclaw-119692 | MERGEABLE | BEHIND | SKIPPED:39 SUCCESS:80 NEUTRAL:1 | needs_merge_state:BEHIND, needs_merge_preflight | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
