# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Sep 24, 2026, 22:17 UTC

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Planning review | Sep 24, 2026, 22:17 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/36066276349) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Apply idle | Sep 24, 2026, 21:57 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/36064452999) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Sep 24, 2026, 10:56 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/35989570659) |

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

Last source update: Sep 24, 2026, 21:58 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 1192 | 100% |
| Run attempts archived | 3579 | audit |
| Latest successful clusters | 1005 | 84.3% |
| Latest failed clusters | 184 | 15.4% |
| Latest cancelled clusters | 3 | 0.3% |
| Needs-human clusters | 126 | 10.6% |
| Fix actions failed | 34 | 4.5% |
| Fix actions blocked | 163 | 21.7% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 322 | 99.7% |
| Skipped mutation attempts | 1 | 0.3% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 1192 clusters: 343 maintainer action, 353 automation snapshot, 447 intervention needed, 49 no pending action, 0 completed.
- Maintainer first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#143609](https://github.com/openclaw/openclaw/issues/143609) is maintainer_input: Route this item alone to central security handling; it is outside the Homebrew runtime health fix..
- Intervention first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [cluster:issue-openclaw-openclaw-120616](cluster:issue-openclaw-openclaw-120616) is automation_failed: A writable checkout with dependencies is required to reproduce through the agent cron tool before editing, then validate the fix..
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#157443](https://github.com/openclaw/openclaw/issues/157443) is action_planned: No open candidate PR owns this fix. The plan requires same-process slow-start, crash, foreign-port, and probe-failure checks before a nar....
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 343 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 353 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 447 | automation failure or blocker recorded |
| No Pending Action | 49 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 196 |
| merge_ready | 45 |
| merge_not_authorized | 102 |
| checks_blocked | 43 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 309 |
| automation_failed | 198 |
| automation_blocked | 249 |
| reviewed_no_action | 49 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#143609](https://github.com/openclaw/openclaw/issues/143609) | maintainer_input | Route this item alone to central security handling; it is outside the Homebrew runtime health fix. | Sep 24, 2026, 04:59 UTC | [issue-openclaw-openclaw-156976](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-156976.md) | [35957775583](https://github.com/openclaw/clawsweeper/actions/runs/35957775583) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#126224](https://github.com/openclaw/openclaw/issues/126224) | maintainer_input | Quarantine this linked PR alone; it addresses catalog-owner recovery, not this issue's fallback classification. | Sep 24, 2026, 04:41 UTC | [issue-openclaw-openclaw-156975](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-156975.md) | [35956415504](https://github.com/openclaw/clawsweeper/actions/runs/35956415504) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119687](https://github.com/openclaw/openclaw/issues/119687) | maintainer_input | Route this exact item to central OpenClaw security handling without public mutation or branch adoption. Its historical context does not block the s... | Sep 22, 2026, 20:11 UTC | [issue-openclaw-openclaw-112160](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-112160.md) | [35778072080](https://github.com/openclaw/clawsweeper/actions/runs/35778072080) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#116045](https://github.com/openclaw/openclaw/issues/116045) | maintainer_input | Route this exact item to central OpenClaw security handling without public mutation. Its replay-boundary question is unnecessary for the rewind pro... | Sep 22, 2026, 13:03 UTC | [issue-openclaw-openclaw-155685](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-155685.md) | [35729950383](https://github.com/openclaw/clawsweeper/actions/runs/35729950383) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120362](https://github.com/openclaw/openclaw/issues/120362) | maintainer_input | Quarantine this exact ref for central OpenClaw security handling without public mutation or further security triage. Its classification does not bl... | Sep 20, 2026, 19:59 UTC | [issue-openclaw-openclaw-153952](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-153952.md) | [35533859894](https://github.com/openclaw/clawsweeper/actions/runs/35533859894) |
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

#### Automation Snapshot

| Repository | Item | Lane state | Recorded status | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#157443](https://github.com/openclaw/openclaw/issues/157443) | action_planned | No open candidate PR owns this fix. The plan requires same-process slow-start, crash, foreign-port, and probe-failure checks before a narrow repair... | Sep 24, 2026, 19:01 UTC | [issue-openclaw-openclaw-157443](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-157443.md) | [36044848100](https://github.com/openclaw/clawsweeper/actions/runs/36044848100) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#77717](https://github.com/openclaw/openclaw/pull/77717) | action_planned | Keep the issue open and prove the stale write on current main before making the bounded plugin fix. | Sep 24, 2026, 15:38 UTC | [issue-openclaw-openclaw-77717](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-77717.md) | [36021121500](https://github.com/openclaw/clawsweeper/actions/runs/36021121500) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#157182](https://github.com/openclaw/openclaw/issues/157182) | action_planned | Reproduce the denial through the browser route and Gateway visibility boundary, then repair UI selection and recovery while preserving Gateway auth... | Sep 24, 2026, 10:40 UTC | [issue-openclaw-openclaw-157182](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-157182.md) | [35988158856](https://github.com/openclaw/clawsweeper/actions/runs/35988158856) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#157067](https://github.com/openclaw/openclaw/issues/157067) | action_planned | The issue remains open, and the requested repair has one identified worker transfer boundary. | Sep 24, 2026, 06:54 UTC | [issue-openclaw-openclaw-157067](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-157067.md) | [35966528845](https://github.com/openclaw/clawsweeper/actions/runs/35966528845) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#157039](https://github.com/openclaw/openclaw/issues/157039) | action_planned | The reported provider-owned defect has no open fix PR in the hydrated cluster. Keep the issue open while validating and preparing the fix. | Sep 24, 2026, 05:59 UTC | [issue-openclaw-openclaw-157039](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-157039.md) | [35962138237](https://github.com/openclaw/clawsweeper/actions/runs/35962138237) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#156998](https://github.com/openclaw/openclaw/pull/156998) | action_planned | Plan a narrow fix only if the required regression fails on the preflight main revision. Preserve the reporter’s issue and credit the contributor’s... | Sep 24, 2026, 05:00 UTC | [issue-openclaw-openclaw-156998](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-156998.md) | [35957773602](https://github.com/openclaw/clawsweeper/actions/runs/35957773602) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#156985](https://github.com/openclaw/openclaw/issues/156985) | action_planned | The reported behavior is a deployment compatibility bug. Runtime reproduction on an affected image remains the first implementation gate. | Sep 24, 2026, 04:40 UTC | [issue-openclaw-openclaw-156985](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-156985.md) | [35956413082](https://github.com/openclaw/clawsweeper/actions/runs/35956413082) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#156956](https://github.com/openclaw/openclaw/issues/156956) | action_planned | A missing completion event has no settlement path. The merged image-paste parser PR addresses a different defect. | Sep 24, 2026, 03:40 UTC | [issue-openclaw-openclaw-156956](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-156956.md) | [35952220010](https://github.com/openclaw/clawsweeper/actions/runs/35952220010) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#156754](https://github.com/openclaw/openclaw/pull/156754) | action_planned | The issue remains open and the reported path is missing a mirror on current main. Prove the failure through a Cron run and the outbound boundary be... | Sep 24, 2026, 01:07 UTC | [issue-openclaw-openclaw-156754](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-156754.md) | [35935991580](https://github.com/openclaw/clawsweeper/actions/runs/35935991580) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#156763](https://github.com/openclaw/openclaw/pull/156763) | action_planned | Reproduce both refusals through the CLI, then make the guidance command-aware while retaining the destructive-write guard and config set wording. | Sep 23, 2026, 23:00 UTC | [issue-openclaw-openclaw-156763](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-156763.md) | [35930947718](https://github.com/openclaw/clawsweeper/actions/runs/35930947718) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#156749](https://github.com/openclaw/openclaw/issues/156749) | action_planned | Exclude Chrome-known debugger-forbidden pages at the extension tab eligibility owner before publishing inventory, while retaining complete-inventor... | Sep 23, 2026, 22:57 UTC | [issue-openclaw-openclaw-156749](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-156749.md) | [35925413547](https://github.com/openclaw/clawsweeper/actions/runs/35925413547) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#111595](https://github.com/openclaw/openclaw/pull/111595) | action_planned | Add a regression that fails on this main SHA, then repair the existing grouping and preference owners. Recheck active PR ownership and coordinate w... | Sep 23, 2026, 21:10 UTC | [issue-openclaw-openclaw-111595](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-111595.md) | [35920246495](https://github.com/openclaw/clawsweeper/actions/runs/35920246495) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#156520](https://github.com/openclaw/openclaw/pull/156520) | action_planned | The diagnostic flood remains a distinct bug with a narrow fix path. Implementation must first reproduce it on current main; closure and merge are p... | Sep 23, 2026, 16:37 UTC | [issue-openclaw-openclaw-156520](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-156520.md) | [35876337268](https://github.com/openclaw/clawsweeper/actions/runs/35876337268) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#156359](https://github.com/openclaw/openclaw/pull/156359) | action_planned | This is a bounded, unfixed adapter integration gap. Keep the issue open and prepare one implementation PR after reproducing the defect and completi... | Sep 23, 2026, 10:41 UTC | [issue-openclaw-openclaw-156359](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-156359.md) | [35849891558](https://github.com/openclaw/clawsweeper/actions/runs/35849891558) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#137265](https://github.com/openclaw/openclaw/pull/137265) | action_planned | A focused repair is appropriate, conditional on executable reproduction against current main. Keep the issue open; closure and merge are prohibited. | Sep 23, 2026, 06:53 UTC | [issue-openclaw-openclaw-137265](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-137265.md) | [35828585109](https://github.com/openclaw/clawsweeper/actions/runs/35828585109) |

#### Intervention Needed

| Repository | Item | Lane state | Recorded blocker | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-120616](cluster:issue-openclaw-openclaw-120616) | automation_failed | A writable checkout with dependencies is required to reproduce through the agent cron tool before editing, then validate the fix. | Sep 24, 2026, 21:58 UTC | [issue-openclaw-openclaw-120616](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120616.md) | [36056208197](https://github.com/openclaw/clawsweeper/actions/runs/36056208197) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-157477](cluster:issue-openclaw-openclaw-157477) | automation_failed | Implementation requires a writable, dependency-ready checkout. | Sep 24, 2026, 19:09 UTC | [issue-openclaw-openclaw-157477](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-157477.md) | [36041916997](https://github.com/openclaw/clawsweeper/actions/runs/36041916997) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-157442](cluster:issue-openclaw-openclaw-157442) | automation_failed | Implementation requires a writable executor checkout. | Sep 24, 2026, 18:42 UTC | [issue-openclaw-openclaw-157442](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-157442.md) | [36037481563](https://github.com/openclaw/clawsweeper/actions/runs/36037481563) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#157376](https://github.com/openclaw/openclaw/pull/157376) | automation_failed | An unmatched --replace-path containing a literal dotted key is reported as a different path. | Sep 24, 2026, 16:35 UTC | [issue-openclaw-openclaw-157376](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-157376.md) | [36024015198](https://github.com/openclaw/clawsweeper/actions/runs/36024015198) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): changed-gate validation has an unsafe existing artifacts directory | Sep 24, 2026, 15:03 UTC | [issue-openclaw-openclaw-157309](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-157309.md) | [36011066087](https://github.com/openclaw/clawsweeper/actions/runs/36011066087) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): changed-gate validation has an unsafe existing artifacts directory | Sep 24, 2026, 14:54 UTC | [issue-openclaw-openclaw-157152](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-157152.md) | [36011147648](https://github.com/openclaw/clawsweeper/actions/runs/36011147648) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): changed-gate validation has an unsafe existing artifacts directory | Sep 24, 2026, 12:53 UTC | [issue-openclaw-openclaw-157266](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-157266.md) | [35998851161](https://github.com/openclaw/clawsweeper/actions/runs/35998851161) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#138644](https://github.com/openclaw/openclaw/pull/138644) | automation_failed | A narrow lifecycle-state handoff appears viable, subject to a failing regression on this main SHA and a fresh check for the contributor’s PR. | Sep 24, 2026, 05:17 UTC | [issue-openclaw-openclaw-138644](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138644.md) | [35956269117](https://github.com/openclaw/clawsweeper/actions/runs/35956269117) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-128301](cluster:issue-openclaw-openclaw-128301) | automation_failed | The worker's filesystem is read-only; implementation and validation must run in the executor. | Sep 24, 2026, 03:10 UTC | [issue-openclaw-openclaw-128301](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128301.md) | [35947862279](https://github.com/openclaw/clawsweeper/actions/runs/35947862279) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-156765](cluster:issue-openclaw-openclaw-156765) | automation_failed | The read-only host prevents adding the required failing regression, installing dependencies, validating a patch, or preparing the PR branch. | Sep 23, 2026, 21:48 UTC | [issue-openclaw-openclaw-156765](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-156765.md) | [35920473421](https://github.com/openclaw/clawsweeper/actions/runs/35920473421) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119975](https://github.com/openclaw/openclaw/pull/119975) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Sep 23, 2026, 20:54 UTC | [automerge-openclaw-openclaw-119975](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119975.md) | [35915980292](https://github.com/openclaw/clawsweeper/actions/runs/35915980292) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-79469](cluster:issue-openclaw-openclaw-79469) | automation_failed | A writable checkout with installed dependencies is required to establish the requested failing regression, implement the fix, validate it, and capt... | Sep 23, 2026, 20:38 UTC | [issue-openclaw-openclaw-79469](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-79469.md) | [35912670873](https://github.com/openclaw/clawsweeper/actions/runs/35912670873) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#156524](https://github.com/openclaw/openclaw/pull/156524) | automation_failed | A diagnostic and documentation defect remains source-supported. The repair can preserve synchronous remote execution and all existing approval, tim... | Sep 23, 2026, 14:46 UTC | [issue-openclaw-openclaw-156524](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-156524.md) | [35868192206](https://github.com/openclaw/clawsweeper/actions/runs/35868192206) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118303](https://github.com/openclaw/openclaw/pull/118303) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Sep 23, 2026, 12:26 UTC | [automerge-openclaw-openclaw-118303](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118303.md) | [35858030894](https://github.com/openclaw/clawsweeper/actions/runs/35858030894) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-133922](cluster:issue-openclaw-openclaw-133922) | automation_failed | Implementation and publication are blocked until a writable executor establishes the failing regression, completes the narrow repair, and obtains r... | Sep 23, 2026, 08:47 UTC | [issue-openclaw-openclaw-133922](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-133922.md) | [35829641100](https://github.com/openclaw/clawsweeper/actions/runs/35829641100) |

#### No Pending Action

| Repository | Item | Lane state | Latest result | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep the issue open and preserve the existing contributor implementation. The candidate PR needs CI investigation and validation; a competing imple... | Sep 21, 2026, 22:40 UTC | [issue-openclaw-openclaw-155193](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-155193.md) | [35660017682](https://github.com/openclaw/clawsweeper/actions/runs/35660017682) |
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

#### Completed

| Repository | Item | Lane state | Recorded outcome | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

### Clusters Needing Inspection

| Cluster | State | Reason | Report | Run |
| --- | --- | --- | --- | --- |
| issue-openclaw-openclaw-157309 | execute_fix blocked | validation command failed (pnpm check:changed): changed-gate validation has an unsafe existing artifacts directory | [issue-openclaw-openclaw-157309](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-157309.md) | [36011066087](https://github.com/openclaw/clawsweeper/actions/runs/36011066087) |
| issue-openclaw-openclaw-157152 | execute_fix blocked | validation command failed (pnpm check:changed): changed-gate validation has an unsafe existing artifacts directory | [issue-openclaw-openclaw-157152](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-157152.md) | [36011147648](https://github.com/openclaw/clawsweeper/actions/runs/36011147648) |
| issue-openclaw-openclaw-157266 | execute_fix blocked | validation command failed (pnpm check:changed): changed-gate validation has an unsafe existing artifacts directory | [issue-openclaw-openclaw-157266](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-157266.md) | [35998851161](https://github.com/openclaw/clawsweeper/actions/runs/35998851161) |
| issue-openclaw-openclaw-122583 | execute_fix blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [issue-openclaw-openclaw-122583](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122583.md) | [35699877249](https://github.com/openclaw/clawsweeper/actions/runs/35699877249) |
| issue-openclaw-openclaw-79797 | execute_fix blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [issue-openclaw-openclaw-79797](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-79797.md) | [35668813847](https://github.com/openclaw/clawsweeper/actions/runs/35668813847) |
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

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [issue-openclaw-openclaw-157309](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-157309.md) | blocked |  |  | validation command failed (pnpm check:changed): changed-gate validation has an unsafe existing artifacts directory | [36011066087](https://github.com/openclaw/clawsweeper/actions/runs/36011066087) |
| [issue-openclaw-openclaw-157152](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-157152.md) | blocked |  |  | validation command failed (pnpm check:changed): changed-gate validation has an unsafe existing artifacts directory | [36011147648](https://github.com/openclaw/clawsweeper/actions/runs/36011147648) |
| [issue-openclaw-openclaw-157266](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-157266.md) | blocked |  |  | validation command failed (pnpm check:changed): changed-gate validation has an unsafe existing artifacts directory | [35998851161](https://github.com/openclaw/clawsweeper/actions/runs/35998851161) |
| [issue-openclaw-openclaw-122583](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122583.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [35699877249](https://github.com/openclaw/clawsweeper/actions/runs/35699877249) |
| [issue-openclaw-openclaw-79797](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-79797.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [35668813847](https://github.com/openclaw/clawsweeper/actions/runs/35668813847) |
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

