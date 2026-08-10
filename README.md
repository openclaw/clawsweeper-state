# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Aug 10, 2026, 13:27 UTC

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Planning review | Aug 10, 2026, 13:27 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/31392844469) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Apply idle | Aug 10, 2026, 13:01 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/31390610559) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Aug 10, 2026, 13:14 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/31391859970) |

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

Last source update: Aug 10, 2026, 13:32 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 462 | 100% |
| Run attempts archived | 1296 | audit |
| Latest successful clusters | 394 | 85.3% |
| Latest failed clusters | 66 | 14.3% |
| Latest cancelled clusters | 2 | 0.4% |
| Needs-human clusters | 28 | 6.1% |
| Fix actions failed | 23 | 4.4% |
| Fix actions blocked | 92 | 17.8% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 306 | 99.7% |
| Skipped mutation attempts | 1 | 0.3% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 462 clusters: 196 maintainer action, 97 automation snapshot, 145 intervention needed, 24 no pending action, 0 completed.
- Maintainer first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [automerge-openclaw-openclaw-121414](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121414.md) is maintainer_input: A maintainer must accept or revise the catalog-gated first-run default policy identified by the latest ClawSweeper `clawsweeper:human-rev....
- Intervention first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [automerge-openclaw-openclaw-121422](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121422.md) is automation_failed: validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=all [check:changed] extension-impa....
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#78344](https://github.com/openclaw/openclaw/pull/78344) is action_planned: A narrow producer-boundary repair is valid: keep the continuation model-visible while preventing it from becoming a visible user-turn/ses....
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 196 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 97 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 145 | automation failure or blocker recorded |
| No Pending Action | 24 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 51 |
| merge_ready | 46 |
| merge_not_authorized | 99 |
| checks_blocked | 43 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 53 |
| automation_failed | 77 |
| automation_blocked | 68 |
| reviewed_no_action | 24 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | A maintainer must accept or revise the catalog-gated first-run default policy identified by the latest ClawSweeper `clawsweeper:human-review` resul... | Aug 10, 2026, 10:02 UTC | [automerge-openclaw-openclaw-121414](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121414.md) | [31376872780](https://github.com/openclaw/clawsweeper/actions/runs/31376872780) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#96935](https://github.com/openclaw/openclaw/issues/96935) | maintainer_input | Quarantined from ClawSweeper Repair; no code, comment, close, or merge action is planned for this item. | Aug 10, 2026, 06:56 UTC | [issue-openclaw-openclaw-121446](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121446.md) | [31363526692](https://github.com/openclaw/clawsweeper/actions/runs/31363526692) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a checkout containing the repair commit and reachable base 00194139bad357f31e71a81586a25cf67649f7d6. | Aug 9, 2026, 14:41 UTC | [issue-openclaw-openclaw-121021](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121021.md) | [31318751267](https://github.com/openclaw/clawsweeper/actions/runs/31318751267) |
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

#### Automation Snapshot

| Repository | Item | Lane state | Recorded status | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#78344](https://github.com/openclaw/openclaw/pull/78344) | action_planned | A narrow producer-boundary repair is valid: keep the continuation model-visible while preventing it from becoming a visible user-turn/session effect. | Aug 10, 2026, 01:54 UTC | [issue-openclaw-openclaw-78344](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-78344.md) | [31346792916](https://github.com/openclaw/clawsweeper/actions/runs/31346792916) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119367](https://github.com/openclaw/openclaw/pull/119367) | action_planned | The preflight PR is stale against current main and its source commit is absent from this shallow target checkout; its established narrow behavior c... | Aug 9, 2026, 18:40 UTC | [automerge-openclaw-openclaw-119367](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119367.md) | [31329351654](https://github.com/openclaw/clawsweeper/actions/runs/31329351654) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120652](https://github.com/openclaw/openclaw/pull/120652) | action_planned | Repair the existing candidate branch rather than replace it; it is focused, writable, and already preserves the source context. | Aug 9, 2026, 16:37 UTC | [automerge-openclaw-openclaw-120652](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-120652.md) | [31321419573](https://github.com/openclaw/clawsweeper/actions/runs/31321419573) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#121034](https://github.com/openclaw/openclaw/pull/121034) | action_planned | A focused provider-qualified-reference normalization repair is source-proven and does not require a core model-selection, configuration, migration,... | Aug 9, 2026, 15:42 UTC | [issue-openclaw-openclaw-121034](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121034.md) | [31321418502](https://github.com/openclaw/clawsweeper/actions/runs/31321418502) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#121050](https://github.com/openclaw/openclaw/pull/121050) | checks_blocked | checks are not clean: checks-ui-e2e (1/4): IN_PROGRESS, checks-node-compact-large-6: IN_PROGRESS, checks-node-compact-large-8: IN_PROGRESS, checks-... | Aug 9, 2026, 12:39 UTC | [issue-openclaw-openclaw-55372](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-55372.md) | [31310453395](https://github.com/openclaw/clawsweeper/actions/runs/31310453395) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#52130](https://github.com/openclaw/openclaw/pull/52130) | action_planned | No open candidate PR exists; a narrow documentation, UI-hint, generated-metadata, and regression-test fix is appropriate. | Aug 9, 2026, 11:12 UTC | [issue-openclaw-openclaw-52130](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-52130.md) | [31309873241](https://github.com/openclaw/clawsweeper/actions/runs/31309873241) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120968](https://github.com/openclaw/openclaw/issues/120968) | action_planned | Narrow owner-plugin repair is appropriate; no configuration or security-boundary change is needed. | Aug 9, 2026, 10:08 UTC | [issue-openclaw-openclaw-120968](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120968.md) | [31306215131](https://github.com/openclaw/clawsweeper/actions/runs/31306215131) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120833](https://github.com/openclaw/openclaw/pull/120833) | action_planned | The issue is a narrow existing-behavior regression with a defined durable-owner lifecycle fix; preflight reports no security-sensitive signal and n... | Aug 9, 2026, 05:23 UTC | [issue-openclaw-openclaw-120833](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120833.md) | [31296363938](https://github.com/openclaw/clawsweeper/actions/runs/31296363938) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120852](https://github.com/openclaw/openclaw/pull/120852) | checks_blocked | checks are not clean: checks-node-compact-large-7: FAILURE, checks-windows-node-test: IN_PROGRESS | Aug 9, 2026, 03:28 UTC | [issue-openclaw-openclaw-120832](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120832.md) | [31291121700](https://github.com/openclaw/clawsweeper/actions/runs/31291121700) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#10354](https://github.com/openclaw/openclaw/pull/10354) | action_planned | Keep channel optional and free-form; add provider/channel-plugin guidance only, with no enum or routing/configuration change. | Aug 9, 2026, 02:11 UTC | [issue-openclaw-openclaw-10354](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-10354.md) | [31289619615](https://github.com/openclaw/clawsweeper/actions/runs/31289619615) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#99277](https://github.com/openclaw/openclaw/pull/99277) | action_planned | The hydrated open canonical issue and current-main source prove a missing bridge to an existing shared acknowledgement contract. | Aug 8, 2026, 23:38 UTC | [issue-openclaw-openclaw-99277](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-99277.md) | [31284188781](https://github.com/openclaw/clawsweeper/actions/runs/31284188781) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#98870](https://github.com/openclaw/openclaw/pull/98870) | action_planned | No open viable PR owns the fix. A narrow new fix PR is appropriate and permitted by job frontmatter. | Aug 8, 2026, 22:38 UTC | [issue-openclaw-openclaw-98870](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-98870.md) | [31281923103](https://github.com/openclaw/clawsweeper/actions/runs/31281923103) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120550](https://github.com/openclaw/openclaw/pull/120550) | checks_blocked | checks are not clean: checks-node-compact-small-7: IN_PROGRESS | Aug 8, 2026, 09:26 UTC | [issue-openclaw-openclaw-120536](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120536.md) | [31249008962](https://github.com/openclaw/clawsweeper/actions/runs/31249008962) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119717](https://github.com/openclaw/openclaw/pull/119717) | action_planned | Rebase onto current main and narrow the delta to configured-command ordering plus focused regression coverage; request exact-head re-review after r... | Aug 8, 2026, 08:11 UTC | [automerge-openclaw-openclaw-119717](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119717.md) | [31247675426](https://github.com/openclaw/clawsweeper/actions/runs/31247675426) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120413](https://github.com/openclaw/openclaw/pull/120413) | action_planned | Targeted config mutations should validate and write only their requested change; explicit doctor --fix remains the migration owner. | Aug 8, 2026, 03:57 UTC | [issue-openclaw-openclaw-120413](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120413.md) | [31238109134](https://github.com/openclaw/clawsweeper/actions/runs/31238109134) |

#### Intervention Needed

| Repository | Item | Lane state | Recorded blocker | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=all [check:changed] extension-impacting surf... | Aug 10, 2026, 13:32 UTC | [automerge-openclaw-openclaw-121422](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121422.md) | [31390672949](https://github.com/openclaw/clawsweeper/actions/runs/31390672949) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#121592](https://github.com/openclaw/openclaw/pull/121592) | automation_failed | Implement the bounded owner-boundary repair on the ClawSweeper branch, then run the focused regression and changed gate. | Aug 10, 2026, 13:28 UTC | [issue-openclaw-openclaw-121592](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121592.md) | [31390738219](https://github.com/openclaw/clawsweeper/actions/runs/31390738219) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#101923](https://github.com/openclaw/openclaw/pull/101923) | automation_blocked | A deterministic executor with a writable checkout and ready dependencies must implement and validate the repair before opening the required PR. | Aug 10, 2026, 13:04 UTC | [issue-openclaw-openclaw-101923](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-101923.md) | [31390252519](https://github.com/openclaw/clawsweeper/actions/runs/31390252519) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/auto-rep... | Aug 10, 2026, 11:51 UTC | [issue-openclaw-openclaw-97067](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-97067.md) | [31381192346](https://github.com/openclaw/clawsweeper/actions/runs/31381192346) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/c... | Aug 10, 2026, 09:56 UTC | [issue-openclaw-openclaw-121513](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121513.md) | [31372808261](https://github.com/openclaw/clawsweeper/actions/runs/31372808261) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs [check:changed] src/ag... | Aug 10, 2026, 09:14 UTC | [issue-openclaw-openclaw-110153](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-110153.md) | [31369391922](https://github.com/openclaw/clawsweeper/actions/runs/31369391922) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/shared/t... | Aug 10, 2026, 03:47 UTC | [issue-openclaw-openclaw-121351](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121351.md) | [31351253782](https://github.com/openclaw/clawsweeper/actions/runs/31351253782) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, extensions, extensionTests... | Aug 9, 2026, 22:43 UTC | [issue-openclaw-openclaw-121251](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121251.md) | [31337812652](https://github.com/openclaw/clawsweeper/actions/runs/31337812652) |
| [openclaw/crabpot](https://github.com/openclaw/crabpot) | [#283](https://github.com/openclaw/crabpot/pull/283) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Aug 9, 2026, 19:40 UTC | [automerge-openclaw-crabpot-283](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-crabpot-283.md) | [31331977445](https://github.com/openclaw/clawsweeper/actions/runs/31331977445) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-120956](cluster:issue-openclaw-openclaw-120956) | automation_failed | The repair is clear and narrow, but branch implementation is blocked by the read-only checkout. | Aug 9, 2026, 18:54 UTC | [issue-openclaw-openclaw-120956](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120956.md) | [31329698207](https://github.com/openclaw/clawsweeper/actions/runs/31329698207) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-120735](cluster:issue-openclaw-openclaw-120735) | automation_failed | A deterministic executor with a writable task branch should implement and validate the artifact below. | Aug 9, 2026, 17:10 UTC | [issue-openclaw-openclaw-120735](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120735.md) | [31322445353](https://github.com/openclaw/clawsweeper/actions/runs/31322445353) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#121046](https://github.com/openclaw/openclaw/pull/121046) | automation_blocked | Implement the narrow shared matcher repair and hybrid-ranking regression in a writable executor. | Aug 9, 2026, 16:09 UTC | [issue-openclaw-openclaw-121046](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121046.md) | [31320111113](https://github.com/openclaw/clawsweeper/actions/runs/31320111113) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=scripts, testRoot, tooling [check:changed] s... | Aug 9, 2026, 13:21 UTC | [issue-openclaw-openclaw-121059](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121059.md) | [31313946287](https://github.com/openclaw/clawsweeper/actions/runs/31313946287) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/w... | Aug 9, 2026, 13:11 UTC | [issue-openclaw-openclaw-121039](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121039.md) | [31313921201](https://github.com/openclaw/clawsweeper/actions/runs/31313921201) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#89252](https://github.com/openclaw/openclaw/pull/89252) | automation_blocked | Current source already satisfies the issue, but the hydrated preflight state is stale relative to the available main checkout. Do not open a duplic... | Aug 9, 2026, 04:39 UTC | [issue-openclaw-openclaw-89252](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-89252.md) | [31294657506](https://github.com/openclaw/clawsweeper/actions/runs/31294657506) |

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
| automerge-openclaw-openclaw-121422 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=all [check:changed] extension-impacting surf... | [automerge-openclaw-openclaw-121422](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121422.md) | [31390672949](https://github.com/openclaw/clawsweeper/actions/runs/31390672949) |
| issue-openclaw-openclaw-97067 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/auto-rep... | [issue-openclaw-openclaw-97067](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-97067.md) | [31381192346](https://github.com/openclaw/clawsweeper/actions/runs/31381192346) |
| automerge-openclaw-openclaw-121414 | needs human | A maintainer must accept or revise the catalog-gated first-run default policy identified by the latest ClawSweeper `clawsweeper:human-review` resul... | [automerge-openclaw-openclaw-121414](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121414.md) | [31376872780](https://github.com/openclaw/clawsweeper/actions/runs/31376872780) |
| issue-openclaw-openclaw-121513 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/c... | [issue-openclaw-openclaw-121513](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121513.md) | [31372808261](https://github.com/openclaw/clawsweeper/actions/runs/31372808261) |
| issue-openclaw-openclaw-110153 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs [check:changed] src/ag... | [issue-openclaw-openclaw-110153](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-110153.md) | [31369391922](https://github.com/openclaw/clawsweeper/actions/runs/31369391922) |
| issue-openclaw-openclaw-121351 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/shared/t... | [issue-openclaw-openclaw-121351](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121351.md) | [31351253782](https://github.com/openclaw/clawsweeper/actions/runs/31351253782) |
| issue-openclaw-openclaw-121251 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, extensions, extensionTests... | [issue-openclaw-openclaw-121251](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121251.md) | [31337812652](https://github.com/openclaw/clawsweeper/actions/runs/31337812652) |
| issue-openclaw-openclaw-121021 | needs human | Provide a checkout containing the repair commit and reachable base 00194139bad357f31e71a81586a25cf67649f7d6. | [issue-openclaw-openclaw-121021](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121021.md) | [31318751267](https://github.com/openclaw/clawsweeper/actions/runs/31318751267) |
| issue-openclaw-openclaw-121059 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=scripts, testRoot, tooling [check:changed] s... | [issue-openclaw-openclaw-121059](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121059.md) | [31313946287](https://github.com/openclaw/clawsweeper/actions/runs/31313946287) |
| issue-openclaw-openclaw-121039 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/w... | [issue-openclaw-openclaw-121039](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121039.md) | [31313921201](https://github.com/openclaw/clawsweeper/actions/runs/31313921201) |
| issue-openclaw-openclaw-55372 | merge_canonical blocked | checks are not clean: checks-ui-e2e (1/4): IN_PROGRESS, checks-node-compact-large-6: IN_PROGRESS, checks-node-compact-large-8: IN_PROGRESS, checks-... | [issue-openclaw-openclaw-55372](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-55372.md) | [31310453395](https://github.com/openclaw/clawsweeper/actions/runs/31310453395) |
| issue-openclaw-openclaw-120832 | merge_canonical blocked | checks are not clean: checks-node-compact-large-7: FAILURE, checks-windows-node-test: IN_PROGRESS | [issue-openclaw-openclaw-120832](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120832.md) | [31291121700](https://github.com/openclaw/clawsweeper/actions/runs/31291121700) |
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

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [automerge-openclaw-openclaw-121422](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121422.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=all [check:changed] extension-impacting surf... | [31390672949](https://github.com/openclaw/clawsweeper/actions/runs/31390672949) |
| [automerge-openclaw-openclaw-121422](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121422.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=all [check:changed] extension-impacting surf... | [31390672949](https://github.com/openclaw/clawsweeper/actions/runs/31390672949) |
| [issue-openclaw-openclaw-97067](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-97067.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/auto-rep... | [31381192346](https://github.com/openclaw/clawsweeper/actions/runs/31381192346) |
| [issue-openclaw-openclaw-121513](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121513.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/c... | [31372808261](https://github.com/openclaw/clawsweeper/actions/runs/31372808261) |
| [issue-openclaw-openclaw-110153](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-110153.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs [check:changed] src/ag... | [31369391922](https://github.com/openclaw/clawsweeper/actions/runs/31369391922) |
| [issue-openclaw-openclaw-121351](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121351.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/shared/t... | [31351253782](https://github.com/openclaw/clawsweeper/actions/runs/31351253782) |
| [issue-openclaw-openclaw-121251](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121251.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, extensions, extensionTests... | [31337812652](https://github.com/openclaw/clawsweeper/actions/runs/31337812652) |
| [issue-openclaw-openclaw-121059](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121059.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=scripts, testRoot, tooling [check:changed] s... | [31313946287](https://github.com/openclaw/clawsweeper/actions/runs/31313946287) |
| [issue-openclaw-openclaw-121039](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121039.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/w... | [31313921201](https://github.com/openclaw/clawsweeper/actions/runs/31313921201) |
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
| checks are not clean: checks-ui-e2e (1/4): IN_PROGRESS, checks-node-compact-large-6: IN_PROGRESS, checks-node-compact-large-8: IN_PROGRES... | 1 | [issue-openclaw-openclaw-55372](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-55372.md) |
| checks are not clean: checks-node-compact-large-7: FAILURE, checks-windows-node-test: IN_PROGRESS | 1 | [issue-openclaw-openclaw-120832](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120832.md) |
| checks are not clean: checks-node-compact-small-7: IN_PROGRESS | 1 | [issue-openclaw-openclaw-120536](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120536.md) |
| checks are not clean: checks-node-compact-large-1: FAILURE, checks-node-compact-large-3: FAILURE, check-dependencies: FAILURE, check-test... | 1 | [issue-openclaw-openclaw-120019](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120019.md) |
| checks are not clean: preflight: QUEUED | 1 | [issue-openclaw-openclaw-119962](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119962.md) |
| checks are not clean: checks-node-compact-large-6: IN_PROGRESS | 1 | [issue-openclaw-openclaw-119958](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119958.md) |
| checks are not clean: preflight: QUEUED, Scan changed paths (precise): QUEUED | 1 | [issue-openclaw-openclaw-119758](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119758.md) |
| checks are not clean: QA Smoke CI (profile 2/4): FAILURE, openclaw/ci-gate: FAILURE | 1 | [issue-openclaw-openclaw-94679](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-94679.md) |

### Latest Repair Closures

| Target | Action | Title | Closed | Cluster | Report | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

