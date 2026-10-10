# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Oct 10, 2026, 20:47 UTC

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Planning review | Oct 10, 2026, 20:44 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/38084860868) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Apply idle | Oct 10, 2026, 20:47 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/38085025402) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Oct 10, 2026, 20:44 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/38084857202) |

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

Last source update: Oct 10, 2026, 20:48 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 1655 | 100% |
| Run attempts archived | 4950 | audit |
| Latest successful clusters | 1240 | 74.9% |
| Latest failed clusters | 411 | 24.8% |
| Latest cancelled clusters | 4 | 0.2% |
| Needs-human clusters | 155 | 9.4% |
| Fix actions failed | 38 | 4.2% |
| Fix actions blocked | 206 | 22.6% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 326 | 99.7% |
| Skipped mutation attempts | 1 | 0.3% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 1655 clusters: 419 maintainer action, 451 automation snapshot, 722 intervention needed, 63 no pending action, 0 completed.
- Maintainer first: [openclaw/libterminal](https://github.com/openclaw/libterminal) [cluster:issue-openclaw-libterminal-41](cluster:issue-openclaw-libterminal-41) is maintainer_input: For implementation of #41, verify both explicit upstream publication gates and identify an exact qualifying stable wrapper before resumin....
- Intervention first: [openclaw/esp-openclaw-node](https://github.com/openclaw/esp-openclaw-node) [issue-openclaw-esp-openclaw-node-67](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-esp-openclaw-node-67.md) is automation_blocked: No additional PR is justified. Current main contains #68's confirmed handshake-deadline repair. The remaining allocation failure and rese....
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#168585](https://github.com/openclaw/openclaw/pull/168585) is action_planned: A focused bug repair is authorized. Implementation must first demonstrate the baseline failure, then validate the repaired owner before o....
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 419 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 451 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 722 | automation failure or blocker recorded |
| No Pending Action | 63 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 269 |
| merge_ready | 47 |
| merge_not_authorized | 103 |
| checks_blocked | 43 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 407 |
| automation_failed | 405 |
| automation_blocked | 317 |
| reviewed_no_action | 63 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/libterminal](https://github.com/openclaw/libterminal) | [cluster:issue-openclaw-libterminal-41](cluster:issue-openclaw-libterminal-41) | maintainer_input | For implementation of #41, verify both explicit upstream publication gates and identify an exact qualifying stable wrapper before resuming.; Hydrat... | Oct 10, 2026, 20:38 UTC | [issue-openclaw-libterminal-41](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-libterminal-41.md) | [38084364100](https://github.com/openclaw/clawsweeper/actions/runs/38084364100) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#83330](https://github.com/openclaw/openclaw/issues/83330) | maintainer_input | Leave any security determination to central OpenClaw handling. Do not mutate this closed reference or make the Configure fix depend on it. | Oct 10, 2026, 20:24 UTC | [issue-openclaw-openclaw-83354](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-83354.md) | [38081490430](https://github.com/openclaw/clawsweeper/actions/runs/38081490430) |
| [openclaw/openclaw-windows-packaging](https://github.com/openclaw/openclaw-windows-packaging) | [#160826](https://github.com/openclaw/openclaw-windows-packaging/issues/160826) | maintainer_input | #160826: Resolve whether this linked context belongs to openclaw/openclaw rather than openclaw/openclaw-windows-packaging and hydrate the actual it... | Oct 10, 2026, 19:53 UTC | [issue-openclaw-openclaw-windows-packaging-167](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-packaging-167.md) | [38081287308](https://github.com/openclaw/clawsweeper/actions/runs/38081287308) |
| [openclaw/agent-skills](https://github.com/openclaw/agent-skills) | [#217](https://github.com/openclaw/agent-skills/issues/217) | maintainer_input | #217: Resolve the recorded memory and temporary-storage resource contract, including spool lifetime and cleanup during retries and cancellation, be... | Oct 10, 2026, 17:24 UTC | [issue-openclaw-agent-skills-217](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-agent-skills-217.md) | [38071364533](https://github.com/openclaw/clawsweeper/actions/runs/38071364533) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#162398](https://github.com/openclaw/openclaw/issues/162398) | maintainer_input | Quarantine this exact linked PR for central OpenClaw security handling without treating the canonical bug as security work. | Oct 10, 2026, 07:12 UTC | [issue-openclaw-openclaw-168231](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168231.md) | [38028468040](https://github.com/openclaw/clawsweeper/actions/runs/38028468040) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#89526](https://github.com/openclaw/openclaw/issues/89526) | maintainer_input | Quarantine this linked item for central OpenClaw security handling without expanding or blocking the independent test-only fix. | Oct 10, 2026, 06:22 UTC | [issue-openclaw-openclaw-168193](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168193.md) | [38024597472](https://github.com/openclaw/clawsweeper/actions/runs/38024597472) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#166020](https://github.com/openclaw/openclaw/issues/166020) | maintainer_input | Quarantine this exact item's integrity-boundary proposals for central OpenClaw security handling. This is not a finding of a confirmed vulnerabilit... | Oct 10, 2026, 04:36 UTC | [issue-openclaw-openclaw-168130](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168130.md) | [38019637264](https://github.com/openclaw/clawsweeper/actions/runs/38019637264) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#168126](https://github.com/openclaw/openclaw/pull/168126) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Oct 10, 2026, 03:05 UTC | [issue-openclaw-openclaw-168089](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168089.md) | [38016018950](https://github.com/openclaw/clawsweeper/actions/runs/38016018950) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#53187](https://github.com/openclaw/openclaw/issues/53187) | maintainer_input | Quarantine this exact historical reference for central security handling; recommend no public mutation or reopening. | Oct 10, 2026, 02:50 UTC | [issue-openclaw-openclaw-168066](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168066.md) | [38018210971](https://github.com/openclaw/clawsweeper/actions/runs/38018210971) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#166284](https://github.com/openclaw/openclaw/pull/166284) | merge_not_authorized | job does not allow merge | Oct 10, 2026, 02:17 UTC | [automerge-openclaw-openclaw-166284](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-166284.md) | [38014116685](https://github.com/openclaw/clawsweeper/actions/runs/38014116685) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#77361](https://github.com/openclaw/openclaw/issues/77361) | maintainer_input | Route this exact item to central OpenClaw security handling without mutation. Its quarantine does not block an independent current-main label-refre... | Oct 10, 2026, 01:09 UTC | [issue-openclaw-openclaw-77343](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-77343.md) | [38006599572](https://github.com/openclaw/clawsweeper/actions/runs/38006599572) |
| [openclaw/gogcli](https://github.com/openclaw/gogcli) | [#639](https://github.com/openclaw/gogcli/issues/639) | maintainer_input | Quarantine this exact reference for central OpenClaw security handling while continuing the independent documentation repair. | Oct 9, 2026, 23:29 UTC | [issue-openclaw-gogcli-1194](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-1194.md) | [38004337798](https://github.com/openclaw/clawsweeper/actions/runs/38004337798) |
| [openclaw/wacli](https://github.com/openclaw/wacli) | [cluster:issue-openclaw-wacli-365](cluster:issue-openclaw-wacli-365) | maintainer_input | #365: Obtain a redacted current-main history sample and correlated unhandled-payload/decryption diagnostics from an affected all-empty group, suffi... | Oct 9, 2026, 20:34 UTC | [issue-openclaw-wacli-365](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-wacli-365.md) | [37987359693](https://github.com/openclaw/clawsweeper/actions/runs/37987359693) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#138707](https://github.com/openclaw/openclaw/issues/138707) | maintainer_input | Quarantine this exact reference for central OpenClaw security handling without public mutation. The ordinary prompt-refresh repair does not depend... | Oct 9, 2026, 12:11 UTC | [issue-openclaw-openclaw-167799](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-167799.md) | [37927135981](https://github.com/openclaw/clawsweeper/actions/runs/37927135981) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#4388](https://github.com/steipete/codexbar/issues/4388) | maintainer_input | #4388: Obtain a harness URL or exact product name, the desired metrics, and a redacted example of data missing from the existing DeepSeek provider. | Oct 9, 2026, 10:03 UTC | [issue-steipete-codexbar-4388](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-4388.md) | [37914821183](https://github.com/openclaw/clawsweeper/actions/runs/37914821183) |

#### Automation Snapshot

| Repository | Item | Lane state | Recorded status | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#168585](https://github.com/openclaw/openclaw/pull/168585) | action_planned | A focused bug repair is authorized. Implementation must first demonstrate the baseline failure, then validate the repaired owner before opening or... | Oct 10, 2026, 20:33 UTC | [issue-openclaw-openclaw-168585](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168585.md) | [38084025709](https://github.com/openclaw/clawsweeper/actions/runs/38084025709) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#167982](https://github.com/openclaw/openclaw/pull/167982) | action_planned | A focused bug-only repair is supported. Establish a failing production-startup-to-scoped-dispatch regression before editing; stop if it does not re... | Oct 10, 2026, 13:56 UTC | [issue-openclaw-openclaw-167982](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-167982.md) | [38057413815](https://github.com/openclaw/clawsweeper/actions/runs/38057413815) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#168412](https://github.com/openclaw/openclaw/pull/168412) | action_planned | A focused repair at RootSidebarShell.contentCard fits established behavior. Proceed only after reproducing on current main and checking for an exis... | Oct 10, 2026, 11:56 UTC | [issue-openclaw-openclaw-168412](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168412.md) | [38049964038](https://github.com/openclaw/clawsweeper/actions/runs/38049964038) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#168362](https://github.com/openclaw/openclaw/pull/168362) | action_planned | A narrow reporting fix is appropriate. Keep the issue open; closure and merge are prohibited by the job. | Oct 10, 2026, 11:31 UTC | [issue-openclaw-openclaw-168362](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168362.md) | [38048500570](https://github.com/openclaw/clawsweeper/actions/runs/38048500570) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#168306](https://github.com/openclaw/openclaw/pull/168306) | action_planned | A focused prompt repair is appropriate. The reported CLI recovery behavior remains outside this implementation; keep the issue open and use a Relat... | Oct 10, 2026, 08:39 UTC | [issue-openclaw-openclaw-168306](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168306.md) | [38038457560](https://github.com/openclaw/clawsweeper/actions/runs/38038457560) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#168122](https://github.com/openclaw/openclaw/pull/168122) | action_planned | A focused bug-fix plan is justified. Establish the failing regression on the executor's latest main before implementing or publishing; stop if it c... | Oct 10, 2026, 05:34 UTC | [issue-openclaw-openclaw-168122](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168122.md) | [38027769255](https://github.com/openclaw/clawsweeper/actions/runs/38027769255) |
| [steipete/birdclaw](https://github.com/steipete/birdclaw) | [#233](https://github.com/steipete/birdclaw/pull/233) | action_planned | The source-proven ordinary bug has a bounded repair path. Keep #233 as canonical and implement through the designated branch after checking for ret... | Oct 10, 2026, 03:42 UTC | [issue-steipete-birdclaw-233](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-birdclaw-233.md) | [38021340007](https://github.com/openclaw/clawsweeper/actions/runs/38021340007) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#168081](https://github.com/openclaw/openclaw/issues/168081) | action_planned | Repair the advertised payload and configuration guidance through existing prompt and account owners. Recheck for the reporter's promised PR before... | Oct 10, 2026, 02:49 UTC | [issue-openclaw-openclaw-168081](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168081.md) | [38018208860](https://github.com/openclaw/clawsweeper/actions/runs/38018208860) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#164610](https://github.com/openclaw/openclaw/issues/164610) | action_planned | The observed report owns the repair. Reproduce on current main before implementing; do not close or merge from this lane. | Oct 4, 2026, 01:42 UTC | [issue-openclaw-openclaw-164610](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164610.md) | [37168641217](https://github.com/openclaw/clawsweeper/actions/runs/37168641217) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#164644](https://github.com/openclaw/openclaw/pull/164644) | action_planned | A narrow repair restores existing documented routing without adding options, changing policy, or altering screenshot capture. Full validation and h... | Oct 4, 2026, 01:41 UTC | [issue-openclaw-openclaw-164644](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164644.md) | [37168639770](https://github.com/openclaw/clawsweeper/actions/runs/37168639770) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#164611](https://github.com/openclaw/openclaw/pull/164611) | action_planned | Prepare one replacement-delivery custody fix on the designated branch, conditional on reproduction against confirmed current main. | Oct 4, 2026, 00:14 UTC | [issue-openclaw-openclaw-164611](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164611.md) | [37164133328](https://github.com/openclaw/clawsweeper/actions/runs/37164133328) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#164557](https://github.com/openclaw/openclaw/issues/164557) | action_planned | A focused presentation fix is supported by the existing contract. Merge and closure are prohibited by this job. | Oct 3, 2026, 23:20 UTC | [issue-openclaw-openclaw-164557](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164557.md) | [37161282012](https://github.com/openclaw/clawsweeper/actions/runs/37161282012) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#164470](https://github.com/openclaw/openclaw/pull/164470) | action_planned | The reported failure has a narrow existing-behavior repair path. Reproduce on current main before editing, then bind deferred tool execution to the... | Oct 3, 2026, 20:43 UTC | [issue-openclaw-openclaw-164470](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164470.md) | [37152362213](https://github.com/openclaw/clawsweeper/actions/runs/37152362213) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#164499](https://github.com/openclaw/openclaw/pull/164499) | action_planned | A focused cleanup-owner repair is appropriate. Establish executable failure and inspect the pinned native ownership contract before implementation;... | Oct 3, 2026, 20:43 UTC | [issue-openclaw-openclaw-164499](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164499.md) | [37152360230](https://github.com/openclaw/clawsweeper/actions/runs/37152360230) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#164346](https://github.com/openclaw/openclaw/pull/164346) | action_planned | Repair the page's existing selected-agent catalog lifecycle while preserving the all-agent inventory and open editor. Establish the required mounte... | Oct 3, 2026, 18:33 UTC | [issue-openclaw-openclaw-164346](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-164346.md) | [37135186889](https://github.com/openclaw/clawsweeper/actions/runs/37135186889) |

#### Intervention Needed

| Repository | Item | Lane state | Recorded blocker | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/esp-openclaw-node](https://github.com/openclaw/esp-openclaw-node) |  | automation_blocked | No additional PR is justified. Current main contains #68's confirmed handshake-deadline repair. The remaining allocation failure and reset-free rec... | Oct 10, 2026, 20:48 UTC | [issue-openclaw-esp-openclaw-node-67](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-esp-openclaw-node-67.md) | [38084990928](https://github.com/openclaw/clawsweeper/actions/runs/38084990928) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#83342](https://github.com/openclaw/openclaw/pull/83342) | automation_failed | No open viable fix PR is hydrated. Reproduce on reconciled current main before implementing the remaining channel projection repair. | Oct 10, 2026, 20:43 UTC | [issue-openclaw-openclaw-83342](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-83342.md) | [38077249834](https://github.com/openclaw/clawsweeper/actions/runs/38077249834) |
| [openclaw/peekaboo](https://github.com/openclaw/peekaboo) |  | automation_blocked | #922 remains valid on main e59c220d6ea74201028e691b84eb26501ffc21ed, but no demonstrated native mechanism satisfies its single-pair receiver criter... | Oct 10, 2026, 19:54 UTC | [issue-openclaw-peekaboo-922](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-peekaboo-922.md) | [38081394241](https://github.com/openclaw/clawsweeper/actions/runs/38081394241) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=extensions, extensionTests, docs, to... | Oct 10, 2026, 19:05 UTC | [issue-openclaw-openclaw-168580](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168580.md) | [38074240401](https://github.com/openclaw/clawsweeper/actions/runs/38074240401) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | Oct 10, 2026, 18:35 UTC | [automerge-openclaw-openclaw-166269](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-166269.md) | [38073716254](https://github.com/openclaw/clawsweeper/actions/runs/38073716254) |
| [openclaw/photoscrawl](https://github.com/openclaw/photoscrawl) | [cluster:issue-openclaw-photoscrawl-30](cluster:issue-openclaw-photoscrawl-30) | automation_failed | A lower-allocation recovery method requires synthetic preservation and allocation proof. This environment cannot implement or qualify it. | Oct 10, 2026, 18:34 UTC | [issue-openclaw-photoscrawl-30](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-photoscrawl-30.md) | [38076137542](https://github.com/openclaw/clawsweeper/actions/runs/38076137542) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=extensions, extensionTests, tooling... | Oct 10, 2026, 18:17 UTC | [issue-openclaw-openclaw-168540](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168540.md) | [38070356185](https://github.com/openclaw/clawsweeper/actions/runs/38070356185) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, scripts, tooling [c... | Oct 10, 2026, 15:14 UTC | [issue-openclaw-openclaw-168456](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168456.md) | [38056748511](https://github.com/openclaw/clawsweeper/actions/runs/38056748511) |
| [openclaw/crabbox](https://github.com/openclaw/crabbox) | [#2708](https://github.com/openclaw/crabbox/issues/2708) | automation_blocked | Resume implementation when Blacksmith provides a supported Testbox-to-workflow binding available before worker registration and preserved through c... | Oct 10, 2026, 14:48 UTC | [issue-openclaw-crabbox-2708](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-2708.md) | [38060839938](https://github.com/openclaw/clawsweeper/actions/runs/38060839938) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, tooling [check:chan... | Oct 10, 2026, 14:37 UTC | [issue-openclaw-openclaw-168450](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168450.md) | [38053844155](https://github.com/openclaw/clawsweeper/actions/runs/38053844155) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | Oct 10, 2026, 12:15 UTC | [automerge-openclaw-openclaw-168414](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-168414.md) | [38048580561](https://github.com/openclaw/clawsweeper/actions/runs/38048580561) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, extensions, extensi... | Oct 10, 2026, 11:18 UTC | [issue-openclaw-openclaw-168366](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168366.md) | [38041745857](https://github.com/openclaw/clawsweeper/actions/runs/38041745857) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | Oct 10, 2026, 06:43 UTC | [issue-openclaw-openclaw-168207](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168207.md) | [38026288974](https://github.com/openclaw/clawsweeper/actions/runs/38026288974) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | Oct 10, 2026, 05:04 UTC | [issue-openclaw-openclaw-168131](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168131.md) | [38019588946](https://github.com/openclaw/clawsweeper/actions/runs/38019588946) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=extensions, extensionTests, bundledC... | Oct 10, 2026, 04:54 UTC | [issue-openclaw-openclaw-168174](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168174.md) | [38023300950](https://github.com/openclaw/clawsweeper/actions/runs/38023300950) |

#### No Pending Action

| Repository | Item | Lane state | Latest result | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Already fixed in the supplied main checkout. Keep the issue closed; no implementation PR is needed. | Oct 10, 2026, 01:12 UTC | [issue-openclaw-openclaw-167923](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-167923.md) | [38012082137](https://github.com/openclaw/clawsweeper/actions/runs/38012082137) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#167129](https://github.com/openclaw/openclaw/issues/167129) | reviewed_no_action | Confirmed the stale documentation reference on main at 36bd762422b348173b951819eef29e7fb2d307c3. Existing PR #167158 owns the narrow fix and is und... | Oct 8, 2026, 10:36 UTC | [issue-openclaw-openclaw-167129](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-167129.md) | [37764011054](https://github.com/openclaw/clawsweeper/actions/runs/37764011054) |
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

#### Completed

| Repository | Item | Lane state | Recorded outcome | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

### Clusters Needing Inspection

| Cluster | State | Reason | Report | Run |
| --- | --- | --- | --- | --- |
| issue-openclaw-libterminal-41 | needs human | For implementation of #41, verify both explicit upstream publication gates and identify an exact qualifying stable wrapper before resuming.; Hydrat... | [issue-openclaw-libterminal-41](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-libterminal-41.md) | [38084364100](https://github.com/openclaw/clawsweeper/actions/runs/38084364100) |
| issue-openclaw-openclaw-windows-packaging-167 | needs human | #160826: Resolve whether this linked context belongs to openclaw/openclaw rather than openclaw/openclaw-windows-packaging and hydrate the actual it... | [issue-openclaw-openclaw-windows-packaging-167](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-packaging-167.md) | [38081287308](https://github.com/openclaw/clawsweeper/actions/runs/38081287308) |
| issue-openclaw-openclaw-168580 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=extensions, extensionTests, docs, to... | [issue-openclaw-openclaw-168580](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168580.md) | [38074240401](https://github.com/openclaw/clawsweeper/actions/runs/38074240401) |
| automerge-openclaw-openclaw-166269 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [automerge-openclaw-openclaw-166269](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-166269.md) | [38073716254](https://github.com/openclaw/clawsweeper/actions/runs/38073716254) |
| issue-openclaw-openclaw-168540 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=extensions, extensionTests, tooling... | [issue-openclaw-openclaw-168540](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168540.md) | [38070356185](https://github.com/openclaw/clawsweeper/actions/runs/38070356185) |
| issue-openclaw-agent-skills-217 | needs human | #217: Resolve the recorded memory and temporary-storage resource contract, including spool lifetime and cleanup during retries and cancellation, be... | [issue-openclaw-agent-skills-217](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-agent-skills-217.md) | [38071364533](https://github.com/openclaw/clawsweeper/actions/runs/38071364533) |
| issue-openclaw-openclaw-168456 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, scripts, tooling [c... | [issue-openclaw-openclaw-168456](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168456.md) | [38056748511](https://github.com/openclaw/clawsweeper/actions/runs/38056748511) |
| issue-openclaw-openclaw-168450 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, tooling [check:chan... | [issue-openclaw-openclaw-168450](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168450.md) | [38053844155](https://github.com/openclaw/clawsweeper/actions/runs/38053844155) |
| automerge-openclaw-openclaw-168414 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [automerge-openclaw-openclaw-168414](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-168414.md) | [38048580561](https://github.com/openclaw/clawsweeper/actions/runs/38048580561) |
| issue-openclaw-openclaw-168366 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, extensions, extensi... | [issue-openclaw-openclaw-168366](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168366.md) | [38041745857](https://github.com/openclaw/clawsweeper/actions/runs/38041745857) |
| issue-openclaw-openclaw-168231 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, extensions, extensi... | [issue-openclaw-openclaw-168231](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168231.md) | [38028468040](https://github.com/openclaw/clawsweeper/actions/runs/38028468040) |
| issue-openclaw-openclaw-168207 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [issue-openclaw-openclaw-168207](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168207.md) | [38026288974](https://github.com/openclaw/clawsweeper/actions/runs/38026288974) |
| issue-openclaw-openclaw-168193 | execute_fix blocked | validation command failed (pnpm check:changed): validation command left 1 background process(es) after exit | [issue-openclaw-openclaw-168193](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168193.md) | [38024597472](https://github.com/openclaw/clawsweeper/actions/runs/38024597472) |
| issue-openclaw-openclaw-168131 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [issue-openclaw-openclaw-168131](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168131.md) | [38019588946](https://github.com/openclaw/clawsweeper/actions/runs/38019588946) |
| issue-openclaw-openclaw-168174 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=extensions, extensionTests, bundledC... | [issue-openclaw-openclaw-168174](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168174.md) | [38023300950](https://github.com/openclaw/clawsweeper/actions/runs/38023300950) |
| issue-openclaw-openclaw-168130 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [issue-openclaw-openclaw-168130](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168130.md) | [38019637264](https://github.com/openclaw/clawsweeper/actions/runs/38019637264) |
| issue-openclaw-openclaw-168160 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [issue-openclaw-openclaw-168160](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168160.md) | [38022020930](https://github.com/openclaw/clawsweeper/actions/runs/38022020930) |
| automerge-openclaw-openclaw-166284 | merge_canonical blocked | job does not allow merge | [automerge-openclaw-openclaw-166284](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-166284.md) | [38014116685](https://github.com/openclaw/clawsweeper/actions/runs/38014116685) |
| issue-openclaw-wacli-365 | needs human | #365: Obtain a redacted current-main history sample and correlated unhandled-payload/decryption diagnostics from an affected all-empty group, suffi... | [issue-openclaw-wacli-365](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-wacli-365.md) | [37987359693](https://github.com/openclaw/clawsweeper/actions/runs/37987359693) |
| issue-steipete-oracle-553 | execute_fix blocked | validation_script_missing: required pnpm check:changed is unavailable in target checkout | [issue-steipete-oracle-553](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-553.md) | [37962115193](https://github.com/openclaw/clawsweeper/actions/runs/37962115193) |
| issue-steipete-codexbar-4388 | needs human | #4388: Obtain a harness URL or exact product name, the desired metrics, and a redacted example of data missing from the existing DeepSeek provider. | [issue-steipete-codexbar-4388](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-4388.md) | [37914821183](https://github.com/openclaw/clawsweeper/actions/runs/37914821183) |
| automerge-openclaw-openclaw-166993 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=apps, docs [check:changed] apps/andr... | [automerge-openclaw-openclaw-166993](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-166993.md) | [37820829167](https://github.com/openclaw/clawsweeper/actions/runs/37820829167) |
| issue-steipete-codexbar-4362 | needs human | #4362: Select one upstream change to adopt and specify the CodexBar failure or expected behavior. The digest alone cannot define an implementation.... | [issue-steipete-codexbar-4362](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-4362.md) | [37757246728](https://github.com/openclaw/clawsweeper/actions/runs/37757246728) |
| issue-openclaw-peekaboo-1005 | execute_fix blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [issue-openclaw-peekaboo-1005](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-peekaboo-1005.md) | [37732739545](https://github.com/openclaw/clawsweeper/actions/runs/37732739545) |
| issue-openclaw-openclaw-166816 | execute_fix blocked | Codex fix worker timed out after 1800000ms | [issue-openclaw-openclaw-166816](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166816.md) | [37703367711](https://github.com/openclaw/clawsweeper/actions/runs/37703367711) |
| issue-openclaw-openclaw-166725 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, tooling [check:chan... | [issue-openclaw-openclaw-166725](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166725.md) | [37683662065](https://github.com/openclaw/clawsweeper/actions/runs/37683662065) |
| issue-openclaw-openclaw-166708 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, extensions, extensi... | [issue-openclaw-openclaw-166708](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166708.md) | [37674954566](https://github.com/openclaw/clawsweeper/actions/runs/37674954566) |
| issue-openclaw-peekaboo-881 | needs human | For #881, supply the retained, redacted same-session diagnostics requested by steipete: binary --version, bridge status --verbose --json, the Simul... | [issue-openclaw-peekaboo-881](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-peekaboo-881.md) | [37668230981](https://github.com/openclaw/clawsweeper/actions/runs/37668230981) |
| self-heal-openclaw-openclaw-118806 | needs human | The existing PR review requires an owner decision on the proposed default leaf-yield restriction versus supported external continuations. That subs... | [self-heal-openclaw-openclaw-118806](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/self-heal-openclaw-openclaw-118806.md) | [37638519646](https://github.com/openclaw/clawsweeper/actions/runs/37638519646) |
| issue-openclaw-clawsweeper-1128 | needs human | Define bounded implementation scopes for https://github.com/openclaw/clawsweeper/issues/1128: the remaining 1,160 strict diagnostics span dashboard... | [issue-openclaw-clawsweeper-1128](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-clawsweeper-1128.md) | [37591140978](https://github.com/openclaw/clawsweeper/actions/runs/37591140978) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [issue-openclaw-openclaw-168580](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168580.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=extensions, extensionTests, docs, to... | [38074240401](https://github.com/openclaw/clawsweeper/actions/runs/38074240401) |
| [automerge-openclaw-openclaw-166269](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-166269.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [38073716254](https://github.com/openclaw/clawsweeper/actions/runs/38073716254) |
| [automerge-openclaw-openclaw-166269](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-166269.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [38073716254](https://github.com/openclaw/clawsweeper/actions/runs/38073716254) |
| [issue-openclaw-openclaw-168540](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168540.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=extensions, extensionTests, tooling... | [38070356185](https://github.com/openclaw/clawsweeper/actions/runs/38070356185) |
| [issue-openclaw-openclaw-168456](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168456.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, scripts, tooling [c... | [38056748511](https://github.com/openclaw/clawsweeper/actions/runs/38056748511) |
| [issue-openclaw-openclaw-168450](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168450.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, tooling [check:chan... | [38053844155](https://github.com/openclaw/clawsweeper/actions/runs/38053844155) |
| [automerge-openclaw-openclaw-168414](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-168414.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [38048580561](https://github.com/openclaw/clawsweeper/actions/runs/38048580561) |
| [automerge-openclaw-openclaw-168414](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-168414.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [38048580561](https://github.com/openclaw/clawsweeper/actions/runs/38048580561) |
| [issue-openclaw-openclaw-168366](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168366.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, extensions, extensi... | [38041745857](https://github.com/openclaw/clawsweeper/actions/runs/38041745857) |
| [issue-openclaw-openclaw-168231](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168231.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, extensions, extensi... | [38028468040](https://github.com/openclaw/clawsweeper/actions/runs/38028468040) |
| [issue-openclaw-openclaw-168207](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168207.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [38026288974](https://github.com/openclaw/clawsweeper/actions/runs/38026288974) |
| [issue-openclaw-openclaw-168193](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168193.md) | blocked |  |  | validation command failed (pnpm check:changed): validation command left 1 background process(es) after exit | [38024597472](https://github.com/openclaw/clawsweeper/actions/runs/38024597472) |
| [issue-openclaw-openclaw-168131](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168131.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [38019588946](https://github.com/openclaw/clawsweeper/actions/runs/38019588946) |
| [issue-openclaw-openclaw-168174](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168174.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=extensions, extensionTests, bundledC... | [38023300950](https://github.com/openclaw/clawsweeper/actions/runs/38023300950) |
| [issue-openclaw-openclaw-168130](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168130.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [38019637264](https://github.com/openclaw/clawsweeper/actions/runs/38019637264) |
| [issue-openclaw-openclaw-168160](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168160.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [38022020930](https://github.com/openclaw/clawsweeper/actions/runs/38022020930) |
| [issue-steipete-oracle-553](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-553.md) | blocked |  |  | validation_script_missing: required pnpm check:changed is unavailable in target checkout | [37962115193](https://github.com/openclaw/clawsweeper/actions/runs/37962115193) |
| [automerge-openclaw-openclaw-166993](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-166993.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=apps, docs [check:changed] apps/andr... | [37820829167](https://github.com/openclaw/clawsweeper/actions/runs/37820829167) |
| [automerge-openclaw-openclaw-166993](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-166993.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=apps, docs [check:changed] apps/andr... | [37820829167](https://github.com/openclaw/clawsweeper/actions/runs/37820829167) |
| [issue-openclaw-peekaboo-1005](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-peekaboo-1005.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [37732739545](https://github.com/openclaw/clawsweeper/actions/runs/37732739545) |
| [issue-openclaw-openclaw-166816](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166816.md) | blocked |  |  | Codex fix worker timed out after 1800000ms | [37703367711](https://github.com/openclaw/clawsweeper/actions/runs/37703367711) |
| [issue-openclaw-openclaw-166725](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166725.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, tooling [check:chan... | [37683662065](https://github.com/openclaw/clawsweeper/actions/runs/37683662065) |
| [issue-openclaw-openclaw-166708](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-166708.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, extensions, extensi... | [37674954566](https://github.com/openclaw/clawsweeper/actions/runs/37674954566) |
| [issue-steipete-oracle-548](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-548.md) | blocked |  |  | validation_script_missing: required pnpm check:changed is unavailable in target checkout | [37569156932](https://github.com/openclaw/clawsweeper/actions/runs/37569156932) |
| [issue-openclaw-crabbox-2715](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-2715.md) | blocked |  |  | validation command failed (go test -race -timeout=20m ./internal/cli ./internal/providers/aws -run Test(Status\|ApplyResolvedLeaseConfig\|AWS.*Read... | [37518975238](https://github.com/openclaw/clawsweeper/actions/runs/37518975238) |

### Top Blocked Reasons

| Reason | Latest count | Example cluster |
| --- | ---: | --- |
| job does not allow merge | 107 | [automerge-openclaw-openclaw-166284](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-166284.md) |
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

