# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Aug 7, 2026, 04:05 UTC

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Apply finished | Aug 7, 2026, 04:05 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/31144765211) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Planning review | Aug 7, 2026, 03:22 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/31144119801) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Aug 7, 2026, 02:52 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/31142558833) |

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

Last source update: Aug 7, 2026, 04:04 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 409 | 100% |
| Run attempts archived | 1128 | audit |
| Latest successful clusters | 346 | 84.6% |
| Latest failed clusters | 61 | 14.9% |
| Latest cancelled clusters | 2 | 0.5% |
| Needs-human clusters | 25 | 6.1% |
| Fix actions failed | 21 | 4.5% |
| Fix actions blocked | 79 | 17.1% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 293 | 99.7% |
| Skipped mutation attempts | 1 | 0.3% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 409 clusters: 184 maintainer action, 77 automation snapshot, 124 intervention needed, 24 no pending action, 0 completed.
- Maintainer first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#120100](https://github.com/openclaw/openclaw/pull/120100) is merge_ready: issue implementation PR checks are green; merge intentionally blocked for this lane.
- Intervention first: [openclaw/crabpot](https://github.com/openclaw/crabpot) [#283](https://github.com/openclaw/crabpot/pull/283) is automation_failed: Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a sepa....
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#119975](https://github.com/openclaw/openclaw/pull/119975) is action_planned: Repair the same-repository writable branch with process- and request-bound boot-owner state, then obtain exact-head review; merge remains....
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 184 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 77 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 124 | automation failure or blocker recorded |
| No Pending Action | 24 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 46 |
| merge_ready | 39 |
| merge_not_authorized | 99 |
| checks_blocked | 39 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 37 |
| automation_failed | 70 |
| automation_blocked | 54 |
| reviewed_no_action | 24 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120100](https://github.com/openclaw/openclaw/pull/120100) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 7, 2026, 01:32 UTC | [issue-openclaw-openclaw-120060](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120060.md) | [31135214713](https://github.com/openclaw/clawsweeper/actions/runs/31135214713) |
| [openclaw/crabbox](https://github.com/openclaw/crabbox) | [#1252](https://github.com/openclaw/crabbox/pull/1252) | merge_not_authorized | job does not allow merge | Aug 7, 2026, 00:13 UTC | [automerge-openclaw-crabbox-1252](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-crabbox-1252.md) | [31132551284](https://github.com/openclaw/clawsweeper/actions/runs/31132551284) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119968](https://github.com/openclaw/openclaw/pull/119968) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 6, 2026, 14:39 UTC | [issue-openclaw-openclaw-119551](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119551.md) | [31106840902](https://github.com/openclaw/clawsweeper/actions/runs/31106840902) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119901](https://github.com/openclaw/openclaw/pull/119901) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 6, 2026, 09:41 UTC | [issue-openclaw-openclaw-119884](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119884.md) | [31087096308](https://github.com/openclaw/clawsweeper/actions/runs/31087096308) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119849](https://github.com/openclaw/openclaw/pull/119849) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 6, 2026, 05:58 UTC | [issue-openclaw-openclaw-39461](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-39461.md) | [31074229108](https://github.com/openclaw/clawsweeper/actions/runs/31074229108) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119784](https://github.com/openclaw/openclaw/pull/119784) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 6, 2026, 00:33 UTC | [issue-openclaw-openclaw-119578](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119578.md) | [31057108333](https://github.com/openclaw/clawsweeper/actions/runs/31057108333) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119779](https://github.com/openclaw/openclaw/pull/119779) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 6, 2026, 00:26 UTC | [issue-openclaw-openclaw-119755](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119755.md) | [31056403539](https://github.com/openclaw/clawsweeper/actions/runs/31056403539) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119778](https://github.com/openclaw/openclaw/pull/119778) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 6, 2026, 00:06 UTC | [issue-openclaw-openclaw-119754](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119754.md) | [31056385027](https://github.com/openclaw/clawsweeper/actions/runs/31056385027) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119717](https://github.com/openclaw/openclaw/pull/119717) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 5, 2026, 20:55 UTC | [issue-openclaw-openclaw-89252](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-89252.md) | [31035456501](https://github.com/openclaw/clawsweeper/actions/runs/31035456501) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#73320](https://github.com/openclaw/openclaw/issues/73320) | maintainer_input | Quarantined independently; it does not block the ordinary non-security repair for #57148. | Aug 5, 2026, 20:30 UTC | [issue-openclaw-openclaw-57148](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-57148.md) | [31039505132](https://github.com/openclaw/clawsweeper/actions/runs/31039505132) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#89637](https://github.com/openclaw/openclaw/issues/89637) | maintainer_input | Security-sensitive preflight item; no repair, merge, or closeout action from this cluster. | Aug 5, 2026, 19:16 UTC | [issue-openclaw-openclaw-89430](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-89430.md) | [31035509844](https://github.com/openclaw/clawsweeper/actions/runs/31035509844) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119712](https://github.com/openclaw/openclaw/pull/119712) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 5, 2026, 19:01 UTC | [issue-openclaw-openclaw-119692](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119692.md) | [31034789647](https://github.com/openclaw/clawsweeper/actions/runs/31034789647) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable repair executor/checkout with dependencies available to implement and validate the planned new fix PR. | Aug 5, 2026, 08:15 UTC | [issue-openclaw-openclaw-119360](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119360.md) | [30980644441](https://github.com/openclaw/clawsweeper/actions/runs/30980644441) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119512](https://github.com/openclaw/openclaw/pull/119512) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 5, 2026, 06:19 UTC | [issue-openclaw-openclaw-119440](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119440.md) | [30978734831](https://github.com/openclaw/clawsweeper/actions/runs/30978734831) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119509](https://github.com/openclaw/openclaw/pull/119509) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 5, 2026, 06:14 UTC | [issue-openclaw-openclaw-119483](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119483.md) | [30978720622](https://github.com/openclaw/clawsweeper/actions/runs/30978720622) |

#### Automation Snapshot

| Repository | Item | Lane state | Recorded status | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119975](https://github.com/openclaw/openclaw/pull/119975) | action_planned | Repair the same-repository writable branch with process- and request-bound boot-owner state, then obtain exact-head review; merge remains disabled... | Aug 7, 2026, 02:11 UTC | [automerge-openclaw-openclaw-119975](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119975.md) | [31140156832](https://github.com/openclaw/clawsweeper/actions/runs/31140156832) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120076](https://github.com/openclaw/openclaw/pull/120076) | checks_blocked | checks are not clean: checks-node-compact-large-1: FAILURE, checks-node-compact-large-3: FAILURE, check-dependencies: FAILURE, check-test-types: FA... | Aug 7, 2026, 00:30 UTC | [issue-openclaw-openclaw-120019](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120019.md) | [31131169980](https://github.com/openclaw/clawsweeper/actions/runs/31131169980) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119968](https://github.com/openclaw/openclaw/pull/119968) | action_planned | Repair the canonical same-repo branch; do not merge or close it. | Aug 7, 2026, 00:01 UTC | [automerge-openclaw-openclaw-119968](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119968.md) | [31132517825](https://github.com/openclaw/clawsweeper/actions/runs/31132517825) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119983](https://github.com/openclaw/openclaw/pull/119983) | checks_blocked | checks are not clean: preflight: QUEUED | Aug 6, 2026, 15:20 UTC | [issue-openclaw-openclaw-119962](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119962.md) | [31111783081](https://github.com/openclaw/clawsweeper/actions/runs/31111783081) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119975](https://github.com/openclaw/openclaw/pull/119975) | checks_blocked | checks are not clean: checks-node-compact-large-6: IN_PROGRESS | Aug 6, 2026, 14:58 UTC | [issue-openclaw-openclaw-119958](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119958.md) | [31107016960](https://github.com/openclaw/clawsweeper/actions/runs/31107016960) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119887](https://github.com/openclaw/openclaw/issues/119887) | action_planned | Implement the reported Doctor-only recovery while retaining strict parsing and atomic replacement safeguards. | Aug 6, 2026, 10:29 UTC | [issue-openclaw-openclaw-119887](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119887.md) | [31092766349](https://github.com/openclaw/clawsweeper/actions/runs/31092766349) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118685](https://github.com/openclaw/openclaw/pull/118685) | action_planned | Repair the actionable review finding without falsely broadening the diagnostic contract. | Aug 6, 2026, 10:25 UTC | [automerge-openclaw-openclaw-118685](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118685.md) | [31092764420](https://github.com/openclaw/clawsweeper/actions/runs/31092764420) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119737](https://github.com/openclaw/openclaw/pull/119737) | action_planned | Repair the contributor branch rather than replacing it; no security-sensitive signal is present. | Aug 6, 2026, 03:41 UTC | [automerge-openclaw-openclaw-119737](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119737.md) | [31068652687](https://github.com/openclaw/clawsweeper/actions/runs/31068652687) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119799](https://github.com/openclaw/openclaw/pull/119799) | checks_blocked | checks are not clean: preflight: QUEUED, Scan changed paths (precise): QUEUED | Aug 6, 2026, 02:09 UTC | [issue-openclaw-openclaw-119758](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119758.md) | [31060551205](https://github.com/openclaw/clawsweeper/actions/runs/31060551205) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119648](https://github.com/openclaw/openclaw/pull/119648) | action_planned | The bug is confirmed and bounded. No viable implementation PR is hydrated, so the canonical issue needs a new narrow fix path rather than closure o... | Aug 5, 2026, 16:13 UTC | [issue-openclaw-openclaw-119648](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119648.md) | [31023438615](https://github.com/openclaw/clawsweeper/actions/runs/31023438615) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119172](https://github.com/openclaw/openclaw/pull/119172) | action_planned | Repair the canonical branch, rebase it, regenerate prompt snapshots after the model-visible description update, then obtain one exact-head re-revie... | Aug 5, 2026, 16:08 UTC | [automerge-openclaw-openclaw-119172](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119172.md) | [31013321940](https://github.com/openclaw/clawsweeper/actions/runs/31013321940) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119509](https://github.com/openclaw/openclaw/pull/119509) | action_planned | Repair the contributor branch: retain the canonical Windows codepage decoder while explicitly preserving the existing session exec BOM behavior, th... | Aug 5, 2026, 07:25 UTC | [automerge-openclaw-openclaw-119509](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119509.md) | [30984421359](https://github.com/openclaw/clawsweeper/actions/runs/30984421359) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119528](https://github.com/openclaw/openclaw/pull/119528) | checks_blocked | checks are not clean: QA Smoke CI (profile 2/4): FAILURE, openclaw/ci-gate: FAILURE | Aug 5, 2026, 07:16 UTC | [issue-openclaw-openclaw-94679](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-94679.md) | [30981110177](https://github.com/openclaw/clawsweeper/actions/runs/30981110177) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119385](https://github.com/openclaw/openclaw/pull/119385) | action_planned | The issue is a reproducible central QA timeout-reporting defect, not yet a proven Active Memory migration defect. | Aug 5, 2026, 06:23 UTC | [issue-openclaw-openclaw-119385](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119385.md) | [30978484256](https://github.com/openclaw/clawsweeper/actions/runs/30978484256) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#42106](https://github.com/openclaw/openclaw/pull/42106) | action_planned | The reported behavior reproduces from current source on main, is non-security correctness work, and the linked PRs are closed historical context ra... | Aug 5, 2026, 04:33 UTC | [issue-openclaw-openclaw-42106](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-42106.md) | [30972398817](https://github.com/openclaw/clawsweeper/actions/runs/30972398817) |

#### Intervention Needed

| Repository | Item | Lane state | Recorded blocker | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/crabpot](https://github.com/openclaw/crabpot) | [#283](https://github.com/openclaw/crabpot/pull/283) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Aug 7, 2026, 04:04 UTC | [automerge-openclaw-crabpot-283](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-crabpot-283.md) | [31145862569](https://github.com/openclaw/clawsweeper/actions/runs/31145862569) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120130](https://github.com/openclaw/openclaw/pull/120130) | automation_failed | A test-fixture repair can remove timing assumptions without changing GatewayNodeSession production behavior. | Aug 7, 2026, 03:48 UTC | [issue-openclaw-openclaw-120130](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120130.md) | [31145040749](https://github.com/openclaw/clawsweeper/actions/runs/31145040749) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120076](https://github.com/openclaw/openclaw/pull/120076) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Aug 7, 2026, 03:27 UTC | [automerge-openclaw-openclaw-120076](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-120076.md) | [31142138572](https://github.com/openclaw/clawsweeper/actions/runs/31142138572) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#44289](https://github.com/openclaw/openclaw/pull/44289) | automation_failed | The checkout cannot be modified, and pnpm cannot initialize its Corepack cache in this read-only environment; a writable executor checkout is requi... | Aug 7, 2026, 01:59 UTC | [issue-openclaw-openclaw-44289](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-44289.md) | [31135469497](https://github.com/openclaw/clawsweeper/actions/runs/31135469497) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119983](https://github.com/openclaw/openclaw/pull/119983) | automation_blocked | autofix-only job cannot merge | Aug 6, 2026, 23:54 UTC | [automerge-openclaw-openclaw-119983](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119983.md) | [31128828754](https://github.com/openclaw/clawsweeper/actions/runs/31128828754) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | Codex /review did not pass after final base synchronization: One current-diff user-visible inconsistency remains; otherwise the lock, backup, secur... | Aug 6, 2026, 23:37 UTC | [automerge-openclaw-openclaw-118599](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118599.md) | [31129468571](https://github.com/openclaw/clawsweeper/actions/runs/31129468571) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118303](https://github.com/openclaw/openclaw/pull/118303) | automation_blocked | autofix-only job cannot merge | Aug 6, 2026, 17:33 UTC | [automerge-openclaw-openclaw-118303](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118303.md) | [31111762196](https://github.com/openclaw/clawsweeper/actions/runs/31111762196) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117144](https://github.com/openclaw/openclaw/pull/117144) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Aug 6, 2026, 13:55 UTC | [automerge-openclaw-openclaw-117144](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117144.md) | [31106690751](https://github.com/openclaw/clawsweeper/actions/runs/31106690751) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119901](https://github.com/openclaw/openclaw/pull/119901) | automation_blocked | autofix-only job cannot merge | Aug 6, 2026, 10:13 UTC | [automerge-openclaw-openclaw-119901](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119901.md) | [31089877241](https://github.com/openclaw/clawsweeper/actions/runs/31089877241) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | No implementation PR is justified on current main f99b6a48. Unsafe Code Mode failures intentionally stop the inner tool loop, while the embedded-ru... | Aug 6, 2026, 08:59 UTC | [issue-openclaw-openclaw-119872](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119872.md) | [31086810734](https://github.com/openclaw/clawsweeper/actions/runs/31086810734) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | Codex /review did not pass after final base synchronization: The branch cleanly rebases onto pinned base b8f6086411cf6f3633784a6f92658ac9c7dbc990 a... | Aug 6, 2026, 05:22 UTC | [automerge-openclaw-openclaw-119717](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119717.md) | [31071905373](https://github.com/openclaw/clawsweeper/actions/runs/31071905373) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118806](https://github.com/openclaw/openclaw/pull/118806) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Aug 6, 2026, 03:02 UTC | [automerge-openclaw-openclaw-118806](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118806.md) | [31066406769](https://github.com/openclaw/clawsweeper/actions/runs/31066406769) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | Codex /review timed out after 127384ms | Aug 6, 2026, 01:00 UTC | [issue-openclaw-openclaw-119591](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119591.md) | [31057274631](https://github.com/openclaw/clawsweeper/actions/runs/31057274631) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119718](https://github.com/openclaw/openclaw/pull/119718) | automation_blocked | autofix-only job cannot merge | Aug 6, 2026, 00:56 UTC | [automerge-openclaw-openclaw-119718](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119718.md) | [31056620012](https://github.com/openclaw/clawsweeper/actions/runs/31056620012) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119735](https://github.com/openclaw/openclaw/pull/119735) | automation_blocked | autofix-only job cannot merge | Aug 5, 2026, 23:27 UTC | [automerge-openclaw-openclaw-119735](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119735.md) | [31053325148](https://github.com/openclaw/clawsweeper/actions/runs/31053325148) |

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
| issue-openclaw-openclaw-120019 | merge_canonical blocked | checks are not clean: checks-node-compact-large-1: FAILURE, checks-node-compact-large-3: FAILURE, check-dependencies: FAILURE, check-test-types: FA... | [issue-openclaw-openclaw-120019](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120019.md) | [31131169980](https://github.com/openclaw/clawsweeper/actions/runs/31131169980) |
| automerge-openclaw-crabbox-1252 | merge_canonical blocked | job does not allow merge | [automerge-openclaw-crabbox-1252](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-crabbox-1252.md) | [31132551284](https://github.com/openclaw/clawsweeper/actions/runs/31132551284) |
| automerge-openclaw-openclaw-119983 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-119983](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119983.md) | [31128828754](https://github.com/openclaw/clawsweeper/actions/runs/31128828754) |
| automerge-openclaw-openclaw-118599 | fix failed | Codex /review did not pass after final base synchronization: One current-diff user-visible inconsistency remains; otherwise the lock, backup, secur... | [automerge-openclaw-openclaw-118599](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118599.md) | [31129468571](https://github.com/openclaw/clawsweeper/actions/runs/31129468571) |
| automerge-openclaw-openclaw-118303 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-118303](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118303.md) | [31111762196](https://github.com/openclaw/clawsweeper/actions/runs/31111762196) |
| issue-openclaw-openclaw-119962 | merge_canonical blocked | checks are not clean: preflight: QUEUED | [issue-openclaw-openclaw-119962](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119962.md) | [31111783081](https://github.com/openclaw/clawsweeper/actions/runs/31111783081) |
| issue-openclaw-openclaw-119958 | merge_canonical blocked | checks are not clean: checks-node-compact-large-6: IN_PROGRESS | [issue-openclaw-openclaw-119958](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119958.md) | [31107016960](https://github.com/openclaw/clawsweeper/actions/runs/31107016960) |
| automerge-openclaw-openclaw-119901 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-119901](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119901.md) | [31089877241](https://github.com/openclaw/clawsweeper/actions/runs/31089877241) |
| automerge-openclaw-openclaw-119717 | fix failed | Codex /review did not pass after final base synchronization: The branch cleanly rebases onto pinned base b8f6086411cf6f3633784a6f92658ac9c7dbc990 a... | [automerge-openclaw-openclaw-119717](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119717.md) | [31071905373](https://github.com/openclaw/clawsweeper/actions/runs/31071905373) |
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
| issue-openclaw-openclaw-41495 | needs human | Choose one supported contract for model-authored generic choices: add a first-class typed response/select action with cross-channel agent routing,... | [issue-openclaw-openclaw-41495](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-41495.md) | [30933728183](https://github.com/openclaw/clawsweeper/actions/runs/30933728183) |
| issue-openclaw-openclaw-119253 | merge_canonical blocked | checks are not clean: build-artifacts: IN_PROGRESS | [issue-openclaw-openclaw-119253](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119253.md) | [30919381942](https://github.com/openclaw/clawsweeper/actions/runs/30919381942) |
| automerge-openclaw-openclaw-119160 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-119160](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119160.md) | [30903096697](https://github.com/openclaw/clawsweeper/actions/runs/30903096697) |
| automerge-openclaw-openclaw-117954 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-117954](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117954.md) | [30829913877](https://github.com/openclaw/clawsweeper/actions/runs/30829913877) |
| automerge-openclaw-openclaw-118688 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-118688](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118688.md) | [30823583090](https://github.com/openclaw/clawsweeper/actions/runs/30823583090) |
| automerge-openclaw-openclaw-118679 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-118679](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118679.md) | [30819003741](https://github.com/openclaw/clawsweeper/actions/runs/30819003741) |
| issue-openclaw-openclaw-118625 | merge_canonical blocked | checks are not clean: checks-node-compact-large-8: IN_PROGRESS | [issue-openclaw-openclaw-118625](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118625.md) | [30817235143](https://github.com/openclaw/clawsweeper/actions/runs/30817235143) |
| issue-openclaw-openclaw-116747 | merge_canonical blocked | checks are not clean: check-lint: FAILURE, openclaw/ci-gate: FAILURE | [issue-openclaw-openclaw-116747](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-116747.md) | [30776997127](https://github.com/openclaw/clawsweeper/actions/runs/30776997127) |
| automerge-openclaw-openclaw-118325 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-118325](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118325.md) | [30774506108](https://github.com/openclaw/clawsweeper/actions/runs/30774506108) |
| automerge-openclaw-openclaw-118309 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-118309](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118309.md) | [30773797117](https://github.com/openclaw/clawsweeper/actions/runs/30773797117) |
| issue-openclaw-openclaw-116601 | merge_canonical blocked | checks are not clean: checks-node-changed: FAILURE, openclaw/ci-gate: FAILURE | [issue-openclaw-openclaw-116601](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-116601.md) | [30772177165](https://github.com/openclaw/clawsweeper/actions/runs/30772177165) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [automerge-openclaw-openclaw-118599](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118599.md) | failed |  |  | Codex /review did not pass after final base synchronization: One current-diff user-visible inconsistency remains; otherwise the lock, backup, secur... | [31129468571](https://github.com/openclaw/clawsweeper/actions/runs/31129468571) |
| [automerge-openclaw-openclaw-118599](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118599.md) | blocked |  |  | Codex /review did not pass after final base synchronization: One current-diff user-visible inconsistency remains; otherwise the lock, backup, secur... | [31129468571](https://github.com/openclaw/clawsweeper/actions/runs/31129468571) |
| [automerge-openclaw-openclaw-119717](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119717.md) | failed |  |  | Codex /review did not pass after final base synchronization: The branch cleanly rebases onto pinned base b8f6086411cf6f3633784a6f92658ac9c7dbc990 a... | [31071905373](https://github.com/openclaw/clawsweeper/actions/runs/31071905373) |
| [automerge-openclaw-openclaw-119717](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119717.md) | blocked |  |  | Codex /review did not pass after final base synchronization: The branch cleanly rebases onto pinned base b8f6086411cf6f3633784a6f92658ac9c7dbc990 a... | [31071905373](https://github.com/openclaw/clawsweeper/actions/runs/31071905373) |
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
| [issue-openclaw-openclaw-115073](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-115073.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/cli/plug... | [30677342367](https://github.com/openclaw/clawsweeper/actions/runs/30677342367) |
| [automerge-openclaw-openclaw-116909](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-116909.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/e... | [30675697277](https://github.com/openclaw/clawsweeper/actions/runs/30675697277) |
| [automerge-openclaw-openclaw-116909](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-116909.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/e... | [30675697277](https://github.com/openclaw/clawsweeper/actions/runs/30675697277) |
| [issue-openclaw-openclaw-93917](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-93917.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, docs [check:changed] src/ag... | [30651770665](https://github.com/openclaw/clawsweeper/actions/runs/30651770665) |
| [automerge-openclaw-openclaw-114611](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-114611.md) | blocked | [#114611](https://github.com/openclaw/openclaw/pull/114611) |  | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [30652227116](https://github.com/openclaw/clawsweeper/actions/runs/30652227116) |
| [issue-openclaw-openclaw-116967](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-116967.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [30652172891](https://github.com/openclaw/clawsweeper/actions/runs/30652172891) |

### Top Blocked Reasons

| Reason | Latest count | Example cluster |
| --- | ---: | --- |
| job does not allow merge | 103 | [automerge-openclaw-crabbox-1252](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-crabbox-1252.md) |
| autofix-only job cannot merge | 19 | [automerge-openclaw-openclaw-119983](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119983.md) |
| checks are not clean: test: IN_PROGRESS, windows: IN_PROGRESS | 9 | [issue-openclaw-gogcli-917](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-917.md) |
| checks are not clean: Go: IN_PROGRESS, Release Check: IN_PROGRESS | 7 | [issue-openclaw-crabbox-756](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-756.md) |
| checks are not clean: build-artifacts: IN_PROGRESS | 2 | [issue-openclaw-openclaw-119350](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119350.md) |
| checks are not clean: checks-node-compact-large-8: IN_PROGRESS | 2 | [issue-openclaw-openclaw-118625](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118625.md) |
| checks are not clean: windows: IN_PROGRESS | 2 | [issue-openclaw-gogcli-872](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-872.md) |
| checks are not clean: checks-node-compact-large-1: FAILURE, checks-node-compact-large-3: FAILURE, check-dependencies: FAILURE, check-test... | 1 | [issue-openclaw-openclaw-120019](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120019.md) |
| checks are not clean: preflight: QUEUED | 1 | [issue-openclaw-openclaw-119962](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119962.md) |
| checks are not clean: checks-node-compact-large-6: IN_PROGRESS | 1 | [issue-openclaw-openclaw-119958](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119958.md) |
| checks are not clean: preflight: QUEUED, Scan changed paths (precise): QUEUED | 1 | [issue-openclaw-openclaw-119758](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119758.md) |
| checks are not clean: QA Smoke CI (profile 2/4): FAILURE, openclaw/ci-gate: FAILURE | 1 | [issue-openclaw-openclaw-94679](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-94679.md) |
| checks are not clean: check-lint: FAILURE, openclaw/ci-gate: FAILURE | 1 | [issue-openclaw-openclaw-116747](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-116747.md) |
| checks are not clean: checks-node-changed: FAILURE, openclaw/ci-gate: FAILURE | 1 | [issue-openclaw-openclaw-116601](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-116601.md) |
| checks are not clean: check-sqlite-session-flip-proof: FAILURE, openclaw/ci-gate: FAILURE | 1 | [issue-openclaw-openclaw-69242](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-69242.md) |

### Latest Repair Closures

| Target | Action | Title | Closed | Cluster | Report | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

