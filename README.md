# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Sep 11, 2026, 12:43 UTC

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Apply in progress | Sep 11, 2026, 12:43 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/34599127291) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Planning review | Sep 11, 2026, 12:40 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/34600038116) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Sep 11, 2026, 11:50 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/34595907609) |

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

Last source update: Sep 11, 2026, 12:03 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 980 | 100% |
| Run attempts archived | 3031 | audit |
| Latest successful clusters | 817 | 83.4% |
| Latest failed clusters | 161 | 16.4% |
| Latest cancelled clusters | 2 | 0.2% |
| Needs-human clusters | 122 | 12.4% |
| Fix actions failed | 34 | 4.7% |
| Fix actions blocked | 153 | 20.9% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 321 | 99.7% |
| Skipped mutation attempts | 1 | 0.3% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 980 clusters: 318 maintainer action, 207 automation snapshot, 416 intervention needed, 39 no pending action, 0 completed.
- Maintainer first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#138691](https://github.com/openclaw/openclaw/issues/138691) is maintainer_input: Refer this exact PR to central OpenClaw security handling without mutation. It does not block the separate diagnostic fix..
- Intervention first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#144877](https://github.com/openclaw/openclaw/pull/144877) is automation_failed: A narrow UI projection repair is supported by source and the documented contract. Runtime reproduction must precede implementation on the....
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#144860](https://github.com/openclaw/openclaw/pull/144860) is action_planned: The existing termination owner can accept 404 alongside successful responses and 405, then reuse its terminated-session guard. No new con....
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 318 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 207 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 416 | automation failure or blocker recorded |
| No Pending Action | 39 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 171 |
| merge_ready | 45 |
| merge_not_authorized | 102 |
| checks_blocked | 43 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 163 |
| automation_failed | 176 |
| automation_blocked | 240 |
| reviewed_no_action | 39 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#138691](https://github.com/openclaw/openclaw/issues/138691) | maintainer_input | Refer this exact PR to central OpenClaw security handling without mutation. It does not block the separate diagnostic fix. | Sep 10, 2026, 16:57 UTC | [issue-openclaw-openclaw-144124](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144124.md) | [34502535846](https://github.com/openclaw/clawsweeper/actions/runs/34502535846) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#92827](https://github.com/openclaw/openclaw/issues/92827) | maintainer_input | Quarantine this item for central OpenClaw security handling without public mutation. Its boundary concern does not block the separate bug-only plan... | Sep 10, 2026, 14:02 UTC | [issue-openclaw-openclaw-143980](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-143980.md) | [34485758172](https://github.com/openclaw/clawsweeper/actions/runs/34485758172) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#144027](https://github.com/openclaw/openclaw/issues/144027) | maintainer_input | Route to central OpenClaw security handling without public mutation; exclude filename validation and transport changes from this repair. | Sep 10, 2026, 13:38 UTC | [issue-openclaw-openclaw-144025](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144025.md) | [34483099076](https://github.com/openclaw/clawsweeper/actions/runs/34483099076) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#137461](https://github.com/openclaw/openclaw/issues/137461) | maintainer_input | Read-only routing to central OpenClaw security handling; exclude this PR and its implementation from the repair. | Sep 10, 2026, 01:48 UTC | [issue-openclaw-openclaw-143461](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-143461.md) | [34424012108](https://github.com/openclaw/clawsweeper/actions/runs/34424012108) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#143155](https://github.com/openclaw/openclaw/pull/143155) | maintainer_input | #143155: Resolve the reporter's explicit pause request and active implementation ownership. Recommend pausing automatic implementation and allowing... | Sep 9, 2026, 15:39 UTC | [issue-openclaw-openclaw-143155](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-143155.md) | [34370883156](https://github.com/openclaw/clawsweeper/actions/runs/34370883156) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#141336](https://github.com/openclaw/openclaw/issues/141336) | maintainer_input | Quarantine this historical authority-related item for central security handling without public mutation. It does not block the separate build-compa... | Sep 9, 2026, 13:40 UTC | [issue-openclaw-openclaw-143100](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-143100.md) | [34357720541](https://github.com/openclaw/clawsweeper/actions/runs/34357720541) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#139708](https://github.com/openclaw/openclaw/issues/139708) | maintainer_input | Read-only routing to central OpenClaw security handling. This distinct authentication issue does not block #142901's browser artifact permissions r... | Sep 9, 2026, 08:00 UTC | [issue-openclaw-openclaw-142901](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-142901.md) | [34326201559](https://github.com/openclaw/clawsweeper/actions/runs/34326201559) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#40078](https://github.com/openclaw/openclaw/issues/40078) | maintainer_input | Conservatively route this feature's capture and retention concerns to central security handling without asserting a vulnerability. No mutation or i... | Sep 9, 2026, 05:00 UTC | [issue-openclaw-openclaw-142832](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-142832.md) | [34312756662](https://github.com/openclaw/clawsweeper/actions/runs/34312756662) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#102805](https://github.com/openclaw/openclaw/issues/102805) | maintainer_input | Quarantine this exact historical item for central OpenClaw security handling without public mutation. It does not block the independent command-rou... | Sep 8, 2026, 18:08 UTC | [issue-openclaw-openclaw-142336](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-142336.md) | [34260042767](https://github.com/openclaw/clawsweeper/actions/runs/34260042767) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#51419](https://github.com/openclaw/openclaw/issues/51419) | maintainer_input | Refer this historical item's security concern to central OpenClaw security handling without public mutation or vulnerability adjudication. It does... | Sep 7, 2026, 23:02 UTC | [issue-openclaw-openclaw-141616](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-141616.md) | [34168207616](https://github.com/openclaw/clawsweeper/actions/runs/34168207616) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#141031](https://github.com/openclaw/openclaw/issues/141031) | maintainer_input | Keep this historical authority-sensitive context outside ClawSweeper Repair. No mutation or new vulnerability claim is proposed; any security reass... | Sep 7, 2026, 21:33 UTC | [issue-openclaw-openclaw-141564](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-141564.md) | [34163206831](https://github.com/openclaw/clawsweeper/actions/runs/34163206831) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#92655](https://github.com/openclaw/openclaw/issues/92655) | maintainer_input | Route this authorization-sensitive item to central OpenClaw security handling without mutation. It does not block the unrelated inventory and prese... | Sep 7, 2026, 16:38 UTC | [issue-openclaw-openclaw-141318](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-141318.md) | [34143720638](https://github.com/openclaw/clawsweeper/actions/runs/34143720638) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#115642](https://github.com/openclaw/openclaw/issues/115642) | maintainer_input | Conservatively quarantine this exact linked item under the worker's credential-sensitive boundary. This does not establish a vulnerability or block... | Sep 7, 2026, 16:07 UTC | [issue-openclaw-openclaw-141260](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-141260.md) | [34140974639](https://github.com/openclaw/clawsweeper/actions/runs/34140974639) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#89399](https://github.com/openclaw/openclaw/issues/89399) | maintainer_input | Route this broader boundary decision to central OpenClaw security handling, without asserting a proven vulnerability or blocking the separate #1410... | Sep 7, 2026, 10:09 UTC | [issue-openclaw-openclaw-141033](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-141033.md) | [34109024370](https://github.com/openclaw/clawsweeper/actions/runs/34109024370) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#40786](https://github.com/openclaw/openclaw/issues/40786) | maintainer_input | Refer this separate exclusion-policy request to central OpenClaw security handling without mutation; it does not block #139549. | Sep 6, 2026, 01:14 UTC | [issue-openclaw-openclaw-139549](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-139549.md) | [34003171622](https://github.com/openclaw/clawsweeper/actions/runs/34003171622) |

#### Automation Snapshot

| Repository | Item | Lane state | Recorded status | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#144860](https://github.com/openclaw/openclaw/pull/144860) | action_planned | The existing termination owner can accept 404 alongside successful responses and 405, then reuse its terminated-session guard. No new configuration... | Sep 11, 2026, 12:03 UTC | [issue-openclaw-openclaw-144860](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144860.md) | [34596273667](https://github.com/openclaw/clawsweeper/actions/runs/34596273667) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#144859](https://github.com/openclaw/openclaw/pull/144859) | action_planned | A bounded existing-behavior repair is appropriate. Keep this issue canonical and open; establish executable regression proof before implementation... | Sep 11, 2026, 12:00 UTC | [issue-openclaw-openclaw-144859](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144859.md) | [34596270227](https://github.com/openclaw/clawsweeper/actions/runs/34596270227) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#144851](https://github.com/openclaw/openclaw/pull/144851) | action_planned | The QA Channel owner needs a focused repair with fresh failing regressions before implementation. No security-boundary or product-design change is... | Sep 11, 2026, 11:33 UTC | [issue-openclaw-openclaw-144851](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144851.md) | [34594202412](https://github.com/openclaw/clawsweeper/actions/runs/34594202412) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#144796](https://github.com/openclaw/openclaw/pull/144796) | action_planned | A focused logging repair has a clear existing owner and no identified product or security-boundary decision. Require a failing entry-point regressi... | Sep 11, 2026, 10:33 UTC | [issue-openclaw-openclaw-144796](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144796.md) | [34586556073](https://github.com/openclaw/clawsweeper/actions/runs/34586556073) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#144801](https://github.com/openclaw/openclaw/pull/144801) | action_planned | Preserve LiuwqGit's useful implementation and attribution. Retrieve the complete review and failed-check diagnostics, then complete isolated before... | Sep 11, 2026, 09:42 UTC | [issue-openclaw-openclaw-144788](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144788.md) | [34584713110](https://github.com/openclaw/clawsweeper/actions/runs/34584713110) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#144792](https://github.com/openclaw/openclaw/pull/144792) | action_planned | An ordinary launch-size defect remains reproducible at the argument builder. Settings-file equivalence and lifecycle behavior must be established b... | Sep 11, 2026, 09:38 UTC | [issue-openclaw-openclaw-144792](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144792.md) | [34584710960](https://github.com/openclaw/clawsweeper/actions/runs/34584710960) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#144610](https://github.com/openclaw/openclaw/pull/144610) | action_planned | A focused warning-only repair fits the approved bug scope. Reproduce through existing relocation fixtures before implementation; do not close or me... | Sep 11, 2026, 05:03 UTC | [issue-openclaw-openclaw-144610](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144610.md) | [34562699845](https://github.com/openclaw/clawsweeper/actions/runs/34562699845) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#144581](https://github.com/openclaw/openclaw/pull/144581) | action_planned | The issue has a bounded repair path shared by snapshot destinations and rehearsal configuration. Keep it open while the executor establishes the re... | Sep 11, 2026, 03:43 UTC | [issue-openclaw-openclaw-144581](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144581.md) | [34559012333](https://github.com/openclaw/clawsweeper/actions/runs/34559012333) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#144582](https://github.com/openclaw/openclaw/pull/144582) | action_planned | A bounded integration bug remains. Reuse the existing bridge before browser popup reservation; retain the issue until the implementation and valida... | Sep 11, 2026, 02:45 UTC | [issue-openclaw-openclaw-144582](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144582.md) | [34555421302](https://github.com/openclaw/clawsweeper/actions/runs/34555421302) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#144176](https://github.com/openclaw/openclaw/pull/144176) | action_planned | The supported scope is an ordinary host-memory reporting bug with a concrete implementation path; no unresolved product decision requires human tri... | Sep 10, 2026, 23:35 UTC | [issue-openclaw-openclaw-144176](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144176.md) | [34542109648](https://github.com/openclaw/clawsweeper/actions/runs/34542109648) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#144357](https://github.com/openclaw/openclaw/pull/144357) | action_planned | A focused existing-behavior repair is supported. Proceed only after confirming current ownership and reproducing the defect against latest main. | Sep 10, 2026, 21:36 UTC | [issue-openclaw-openclaw-144357](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144357.md) | [34532479311](https://github.com/openclaw/clawsweeper/actions/runs/34532479311) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#144325](https://github.com/openclaw/openclaw/pull/144325) | action_planned | The reported normalization failure has a narrow repair path. Proceed through the attached reproduction and validation plan; do not close or merge. | Sep 10, 2026, 20:10 UTC | [issue-openclaw-openclaw-144325](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144325.md) | [34523826275](https://github.com/openclaw/clawsweeper/actions/runs/34523826275) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#144179](https://github.com/openclaw/openclaw/pull/144179) | action_planned | The earlier turn-path recovery does not cover this deletion flow. No hydrated PR owns this repair; establish the failing regression before changing... | Sep 10, 2026, 18:21 UTC | [issue-openclaw-openclaw-144179](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144179.md) | [34511506949](https://github.com/openclaw/clawsweeper/actions/runs/34511506949) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#144160](https://github.com/openclaw/openclaw/pull/144160) | action_planned | The reported output-cap ownership defect has a narrow fix path. Establish the failing resolver regression on refreshed main before changing product... | Sep 10, 2026, 17:01 UTC | [issue-openclaw-openclaw-144160](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144160.md) | [34504905172](https://github.com/openclaw/clawsweeper/actions/runs/34504905172) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#144152](https://github.com/openclaw/openclaw/pull/144152) | action_planned | A bounded existing-behavior repair is appropriate. Establish the failing page regression before implementation; issue closure and merging are prohi... | Sep 10, 2026, 16:41 UTC | [issue-openclaw-openclaw-144152](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144152.md) | [34502532264](https://github.com/openclaw/clawsweeper/actions/runs/34502532264) |

#### Intervention Needed

| Repository | Item | Lane state | Recorded blocker | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#144877](https://github.com/openclaw/openclaw/pull/144877) | automation_failed | A narrow UI projection repair is supported by source and the documented contract. Runtime reproduction must precede implementation on the writable... | Sep 11, 2026, 11:37 UTC | [issue-openclaw-openclaw-144877](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144877.md) | [34593922291](https://github.com/openclaw/clawsweeper/actions/runs/34593922291) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=testRoot, tooling [check:changed] .github/wo... | Sep 11, 2026, 10:36 UTC | [automerge-openclaw-openclaw-117144](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117144.md) | [34586894740](https://github.com/openclaw/clawsweeper/actions/runs/34586894740) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | Sep 11, 2026, 10:04 UTC | [automerge-openclaw-openclaw-142626](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-142626.md) | [34583540896](https://github.com/openclaw/clawsweeper/actions/runs/34583540896) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests, ui [check:changed] src/gateway/se... | Sep 11, 2026, 08:55 UTC | [automerge-openclaw-openclaw-121050](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121050.md) | [34577382794](https://github.com/openclaw/clawsweeper/actions/runs/34577382794) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119735](https://github.com/openclaw/openclaw/pull/119735) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Sep 11, 2026, 08:28 UTC | [automerge-openclaw-openclaw-119735](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119735.md) | [34577350088](https://github.com/openclaw/clawsweeper/actions/runs/34577350088) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118303](https://github.com/openclaw/openclaw/pull/118303) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Sep 11, 2026, 08:22 UTC | [automerge-openclaw-openclaw-118303](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118303.md) | [34577366499](https://github.com/openclaw/clawsweeper/actions/runs/34577366499) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | Sep 11, 2026, 04:10 UTC | [issue-openclaw-openclaw-144597](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144597.md) | [34556487880](https://github.com/openclaw/clawsweeper/actions/runs/34556487880) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | Codex fix worker timed out after 1800000ms | Sep 10, 2026, 16:29 UTC | [issue-openclaw-openclaw-144150](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144150.md) | [34498309079](https://github.com/openclaw/clawsweeper/actions/runs/34498309079) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | Sep 10, 2026, 12:03 UTC | [issue-openclaw-openclaw-144001](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144001.md) | [34473619938](https://github.com/openclaw/clawsweeper/actions/runs/34473619938) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#143389](https://github.com/openclaw/openclaw/pull/143389) | automation_failed | Local implementation is blocked because the sandbox permits reads only and node_modules is absent. A writable executor must establish the failing r... | Sep 9, 2026, 21:36 UTC | [issue-openclaw-openclaw-143389](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-143389.md) | [34404236622](https://github.com/openclaw/clawsweeper/actions/runs/34404236622) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-143177](cluster:issue-openclaw-openclaw-143177) | automation_failed | PR creation is blocked on executor implementation and validation in a writable checkout, including the required source inspection and failing-then-... | Sep 9, 2026, 17:37 UTC | [issue-openclaw-openclaw-143177](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-143177.md) | [34365811382](https://github.com/openclaw/clawsweeper/actions/runs/34365811382) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-142524](cluster:issue-openclaw-openclaw-142524) | automation_failed | Executor must hydrate the response, refresh main, reproduce, implement, review, and validate in a writable checkout before opening or updating the... | Sep 8, 2026, 20:56 UTC | [issue-openclaw-openclaw-142524](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-142524.md) | [34275746783](https://github.com/openclaw/clawsweeper/actions/runs/34275746783) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | Sep 7, 2026, 23:30 UTC | [issue-openclaw-openclaw-141625](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-141625.md) | [34167546070](https://github.com/openclaw/clawsweeper/actions/runs/34167546070) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | Sep 7, 2026, 09:18 UTC | [issue-openclaw-openclaw-141000](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-141000.md) | [34099079926](https://github.com/openclaw/clawsweeper/actions/runs/34099079926) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests, extensionTests, docs, tooli... | Sep 7, 2026, 03:25 UTC | [automerge-openclaw-openclaw-139196](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-139196.md) | [34076816706](https://github.com/openclaw/clawsweeper/actions/runs/34076816706) |

#### No Pending Action

| Repository | Item | Lane state | Latest result | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#124015](https://github.com/openclaw/openclaw/pull/124015) | reviewed_no_action | No repair is needed: #124015 was merged into current main at 13f0e02de62d0807b785c887bce3d1f006948770 before this worker ran. The closed PR is hist... | Aug 23, 2026, 16:09 UTC | [automerge-openclaw-openclaw-124015](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-124015.md) | [32647144460](https://github.com/openclaw/clawsweeper/actions/runs/32647144460) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep #123073 open as the canonical report and #123083 as its canonical contributor fix path. The PR is narrow and writable, but its hydrated CI is... | Aug 13, 2026, 08:58 UTC | [issue-openclaw-openclaw-123073](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-123073.md) | [31683927347](https://github.com/openclaw/clawsweeper/actions/runs/31683927347) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | #119968 is already closed and its requested ACP model-forwarding repair is present on current main via merged #120046. No branch repair, replacemen... | Aug 12, 2026, 21:41 UTC | [automerge-openclaw-openclaw-119968](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119968.md) | [31643205081](https://github.com/openclaw/clawsweeper/actions/runs/31643205081) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120557](https://github.com/openclaw/openclaw/issues/120557) | reviewed_no_action | No new fix PR: current origin/main already implements the requested session-provider-first quota selection and regression coverage. Focused validat... | Aug 11, 2026, 10:45 UTC | [issue-openclaw-openclaw-120557](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120557.md) | [31483039146](https://github.com/openclaw/clawsweeper/actions/runs/31483039146) |

#### Completed

| Repository | Item | Lane state | Recorded outcome | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

### Clusters Needing Inspection

| Cluster | State | Reason | Report | Run |
| --- | --- | --- | --- | --- |
| automerge-openclaw-openclaw-117144 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=testRoot, tooling [check:changed] .github/wo... | [automerge-openclaw-openclaw-117144](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117144.md) | [34586894740](https://github.com/openclaw/clawsweeper/actions/runs/34586894740) |
| automerge-openclaw-openclaw-142626 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [automerge-openclaw-openclaw-142626](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-142626.md) | [34583540896](https://github.com/openclaw/clawsweeper/actions/runs/34583540896) |
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
| issue-openclaw-openclaw-138102 | needs human | Provision the exact sibling ../codex checkout (or a worker environment that can do so) before implementation. This is a repository hard gate, not a... | [issue-openclaw-openclaw-138102](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138102.md) | [33860696610](https://github.com/openclaw/clawsweeper/actions/runs/33860696610) |
| automerge-openclaw-openclaw-126056 | fix failed | Codex fix worker failed: stream disconnected before completion: stream closed before response.completed | [automerge-openclaw-openclaw-126056](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-126056.md) | [33847384799](https://github.com/openclaw/clawsweeper/actions/runs/33847384799) |
| issue-openclaw-openclaw-137925 | needs human | Provide a writable checkout with dependencies and the required sibling ../codex checkout so the regression can be added, demonstrated failing befor... | [issue-openclaw-openclaw-137925](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-137925.md) | [33845858866](https://github.com/openclaw/clawsweeper/actions/runs/33845858866) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [automerge-openclaw-openclaw-117144](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117144.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=testRoot, tooling [check:changed] .github/wo... | [34586894740](https://github.com/openclaw/clawsweeper/actions/runs/34586894740) |
| [automerge-openclaw-openclaw-117144](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117144.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=testRoot, tooling [check:changed] .github/wo... | [34586894740](https://github.com/openclaw/clawsweeper/actions/runs/34586894740) |
| [automerge-openclaw-openclaw-142626](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-142626.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [34583540896](https://github.com/openclaw/clawsweeper/actions/runs/34583540896) |
| [automerge-openclaw-openclaw-142626](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-142626.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [34583540896](https://github.com/openclaw/clawsweeper/actions/runs/34583540896) |
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
| [automerge-openclaw-openclaw-128236](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-128236.md) | failed |  |  | validation command failed (pnpm check:changed): validation command runtime budget exhausted | [33890288308](https://github.com/openclaw/clawsweeper/actions/runs/33890288308) |
| [automerge-openclaw-openclaw-128236](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-128236.md) | blocked |  |  | validation command failed (pnpm check:changed): validation command runtime budget exhausted | [33890288308](https://github.com/openclaw/clawsweeper/actions/runs/33890288308) |

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

