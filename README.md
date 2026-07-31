# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Jul 31, 2026, 13:17 UTC

### Fleet

| Metric | Count |
| --- | ---: |
| Covered repositories | 3 |
| Open review records | 0 |
| Archived closed records | 0 |
| Fresh reviews, 7d | 0 |
| Proposed closes awaiting apply | 0 |
| Work candidates awaiting promotion | 0 |
| Failed or stale reviews | 0 |

### Current Runs

| Repository | State | Updated | Run |
| --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Hot intake publish complete | Jul 31, 2026, 13:17 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/30633024668) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Apply idle | Jul 31, 2026, 13:05 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/30632979358) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Jul 31, 2026, 12:11 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/30629675886) |

### Repositories

| Repository | Open records | Archived | Fresh | Proposed closes | Work candidates | Failed/stale | Last review | Last close |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 0 | 0 | 0 | 0 | 0 | 0 | unknown | unknown |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | 0 | 0 | 0 | 0 | 0 | 0 | unknown | unknown |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | 0 | 0 | 0 | 0 | 0 | 0 | unknown | unknown |

### Work Candidates

| Repository | Item | Title | Priority | Reviewed | Report |
| --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

### Recently Closed

| Repository | Item | Title | Reason | Closed | Report |
| --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

<details>
<summary>Recently Reviewed</summary>

| Repository | Item | Title | Outcome | Status | Reviewed |
| --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

</details>

### Audit Health

| Repository | Status | Last audit | Missing eligible | Stale records | Protected proposed | Scan complete |
| --- | --- | --- | ---: | ---: | ---: | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | missing records | Jul 19, 2026, 12:31 UTC | 167 | 1 | 0 | yes |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | missing records | Jul 28, 2026, 07:09 UTC | 5 | 0 | 0 | yes |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | clean | Jul 19, 2026, 07:11 UTC | 0 | 0 | 0 | yes |


## Action Ledger

Last source event: unknown

Immutable source: 0 events across 0 JSONL shards; 0 duplicate replays collapsed. Snapshot: `4f53cda18c2b`.

Current indexes and this dashboard section are replaceable projections, never mutation authority.

| Event family | Events | Latest |
| --- | ---: | --- |
| _None_ |  |  |

| Repository | Events | Latest |
| --- | ---: | --- |
| _None_ |  |  |

| Action status | Events | Latest |
| --- | ---: | --- |
| _None_ |  |  |

| Freshness | Events | Latest |
| --- | ---: | --- |
| _None_ |  |  |


## Repair Dashboard

Last source update: Jul 31, 2026, 06:35 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 251 | 100% |
| Run attempts archived | 654 | audit |
| Latest successful clusters | 221 | 88.0% |
| Latest failed clusters | 30 | 12.0% |
| Latest cancelled clusters | 0 | 0.0% |
| Needs-human clusters | 22 | 8.8% |
| Fix actions failed | 16 | 5.2% |
| Fix actions blocked | 60 | 19.6% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 203 | 99.5% |
| Skipped mutation attempts | 1 | 0.5% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 251 clusters: 151 maintainer action, 34 automation snapshot, 50 intervention needed, 16 no pending action, 0 completed.
- Maintainer first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#107479](https://github.com/openclaw/openclaw/pull/107479) is merge_not_authorized: job does not allow merge.
- Intervention first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [automerge-openclaw-openclaw-116584](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-116584.md) is automation_failed: validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, apps [check:chang....
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#113663](https://github.com/openclaw/openclaw/pull/113663) is action_planned: Repair the contributor branch with the smallest header-composition change, preserve current-main OAuth settings discovery and auto-model....
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 151 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 34 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 50 | automation failure or blocker recorded |
| No Pending Action | 16 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 38 |
| merge_ready | 16 |
| merge_not_authorized | 97 |
| checks_blocked | 23 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 10 |
| automation_failed | 35 |
| automation_blocked | 15 |
| reviewed_no_action | 16 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#107479](https://github.com/openclaw/openclaw/pull/107479) | merge_not_authorized | job does not allow merge | Jul 18, 2026, 21:27 UTC | [automerge-openclaw-openclaw-107479](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-107479.md) | [29660618783](https://github.com/openclaw/clawsweeper/actions/runs/29660618783) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#67584](https://github.com/openclaw/openclaw/issues/67584) | maintainer_input | Quarantine this exact PR for central OpenClaw security handling without affecting classification of the non-security items. | Jul 17, 2026, 09:01 UTC | [gitcrawl-59-memory-wiki-per-agent-vault-path-isolation-for-multi-tenant-depl](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-59-memory-wiki-per-agent-vault-path-isolation-for-multi-tenant-depl.md) | [29568070623](https://github.com/openclaw/clawsweeper/actions/runs/29568070623) |
| [openclaw/crabbox](https://github.com/openclaw/crabbox) | [#1044](https://github.com/openclaw/crabbox/issues/1044) | maintainer_input | For https://github.com/openclaw/crabbox/issues/1044, identify a contributor willing to own ongoing Google Cloud Run sandbox support and provide liv... | Jul 17, 2026, 07:23 UTC | [issue-openclaw-crabbox-1044](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-1044.md) | [29562638791](https://github.com/openclaw/clawsweeper/actions/runs/29562638791) |
| [openclaw/discrawl](https://github.com/openclaw/discrawl) | [#130](https://github.com/openclaw/discrawl/pull/130) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Jul 14, 2026, 13:53 UTC | [issue-openclaw-discrawl-127](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-discrawl-127.md) | [29336372221](https://github.com/openclaw/clawsweeper/actions/runs/29336372221) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#107479](https://github.com/openclaw/openclaw/pull/107479) | merge_not_authorized | job does not allow merge | Jul 14, 2026, 13:02 UTC | [automerge-openclaw-openclaw-103304](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-103304.md) | [29333867746](https://github.com/openclaw/clawsweeper/actions/runs/29333867746) |
| [openclaw/discrawl](https://github.com/openclaw/discrawl) | [#129](https://github.com/openclaw/discrawl/pull/129) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Jul 14, 2026, 13:00 UTC | [issue-openclaw-discrawl-128](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-discrawl-128.md) | [29333817142](https://github.com/openclaw/clawsweeper/actions/runs/29333817142) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#106859](https://github.com/openclaw/openclaw/pull/106859) | merge_not_authorized | job does not allow merge | Jul 13, 2026, 22:27 UTC | [automerge-openclaw-openclaw-106528](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-106528.md) | [29288691960](https://github.com/openclaw/clawsweeper/actions/runs/29288691960) |
| [openclaw/wacli](https://github.com/openclaw/wacli) | [#302](https://github.com/openclaw/wacli/pull/302) | merge_not_authorized | job does not allow merge | Jul 13, 2026, 22:17 UTC | [automerge-openclaw-wacli-302](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-wacli-302.md) | [29288163697](https://github.com/openclaw/clawsweeper/actions/runs/29288163697) |
| [openclaw/wacli](https://github.com/openclaw/wacli) | [#302](https://github.com/openclaw/wacli/pull/302) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Jul 13, 2026, 21:36 UTC | [issue-openclaw-wacli-301](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-wacli-301.md) | [29285698281](https://github.com/openclaw/clawsweeper/actions/runs/29285698281) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#105379](https://github.com/openclaw/openclaw/pull/105379) | merge_not_authorized | job does not allow merge | Jul 12, 2026, 13:05 UTC | [automerge-openclaw-openclaw-105139](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-105139.md) | [29193400486](https://github.com/openclaw/clawsweeper/actions/runs/29193400486) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | [#510](https://github.com/openclaw/clawsweeper/pull/510) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Jul 12, 2026, 06:39 UTC | [issue-openclaw-clawsweeper-507](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-clawsweeper-507.md) | [29182600574](https://github.com/openclaw/clawsweeper/actions/runs/29182600574) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#104724](https://github.com/openclaw/openclaw/pull/104724) | merge_not_authorized | job does not allow merge | Jul 11, 2026, 21:47 UTC | [automerge-openclaw-openclaw-100922](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-100922.md) | [29167832225](https://github.com/openclaw/clawsweeper/actions/runs/29167832225) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#100934](https://github.com/openclaw/openclaw/pull/100934) | merge_not_authorized | job does not allow merge | Jul 11, 2026, 19:28 UTC | [automerge-openclaw-openclaw-100934](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-100934.md) | [29163686096](https://github.com/openclaw/clawsweeper/actions/runs/29163686096) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#100929](https://github.com/openclaw/openclaw/pull/100929) | merge_not_authorized | job does not allow merge | Jul 11, 2026, 19:22 UTC | [automerge-openclaw-openclaw-100929](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-100929.md) | [29164025010](https://github.com/openclaw/clawsweeper/actions/runs/29164025010) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#103331](https://github.com/openclaw/openclaw/pull/103331) | merge_not_authorized | job does not allow merge | Jul 11, 2026, 14:44 UTC | [automerge-openclaw-openclaw-103331](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-103331.md) | [29155769850](https://github.com/openclaw/clawsweeper/actions/runs/29155769850) |

#### Automation Snapshot

| Repository | Item | Lane state | Recorded status | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#113663](https://github.com/openclaw/openclaw/pull/113663) | action_planned | Repair the contributor branch with the smallest header-composition change, preserve current-main OAuth settings discovery and auto-model behavior,... | Jul 31, 2026, 06:35 UTC | [automerge-openclaw-openclaw-113663](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-113663.md) | [30609587993](https://github.com/openclaw/clawsweeper/actions/runs/30609587993) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#109679](https://github.com/openclaw/openclaw/pull/109679) | action_planned | The fix is still necessary and the existing writable PR is the best repair path, but it must be refreshed onto current main and pass exact-head rev... | Jul 17, 2026, 09:07 UTC | [automerge-openclaw-openclaw-109679](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-109679.md) | [29568565291](https://github.com/openclaw/clawsweeper/actions/runs/29568565291) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | [#635](https://github.com/openclaw/clawsweeper/pull/635) | action_planned | The bug is current, non-security-sensitive, narrowly implementable, and has no active implementation PR. | Jul 17, 2026, 03:35 UTC | [issue-openclaw-clawsweeper-635](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-clawsweeper-635.md) | [29552577333](https://github.com/openclaw/clawsweeper/actions/runs/29552577333) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#109149](https://github.com/openclaw/openclaw/pull/109149) | action_planned | The PR remains the best canonical fix and its branch is safely writable, but the adopted automerge repair loop cannot finish while the branch is be... | Jul 16, 2026, 21:17 UTC | [automerge-openclaw-openclaw-109149](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-109149.md) | [29535200692](https://github.com/openclaw/clawsweeper/actions/runs/29535200692) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | [#993](https://github.com/openclaw/openclaw-windows-node/pull/993) | action_planned | The report is a reproducible, non-security-sensitive presentation bug with a bounded field-propagation and formatting repair. | Jul 16, 2026, 10:33 UTC | [issue-openclaw-openclaw-windows-node-993](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-993.md) | [29491020995](https://github.com/openclaw/clawsweeper/actions/runs/29491020995) |
| [openclaw/crabbox](https://github.com/openclaw/crabbox) | [#1062](https://github.com/openclaw/crabbox/pull/1062) | action_planned | Rebase and narrowly repair the existing writable contributor branch, remove the prohibited changelog delta, then obtain exact-head validation and C... | Jul 16, 2026, 05:52 UTC | [automerge-openclaw-crabbox-1062](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-crabbox-1062.md) | [29474889991](https://github.com/openclaw/clawsweeper/actions/runs/29474889991) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#107691](https://github.com/openclaw/openclaw/pull/107691) | action_planned | Rebase and repair the writable contributor branch, resolve its failing test and lint surface, validate, and request a fresh exact-head review. | Jul 15, 2026, 16:53 UTC | [automerge-openclaw-openclaw-107691](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-107691.md) | [29434021623](https://github.com/openclaw/clawsweeper/actions/runs/29434021623) |
| [openclaw/discrawl](https://github.com/openclaw/discrawl) | [#130](https://github.com/openclaw/discrawl/pull/130) | action_planned | Repair the writable canonical branch, add regression coverage for the `--` argument boundary, rerun validation, and request a clean exact-head Code... | Jul 15, 2026, 00:55 UTC | [automerge-openclaw-discrawl-130](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-discrawl-130.md) | [29380122609](https://github.com/openclaw/clawsweeper/actions/runs/29380122609) |
| [openclaw/gogcli](https://github.com/openclaw/gogcli) | [#920](https://github.com/openclaw/gogcli/pull/920) | checks_blocked | checks are not clean: test: IN_PROGRESS, windows: IN_PROGRESS | Jul 14, 2026, 00:42 UTC | [issue-openclaw-gogcli-917](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-917.md) | [29294428609](https://github.com/openclaw/clawsweeper/actions/runs/29294428609) |
| [openclaw/gogcli](https://github.com/openclaw/gogcli) | [#902](https://github.com/openclaw/gogcli/pull/902) | checks_blocked | checks are not clean: test: IN_PROGRESS, windows: IN_PROGRESS | Jul 5, 2026, 05:32 UTC | [issue-openclaw-gogcli-899](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-899.md) | [28730293914](https://github.com/openclaw/clawsweeper/actions/runs/28730293914) |
| [openclaw/gogcli](https://github.com/openclaw/gogcli) | [#901](https://github.com/openclaw/gogcli/pull/901) | checks_blocked | checks are not clean: test: IN_PROGRESS, windows: IN_PROGRESS | Jul 5, 2026, 03:10 UTC | [issue-openclaw-gogcli-900](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-900.md) | [28727252178](https://github.com/openclaw/clawsweeper/actions/runs/28727252178) |
| [openclaw/crabbox](https://github.com/openclaw/crabbox) | [#757](https://github.com/openclaw/crabbox/pull/757) | checks_blocked | checks are not clean: Go: IN_PROGRESS, Release Check: IN_PROGRESS | Jul 1, 2026, 23:36 UTC | [issue-openclaw-crabbox-756](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-756.md) | [28554206071](https://github.com/openclaw/clawsweeper/actions/runs/28554206071) |
| [openclaw/gogcli](https://github.com/openclaw/gogcli) | [#890](https://github.com/openclaw/gogcli/pull/890) | checks_blocked | checks are not clean: test: IN_PROGRESS, windows: IN_PROGRESS | Jun 30, 2026, 05:56 UTC | [issue-openclaw-gogcli-889](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-889.md) | [28422442123](https://github.com/openclaw/clawsweeper/actions/runs/28422442123) |
| [openclaw/gogcli](https://github.com/openclaw/gogcli) | [#886](https://github.com/openclaw/gogcli/pull/886) | checks_blocked | checks are not clean: test: IN_PROGRESS, windows: IN_PROGRESS | Jun 29, 2026, 10:54 UTC | [issue-openclaw-gogcli-885](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-885.md) | [28365468958](https://github.com/openclaw/clawsweeper/actions/runs/28365468958) |
| [openclaw/crabbox](https://github.com/openclaw/crabbox) | [#734](https://github.com/openclaw/crabbox/pull/734) | checks_blocked | checks are not clean: Go: IN_PROGRESS, Release Check: IN_PROGRESS | Jun 26, 2026, 23:47 UTC | [issue-openclaw-crabbox-733](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-733.md) | [28271017991](https://github.com/openclaw/clawsweeper/actions/runs/28271017991) |

#### Intervention Needed

| Repository | Item | Lane state | Recorded blocker | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, apps [check:changed] apps/a... | Jul 31, 2026, 05:09 UTC | [automerge-openclaw-openclaw-116584](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-116584.md) | [30597758157](https://github.com/openclaw/clawsweeper/actions/runs/30597758157) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#106789](https://github.com/openclaw/openclaw/pull/106789) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Jul 30, 2026, 14:05 UTC | [automerge-openclaw-openclaw-106789](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-106789.md) | [30545211875](https://github.com/openclaw/clawsweeper/actions/runs/30545211875) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#114611](https://github.com/openclaw/openclaw/pull/114611) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Jul 30, 2026, 12:03 UTC | [automerge-openclaw-openclaw-114611](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-114611.md) | [30535493672](https://github.com/openclaw/clawsweeper/actions/runs/30535493672) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): validation command left 4 background process(es) after exit | Jul 19, 2026, 16:13 UTC | [automerge-openclaw-openclaw-110725](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-110725.md) | [29692504658](https://github.com/openclaw/clawsweeper/actions/runs/29692504658) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#107991](https://github.com/openclaw/openclaw/pull/107991) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Jul 19, 2026, 08:08 UTC | [automerge-openclaw-openclaw-107991](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-107991.md) | [29679002261](https://github.com/openclaw/clawsweeper/actions/runs/29679002261) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#110441](https://github.com/openclaw/openclaw/pull/110441) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Jul 18, 2026, 17:45 UTC | [automerge-openclaw-openclaw-110441](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-110441.md) | [29654100943](https://github.com/openclaw/clawsweeper/actions/runs/29654100943) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#104054](https://github.com/openclaw/openclaw/pull/104054) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Jul 18, 2026, 14:25 UTC | [automerge-openclaw-openclaw-104054](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-104054.md) | [29647728789](https://github.com/openclaw/clawsweeper/actions/runs/29647728789) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#108974](https://github.com/openclaw/openclaw/pull/108974) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Jul 18, 2026, 14:23 UTC | [automerge-openclaw-openclaw-108974](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-108974.md) | [29647728785](https://github.com/openclaw/clawsweeper/actions/runs/29647728785) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#109463](https://github.com/openclaw/openclaw/pull/109463) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Jul 18, 2026, 09:48 UTC | [automerge-openclaw-openclaw-109463](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-109463.md) | [29639588449](https://github.com/openclaw/clawsweeper/actions/runs/29639588449) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#107450](https://github.com/openclaw/openclaw/pull/107450) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Jul 16, 2026, 06:21 UTC | [automerge-openclaw-openclaw-107450](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-107450.md) | [29476143728](https://github.com/openclaw/clawsweeper/actions/runs/29476143728) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#105243](https://github.com/openclaw/openclaw/pull/105243) | automation_blocked | source PR #105243 is paused by clawsweeper:human-review; refusing to mutate the PR branch | Jul 14, 2026, 14:33 UTC | [automerge-openclaw-openclaw-105243](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-105243.md) | [29340935178](https://github.com/openclaw/clawsweeper/actions/runs/29340935178) |
| [openclaw/acpx](https://github.com/openclaw/acpx) | [#445](https://github.com/openclaw/acpx/pull/445) | automation_failed | The reported diagnostic bug remains present and no viable canonical implementation PR exists. | Jul 13, 2026, 23:14 UTC | [issue-openclaw-acpx-445](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-acpx-445.md) | [29292209057](https://github.com/openclaw/clawsweeper/actions/runs/29292209057) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm lint): $ node scripts/run-oxlint-shards.mjs [oxlint:core] starting [oxlint:core] finished [oxlint:extensions] start... | Jul 13, 2026, 20:43 UTC | [automerge-openclaw-openclaw-104485](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-104485.md) | [29280101463](https://github.com/openclaw/clawsweeper/actions/runs/29280101463) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | [cluster:issue-openclaw-openclaw-windows-node-969](cluster:issue-openclaw-openclaw-windows-node-969) | automation_failed | A writable executor must apply the fix artifact, run all required validation, and collect isolated WinUI proof before opening the PR. | Jul 12, 2026, 00:14 UTC | [issue-openclaw-openclaw-windows-node-969](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-969.md) | [29173264896](https://github.com/openclaw/clawsweeper/actions/runs/29173264896) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | [#970](https://github.com/openclaw/openclaw-windows-node/pull/970) | automation_failed | The focused UX defect is current and narrowly implementable, but no viable candidate PR exists. | Jul 12, 2026, 00:13 UTC | [issue-openclaw-openclaw-windows-node-970](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-970.md) | [29173264273](https://github.com/openclaw/clawsweeper/actions/runs/29173264273) |

#### No Pending Action

| Repository | Item | Lane state | Latest result | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Live preflight shows both the hinted canonical PR #70585 and listed candidate PR #61620 are already closed. Current main f5bb19e028fb69f1b837c2a0cf... | Jul 16, 2026, 09:38 UTC | [gitcrawl-55-subagent-announce-fall-back-to-best-effort-delivery](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-55-subagent-announce-fall-back-to-best-effort-delivery.md) | [29487615730](https://github.com/openclaw/clawsweeper/actions/runs/29487615730) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | All hydrated issues and pull requests are already closed. Current main at 17a533ce268957780a3480c9f0691593efa94153 contains the safer channel-owned... | Jul 12, 2026, 08:58 UTC | [gitcrawl-13714-fix-count-discord-acp-block-deliveries-as-visible-text](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-13714-fix-count-discord-acp-block-deliveries-as-visible-text.md) | [29186574234](https://github.com/openclaw/clawsweeper/actions/runs/29186574234) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#105100](https://github.com/openclaw/openclaw/pull/105100) | reviewed_no_action | The hydrated cluster materially changed after the automerge job was created: PR #104718 is already closed as superseded, PR #105100 is merged, and... | Jul 12, 2026, 08:15 UTC | [automerge-openclaw-openclaw-104718](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-104718.md) | [29185239992](https://github.com/openclaw/clawsweeper/actions/runs/29185239992) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | [#494](https://github.com/openclaw/clawsweeper/pull/494) | reviewed_no_action | No repair or mutation remains: PR #494 was merged into current main after a passing exact-head Codex review and successful checks, and linked issue... | Jul 11, 2026, 05:48 UTC | [automerge-openclaw-clawsweeper-494](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-clawsweeper-494.md) | [29141701220](https://github.com/openclaw/clawsweeper/actions/runs/29141701220) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#101489](https://github.com/openclaw/openclaw/pull/101489) | reviewed_no_action | Canonical PR #101489 is already closed and its fix is present on current main. Current main registers a detached child error listener before unref... | Jul 7, 2026, 11:55 UTC | [automerge-openclaw-openclaw-101489](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-101489.md) | [28863930775](https://github.com/openclaw/clawsweeper/actions/runs/28863930775) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | [#880](https://github.com/openclaw/openclaw-windows-node/issues/880) | reviewed_no_action | No new implementation PR should be created from this run. The hydrated live state shows #880 is already closed, and current main is at 87dc3dc79d7c... | Jun 28, 2026, 08:49 UTC | [issue-openclaw-openclaw-windows-node-880](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-880.md) | [28316917944](https://github.com/openclaw/clawsweeper/actions/runs/28316917944) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Preflight shows every hydrated cluster item is already closed. No open canonical PR needs repair, no close action is valid, and no fix PR is needed... | Jun 26, 2026, 09:26 UTC | [gitcrawl-6257-fix-use-ssrf-guarded-fetch-for-tts-provider-requests](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-6257-fix-use-ssrf-guarded-fetch-for-tts-provider-requests.md) | [28229160559](https://github.com/openclaw/clawsweeper/actions/runs/28229160559) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#95666](https://github.com/openclaw/openclaw/pull/95666) | reviewed_no_action | #95666 was already merged and closed in the hydrated preflight state, with maintainer merge proof and passing post-repair checks. Current main at 6... | Jun 23, 2026, 07:30 UTC | [automerge-openclaw-openclaw-95666](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-95666.md) | [28009633334](https://github.com/openclaw/clawsweeper/actions/runs/28009633334) |
| [openclaw/gogcli](https://github.com/openclaw/gogcli) | [#853](https://github.com/openclaw/gogcli/issues/853) | reviewed_no_action | No repair PR should be opened from this run. The hydrated source issue #853 is already closed, a maintainer explicitly stopped automation to take t... | Jun 20, 2026, 15:01 UTC | [issue-openclaw-gogcli-853](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-853.md) | [27851639404](https://github.com/openclaw/clawsweeper/actions/runs/27851639404) |
| [openclaw/gogcli](https://github.com/openclaw/gogcli) | [#837](https://github.com/openclaw/gogcli/pull/837) | reviewed_no_action | Current main is c02fdf7bc1a1b469e41e59c54ac0d71b83cc4024. The original repair target #834 is already closed and superseded by maintainer rewrite #8... | Jun 18, 2026, 11:53 UTC | [automerge-openclaw-gogcli-834](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-gogcli-834.md) | [27750240321](https://github.com/openclaw/clawsweeper/actions/runs/27750240321) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | The hydrated preflight artifact shows the representative #54217 and both requested open candidates #59138 and #61172 are already closed. No open ca... | Jun 16, 2026, 10:03 UTC | [gitcrawl-8567-claude-document-architecture-ta-vz-n](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-8567-claude-document-architecture-ta-vz-n.md) | [27609622955](https://github.com/openclaw/clawsweeper/actions/runs/27609622955) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | No mutating action is available or needed. The hydrated preflight shows all primary cluster refs are already closed, and current main at 3ce3ed668d... | Jun 15, 2026, 10:25 UTC | [gitcrawl-7925-fix-plugin-sdk-add-compat-to-exported-subpaths](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-7925-fix-plugin-sdk-add-compat-to-exported-subpaths.md) | [27539722216](https://github.com/openclaw/clawsweeper/actions/runs/27539722216) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Hydrated preflight state does not contain any open ClawHub account-deletion login-loop issue or PR. All provided candidate refs are already closed,... | Jun 13, 2026, 09:20 UTC | [gitcrawl-17429-clawdhub-login-loop-after-account-deletion-oauth-completes-but-n](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-17429-clawdhub-login-loop-after-account-deletion-oauth-completes-but-n.md) | [27462675568](https://github.com/openclaw/clawsweeper/actions/runs/27462675568) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | The hydrated live refs do not match the iFly false-positive reports named by the job. All eight target refs are already closed and concern unrelate... | Jun 12, 2026, 12:30 UTC | [gitcrawl-17427-false-positive-ifly-image-understanding-is-100-safe-flagged-inco](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-17427-false-positive-ifly-image-understanding-is-100-safe-flagged-inco.md) | [27415606776](https://github.com/openclaw/clawsweeper/actions/runs/27415606776) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | [#279](https://github.com/openclaw/clawsweeper/pull/279) | reviewed_no_action | No repair remains. PR #279 was already reviewed, validated, and merged as current main commit 223cd99cf1905f83b84d7373d96618403ef0442d. All hydrate... | Jun 11, 2026, 18:05 UTC | [automerge-openclaw-clawsweeper-279](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-clawsweeper-279.md) | [27363471323](https://github.com/openclaw/clawsweeper/actions/runs/27363471323) |

#### Completed

| Repository | Item | Lane state | Recorded outcome | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

### Clusters Needing Inspection

| Cluster | State | Reason | Report | Run |
| --- | --- | --- | --- | --- |
| automerge-openclaw-openclaw-116584 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, apps [check:changed] apps/a... | [automerge-openclaw-openclaw-116584](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-116584.md) | [30597758157](https://github.com/openclaw/clawsweeper/actions/runs/30597758157) |
| automerge-openclaw-openclaw-110725 | fix failed | validation command failed (pnpm check:changed): validation command left 4 background process(es) after exit | [automerge-openclaw-openclaw-110725](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-110725.md) | [29692504658](https://github.com/openclaw/clawsweeper/actions/runs/29692504658) |
| automerge-openclaw-openclaw-107479 | merge_canonical blocked | job does not allow merge | [automerge-openclaw-openclaw-107479](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-107479.md) | [29660618783](https://github.com/openclaw/clawsweeper/actions/runs/29660618783) |
| issue-openclaw-crabbox-1044 | needs human | For https://github.com/openclaw/crabbox/issues/1044, identify a contributor willing to own ongoing Google Cloud Run sandbox support and provide liv... | [issue-openclaw-crabbox-1044](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-1044.md) | [29562638791](https://github.com/openclaw/clawsweeper/actions/runs/29562638791) |
| automerge-openclaw-openclaw-105243 | repair_contributor_branch blocked | source PR #105243 is paused by clawsweeper:human-review; refusing to mutate the PR branch | [automerge-openclaw-openclaw-105243](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-105243.md) | [29340935178](https://github.com/openclaw/clawsweeper/actions/runs/29340935178) |
| automerge-openclaw-openclaw-103304 | repair_contributor_branch blocked | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [automerge-openclaw-openclaw-103304](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-103304.md) | [29333867746](https://github.com/openclaw/clawsweeper/actions/runs/29333867746) |
| issue-openclaw-gogcli-917 | merge_canonical blocked | checks are not clean: test: IN_PROGRESS, windows: IN_PROGRESS | [issue-openclaw-gogcli-917](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-917.md) | [29294428609](https://github.com/openclaw/clawsweeper/actions/runs/29294428609) |
| automerge-openclaw-openclaw-106528 | repair_contributor_branch blocked | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [automerge-openclaw-openclaw-106528](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-106528.md) | [29288691960](https://github.com/openclaw/clawsweeper/actions/runs/29288691960) |
| automerge-openclaw-wacli-302 | merge_canonical blocked | job does not allow merge | [automerge-openclaw-wacli-302](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-wacli-302.md) | [29288163697](https://github.com/openclaw/clawsweeper/actions/runs/29288163697) |
| automerge-openclaw-openclaw-104485 | fix failed | validation command failed (pnpm lint): $ node scripts/run-oxlint-shards.mjs [oxlint:core] starting [oxlint:core] finished [oxlint:extensions] start... | [automerge-openclaw-openclaw-104485](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-104485.md) | [29280101463](https://github.com/openclaw/clawsweeper/actions/runs/29280101463) |
| automerge-openclaw-openclaw-105139 | repair_contributor_branch blocked | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [automerge-openclaw-openclaw-105139](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-105139.md) | [29193400486](https://github.com/openclaw/clawsweeper/actions/runs/29193400486) |
| automerge-openclaw-openclaw-100922 | repair_contributor_branch blocked | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [automerge-openclaw-openclaw-100922](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-100922.md) | [29167832225](https://github.com/openclaw/clawsweeper/actions/runs/29167832225) |
| automerge-openclaw-openclaw-100934 | merge_canonical blocked | job does not allow merge | [automerge-openclaw-openclaw-100934](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-100934.md) | [29163686096](https://github.com/openclaw/clawsweeper/actions/runs/29163686096) |
| automerge-openclaw-openclaw-100929 | merge_canonical blocked | job does not allow merge | [automerge-openclaw-openclaw-100929](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-100929.md) | [29164025010](https://github.com/openclaw/clawsweeper/actions/runs/29164025010) |
| automerge-openclaw-openclaw-103331 | merge_canonical blocked | job does not allow merge | [automerge-openclaw-openclaw-103331](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-103331.md) | [29155769850](https://github.com/openclaw/clawsweeper/actions/runs/29155769850) |
| automerge-openclaw-clawsweeper-495 | merge_canonical blocked | job does not allow merge | [automerge-openclaw-clawsweeper-495](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-clawsweeper-495.md) | [29148392317](https://github.com/openclaw/clawsweeper/actions/runs/29148392317) |
| issue-openclaw-crabbox-1045 | needs human | Clarify what “Emoy” requests, including the affected Crabbox command or provider, expected behavior, actual behavior, reproduction steps, version/e... | [issue-openclaw-crabbox-1045](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-1045.md) | [29138972866](https://github.com/openclaw/clawsweeper/actions/runs/29138972866) |
| automerge-openclaw-clawsweeper-488 | merge_canonical blocked | job does not allow merge | [automerge-openclaw-clawsweeper-488](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-clawsweeper-488.md) | [29122610575](https://github.com/openclaw/clawsweeper/actions/runs/29122610575) |
| issue-openclaw-peekaboo-239 | execute_fix blocked | validation command failed (swift test --package-path Core/PeekabooCore --filter PeekabooBridgeTests): [0/1] Planning build Building for debugging..... | [issue-openclaw-peekaboo-239](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-peekaboo-239.md) | [29087586496](https://github.com/openclaw/clawsweeper/actions/runs/29087586496) |
| automerge-openclaw-openclaw-102264 | repair_contributor_branch blocked | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [automerge-openclaw-openclaw-102264](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-102264.md) | [29066974557](https://github.com/openclaw/clawsweeper/actions/runs/29066974557) |
| automerge-openclaw-openclaw-102992 | repair_contributor_branch blocked | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [automerge-openclaw-openclaw-102992](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-102992.md) | [29049099661](https://github.com/openclaw/clawsweeper/actions/runs/29049099661) |
| automerge-openclaw-openclaw-101999 | merge_canonical blocked | job does not allow merge | [automerge-openclaw-openclaw-101999](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-101999.md) | [29021203334](https://github.com/openclaw/clawsweeper/actions/runs/29021203334) |
| automerge-openclaw-openclaw-102124 | repair_contributor_branch blocked | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [automerge-openclaw-openclaw-102124](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-102124.md) | [28980031922](https://github.com/openclaw/clawsweeper/actions/runs/28980031922) |
| automerge-openclaw-openclaw-101748 | merge_canonical blocked | job does not allow merge | [automerge-openclaw-openclaw-101748](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-101748.md) | [28956830114](https://github.com/openclaw/clawsweeper/actions/runs/28956830114) |
| gitcrawl-2284-feat-google-add-google-vertex-ai-provider-with-adc-auth-and-glob | close_superseded skipped | Superseded closeout is clear, but the job requires fix-first closeout and #87800 has not landed. | [gitcrawl-2284-feat-google-add-google-vertex-ai-provider-with-adc-auth-and-glob](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-2284-feat-google-add-google-vertex-ai-provider-with-adc-auth-and-glob.md) | [28930788648](https://github.com/openclaw/clawsweeper/actions/runs/28930788648) |
| automerge-openclaw-openclaw-100845 | repair_contributor_branch blocked | source PR #100845 is paused by clawsweeper:human-review; refusing to mutate the PR branch | [automerge-openclaw-openclaw-100845](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-100845.md) | [28921805127](https://github.com/openclaw/clawsweeper/actions/runs/28921805127) |
| automerge-openclaw-openclaw-102007 | merge_canonical blocked | job does not allow merge | [automerge-openclaw-openclaw-102007](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-102007.md) | [28921538369](https://github.com/openclaw/clawsweeper/actions/runs/28921538369) |
| automerge-openclaw-openclaw-101752 | merge_canonical blocked | job does not allow merge | [automerge-openclaw-openclaw-101752](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-101752.md) | [28895182759](https://github.com/openclaw/clawsweeper/actions/runs/28895182759) |
| automerge-openclaw-openclaw-101209 | merge_canonical blocked | job does not allow merge | [automerge-openclaw-openclaw-101209](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-101209.md) | [28892324108](https://github.com/openclaw/clawsweeper/actions/runs/28892324108) |
| automerge-openclaw-openclaw-101175 | repair_contributor_branch blocked | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [automerge-openclaw-openclaw-101175](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-101175.md) | [28875908520](https://github.com/openclaw/clawsweeper/actions/runs/28875908520) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [automerge-openclaw-openclaw-116584](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-116584.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, apps [check:changed] apps/a... | [30597758157](https://github.com/openclaw/clawsweeper/actions/runs/30597758157) |
| [automerge-openclaw-openclaw-116584](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-116584.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, apps [check:changed] apps/a... | [30597758157](https://github.com/openclaw/clawsweeper/actions/runs/30597758157) |
| [automerge-openclaw-openclaw-110725](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-110725.md) | failed |  |  | validation command failed (pnpm check:changed): validation command left 4 background process(es) after exit | [29692504658](https://github.com/openclaw/clawsweeper/actions/runs/29692504658) |
| [automerge-openclaw-openclaw-110725](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-110725.md) | blocked |  |  | validation command failed (pnpm check:changed): validation command left 4 background process(es) after exit | [29692504658](https://github.com/openclaw/clawsweeper/actions/runs/29692504658) |
| [automerge-openclaw-openclaw-105243](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-105243.md) | blocked | [#105243](https://github.com/openclaw/openclaw/pull/105243) |  | source PR #105243 is paused by clawsweeper:human-review; refusing to mutate the PR branch | [29340935178](https://github.com/openclaw/clawsweeper/actions/runs/29340935178) |
| [automerge-openclaw-openclaw-103304](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-103304.md) | blocked | [#103304](https://github.com/openclaw/openclaw/pull/103304) |  | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [29333867746](https://github.com/openclaw/clawsweeper/actions/runs/29333867746) |
| [automerge-openclaw-openclaw-106528](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-106528.md) | blocked | [#106528](https://github.com/openclaw/openclaw/pull/106528) |  | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [29288691960](https://github.com/openclaw/clawsweeper/actions/runs/29288691960) |
| [automerge-openclaw-openclaw-104485](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-104485.md) | failed |  |  | validation command failed (pnpm lint): $ node scripts/run-oxlint-shards.mjs [oxlint:core] starting [oxlint:core] finished [oxlint:extensions] start... | [29280101463](https://github.com/openclaw/clawsweeper/actions/runs/29280101463) |
| [automerge-openclaw-openclaw-104485](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-104485.md) | blocked |  |  | validation command failed (pnpm lint): $ node scripts/run-oxlint-shards.mjs [oxlint:core] starting [oxlint:core] finished [oxlint:extensions] start... | [29280101463](https://github.com/openclaw/clawsweeper/actions/runs/29280101463) |
| [automerge-openclaw-openclaw-105139](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-105139.md) | blocked | [#105139](https://github.com/openclaw/openclaw/pull/105139) |  | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [29193400486](https://github.com/openclaw/clawsweeper/actions/runs/29193400486) |
| [automerge-openclaw-openclaw-100922](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-100922.md) | blocked | [#100922](https://github.com/openclaw/openclaw/pull/100922) |  | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [29167832225](https://github.com/openclaw/clawsweeper/actions/runs/29167832225) |
| [issue-openclaw-peekaboo-239](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-peekaboo-239.md) | blocked |  |  | validation command failed (swift test --package-path Core/PeekabooCore --filter PeekabooBridgeTests): [0/1] Planning build Building for debugging..... | [29087586496](https://github.com/openclaw/clawsweeper/actions/runs/29087586496) |
| [automerge-openclaw-openclaw-102264](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-102264.md) | blocked | [#102264](https://github.com/openclaw/openclaw/pull/102264) |  | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [29066974557](https://github.com/openclaw/clawsweeper/actions/runs/29066974557) |
| [automerge-openclaw-openclaw-102992](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-102992.md) | blocked | [#102992](https://github.com/openclaw/openclaw/pull/102992) |  | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [29049099661](https://github.com/openclaw/clawsweeper/actions/runs/29049099661) |
| [automerge-openclaw-openclaw-102124](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-102124.md) | blocked | [#102124](https://github.com/openclaw/openclaw/pull/102124) |  | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [28980031922](https://github.com/openclaw/clawsweeper/actions/runs/28980031922) |
| [automerge-openclaw-openclaw-100845](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-100845.md) | blocked | [#100845](https://github.com/openclaw/openclaw/pull/100845) |  | source PR #100845 is paused by clawsweeper:human-review; refusing to mutate the PR branch | [28921805127](https://github.com/openclaw/clawsweeper/actions/runs/28921805127) |
| [automerge-openclaw-openclaw-101175](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-101175.md) | blocked | [#101175](https://github.com/openclaw/openclaw/pull/101175) |  | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [28875908520](https://github.com/openclaw/clawsweeper/actions/runs/28875908520) |
| [automerge-openclaw-openclaw-100983](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-100983.md) | blocked | [#100983](https://github.com/openclaw/openclaw/pull/100983) |  | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [28822058252](https://github.com/openclaw/clawsweeper/actions/runs/28822058252) |
| [automerge-openclaw-openclaw-99076](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-99076.md) | blocked | [#99076](https://github.com/openclaw/openclaw/pull/99076) |  | source PR #99076 is paused by clawsweeper:human-review; refusing to mutate the PR branch | [28765891970](https://github.com/openclaw/clawsweeper/actions/runs/28765891970) |
| [automerge-openclaw-openclaw-99165](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-99165.md) | blocked | [#99165](https://github.com/openclaw/openclaw/pull/99165) |  | source PR #99165 is paused by clawsweeper:human-review; refusing to mutate the PR branch | [28620395378](https://github.com/openclaw/clawsweeper/actions/runs/28620395378) |
| [automerge-openclaw-openclaw-97889](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-97889.md) | failed |  |  | Codex review-fix worker timed out after 30000ms | [28552759119](https://github.com/openclaw/clawsweeper/actions/runs/28552759119) |
| [automerge-openclaw-openclaw-97889](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-97889.md) | blocked |  |  | Codex review-fix worker timed out after 30000ms | [28552759119](https://github.com/openclaw/clawsweeper/actions/runs/28552759119) |
| [issue-openclaw-clickclack-34](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-clickclack-34.md) | blocked |  |  | validation_script_missing: required pnpm --filter is unavailable in target checkout | [28490687566](https://github.com/openclaw/clawsweeper/actions/runs/28490687566) |
| [automerge-openclaw-openclaw-96601](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-96601.md) | blocked | [#96601](https://github.com/openclaw/openclaw/pull/96601) |  | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [28139596023](https://github.com/openclaw/clawsweeper/actions/runs/28139596023) |
| [automerge-openclaw-openclaw-94325](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-94325.md) | failed |  |  | To https://github.com/sunlit-deng/openclaw.git ! [remote rejected] HEAD -> fix/issue-94202 (Unable to determine if workflow can be created or updat... | [28037469837](https://github.com/openclaw/clawsweeper/actions/runs/28037469837) |

### Top Blocked Reasons

| Reason | Latest count | Example cluster |
| --- | ---: | --- |
| job does not allow merge | 101 | [automerge-openclaw-openclaw-107479](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-107479.md) |
| checks are not clean: test: IN_PROGRESS, windows: IN_PROGRESS | 9 | [issue-openclaw-gogcli-917](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-917.md) |
| checks are not clean: Go: IN_PROGRESS, Release Check: IN_PROGRESS | 7 | [issue-openclaw-crabbox-756](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-756.md) |
| checks are not clean: windows: IN_PROGRESS | 2 | [issue-openclaw-gogcli-872](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-872.md) |
| Superseded closeout is clear, but the job requires fix-first closeout and #87800 has not landed. | 1 | [gitcrawl-2284-feat-google-add-google-vertex-ai-provider-with-adc-auth-and-glob](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-2284-feat-google-add-google-vertex-ai-provider-with-adc-auth-and-glob.md) |
| checks are not clean: build: FAILURE | 1 | [issue-openclaw-spogo-32](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-spogo-32.md) |
| checks are not clean: build (windows-latest): FAILURE | 1 | [issue-openclaw-mcporter-214](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-mcporter-214.md) |
| checks are not clean: Go: IN_PROGRESS | 1 | [issue-openclaw-crabbox-481](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-481.md) |
| checks are not clean: image: IN_PROGRESS | 1 | [issue-openclaw-gogcli-804](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-804.md) |
| checks are not clean: notify: CANCELLED | 1 | [issue-openclaw-clawsweeper-225](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-clawsweeper-225.md) |

### Latest Repair Closures

| Target | Action | Title | Closed | Cluster | Report | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

