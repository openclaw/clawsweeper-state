# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Oct 5, 2026, 09:48 UTC

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Apply finished | Oct 5, 2026, 09:48 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/37287384391) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Planning review | Oct 5, 2026, 09:47 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/37292308158) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Oct 5, 2026, 08:47 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/37285723494) |

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

Last source update: Oct 5, 2026, 09:46 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 1459 | 100% |
| Run attempts archived | 4310 | audit |
| Latest successful clusters | 1185 | 81.2% |
| Latest failed clusters | 270 | 18.5% |
| Latest cancelled clusters | 4 | 0.3% |
| Needs-human clusters | 149 | 10.2% |
| Fix actions failed | 34 | 4.1% |
| Fix actions blocked | 182 | 21.7% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 325 | 99.7% |
| Skipped mutation attempts | 1 | 0.3% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 1459 clusters: 389 maintainer action, 443 automation snapshot, 568 intervention needed, 59 no pending action, 0 completed.
- Maintainer first: [openclaw/peekaboo](https://github.com/openclaw/peekaboo) [cluster:issue-openclaw-peekaboo-881](cluster:issue-openclaw-peekaboo-881) is maintainer_input: For #881, obtain the retained, redacted same-session binary version, Bridge host/protocol, window identity/bounds, and existing remote/lo....
- Intervention first: [openclaw/libterminal](https://github.com/openclaw/libterminal) [issue-openclaw-libterminal-41](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-libterminal-41.md) is automation_failed: Implementation is blocked on the issue's explicit stable-publication prerequisites. Current preflight and repository evidence do not iden....
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#164610](https://github.com/openclaw/openclaw/issues/164610) is action_planned: The observed report owns the repair. Reproduce on current main before implementing; do not close or merge from this lane..
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 389 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 443 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 568 | automation failure or blocker recorded |
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
| automation_failed | 277 |
| automation_blocked | 291 |
| reviewed_no_action | 59 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
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
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | [#1612](https://github.com/openclaw/openclaw-windows-node/issues/1612) | maintainer_input | #1612: Obtain a concrete problem statement or feature request from the author before implementation can be scoped. | Oct 2, 2026, 19:55 UTC | [issue-openclaw-openclaw-windows-node-1612](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1612.md) | [37055379739](https://github.com/openclaw/clawsweeper/actions/runs/37055379739) |

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
| [openclaw/libterminal](https://github.com/openclaw/libterminal) |  | automation_failed | Implementation is blocked on the issue's explicit stable-publication prerequisites. Current preflight and repository evidence do not identify a qua... | Oct 5, 2026, 09:46 UTC | [issue-openclaw-libterminal-41](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-libterminal-41.md) | [37291981072](https://github.com/openclaw/clawsweeper/actions/runs/37291981072) |
| [openclaw/crabbox](https://github.com/openclaw/crabbox) |  | automation_blocked | validation command failed (go test ./internal/providers/all -run Stop.*Target\|Target.*Stop -count=1): go: cannot find GOROOT directory: 'go' binar... | Oct 5, 2026, 09:19 UTC | [issue-openclaw-crabbox-2706](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-2706.md) | [37288028683](https://github.com/openclaw/clawsweeper/actions/runs/37288028683) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#145079](https://github.com/openclaw/openclaw/pull/145079) | automation_failed | Existing transient recovery omits this exact Google producer diagnostic. Keep the issue open and implement only after establishing the required fai... | Oct 5, 2026, 08:49 UTC | [issue-openclaw-openclaw-145079](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-145079.md) | [37280550735](https://github.com/openclaw/clawsweeper/actions/runs/37280550735) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#4101](https://github.com/steipete/codexbar/pull/4101) | automation_failed | The launch eligibility bug remains actionable and has a focused existing test seam. Keep the issue open; the reported macOS failure to demote after... | Oct 5, 2026, 08:01 UTC | [issue-steipete-codexbar-4101](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-4101.md) | [37280231286](https://github.com/openclaw/clawsweeper/actions/runs/37280231286) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#4275](https://github.com/steipete/codexbar/pull/4275) | automation_failed | The finding remains valid and has a narrow implementation path. Code changes and build/test execution are blocked by the worker's read-only filesys... | Oct 5, 2026, 07:08 UTC | [issue-steipete-codexbar-4275](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-4275.md) | [37275106114](https://github.com/openclaw/clawsweeper/actions/runs/37275106114) |
| [openclaw/gitcrawl](https://github.com/openclaw/gitcrawl) | [#232](https://github.com/openclaw/gitcrawl/pull/232) | automation_failed | A focused performance bug remains on current main. Implement through one PR on clawsweeper/issue-openclaw-gitcrawl-232; leave the issue open. | Oct 5, 2026, 05:44 UTC | [issue-openclaw-gitcrawl-232](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gitcrawl-232.md) | [37268707671](https://github.com/openclaw/clawsweeper/actions/runs/37268707671) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, ui, extensions, ext... | Oct 5, 2026, 05:19 UTC | [automerge-openclaw-openclaw-165334](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-165334.md) | [37266102434](https://github.com/openclaw/clawsweeper/actions/runs/37266102434) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#165315](https://github.com/openclaw/openclaw/pull/165315) | automation_failed | A narrow shared-owner repair is supported by current source. Implementation remains blocked by host write restrictions, not by an unresolved produc... | Oct 5, 2026, 04:40 UTC | [issue-openclaw-openclaw-165315](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-165315.md) | [37261413285](https://github.com/openclaw/clawsweeper/actions/runs/37261413285) |
| [steipete/oracle](https://github.com/steipete/oracle) |  | automation_blocked | validation_script_missing: required pnpm check:changed is unavailable in target checkout | Oct 5, 2026, 04:10 UTC | [issue-steipete-oracle-531](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-531.md) | [37262105585](https://github.com/openclaw/clawsweeper/actions/runs/37262105585) |
| [steipete/oracle](https://github.com/steipete/oracle) |  | automation_blocked | validation_script_missing: required pnpm check:changed is unavailable in target checkout | Oct 5, 2026, 03:14 UTC | [issue-steipete-oracle-535](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-535.md) | [37258335505](https://github.com/openclaw/clawsweeper/actions/runs/37258335505) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#165279](https://github.com/openclaw/openclaw/pull/165279) | automation_failed | Implementation requires a writable executor checkout with dependencies. Run the production architecture checker before editing; if the reported cyc... | Oct 5, 2026, 03:13 UTC | [issue-openclaw-openclaw-165279](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-165279.md) | [37256417764](https://github.com/openclaw/clawsweeper/actions/runs/37256417764) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#165266](https://github.com/openclaw/openclaw/pull/165266) | automation_failed | The issue isolates an existing lifecycle defect. Implementation must first reproduce it through the maintenance entry point on a writable, supporte... | Oct 5, 2026, 02:56 UTC | [issue-openclaw-openclaw-165266](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-165266.md) | [37254539947](https://github.com/openclaw/clawsweeper/actions/runs/37254539947) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#165268](https://github.com/openclaw/openclaw/pull/165268) | automation_failed | The narrow fix remains supported by source and hydrated evidence. Implementation must first reproduce the specific clipping failure on current main... | Oct 5, 2026, 02:20 UTC | [issue-openclaw-openclaw-165268](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-165268.md) | [37254633292](https://github.com/openclaw/clawsweeper/actions/runs/37254633292) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#165229](https://github.com/openclaw/openclaw/pull/165229) | automation_failed | Source supports the reported ordinary updater bug. Runtime reproduction must precede implementation; no unresolved maintainer judgment is needed. | Oct 5, 2026, 01:44 UTC | [issue-openclaw-openclaw-165229](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-165229.md) | [37249818982](https://github.com/openclaw/clawsweeper/actions/runs/37249818982) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#165216](https://github.com/openclaw/openclaw/pull/165216) | automation_failed | A narrow existing-behavior repair is justified. Keep the issue open; closure and merging are prohibited by this job. | Oct 5, 2026, 00:45 UTC | [issue-openclaw-openclaw-165216](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-165216.md) | [37248244665](https://github.com/openclaw/clawsweeper/actions/runs/37248244665) |

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
| issue-openclaw-crabbox-2706 | execute_fix blocked | validation command failed (go test ./internal/providers/all -run Stop.*Target\|Target.*Stop -count=1): go: cannot find GOROOT directory: 'go' binar... | [issue-openclaw-crabbox-2706](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-2706.md) | [37288028683](https://github.com/openclaw/clawsweeper/actions/runs/37288028683) |
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
| issue-steipete-codexbar-4100 | needs human | Select one concrete CodexBar change from #4100 and specify its desired behavior and acceptance criteria, preferably in a focused follow-up issue. | [issue-steipete-codexbar-4100](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-4100.md) | [36859031697](https://github.com/openclaw/clawsweeper/actions/runs/36859031697) |
| issue-openclaw-openclaw-windows-node-1571 | execute_fix blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [issue-openclaw-openclaw-windows-node-1571](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1571.md) | [36849403579](https://github.com/openclaw/clawsweeper/actions/runs/36849403579) |
| issue-openclaw-clawsweeper-1128 | needs human | For https://github.com/openclaw/clawsweeper/issues/1128, decide whether to authorize one explicitly bounded behavioral migration slice or retain th... | [issue-openclaw-clawsweeper-1128](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-clawsweeper-1128.md) | [36831634218](https://github.com/openclaw/clawsweeper/actions/runs/36831634218) |
| issue-openclaw-crabbox-2627 | execute_fix blocked | validation command failed (go test ./internal/cli -run ^TestTypeRFBText -count=1): go: cannot find GOROOT directory: 'go' binary is trimmed and GOR... | [issue-openclaw-crabbox-2627](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-2627.md) | [36768428805](https://github.com/openclaw/clawsweeper/actions/runs/36768428805) |
| automerge-openclaw-openclaw-enterprise-670 | fix failed | Codex /review did not pass after final base synchronization: The latest commit removes a default-off command safety gate and changes the workflow d... | [automerge-openclaw-openclaw-enterprise-670](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-enterprise-670.md) | [36766634334](https://github.com/openclaw/clawsweeper/actions/runs/36766634334) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [issue-openclaw-crabbox-2706](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-2706.md) | blocked |  |  | validation command failed (go test ./internal/providers/all -run Stop.*Target\|Target.*Stop -count=1): go: cannot find GOROOT directory: 'go' binar... | [37288028683](https://github.com/openclaw/clawsweeper/actions/runs/37288028683) |
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

