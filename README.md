# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Aug 8, 2026, 21:29 UTC

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Apply finished | Aug 8, 2026, 21:29 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/31279245536) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Planning review | Aug 8, 2026, 21:10 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/31278641833) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Aug 8, 2026, 20:05 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/31276046485) |

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

Last source update: Aug 8, 2026, 21:22 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 436 | 100% |
| Run attempts archived | 1200 | audit |
| Latest successful clusters | 371 | 85.1% |
| Latest failed clusters | 63 | 14.4% |
| Latest cancelled clusters | 2 | 0.5% |
| Needs-human clusters | 26 | 6.0% |
| Fix actions failed | 22 | 4.4% |
| Fix actions blocked | 84 | 16.9% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 304 | 99.7% |
| Skipped mutation attempts | 1 | 0.3% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 436 clusters: 194 maintainer action, 86 automation snapshot, 132 intervention needed, 24 no pending action, 0 completed.
- Maintainer first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#120652](https://github.com/openclaw/openclaw/pull/120652) is merge_ready: issue implementation PR checks are green; merge intentionally blocked for this lane.
- Intervention first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#98870](https://github.com/openclaw/openclaw/pull/98870) is automation_failed: Read-only workspace prevents implementation, focused validation, branch creation, and PR creation..
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#99277](https://github.com/openclaw/openclaw/pull/99277) is action_planned: Current-main bounded bug; create a new focused fix rather than reviving closed branches..
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 194 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 86 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 132 | automation failure or blocker recorded |
| No Pending Action | 24 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 48 |
| merge_ready | 47 |
| merge_not_authorized | 99 |
| checks_blocked | 41 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 44 |
| automation_failed | 73 |
| automation_blocked | 59 |
| reviewed_no_action | 24 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120652](https://github.com/openclaw/openclaw/pull/120652) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 8, 2026, 17:52 UTC | [issue-openclaw-openclaw-97601](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-97601.md) | [31267879445](https://github.com/openclaw/clawsweeper/actions/runs/31267879445) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120586](https://github.com/openclaw/openclaw/pull/120586) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 8, 2026, 12:24 UTC | [issue-openclaw-openclaw-120557](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120557.md) | [31255477396](https://github.com/openclaw/clawsweeper/actions/runs/31255477396) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120583](https://github.com/openclaw/openclaw/pull/120583) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 8, 2026, 12:18 UTC | [issue-openclaw-openclaw-120567](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120567.md) | [31255589161](https://github.com/openclaw/clawsweeper/actions/runs/31255589161) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120569](https://github.com/openclaw/openclaw/pull/120569) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 8, 2026, 11:30 UTC | [issue-openclaw-openclaw-120356](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120356.md) | [31253293896](https://github.com/openclaw/clawsweeper/actions/runs/31253293896) |
| [openclaw/crabbox](https://github.com/openclaw/crabbox) | [#1252](https://github.com/openclaw/crabbox/pull/1252) | merge_not_authorized | job does not allow merge | Aug 8, 2026, 08:43 UTC | [automerge-openclaw-crabbox-1252](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-crabbox-1252.md) | [31248338546](https://github.com/openclaw/clawsweeper/actions/runs/31248338546) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120347](https://github.com/openclaw/openclaw/issues/120347) | maintainer_input | Approve or reject changing sessions_send so arbitrary explicit missing key-shaped targets return structured not-found instead of materializing a se... | Aug 7, 2026, 20:52 UTC | [issue-openclaw-openclaw-87336](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-87336.md) | [31216402645](https://github.com/openclaw/clawsweeper/actions/runs/31216402645) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120298](https://github.com/openclaw/openclaw/pull/120298) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 7, 2026, 17:13 UTC | [issue-openclaw-openclaw-120253](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120253.md) | [31198891319](https://github.com/openclaw/clawsweeper/actions/runs/31198891319) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#99518](https://github.com/openclaw/openclaw/issues/99518) | maintainer_input | Route this exact approval-boundary report to central OpenClaw security handling without blocking the non-security fix. | Aug 7, 2026, 12:31 UTC | [issue-openclaw-openclaw-120134](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120134.md) | [31176038883](https://github.com/openclaw/clawsweeper/actions/runs/31176038883) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120215](https://github.com/openclaw/openclaw/pull/120215) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 7, 2026, 10:26 UTC | [issue-openclaw-openclaw-120178](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120178.md) | [31166546343](https://github.com/openclaw/clawsweeper/actions/runs/31166546343) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120150](https://github.com/openclaw/openclaw/pull/120150) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 7, 2026, 05:21 UTC | [issue-openclaw-openclaw-120142](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120142.md) | [31148564805](https://github.com/openclaw/clawsweeper/actions/runs/31148564805) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120143](https://github.com/openclaw/openclaw/pull/120143) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 7, 2026, 04:26 UTC | [issue-openclaw-openclaw-89254](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-89254.md) | [31145403874](https://github.com/openclaw/clawsweeper/actions/runs/31145403874) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120100](https://github.com/openclaw/openclaw/pull/120100) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 7, 2026, 01:32 UTC | [issue-openclaw-openclaw-120060](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120060.md) | [31135214713](https://github.com/openclaw/clawsweeper/actions/runs/31135214713) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119968](https://github.com/openclaw/openclaw/pull/119968) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 6, 2026, 14:39 UTC | [issue-openclaw-openclaw-119551](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119551.md) | [31106840902](https://github.com/openclaw/clawsweeper/actions/runs/31106840902) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119901](https://github.com/openclaw/openclaw/pull/119901) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 6, 2026, 09:41 UTC | [issue-openclaw-openclaw-119884](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119884.md) | [31087096308](https://github.com/openclaw/clawsweeper/actions/runs/31087096308) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119849](https://github.com/openclaw/openclaw/pull/119849) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 6, 2026, 05:58 UTC | [issue-openclaw-openclaw-39461](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-39461.md) | [31074229108](https://github.com/openclaw/clawsweeper/actions/runs/31074229108) |

#### Automation Snapshot

| Repository | Item | Lane state | Recorded status | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#99277](https://github.com/openclaw/openclaw/pull/99277) | action_planned | Current-main bounded bug; create a new focused fix rather than reviving closed branches. | Aug 8, 2026, 20:05 UTC | [issue-openclaw-openclaw-99277](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-99277.md) | [31275822054](https://github.com/openclaw/clawsweeper/actions/runs/31275822054) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120550](https://github.com/openclaw/openclaw/pull/120550) | checks_blocked | checks are not clean: checks-node-compact-small-7: IN_PROGRESS | Aug 8, 2026, 09:26 UTC | [issue-openclaw-openclaw-120536](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120536.md) | [31249008962](https://github.com/openclaw/clawsweeper/actions/runs/31249008962) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119717](https://github.com/openclaw/openclaw/pull/119717) | action_planned | Rebase onto current main and narrow the delta to configured-command ordering plus focused regression coverage; request exact-head re-review after r... | Aug 8, 2026, 08:11 UTC | [automerge-openclaw-openclaw-119717](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119717.md) | [31247675426](https://github.com/openclaw/clawsweeper/actions/runs/31247675426) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120413](https://github.com/openclaw/openclaw/pull/120413) | action_planned | Targeted config mutations should validate and write only their requested change; explicit doctor --fix remains the migration owner. | Aug 8, 2026, 03:57 UTC | [issue-openclaw-openclaw-120413](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120413.md) | [31238109134](https://github.com/openclaw/clawsweeper/actions/runs/31238109134) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119778](https://github.com/openclaw/openclaw/pull/119778) | action_planned | Repair the existing source branch; do not replace it, close it, or merge it in this autofix job. | Aug 8, 2026, 02:10 UTC | [automerge-openclaw-openclaw-119778](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119778.md) | [31234166476](https://github.com/openclaw/clawsweeper/actions/runs/31234166476) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119731](https://github.com/openclaw/openclaw/pull/119731) | action_planned | Repair the canonical PR branch; do not merge in autofix mode. | Aug 7, 2026, 23:09 UTC | [automerge-openclaw-openclaw-119731](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119731.md) | [31225965400](https://github.com/openclaw/clawsweeper/actions/runs/31225965400) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120247](https://github.com/openclaw/openclaw/pull/120247) | action_planned | Rebase/refresh the existing writable branch, inspect and repair or classify the native-i18n failure, then rerun changed-surface validation and exac... | Aug 7, 2026, 15:01 UTC | [issue-openclaw-openclaw-120228](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120228.md) | [31187693688](https://github.com/openclaw/clawsweeper/actions/runs/31187693688) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120249](https://github.com/openclaw/openclaw/pull/120249) | checks_blocked | checks are not clean: checks-node-compact-large-8: IN_PROGRESS | Aug 7, 2026, 14:48 UTC | [issue-openclaw-openclaw-91860](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-91860.md) | [31183812103](https://github.com/openclaw/clawsweeper/actions/runs/31183812103) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118688](https://github.com/openclaw/openclaw/pull/118688) | action_planned | Repair the contributor branch with a typed, matching compaction/lock cause recorded at the delivery suspension producer; do not infer causal owners... | Aug 7, 2026, 13:23 UTC | [automerge-openclaw-openclaw-118688](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118688.md) | [31181944520](https://github.com/openclaw/clawsweeper/actions/runs/31181944520) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120076](https://github.com/openclaw/openclaw/pull/120076) | action_planned | Repair the editable same-repository contributor branch; no merge or close is authorized in this autofix job. | Aug 7, 2026, 07:30 UTC | [automerge-openclaw-openclaw-120076](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-120076.md) | [31157252078](https://github.com/openclaw/clawsweeper/actions/runs/31157252078) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120130](https://github.com/openclaw/openclaw/pull/120130) | action_planned | The failing behavior is isolated to test synchronization; a narrow repair can preserve runtime behavior and original deadline semantics. | Aug 7, 2026, 04:47 UTC | [issue-openclaw-openclaw-120130](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120130.md) | [31147960827](https://github.com/openclaw/clawsweeper/actions/runs/31147960827) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119975](https://github.com/openclaw/openclaw/pull/119975) | action_planned | Repair the same-repository writable branch with process- and request-bound boot-owner state, then obtain exact-head review; merge remains disabled... | Aug 7, 2026, 02:11 UTC | [automerge-openclaw-openclaw-119975](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119975.md) | [31140156832](https://github.com/openclaw/clawsweeper/actions/runs/31140156832) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120076](https://github.com/openclaw/openclaw/pull/120076) | checks_blocked | checks are not clean: checks-node-compact-large-1: FAILURE, checks-node-compact-large-3: FAILURE, check-dependencies: FAILURE, check-test-types: FA... | Aug 7, 2026, 00:30 UTC | [issue-openclaw-openclaw-120019](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120019.md) | [31131169980](https://github.com/openclaw/clawsweeper/actions/runs/31131169980) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119968](https://github.com/openclaw/openclaw/pull/119968) | action_planned | Repair the canonical same-repo branch; do not merge or close it. | Aug 7, 2026, 00:01 UTC | [automerge-openclaw-openclaw-119968](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119968.md) | [31132517825](https://github.com/openclaw/clawsweeper/actions/runs/31132517825) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119983](https://github.com/openclaw/openclaw/pull/119983) | checks_blocked | checks are not clean: preflight: QUEUED | Aug 6, 2026, 15:20 UTC | [issue-openclaw-openclaw-119962](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119962.md) | [31111783081](https://github.com/openclaw/clawsweeper/actions/runs/31111783081) |

#### Intervention Needed

| Repository | Item | Lane state | Recorded blocker | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#98870](https://github.com/openclaw/openclaw/pull/98870) | automation_failed | Read-only workspace prevents implementation, focused validation, branch creation, and PR creation. | Aug 8, 2026, 21:22 UTC | [issue-openclaw-openclaw-98870](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-98870.md) | [31277909668](https://github.com/openclaw/clawsweeper/actions/runs/31277909668) |
| [openclaw/crabpot](https://github.com/openclaw/crabpot) | [#283](https://github.com/openclaw/crabpot/pull/283) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Aug 8, 2026, 20:09 UTC | [automerge-openclaw-crabpot-283](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-crabpot-283.md) | [31275987820](https://github.com/openclaw/clawsweeper/actions/runs/31275987820) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#97287](https://github.com/openclaw/openclaw/pull/97287) | automation_blocked | No node_modules or pnpm store is present in the target checkout. Read-only sandboxing prevents dependency installation, so the mandatory node-sdk s... | Aug 8, 2026, 14:03 UTC | [issue-openclaw-openclaw-97287](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-97287.md) | [31260628490](https://github.com/openclaw/clawsweeper/actions/runs/31260628490) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118685](https://github.com/openclaw/openclaw/pull/118685) | automation_blocked | autofix-only job cannot merge | Aug 8, 2026, 09:21 UTC | [automerge-openclaw-openclaw-118685](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118685.md) | [31249116745](https://github.com/openclaw/clawsweeper/actions/runs/31249116745) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | Codex /review timed out after 113403ms | Aug 8, 2026, 07:06 UTC | [issue-openclaw-openclaw-120488](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120488.md) | [31242527292](https://github.com/openclaw/clawsweeper/actions/runs/31242527292) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/a... | Aug 8, 2026, 05:11 UTC | [issue-openclaw-openclaw-120449](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120449.md) | [31240016267](https://github.com/openclaw/clawsweeper/actions/runs/31240016267) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#102135](https://github.com/openclaw/openclaw/pull/102135) | automation_failed | Create one narrow fix PR from clawsweeper/issue-openclaw-openclaw-102135; do not merge or close the issue in this lane. | Aug 7, 2026, 19:30 UTC | [issue-openclaw-openclaw-102135](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-102135.md) | [31208750943](https://github.com/openclaw/clawsweeper/actions/runs/31208750943) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | Codex /review did not pass after final base synchronization: Merge blocked by one P1 correctness issue in closer-origin schema precedence. | Aug 7, 2026, 17:22 UTC | [issue-openclaw-openclaw-92884](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-92884.md) | [31198629777](https://github.com/openclaw/clawsweeper/actions/runs/31198629777) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120247](https://github.com/openclaw/openclaw/pull/120247) | automation_blocked | autofix-only job cannot merge | Aug 7, 2026, 16:07 UTC | [automerge-openclaw-openclaw-120247](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-120247.md) | [31193680622](https://github.com/openclaw/clawsweeper/actions/runs/31193680622) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119160](https://github.com/openclaw/openclaw/pull/119160) | automation_blocked | autofix-only job cannot merge | Aug 7, 2026, 13:17 UTC | [automerge-openclaw-openclaw-119160](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119160.md) | [31179551119](https://github.com/openclaw/clawsweeper/actions/runs/31179551119) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | Codex /review timed out after 30000ms | Aug 7, 2026, 12:01 UTC | [issue-openclaw-openclaw-120207](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120207.md) | [31171079611](https://github.com/openclaw/clawsweeper/actions/runs/31171079611) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120157](https://github.com/openclaw/openclaw/pull/120157) | automation_failed | Existing behavior is broken lifecycle preservation, not a new feature or security boundary change. | Aug 7, 2026, 08:35 UTC | [issue-openclaw-openclaw-120157](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120157.md) | [31158543465](https://github.com/openclaw/clawsweeper/actions/runs/31158543465) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs, bundledChannelConfigM... | Aug 7, 2026, 07:43 UTC | [automerge-openclaw-openclaw-120143](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-120143.md) | [31155145929](https://github.com/openclaw/clawsweeper/actions/runs/31155145929) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): validation command runtime budget exhausted | Aug 7, 2026, 06:57 UTC | [automerge-openclaw-openclaw-119172](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119172.md) | [31151537181](https://github.com/openclaw/clawsweeper/actions/runs/31151537181) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#44289](https://github.com/openclaw/openclaw/pull/44289) | automation_failed | The checkout cannot be modified, and pnpm cannot initialize its Corepack cache in this read-only environment; a writable executor checkout is requi... | Aug 7, 2026, 01:59 UTC | [issue-openclaw-openclaw-44289](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-44289.md) | [31135469497](https://github.com/openclaw/clawsweeper/actions/runs/31135469497) |

#### No Pending Action

| Repository | Item | Lane state | Latest result | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep #114169 open as the canonical issue and #119735 open as its viable canonical fix PR. The closed configuration PR #114840 is historical partial... | Aug 5, 2026, 21:22 UTC | [issue-openclaw-openclaw-114169](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-114169.md) | [31045738534](https://github.com/openclaw/clawsweeper/actions/runs/31045738534) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep #92199 as the canonical issue and #119589 as its active narrow fix PR. The Feishu report is related but has a distinct dispatcher root cause;... | Aug 5, 2026, 11:37 UTC | [issue-openclaw-openclaw-92199](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-92199.md) | [31000389101](https://github.com/openclaw/clawsweeper/actions/runs/31000389101) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep #119557 and the narrow, green #119567 implementation as canonical. Keep the error-terminal work (#119554/#119556) and contributor quiet-stream... | Aug 5, 2026, 10:26 UTC | [issue-openclaw-openclaw-119557](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119557.md) | [30996832702](https://github.com/openclaw/clawsweeper/actions/runs/30996832702) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117669](https://github.com/openclaw/openclaw/issues/117669) | reviewed_no_action | No implementation PR is needed: current main at 18c9f27e2de3cb1d3ac6555588a356d56c6fd9bb already applies the requested path-scoped transcript excep... | Aug 3, 2026, 03:39 UTC | [issue-openclaw-openclaw-117669](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117669.md) | [30775617626](https://github.com/openclaw/clawsweeper/actions/runs/30775617626) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Current main d9669ce72cbe31ff8e1ae66de03f34f2014a4f1e does not reproduce the reported Claude CLI guard rejection: Claude now declares selectable na... | Aug 3, 2026, 03:34 UTC | [issue-openclaw-openclaw-118279](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118279.md) | [30775874159](https://github.com/openclaw/clawsweeper/actions/runs/30775874159) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep issue #118274 and its focused implementation PR #118315 as the canonical fix path. The hydrated state shows no security-sensitive items, no ac... | Aug 3, 2026, 00:19 UTC | [issue-openclaw-openclaw-118274](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118274.md) | [30772786025](https://github.com/openclaw/clawsweeper/actions/runs/30772786025) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | No implementation PR is needed. Hydrated GitHub state marks #118244 closed as of 2026-08-02T23:42:16Z, and latest main at b7f9cd0a01671f7be5fc34b4b... | Aug 2, 2026, 23:48 UTC | [issue-openclaw-openclaw-118244](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118244.md) | [30772787106](https://github.com/openclaw/clawsweeper/actions/runs/30772787106) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep #73478 open as the canonical bug report and retain #117951 as its active, validated implementation PR. Current main still projects assistant e... | Aug 2, 2026, 10:58 UTC | [issue-openclaw-openclaw-73478](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-73478.md) | [30744624314](https://github.com/openclaw/clawsweeper/actions/runs/30744624314) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Live preflight shows both the hinted canonical PR #70585 and listed candidate PR #61620 are already closed. Current main f5bb19e028fb69f1b837c2a0cf... | Jul 16, 2026, 09:38 UTC | [gitcrawl-55-subagent-announce-fall-back-to-best-effort-delivery](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-55-subagent-announce-fall-back-to-best-effort-delivery.md) | [29487615730](https://github.com/openclaw/clawsweeper/actions/runs/29487615730) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | All hydrated issues and pull requests are already closed. Current main at 17a533ce268957780a3480c9f0691593efa94153 contains the safer channel-owned... | Jul 12, 2026, 08:58 UTC | [gitcrawl-13714-fix-count-discord-acp-block-deliveries-as-visible-text](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-13714-fix-count-discord-acp-block-deliveries-as-visible-text.md) | [29186574234](https://github.com/openclaw/clawsweeper/actions/runs/29186574234) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#105100](https://github.com/openclaw/openclaw/pull/105100) | reviewed_no_action | The hydrated cluster materially changed after the automerge job was created: PR #104718 is already closed as superseded, PR #105100 is merged, and... | Jul 12, 2026, 08:15 UTC | [automerge-openclaw-openclaw-104718](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-104718.md) | [29185239992](https://github.com/openclaw/clawsweeper/actions/runs/29185239992) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | [#494](https://github.com/openclaw/clawsweeper/pull/494) | reviewed_no_action | No repair or mutation remains: PR #494 was merged into current main after a passing exact-head Codex review and successful checks, and linked issue... | Jul 11, 2026, 05:48 UTC | [automerge-openclaw-clawsweeper-494](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-clawsweeper-494.md) | [29141701220](https://github.com/openclaw/clawsweeper/actions/runs/29141701220) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#101489](https://github.com/openclaw/openclaw/pull/101489) | reviewed_no_action | Canonical PR #101489 is already closed and its fix is present on current main. Current main registers a detached child error listener before unref... | Jul 7, 2026, 11:55 UTC | [automerge-openclaw-openclaw-101489](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-101489.md) | [28863930775](https://github.com/openclaw/clawsweeper/actions/runs/28863930775) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | [#880](https://github.com/openclaw/openclaw-windows-node/issues/880) | reviewed_no_action | No new implementation PR should be created from this run. The hydrated live state shows #880 is already closed, and current main is at 87dc3dc79d7c... | Jun 28, 2026, 08:49 UTC | [issue-openclaw-openclaw-windows-node-880](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-880.md) | [28316917944](https://github.com/openclaw/clawsweeper/actions/runs/28316917944) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Preflight shows every hydrated cluster item is already closed. No open canonical PR needs repair, no close action is valid, and no fix PR is needed... | Jun 26, 2026, 09:26 UTC | [gitcrawl-6257-fix-use-ssrf-guarded-fetch-for-tts-provider-requests](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-6257-fix-use-ssrf-guarded-fetch-for-tts-provider-requests.md) | [28229160559](https://github.com/openclaw/clawsweeper/actions/runs/28229160559) |

#### Completed

| Repository | Item | Lane state | Recorded outcome | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

### Clusters Needing Inspection

| Cluster | State | Reason | Report | Run |
| --- | --- | --- | --- | --- |
| issue-openclaw-openclaw-120536 | merge_canonical blocked | checks are not clean: checks-node-compact-small-7: IN_PROGRESS | [issue-openclaw-openclaw-120536](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120536.md) | [31249008962](https://github.com/openclaw/clawsweeper/actions/runs/31249008962) |
| automerge-openclaw-openclaw-118685 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-118685](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118685.md) | [31249116745](https://github.com/openclaw/clawsweeper/actions/runs/31249116745) |
| automerge-openclaw-crabbox-1252 | merge_canonical blocked | job does not allow merge | [automerge-openclaw-crabbox-1252](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-crabbox-1252.md) | [31248338546](https://github.com/openclaw/clawsweeper/actions/runs/31248338546) |
| issue-openclaw-openclaw-120488 | execute_fix blocked | Codex /review timed out after 113403ms | [issue-openclaw-openclaw-120488](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120488.md) | [31242527292](https://github.com/openclaw/clawsweeper/actions/runs/31242527292) |
| issue-openclaw-openclaw-120449 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/a... | [issue-openclaw-openclaw-120449](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120449.md) | [31240016267](https://github.com/openclaw/clawsweeper/actions/runs/31240016267) |
| issue-openclaw-openclaw-87336 | needs human | Approve or reject changing sessions_send so arbitrary explicit missing key-shaped targets return structured not-found instead of materializing a se... | [issue-openclaw-openclaw-87336](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-87336.md) | [31216402645](https://github.com/openclaw/clawsweeper/actions/runs/31216402645) |
| issue-openclaw-openclaw-92884 | execute_fix blocked | Codex /review did not pass after final base synchronization: Merge blocked by one P1 correctness issue in closer-origin schema precedence. | [issue-openclaw-openclaw-92884](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-92884.md) | [31198629777](https://github.com/openclaw/clawsweeper/actions/runs/31198629777) |
| automerge-openclaw-openclaw-120247 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-120247](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-120247.md) | [31193680622](https://github.com/openclaw/clawsweeper/actions/runs/31193680622) |
| issue-openclaw-openclaw-91860 | merge_canonical blocked | checks are not clean: checks-node-compact-large-8: IN_PROGRESS | [issue-openclaw-openclaw-91860](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-91860.md) | [31183812103](https://github.com/openclaw/clawsweeper/actions/runs/31183812103) |
| automerge-openclaw-openclaw-119160 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-119160](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119160.md) | [31179551119](https://github.com/openclaw/clawsweeper/actions/runs/31179551119) |
| issue-openclaw-openclaw-120207 | execute_fix blocked | Codex /review timed out after 30000ms | [issue-openclaw-openclaw-120207](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120207.md) | [31171079611](https://github.com/openclaw/clawsweeper/actions/runs/31171079611) |
| automerge-openclaw-openclaw-120143 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs, bundledChannelConfigM... | [automerge-openclaw-openclaw-120143](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-120143.md) | [31155145929](https://github.com/openclaw/clawsweeper/actions/runs/31155145929) |
| automerge-openclaw-openclaw-119172 | fix failed | validation command failed (pnpm check:changed): validation command runtime budget exhausted | [automerge-openclaw-openclaw-119172](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119172.md) | [31151537181](https://github.com/openclaw/clawsweeper/actions/runs/31151537181) |
| issue-openclaw-openclaw-120019 | merge_canonical blocked | checks are not clean: checks-node-compact-large-1: FAILURE, checks-node-compact-large-3: FAILURE, check-dependencies: FAILURE, check-test-types: FA... | [issue-openclaw-openclaw-120019](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120019.md) | [31131169980](https://github.com/openclaw/clawsweeper/actions/runs/31131169980) |
| automerge-openclaw-openclaw-119983 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-119983](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119983.md) | [31128828754](https://github.com/openclaw/clawsweeper/actions/runs/31128828754) |
| automerge-openclaw-openclaw-118599 | fix failed | Codex /review did not pass after final base synchronization: One current-diff user-visible inconsistency remains; otherwise the lock, backup, secur... | [automerge-openclaw-openclaw-118599](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118599.md) | [31129468571](https://github.com/openclaw/clawsweeper/actions/runs/31129468571) |
| automerge-openclaw-openclaw-118303 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-118303](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118303.md) | [31111762196](https://github.com/openclaw/clawsweeper/actions/runs/31111762196) |
| issue-openclaw-openclaw-119962 | merge_canonical blocked | checks are not clean: preflight: QUEUED | [issue-openclaw-openclaw-119962](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119962.md) | [31111783081](https://github.com/openclaw/clawsweeper/actions/runs/31111783081) |
| issue-openclaw-openclaw-119958 | merge_canonical blocked | checks are not clean: checks-node-compact-large-6: IN_PROGRESS | [issue-openclaw-openclaw-119958](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119958.md) | [31107016960](https://github.com/openclaw/clawsweeper/actions/runs/31107016960) |
| automerge-openclaw-openclaw-119901 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-119901](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119901.md) | [31089877241](https://github.com/openclaw/clawsweeper/actions/runs/31089877241) |
| issue-openclaw-openclaw-119758 | merge_canonical blocked | checks are not clean: preflight: QUEUED, Scan changed paths (precise): QUEUED | [issue-openclaw-openclaw-119758](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119758.md) | [31060551205](https://github.com/openclaw/clawsweeper/actions/runs/31060551205) |
| issue-openclaw-openclaw-119591 | execute_fix blocked | Codex /review timed out after 127384ms | [issue-openclaw-openclaw-119591](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119591.md) | [31057274631](https://github.com/openclaw/clawsweeper/actions/runs/31057274631) |
| automerge-openclaw-openclaw-119718 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-119718](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119718.md) | [31056620012](https://github.com/openclaw/clawsweeper/actions/runs/31056620012) |
| automerge-openclaw-openclaw-119735 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-119735](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119735.md) | [31053325148](https://github.com/openclaw/clawsweeper/actions/runs/31053325148) |
| automerge-openclaw-openclaw-119722 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-119722](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119722.md) | [31045548540](https://github.com/openclaw/clawsweeper/actions/runs/31045548540) |
| issue-openclaw-openclaw-81355 | execute_fix blocked | Codex fix worker timed out after 1800000ms | [issue-openclaw-openclaw-81355](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-81355.md) | [31035470296](https://github.com/openclaw/clawsweeper/actions/runs/31035470296) |
| issue-openclaw-openclaw-119360 | needs human | Provide a writable repair executor/checkout with dependencies available to implement and validate the planned new fix PR. | [issue-openclaw-openclaw-119360](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119360.md) | [30980644441](https://github.com/openclaw/clawsweeper/actions/runs/30980644441) |
| issue-openclaw-openclaw-94679 | merge_canonical blocked | checks are not clean: QA Smoke CI (profile 2/4): FAILURE, openclaw/ci-gate: FAILURE | [issue-openclaw-openclaw-94679](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-94679.md) | [30981110177](https://github.com/openclaw/clawsweeper/actions/runs/30981110177) |
| issue-openclaw-openclaw-118560 | execute_fix blocked | Codex review-fix worker timed out after 867394ms | [issue-openclaw-openclaw-118560](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118560.md) | [30959165868](https://github.com/openclaw/clawsweeper/actions/runs/30959165868) |
| issue-openclaw-openclaw-119350 | merge_canonical blocked | checks are not clean: build-artifacts: IN_PROGRESS | [issue-openclaw-openclaw-119350](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119350.md) | [30955531366](https://github.com/openclaw/clawsweeper/actions/runs/30955531366) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [issue-openclaw-openclaw-120488](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120488.md) | blocked |  |  | Codex /review timed out after 113403ms | [31242527292](https://github.com/openclaw/clawsweeper/actions/runs/31242527292) |
| [issue-openclaw-openclaw-120449](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120449.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/a... | [31240016267](https://github.com/openclaw/clawsweeper/actions/runs/31240016267) |
| [issue-openclaw-openclaw-92884](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-92884.md) | blocked |  |  | Codex /review did not pass after final base synchronization: Merge blocked by one P1 correctness issue in closer-origin schema precedence. | [31198629777](https://github.com/openclaw/clawsweeper/actions/runs/31198629777) |
| [issue-openclaw-openclaw-120207](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120207.md) | blocked |  |  | Codex /review timed out after 30000ms | [31171079611](https://github.com/openclaw/clawsweeper/actions/runs/31171079611) |
| [automerge-openclaw-openclaw-120143](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-120143.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs, bundledChannelConfigM... | [31155145929](https://github.com/openclaw/clawsweeper/actions/runs/31155145929) |
| [automerge-openclaw-openclaw-120143](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-120143.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs, bundledChannelConfigM... | [31155145929](https://github.com/openclaw/clawsweeper/actions/runs/31155145929) |
| [automerge-openclaw-openclaw-119172](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119172.md) | failed |  |  | validation command failed (pnpm check:changed): validation command runtime budget exhausted | [31151537181](https://github.com/openclaw/clawsweeper/actions/runs/31151537181) |
| [automerge-openclaw-openclaw-119172](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119172.md) | blocked |  |  | validation command failed (pnpm check:changed): validation command runtime budget exhausted | [31151537181](https://github.com/openclaw/clawsweeper/actions/runs/31151537181) |
| [automerge-openclaw-openclaw-118599](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118599.md) | failed |  |  | Codex /review did not pass after final base synchronization: One current-diff user-visible inconsistency remains; otherwise the lock, backup, secur... | [31129468571](https://github.com/openclaw/clawsweeper/actions/runs/31129468571) |
| [automerge-openclaw-openclaw-118599](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118599.md) | blocked |  |  | Codex /review did not pass after final base synchronization: One current-diff user-visible inconsistency remains; otherwise the lock, backup, secur... | [31129468571](https://github.com/openclaw/clawsweeper/actions/runs/31129468571) |
| [issue-openclaw-openclaw-119591](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119591.md) | blocked |  |  | Codex /review timed out after 127384ms | [31057274631](https://github.com/openclaw/clawsweeper/actions/runs/31057274631) |
| [issue-openclaw-openclaw-81355](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-81355.md) | blocked |  |  | Codex fix worker timed out after 1800000ms | [31035470296](https://github.com/openclaw/clawsweeper/actions/runs/31035470296) |
| [issue-openclaw-openclaw-118560](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118560.md) | blocked |  |  | Codex review-fix worker timed out after 867394ms | [30959165868](https://github.com/openclaw/clawsweeper/actions/runs/30959165868) |
| [issue-openclaw-openclaw-113631](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-113631.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [30754058583](https://github.com/openclaw/clawsweeper/actions/runs/30754058583) |
| [automerge-openclaw-openclaw-117869](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117869.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/s... | [30737716674](https://github.com/openclaw/clawsweeper/actions/runs/30737716674) |
| [automerge-openclaw-openclaw-117869](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117869.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/s... | [30737716674](https://github.com/openclaw/clawsweeper/actions/runs/30737716674) |
| [automerge-openclaw-openclaw-117881](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117881.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, extensions, extensionTests... | [30737052850](https://github.com/openclaw/clawsweeper/actions/runs/30737052850) |
| [automerge-openclaw-openclaw-117881](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117881.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, extensions, extensionTests... | [30737052850](https://github.com/openclaw/clawsweeper/actions/runs/30737052850) |
| [automerge-openclaw-openclaw-113663](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-113663.md) | blocked | [#113663](https://github.com/openclaw/openclaw/pull/113663) |  | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [30723992316](https://github.com/openclaw/clawsweeper/actions/runs/30723992316) |
| [issue-openclaw-openclaw-117411](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117411.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/gateway/... | [30701138555](https://github.com/openclaw/clawsweeper/actions/runs/30701138555) |
| [issue-openclaw-openclaw-117338](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117338.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [30698090859](https://github.com/openclaw/clawsweeper/actions/runs/30698090859) |
| [issue-openclaw-openclaw-117358](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117358.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/c... | [30696730693](https://github.com/openclaw/clawsweeper/actions/runs/30696730693) |
| [issue-openclaw-openclaw-108002](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-108002.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [30695990259](https://github.com/openclaw/clawsweeper/actions/runs/30695990259) |
| [issue-openclaw-openclaw-115475](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-115475.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, tooling [check:changed] con... | [30683325957](https://github.com/openclaw/clawsweeper/actions/runs/30683325957) |
| [issue-openclaw-openclaw-112226](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-112226.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, tooling [check:changed] con... | [30683470970](https://github.com/openclaw/clawsweeper/actions/runs/30683470970) |

### Top Blocked Reasons

| Reason | Latest count | Example cluster |
| --- | ---: | --- |
| job does not allow merge | 103 | [automerge-openclaw-crabbox-1252](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-crabbox-1252.md) |
| autofix-only job cannot merge | 20 | [automerge-openclaw-openclaw-118685](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118685.md) |
| checks are not clean: test: IN_PROGRESS, windows: IN_PROGRESS | 9 | [issue-openclaw-gogcli-917](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-917.md) |
| checks are not clean: Go: IN_PROGRESS, Release Check: IN_PROGRESS | 7 | [issue-openclaw-crabbox-756](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-756.md) |
| checks are not clean: checks-node-compact-large-8: IN_PROGRESS | 3 | [issue-openclaw-openclaw-91860](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-91860.md) |
| checks are not clean: build-artifacts: IN_PROGRESS | 2 | [issue-openclaw-openclaw-119350](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119350.md) |
| checks are not clean: windows: IN_PROGRESS | 2 | [issue-openclaw-gogcli-872](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-872.md) |
| checks are not clean: checks-node-compact-small-7: IN_PROGRESS | 1 | [issue-openclaw-openclaw-120536](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120536.md) |
| checks are not clean: checks-node-compact-large-1: FAILURE, checks-node-compact-large-3: FAILURE, check-dependencies: FAILURE, check-test... | 1 | [issue-openclaw-openclaw-120019](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120019.md) |
| checks are not clean: preflight: QUEUED | 1 | [issue-openclaw-openclaw-119962](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119962.md) |
| checks are not clean: checks-node-compact-large-6: IN_PROGRESS | 1 | [issue-openclaw-openclaw-119958](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119958.md) |
| checks are not clean: preflight: QUEUED, Scan changed paths (precise): QUEUED | 1 | [issue-openclaw-openclaw-119758](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119758.md) |
| checks are not clean: QA Smoke CI (profile 2/4): FAILURE, openclaw/ci-gate: FAILURE | 1 | [issue-openclaw-openclaw-94679](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-94679.md) |
| checks are not clean: check-lint: FAILURE, openclaw/ci-gate: FAILURE | 1 | [issue-openclaw-openclaw-116747](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-116747.md) |
| checks are not clean: checks-node-changed: FAILURE, openclaw/ci-gate: FAILURE | 1 | [issue-openclaw-openclaw-116601](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-116601.md) |

### Latest Repair Closures

| Target | Action | Title | Closed | Cluster | Report | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

