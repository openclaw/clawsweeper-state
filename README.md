# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Sep 20, 2026, 14:45 UTC

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Apply in progress | Sep 20, 2026, 14:45 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/35516630717) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Apply idle | Sep 20, 2026, 14:42 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/35517220280) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Sep 20, 2026, 13:30 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/35513687990) |

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

Last source update: Sep 20, 2026, 14:04 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 1125 | 100% |
| Run attempts archived | 3369 | audit |
| Latest successful clusters | 956 | 85.0% |
| Latest failed clusters | 166 | 14.8% |
| Latest cancelled clusters | 3 | 0.3% |
| Needs-human clusters | 126 | 11.2% |
| Fix actions failed | 34 | 4.6% |
| Fix actions blocked | 158 | 21.3% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 322 | 99.7% |
| Skipped mutation attempts | 1 | 0.3% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 1125 clusters: 338 maintainer action, 315 automation snapshot, 424 intervention needed, 48 no pending action, 0 completed.
- Maintainer first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#94832](https://github.com/openclaw/openclaw/issues/94832) is maintainer_input: Central OpenClaw security handling only; do not mutate or adopt its broader repair path..
- Intervention first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#153622](https://github.com/openclaw/openclaw/pull/153622) is automation_failed: Implementation requires a writable disposable macOS environment, inspection of the exact pinned dependency, and a failing regression befo....
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#153682](https://github.com/openclaw/openclaw/pull/153682) is action_planned: A focused existing-behavior repair is supported. Require a failing owner-boundary regression before editing production code..
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 338 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 315 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 424 | automation failure or blocker recorded |
| No Pending Action | 48 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 191 |
| merge_ready | 45 |
| merge_not_authorized | 102 |
| checks_blocked | 43 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 271 |
| automation_failed | 180 |
| automation_blocked | 244 |
| reviewed_no_action | 48 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#94832](https://github.com/openclaw/openclaw/issues/94832) | maintainer_input | Central OpenClaw security handling only; do not mutate or adopt its broader repair path. | Sep 20, 2026, 10:38 UTC | [issue-openclaw-openclaw-153594](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-153594.md) | [35505501546](https://github.com/openclaw/clawsweeper/actions/runs/35505501546) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#153370](https://github.com/openclaw/openclaw/issues/153370) | maintainer_input | Choose the implementation destination: adopt the existing writable contributor PR, or explicitly allow a separate PR from clawsweeper/issue-opencla... | Sep 20, 2026, 03:39 UTC | [issue-openclaw-openclaw-153357](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-153357.md) | [35486992177](https://github.com/openclaw/clawsweeper/actions/runs/35486992177) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#153313](https://github.com/openclaw/openclaw/pull/153313) | maintainer_input | Resolve implementation ownership: does this job intentionally override the recorded manual-only instruction and authorize a separate implementation... | Sep 20, 2026, 02:06 UTC | [issue-openclaw-openclaw-153313](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-153313.md) | [35482909453](https://github.com/openclaw/clawsweeper/actions/runs/35482909453) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#153250](https://github.com/openclaw/openclaw/issues/153250) | maintainer_input | Resolve whether automatic implementation should proceed despite the current clawsweeper:manual-only label and @holny's implementation offer. The su... | Sep 20, 2026, 01:13 UTC | [issue-openclaw-openclaw-153250](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-153250.md) | [35480720221](https://github.com/openclaw/clawsweeper/actions/runs/35480720221) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#153107](https://github.com/openclaw/openclaw/issues/153107) | maintainer_input | Recommend central OpenClaw security handling for the sensitive claim without determining exploitability or changing GitHub state. The merged PR req... | Sep 19, 2026, 19:30 UTC | [automerge-openclaw-openclaw-153107](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-153107.md) | [35464400198](https://github.com/openclaw/clawsweeper/actions/runs/35464400198) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#116943](https://github.com/openclaw/openclaw/issues/116943) | maintainer_input | Read-only referral to central OpenClaw security handling. This distinct policy question does not block the ordinary comparison-prose repair. | Sep 19, 2026, 05:59 UTC | [issue-openclaw-openclaw-152508](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-152508.md) | [35425168146](https://github.com/openclaw/clawsweeper/actions/runs/35425168146) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#152079](https://github.com/openclaw/openclaw/issues/152079) | maintainer_input | Quarantine this exact reference for central OpenClaw security handling without public mutation; ordinary commentary lifecycle repair remains separate. | Sep 19, 2026, 05:33 UTC | [issue-openclaw-openclaw-152499](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-152499.md) | [35422501807](https://github.com/openclaw/clawsweeper/actions/runs/35422501807) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#151795](https://github.com/openclaw/openclaw/issues/151795) | maintainer_input | Refer only this item to central OpenClaw security handling and plugin/SDK owners. No vulnerability verdict or public mutation is proposed. | Sep 18, 2026, 13:39 UTC | [issue-openclaw-openclaw-151794](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-151794.md) | [35350716253](https://github.com/openclaw/clawsweeper/actions/runs/35350716253) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122163](https://github.com/openclaw/openclaw/issues/122163) | maintainer_input | Read-only quarantine to central OpenClaw security handling. No public mutation or repair is proposed for this historical item; #151111 can proceed... | Sep 17, 2026, 21:35 UTC | [issue-openclaw-openclaw-151111](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-151111.md) | [35277195932](https://github.com/openclaw/clawsweeper/actions/runs/35277195932) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#108353](https://github.com/openclaw/openclaw/issues/108353) | maintainer_input | Refer only this historical concern to central OpenClaw security handling without public mutation or an exploitability verdict. It does not block th... | Sep 16, 2026, 11:36 UTC | [issue-openclaw-openclaw-149985](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-149985.md) | [35090822449](https://github.com/openclaw/clawsweeper/actions/runs/35090822449) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#144914](https://github.com/openclaw/openclaw/issues/144914) | maintainer_input | Route only this item to central OpenClaw security handling, without public mutations or incorporating its changes into #149064. | Sep 15, 2026, 14:05 UTC | [issue-openclaw-openclaw-149064](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-149064.md) | [34978528315](https://github.com/openclaw/clawsweeper/actions/runs/34978528315) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#128410](https://github.com/openclaw/openclaw/issues/128410) | maintainer_input | Refer this exact item to central OpenClaw security handling without public mutation. Its authority redesign is excluded from #148837. | Sep 15, 2026, 10:19 UTC | [issue-openclaw-openclaw-148837](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-148837.md) | [34953952092](https://github.com/openclaw/clawsweeper/actions/runs/34953952092) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#102270](https://github.com/openclaw/openclaw/issues/102270) | maintainer_input | Quarantine that installation-policy question for central OpenClaw security handling without reopening or otherwise mutating the closed issue. It do... | Sep 14, 2026, 10:20 UTC | [issue-openclaw-openclaw-148148](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-148148.md) | [34830887710](https://github.com/openclaw/clawsweeper/actions/runs/34830887710) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#147283](https://github.com/openclaw/openclaw/issues/147283) | maintainer_input | Potential sensitive cross-chat exposure warrants read-only central security handling despite the preflight's false security flag. This is not a vul... | Sep 13, 2026, 20:58 UTC | [issue-openclaw-openclaw-147326](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147326.md) | [34782240253](https://github.com/openclaw/clawsweeper/actions/runs/34782240253) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#146821](https://github.com/openclaw/openclaw/pull/146821) | maintainer_input | #146821: Resolve implementation ownership with @zyz619963502zyz. Prefer the claimed contributor repair; hydrate any resulting PR before deciding wh... | Sep 13, 2026, 07:59 UTC | [issue-openclaw-openclaw-146821](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-146821.md) | [34746360069](https://github.com/openclaw/clawsweeper/actions/runs/34746360069) |

#### Automation Snapshot

| Repository | Item | Lane state | Recorded status | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#153682](https://github.com/openclaw/openclaw/pull/153682) | action_planned | A focused existing-behavior repair is supported. Require a failing owner-boundary regression before editing production code. | Sep 20, 2026, 14:04 UTC | [issue-openclaw-openclaw-153682](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-153682.md) | [35515235462](https://github.com/openclaw/clawsweeper/actions/runs/35515235462) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#153502](https://github.com/openclaw/openclaw/pull/153502) | action_planned | The historical-warning combination needs its own regression and repair; related merged work does not establish that this report is fixed. Proceed o... | Sep 20, 2026, 07:40 UTC | [issue-openclaw-openclaw-153502](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-153502.md) | [35497291658](https://github.com/openclaw/clawsweeper/actions/runs/35497291658) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#153516](https://github.com/openclaw/openclaw/pull/153516) | action_planned | This is a distinct, actionable capture-layout compatibility defect. Preserve the existing native-addon root repair and require a failing loader reg... | Sep 20, 2026, 07:39 UTC | [issue-openclaw-openclaw-153516](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-153516.md) | [35497290401](https://github.com/openclaw/clawsweeper/actions/runs/35497290401) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#153391](https://github.com/openclaw/openclaw/pull/153391) | action_planned | Restore existing configuration behavior through shared payload handling, preserving isolated-completion constraints. Reproduction must precede impl... | Sep 20, 2026, 04:38 UTC | [issue-openclaw-openclaw-153391](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-153391.md) | [35489542875](https://github.com/openclaw/clawsweeper/actions/runs/35489542875) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#153190](https://github.com/openclaw/openclaw/pull/153190) | action_planned | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Sep 19, 2026, 22:23 UTC | [automerge-openclaw-openclaw-153190](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-153190.md) | [35472008289](https://github.com/openclaw/clawsweeper/actions/runs/35472008289) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#153145](https://github.com/openclaw/openclaw/pull/153145) | action_planned | The source finding supports a bounded bug repair. Establish the failing native regression before editing production code; stop for triage if it doe... | Sep 19, 2026, 20:33 UTC | [issue-openclaw-openclaw-153145](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-153145.md) | [35467598676](https://github.com/openclaw/clawsweeper/actions/runs/35467598676) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#153003](https://github.com/openclaw/openclaw/pull/153003) | action_planned | Prepare one implementation PR after dependency inspection and reproduction; preserve authority checks, native identity, sibling refusal, and unload... | Sep 19, 2026, 17:36 UTC | [issue-openclaw-openclaw-153003](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-153003.md) | [35458476291](https://github.com/openclaw/clawsweeper/actions/runs/35458476291) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#152970](https://github.com/openclaw/openclaw/pull/152970) | action_planned | Initial readiness handling needs its own repair; merged post-restart handling does not cover this entry path. Proceed only after the executor demon... | Sep 19, 2026, 16:07 UTC | [issue-openclaw-openclaw-152970](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-152970.md) | [35453643744](https://github.com/openclaw/clawsweeper/actions/runs/35453643744) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#152942](https://github.com/openclaw/openclaw/pull/152942) | action_planned | Implicit requester fast mode must only propagate when requester and child resolve to the same provider/model. Preserve explicit overrides and exist... | Sep 19, 2026, 16:02 UTC | [issue-openclaw-openclaw-152942](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-152942.md) | [35452142631](https://github.com/openclaw/clawsweeper/actions/runs/35452142631) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#152938](https://github.com/openclaw/openclaw/pull/152938) | action_planned | A bounded portability defect has a clear repair path. Implement only after demonstrating failing regressions through stageTerminalUpload on refresh... | Sep 19, 2026, 15:37 UTC | [issue-openclaw-openclaw-152938](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-152938.md) | [35452143969](https://github.com/openclaw/clawsweeper/actions/runs/35452143969) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#152847](https://github.com/openclaw/openclaw/pull/152847) | action_planned | The existing traversal owner provides a narrow repair path without changing authorization, schema, stored state, or public settings. Runtime reprod... | Sep 19, 2026, 13:02 UTC | [issue-openclaw-openclaw-152847](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-152847.md) | [35444438461](https://github.com/openclaw/clawsweeper/actions/runs/35444438461) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#152760](https://github.com/openclaw/openclaw/pull/152760) | action_planned | A focused repair fits the existing sanitizer owner. Establish runtime reproduction on current main before implementation; stop if reproduction fails. | Sep 19, 2026, 10:30 UTC | [issue-openclaw-openclaw-152760](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-152760.md) | [35437504358](https://github.com/openclaw/clawsweeper/actions/runs/35437504358) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#152651](https://github.com/openclaw/openclaw/pull/152651) | action_planned | The supplied evidence supports a distinct presentation-loss bug without a security-boundary change. Proceed with the fix plan only after a failing... | Sep 19, 2026, 07:34 UTC | [issue-openclaw-openclaw-152651](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-152651.md) | [35429520583](https://github.com/openclaw/clawsweeper/actions/runs/35429520583) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#152467](https://github.com/openclaw/openclaw/pull/152467) | action_planned | Reconcile the failed review check and current integration requirements through the existing guarded workflow. No source defect or need for a replac... | Sep 19, 2026, 07:30 UTC | [automerge-openclaw-openclaw-152467](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-152467.md) | [35427355009](https://github.com/openclaw/clawsweeper/actions/runs/35427355009) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#152562](https://github.com/openclaw/openclaw/pull/152562) | action_planned | A producer-side reporting repair fits the authorized bug-only scope. Require a failing current-main regression before implementation and publication. | Sep 19, 2026, 06:58 UTC | [issue-openclaw-openclaw-152562](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-152562.md) | [35427356976](https://github.com/openclaw/clawsweeper/actions/runs/35427356976) |

#### Intervention Needed

| Repository | Item | Lane state | Recorded blocker | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#153622](https://github.com/openclaw/openclaw/pull/153622) | automation_failed | Implementation requires a writable disposable macOS environment, inspection of the exact pinned dependency, and a failing regression before editing... | Sep 20, 2026, 10:25 UTC | [issue-openclaw-openclaw-153622](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-153622.md) | [35504799718](https://github.com/openclaw/clawsweeper/actions/runs/35504799718) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#153453](https://github.com/openclaw/openclaw/pull/153453) | automation_failed | A focused transport-selection repair remains justified on supplied main. Keep the issue open under this lane's explicit restrictions. | Sep 20, 2026, 06:13 UTC | [issue-openclaw-openclaw-153453](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-153453.md) | [35492364686](https://github.com/openclaw/clawsweeper/actions/runs/35492364686) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | Automatic implementation is blocked by the canonical issue's manual-only designation and explicit maintainer reservation for the update-reliability... | Sep 19, 2026, 21:31 UTC | [issue-openclaw-openclaw-153155](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-153155.md) | [35470562494](https://github.com/openclaw/clawsweeper/actions/runs/35470562494) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=coreTests, ui [check:changed] ui/src... | Sep 18, 2026, 21:16 UTC | [issue-openclaw-openclaw-152145](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-152145.md) | [35392189093](https://github.com/openclaw/clawsweeper/actions/runs/35392189093) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#150201](https://github.com/openclaw/openclaw/pull/150201) | automation_failed | The narrow bug remains supported by current source. A writable executor must first establish the failing real-planner regression, then implement an... | Sep 17, 2026, 00:29 UTC | [issue-openclaw-openclaw-150201](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-150201.md) | [35163433642](https://github.com/openclaw/clawsweeper/actions/runs/35163433642) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119975](https://github.com/openclaw/openclaw/pull/119975) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Sep 16, 2026, 10:19 UTC | [automerge-openclaw-openclaw-119975](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119975.md) | [35080454819](https://github.com/openclaw/clawsweeper/actions/runs/35080454819) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | Sep 16, 2026, 10:04 UTC | [issue-openclaw-openclaw-149933](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-149933.md) | [35078947217](https://github.com/openclaw/clawsweeper/actions/runs/35078947217) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119735](https://github.com/openclaw/openclaw/pull/119735) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Sep 16, 2026, 09:47 UTC | [automerge-openclaw-openclaw-119735](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119735.md) | [35080477128](https://github.com/openclaw/clawsweeper/actions/runs/35080477128) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=all [check:changed] extension-impact... | Sep 15, 2026, 22:32 UTC | [automerge-openclaw-openclaw-146737](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-146737.md) | [35026098014](https://github.com/openclaw/clawsweeper/actions/runs/35026098014) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-85687](cluster:issue-openclaw-openclaw-85687) | automation_failed | Publication is blocked until an authorized executor checks for existing work, reproduces the defect on refreshed main, implements the narrow repair... | Sep 14, 2026, 22:16 UTC | [issue-openclaw-openclaw-85687](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-85687.md) | [34899160324](https://github.com/openclaw/clawsweeper/actions/runs/34899160324) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118303](https://github.com/openclaw/openclaw/pull/118303) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Sep 14, 2026, 14:19 UTC | [automerge-openclaw-openclaw-118303](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118303.md) | [34851068337](https://github.com/openclaw/clawsweeper/actions/runs/34851068337) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#147258](https://github.com/openclaw/openclaw/pull/147258) | automation_failed | The existing discovery/recovery contract can be repaired within Memory Core without changing indexing, visibility, configuration, persisted state,... | Sep 13, 2026, 19:12 UTC | [issue-openclaw-openclaw-147258](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147258.md) | [34774386338](https://github.com/openclaw/clawsweeper/actions/runs/34774386338) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | Codex fix worker timed out after 1800000ms | Sep 13, 2026, 18:45 UTC | [issue-openclaw-openclaw-147168](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147168.md) | [34767652813](https://github.com/openclaw/clawsweeper/actions/runs/34767652813) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | Sep 12, 2026, 14:37 UTC | [issue-openclaw-openclaw-146023](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-146023.md) | [34699518709](https://github.com/openclaw/clawsweeper/actions/runs/34699518709) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | Sep 11, 2026, 16:56 UTC | [automerge-openclaw-openclaw-142626](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-142626.md) | [34618103886](https://github.com/openclaw/clawsweeper/actions/runs/34618103886) |

#### No Pending Action

| Repository | Item | Lane state | Latest result | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep the canonical issue open and preserve the existing contributor fix candidate. Do not create a competing PR. Local HEAD matches preflight main;... | Sep 19, 2026, 14:00 UTC | [issue-openclaw-openclaw-152879](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-152879.md) | [35447300369](https://github.com/openclaw/clawsweeper/actions/runs/35447300369) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | The canonical PR is already merged. No repair or GitHub mutation is needed. | Sep 19, 2026, 08:57 UTC | [automerge-openclaw-openclaw-152703](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-152703.md) | [35433235159](https://github.com/openclaw/clawsweeper/actions/runs/35433235159) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep #149232 open and retain #149268 as its existing fix PR. Do not create a competing implementation. Failing CI blocks merge readiness; broader s... | Sep 15, 2026, 17:43 UTC | [issue-openclaw-openclaw-149232](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-149232.md) | [35001943660](https://github.com/openclaw/clawsweeper/actions/runs/35001943660) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep issue #149101 open and retain @LiuwqGit's existing PR #149132 as the canonical fix path. A second implementation PR would duplicate useful con... | Sep 15, 2026, 14:38 UTC | [issue-openclaw-openclaw-149101](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-149101.md) | [34982550918](https://github.com/openclaw/clawsweeper/actions/runs/34982550918) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | The supplied live preflight records #148175 as already merged. No branch repair, replacement PR, or GitHub mutation is needed. | Sep 15, 2026, 03:38 UTC | [automerge-openclaw-openclaw-148175](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-148175.md) | [34925607795](https://github.com/openclaw/clawsweeper/actions/runs/34925607795) |
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

#### Completed

| Repository | Item | Lane state | Recorded outcome | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

### Clusters Needing Inspection

| Cluster | State | Reason | Report | Run |
| --- | --- | --- | --- | --- |
| issue-openclaw-openclaw-153357 | needs human | Choose the implementation destination: adopt the existing writable contributor PR, or explicitly allow a separate PR from clawsweeper/issue-opencla... | [issue-openclaw-openclaw-153357](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-153357.md) | [35486992177](https://github.com/openclaw/clawsweeper/actions/runs/35486992177) |
| issue-openclaw-openclaw-153313 | needs human | Resolve implementation ownership: does this job intentionally override the recorded manual-only instruction and authorize a separate implementation... | [issue-openclaw-openclaw-153313](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-153313.md) | [35482909453](https://github.com/openclaw/clawsweeper/actions/runs/35482909453) |
| issue-openclaw-openclaw-153250 | needs human | Resolve whether automatic implementation should proceed despite the current clawsweeper:manual-only label and @holny's implementation offer. The su... | [issue-openclaw-openclaw-153250](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-153250.md) | [35480720221](https://github.com/openclaw/clawsweeper/actions/runs/35480720221) |
| issue-openclaw-openclaw-152499 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [issue-openclaw-openclaw-152499](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-152499.md) | [35422501807](https://github.com/openclaw/clawsweeper/actions/runs/35422501807) |
| issue-openclaw-openclaw-152145 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=coreTests, ui [check:changed] ui/src... | [issue-openclaw-openclaw-152145](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-152145.md) | [35392189093](https://github.com/openclaw/clawsweeper/actions/runs/35392189093) |
| issue-openclaw-openclaw-149933 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [issue-openclaw-openclaw-149933](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-149933.md) | [35078947217](https://github.com/openclaw/clawsweeper/actions/runs/35078947217) |
| automerge-openclaw-openclaw-146737 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=all [check:changed] extension-impact... | [automerge-openclaw-openclaw-146737](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-146737.md) | [35026098014](https://github.com/openclaw/clawsweeper/actions/runs/35026098014) |
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

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [issue-openclaw-openclaw-152499](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-152499.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [35422501807](https://github.com/openclaw/clawsweeper/actions/runs/35422501807) |
| [issue-openclaw-openclaw-152145](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-152145.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=coreTests, ui [check:changed] ui/src... | [35392189093](https://github.com/openclaw/clawsweeper/actions/runs/35392189093) |
| [issue-openclaw-openclaw-149933](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-149933.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | [35078947217](https://github.com/openclaw/clawsweeper/actions/runs/35078947217) |
| [automerge-openclaw-openclaw-146737](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-146737.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=all [check:changed] extension-impact... | [35026098014](https://github.com/openclaw/clawsweeper/actions/runs/35026098014) |
| [automerge-openclaw-openclaw-146737](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-146737.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=all [check:changed] extension-impact... | [35026098014](https://github.com/openclaw/clawsweeper/actions/runs/35026098014) |
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

