# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Oct 31, 2026, 16:41 UTC

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Apply in progress | Oct 31, 2026, 16:41 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/41219259137) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Apply idle | Oct 31, 2026, 16:36 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/41219633430) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Oct 31, 2026, 16:33 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/41219731915) |

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

Last source update: Oct 11, 2026, 10:13 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 1677 | 100% |
| Run attempts archived | 5023 | audit |
| Latest successful clusters | 1260 | 75.1% |
| Latest failed clusters | 413 | 24.6% |
| Latest cancelled clusters | 4 | 0.2% |
| Needs-human clusters | 156 | 9.3% |
| Fix actions failed | 38 | 4.1% |
| Fix actions blocked | 213 | 23.0% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 326 | 99.7% |
| Skipped mutation attempts | 1 | 0.3% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 1677 clusters: 423 maintainer action, 461 automation snapshot, 729 intervention needed, 64 no pending action, 0 completed.
- Maintainer first: [openclaw/agent-skills](https://github.com/openclaw/agent-skills) [#240](https://github.com/openclaw/agent-skills/issues/240) is maintainer_input: Quarantine this exact ref for central OpenClaw security handling. The #217 fix must preserve existing scanner policy..
- Intervention first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [automerge-openclaw-openclaw-166269](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-166269.md) is automation_failed: validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:cha....
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#168492](https://github.com/openclaw/openclaw/issues/168492) is action_planned: The job authorizes one narrow implementation PR. Establish the failing owner-boundary regression before editing; closure and merge remain....
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 423 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 461 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 729 | automation failure or blocker recorded |
| No Pending Action | 64 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 273 |
| merge_ready | 47 |
| merge_not_authorized | 103 |
| checks_blocked | 43 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 417 |
| automation_failed | 406 |
| automation_blocked | 323 |
| reviewed_no_action | 64 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/agent-skills](https://github.com/openclaw/agent-skills) | [#240](https://github.com/openclaw/agent-skills/issues/240) | maintainer_input | Quarantine this exact ref for central OpenClaw security handling. The #217 fix must preserve existing scanner policy. | Oct 11, 2026, 06:41 UTC | [issue-openclaw-agent-skills-217](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-agent-skills-217.md) | [38118732074](https://github.com/openclaw/clawsweeper/actions/runs/38118732074) |
| [openclaw/crabbox](https://github.com/openclaw/crabbox) | [cluster:issue-openclaw-crabbox-2708](cluster:issue-openclaw-crabbox-2708) | maintainer_input | For https://github.com/openclaw/crabbox/issues/2708, obtain or verify a supported Blacksmith contract binding the exact Testbox request to its work... | Oct 11, 2026, 06:04 UTC | [issue-openclaw-crabbox-2708](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-2708.md) | [38116644716](https://github.com/openclaw/clawsweeper/actions/runs/38116644716) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#168401](https://github.com/openclaw/openclaw/issues/168401) | maintainer_input | Quarantine this linked PR from repair automation under the supplied security rule. This routing makes no vulnerability determination and does not b... | Oct 11, 2026, 05:35 UTC | [issue-openclaw-openclaw-168843](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168843.md) | [38115073199](https://github.com/openclaw/clawsweeper/actions/runs/38115073199) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#155389](https://github.com/openclaw/openclaw/issues/155389) | maintainer_input | Quarantine this historical security-related item from repair automation without changing its state. Its unrelated warning-reconciliation context do... | Oct 11, 2026, 05:01 UTC | [issue-openclaw-openclaw-168835](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168835.md) | [38113226868](https://github.com/openclaw/clawsweeper/actions/runs/38113226868) |
| [openclaw/openclaw-facetime](https://github.com/openclaw/openclaw-facetime) | [#7](https://github.com/openclaw/openclaw-facetime/issues/7) | maintainer_input | #7: Selecting a safe implementation remains unresolved because the artifacts establish neither a current-main macOS reproduction nor a source-prove... | Oct 11, 2026, 01:16 UTC | [issue-openclaw-openclaw-facetime-7](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-facetime-7.md) | [38101079011](https://github.com/openclaw/clawsweeper/actions/runs/38101079011) |
| [openclaw/libterminal](https://github.com/openclaw/libterminal) | [#169](https://github.com/openclaw/libterminal/issues/169) | maintainer_input | #169: Correct the same-repository inventory attribution. Hydration returned HTTP 404 with unknown kind and null updated_at; the source link identif... | Oct 11, 2026, 00:02 UTC | [issue-openclaw-libterminal-41](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-libterminal-41.md) | [38096885994](https://github.com/openclaw/clawsweeper/actions/runs/38096885994) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#83330](https://github.com/openclaw/openclaw/issues/83330) | maintainer_input | Leave any security determination to central OpenClaw handling. Do not mutate this closed reference or make the Configure fix depend on it. | Oct 10, 2026, 20:24 UTC | [issue-openclaw-openclaw-83354](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-83354.md) | [38081490430](https://github.com/openclaw/clawsweeper/actions/runs/38081490430) |
| [openclaw/openclaw-windows-packaging](https://github.com/openclaw/openclaw-windows-packaging) | [#160826](https://github.com/openclaw/openclaw-windows-packaging/issues/160826) | maintainer_input | #160826: Resolve whether this linked context belongs to openclaw/openclaw rather than openclaw/openclaw-windows-packaging and hydrate the actual it... | Oct 10, 2026, 19:53 UTC | [issue-openclaw-openclaw-windows-packaging-167](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-packaging-167.md) | [38081287308](https://github.com/openclaw/clawsweeper/actions/runs/38081287308) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#162398](https://github.com/openclaw/openclaw/issues/162398) | maintainer_input | Quarantine this exact linked PR for central OpenClaw security handling without treating the canonical bug as security work. | Oct 10, 2026, 07:12 UTC | [issue-openclaw-openclaw-168231](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168231.md) | [38028468040](https://github.com/openclaw/clawsweeper/actions/runs/38028468040) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#89526](https://github.com/openclaw/openclaw/issues/89526) | maintainer_input | Quarantine this linked item for central OpenClaw security handling without expanding or blocking the independent test-only fix. | Oct 10, 2026, 06:22 UTC | [issue-openclaw-openclaw-168193](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168193.md) | [38024597472](https://github.com/openclaw/clawsweeper/actions/runs/38024597472) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#166020](https://github.com/openclaw/openclaw/issues/166020) | maintainer_input | Quarantine this exact item's integrity-boundary proposals for central OpenClaw security handling. This is not a finding of a confirmed vulnerabilit... | Oct 10, 2026, 04:36 UTC | [issue-openclaw-openclaw-168130](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168130.md) | [38019637264](https://github.com/openclaw/clawsweeper/actions/runs/38019637264) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#168126](https://github.com/openclaw/openclaw/pull/168126) | merge_ready | issue implementation PR checks are green; merge intentionally blocked for this lane | Oct 10, 2026, 03:05 UTC | [issue-openclaw-openclaw-168089](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168089.md) | [38016018950](https://github.com/openclaw/clawsweeper/actions/runs/38016018950) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#53187](https://github.com/openclaw/openclaw/issues/53187) | maintainer_input | Quarantine this exact historical reference for central security handling; recommend no public mutation or reopening. | Oct 10, 2026, 02:50 UTC | [issue-openclaw-openclaw-168066](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168066.md) | [38018210971](https://github.com/openclaw/clawsweeper/actions/runs/38018210971) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#166284](https://github.com/openclaw/openclaw/pull/166284) | merge_not_authorized | job does not allow merge | Oct 10, 2026, 02:17 UTC | [automerge-openclaw-openclaw-166284](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-166284.md) | [38014116685](https://github.com/openclaw/clawsweeper/actions/runs/38014116685) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#77361](https://github.com/openclaw/openclaw/issues/77361) | maintainer_input | Route this exact item to central OpenClaw security handling without mutation. Its quarantine does not block an independent current-main label-refre... | Oct 10, 2026, 01:09 UTC | [issue-openclaw-openclaw-77343](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-77343.md) | [38006599572](https://github.com/openclaw/clawsweeper/actions/runs/38006599572) |

#### Automation Snapshot

| Repository | Item | Lane state | Recorded status | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#168492](https://github.com/openclaw/openclaw/issues/168492) | action_planned | The job authorizes one narrow implementation PR. Establish the failing owner-boundary regression before editing; closure and merge remain prohibited. | Oct 11, 2026, 07:40 UTC | [issue-openclaw-openclaw-168492](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168492.md) | [38121947790](https://github.com/openclaw/clawsweeper/actions/runs/38121947790) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#168870](https://github.com/openclaw/openclaw/pull/168870) | action_planned | The report and inspected source support a focused invocation-settlement bug. Establish the required failing regression before editing; no product o... | Oct 11, 2026, 06:50 UTC | [issue-openclaw-openclaw-168870](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168870.md) | [38119164861](https://github.com/openclaw/clawsweeper/actions/runs/38119164861) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#168872](https://github.com/openclaw/openclaw/issues/168872) | action_planned | Keep this issue as the canonical retained-installation regression. Earlier closed Feishu work is historical context, not grounds for duplicate clos... | Oct 11, 2026, 06:49 UTC | [issue-openclaw-openclaw-168872](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168872.md) | [38119163176](https://github.com/openclaw/clawsweeper/actions/runs/38119163176) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#168838](https://github.com/openclaw/openclaw/issues/168838) | action_planned | A focused repair of existing mutation reporting fits the authorized bug-only scope. Historical linked refs do not establish a same-root-cause compa... | Oct 11, 2026, 05:32 UTC | [issue-openclaw-openclaw-168838](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168838.md) | [38113225028](https://github.com/openclaw/clawsweeper/actions/runs/38113225028) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#101083](https://github.com/openclaw/openclaw/pull/101083) | action_planned | The remaining defect has a clear plugin-owned repair; demonstrate the failing baseline before changing production code. | Oct 11, 2026, 03:46 UTC | [issue-openclaw-openclaw-101083](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-101083.md) | [38109257226](https://github.com/openclaw/clawsweeper/actions/runs/38109257226) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#168794](https://github.com/openclaw/openclaw/pull/168794) | action_planned | A focused error-classification repair fits the authorized bug-only scope. Establish baseline failure and inspect the managed native contract before... | Oct 11, 2026, 03:45 UTC | [issue-openclaw-openclaw-168794](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168794.md) | [38109255495](https://github.com/openclaw/clawsweeper/actions/runs/38109255495) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#168676](https://github.com/openclaw/openclaw/pull/168676) | action_planned | The existing parser owns this ordinary output-selection bug. Plan a narrow repair without new configuration, narration policy, or public contracts. | Oct 11, 2026, 01:54 UTC | [issue-openclaw-openclaw-168676](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168676.md) | [38103211258](https://github.com/openclaw/clawsweeper/actions/runs/38103211258) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#168749](https://github.com/openclaw/openclaw/pull/168749) | action_planned | The diagnostic defect has a clear bug-only repair boundary. Keep the issue open while one implementation PR owns regression proof and validation. | Oct 11, 2026, 01:54 UTC | [issue-openclaw-openclaw-168749](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168749.md) | [38103209492](https://github.com/openclaw/clawsweeper/actions/runs/38103209492) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#4421](https://github.com/steipete/codexbar/issues/4421) | action_planned | The request remains viable and has a narrow implementation path. No security-boundary change or product decision is required. | Oct 11, 2026, 01:18 UTC | [issue-steipete-codexbar-4421](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-4421.md) | [38101190332](https://github.com/openclaw/clawsweeper/actions/runs/38101190332) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#83342](https://github.com/openclaw/openclaw/issues/83342) | action_planned | The hydrated evidence supports a focused bug repair. Reproduction is an execution prerequisite; neither merge nor issue closure is authorized. | Oct 10, 2026, 23:42 UTC | [issue-openclaw-openclaw-83342](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-83342.md) | [38095736539](https://github.com/openclaw/clawsweeper/actions/runs/38095736539) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#168585](https://github.com/openclaw/openclaw/pull/168585) | action_planned | A focused bug repair is authorized. Implementation must first demonstrate the baseline failure, then validate the repaired owner before opening or... | Oct 10, 2026, 20:33 UTC | [issue-openclaw-openclaw-168585](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168585.md) | [38084025709](https://github.com/openclaw/clawsweeper/actions/runs/38084025709) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#167982](https://github.com/openclaw/openclaw/pull/167982) | action_planned | A focused bug-only repair is supported. Establish a failing production-startup-to-scoped-dispatch regression before editing; stop if it does not re... | Oct 10, 2026, 13:56 UTC | [issue-openclaw-openclaw-167982](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-167982.md) | [38057413815](https://github.com/openclaw/clawsweeper/actions/runs/38057413815) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#168412](https://github.com/openclaw/openclaw/pull/168412) | action_planned | A focused repair at RootSidebarShell.contentCard fits established behavior. Proceed only after reproducing on current main and checking for an exis... | Oct 10, 2026, 11:56 UTC | [issue-openclaw-openclaw-168412](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168412.md) | [38049964038](https://github.com/openclaw/clawsweeper/actions/runs/38049964038) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#168362](https://github.com/openclaw/openclaw/pull/168362) | action_planned | A narrow reporting fix is appropriate. Keep the issue open; closure and merge are prohibited by the job. | Oct 10, 2026, 11:31 UTC | [issue-openclaw-openclaw-168362](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168362.md) | [38048500570](https://github.com/openclaw/clawsweeper/actions/runs/38048500570) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#168306](https://github.com/openclaw/openclaw/pull/168306) | action_planned | A focused prompt repair is appropriate. The reported CLI recovery behavior remains outside this implementation; keep the issue open and use a Relat... | Oct 10, 2026, 08:39 UTC | [issue-openclaw-openclaw-168306](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168306.md) | [38038457560](https://github.com/openclaw/clawsweeper/actions/runs/38038457560) |

#### Intervention Needed

| Repository | Item | Lane state | Recorded blocker | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | Oct 11, 2026, 10:13 UTC | [automerge-openclaw-openclaw-166269](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-166269.md) | [38129091583](https://github.com/openclaw/clawsweeper/actions/runs/38129091583) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=coreTests, ui, scripts, testRoot, to... | Oct 11, 2026, 10:11 UTC | [issue-openclaw-openclaw-169002](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-169002.md) | [38124848032](https://github.com/openclaw/clawsweeper/actions/runs/38124848032) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): validation command left 1 background process(es) after exit | Oct 11, 2026, 08:45 UTC | [issue-openclaw-openclaw-168959](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168959.md) | [38120300496](https://github.com/openclaw/clawsweeper/actions/runs/38120300496) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): validation command left 1 background process(es) after exit | Oct 11, 2026, 08:33 UTC | [issue-openclaw-openclaw-168969](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168969.md) | [38121281064](https://github.com/openclaw/clawsweeper/actions/runs/38121281064) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): validation command left 2 background process(es) after exit | Oct 11, 2026, 07:35 UTC | [issue-openclaw-openclaw-168945](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168945.md) | [38119500095](https://github.com/openclaw/clawsweeper/actions/runs/38119500095) |
| [openclaw/esp-openclaw-node](https://github.com/openclaw/esp-openclaw-node) |  | automation_blocked | No new PR is justified by the available evidence. Current main contains #68's confirmed handshake deadline repair; the remaining customized-firmwar... | Oct 11, 2026, 07:10 UTC | [issue-openclaw-esp-openclaw-node-67](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-esp-openclaw-node-67.md) | [38120279241](https://github.com/openclaw/clawsweeper/actions/runs/38120279241) |
| [openclaw/gogcli](https://github.com/openclaw/gogcli) | [#1199](https://github.com/openclaw/gogcli/pull/1199) | automation_failed | The missing query path and oversized positional request remain present. The implementation is narrow and does not require a product or security dec... | Oct 11, 2026, 05:58 UTC | [issue-openclaw-gogcli-1199](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-1199.md) | [38116318814](https://github.com/openclaw/clawsweeper/actions/runs/38116318814) |
| [openclaw/peekaboo](https://github.com/openclaw/peekaboo) |  | automation_blocked | The capability remains unresolved on preflight main 5afcafb5ca7e4f3fe524ce1139d624e811cf3043. No receiver-proven implementation mechanism was ident... | Oct 11, 2026, 05:33 UTC | [issue-openclaw-peekaboo-922](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-peekaboo-922.md) | [38114885924](https://github.com/openclaw/clawsweeper/actions/runs/38114885924) |
| [steipete/oracle](https://github.com/steipete/oracle) |  | automation_blocked | No justified implementation identified on current main. Slider/menu support and unverified-effort warnings already exist, but the reported failing... | Oct 11, 2026, 01:12 UTC | [issue-steipete-oracle-539](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-539.md) | [38100817193](https://github.com/openclaw/clawsweeper/actions/runs/38100817193) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=coreTests, extensions, extensionTest... | Oct 10, 2026, 23:39 UTC | [issue-openclaw-openclaw-168665](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168665.md) | [38089489184](https://github.com/openclaw/clawsweeper/actions/runs/38089489184) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#168625](https://github.com/openclaw/openclaw/pull/168625) | automation_failed | Existing documented behavior has a narrow projection-owner repair path. Behavioral reproduction remains mandatory before editing in a writable, dep... | Oct 10, 2026, 22:16 UTC | [issue-openclaw-openclaw-168625](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168625.md) | [38083437132](https://github.com/openclaw/clawsweeper/actions/runs/38083437132) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=coreTests, ui, tooling [check:change... | Oct 10, 2026, 22:00 UTC | [issue-openclaw-openclaw-168627](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168627.md) | [38083404963](https://github.com/openclaw/clawsweeper/actions/runs/38083404963) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, tooling [check:chan... | Oct 10, 2026, 21:28 UTC | [issue-openclaw-openclaw-168626](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168626.md) | [38083485640](https://github.com/openclaw/clawsweeper/actions/runs/38083485640) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=extensions, extensionTests, docs, to... | Oct 10, 2026, 19:05 UTC | [issue-openclaw-openclaw-168580](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168580.md) | [38074240401](https://github.com/openclaw/clawsweeper/actions/runs/38074240401) |
| [openclaw/photoscrawl](https://github.com/openclaw/photoscrawl) | [cluster:issue-openclaw-photoscrawl-30](cluster:issue-openclaw-photoscrawl-30) | automation_failed | A lower-allocation recovery method requires synthetic preservation and allocation proof. This environment cannot implement or qualify it. | Oct 10, 2026, 18:34 UTC | [issue-openclaw-photoscrawl-30](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-photoscrawl-30.md) | [38076137542](https://github.com/openclaw/clawsweeper/actions/runs/38076137542) |

#### No Pending Action

| Repository | Item | Lane state | Latest result | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#4418](https://github.com/steipete/codexbar/issues/4418) | reviewed_no_action | No new PR planned: supplied main already contains the deferred placeholder-dismissal repair and regression coverage. Keep #4418 open because the re... | Oct 10, 2026, 21:47 UTC | [issue-steipete-codexbar-4418](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-4418.md) | [38088776833](https://github.com/openclaw/clawsweeper/actions/runs/38088776833) |
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

#### Completed

| Repository | Item | Lane state | Recorded outcome | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

### Clusters Needing Inspection

| Cluster | State | Reason | Report | Run |
| --- | --- | --- | --- | --- |
| automerge-openclaw-openclaw-166269 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [automerge-openclaw-openclaw-166269](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-166269.md) | [38129091583](https://github.com/openclaw/clawsweeper/actions/runs/38129091583) |
| issue-openclaw-openclaw-169002 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=coreTests, ui, scripts, testRoot, to... | [issue-openclaw-openclaw-169002](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-169002.md) | [38124848032](https://github.com/openclaw/clawsweeper/actions/runs/38124848032) |
| issue-openclaw-openclaw-168959 | execute_fix blocked | validation command failed (pnpm check:changed): validation command left 1 background process(es) after exit | [issue-openclaw-openclaw-168959](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168959.md) | [38120300496](https://github.com/openclaw/clawsweeper/actions/runs/38120300496) |
| issue-openclaw-openclaw-168969 | execute_fix blocked | validation command failed (pnpm check:changed): validation command left 1 background process(es) after exit | [issue-openclaw-openclaw-168969](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168969.md) | [38121281064](https://github.com/openclaw/clawsweeper/actions/runs/38121281064) |
| issue-openclaw-openclaw-168945 | execute_fix blocked | validation command failed (pnpm check:changed): validation command left 2 background process(es) after exit | [issue-openclaw-openclaw-168945](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168945.md) | [38119500095](https://github.com/openclaw/clawsweeper/actions/runs/38119500095) |
| issue-openclaw-crabbox-2708 | needs human | For https://github.com/openclaw/crabbox/issues/2708, obtain or verify a supported Blacksmith contract binding the exact Testbox request to its work... | [issue-openclaw-crabbox-2708](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-2708.md) | [38116644716](https://github.com/openclaw/clawsweeper/actions/runs/38116644716) |
| issue-openclaw-openclaw-facetime-7 | needs human | #7: Selecting a safe implementation remains unresolved because the artifacts establish neither a current-main macOS reproduction nor a source-prove... | [issue-openclaw-openclaw-facetime-7](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-facetime-7.md) | [38101079011](https://github.com/openclaw/clawsweeper/actions/runs/38101079011) |
| issue-openclaw-libterminal-41 | needs human | #169: Correct the same-repository inventory attribution. Hydration returned HTTP 404 with unknown kind and null updated_at; the source link identif... | [issue-openclaw-libterminal-41](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-libterminal-41.md) | [38096885994](https://github.com/openclaw/clawsweeper/actions/runs/38096885994) |
| issue-openclaw-openclaw-168665 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=coreTests, extensions, extensionTest... | [issue-openclaw-openclaw-168665](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168665.md) | [38089489184](https://github.com/openclaw/clawsweeper/actions/runs/38089489184) |
| issue-openclaw-openclaw-168627 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=coreTests, ui, tooling [check:change... | [issue-openclaw-openclaw-168627](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168627.md) | [38083404963](https://github.com/openclaw/clawsweeper/actions/runs/38083404963) |
| issue-openclaw-openclaw-168626 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, tooling [check:chan... | [issue-openclaw-openclaw-168626](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168626.md) | [38083485640](https://github.com/openclaw/clawsweeper/actions/runs/38083485640) |
| issue-openclaw-openclaw-windows-packaging-167 | needs human | #160826: Resolve whether this linked context belongs to openclaw/openclaw rather than openclaw/openclaw-windows-packaging and hydrate the actual it... | [issue-openclaw-openclaw-windows-packaging-167](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-packaging-167.md) | [38081287308](https://github.com/openclaw/clawsweeper/actions/runs/38081287308) |
| issue-openclaw-openclaw-168580 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=extensions, extensionTests, docs, to... | [issue-openclaw-openclaw-168580](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168580.md) | [38074240401](https://github.com/openclaw/clawsweeper/actions/runs/38074240401) |
| issue-openclaw-openclaw-168540 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=extensions, extensionTests, tooling... | [issue-openclaw-openclaw-168540](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168540.md) | [38070356185](https://github.com/openclaw/clawsweeper/actions/runs/38070356185) |
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

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [automerge-openclaw-openclaw-166269](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-166269.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [38129091583](https://github.com/openclaw/clawsweeper/actions/runs/38129091583) |
| [automerge-openclaw-openclaw-166269](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-166269.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [38129091583](https://github.com/openclaw/clawsweeper/actions/runs/38129091583) |
| [issue-openclaw-openclaw-169002](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-169002.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=coreTests, ui, scripts, testRoot, to... | [38124848032](https://github.com/openclaw/clawsweeper/actions/runs/38124848032) |
| [issue-openclaw-openclaw-168959](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168959.md) | blocked |  |  | validation command failed (pnpm check:changed): validation command left 1 background process(es) after exit | [38120300496](https://github.com/openclaw/clawsweeper/actions/runs/38120300496) |
| [issue-openclaw-openclaw-168969](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168969.md) | blocked |  |  | validation command failed (pnpm check:changed): validation command left 1 background process(es) after exit | [38121281064](https://github.com/openclaw/clawsweeper/actions/runs/38121281064) |
| [issue-openclaw-openclaw-168945](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168945.md) | blocked |  |  | validation command failed (pnpm check:changed): validation command left 2 background process(es) after exit | [38119500095](https://github.com/openclaw/clawsweeper/actions/runs/38119500095) |
| [issue-openclaw-openclaw-168665](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168665.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=coreTests, extensions, extensionTest... | [38089489184](https://github.com/openclaw/clawsweeper/actions/runs/38089489184) |
| [issue-openclaw-openclaw-168627](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168627.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=coreTests, ui, tooling [check:change... | [38083404963](https://github.com/openclaw/clawsweeper/actions/runs/38083404963) |
| [issue-openclaw-openclaw-168626](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168626.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests, tooling [check:chan... | [38083485640](https://github.com/openclaw/clawsweeper/actions/runs/38083485640) |
| [issue-openclaw-openclaw-168580](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-168580.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=extensions, extensionTests, docs, to... | [38074240401](https://github.com/openclaw/clawsweeper/actions/runs/38074240401) |
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

