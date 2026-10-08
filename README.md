# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Oct 8, 2026, 05:02 UTC

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Apply finished | Oct 8, 2026, 04:56 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/37724853317) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Apply idle | Oct 8, 2026, 05:02 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/37730252984) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Oct 7, 2026, 23:56 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/37705046217) |

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

Last source update: Oct 8, 2026, 05:04 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 1573 | 100% |
| Run attempts archived | 4581 | audit |
| Latest successful clusters | 1201 | 76.4% |
| Latest failed clusters | 368 | 23.4% |
| Latest cancelled clusters | 4 | 0.3% |
| Needs-human clusters | 153 | 9.7% |
| Fix actions failed | 35 | 4.0% |
| Fix actions blocked | 190 | 22.0% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 325 | 99.7% |
| Skipped mutation attempts | 1 | 0.3% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 1573 clusters: 404 maintainer action, 443 automation snapshot, 665 intervention needed, 61 no pending action, 0 completed.
- Maintainer first: [openclaw/crabbox](https://github.com/openclaw/crabbox) [cluster:issue-openclaw-crabbox-2717](cluster:issue-openclaw-crabbox-2717) is maintainer_input: For https://github.com/openclaw/crabbox/issues/2717, an operator must provide Server 2025 native/desktop/WSL2 qualification evidence and....
- Intervention first: [openclaw/wacli](https://github.com/openclaw/wacli) [cluster:issue-openclaw-wacli-466](cluster:issue-openclaw-wacli-466) is automation_failed: PR creation remains blocked on implementation in a writable executor and successful required validation. Full behavior must not be claime....
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#164610](https://github.com/openclaw/openclaw/issues/164610) is action_planned: The observed report owns the repair. Reproduce on current main before implementing; do not close or merge from this lane..
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 404 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 443 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 665 | automation failure or blocker recorded |
| No Pending Action | 61 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 256 |
| merge_ready | 46 |
| merge_not_authorized | 102 |
| checks_blocked | 43 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 399 |
| automation_failed | 365 |
| automation_blocked | 300 |
| reviewed_no_action | 61 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/crabbox](https://github.com/openclaw/crabbox) | [cluster:issue-openclaw-crabbox-2717](cluster:issue-openclaw-crabbox-2717) | maintainer_input | For https://github.com/openclaw/crabbox/issues/2717, an operator must provide Server 2025 native/desktop/WSL2 qualification evidence and regional p... | Oct 8, 2026, 04:57 UTC | [issue-openclaw-crabbox-2717](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-2717.md) | [37729658734](https://github.com/openclaw/clawsweeper/actions/runs/37729658734) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | [#1553](https://github.com/openclaw/openclaw-windows-node/issues/1553) | maintainer_input | Quarantine this exact ref for central OpenClaw security handling without public mutation. It does not establish a fix for #1672. | Oct 7, 2026, 23:38 UTC | [issue-openclaw-openclaw-windows-node-1672](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1672.md) | [37703061835](https://github.com/openclaw/clawsweeper/actions/runs/37703061835) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119851](https://github.com/openclaw/openclaw/issues/119851) | maintainer_input | Quarantine this exact ref for central OpenClaw security handling without public mutation or reopening. It does not block the ordinary progress-acco... | Oct 7, 2026, 23:23 UTC | [issue-openclaw-openclaw-166770](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166770.md) | [37696302131](https://github.com/openclaw/clawsweeper/actions/runs/37696302131) |
| [openclaw/notcrawl](https://github.com/openclaw/notcrawl) | [#101](https://github.com/openclaw/notcrawl/issues/101) | maintainer_input | Decide the rich-block Markdown output contract: approve deterministic URL/caption representations for archived bookmarks, embeds, and link previews... | Oct 7, 2026, 21:32 UTC | [issue-openclaw-notcrawl-101](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-notcrawl-101.md) | [37689575633](https://github.com/openclaw/clawsweeper/actions/runs/37689575633) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#3954](https://github.com/steipete/codexbar/issues/3954) | maintainer_input | Quarantine this exact historical integration PR for central OpenClaw security handling. No GitHub mutation or repair is proposed for it. | Oct 7, 2026, 19:02 UTC | [issue-steipete-codexbar-1999](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-1999.md) | [37670772955](https://github.com/openclaw/clawsweeper/actions/runs/37670772955) |
| [openclaw/peekaboo](https://github.com/openclaw/peekaboo) | [cluster:issue-openclaw-peekaboo-881](cluster:issue-openclaw-peekaboo-881) | maintainer_input | For #881, supply the retained, redacted same-session diagnostics requested by steipete: binary --version, bridge status --verbose --json, the Simul... | Oct 7, 2026, 18:42 UTC | [issue-openclaw-peekaboo-881](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-peekaboo-881.md) | [37668230981](https://github.com/openclaw/clawsweeper/actions/runs/37668230981) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#64225](https://github.com/openclaw/openclaw/issues/64225) | maintainer_input | Quarantine only this historical item's security allegations for central OpenClaw handling. No public mutation or reopening is proposed, and this ro... | Oct 7, 2026, 17:03 UTC | [issue-openclaw-openclaw-166651](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166651.md) | [37648334226](https://github.com/openclaw/clawsweeper/actions/runs/37648334226) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | The existing PR review requires an owner decision on the proposed default leaf-yield restriction versus supported external continuations. That subs... | Oct 7, 2026, 14:46 UTC | [self-heal-openclaw-openclaw-118806](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/self-heal-openclaw-openclaw-118806.md) | [37638519646](https://github.com/openclaw/clawsweeper/actions/runs/37638519646) |
| [steipete/oracle](https://github.com/steipete/oracle) | [#258](https://github.com/steipete/oracle/issues/258) | maintainer_input | Apply the supplied security boundary only to this historical item; ordinary rsync compatibility work remains separately scoped. | Oct 7, 2026, 11:32 UTC | [issue-steipete-oracle-550](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-550.md) | [37614266188](https://github.com/openclaw/clawsweeper/actions/runs/37614266188) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#1886](https://github.com/steipete/codexbar/issues/1886) | maintainer_input | Quarantine this historical security-review signal for central OpenClaw security handling without reopening or mutating the item. It does not block... | Oct 7, 2026, 11:14 UTC | [issue-steipete-codexbar-4322](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-4322.md) | [37611453900](https://github.com/openclaw/clawsweeper/actions/runs/37611453900) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | [cluster:issue-openclaw-clawsweeper-1128](cluster:issue-openclaw-clawsweeper-1128) | maintainer_input | Define bounded implementation scopes for https://github.com/openclaw/clawsweeper/issues/1128: the remaining 1,160 strict diagnostics span dashboard... | Oct 7, 2026, 08:07 UTC | [issue-openclaw-clawsweeper-1128](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-clawsweeper-1128.md) | [37591140978](https://github.com/openclaw/clawsweeper/actions/runs/37591140978) |
| [steipete/oracle](https://github.com/steipete/oracle) | [#525](https://github.com/steipete/oracle/issues/525) | maintainer_input | Quarantine this exact historical ref for central OpenClaw security handling without mutation. The independent image-capture repair does not require... | Oct 7, 2026, 06:50 UTC | [issue-steipete-oracle-549](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-549.md) | [37583264579](https://github.com/openclaw/clawsweeper/actions/runs/37583264579) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#166268](https://github.com/openclaw/openclaw/issues/166268) | maintainer_input | Quarantine this historical item for central OpenClaw security handling. The fixture-only repair preserves existing production admission and does no... | Oct 7, 2026, 00:33 UTC | [issue-openclaw-openclaw-166360](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166360.md) | [37551927170](https://github.com/openclaw/clawsweeper/actions/runs/37551927170) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#166048](https://github.com/openclaw/openclaw/issues/166048) | maintainer_input | Quarantine this exact ref for central OpenClaw security handling; no public mutation or security repair is proposed. | Oct 6, 2026, 19:31 UTC | [issue-openclaw-openclaw-166246](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166246.md) | [37513261901](https://github.com/openclaw/clawsweeper/actions/runs/37513261901) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#162087](https://github.com/openclaw/openclaw/issues/162087) | maintainer_input | Route this exact authority-recovery item to central OpenClaw security handling without public mutation. It does not block the unrelated diagnostic... | Oct 6, 2026, 19:15 UTC | [issue-openclaw-openclaw-166242](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166242.md) | [37512638392](https://github.com/openclaw/clawsweeper/actions/runs/37512638392) |

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
| [openclaw/wacli](https://github.com/openclaw/wacli) | [cluster:issue-openclaw-wacli-466](cluster:issue-openclaw-wacli-466) | automation_failed | PR creation remains blocked on implementation in a writable executor and successful required validation. Full behavior must not be claimed fixed be... | Oct 8, 2026, 05:04 UTC | [issue-openclaw-wacli-466](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-wacli-466.md) | [37730219759](https://github.com/openclaw/clawsweeper/actions/runs/37730219759) |
| [openclaw/peekaboo](https://github.com/openclaw/peekaboo) |  | automation_blocked | external base blocker: validation failed only in base-identical files outside the repair delta: scripts/setup-swift-workspace.py, AXorcist | Oct 8, 2026, 04:38 UTC | [issue-openclaw-peekaboo-1005](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-peekaboo-1005.md) | [37728003854](https://github.com/openclaw/clawsweeper/actions/runs/37728003854) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#166952](https://github.com/openclaw/openclaw/pull/166952) | automation_failed | The source finding remains plausible, but the required failing Gateway assertion must be established before any edit. | Oct 8, 2026, 04:34 UTC | [issue-openclaw-openclaw-166952](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166952.md) | [37724736862](https://github.com/openclaw/clawsweeper/actions/runs/37724736862) |
| [steipete/birdclaw](https://github.com/steipete/birdclaw) | [cluster:issue-steipete-birdclaw-233](cluster:issue-steipete-birdclaw-233) | automation_failed | Implementation and PR creation are blocked until a writable executor establishes failing regression coverage, implements the fix, and passes requir... | Oct 8, 2026, 04:08 UTC | [issue-steipete-birdclaw-233](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-birdclaw-233.md) | [37725712537](https://github.com/openclaw/clawsweeper/actions/runs/37725712537) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | [cluster:issue-openclaw-openclaw-windows-node-1643](cluster:issue-openclaw-openclaw-windows-node-1643) | automation_failed | Implementation requires a writable checkout and Windows validation host. Reuse clawsweeper/issue-openclaw-openclaw-windows-node-1643 and any existi... | Oct 8, 2026, 04:02 UTC | [issue-openclaw-openclaw-windows-node-1643](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1643.md) | [37725194223](https://github.com/openclaw/clawsweeper/actions/runs/37725194223) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | [#1642](https://github.com/openclaw/openclaw-windows-node/pull/1642) | automation_failed | The documented alpha opt-in remains disconnected from discovery and version ordering. A focused repair is warranted; leave the issue open. | Oct 8, 2026, 04:01 UTC | [issue-openclaw-openclaw-windows-node-1642](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1642.md) | [37725208078](https://github.com/openclaw/clawsweeper/actions/runs/37725208078) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#166935](https://github.com/openclaw/openclaw/pull/166935) | automation_failed | Local implementation and baseline reproduction require a writable executor with installed dependencies. The narrow fix decision is clear; no mainta... | Oct 8, 2026, 03:59 UTC | [issue-openclaw-openclaw-166935](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166935.md) | [37722635888](https://github.com/openclaw/clawsweeper/actions/runs/37722635888) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-166923](cluster:issue-openclaw-openclaw-166923) | automation_failed | Blocked until the executor reproduces the missing-export failure, applies the narrow repair, validates it, and obtains fresh review in a writable i... | Oct 8, 2026, 03:52 UTC | [issue-openclaw-openclaw-166923](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166923.md) | [37720615221](https://github.com/openclaw/clawsweeper/actions/runs/37720615221) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#166934](https://github.com/openclaw/openclaw/pull/166934) | automation_failed | The inspected source supports the reported fixture mismatch. An executor must verify current main and record the intended failing assertion before... | Oct 8, 2026, 03:42 UTC | [issue-openclaw-openclaw-166934](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166934.md) | [37722447456](https://github.com/openclaw/clawsweeper/actions/runs/37722447456) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#166932](https://github.com/openclaw/openclaw/pull/166932) | automation_failed | A narrow fixture correction is source-reproducible; retain the issue until the executor implements and validates it. | Oct 8, 2026, 03:35 UTC | [issue-openclaw-openclaw-166932](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166932.md) | [37722240557](https://github.com/openclaw/clawsweeper/actions/runs/37722240557) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#166918](https://github.com/openclaw/openclaw/pull/166918) | automation_failed | The source supports a one-file fixture repair. Runtime baseline reproduction and implementation require a writable executor with the pinned package... | Oct 8, 2026, 03:06 UTC | [issue-openclaw-openclaw-166918](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166918.md) | [37719782997](https://github.com/openclaw/clawsweeper/actions/runs/37719782997) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#166899](https://github.com/openclaw/openclaw/pull/166899) | automation_failed | The issue remains a narrow ordinary bug. Preserve the newer-schema refusal while retaining catalog admission and supported-version migration diagno... | Oct 8, 2026, 02:57 UTC | [issue-openclaw-openclaw-166899](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166899.md) | [37717642854](https://github.com/openclaw/clawsweeper/actions/runs/37717642854) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#166896](https://github.com/openclaw/openclaw/pull/166896) | automation_failed | Source evidence supports a bounded test-navigation defect. Establish the required failing real-Gateway browser case on a writable executor before e... | Oct 8, 2026, 02:38 UTC | [issue-openclaw-openclaw-166896](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166896.md) | [37717197473](https://github.com/openclaw/clawsweeper/actions/runs/37717197473) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#166898](https://github.com/openclaw/openclaw/pull/166898) | automation_failed | The source mismatch is clear; implementation must first establish the actual failing test on a supported writable isolated host. | Oct 8, 2026, 02:37 UTC | [issue-openclaw-openclaw-166898](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166898.md) | [37717610496](https://github.com/openclaw/clawsweeper/actions/runs/37717610496) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#166875](https://github.com/openclaw/openclaw/pull/166875) | automation_failed | Fix the existing diagnostic contract. Runtime reproduction, a failing regression, implementation, and validation must occur in a writable executor... | Oct 8, 2026, 02:29 UTC | [issue-openclaw-openclaw-166875](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166875.md) | [37715008161](https://github.com/openclaw/clawsweeper/actions/runs/37715008161) |

#### No Pending Action

| Repository | Item | Lane state | Latest result | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#166232](https://github.com/openclaw/openclaw/pull/166232) | reviewed_no_action | The adopted PR merged before preflight and its fix is present on current main. No branch repair, replacement PR, or GitHub mutation is needed. | Oct 6, 2026, 19:18 UTC | [automerge-openclaw-openclaw-166232](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-166232.md) | [37517074959](https://github.com/openclaw/clawsweeper/actions/runs/37517074959) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#166062](https://github.com/openclaw/openclaw/pull/166062) | reviewed_no_action | The canonical PR merged before preflight completed. Skip the queued repair; no branch update, replacement PR, or GitHub mutation is needed. | Oct 6, 2026, 15:20 UTC | [automerge-openclaw-openclaw-166062](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-166062.md) | [37486071746](https://github.com/openclaw/clawsweeper/actions/runs/37486071746) |
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

#### Completed

| Repository | Item | Lane state | Recorded outcome | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

### Clusters Needing Inspection

| Cluster | State | Reason | Report | Run |
| --- | --- | --- | --- | --- |
| issue-openclaw-crabbox-2717 | needs human | For https://github.com/openclaw/crabbox/issues/2717, an operator must provide Server 2025 native/desktop/WSL2 qualification evidence and regional p... | [issue-openclaw-crabbox-2717](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-2717.md) | [37729658734](https://github.com/openclaw/clawsweeper/actions/runs/37729658734) |
| issue-openclaw-peekaboo-1005 | execute_fix blocked | external base blocker: validation failed only in base-identical files outside the repair delta: scripts/setup-swift-workspace.py, AXorcist | [issue-openclaw-peekaboo-1005](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-peekaboo-1005.md) | [37728003854](https://github.com/openclaw/clawsweeper/actions/runs/37728003854) |
| issue-openclaw-openclaw-166816 | execute_fix blocked | Codex fix worker timed out after 1800000ms | [issue-openclaw-openclaw-166816](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166816.md) | [37703367711](https://github.com/openclaw/clawsweeper/actions/runs/37703367711) |
| issue-openclaw-openclaw-166725 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, tooling [check:chan... | [issue-openclaw-openclaw-166725](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166725.md) | [37683662065](https://github.com/openclaw/clawsweeper/actions/runs/37683662065) |
| issue-openclaw-notcrawl-101 | needs human | Decide the rich-block Markdown output contract: approve deterministic URL/caption representations for archived bookmarks, embeds, and link previews... | [issue-openclaw-notcrawl-101](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-notcrawl-101.md) | [37689575633](https://github.com/openclaw/clawsweeper/actions/runs/37689575633) |
| issue-openclaw-openclaw-166708 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, extensions, extensi... | [issue-openclaw-openclaw-166708](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166708.md) | [37674954566](https://github.com/openclaw/clawsweeper/actions/runs/37674954566) |
| issue-openclaw-peekaboo-881 | needs human | For #881, supply the retained, redacted same-session diagnostics requested by steipete: binary --version, bridge status --verbose --json, the Simul... | [issue-openclaw-peekaboo-881](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-peekaboo-881.md) | [37668230981](https://github.com/openclaw/clawsweeper/actions/runs/37668230981) |
| self-heal-openclaw-openclaw-118806 | needs human | The existing PR review requires an owner decision on the proposed default leaf-yield restriction versus supported external continuations. That subs... | [self-heal-openclaw-openclaw-118806](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/self-heal-openclaw-openclaw-118806.md) | [37638519646](https://github.com/openclaw/clawsweeper/actions/runs/37638519646) |
| issue-openclaw-clawsweeper-1128 | needs human | Define bounded implementation scopes for https://github.com/openclaw/clawsweeper/issues/1128: the remaining 1,160 strict diagnostics span dashboard... | [issue-openclaw-clawsweeper-1128](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-clawsweeper-1128.md) | [37591140978](https://github.com/openclaw/clawsweeper/actions/runs/37591140978) |
| issue-steipete-oracle-548 | execute_fix blocked | validation_script_missing: required pnpm check:changed is unavailable in target checkout | [issue-steipete-oracle-548](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-548.md) | [37569156932](https://github.com/openclaw/clawsweeper/actions/runs/37569156932) |
| issue-openclaw-crabbox-2715 | execute_fix blocked | validation command failed (go test -race -timeout=20m ./internal/cli ./internal/providers/aws -run Test(Status\|ApplyResolvedLeaseConfig\|AWS.*Read... | [issue-openclaw-crabbox-2715](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-2715.md) | [37518975238](https://github.com/openclaw/clawsweeper/actions/runs/37518975238) |
| automerge-openclaw-openclaw-165334 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=all [check:changed] extension-impact... | [automerge-openclaw-openclaw-165334](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-165334.md) | [37509209243](https://github.com/openclaw/clawsweeper/actions/runs/37509209243) |
| issue-openclaw-openclaw-166178 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=extensions, extensionTests [check:ch... | [issue-openclaw-openclaw-166178](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166178.md) | [37497645357](https://github.com/openclaw/clawsweeper/actions/runs/37497645357) |
| issue-steipete-codexbar-4313 | needs human | Clarify which MiMo membership metric is missing, the plan name and CodexBar version, and a redacted expected-versus-current example. Any parser ext... | [issue-steipete-codexbar-4313](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-4313.md) | [37492341333](https://github.com/openclaw/clawsweeper/actions/runs/37492341333) |
| issue-openclaw-openclaw-166134 | execute_fix blocked | Codex fix worker failed: Selected model is at capacity. Please try a different model. | [issue-openclaw-openclaw-166134](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166134.md) | [37478444667](https://github.com/openclaw/clawsweeper/actions/runs/37478444667) |
| automerge-openclaw-openclaw-165825 | repair_contributor_branch blocked | source PR #165825 is paused by clawsweeper:human-review; refusing to mutate the PR branch | [automerge-openclaw-openclaw-165825](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-165825.md) | [37382032454](https://github.com/openclaw/clawsweeper/actions/runs/37382032454) |
| automerge-openclaw-openclaw-165765 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=all [check:changed] extension-impact... | [automerge-openclaw-openclaw-165765](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-165765.md) | [37378020658](https://github.com/openclaw/clawsweeper/actions/runs/37378020658) |
| issue-openclaw-openclaw-165786 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=all [check:changed] extension-impact... | [issue-openclaw-openclaw-165786](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-165786.md) | [37375592898](https://github.com/openclaw/clawsweeper/actions/runs/37375592898) |
| issue-steipete-codexbar-4100 | needs human | #4100: Select one concrete CodexBar improvement from the digest and provide expected behavior and acceptance criteria before requesting implementat... | [issue-steipete-codexbar-4100](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-4100.md) | [37314472474](https://github.com/openclaw/clawsweeper/actions/runs/37314472474) |
| issue-steipete-oracle-531 | execute_fix blocked | validation_script_missing: required pnpm check:changed is unavailable in target checkout | [issue-steipete-oracle-531](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-531.md) | [37262105585](https://github.com/openclaw/clawsweeper/actions/runs/37262105585) |
| issue-steipete-oracle-535 | execute_fix blocked | validation_script_missing: required pnpm check:changed is unavailable in target checkout | [issue-steipete-oracle-535](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-535.md) | [37258335505](https://github.com/openclaw/clawsweeper/actions/runs/37258335505) |
| issue-steipete-codexbar-1711 | needs human | For #1711 implementation only: obtain and assess a failing current-build startup trace correlated with visibility defaults, AppKit/window geometry,... | [issue-steipete-codexbar-1711](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-1711.md) | [37195822261](https://github.com/openclaw/clawsweeper/actions/runs/37195822261) |
| issue-steipete-oracle-534 | execute_fix blocked | validation_script_missing: required pnpm check:changed is unavailable in target checkout | [issue-steipete-oracle-534](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-534.md) | [37195804045](https://github.com/openclaw/clawsweeper/actions/runs/37195804045) |
| issue-openclaw-imsg-328 | needs human | #328: Provide redacted, verified mapping evidence linking AddressBook source directories to primary versus delegated Accounts ownership, and decide... | [issue-openclaw-imsg-328](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-imsg-328.md) | [37148980925](https://github.com/openclaw/clawsweeper/actions/runs/37148980925) |
| issue-openclaw-openclaw-121377 | execute_fix blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [issue-openclaw-openclaw-121377](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121377.md) | [37128264055](https://github.com/openclaw/clawsweeper/actions/runs/37128264055) |
| issue-openclaw-acpx-808 | needs human | For #808, obtain the reporter's resolved cursor-composer command and relevant configuration, acpx/adapter versions, platform, and a redacted verbos... | [issue-openclaw-acpx-808](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-acpx-808.md) | [37113087241](https://github.com/openclaw/clawsweeper/actions/runs/37113087241) |
| issue-openclaw-openclaw-164113 | execute_fix blocked | validation command failed (pnpm check:changed): validation command left 1 background process(es) after exit | [issue-openclaw-openclaw-164113](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164113.md) | [37105575261](https://github.com/openclaw/clawsweeper/actions/runs/37105575261) |
| issue-openclaw-openclaw-windows-node-1145 | needs human | For #1145 only: confirm the original numbered, bulleted, and inline-code messages in a current-main Windows Release build at narrow and resized wid... | [issue-openclaw-openclaw-windows-node-1145](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1145.md) | [37079638113](https://github.com/openclaw/clawsweeper/actions/runs/37079638113) |
| issue-openclaw-openclaw-163568 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [issue-openclaw-openclaw-163568](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-163568.md) | [37019308664](https://github.com/openclaw/clawsweeper/actions/runs/37019308664) |
| issue-openclaw-openclaw-windows-node-1612 | needs human | #1612: Obtain a concrete problem statement or feature request from the author before implementation can be scoped. | [issue-openclaw-openclaw-windows-node-1612](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1612.md) | [37055379739](https://github.com/openclaw/clawsweeper/actions/runs/37055379739) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [issue-openclaw-peekaboo-1005](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-peekaboo-1005.md) | blocked |  |  | external base blocker: validation failed only in base-identical files outside the repair delta: scripts/setup-swift-workspace.py, AXorcist | [37728003854](https://github.com/openclaw/clawsweeper/actions/runs/37728003854) |
| [issue-openclaw-openclaw-166816](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166816.md) | blocked |  |  | Codex fix worker timed out after 1800000ms | [37703367711](https://github.com/openclaw/clawsweeper/actions/runs/37703367711) |
| [issue-openclaw-openclaw-166725](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166725.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, tooling [check:chan... | [37683662065](https://github.com/openclaw/clawsweeper/actions/runs/37683662065) |
| [issue-openclaw-openclaw-166708](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166708.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, extensions, extensi... | [37674954566](https://github.com/openclaw/clawsweeper/actions/runs/37674954566) |
| [issue-steipete-oracle-548](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-548.md) | blocked |  |  | validation_script_missing: required pnpm check:changed is unavailable in target checkout | [37569156932](https://github.com/openclaw/clawsweeper/actions/runs/37569156932) |
| [issue-openclaw-crabbox-2715](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-2715.md) | blocked |  |  | validation command failed (go test -race -timeout=20m ./internal/cli ./internal/providers/aws -run Test(Status\|ApplyResolvedLeaseConfig\|AWS.*Read... | [37518975238](https://github.com/openclaw/clawsweeper/actions/runs/37518975238) |
| [automerge-openclaw-openclaw-165334](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-165334.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=all [check:changed] extension-impact... | [37509209243](https://github.com/openclaw/clawsweeper/actions/runs/37509209243) |
| [automerge-openclaw-openclaw-165334](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-165334.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=all [check:changed] extension-impact... | [37509209243](https://github.com/openclaw/clawsweeper/actions/runs/37509209243) |
| [issue-openclaw-openclaw-166178](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166178.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=extensions, extensionTests [check:ch... | [37497645357](https://github.com/openclaw/clawsweeper/actions/runs/37497645357) |
| [issue-openclaw-openclaw-166134](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166134.md) | blocked |  |  | Codex fix worker failed: Selected model is at capacity. Please try a different model. | [37478444667](https://github.com/openclaw/clawsweeper/actions/runs/37478444667) |
| [automerge-openclaw-openclaw-165825](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-165825.md) | blocked | [#165825](https://github.com/openclaw/openclaw/pull/165825) |  | source PR #165825 is paused by clawsweeper:human-review; refusing to mutate the PR branch | [37382032454](https://github.com/openclaw/clawsweeper/actions/runs/37382032454) |
| [automerge-openclaw-openclaw-165765](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-165765.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=all [check:changed] extension-impact... | [37378020658](https://github.com/openclaw/clawsweeper/actions/runs/37378020658) |
| [automerge-openclaw-openclaw-165765](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-165765.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=all [check:changed] extension-impact... | [37378020658](https://github.com/openclaw/clawsweeper/actions/runs/37378020658) |
| [issue-openclaw-openclaw-165786](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-165786.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=all [check:changed] extension-impact... | [37375592898](https://github.com/openclaw/clawsweeper/actions/runs/37375592898) |
| [issue-steipete-oracle-531](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-531.md) | blocked |  |  | validation_script_missing: required pnpm check:changed is unavailable in target checkout | [37262105585](https://github.com/openclaw/clawsweeper/actions/runs/37262105585) |
| [issue-steipete-oracle-535](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-535.md) | blocked |  |  | validation_script_missing: required pnpm check:changed is unavailable in target checkout | [37258335505](https://github.com/openclaw/clawsweeper/actions/runs/37258335505) |
| [issue-steipete-oracle-534](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-534.md) | blocked |  |  | validation_script_missing: required pnpm check:changed is unavailable in target checkout | [37195804045](https://github.com/openclaw/clawsweeper/actions/runs/37195804045) |
| [issue-openclaw-openclaw-121377](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-121377.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [37128264055](https://github.com/openclaw/clawsweeper/actions/runs/37128264055) |
| [issue-openclaw-openclaw-164113](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164113.md) | blocked |  |  | validation command failed (pnpm check:changed): validation command left 1 background process(es) after exit | [37105575261](https://github.com/openclaw/clawsweeper/actions/runs/37105575261) |
| [issue-openclaw-openclaw-163568](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-163568.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [37019308664](https://github.com/openclaw/clawsweeper/actions/runs/37019308664) |
| [automerge-openclaw-openclaw-119975](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119975.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [36944703174](https://github.com/openclaw/clawsweeper/actions/runs/36944703174) |
| [automerge-openclaw-openclaw-119975](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119975.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [36944703174](https://github.com/openclaw/clawsweeper/actions/runs/36944703174) |
| [issue-openclaw-openclaw-162649](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-162649.md) | blocked |  |  | validation command failed (pnpm check:changed): Error: ERR_PNPM_BAD_CONFIG_DEP × resolve package manager dependencies ╰─▶ Failed to resolve config... | [36856934103](https://github.com/openclaw/clawsweeper/actions/runs/36856934103) |
| [issue-openclaw-openclaw-windows-node-1571](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1571.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [36849403579](https://github.com/openclaw/clawsweeper/actions/runs/36849403579) |
| [issue-openclaw-crabbox-2627](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-2627.md) | blocked |  |  | validation command failed (go test ./internal/cli -run ^TestTypeRFBText -count=1): go: cannot find GOROOT directory: 'go' binary is trimmed and GOR... | [36768428805](https://github.com/openclaw/clawsweeper/actions/runs/36768428805) |

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

