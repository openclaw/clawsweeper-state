# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Aug 3, 2026, 15:17 UTC

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Review in progress | Aug 3, 2026, 15:17 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/30826518540) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Planning review | Aug 3, 2026, 14:14 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/30821692858) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Aug 3, 2026, 11:42 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/30810581531) |

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

Last source update: Aug 3, 2026, 15:04 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 330 | 100% |
| Run attempts archived | 897 | audit |
| Latest successful clusters | 291 | 88.2% |
| Latest failed clusters | 38 | 11.5% |
| Latest cancelled clusters | 1 | 0.3% |
| Needs-human clusters | 23 | 7.0% |
| Fix actions failed | 19 | 4.8% |
| Fix actions blocked | 75 | 18.9% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 260 | 99.6% |
| Skipped mutation attempts | 1 | 0.4% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 330 clusters: 165 maintainer action, 52 automation snapshot, 92 intervention needed, 21 no pending action, 0 completed.
- Maintainer first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#118696](https://github.com/openclaw/openclaw/pull/118696) is merge_ready: issue implementation PR checks are green; merge intentionally blocked for this lane.
- Intervention first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#118688](https://github.com/openclaw/openclaw/pull/118688) is automation_blocked: autofix-only job cannot merge.
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#118688](https://github.com/openclaw/openclaw/pull/118688) is checks_blocked: checks are not clean: checks-node-compact-large-8: IN_PROGRESS.
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 165 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 52 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 92 | automation failure or blocker recorded |
| No Pending Action | 21 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 41 |
| merge_ready | 26 |
| merge_not_authorized | 98 |
| checks_blocked | 32 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 19 |
| automation_failed | 45 |
| automation_blocked | 47 |
| reviewed_no_action | 21 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118696](https://github.com/openclaw/openclaw/pull/118696) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 3, 2026, 15:04 UTC | [issue-openclaw-openclaw-118652](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118652.md) | [30816677332](https://github.com/openclaw/clawsweeper/actions/runs/30816677332) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118685](https://github.com/openclaw/openclaw/pull/118685) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 3, 2026, 13:56 UTC | [issue-openclaw-openclaw-118673](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118673.md) | [30817343279](https://github.com/openclaw/clawsweeper/actions/runs/30817343279) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118656](https://github.com/openclaw/openclaw/pull/118656) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 3, 2026, 12:21 UTC | [issue-openclaw-openclaw-118649](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118649.md) | [30811151078](https://github.com/openclaw/clawsweeper/actions/runs/30811151078) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#107479](https://github.com/openclaw/openclaw/pull/107479) | merge_not_authorized | job does not allow merge | Aug 2, 2026, 16:57 UTC | [automerge-openclaw-openclaw-107479](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-107479.md) | [30757037741](https://github.com/openclaw/clawsweeper/actions/runs/30757037741) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118064](https://github.com/openclaw/openclaw/pull/118064) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 2, 2026, 16:52 UTC | [issue-openclaw-openclaw-118029](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118029.md) | [30756039551](https://github.com/openclaw/clawsweeper/actions/runs/30756039551) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118055](https://github.com/openclaw/openclaw/pull/118055) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 2, 2026, 16:48 UTC | [issue-openclaw-openclaw-118039](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118039.md) | [30756285434](https://github.com/openclaw/clawsweeper/actions/runs/30756285434) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117976](https://github.com/openclaw/openclaw/pull/117976) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 2, 2026, 12:12 UTC | [issue-openclaw-openclaw-90786](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-90786.md) | [30746149392](https://github.com/openclaw/clawsweeper/actions/runs/30746149392) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117954](https://github.com/openclaw/openclaw/pull/117954) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 2, 2026, 10:43 UTC | [issue-openclaw-openclaw-117941](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117941.md) | [30742939447](https://github.com/openclaw/clawsweeper/actions/runs/30742939447) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117952](https://github.com/openclaw/openclaw/pull/117952) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 2, 2026, 10:40 UTC | [issue-openclaw-openclaw-117899](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117899.md) | [30742823338](https://github.com/openclaw/clawsweeper/actions/runs/30742823338) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117881](https://github.com/openclaw/openclaw/pull/117881) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 2, 2026, 07:05 UTC | [issue-openclaw-openclaw-67366](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-67366.md) | [30736012393](https://github.com/openclaw/clawsweeper/actions/runs/30736012393) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#67202](https://github.com/openclaw/openclaw/issues/67202) | maintainer_input | Route this exact security-sensitive historical PR to central OpenClaw security handling; do not let it block the unrelated non-security repair path. | Aug 2, 2026, 05:30 UTC | [issue-openclaw-openclaw-67136](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-67136.md) | [30733333491](https://github.com/openclaw/clawsweeper/actions/runs/30733333491) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117620](https://github.com/openclaw/openclaw/pull/117620) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Aug 1, 2026, 20:45 UTC | [issue-openclaw-openclaw-117545](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117545.md) | [30716583623](https://github.com/openclaw/clawsweeper/actions/runs/30716583623) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#100498](https://github.com/openclaw/openclaw/issues/100498) | maintainer_input | Quarantine the exact security-sensitive contextual PR without blocking the unrelated non-security repair for #116490. | Aug 1, 2026, 14:12 UTC | [issue-openclaw-openclaw-116490](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-116490.md) | [30702491319](https://github.com/openclaw/clawsweeper/actions/runs/30702491319) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#116976](https://github.com/openclaw/openclaw/pull/116976) | merge_not_authorized | job does not allow merge | Jul 31, 2026, 18:04 UTC | [automerge-openclaw-openclaw-114611](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-114611.md) | [30652227116](https://github.com/openclaw/clawsweeper/actions/runs/30652227116) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#111745](https://github.com/openclaw/openclaw/issues/111745) | maintainer_input | Obtain the sanitized reproduction evidence requested in the July 31, 2026 maintainer comment: effective npm_config values, npm config list --json,... | Jul 31, 2026, 14:06 UTC | [issue-openclaw-openclaw-111745](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-111745.md) | [30636586682](https://github.com/openclaw/clawsweeper/actions/runs/30636586682) |

#### Automation Snapshot

| Repository | Item | Lane state | Recorded status | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118688](https://github.com/openclaw/openclaw/pull/118688) | checks_blocked | checks are not clean: checks-node-compact-large-8: IN_PROGRESS | Aug 3, 2026, 14:05 UTC | [issue-openclaw-openclaw-118625](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118625.md) | [30817235143](https://github.com/openclaw/clawsweeper/actions/runs/30817235143) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118361](https://github.com/openclaw/openclaw/pull/118361) | checks_blocked | checks are not clean: check-lint: FAILURE, openclaw/ci-gate: FAILURE | Aug 3, 2026, 02:04 UTC | [issue-openclaw-openclaw-116747](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-116747.md) | [30776997127](https://github.com/openclaw/clawsweeper/actions/runs/30776997127) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118303](https://github.com/openclaw/openclaw/pull/118303) | checks_blocked | checks are not clean: checks-node-changed: FAILURE, openclaw/ci-gate: FAILURE | Aug 2, 2026, 23:57 UTC | [issue-openclaw-openclaw-116601](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-116601.md) | [30772177165](https://github.com/openclaw/clawsweeper/actions/runs/30772177165) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118130](https://github.com/openclaw/openclaw/issues/118130) | action_planned | Repair the existing writable PR branch by rebasing onto current main, preserving its issue link and @ralphael-grain attribution, then rerun the foc... | Aug 2, 2026, 19:00 UTC | [issue-openclaw-openclaw-118083](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118083.md) | [30761665979](https://github.com/openclaw/clawsweeper/actions/runs/30761665979) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#114609](https://github.com/openclaw/openclaw/pull/114609) | action_planned | The branch is stale but writable and the source PR is useful, focused contributor work. Repairing it is preferable to retaining a bot-authored dupl... | Aug 2, 2026, 16:45 UTC | [automerge-openclaw-openclaw-114609](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-114609.md) | [30757123131](https://github.com/openclaw/clawsweeper/actions/runs/30757123131) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117911](https://github.com/openclaw/openclaw/pull/117911) | checks_blocked | checks are not clean: check-sqlite-session-flip-proof: FAILURE, openclaw/ci-gate: FAILURE | Aug 2, 2026, 08:37 UTC | [issue-openclaw-openclaw-69242](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-69242.md) | [30738935968](https://github.com/openclaw/clawsweeper/actions/runs/30738935968) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117906](https://github.com/openclaw/openclaw/pull/117906) | action_planned | Repair the active same-repository PR branch to restore direct mention-prefixed command probing without reverting agent-facing self-mention context. | Aug 2, 2026, 08:34 UTC | [issue-openclaw-openclaw-72504](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-72504.md) | [30739116200](https://github.com/openclaw/clawsweeper/actions/runs/30739116200) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117717](https://github.com/openclaw/openclaw/pull/117717) | action_planned | Run the bounded repair/rebase/review loop against the existing canonical branch; do not replace or merge it. | Aug 2, 2026, 03:35 UTC | [automerge-openclaw-openclaw-117717](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117717.md) | [30730754729](https://github.com/openclaw/clawsweeper/actions/runs/30730754729) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117721](https://github.com/openclaw/openclaw/pull/117721) | checks_blocked | checks are not clean: openclaw/ci-gate: IN_PROGRESS | Aug 2, 2026, 01:12 UTC | [issue-openclaw-openclaw-88079](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-88079.md) | [30725508395](https://github.com/openclaw/clawsweeper/actions/runs/30725508395) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117633](https://github.com/openclaw/openclaw/pull/117633) | action_planned | Implement the ownerHandle propagation regression fix on the designated ClawSweeper branch. The job forbids merge and issue closure. | Aug 2, 2026, 00:03 UTC | [issue-openclaw-openclaw-117633](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117633.md) | [30721376353](https://github.com/openclaw/clawsweeper/actions/runs/30721376353) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117697](https://github.com/openclaw/openclaw/pull/117697) | checks_blocked | checks are not clean: checks-node-compact-large-8: IN_PROGRESS, openclaw/ci-gate: QUEUED | Aug 1, 2026, 23:58 UTC | [issue-openclaw-openclaw-117672](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117672.md) | [30723386747](https://github.com/openclaw/clawsweeper/actions/runs/30723386747) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#116188](https://github.com/openclaw/openclaw/pull/116188) | action_planned | Repair the useful contributor branch rather than replacing it: rebase once onto current main, retain its focused implementation and contributor his... | Aug 1, 2026, 19:23 UTC | [automerge-openclaw-openclaw-116188](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-116188.md) | [30710888629](https://github.com/openclaw/clawsweeper/actions/runs/30710888629) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117521](https://github.com/openclaw/openclaw/pull/117521) | action_planned | Reuse the existing same-repository ClawSweeper branch as the sole implementation path; repair is narrow but requires exact-head focused validation... | Aug 1, 2026, 17:52 UTC | [issue-openclaw-openclaw-117491](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117491.md) | [30710889861](https://github.com/openclaw/clawsweeper/actions/runs/30710889861) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117485](https://github.com/openclaw/openclaw/pull/117485) | checks_blocked | checks are not clean: Scan iOS dead code: FAILURE, Intersect shared OpenClawKit dead code: FAILURE, ios-build: FAILURE, openclaw/ci-gate: FAILURE | Aug 1, 2026, 16:04 UTC | [issue-openclaw-openclaw-110171](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-110171.md) | [30706593455](https://github.com/openclaw/clawsweeper/actions/runs/30706593455) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117443](https://github.com/openclaw/openclaw/pull/117443) | checks_blocked | checks are not clean: checks-node-compact-large-8: IN_PROGRESS | Aug 1, 2026, 14:34 UTC | [issue-openclaw-openclaw-89532](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-89532.md) | [30702513540](https://github.com/openclaw/clawsweeper/actions/runs/30702513540) |

#### Intervention Needed

| Repository | Item | Lane state | Recorded blocker | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118688](https://github.com/openclaw/openclaw/pull/118688) | automation_blocked | autofix-only job cannot merge | Aug 3, 2026, 14:51 UTC | [automerge-openclaw-openclaw-118688](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118688.md) | [30820468806](https://github.com/openclaw/clawsweeper/actions/runs/30820468806) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118679](https://github.com/openclaw/openclaw/pull/118679) | automation_blocked | autofix-only job cannot merge | Aug 3, 2026, 14:17 UTC | [automerge-openclaw-openclaw-118679](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118679.md) | [30819003741](https://github.com/openclaw/clawsweeper/actions/runs/30819003741) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118599](https://github.com/openclaw/openclaw/pull/118599) | automation_blocked | autofix-only job cannot merge | Aug 3, 2026, 12:27 UTC | [automerge-openclaw-openclaw-118599](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118599.md) | [30810910650](https://github.com/openclaw/clawsweeper/actions/runs/30810910650) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118303](https://github.com/openclaw/openclaw/pull/118303) | automation_blocked | autofix-only job cannot merge | Aug 3, 2026, 11:44 UTC | [automerge-openclaw-openclaw-118303](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118303.md) | [30808151949](https://github.com/openclaw/clawsweeper/actions/runs/30808151949) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117635](https://github.com/openclaw/openclaw/pull/117635) | automation_failed | Canonical issue is open, non-security-sensitive, source-reproducible, and has no hydrated implementation PR. | Aug 3, 2026, 09:36 UTC | [issue-openclaw-openclaw-117635](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117635.md) | [30795022765](https://github.com/openclaw/clawsweeper/actions/runs/30795022765) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118482](https://github.com/openclaw/openclaw/pull/118482) | automation_blocked | The repair shape is narrow and source-proven within OpenClaw, but implementation is blocked until an executor establishes the required Codex protoc... | Aug 3, 2026, 08:09 UTC | [issue-openclaw-openclaw-118482](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118482.md) | [30788301811](https://github.com/openclaw/clawsweeper/actions/runs/30788301811) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118408](https://github.com/openclaw/openclaw/pull/118408) | automation_blocked | A writable trusted executor should implement the established durable queue handoff after retry exhaustion, validate the focused surface, and create... | Aug 3, 2026, 06:57 UTC | [issue-openclaw-openclaw-118408](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118408.md) | [30791504133](https://github.com/openclaw/clawsweeper/actions/runs/30791504133) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118489](https://github.com/openclaw/openclaw/issues/118489) | automation_blocked | A narrow owner-boundary repair is appropriate, but implementation and validation are blocked by the worker environment. | Aug 3, 2026, 06:37 UTC | [issue-openclaw-openclaw-118489](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118489.md) | [30790464853](https://github.com/openclaw/clawsweeper/actions/runs/30790464853) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#60398](https://github.com/openclaw/openclaw/pull/60398) | automation_failed | A narrow existing-behavior repair is warranted with no new config or policy surface. | Aug 3, 2026, 06:19 UTC | [issue-openclaw-openclaw-60398](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-60398.md) | [30789450598](https://github.com/openclaw/clawsweeper/actions/runs/30789450598) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#100845](https://github.com/openclaw/openclaw/pull/100845) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Aug 3, 2026, 03:27 UTC | [automerge-openclaw-openclaw-100845](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-100845.md) | [30781275711](https://github.com/openclaw/clawsweeper/actions/runs/30781275711) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118372](https://github.com/openclaw/openclaw/pull/118372) | automation_failed | A narrow, non-security repair directly satisfies the actionable stderr-retention request and fixes the diagnostic path that currently discards the... | Aug 3, 2026, 02:48 UTC | [issue-openclaw-openclaw-118372](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118372.md) | [30779195329](https://github.com/openclaw/clawsweeper/actions/runs/30779195329) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118325](https://github.com/openclaw/openclaw/pull/118325) | automation_blocked | autofix-only job cannot merge | Aug 3, 2026, 00:51 UTC | [automerge-openclaw-openclaw-118325](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118325.md) | [30774506108](https://github.com/openclaw/clawsweeper/actions/runs/30774506108) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118309](https://github.com/openclaw/openclaw/pull/118309) | automation_blocked | autofix-only job cannot merge | Aug 3, 2026, 00:46 UTC | [automerge-openclaw-openclaw-118309](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118309.md) | [30773797117](https://github.com/openclaw/clawsweeper/actions/runs/30773797117) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117952](https://github.com/openclaw/openclaw/pull/117952) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Aug 2, 2026, 21:47 UTC | [automerge-openclaw-openclaw-117952](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117952.md) | [30765891132](https://github.com/openclaw/clawsweeper/actions/runs/30765891132) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117976](https://github.com/openclaw/openclaw/pull/117976) | automation_blocked | autofix-only job cannot merge | Aug 2, 2026, 21:06 UTC | [automerge-openclaw-openclaw-117976](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117976.md) | [30766013583](https://github.com/openclaw/clawsweeper/actions/runs/30766013583) |

#### No Pending Action

| Repository | Item | Lane state | Latest result | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#95666](https://github.com/openclaw/openclaw/pull/95666) | reviewed_no_action | #95666 was already merged and closed in the hydrated preflight state, with maintainer merge proof and passing post-repair checks. Current main at 6... | Jun 23, 2026, 07:30 UTC | [automerge-openclaw-openclaw-95666](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-95666.md) | [28009633334](https://github.com/openclaw/clawsweeper/actions/runs/28009633334) |
| [openclaw/gogcli](https://github.com/openclaw/gogcli) | [#853](https://github.com/openclaw/gogcli/issues/853) | reviewed_no_action | No repair PR should be opened from this run. The hydrated source issue #853 is already closed, a maintainer explicitly stopped automation to take t... | Jun 20, 2026, 15:01 UTC | [issue-openclaw-gogcli-853](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-853.md) | [27851639404](https://github.com/openclaw/clawsweeper/actions/runs/27851639404) |
| [openclaw/gogcli](https://github.com/openclaw/gogcli) | [#837](https://github.com/openclaw/gogcli/pull/837) | reviewed_no_action | Current main is c02fdf7bc1a1b469e41e59c54ac0d71b83cc4024. The original repair target #834 is already closed and superseded by maintainer rewrite #8... | Jun 18, 2026, 11:53 UTC | [automerge-openclaw-gogcli-834](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-gogcli-834.md) | [27750240321](https://github.com/openclaw/clawsweeper/actions/runs/27750240321) |

#### Completed

| Repository | Item | Lane state | Recorded outcome | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

### Clusters Needing Inspection

| Cluster | State | Reason | Report | Run |
| --- | --- | --- | --- | --- |
| automerge-openclaw-openclaw-118688 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-118688](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118688.md) | [30820468806](https://github.com/openclaw/clawsweeper/actions/runs/30820468806) |
| automerge-openclaw-openclaw-118679 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-118679](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118679.md) | [30819003741](https://github.com/openclaw/clawsweeper/actions/runs/30819003741) |
| issue-openclaw-openclaw-118625 | merge_canonical blocked | checks are not clean: checks-node-compact-large-8: IN_PROGRESS | [issue-openclaw-openclaw-118625](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118625.md) | [30817235143](https://github.com/openclaw/clawsweeper/actions/runs/30817235143) |
| automerge-openclaw-openclaw-118599 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-118599](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118599.md) | [30810910650](https://github.com/openclaw/clawsweeper/actions/runs/30810910650) |
| automerge-openclaw-openclaw-118303 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-118303](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118303.md) | [30808151949](https://github.com/openclaw/clawsweeper/actions/runs/30808151949) |
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
| automerge-openclaw-openclaw-117881 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, extensions, extensionTests... | [automerge-openclaw-openclaw-117881](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117881.md) | [30737052850](https://github.com/openclaw/clawsweeper/actions/runs/30737052850) |
| automerge-openclaw-openclaw-117721 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-117721](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117721.md) | [30727766810](https://github.com/openclaw/clawsweeper/actions/runs/30727766810) |
| issue-openclaw-openclaw-88079 | merge_canonical blocked | checks are not clean: openclaw/ci-gate: IN_PROGRESS | [issue-openclaw-openclaw-88079](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-88079.md) | [30725508395](https://github.com/openclaw/clawsweeper/actions/runs/30725508395) |
| automerge-openclaw-openclaw-113663 | repair_contributor_branch blocked | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [automerge-openclaw-openclaw-113663](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-113663.md) | [30723992316](https://github.com/openclaw/clawsweeper/actions/runs/30723992316) |
| issue-openclaw-openclaw-117672 | merge_canonical blocked | checks are not clean: checks-node-compact-large-8: IN_PROGRESS, openclaw/ci-gate: QUEUED | [issue-openclaw-openclaw-117672](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117672.md) | [30723386747](https://github.com/openclaw/clawsweeper/actions/runs/30723386747) |
| automerge-openclaw-openclaw-116976 | merge_canonical blocked | protected or paused repair label: security | [automerge-openclaw-openclaw-116976](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-116976.md) | [30721754676](https://github.com/openclaw/clawsweeper/actions/runs/30721754676) |
| automerge-openclaw-openclaw-117521 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-117521](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117521.md) | [30714010173](https://github.com/openclaw/clawsweeper/actions/runs/30714010173) |
| automerge-openclaw-openclaw-117144 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-117144](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117144.md) | [30710002508](https://github.com/openclaw/clawsweeper/actions/runs/30710002508) |
| automerge-openclaw-openclaw-117485 | merge_canonical blocked | autofix-only job cannot merge | [automerge-openclaw-openclaw-117485](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117485.md) | [30708141549](https://github.com/openclaw/clawsweeper/actions/runs/30708141549) |
| issue-openclaw-openclaw-110171 | merge_canonical blocked | checks are not clean: Scan iOS dead code: FAILURE, Intersect shared OpenClawKit dead code: FAILURE, ios-build: FAILURE, openclaw/ci-gate: FAILURE | [issue-openclaw-openclaw-110171](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-110171.md) | [30706593455](https://github.com/openclaw/clawsweeper/actions/runs/30706593455) |
| issue-openclaw-openclaw-89532 | merge_canonical blocked | checks are not clean: checks-node-compact-large-8: IN_PROGRESS | [issue-openclaw-openclaw-89532](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-89532.md) | [30702513540](https://github.com/openclaw/clawsweeper/actions/runs/30702513540) |
| issue-openclaw-openclaw-117411 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/gateway/... | [issue-openclaw-openclaw-117411](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117411.md) | [30701138555](https://github.com/openclaw/clawsweeper/actions/runs/30701138555) |
| issue-openclaw-openclaw-115037 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/c... | [issue-openclaw-openclaw-115037](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-115037.md) | [30699344393](https://github.com/openclaw/clawsweeper/actions/runs/30699344393) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [issue-openclaw-openclaw-113631](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-113631.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [30754058583](https://github.com/openclaw/clawsweeper/actions/runs/30754058583) |
| [automerge-openclaw-openclaw-117869](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117869.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/s... | [30737716674](https://github.com/openclaw/clawsweeper/actions/runs/30737716674) |
| [automerge-openclaw-openclaw-117869](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117869.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/s... | [30737716674](https://github.com/openclaw/clawsweeper/actions/runs/30737716674) |
| [automerge-openclaw-openclaw-117881](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117881.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, extensions, extensionTests... | [30737052850](https://github.com/openclaw/clawsweeper/actions/runs/30737052850) |
| [automerge-openclaw-openclaw-117881](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117881.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, extensions, extensionTests... | [30737052850](https://github.com/openclaw/clawsweeper/actions/runs/30737052850) |
| [automerge-openclaw-openclaw-113663](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-113663.md) | blocked | [#113663](https://github.com/openclaw/openclaw/pull/113663) |  | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [30723992316](https://github.com/openclaw/clawsweeper/actions/runs/30723992316) |
| [issue-openclaw-openclaw-117411](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117411.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/gateway/... | [30701138555](https://github.com/openclaw/clawsweeper/actions/runs/30701138555) |
| [issue-openclaw-openclaw-115037](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-115037.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/c... | [30699344393](https://github.com/openclaw/clawsweeper/actions/runs/30699344393) |
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
| [automerge-openclaw-openclaw-105243](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-105243.md) | blocked | [#105243](https://github.com/openclaw/openclaw/pull/105243) |  | source PR #105243 is paused by clawsweeper:human-review; refusing to mutate the PR branch | [29340935178](https://github.com/openclaw/clawsweeper/actions/runs/29340935178) |
| [automerge-openclaw-openclaw-103304](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-103304.md) | blocked | [#103304](https://github.com/openclaw/openclaw/pull/103304) |  | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [29333867746](https://github.com/openclaw/clawsweeper/actions/runs/29333867746) |

### Top Blocked Reasons

| Reason | Latest count | Example cluster |
| --- | ---: | --- |
| job does not allow merge | 102 | [automerge-openclaw-openclaw-107479](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-107479.md) |
| autofix-only job cannot merge | 14 | [automerge-openclaw-openclaw-118688](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118688.md) |
| checks are not clean: test: IN_PROGRESS, windows: IN_PROGRESS | 9 | [issue-openclaw-gogcli-917](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-917.md) |
| checks are not clean: Go: IN_PROGRESS, Release Check: IN_PROGRESS | 7 | [issue-openclaw-crabbox-756](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-756.md) |
| checks are not clean: checks-node-compact-large-8: IN_PROGRESS | 2 | [issue-openclaw-openclaw-118625](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118625.md) |
| checks are not clean: windows: IN_PROGRESS | 2 | [issue-openclaw-gogcli-872](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-872.md) |
| checks are not clean: check-lint: FAILURE, openclaw/ci-gate: FAILURE | 1 | [issue-openclaw-openclaw-116747](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-116747.md) |
| checks are not clean: checks-node-changed: FAILURE, openclaw/ci-gate: FAILURE | 1 | [issue-openclaw-openclaw-116601](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-116601.md) |
| checks are not clean: check-sqlite-session-flip-proof: FAILURE, openclaw/ci-gate: FAILURE | 1 | [issue-openclaw-openclaw-69242](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-69242.md) |
| checks are not clean: openclaw/ci-gate: IN_PROGRESS | 1 | [issue-openclaw-openclaw-88079](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-88079.md) |
| replacement pull request requires a fresh current-head ClawSweeper review; automatic merge disabled | 1 | [automerge-openclaw-openclaw-113663](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-113663.md) |
| checks are not clean: checks-node-compact-large-8: IN_PROGRESS, openclaw/ci-gate: QUEUED | 1 | [issue-openclaw-openclaw-117672](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117672.md) |
| protected or paused repair label: security | 1 | [automerge-openclaw-openclaw-116976](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-116976.md) |
| checks are not clean: Scan iOS dead code: FAILURE, Intersect shared OpenClawKit dead code: FAILURE, ios-build: FAILURE, openclaw/ci-gate:... | 1 | [issue-openclaw-openclaw-110171](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-110171.md) |
| checks are not clean: check-dependencies: FAILURE, openclaw/ci-gate: FAILURE | 1 | [issue-openclaw-openclaw-98276](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-98276.md) |

### Latest Repair Closures

| Target | Action | Title | Closed | Cluster | Report | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

