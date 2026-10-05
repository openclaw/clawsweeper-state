# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Oct 5, 2026, 15:35 UTC

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Apply finished | Oct 5, 2026, 15:35 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/37328582194) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Planning review | Oct 5, 2026, 15:34 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/37333886600) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Oct 5, 2026, 11:38 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/37304147258) |

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

Last source update: Oct 5, 2026, 15:22 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 1472 | 100% |
| Run attempts archived | 4338 | audit |
| Latest successful clusters | 1185 | 80.5% |
| Latest failed clusters | 283 | 19.2% |
| Latest cancelled clusters | 4 | 0.3% |
| Needs-human clusters | 149 | 10.1% |
| Fix actions failed | 34 | 4.0% |
| Fix actions blocked | 182 | 21.7% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 325 | 99.7% |
| Skipped mutation attempts | 1 | 0.3% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 1472 clusters: 389 maintainer action, 443 automation snapshot, 581 intervention needed, 59 no pending action, 0 completed.
- Maintainer first: [steipete/codexbar](https://github.com/steipete/codexbar) [#4100](https://github.com/steipete/codexbar/issues/4100) is maintainer_input: #4100: Select one concrete CodexBar improvement from the digest and provide expected behavior and acceptance criteria before requesting i....
- Intervention first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [cluster:issue-openclaw-openclaw-165617](cluster:issue-openclaw-openclaw-165617) is automation_failed: Implementation and publication remain blocked on a writable, dependency-prepared executor. Reuse clawsweeper/issue-openclaw-openclaw-1656....
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#164610](https://github.com/openclaw/openclaw/issues/164610) is action_planned: The observed report owns the repair. Reproduce on current main before implementing; do not close or merge from this lane..
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 389 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 443 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 581 | automation failure or blocker recorded |
| No Pending Action | 59 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 241 |
| merge_ready | 46 |
| merge_not_authorized | 102 |
| checks_blocked | 43 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 399 |
| automation_failed | 290 |
| automation_blocked | 291 |
| reviewed_no_action | 59 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#4100](https://github.com/steipete/codexbar/issues/4100) | maintainer_input | #4100: Select one concrete CodexBar improvement from the digest and provide expected behavior and acceptance criteria before requesting implementat... | Oct 5, 2026, 13:11 UTC | [issue-steipete-codexbar-4100](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-4100.md) | [37314472474](https://github.com/openclaw/clawsweeper/actions/runs/37314472474) |
| [openclaw/peekaboo](https://github.com/openclaw/peekaboo) | [cluster:issue-openclaw-peekaboo-881](cluster:issue-openclaw-peekaboo-881) | maintainer_input | For #881, obtain the retained, redacted same-session binary version, Bridge host/protocol, window identity/bounds, and existing remote/local receip... | Oct 5, 2026, 09:11 UTC | [issue-openclaw-peekaboo-881](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-peekaboo-881.md) | [37287946911](https://github.com/openclaw/clawsweeper/actions/runs/37287946911) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120362](https://github.com/openclaw/openclaw/issues/120362) | maintainer_input | Quarantine this exact ref for central OpenClaw security handling. No public mutation or repair of its implementation is planned. | Oct 5, 2026, 01:50 UTC | [issue-openclaw-openclaw-165232](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-165232.md) | [37250279660](https://github.com/openclaw/clawsweeper/actions/runs/37250279660) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#163376](https://github.com/openclaw/openclaw/issues/163376) | maintainer_input | Quarantine this exact historical ref for central OpenClaw security handling without public mutation. The separate test assertion repair does not ch... | Oct 4, 2026, 13:58 UTC | [issue-openclaw-openclaw-164917](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164917.md) | [37205278224](https://github.com/openclaw/clawsweeper/actions/runs/37205278224) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [cluster:issue-steipete-codexbar-1711](cluster:issue-steipete-codexbar-1711) | maintainer_input | For #1711 implementation only: obtain and assess a failing current-build startup trace correlated with visibility defaults, AppKit/window geometry,... | Oct 4, 2026, 10:39 UTC | [issue-steipete-codexbar-1711](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-1711.md) | [37195822261](https://github.com/openclaw/clawsweeper/actions/runs/37195822261) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#156617](https://github.com/openclaw/openclaw/issues/156617) | maintainer_input | Route only this item to central OpenClaw security handling; do not mutate it or import its cleanup into the bug fix. | Oct 4, 2026, 05:59 UTC | [issue-openclaw-openclaw-164784](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164784.md) | [37179752126](https://github.com/openclaw/clawsweeper/actions/runs/37179752126) |
| [steipete/oracle](https://github.com/steipete/oracle) | [#258](https://github.com/steipete/oracle/issues/258) | maintainer_input | Route only this flagged historical item to central OpenClaw security handling without commenting, labeling, reopening, or modifying it. Its classif... | Oct 4, 2026, 03:58 UTC | [issue-steipete-oracle-540](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-540.md) | [37171632324](https://github.com/openclaw/clawsweeper/actions/runs/37171632324) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#102175](https://github.com/openclaw/openclaw/issues/102175) | maintainer_input | Refer this exact item to central OpenClaw security handling without public mutation. Its broader policy scope does not block the independent projec... | Oct 3, 2026, 22:08 UTC | [issue-openclaw-openclaw-164515](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164515.md) | [37156937821](https://github.com/openclaw/clawsweeper/actions/runs/37156937821) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#160246](https://github.com/openclaw/openclaw/issues/160246) | maintainer_input | Quarantine this linked item for central OpenClaw security handling without commenting, labeling, closing, merging, or including its implementation... | Oct 3, 2026, 22:03 UTC | [automerge-openclaw-openclaw-163875](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-163875.md) | [37156935765](https://github.com/openclaw/clawsweeper/actions/runs/37156935765) |
| [openclaw/imsg](https://github.com/openclaw/imsg) | [#328](https://github.com/openclaw/imsg/pull/328) | maintainer_input | #328: Provide redacted, verified mapping evidence linking AddressBook source directories to primary versus delegated Accounts ownership, and decide... | Oct 3, 2026, 19:47 UTC | [issue-openclaw-imsg-328](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-imsg-328.md) | [37148980925](https://github.com/openclaw/clawsweeper/actions/runs/37148980925) |
| [openclaw/gogcli](https://github.com/openclaw/gogcli) | [#1187](https://github.com/openclaw/gogcli/pull/1187) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Oct 3, 2026, 18:30 UTC | [issue-openclaw-gogcli-1184](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-1184.md) | [37143776999](https://github.com/openclaw/clawsweeper/actions/runs/37143776999) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#121402](https://github.com/openclaw/openclaw/issues/121402) | maintainer_input | Quarantine this exact historical item for central OpenClaw security handling. Perform no GitHub mutation or implementation based on it. | Oct 3, 2026, 14:07 UTC | [issue-openclaw-openclaw-121377](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121377.md) | [37128264055](https://github.com/openclaw/clawsweeper/actions/runs/37128264055) |
| [openclaw/acpx](https://github.com/openclaw/acpx) | [cluster:issue-openclaw-acpx-808](cluster:issue-openclaw-acpx-808) | maintainer_input | For #808, obtain the reporter's resolved cursor-composer command and relevant configuration, acpx/adapter versions, platform, and a redacted verbos... | Oct 3, 2026, 09:32 UTC | [issue-openclaw-acpx-808](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-acpx-808.md) | [37113087241](https://github.com/openclaw/clawsweeper/actions/runs/37113087241) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | [#1145](https://github.com/openclaw/openclaw-windows-node/issues/1145) | maintainer_input | For #1145 only: confirm the original numbered, bulleted, and inline-code messages in a current-main Windows Release build at narrow and resized wid... | Oct 2, 2026, 23:56 UTC | [issue-openclaw-openclaw-windows-node-1145](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1145.md) | [37079638113](https://github.com/openclaw/clawsweeper/actions/runs/37079638113) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#163459](https://github.com/openclaw/openclaw/pull/163459) | maintainer_input | Route this linked item to central security handling without public mutation. It does not block the separate UI classification. | Oct 2, 2026, 23:32 UTC | [issue-openclaw-openclaw-163832](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-163832.md) | [37077779376](https://github.com/openclaw/clawsweeper/actions/runs/37077779376) |

#### Automation Snapshot

| Repository | Item | Lane state | Recorded status | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#164610](https://github.com/openclaw/openclaw/issues/164610) | action_planned | The observed report owns the repair. Reproduce on current main before implementing; do not close or merge from this lane. | Oct 4, 2026, 01:42 UTC | [issue-openclaw-openclaw-164610](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164610.md) | [37168641217](https://github.com/openclaw/clawsweeper/actions/runs/37168641217) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#164644](https://github.com/openclaw/openclaw/pull/164644) | action_planned | A narrow repair restores existing documented routing without adding options, changing policy, or altering screenshot capture. Full validation and h... | Oct 4, 2026, 01:41 UTC | [issue-openclaw-openclaw-164644](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164644.md) | [37168639770](https://github.com/openclaw/clawsweeper/actions/runs/37168639770) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#164611](https://github.com/openclaw/openclaw/pull/164611) | action_planned | Prepare one replacement-delivery custody fix on the designated branch, conditional on reproduction against confirmed current main. | Oct 4, 2026, 00:14 UTC | [issue-openclaw-openclaw-164611](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164611.md) | [37164133328](https://github.com/openclaw/clawsweeper/actions/runs/37164133328) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#164557](https://github.com/openclaw/openclaw/issues/164557) | action_planned | A focused presentation fix is supported by the existing contract. Merge and closure are prohibited by this job. | Oct 3, 2026, 23:20 UTC | [issue-openclaw-openclaw-164557](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164557.md) | [37161282012](https://github.com/openclaw/clawsweeper/actions/runs/37161282012) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#164470](https://github.com/openclaw/openclaw/pull/164470) | action_planned | The reported failure has a narrow existing-behavior repair path. Reproduce on current main before editing, then bind deferred tool execution to the... | Oct 3, 2026, 20:43 UTC | [issue-openclaw-openclaw-164470](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164470.md) | [37152362213](https://github.com/openclaw/clawsweeper/actions/runs/37152362213) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#164499](https://github.com/openclaw/openclaw/pull/164499) | action_planned | A focused cleanup-owner repair is appropriate. Establish executable failure and inspect the pinned native ownership contract before implementation;... | Oct 3, 2026, 20:43 UTC | [issue-openclaw-openclaw-164499](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164499.md) | [37152360230](https://github.com/openclaw/clawsweeper/actions/runs/37152360230) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#164346](https://github.com/openclaw/openclaw/pull/164346) | action_planned | Repair the page's existing selected-agent catalog lifecycle while preserving the all-agent inventory and open editor. Establish the required mounte... | Oct 3, 2026, 18:33 UTC | [issue-openclaw-openclaw-164346](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164346.md) | [37135186889](https://github.com/openclaw/clawsweeper/actions/runs/37135186889) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#164328](https://github.com/openclaw/openclaw/pull/164328) | action_planned | A focused repair of existing documented behavior is appropriate. The executor must reproduce the failure against current main before editing produc... | Oct 3, 2026, 16:03 UTC | [issue-openclaw-openclaw-164328](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164328.md) | [37135188736](https://github.com/openclaw/clawsweeper/actions/runs/37135188736) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#164319](https://github.com/openclaw/openclaw/pull/164319) | action_planned | The snapshot transfer repair has a clear bug-only scope. Prepare one implementation PR after reproduction and required validation; closure and merg... | Oct 3, 2026, 16:02 UTC | [issue-openclaw-openclaw-164319](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164319.md) | [37135190667](https://github.com/openclaw/clawsweeper/actions/runs/37135190667) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#164283](https://github.com/openclaw/openclaw/pull/164283) | action_planned | The existing behavior has a concrete source-supported repair path. Establish real-entry-point failure on current main before implementation; source... | Oct 3, 2026, 14:33 UTC | [issue-openclaw-openclaw-164283](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164283.md) | [37129806962](https://github.com/openclaw/clawsweeper/actions/runs/37129806962) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#164266](https://github.com/openclaw/openclaw/pull/164266) | action_planned | The reported logging defect has a specific plugin-owned repair path. Establish a failing boundary regression before implementation; retain the issu... | Oct 3, 2026, 12:52 UTC | [issue-openclaw-openclaw-164266](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164266.md) | [37124139342](https://github.com/openclaw/clawsweeper/actions/runs/37124139342) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#164211](https://github.com/openclaw/openclaw/pull/164211) | action_planned | Repair existing bridge startup behavior through a supported host/package contract. Runtime reproduction, implementation, and validation remain requ... | Oct 3, 2026, 09:59 UTC | [issue-openclaw-openclaw-164211](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164211.md) | [37114657421](https://github.com/openclaw/clawsweeper/actions/runs/37114657421) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#164147](https://github.com/openclaw/openclaw/issues/164147) | action_planned | A bounded delivery-owner bug has a clear repair path. Establish an executable failing regression before implementation; preserve existing authoriza... | Oct 3, 2026, 08:59 UTC | [issue-openclaw-openclaw-164147](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164147.md) | [37110385087](https://github.com/openclaw/clawsweeper/actions/runs/37110385087) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#164115](https://github.com/openclaw/openclaw/pull/164115) | action_planned | A focused bug repair is appropriate. Establish the failing regression on current main before implementing; stop if reproduction fails. | Oct 3, 2026, 08:43 UTC | [issue-openclaw-openclaw-164115](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164115.md) | [37110387053](https://github.com/openclaw/clawsweeper/actions/runs/37110387053) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#163958](https://github.com/openclaw/openclaw/pull/163958) | action_planned | A focused monitor repair is warranted. Establish a failing regression on the execution base before changing production code; stop if it does not re... | Oct 3, 2026, 03:16 UTC | [issue-openclaw-openclaw-163958](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-163958.md) | [37092470370](https://github.com/openclaw/clawsweeper/actions/runs/37092470370) |

#### Intervention Needed

| Repository | Item | Lane state | Recorded blocker | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-165617](cluster:issue-openclaw-openclaw-165617) | automation_failed | Implementation and publication remain blocked on a writable, dependency-prepared executor. Reuse clawsweeper/issue-openclaw-openclaw-165617, prove... | Oct 5, 2026, 15:22 UTC | [issue-openclaw-openclaw-165617](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-165617.md) | [37326768279](https://github.com/openclaw/clawsweeper/actions/runs/37326768279) |
| [steipete/oracle](https://github.com/steipete/oracle) | [cluster:issue-steipete-oracle-537](cluster:issue-steipete-oracle-537) | automation_failed | PR creation must wait for implementation and validation in a writable executor. Re-fetch issue state, reuse the named branch and any existing imple... | Oct 5, 2026, 15:02 UTC | [issue-steipete-oracle-537](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-537.md) | [37328927276](https://github.com/openclaw/clawsweeper/actions/runs/37328927276) |
| [openclaw/crabbox](https://github.com/openclaw/crabbox) |  | automation_blocked | validation command failed (go test -count=1 -timeout=5m ./internal/providers/tart -run ^TestTartStop): go: cannot find GOROOT directory: 'go' binar... | Oct 5, 2026, 14:49 UTC | [issue-openclaw-crabbox-2706](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-2706.md) | [37325836099](https://github.com/openclaw/clawsweeper/actions/runs/37325836099) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#165590](https://github.com/openclaw/openclaw/pull/165590) | automation_failed | Implementation is blocked until a writable, dependency-ready executor reproduces the reported failure on current main. This is an environment block... | Oct 5, 2026, 14:05 UTC | [issue-openclaw-openclaw-165590](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-165590.md) | [37317185797](https://github.com/openclaw/clawsweeper/actions/runs/37317185797) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-145079](cluster:issue-openclaw-openclaw-145079) | automation_failed | Executor must complete reproduction, implementation, validation, and review on a writable isolated host before opening or updating the single imple... | Oct 5, 2026, 13:58 UTC | [issue-openclaw-openclaw-145079](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-145079.md) | [37311134146](https://github.com/openclaw/clawsweeper/actions/runs/37311134146) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#165559](https://github.com/openclaw/openclaw/pull/165559) | automation_failed | The existing assertion conflates controlled backing stores with smaller allocations attributed to the same frame. | Oct 5, 2026, 12:53 UTC | [issue-openclaw-openclaw-165559](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-165559.md) | [37308268392](https://github.com/openclaw/clawsweeper/actions/runs/37308268392) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#165539](https://github.com/openclaw/openclaw/pull/165539) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Oct 5, 2026, 12:50 UTC | [automerge-openclaw-openclaw-165539](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-165539.md) | [37310791107](https://github.com/openclaw/clawsweeper/actions/runs/37310791107) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#165566](https://github.com/openclaw/openclaw/pull/165566) | automation_failed | The source-supported bug has a narrow fixture repair path. Executable reproduction remains a prerequisite; source inspection is not a passing or fa... | Oct 5, 2026, 12:46 UTC | [issue-openclaw-openclaw-165566](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-165566.md) | [37309700585](https://github.com/openclaw/clawsweeper/actions/runs/37309700585) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#165557](https://github.com/openclaw/openclaw/pull/165557) | automation_failed | Source supports the reported fixture defect. The executor must reproduce it through the specified test command before editing; stop without a PR if... | Oct 5, 2026, 12:33 UTC | [issue-openclaw-openclaw-165557](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-165557.md) | [37307962617](https://github.com/openclaw/clawsweeper/actions/runs/37307962617) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#165553](https://github.com/openclaw/openclaw/pull/165553) | automation_failed | A test-only repair is source-supported. Implementation and publication remain blocked until native reproduction and required validation can run in... | Oct 5, 2026, 12:31 UTC | [issue-openclaw-openclaw-165553](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-165553.md) | [37306407561](https://github.com/openclaw/clawsweeper/actions/runs/37306407561) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#165563](https://github.com/openclaw/openclaw/pull/165563) | automation_failed | The source supports the reported repair, but scanner reproduction has not been established on this host. The executor must reproduce all three repo... | Oct 5, 2026, 12:27 UTC | [issue-openclaw-openclaw-165563](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-165563.md) | [37308948519](https://github.com/openclaw/clawsweeper/actions/runs/37308948519) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#165560](https://github.com/openclaw/openclaw/pull/165560) | automation_failed | The job explicitly requires reproducing the reduced compiler crash on a supported isolated macOS host before editing. That prerequisite cannot be c... | Oct 5, 2026, 12:22 UTC | [issue-openclaw-openclaw-165560](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-165560.md) | [37308438019](https://github.com/openclaw/clawsweeper/actions/runs/37308438019) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#165522](https://github.com/openclaw/openclaw/pull/165522) | automation_failed | The source-supported display defect is separate from terminal-event identity feature work. Execution must first recheck competing work and establis... | Oct 5, 2026, 10:58 UTC | [issue-openclaw-openclaw-165522](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-165522.md) | [37299372822](https://github.com/openclaw/clawsweeper/actions/runs/37299372822) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#165494](https://github.com/openclaw/openclaw/pull/165494) | automation_failed | The canonical bug has a narrow existing-behavior repair, but this host cannot create or validate the implementation branch. The executor must estab... | Oct 5, 2026, 10:39 UTC | [issue-openclaw-openclaw-165494](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-165494.md) | [37293187122](https://github.com/openclaw/clawsweeper/actions/runs/37293187122) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#165463](https://github.com/openclaw/openclaw/pull/165463) | automation_failed | Local implementation is blocked by filesystem permissions and unavailable exact-base verification. The planned cluster artifact supplies the execut... | Oct 5, 2026, 09:54 UTC | [issue-openclaw-openclaw-165463](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-165463.md) | [37287931077](https://github.com/openclaw/clawsweeper/actions/runs/37287931077) |

#### No Pending Action

| Repository | Item | Lane state | Latest result | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Use the reporter's existing, reviewed contributor PR as the canonical repair. Keep the issue open pending landing; no competing implementation PR o... | Oct 3, 2026, 05:00 UTC | [issue-openclaw-openclaw-164024](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164024.md) | [37098260979](https://github.com/openclaw/clawsweeper/actions/runs/37098260979) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep the issue open and preserve the existing contributor implementation PR. Do not create a competing PR. Reproduction, original shard-order repla... | Oct 1, 2026, 13:41 UTC | [issue-openclaw-openclaw-162690](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-162690.md) | [36870054945](https://github.com/openclaw/clawsweeper/actions/runs/36870054945) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | No fix PR is planned. The issue is already closed after a contributor reported that automatic-mode progress and final replies both reached Telegram... | Oct 1, 2026, 01:23 UTC | [issue-openclaw-openclaw-162217](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-162217.md) | [36800650422](https://github.com/openclaw/clawsweeper/actions/runs/36800650422) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | [#1546](https://github.com/openclaw/openclaw-windows-node/issues/1546) | reviewed_no_action | No implementation PR is needed. At the preflight main SHA 3a58bf34902fb9b6e9f925826414ac0d6a7bf6dd, the Setup window already has a DPI-aware native... | Oct 1, 2026, 01:17 UTC | [issue-openclaw-openclaw-windows-node-1546](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1546.md) | [36800124362](https://github.com/openclaw/clawsweeper/actions/runs/36800124362) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | The issue is already closed following a decision to leave the broker unchanged because no shipped flow was found to be affected. No fix PR is planned. | Sep 30, 2026, 22:38 UTC | [issue-openclaw-openclaw-162135](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-162135.md) | [36786537687](https://github.com/openclaw/clawsweeper/actions/runs/36786537687) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | No fix artifact is recommended. The issue is already closed after a maintainer tested authenticated hooks on an isolated Gateway and could not repr... | Sep 30, 2026, 21:01 UTC | [issue-openclaw-openclaw-162054](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-162054.md) | [36776348305](https://github.com/openclaw/clawsweeper/actions/runs/36776348305) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | The reported bug was fixed by the contributor's merged PR #161842, and issue #161836 is closed. No new fix PR or GitHub action is warranted. | Sep 30, 2026, 13:58 UTC | [issue-openclaw-openclaw-161836](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161836.md) | [36718445146](https://github.com/openclaw/clawsweeper/actions/runs/36718445146) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | No implementation PR is needed. The preflight records #161834 as merged and #161823 as closed. The checkout contains the reported fix and its regre... | Sep 30, 2026, 11:59 UTC | [issue-openclaw-openclaw-161823](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161823.md) | [36711621502](https://github.com/openclaw/clawsweeper/actions/runs/36711621502) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | No fix PR is planned. The issue is already closed after a Gateway reproduction handled namespaced-channel attachments successfully. Current main st... | Sep 28, 2026, 01:19 UTC | [issue-openclaw-openclaw-159977](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-159977.md) | [36365323873](https://github.com/openclaw/clawsweeper/actions/runs/36365323873) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Current main still uses the query-based config-reader guard. An open PR targets this issue and credits the reporter, so the plan keeps that PR as t... | Sep 25, 2026, 23:57 UTC | [issue-openclaw-openclaw-158339](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-158339.md) | [36202816044](https://github.com/openclaw/clawsweeper/actions/runs/36202816044) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep the issue open and preserve the existing contributor implementation. The candidate PR needs CI investigation and validation; a competing imple... | Sep 21, 2026, 22:40 UTC | [issue-openclaw-openclaw-155193](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-155193.md) | [35660017682](https://github.com/openclaw/clawsweeper/actions/runs/35660017682) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep the canonical issue open and preserve the existing contributor fix candidate. Do not create a competing PR. Local HEAD matches preflight main;... | Sep 19, 2026, 14:00 UTC | [issue-openclaw-openclaw-152879](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-152879.md) | [35447300369](https://github.com/openclaw/clawsweeper/actions/runs/35447300369) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | The canonical PR is already merged. No repair or GitHub mutation is needed. | Sep 19, 2026, 08:57 UTC | [automerge-openclaw-openclaw-152703](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-152703.md) | [35433235159](https://github.com/openclaw/clawsweeper/actions/runs/35433235159) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep #149232 open and retain #149268 as its existing fix PR. Do not create a competing implementation. Failing CI blocks merge readiness; broader s... | Sep 15, 2026, 17:43 UTC | [issue-openclaw-openclaw-149232](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-149232.md) | [35001943660](https://github.com/openclaw/clawsweeper/actions/runs/35001943660) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep issue #149101 open and retain @LiuwqGit's existing PR #149132 as the canonical fix path. A second implementation PR would duplicate useful con... | Sep 15, 2026, 14:38 UTC | [issue-openclaw-openclaw-149101](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-149101.md) | [34982550918](https://github.com/openclaw/clawsweeper/actions/runs/34982550918) |

#### Completed

| Repository | Item | Lane state | Recorded outcome | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

### Clusters Needing Inspection

| Cluster | State | Reason | Report | Run |
| --- | --- | --- | --- | --- |
| issue-openclaw-crabbox-2706 | execute_fix blocked | validation command failed (go test -count=1 -timeout=5m ./internal/providers/tart -run ^TestTartStop): go: cannot find GOROOT directory: 'go' binar... | [issue-openclaw-crabbox-2706](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-2706.md) | [37325836099](https://github.com/openclaw/clawsweeper/actions/runs/37325836099) |
| issue-steipete-codexbar-4100 | needs human | #4100: Select one concrete CodexBar improvement from the digest and provide expected behavior and acceptance criteria before requesting implementat... | [issue-steipete-codexbar-4100](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-4100.md) | [37314472474](https://github.com/openclaw/clawsweeper/actions/runs/37314472474) |
| issue-openclaw-peekaboo-881 | needs human | For #881, obtain the retained, redacted same-session binary version, Bridge host/protocol, window identity/bounds, and existing remote/local receip... | [issue-openclaw-peekaboo-881](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-peekaboo-881.md) | [37287946911](https://github.com/openclaw/clawsweeper/actions/runs/37287946911) |
| automerge-openclaw-openclaw-165334 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, ui, extensions, ext... | [automerge-openclaw-openclaw-165334](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-165334.md) | [37266102434](https://github.com/openclaw/clawsweeper/actions/runs/37266102434) |
| issue-steipete-oracle-531 | execute_fix blocked | validation_script_missing: required pnpm check:changed is unavailable in target checkout | [issue-steipete-oracle-531](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-531.md) | [37262105585](https://github.com/openclaw/clawsweeper/actions/runs/37262105585) |
| issue-steipete-oracle-535 | execute_fix blocked | validation_script_missing: required pnpm check:changed is unavailable in target checkout | [issue-steipete-oracle-535](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-535.md) | [37258335505](https://github.com/openclaw/clawsweeper/actions/runs/37258335505) |
| issue-steipete-codexbar-1711 | needs human | For #1711 implementation only: obtain and assess a failing current-build startup trace correlated with visibility defaults, AppKit/window geometry,... | [issue-steipete-codexbar-1711](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-1711.md) | [37195822261](https://github.com/openclaw/clawsweeper/actions/runs/37195822261) |
| issue-steipete-oracle-534 | execute_fix blocked | validation_script_missing: required pnpm check:changed is unavailable in target checkout | [issue-steipete-oracle-534](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-534.md) | [37195804045](https://github.com/openclaw/clawsweeper/actions/runs/37195804045) |
| issue-steipete-oracle-540 | execute_fix blocked | validation_script_missing: required pnpm check:changed is unavailable in target checkout | [issue-steipete-oracle-540](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-540.md) | [37171632324](https://github.com/openclaw/clawsweeper/actions/runs/37171632324) |
| issue-steipete-oracle-538 | execute_fix blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [issue-steipete-oracle-538](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-538.md) | [37171660042](https://github.com/openclaw/clawsweeper/actions/runs/37171660042) |
| issue-openclaw-imsg-328 | needs human | #328: Provide redacted, verified mapping evidence linking AddressBook source directories to primary versus delegated Accounts ownership, and decide... | [issue-openclaw-imsg-328](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-imsg-328.md) | [37148980925](https://github.com/openclaw/clawsweeper/actions/runs/37148980925) |
| issue-openclaw-openclaw-121377 | execute_fix blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [issue-openclaw-openclaw-121377](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121377.md) | [37128264055](https://github.com/openclaw/clawsweeper/actions/runs/37128264055) |
| issue-openclaw-acpx-808 | needs human | For #808, obtain the reporter's resolved cursor-composer command and relevant configuration, acpx/adapter versions, platform, and a redacted verbos... | [issue-openclaw-acpx-808](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-acpx-808.md) | [37113087241](https://github.com/openclaw/clawsweeper/actions/runs/37113087241) |
| issue-openclaw-openclaw-164113 | execute_fix blocked | validation command failed (pnpm check:changed): validation command left 1 background process(es) after exit | [issue-openclaw-openclaw-164113](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164113.md) | [37105575261](https://github.com/openclaw/clawsweeper/actions/runs/37105575261) |
| issue-openclaw-openclaw-windows-node-1145 | needs human | For #1145 only: confirm the original numbered, bulleted, and inline-code messages in a current-main Windows Release build at narrow and resized wid... | [issue-openclaw-openclaw-windows-node-1145](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1145.md) | [37079638113](https://github.com/openclaw/clawsweeper/actions/runs/37079638113) |
| issue-openclaw-openclaw-163568 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [issue-openclaw-openclaw-163568](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-163568.md) | [37019308664](https://github.com/openclaw/clawsweeper/actions/runs/37019308664) |
| issue-openclaw-openclaw-windows-node-1612 | needs human | #1612: Obtain a concrete problem statement or feature request from the author before implementation can be scoped. | [issue-openclaw-openclaw-windows-node-1612](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1612.md) | [37055379739](https://github.com/openclaw/clawsweeper/actions/runs/37055379739) |
| issue-openclaw-openclaw-windows-node-1613 | needs human | #1613: Ask the author to identify the affected Windows Companion component, version, reproduction steps, and expected versus actual behavior, or st... | [issue-openclaw-openclaw-windows-node-1613](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1613.md) | [37055402316](https://github.com/openclaw/clawsweeper/actions/runs/37055402316) |
| issue-openclaw-openclaw-windows-node-1611 | needs human | #1611: Ask @wbdream10-cpu to describe the requested feature or bug, affected component, installed version, reproduction steps where applicable, and... | [issue-openclaw-openclaw-windows-node-1611](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1611.md) | [37055361224](https://github.com/openclaw/clawsweeper/actions/runs/37055361224) |
| issue-openclaw-wacli-365 | needs human | #365: Provide a redacted affected-group reproduction on main a4f23eef7395473931e3a44c93eacd6ebebdc313, including payload field names, whether conte... | [issue-openclaw-wacli-365](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-wacli-365.md) | [37016788910](https://github.com/openclaw/clawsweeper/actions/runs/37016788910) |
| issue-openclaw-peekaboo-748 | needs human | #748 implementation only: supply the affected-host diagnostics requested by steipete on September 24—redacted verbose JSON Bridge status retaining... | [issue-openclaw-peekaboo-748](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-peekaboo-748.md) | [36974897709](https://github.com/openclaw/clawsweeper/actions/runs/36974897709) |
| automerge-openclaw-openclaw-119975 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [automerge-openclaw-openclaw-119975](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119975.md) | [36944703174](https://github.com/openclaw/clawsweeper/actions/runs/36944703174) |
| issue-openclaw-openclaw-windows-node-1583 | needs human | #160075: Resolve the misqualified reference against https://github.com/openclaw/openclaw/pull/160075 and hydrate its actual kind and updated_at bef... | [issue-openclaw-openclaw-windows-node-1583](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1583.md) | [36943238009](https://github.com/openclaw/clawsweeper/actions/runs/36943238009) |
| issue-openclaw-openclaw-windows-node-1242 | needs human | #22893: resolve the inventory mapping for https://github.com/ggml-org/llama.cpp/issues/22893. Target-repository hydration returned HTTP 404 with ki... | [issue-openclaw-openclaw-windows-node-1242](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1242.md) | [36935943778](https://github.com/openclaw/clawsweeper/actions/runs/36935943778) |
| issue-openclaw-openclaw-windows-node-1579 | needs human | #1579: Supply exact affected Companion and Gateway versions, native versus WSL routing, and a failed-session trace redacted for credentials, author... | [issue-openclaw-openclaw-windows-node-1579](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1579.md) | [36915527791](https://github.com/openclaw/clawsweeper/actions/runs/36915527791) |
| issue-openclaw-openclaw-162649 | execute_fix blocked | validation command failed (pnpm check:changed): Error: ERR_PNPM_BAD_CONFIG_DEP × resolve package manager dependencies ╰─▶ Failed to resolve config... | [issue-openclaw-openclaw-162649](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-162649.md) | [36856934103](https://github.com/openclaw/clawsweeper/actions/runs/36856934103) |
| issue-openclaw-openclaw-windows-node-1571 | execute_fix blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [issue-openclaw-openclaw-windows-node-1571](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1571.md) | [36849403579](https://github.com/openclaw/clawsweeper/actions/runs/36849403579) |
| issue-openclaw-clawsweeper-1128 | needs human | For https://github.com/openclaw/clawsweeper/issues/1128, decide whether to authorize one explicitly bounded behavioral migration slice or retain th... | [issue-openclaw-clawsweeper-1128](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-clawsweeper-1128.md) | [36831634218](https://github.com/openclaw/clawsweeper/actions/runs/36831634218) |
| issue-openclaw-crabbox-2627 | execute_fix blocked | validation command failed (go test ./internal/cli -run ^TestTypeRFBText -count=1): go: cannot find GOROOT directory: 'go' binary is trimmed and GOR... | [issue-openclaw-crabbox-2627](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-2627.md) | [36768428805](https://github.com/openclaw/clawsweeper/actions/runs/36768428805) |
| automerge-openclaw-openclaw-enterprise-670 | fix failed | Codex /review did not pass after final base synchronization: The latest commit removes a default-off command safety gate and changes the workflow d... | [automerge-openclaw-openclaw-enterprise-670](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-enterprise-670.md) | [36766634334](https://github.com/openclaw/clawsweeper/actions/runs/36766634334) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [issue-openclaw-crabbox-2706](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-2706.md) | blocked |  |  | validation command failed (go test -count=1 -timeout=5m ./internal/providers/tart -run ^TestTartStop): go: cannot find GOROOT directory: 'go' binar... | [37325836099](https://github.com/openclaw/clawsweeper/actions/runs/37325836099) |
| [automerge-openclaw-openclaw-165334](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-165334.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, ui, extensions, ext... | [37266102434](https://github.com/openclaw/clawsweeper/actions/runs/37266102434) |
| [automerge-openclaw-openclaw-165334](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-165334.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, ui, extensions, ext... | [37266102434](https://github.com/openclaw/clawsweeper/actions/runs/37266102434) |
| [issue-steipete-oracle-531](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-531.md) | blocked |  |  | validation_script_missing: required pnpm check:changed is unavailable in target checkout | [37262105585](https://github.com/openclaw/clawsweeper/actions/runs/37262105585) |
| [issue-steipete-oracle-535](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-535.md) | blocked |  |  | validation_script_missing: required pnpm check:changed is unavailable in target checkout | [37258335505](https://github.com/openclaw/clawsweeper/actions/runs/37258335505) |
| [issue-steipete-oracle-534](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-534.md) | blocked |  |  | validation_script_missing: required pnpm check:changed is unavailable in target checkout | [37195804045](https://github.com/openclaw/clawsweeper/actions/runs/37195804045) |
| [issue-steipete-oracle-540](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-540.md) | blocked |  |  | validation_script_missing: required pnpm check:changed is unavailable in target checkout | [37171632324](https://github.com/openclaw/clawsweeper/actions/runs/37171632324) |
| [issue-steipete-oracle-538](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-538.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [37171660042](https://github.com/openclaw/clawsweeper/actions/runs/37171660042) |
| [issue-openclaw-openclaw-121377](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121377.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [37128264055](https://github.com/openclaw/clawsweeper/actions/runs/37128264055) |
| [issue-openclaw-openclaw-164113](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164113.md) | blocked |  |  | validation command failed (pnpm check:changed): validation command left 1 background process(es) after exit | [37105575261](https://github.com/openclaw/clawsweeper/actions/runs/37105575261) |
| [issue-openclaw-openclaw-163568](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-163568.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [37019308664](https://github.com/openclaw/clawsweeper/actions/runs/37019308664) |
| [automerge-openclaw-openclaw-119975](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119975.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [36944703174](https://github.com/openclaw/clawsweeper/actions/runs/36944703174) |
| [automerge-openclaw-openclaw-119975](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119975.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [36944703174](https://github.com/openclaw/clawsweeper/actions/runs/36944703174) |
| [issue-openclaw-openclaw-162649](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-162649.md) | blocked |  |  | validation command failed (pnpm check:changed): Error: ERR_PNPM_BAD_CONFIG_DEP × resolve package manager dependencies ╰─▶ Failed to resolve config... | [36856934103](https://github.com/openclaw/clawsweeper/actions/runs/36856934103) |
| [issue-openclaw-openclaw-windows-node-1571](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1571.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [36849403579](https://github.com/openclaw/clawsweeper/actions/runs/36849403579) |
| [issue-openclaw-crabbox-2627](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-2627.md) | blocked |  |  | validation command failed (go test ./internal/cli -run ^TestTypeRFBText -count=1): go: cannot find GOROOT directory: 'go' binary is trimmed and GOR... | [36768428805](https://github.com/openclaw/clawsweeper/actions/runs/36768428805) |
| [automerge-openclaw-openclaw-enterprise-670](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-enterprise-670.md) | failed |  |  | Codex /review did not pass after final base synchronization: The latest commit removes a default-off command safety gate and changes the workflow d... | [36766634334](https://github.com/openclaw/clawsweeper/actions/runs/36766634334) |
| [automerge-openclaw-openclaw-enterprise-670](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-enterprise-670.md) | blocked |  |  | Codex /review did not pass after final base synchronization: The latest commit removes a default-off command safety gate and changes the workflow d... | [36766634334](https://github.com/openclaw/clawsweeper/actions/runs/36766634334) |
| [issue-openclaw-openclaw-161866](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161866.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [36724659981](https://github.com/openclaw/clawsweeper/actions/runs/36724659981) |
| [issue-openclaw-openclaw-enterprise-694](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-enterprise-694.md) | blocked |  |  | external base blocker: validation failed only in base-identical files outside the repair delta: scripts/docs-site/word-count.mjs, scripts/docs-site... | [36690817325](https://github.com/openclaw/clawsweeper/actions/runs/36690817325) |
| [issue-openclaw-imsg-324](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-imsg-324.md) | blocked |  |  | external base blocker: validation failed only in base-identical files outside the repair delta: Makefile | [36658091028](https://github.com/openclaw/clawsweeper/actions/runs/36658091028) |
| [issue-openclaw-openclaw-161467](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161467.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [36653434126](https://github.com/openclaw/clawsweeper/actions/runs/36653434126) |
| [issue-openclaw-openclaw-125873](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-125873.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=extensions, extensionTests, tooling... | [36444377660](https://github.com/openclaw/clawsweeper/actions/runs/36444377660) |
| [issue-openclaw-imsg-322](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-imsg-322.md) | blocked |  |  | external base blocker: validation failed only in base-identical files outside the repair delta: Makefile | [36368874126](https://github.com/openclaw/clawsweeper/actions/runs/36368874126) |
| [issue-openclaw-openclaw-153145](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-153145.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=apps [check:changed] apps/macos/Sour... | [36203268022](https://github.com/openclaw/clawsweeper/actions/runs/36203268022) |

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

