# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Sep 15, 2026, 00:32 UTC

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Planning review | Sep 15, 2026, 00:32 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/34913394763) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Apply idle | Sep 14, 2026, 23:57 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/34911007726) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Sep 14, 2026, 23:50 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/34910590429) |

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

Last source update: Sep 14, 2026, 23:57 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 1039 | 100% |
| Run attempts archived | 3159 | audit |
| Latest successful clusters | 874 | 84.1% |
| Latest failed clusters | 163 | 15.7% |
| Latest cancelled clusters | 2 | 0.2% |
| Needs-human clusters | 123 | 11.8% |
| Fix actions failed | 34 | 4.6% |
| Fix actions blocked | 155 | 21.1% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 321 | 99.7% |
| Skipped mutation attempts | 1 | 0.3% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 1039 clusters: 326 maintainer action, 252 automation snapshot, 418 intervention needed, 43 no pending action, 0 completed.
- Maintainer first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#102270](https://github.com/openclaw/openclaw/issues/102270) is maintainer_input: Quarantine that installation-policy question for central OpenClaw security handling without reopening or otherwise mutating the closed is....
- Intervention first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#148584](https://github.com/openclaw/openclaw/pull/148584) is automation_failed: Broken documented startup behavior has a narrow repair through existing ownership and activation policy, without changing configuration o....
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#148498](https://github.com/openclaw/openclaw/pull/148498) is action_planned: A bounded executor classification repair is supported. Require failing-before/passing-after proof before publication; closing and merging....
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 326 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 252 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 418 | automation failure or blocker recorded |
| No Pending Action | 43 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 179 |
| merge_ready | 45 |
| merge_not_authorized | 102 |
| checks_blocked | 43 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 208 |
| automation_failed | 177 |
| automation_blocked | 241 |
| reviewed_no_action | 43 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#102270](https://github.com/openclaw/openclaw/issues/102270) | maintainer_input | Quarantine that installation-policy question for central OpenClaw security handling without reopening or otherwise mutating the closed issue. It do... | Sep 14, 2026, 10:20 UTC | [issue-openclaw-openclaw-148148](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-148148.md) | [34830887710](https://github.com/openclaw/clawsweeper/actions/runs/34830887710) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#147283](https://github.com/openclaw/openclaw/issues/147283) | maintainer_input | Potential sensitive cross-chat exposure warrants read-only central security handling despite the preflight's false security flag. This is not a vul... | Sep 13, 2026, 20:58 UTC | [issue-openclaw-openclaw-147326](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147326.md) | [34782240253](https://github.com/openclaw/clawsweeper/actions/runs/34782240253) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#146821](https://github.com/openclaw/openclaw/pull/146821) | maintainer_input | #146821: Resolve implementation ownership with @zyz619963502zyz. Prefer the claimed contributor repair; hydrate any resulting PR before deciding wh... | Sep 13, 2026, 07:59 UTC | [issue-openclaw-openclaw-146821](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-146821.md) | [34746360069](https://github.com/openclaw/clawsweeper/actions/runs/34746360069) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#111578](https://github.com/openclaw/openclaw/issues/111578) | maintainer_input | Route this item to central OpenClaw security handling without public mutation. Its credential-boundary decision is outside the independent #146612... | Sep 13, 2026, 02:06 UTC | [issue-openclaw-openclaw-146612](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-146612.md) | [34732008345](https://github.com/openclaw/clawsweeper/actions/runs/34732008345) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#45269](https://github.com/openclaw/openclaw/issues/45269) | maintainer_input | Quarantine this historical item for central security handling without public mutation or reopening. Its provider-related discussion is unnecessary... | Sep 12, 2026, 21:38 UTC | [issue-openclaw-openclaw-146392](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-146392.md) | [34720080242](https://github.com/openclaw/clawsweeper/actions/runs/34720080242) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#128812](https://github.com/openclaw/openclaw/issues/128812) | maintainer_input | Quarantine this item for central OpenClaw security handling without public mutation. The independent projection-write repair does not depend on it. | Sep 12, 2026, 03:45 UTC | [issue-openclaw-openclaw-145371](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-145371.md) | [34670753971](https://github.com/openclaw/clawsweeper/actions/runs/34670753971) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#105763](https://github.com/openclaw/openclaw/issues/105763) | maintainer_input | Leave this distinct credential-related request to central OpenClaw security handling; it does not block the transcript-directory fix. | Sep 11, 2026, 22:34 UTC | [issue-openclaw-openclaw-145309](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-145309.md) | [34654105570](https://github.com/openclaw/clawsweeper/actions/runs/34654105570) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#143241](https://github.com/openclaw/openclaw/issues/143241) | maintainer_input | Route only this credential-handling item to central OpenClaw security handling under the worker boundary. This is not a vulnerability finding and d... | Sep 11, 2026, 19:15 UTC | [issue-openclaw-openclaw-145116](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-145116.md) | [34636165172](https://github.com/openclaw/clawsweeper/actions/runs/34636165172) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#138691](https://github.com/openclaw/openclaw/issues/138691) | maintainer_input | Refer this exact PR to central OpenClaw security handling without mutation. It does not block the separate diagnostic fix. | Sep 10, 2026, 16:57 UTC | [issue-openclaw-openclaw-144124](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144124.md) | [34502535846](https://github.com/openclaw/clawsweeper/actions/runs/34502535846) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#92827](https://github.com/openclaw/openclaw/issues/92827) | maintainer_input | Quarantine this item for central OpenClaw security handling without public mutation. Its boundary concern does not block the separate bug-only plan... | Sep 10, 2026, 14:02 UTC | [issue-openclaw-openclaw-143980](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-143980.md) | [34485758172](https://github.com/openclaw/clawsweeper/actions/runs/34485758172) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#144027](https://github.com/openclaw/openclaw/issues/144027) | maintainer_input | Route to central OpenClaw security handling without public mutation; exclude filename validation and transport changes from this repair. | Sep 10, 2026, 13:38 UTC | [issue-openclaw-openclaw-144025](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144025.md) | [34483099076](https://github.com/openclaw/clawsweeper/actions/runs/34483099076) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#137461](https://github.com/openclaw/openclaw/issues/137461) | maintainer_input | Read-only routing to central OpenClaw security handling; exclude this PR and its implementation from the repair. | Sep 10, 2026, 01:48 UTC | [issue-openclaw-openclaw-143461](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-143461.md) | [34424012108](https://github.com/openclaw/clawsweeper/actions/runs/34424012108) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#143155](https://github.com/openclaw/openclaw/pull/143155) | maintainer_input | #143155: Resolve the reporter's explicit pause request and active implementation ownership. Recommend pausing automatic implementation and allowing... | Sep 9, 2026, 15:39 UTC | [issue-openclaw-openclaw-143155](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-143155.md) | [34370883156](https://github.com/openclaw/clawsweeper/actions/runs/34370883156) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#141336](https://github.com/openclaw/openclaw/issues/141336) | maintainer_input | Quarantine this historical authority-related item for central security handling without public mutation. It does not block the separate build-compa... | Sep 9, 2026, 13:40 UTC | [issue-openclaw-openclaw-143100](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-143100.md) | [34357720541](https://github.com/openclaw/clawsweeper/actions/runs/34357720541) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#139708](https://github.com/openclaw/openclaw/issues/139708) | maintainer_input | Read-only routing to central OpenClaw security handling. This distinct authentication issue does not block #142901's browser artifact permissions r... | Sep 9, 2026, 08:00 UTC | [issue-openclaw-openclaw-142901](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-142901.md) | [34326201559](https://github.com/openclaw/clawsweeper/actions/runs/34326201559) |

#### Automation Snapshot

| Repository | Item | Lane state | Recorded status | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#148498](https://github.com/openclaw/openclaw/pull/148498) | action_planned | A bounded executor classification repair is supported. Require failing-before/passing-after proof before publication; closing and merging are prohi... | Sep 14, 2026, 21:51 UTC | [issue-openclaw-openclaw-148498](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-148498.md) | [34899736250](https://github.com/openclaw/clawsweeper/actions/runs/34899736250) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#148236](https://github.com/openclaw/openclaw/pull/148236) | action_planned | The supplied evidence supports an ordinary provider classification bug with a defined repair path. Preserve this issue as canonical and prepare one... | Sep 14, 2026, 13:38 UTC | [issue-openclaw-openclaw-148236](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-148236.md) | [34849974375](https://github.com/openclaw/clawsweeper/actions/runs/34849974375) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#148033](https://github.com/openclaw/openclaw/pull/148033) | action_planned | A narrow embedded-boundary repair is supported by source evidence and the job. No namespace-policy or authorization change is needed. Keep the issu... | Sep 14, 2026, 09:28 UTC | [issue-openclaw-openclaw-148033](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-148033.md) | [34825996127](https://github.com/openclaw/clawsweeper/actions/runs/34825996127) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#147796](https://github.com/openclaw/openclaw/pull/147796) | action_planned | A presentation-only follow-up is appropriate. The heading's name does not indicate a security report or boundary change. Reproduce on latest main b... | Sep 14, 2026, 05:12 UTC | [issue-openclaw-openclaw-147796](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147796.md) | [34808143220](https://github.com/openclaw/clawsweeper/actions/runs/34808143220) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#147816](https://github.com/openclaw/openclaw/pull/147816) | action_planned | The canonical report describes an ordinary UI state bug with a clear existing owner. Preserve the issue while the executor reproduces, implements,... | Sep 14, 2026, 05:05 UTC | [issue-openclaw-openclaw-147816](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147816.md) | [34806928822](https://github.com/openclaw/clawsweeper/actions/runs/34806928822) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#147824](https://github.com/openclaw/openclaw/pull/147824) | action_planned | The existing owner records only the active request ID, so rendering cannot distinguish approval from dismissal. A scoped repair is appropriate, con... | Sep 14, 2026, 04:59 UTC | [issue-openclaw-openclaw-147824](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147824.md) | [34806926963](https://github.com/openclaw/clawsweeper/actions/runs/34806926963) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#147772](https://github.com/openclaw/openclaw/pull/147772) | action_planned | A focused diagnostic correction is appropriate without changing authorization, configuration, storage, or plugin contracts. Reproduce on current ma... | Sep 14, 2026, 04:50 UTC | [issue-openclaw-openclaw-147772](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147772.md) | [34804646981](https://github.com/openclaw/clawsweeper/actions/runs/34804646981) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#147694](https://github.com/openclaw/openclaw/pull/147694) | action_planned | A focused fix is authorized, conditional on reproducing the defect on latest main. The supplied artifact contains no candidate PR. | Sep 14, 2026, 03:02 UTC | [issue-openclaw-openclaw-147694](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147694.md) | [34800994530](https://github.com/openclaw/clawsweeper/actions/runs/34800994530) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#147722](https://github.com/openclaw/openclaw/pull/147722) | action_planned | The issue has a bounded repair path and needs no product decision. Retain it as canonical while preparing the implementation and required proof. | Sep 14, 2026, 02:47 UTC | [issue-openclaw-openclaw-147722](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147722.md) | [34800109423](https://github.com/openclaw/clawsweeper/actions/runs/34800109423) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#147587](https://github.com/openclaw/openclaw/pull/147587) | action_planned | A focused repair of existing behavior is appropriate. Require an observed pre-fix failure before implementation and passing validation before PR pu... | Sep 14, 2026, 01:54 UTC | [issue-openclaw-openclaw-147587](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147587.md) | [34797051257](https://github.com/openclaw/clawsweeper/actions/runs/34797051257) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#147511](https://github.com/openclaw/openclaw/pull/147511) | action_planned | The supplied evidence supports a bounded bug fix without a product decision or security-boundary change. Runtime reproduction remains the executor'... | Sep 14, 2026, 01:23 UTC | [issue-openclaw-openclaw-147511](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147511.md) | [34795353481](https://github.com/openclaw/clawsweeper/actions/runs/34795353481) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#147546](https://github.com/openclaw/openclaw/pull/147546) | action_planned | A narrow daily-window evidence repair fits the authorized bug-only scope. Closure and merge are prohibited. | Sep 14, 2026, 01:22 UTC | [issue-openclaw-openclaw-147546](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147546.md) | [34795352307](https://github.com/openclaw/clawsweeper/actions/runs/34795352307) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#147387](https://github.com/openclaw/openclaw/pull/147387) | action_planned | An ordinary completion-visibility bug has a bounded repair path. Establish a failing regression on refreshed main before implementation; preserve t... | Sep 13, 2026, 21:30 UTC | [issue-openclaw-openclaw-147387](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147387.md) | [34783853451](https://github.com/openclaw/clawsweeper/actions/runs/34783853451) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#147259](https://github.com/openclaw/openclaw/pull/147259) | action_planned | A bounded follow-up to the merged startup fix is appropriate, conditional on reproducing the remote-path mutation on current main. | Sep 13, 2026, 20:55 UTC | [issue-openclaw-openclaw-147259](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147259.md) | [34781418255](https://github.com/openclaw/clawsweeper/actions/runs/34781418255) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#147264](https://github.com/openclaw/openclaw/pull/147264) | action_planned | A focused bug repair is supported. Prepare the artifact for execution, retaining reproduction and contributor-PR discovery as prerequisites. Closin... | Sep 13, 2026, 20:42 UTC | [issue-openclaw-openclaw-147264](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147264.md) | [34781416668](https://github.com/openclaw/clawsweeper/actions/runs/34781416668) |

#### Intervention Needed

| Repository | Item | Lane state | Recorded blocker | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#148584](https://github.com/openclaw/openclaw/pull/148584) | automation_failed | Broken documented startup behavior has a narrow repair through existing ownership and activation policy, without changing configuration or authenti... | Sep 14, 2026, 23:57 UTC | [issue-openclaw-openclaw-148584](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-148584.md) | [34906335436](https://github.com/openclaw/clawsweeper/actions/runs/34906335436) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-85687](cluster:issue-openclaw-openclaw-85687) | automation_failed | Publication is blocked until an authorized executor checks for existing work, reproduces the defect on refreshed main, implements the narrow repair... | Sep 14, 2026, 22:16 UTC | [issue-openclaw-openclaw-85687](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-85687.md) | [34899160324](https://github.com/openclaw/clawsweeper/actions/runs/34899160324) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118303](https://github.com/openclaw/openclaw/pull/118303) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Sep 14, 2026, 14:19 UTC | [automerge-openclaw-openclaw-118303](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118303.md) | [34851068337](https://github.com/openclaw/clawsweeper/actions/runs/34851068337) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#147258](https://github.com/openclaw/openclaw/pull/147258) | automation_failed | The existing discovery/recovery contract can be repaired within Memory Core without changing indexing, visibility, configuration, persisted state,... | Sep 13, 2026, 19:12 UTC | [issue-openclaw-openclaw-147258](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147258.md) | [34774386338](https://github.com/openclaw/clawsweeper/actions/runs/34774386338) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | Codex fix worker timed out after 1800000ms | Sep 13, 2026, 18:45 UTC | [issue-openclaw-openclaw-147168](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147168.md) | [34767652813](https://github.com/openclaw/clawsweeper/actions/runs/34767652813) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | Sep 12, 2026, 14:37 UTC | [issue-openclaw-openclaw-146023](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-146023.md) | [34699518709](https://github.com/openclaw/clawsweeper/actions/runs/34699518709) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | Sep 11, 2026, 16:56 UTC | [automerge-openclaw-openclaw-142626](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-142626.md) | [34618103886](https://github.com/openclaw/clawsweeper/actions/runs/34618103886) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=testRoot, tooling [check:changed] .github/wo... | Sep 11, 2026, 10:36 UTC | [automerge-openclaw-openclaw-117144](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117144.md) | [34586894740](https://github.com/openclaw/clawsweeper/actions/runs/34586894740) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests, ui [check:changed] src/gateway/se... | Sep 11, 2026, 08:55 UTC | [automerge-openclaw-openclaw-121050](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121050.md) | [34577382794](https://github.com/openclaw/clawsweeper/actions/runs/34577382794) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119735](https://github.com/openclaw/openclaw/pull/119735) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Sep 11, 2026, 08:28 UTC | [automerge-openclaw-openclaw-119735](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119735.md) | [34577350088](https://github.com/openclaw/clawsweeper/actions/runs/34577350088) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | Sep 11, 2026, 04:10 UTC | [issue-openclaw-openclaw-144597](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144597.md) | [34556487880](https://github.com/openclaw/clawsweeper/actions/runs/34556487880) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | Codex fix worker timed out after 1800000ms | Sep 10, 2026, 16:29 UTC | [issue-openclaw-openclaw-144150](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144150.md) | [34498309079](https://github.com/openclaw/clawsweeper/actions/runs/34498309079) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | Sep 10, 2026, 12:03 UTC | [issue-openclaw-openclaw-144001](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144001.md) | [34473619938](https://github.com/openclaw/clawsweeper/actions/runs/34473619938) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#143389](https://github.com/openclaw/openclaw/pull/143389) | automation_failed | Local implementation is blocked because the sandbox permits reads only and node_modules is absent. A writable executor must establish the failing r... | Sep 9, 2026, 21:36 UTC | [issue-openclaw-openclaw-143389](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-143389.md) | [34404236622](https://github.com/openclaw/clawsweeper/actions/runs/34404236622) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-143177](cluster:issue-openclaw-openclaw-143177) | automation_failed | PR creation is blocked on executor implementation and validation in a writable checkout, including the required source inspection and failing-then-... | Sep 9, 2026, 17:37 UTC | [issue-openclaw-openclaw-143177](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-143177.md) | [34365811382](https://github.com/openclaw/clawsweeper/actions/runs/34365811382) |

#### No Pending Action

| Repository | Item | Lane state | Latest result | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep #148387 open and retain #148426 as the canonical fix PR. A new implementation PR would duplicate existing work. Hydrated state shows #148426 r... | Sep 14, 2026, 18:44 UTC | [issue-openclaw-openclaw-148387](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-148387.md) | [34878472938](https://github.com/openclaw/clawsweeper/actions/runs/34878472938) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Matching contributor PR #147805 already exists. Keep #147776 open and retain #147805 for proof follow-up without creating a competing implementatio... | Sep 14, 2026, 04:17 UTC | [issue-openclaw-openclaw-147776](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147776.md) | [34804644677](https://github.com/openclaw/clawsweeper/actions/runs/34804644677) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep #147502 open and retain contributor PR #147542 as the canonical fix path. Keep the PR without mutation pending the complete review, diff, and... | Sep 13, 2026, 23:57 UTC | [issue-openclaw-openclaw-147502](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147502.md) | [34791006645](https://github.com/openclaw/clawsweeper/actions/runs/34791006645) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | No new PR recommended. The issue is already closed and #146071 is merged. The supplied main revision preserves rateLimit in candidate rehearsals. P... | Sep 12, 2026, 16:00 UTC | [issue-openclaw-openclaw-146017](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-146017.md) | [34703626461](https://github.com/openclaw/clawsweeper/actions/runs/34703626461) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep #144776 open and preserve @vantang's #144782 as the canonical repair. The corrected routing defect remains on the preflight main revision, but... | Sep 11, 2026, 08:43 UTC | [issue-openclaw-openclaw-144776](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144776.md) | [34580137131](https://github.com/openclaw/clawsweeper/actions/runs/34580137131) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep issue #143111 open and preserve @LiuwqGit's existing PR #143125 as the canonical fix path. The hydrated PR already addresses the reported diag... | Sep 9, 2026, 14:02 UTC | [issue-openclaw-openclaw-143111](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-143111.md) | [34360151710](https://github.com/openclaw/clawsweeper/actions/runs/34360151710) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Preserve the canonical issue and both existing contributor PRs; do not create competing work. Keep #84516 independent. Classification uses the supp... | Sep 5, 2026, 18:38 UTC | [issue-openclaw-openclaw-139249](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-139249.md) | [33984346428](https://github.com/openclaw/clawsweeper/actions/runs/33984346428) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep the issue open and preserve LiuwqGit's existing implementation PR #139243. Do not create a competing PR. Existing CI failures and pending revi... | Sep 5, 2026, 17:58 UTC | [issue-openclaw-openclaw-139207](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-139207.md) | [33982386924](https://github.com/openclaw/clawsweeper/actions/runs/33982386924) |
| [openclaw/fs-safe](https://github.com/openclaw/fs-safe) |  | reviewed_no_action | PR #171 is already squash-merged into main at f4c5b321ea9f980ab2481a1c90b81f8083085d3a after passing exact-head Windows native proof and the record... | Aug 31, 2026, 13:56 UTC | [automerge-openclaw-fs-safe-171](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-fs-safe-171.md) | [33396103073](https://github.com/openclaw/clawsweeper/actions/runs/33396103073) |
| [openclaw/fs-safe](https://github.com/openclaw/fs-safe) |  | reviewed_no_action | PR #179 is already merged unchanged into main as 309548dc907bc5b1b3c1ffb50e742a0e239c72a6. Its exact reviewed head was dd07ec96aa3631a66cb1575a2dec... | Aug 30, 2026, 18:57 UTC | [automerge-openclaw-fs-safe-179](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-fs-safe-179.md) | [33328721377](https://github.com/openclaw/clawsweeper/actions/runs/33328721377) |
| [openclaw/fs-safe](https://github.com/openclaw/fs-safe) |  | reviewed_no_action | PR #174 is already merged into main at 7a20891847fc09a71be837118b5bad99b7a7d575. No repair, replacement PR, merge, comment, or closure action remai... | Aug 30, 2026, 13:45 UTC | [automerge-openclaw-fs-safe-174](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-fs-safe-174.md) | [33314505807](https://github.com/openclaw/clawsweeper/actions/runs/33314505807) |
| [openclaw/fs-safe](https://github.com/openclaw/fs-safe) |  | reviewed_no_action | PR #172 is already merged into current main; no repair, closure, or merge action remains. | Aug 30, 2026, 11:47 UTC | [automerge-openclaw-fs-safe-172](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-fs-safe-172.md) | [33309153174](https://github.com/openclaw/clawsweeper/actions/runs/33309153174) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | No implementation PR is needed: #133157 already landed the microphone-lifecycle repair on main and closed #133117. The checked-out main contains th... | Aug 30, 2026, 08:12 UTC | [issue-openclaw-openclaw-133117](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-133117.md) | [33300544041](https://github.com/openclaw/clawsweeper/actions/runs/33300544041) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | No repair branch is needed: #122425 is already merged into main, so the requested contributor-branch repair is inapplicable. | Aug 26, 2026, 16:35 UTC | [automerge-openclaw-openclaw-122425](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-122425.md) | [32986188393](https://github.com/openclaw/clawsweeper/actions/runs/32986188393) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | No repair is needed: #110434 was squash-merged at 2026-08-26T02:56:21Z as 7e9d59ce3e0daab1ad1e85cee902d3cdf4895102, with its hydrated CI gate passi... | Aug 26, 2026, 03:30 UTC | [automerge-openclaw-openclaw-110434](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-110434.md) | [32926033246](https://github.com/openclaw/clawsweeper/actions/runs/32926033246) |

#### Completed

| Repository | Item | Lane state | Recorded outcome | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

### Clusters Needing Inspection

| Cluster | State | Reason | Report | Run |
| --- | --- | --- | --- | --- |
| issue-openclaw-openclaw-147168 | execute_fix blocked | Codex fix worker timed out after 1800000ms | [issue-openclaw-openclaw-147168](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147168.md) | [34767652813](https://github.com/openclaw/clawsweeper/actions/runs/34767652813) |
| issue-openclaw-openclaw-146821 | needs human | #146821: Resolve implementation ownership with @zyz619963502zyz. Prefer the claimed contributor repair; hydrate any resulting PR before deciding wh... | [issue-openclaw-openclaw-146821](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-146821.md) | [34746360069](https://github.com/openclaw/clawsweeper/actions/runs/34746360069) |
| issue-openclaw-openclaw-146023 | execute_fix blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [issue-openclaw-openclaw-146023](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-146023.md) | [34699518709](https://github.com/openclaw/clawsweeper/actions/runs/34699518709) |
| automerge-openclaw-openclaw-142626 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [automerge-openclaw-openclaw-142626](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-142626.md) | [34618103886](https://github.com/openclaw/clawsweeper/actions/runs/34618103886) |
| automerge-openclaw-openclaw-117144 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=testRoot, tooling [check:changed] .github/wo... | [automerge-openclaw-openclaw-117144](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117144.md) | [34586894740](https://github.com/openclaw/clawsweeper/actions/runs/34586894740) |
| automerge-openclaw-openclaw-121050 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests, ui [check:changed] src/gateway/se... | [automerge-openclaw-openclaw-121050](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121050.md) | [34577382794](https://github.com/openclaw/clawsweeper/actions/runs/34577382794) |
| issue-openclaw-openclaw-144597 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [issue-openclaw-openclaw-144597](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144597.md) | [34556487880](https://github.com/openclaw/clawsweeper/actions/runs/34556487880) |
| issue-openclaw-openclaw-144150 | execute_fix blocked | Codex fix worker timed out after 1800000ms | [issue-openclaw-openclaw-144150](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144150.md) | [34498309079](https://github.com/openclaw/clawsweeper/actions/runs/34498309079) |
| issue-openclaw-openclaw-144001 | execute_fix blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [issue-openclaw-openclaw-144001](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144001.md) | [34473619938](https://github.com/openclaw/clawsweeper/actions/runs/34473619938) |
| issue-openclaw-openclaw-143155 | needs human | #143155: Resolve the reporter's explicit pause request and active implementation ownership. Recommend pausing automatic implementation and allowing... | [issue-openclaw-openclaw-143155](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-143155.md) | [34370883156](https://github.com/openclaw/clawsweeper/actions/runs/34370883156) |
| issue-openclaw-openclaw-141625 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [issue-openclaw-openclaw-141625](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-141625.md) | [34167546070](https://github.com/openclaw/clawsweeper/actions/runs/34167546070) |
| issue-openclaw-openclaw-141000 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [issue-openclaw-openclaw-141000](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-141000.md) | [34099079926](https://github.com/openclaw/clawsweeper/actions/runs/34099079926) |
| automerge-openclaw-openclaw-139196 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, extensionTests, docs, tooli... | [automerge-openclaw-openclaw-139196](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-139196.md) | [34076816706](https://github.com/openclaw/clawsweeper/actions/runs/34076816706) |
| issue-openclaw-openclaw-140482 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [issue-openclaw-openclaw-140482](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-140482.md) | [34064080771](https://github.com/openclaw/clawsweeper/actions/runs/34064080771) |
| issue-openclaw-openclaw-140455 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [issue-openclaw-openclaw-140455](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-140455.md) | [34061128507](https://github.com/openclaw/clawsweeper/actions/runs/34061128507) |
| issue-openclaw-openclaw-140128 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=testRoot, apps, tooling [check:changed] apps... | [issue-openclaw-openclaw-140128](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-140128.md) | [34035617980](https://github.com/openclaw/clawsweeper/actions/runs/34035617980) |
| issue-openclaw-openclaw-139838 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [issue-openclaw-openclaw-139838](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-139838.md) | [34016690564](https://github.com/openclaw/clawsweeper/actions/runs/34016690564) |
| issue-openclaw-openclaw-139669 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [issue-openclaw-openclaw-139669](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-139669.md) | [34008961849](https://github.com/openclaw/clawsweeper/actions/runs/34008961849) |
| issue-openclaw-openclaw-139443 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [issue-openclaw-openclaw-139443](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-139443.md) | [33995200212](https://github.com/openclaw/clawsweeper/actions/runs/33995200212) |
| issue-openclaw-openclaw-138812 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [issue-openclaw-openclaw-138812](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138812.md) | [33942593176](https://github.com/openclaw/clawsweeper/actions/runs/33942593176) |
| issue-openclaw-openclaw-138763 | needs human | {"type":"thread.started","thread_id":"01a06f3e-edf8-7511-8ecc-8f61278a4a01"} {"type":"item.completed","item":{"id":"item_0","type":"error","message... | [issue-openclaw-openclaw-138763](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138763.md) | [33937107698](https://github.com/openclaw/clawsweeper/actions/runs/33937107698) |
| issue-openclaw-openclaw-114067 | execute_fix blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [issue-openclaw-openclaw-114067](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-114067.md) | [33935565243](https://github.com/openclaw/clawsweeper/actions/runs/33935565243) |
| issue-openclaw-openclaw-138561 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [issue-openclaw-openclaw-138561](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138561.md) | [33918957084](https://github.com/openclaw/clawsweeper/actions/runs/33918957084) |
| issue-openclaw-openclaw-138383 | needs human | Provide a writable environment containing ../codex (or otherwise make the required Codex source available) so the mandated direct inspection, regre... | [issue-openclaw-openclaw-138383](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138383.md) | [33900583374](https://github.com/openclaw/clawsweeper/actions/runs/33900583374) |
| issue-openclaw-openclaw-138382 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [issue-openclaw-openclaw-138382](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138382.md) | [33893812282](https://github.com/openclaw/clawsweeper/actions/runs/33893812282) |
| automerge-openclaw-openclaw-128236 | fix failed | validation command failed (pnpm check:changed): validation command runtime budget exhausted | [automerge-openclaw-openclaw-128236](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-128236.md) | [33890288308](https://github.com/openclaw/clawsweeper/actions/runs/33890288308) |
| issue-openclaw-openclaw-138316 | needs human | Provide a writable repair checkout that includes a direct `../codex` clone and permits dependency installation, then rerun this job from the suppli... | [issue-openclaw-openclaw-138316](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138316.md) | [33895663443](https://github.com/openclaw/clawsweeper/actions/runs/33895663443) |
| issue-openclaw-openclaw-138288 | needs human | Provide a writable checkout with dependencies installed and the required ../codex source checkout, then execute the supplied narrow fix artifact. | [issue-openclaw-openclaw-138288](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138288.md) | [33884741929](https://github.com/openclaw/clawsweeper/actions/runs/33884741929) |
| issue-openclaw-openclaw-138251 | needs human | Provide a writable worker with sibling ../codex available for direct inspection (or permit its clone). Then implement and validate the prepared nar... | [issue-openclaw-openclaw-138251](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138251.md) | [33878784259](https://github.com/openclaw/clawsweeper/actions/runs/33878784259) |
| issue-openclaw-openclaw-138139 | needs human | Provide an environment with the sibling ../codex checkout (or authority to create it) so the required direct source inspection can occur.; Provide... | [issue-openclaw-openclaw-138139](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138139.md) | [33862220415](https://github.com/openclaw/clawsweeper/actions/runs/33862220415) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [issue-openclaw-openclaw-147168](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147168.md) | blocked |  |  | Codex fix worker timed out after 1800000ms | [34767652813](https://github.com/openclaw/clawsweeper/actions/runs/34767652813) |
| [issue-openclaw-openclaw-146023](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-146023.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [34699518709](https://github.com/openclaw/clawsweeper/actions/runs/34699518709) |
| [automerge-openclaw-openclaw-142626](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-142626.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [34618103886](https://github.com/openclaw/clawsweeper/actions/runs/34618103886) |
| [automerge-openclaw-openclaw-142626](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-142626.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [34618103886](https://github.com/openclaw/clawsweeper/actions/runs/34618103886) |
| [automerge-openclaw-openclaw-117144](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117144.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=testRoot, tooling [check:changed] .github/wo... | [34586894740](https://github.com/openclaw/clawsweeper/actions/runs/34586894740) |
| [automerge-openclaw-openclaw-117144](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117144.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=testRoot, tooling [check:changed] .github/wo... | [34586894740](https://github.com/openclaw/clawsweeper/actions/runs/34586894740) |
| [automerge-openclaw-openclaw-121050](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121050.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests, ui [check:changed] src/gateway/se... | [34577382794](https://github.com/openclaw/clawsweeper/actions/runs/34577382794) |
| [automerge-openclaw-openclaw-121050](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121050.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests, ui [check:changed] src/gateway/se... | [34577382794](https://github.com/openclaw/clawsweeper/actions/runs/34577382794) |
| [issue-openclaw-openclaw-144597](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144597.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [34556487880](https://github.com/openclaw/clawsweeper/actions/runs/34556487880) |
| [issue-openclaw-openclaw-144150](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144150.md) | blocked |  |  | Codex fix worker timed out after 1800000ms | [34498309079](https://github.com/openclaw/clawsweeper/actions/runs/34498309079) |
| [issue-openclaw-openclaw-144001](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144001.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [34473619938](https://github.com/openclaw/clawsweeper/actions/runs/34473619938) |
| [issue-openclaw-openclaw-141625](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-141625.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [34167546070](https://github.com/openclaw/clawsweeper/actions/runs/34167546070) |
| [issue-openclaw-openclaw-141000](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-141000.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [34099079926](https://github.com/openclaw/clawsweeper/actions/runs/34099079926) |
| [automerge-openclaw-openclaw-139196](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-139196.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, extensionTests, docs, tooli... | [34076816706](https://github.com/openclaw/clawsweeper/actions/runs/34076816706) |
| [automerge-openclaw-openclaw-139196](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-139196.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, extensionTests, docs, tooli... | [34076816706](https://github.com/openclaw/clawsweeper/actions/runs/34076816706) |
| [issue-openclaw-openclaw-140482](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-140482.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [34064080771](https://github.com/openclaw/clawsweeper/actions/runs/34064080771) |
| [issue-openclaw-openclaw-140455](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-140455.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [34061128507](https://github.com/openclaw/clawsweeper/actions/runs/34061128507) |
| [issue-openclaw-openclaw-140128](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-140128.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=testRoot, apps, tooling [check:changed] apps... | [34035617980](https://github.com/openclaw/clawsweeper/actions/runs/34035617980) |
| [issue-openclaw-openclaw-139838](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-139838.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [34016690564](https://github.com/openclaw/clawsweeper/actions/runs/34016690564) |
| [issue-openclaw-openclaw-139669](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-139669.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [34008961849](https://github.com/openclaw/clawsweeper/actions/runs/34008961849) |
| [issue-openclaw-openclaw-139443](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-139443.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [33995200212](https://github.com/openclaw/clawsweeper/actions/runs/33995200212) |
| [issue-openclaw-openclaw-138812](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138812.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [33942593176](https://github.com/openclaw/clawsweeper/actions/runs/33942593176) |
| [issue-openclaw-openclaw-114067](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-114067.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [33935565243](https://github.com/openclaw/clawsweeper/actions/runs/33935565243) |
| [issue-openclaw-openclaw-138561](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138561.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [33918957084](https://github.com/openclaw/clawsweeper/actions/runs/33918957084) |
| [issue-openclaw-openclaw-138382](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138382.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [33893812282](https://github.com/openclaw/clawsweeper/actions/runs/33893812282) |

### Top Blocked Reasons

| Reason | Latest count | Example cluster |
| --- | ---: | --- |
| job does not allow merge | 106 | [automerge-openclaw-fs-safe-175](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-fs-safe-175.md) |
| autofix-only job cannot merge | 15 | [automerge-openclaw-openclaw-118685](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118685.md) |
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

