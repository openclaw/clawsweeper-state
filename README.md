# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Aug 6, 2026, 00:47 UTC

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Apply finished | Aug 6, 2026, 00:47 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/31060245886) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Apply finished | Aug 5, 2026, 23:44 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/31057218624) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Aug 5, 2026, 23:58 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/31058154760) |

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

Last source update: Aug 6, 2026, 00:33 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 392 | 100% |
| Run attempts archived | 1061 | audit |
| Latest successful clusters | 331 | 84.4% |
| Latest failed clusters | 59 | 15.1% |
| Latest cancelled clusters | 2 | 0.5% |
| Needs-human clusters | 25 | 6.4% |
| Fix actions failed | 19 | 4.3% |
| Fix actions blocked | 77 | 17.6% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 275 | 99.6% |
| Skipped mutation attempts | 1 | 0.4% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 392 clusters: 179 maintainer action, 71 automation snapshot, 118 intervention needed, 24 no pending action, 0 completed.
- Maintainer first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#119784](https://github.com/openclaw/openclaw/pull/119784) is merge_ready: issue implementation PR checks are green; merge intentionally blocked for this lane.
- Intervention first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [issue-openclaw-openclaw-44289](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-44289.md) is automation_failed: Codex fix worker timed out after 1800000ms.
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#119551](https://github.com/openclaw/openclaw/pull/119551) is action_planned: Open canonical issue; current main remains affected and the repair fits the stated bug-fix boundary..
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 179 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 71 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 118 | automation failure or blocker recorded |
| No Pending Action | 24 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 46 |
| merge_ready | 35 |
| merge_not_authorized | 98 |
| checks_blocked | 35 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 35 |
| automation_failed | 66 |
| automation_blocked | 52 |
| reviewed_no_action | 24 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119500](https://github.com/openclaw/openclaw/pull/119500) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 5, 2026, 05:43 UTC | [issue-openclaw-openclaw-119411](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119411.md) | [30977123951](https://github.com/openclaw/clawsweeper/actions/runs/30977123951) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-41495](cluster:issue-openclaw-openclaw-41495) | maintainer_input | Choose one supported contract for model-authored generic choices: add a first-class typed response/select action with cross-channel agent routing,... | Aug 4, 2026, 17:31 UTC | [issue-openclaw-openclaw-41495](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-41495.md) | [30933728183](https://github.com/openclaw/clawsweeper/actions/runs/30933728183) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#40829](https://github.com/openclaw/openclaw/issues/40829) | maintainer_input | Central OpenClaw security handling owns this closed reference. | Aug 4, 2026, 08:54 UTC | [issue-openclaw-openclaw-53932](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-53932.md) | [30892678104](https://github.com/openclaw/clawsweeper/actions/runs/30892678104) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118751](https://github.com/openclaw/openclaw/pull/118751) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 3, 2026, 16:26 UTC | [issue-openclaw-openclaw-102190](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-102190.md) | [30829062455](https://github.com/openclaw/clawsweeper/actions/runs/30829062455) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118696](https://github.com/openclaw/openclaw/pull/118696) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 3, 2026, 15:04 UTC | [issue-openclaw-openclaw-118652](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118652.md) | [30816677332](https://github.com/openclaw/clawsweeper/actions/runs/30816677332) |

#### Automation Snapshot

| Repository | Item | Lane state | Recorded status | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119551](https://github.com/openclaw/openclaw/pull/119551) | action_planned | Open canonical issue; current main remains affected and the repair fits the stated bug-fix boundary. | Aug 6, 2026, 00:22 UTC | [issue-openclaw-openclaw-119551](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119551.md) | [31058921059](https://github.com/openclaw/clawsweeper/actions/runs/31058921059) |
| [openclaw/crabpot](https://github.com/openclaw/crabpot) | [#283](https://github.com/openclaw/crabpot/pull/283) | action_planned | Repair the opted-in contributor branch; no close or merge action is authorized. | Aug 6, 2026, 00:17 UTC | [automerge-openclaw-crabpot-283](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-crabpot-283.md) | [31058919521](https://github.com/openclaw/clawsweeper/actions/runs/31058919521) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119648](https://github.com/openclaw/openclaw/pull/119648) | action_planned | The bug is confirmed and bounded. No viable implementation PR is hydrated, so the canonical issue needs a new narrow fix path rather than closure o... | Aug 5, 2026, 16:13 UTC | [issue-openclaw-openclaw-119648](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119648.md) | [31023438615](https://github.com/openclaw/clawsweeper/actions/runs/31023438615) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119172](https://github.com/openclaw/openclaw/pull/119172) | action_planned | Repair the canonical branch, rebase it, regenerate prompt snapshots after the model-visible description update, then obtain one exact-head re-revie... | Aug 5, 2026, 16:08 UTC | [automerge-openclaw-openclaw-119172](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119172.md) | [31013321940](https://github.com/openclaw/clawsweeper/actions/runs/31013321940) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118303](https://github.com/openclaw/openclaw/pull/118303) | action_planned | Repair the existing same-repository writable branch; do not merge in autofix mode. | Aug 5, 2026, 13:10 UTC | [automerge-openclaw-openclaw-118303](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118303.md) | [31008298774](https://github.com/openclaw/clawsweeper/actions/runs/31008298774) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119509](https://github.com/openclaw/openclaw/pull/119509) | action_planned | Repair the contributor branch: retain the canonical Windows codepage decoder while explicitly preserving the existing session exec BOM behavior, th... | Aug 5, 2026, 07:25 UTC | [automerge-openclaw-openclaw-119509](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119509.md) | [30984421359](https://github.com/openclaw/clawsweeper/actions/runs/30984421359) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119528](https://github.com/openclaw/openclaw/pull/119528) | checks_blocked | checks are not clean: QA Smoke CI (profile 2/4): FAILURE, openclaw/ci-gate: FAILURE | Aug 5, 2026, 07:16 UTC | [issue-openclaw-openclaw-94679](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-94679.md) | [30981110177](https://github.com/openclaw/clawsweeper/actions/runs/30981110177) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119385](https://github.com/openclaw/openclaw/pull/119385) | action_planned | The issue is a reproducible central QA timeout-reporting defect, not yet a proven Active Memory migration defect. | Aug 5, 2026, 06:23 UTC | [issue-openclaw-openclaw-119385](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119385.md) | [30978484256](https://github.com/openclaw/clawsweeper/actions/runs/30978484256) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#42106](https://github.com/openclaw/openclaw/pull/42106) | action_planned | The reported behavior reproduces from current source on main, is non-security correctness work, and the linked PRs are closed historical context ra... | Aug 5, 2026, 04:33 UTC | [issue-openclaw-openclaw-42106](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-42106.md) | [30972398817](https://github.com/openclaw/clawsweeper/actions/runs/30972398817) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119382](https://github.com/openclaw/openclaw/pull/119382) | action_planned | A focused owner-boundary repair is available on current main. | Aug 5, 2026, 02:14 UTC | [issue-openclaw-openclaw-119382](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119382.md) | [30968230050](https://github.com/openclaw/clawsweeper/actions/runs/30968230050) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119367](https://github.com/openclaw/openclaw/pull/119367) | checks_blocked | checks are not clean: build-artifacts: IN_PROGRESS | Aug 4, 2026, 23:15 UTC | [issue-openclaw-openclaw-119350](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119350.md) | [30955531366](https://github.com/openclaw/clawsweeper/actions/runs/30955531366) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-111346](cluster:issue-openclaw-openclaw-111346) | action_planned | No viable implementation PR is present; create the narrow fix artifact and PR path. | Aug 4, 2026, 18:06 UTC | [issue-openclaw-openclaw-111346](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-111346.md) | [30931934231](https://github.com/openclaw/clawsweeper/actions/runs/30931934231) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119265](https://github.com/openclaw/openclaw/pull/119265) | checks_blocked | checks are not clean: build-artifacts: IN_PROGRESS | Aug 4, 2026, 17:07 UTC | [issue-openclaw-openclaw-119253](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119253.md) | [30919381942](https://github.com/openclaw/clawsweeper/actions/runs/30919381942) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119271](https://github.com/openclaw/openclaw/pull/119271) | action_planned | Repair the existing writable contributor branch; do not replace useful source work or merge it from this lane. | Aug 4, 2026, 16:14 UTC | [issue-openclaw-openclaw-119263](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119263.md) | [30927543831](https://github.com/openclaw/clawsweeper/actions/runs/30927543831) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119233](https://github.com/openclaw/openclaw/pull/119233) | action_planned | Build the permitted narrow fix PR. | Aug 4, 2026, 15:21 UTC | [issue-openclaw-openclaw-119233](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119233.md) | [30922910506](https://github.com/openclaw/clawsweeper/actions/runs/30922910506) |

#### Intervention Needed

| Repository | Item | Lane state | Recorded blocker | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | Codex fix worker timed out after 1800000ms | Aug 5, 2026, 23:54 UTC | [issue-openclaw-openclaw-44289](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-44289.md) | [31055603971](https://github.com/openclaw/clawsweeper/actions/runs/31055603971) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119735](https://github.com/openclaw/openclaw/pull/119735) | automation_blocked | autofix-only job cannot merge | Aug 5, 2026, 23:27 UTC | [automerge-openclaw-openclaw-119735](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119735.md) | [31053325148](https://github.com/openclaw/clawsweeper/actions/runs/31053325148) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119737](https://github.com/openclaw/openclaw/pull/119737) | automation_blocked | autofix-only job cannot merge | Aug 5, 2026, 23:09 UTC | [automerge-openclaw-openclaw-119737](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119737.md) | [31052977808](https://github.com/openclaw/clawsweeper/actions/runs/31052977808) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119718](https://github.com/openclaw/openclaw/pull/119718) | automation_blocked | autofix-only job cannot merge | Aug 5, 2026, 22:28 UTC | [automerge-openclaw-openclaw-119718](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119718.md) | [31049254315](https://github.com/openclaw/clawsweeper/actions/runs/31049254315) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119717](https://github.com/openclaw/openclaw/pull/119717) | automation_blocked | autofix-only job cannot merge | Aug 5, 2026, 21:54 UTC | [automerge-openclaw-openclaw-119717](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119717.md) | [31044377132](https://github.com/openclaw/clawsweeper/actions/runs/31044377132) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119722](https://github.com/openclaw/openclaw/pull/119722) | automation_blocked | autofix-only job cannot merge | Aug 5, 2026, 21:17 UTC | [automerge-openclaw-openclaw-119722](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119722.md) | [31045548540](https://github.com/openclaw/clawsweeper/actions/runs/31045548540) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | Codex fix worker timed out after 1800000ms | Aug 5, 2026, 19:59 UTC | [issue-openclaw-openclaw-81355](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-81355.md) | [31035470296](https://github.com/openclaw/clawsweeper/actions/runs/31035470296) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119691](https://github.com/openclaw/openclaw/pull/119691) | automation_failed | Live hydrated issue is open, canonical, non-security-sensitive, and describes a source-confirmed destructive path. No viable implementation PR is h... | Aug 5, 2026, 19:06 UTC | [issue-openclaw-openclaw-119691](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119691.md) | [31035673723](https://github.com/openclaw/clawsweeper/actions/runs/31035673723) |
| [openclaw/plugin-inspector](https://github.com/openclaw/plugin-inspector) | [#58](https://github.com/openclaw/plugin-inspector/pull/58) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Aug 5, 2026, 16:42 UTC | [automerge-openclaw-plugin-inspector-58](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-plugin-inspector-58.md) | [31026026866](https://github.com/openclaw/clawsweeper/actions/runs/31026026866) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119616](https://github.com/openclaw/openclaw/pull/119616) | automation_blocked | Repair requires source edits and dependency installation, neither permitted in this worker workspace. | Aug 5, 2026, 15:20 UTC | [issue-openclaw-openclaw-119616](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119616.md) | [31018652642](https://github.com/openclaw/clawsweeper/actions/runs/31018652642) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#96692](https://github.com/openclaw/openclaw/pull/96692) | automation_failed | Implementation is blocked only by the immutable checkout. The executor should apply the supplied narrow artifact on an editable checkout, then re-f... | Aug 5, 2026, 13:49 UTC | [issue-openclaw-openclaw-96692](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-96692.md) | [31008717397](https://github.com/openclaw/clawsweeper/actions/runs/31008717397) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119592](https://github.com/openclaw/openclaw/pull/119592) | automation_failed | Open canonical issue; no viable implementation PR is hydrated. | Aug 5, 2026, 12:56 UTC | [issue-openclaw-openclaw-119592](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119592.md) | [31004605443](https://github.com/openclaw/clawsweeper/actions/runs/31004605443) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118599](https://github.com/openclaw/openclaw/pull/118599) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Aug 5, 2026, 12:32 UTC | [automerge-openclaw-openclaw-118599](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118599.md) | [31004022776](https://github.com/openclaw/clawsweeper/actions/runs/31004022776) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118807](https://github.com/openclaw/openclaw/pull/118807) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Aug 5, 2026, 05:13 UTC | [automerge-openclaw-openclaw-118807](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118807.md) | [30974609326](https://github.com/openclaw/clawsweeper/actions/runs/30974609326) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119418](https://github.com/openclaw/openclaw/pull/119418) | automation_failed | Implementation and focused validation are blocked only by the immutable, dependency-free checkout; the prepared artifact can be applied on clawswee... | Aug 5, 2026, 03:37 UTC | [issue-openclaw-openclaw-119418](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119418.md) | [30971479946](https://github.com/openclaw/clawsweeper/actions/runs/30971479946) |

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
| issue-openclaw-openclaw-44289 | execute_fix blocked | Codex fix worker timed out after 1800000ms | [issue-openclaw-openclaw-44289](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-44289.md) | [31055603971](https://github.com/openclaw/clawsweeper/actions/runs/31055603971) |
| automerge-openclaw-openclaw-119735 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-119735](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119735.md) | [31053325148](https://github.com/openclaw/clawsweeper/actions/runs/31053325148) |
| automerge-openclaw-openclaw-119737 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-119737](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119737.md) | [31052977808](https://github.com/openclaw/clawsweeper/actions/runs/31052977808) |
| automerge-openclaw-openclaw-119718 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-119718](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119718.md) | [31049254315](https://github.com/openclaw/clawsweeper/actions/runs/31049254315) |
| automerge-openclaw-openclaw-119717 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-119717](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119717.md) | [31044377132](https://github.com/openclaw/clawsweeper/actions/runs/31044377132) |
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
| automerge-openclaw-openclaw-117976 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-117976](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117976.md) | [30766013583](https://github.com/openclaw/clawsweeper/actions/runs/30766013583) |
| automerge-openclaw-openclaw-107479 | merge_canonical blocked | job does not allow merge | [automerge-openclaw-openclaw-107479](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-107479.md) | [30757037741](https://github.com/openclaw/clawsweeper/actions/runs/30757037741) |
| automerge-openclaw-openclaw-117951 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-117951](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117951.md) | [30755743580](https://github.com/openclaw/clawsweeper/actions/runs/30755743580) |
| automerge-openclaw-openclaw-117911 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-117911](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117911.md) | [30754089504](https://github.com/openclaw/clawsweeper/actions/runs/30754089504) |
| issue-openclaw-openclaw-113631 | execute_fix blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [issue-openclaw-openclaw-113631](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-113631.md) | [30754058583](https://github.com/openclaw/clawsweeper/actions/runs/30754058583) |
| automerge-openclaw-openclaw-117906 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-117906](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117906.md) | [30739808879](https://github.com/openclaw/clawsweeper/actions/runs/30739808879) |
| issue-openclaw-openclaw-69242 | merge_canonical blocked | checks are not clean: check-sqlite-session-flip-proof: FAILURE, openclaw/ci-gate: FAILURE | [issue-openclaw-openclaw-69242](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-69242.md) | [30738935968](https://github.com/openclaw/clawsweeper/actions/runs/30738935968) |
| automerge-openclaw-openclaw-117869 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/s... | [automerge-openclaw-openclaw-117869](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117869.md) | [30737716674](https://github.com/openclaw/clawsweeper/actions/runs/30737716674) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [issue-openclaw-openclaw-44289](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-44289.md) | blocked |  |  | Codex fix worker timed out after 1800000ms | [31055603971](https://github.com/openclaw/clawsweeper/actions/runs/31055603971) |
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
| [automerge-openclaw-openclaw-116584](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-116584.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, apps [check:changed] apps/a... | [30597758157](https://github.com/openclaw/clawsweeper/actions/runs/30597758157) |
| [automerge-openclaw-openclaw-116584](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-116584.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, apps [check:changed] apps/a... | [30597758157](https://github.com/openclaw/clawsweeper/actions/runs/30597758157) |
| [automerge-openclaw-openclaw-110725](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-110725.md) | failed |  |  | validation command failed (pnpm check:changed): validation command left 4 background process(es) after exit | [29692504658](https://github.com/openclaw/clawsweeper/actions/runs/29692504658) |
| [automerge-openclaw-openclaw-110725](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-110725.md) | blocked |  |  | validation command failed (pnpm check:changed): validation command left 4 background process(es) after exit | [29692504658](https://github.com/openclaw/clawsweeper/actions/runs/29692504658) |

### Top Blocked Reasons

| Reason | Latest count | Example cluster |
| --- | ---: | --- |
| job does not allow merge | 102 | [automerge-openclaw-openclaw-107479](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-107479.md) |
| autofix-only job cannot merge | 18 | [automerge-openclaw-openclaw-119735](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119735.md) |
| checks are not clean: test: IN_PROGRESS, windows: IN_PROGRESS | 9 | [issue-openclaw-gogcli-917](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-917.md) |
| checks are not clean: Go: IN_PROGRESS, Release Check: IN_PROGRESS | 7 | [issue-openclaw-crabbox-756](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-756.md) |
| checks are not clean: build-artifacts: IN_PROGRESS | 2 | [issue-openclaw-openclaw-119350](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119350.md) |
| checks are not clean: checks-node-compact-large-8: IN_PROGRESS | 2 | [issue-openclaw-openclaw-118625](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118625.md) |
| checks are not clean: windows: IN_PROGRESS | 2 | [issue-openclaw-gogcli-872](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-872.md) |
| checks are not clean: QA Smoke CI (profile 2/4): FAILURE, openclaw/ci-gate: FAILURE | 1 | [issue-openclaw-openclaw-94679](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-94679.md) |
| checks are not clean: check-lint: FAILURE, openclaw/ci-gate: FAILURE | 1 | [issue-openclaw-openclaw-116747](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-116747.md) |
| checks are not clean: checks-node-changed: FAILURE, openclaw/ci-gate: FAILURE | 1 | [issue-openclaw-openclaw-116601](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-116601.md) |
| checks are not clean: check-sqlite-session-flip-proof: FAILURE, openclaw/ci-gate: FAILURE | 1 | [issue-openclaw-openclaw-69242](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-69242.md) |
| checks are not clean: openclaw/ci-gate: IN_PROGRESS | 1 | [issue-openclaw-openclaw-88079](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-88079.md) |
| replacement pull request requires a fresh current-head ClawSweeper review; automatic merge disabled | 1 | [automerge-openclaw-openclaw-113663](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-113663.md) |
| checks are not clean: checks-node-compact-large-8: IN_PROGRESS, openclaw/ci-gate: QUEUED | 1 | [issue-openclaw-openclaw-117672](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117672.md) |
| protected or paused repair label: security | 1 | [automerge-openclaw-openclaw-116976](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-116976.md) |

### Latest Repair Closures

| Target | Action | Title | Closed | Cluster | Report | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

