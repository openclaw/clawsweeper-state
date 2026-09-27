# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Sep 27, 2026, 22:22 UTC

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Planning review | Sep 27, 2026, 22:14 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/36354536872) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Apply idle | Sep 27, 2026, 22:22 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/36354969440) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Sep 27, 2026, 21:50 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/36353143258) |

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

Last source update: Sep 27, 2026, 21:35 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 1242 | 100% |
| Run attempts archived | 3764 | audit |
| Latest successful clusters | 1041 | 83.8% |
| Latest failed clusters | 198 | 15.9% |
| Latest cancelled clusters | 3 | 0.2% |
| Needs-human clusters | 126 | 10.1% |
| Fix actions failed | 33 | 4.4% |
| Fix actions blocked | 163 | 21.7% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 322 | 99.7% |
| Skipped mutation attempts | 1 | 0.3% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 1242 clusters: 346 maintainer action, 382 automation snapshot, 464 intervention needed, 50 no pending action, 0 completed.
- Maintainer first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#159304](https://github.com/openclaw/openclaw/issues/159304) is maintainer_input: Keep this separate from the automatic rollover defect and route it to central security handling..
- Intervention first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [cluster:issue-openclaw-openclaw-153502](cluster:issue-openclaw-openclaw-153502) is automation_failed: Implementation requires a writable executor checkout..
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#159872](https://github.com/openclaw/openclaw/pull/159872) is action_planned: Doctor and memory status should name the requested source that was excluded and give an enablement hint..
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 346 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 382 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 464 | automation failure or blocker recorded |
| No Pending Action | 50 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 199 |
| merge_ready | 45 |
| merge_not_authorized | 102 |
| checks_blocked | 43 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 338 |
| automation_failed | 211 |
| automation_blocked | 253 |
| reviewed_no_action | 50 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#159304](https://github.com/openclaw/openclaw/issues/159304) | maintainer_input | Keep this separate from the automatic rollover defect and route it to central security handling. | Sep 27, 2026, 06:51 UTC | [issue-openclaw-openclaw-159452](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-159452.md) | [36301187338](https://github.com/openclaw/clawsweeper/actions/runs/36301187338) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#123159](https://github.com/openclaw/openclaw/issues/123159) | maintainer_input | Quarantine this historical linked PR only; it requires no close or merge action. | Sep 26, 2026, 19:58 UTC | [issue-openclaw-openclaw-159080](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-159080.md) | [36267692534](https://github.com/openclaw/clawsweeper/actions/runs/36267692534) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#155479](https://github.com/openclaw/openclaw/pull/155479) | maintainer_input | Route this token-related PR outside ClawSweeper Repair; it is unrelated to stream finalization. | Sep 25, 2026, 14:45 UTC | [issue-openclaw-openclaw-158103](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-158103.md) | [36149165779](https://github.com/openclaw/clawsweeper/actions/runs/36149165779) |
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

#### Automation Snapshot

| Repository | Item | Lane state | Recorded status | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#159872](https://github.com/openclaw/openclaw/pull/159872) | action_planned | Doctor and memory status should name the requested source that was excluded and give an enablement hint. | Sep 27, 2026, 21:35 UTC | [issue-openclaw-openclaw-159872](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-159872.md) | [36351968771](https://github.com/openclaw/clawsweeper/actions/runs/36351968771) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#156442](https://github.com/openclaw/openclaw/pull/156442) | action_planned | The closed source PR did not land. Confirm the failure on the preflight main SHA, then implement one bounded same-candidate, same-session retry. | Sep 27, 2026, 19:35 UTC | [issue-openclaw-openclaw-156442](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-156442.md) | [36344685802](https://github.com/openclaw/clawsweeper/actions/runs/36344685802) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#159637](https://github.com/openclaw/openclaw/pull/159637) | action_planned | Implement the reported intake fix after confirming the regression fails on current main. | Sep 27, 2026, 13:06 UTC | [issue-openclaw-openclaw-159637](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-159637.md) | [36321029171](https://github.com/openclaw/clawsweeper/actions/runs/36321029171) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#159184](https://github.com/openclaw/openclaw/pull/159184) | action_planned | First demonstrate the failing user-copy regression, then add bounded guidance to shorten the request without echoing arbitrary provider text or cha... | Sep 27, 2026, 12:08 UTC | [issue-openclaw-openclaw-159184](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-159184.md) | [36317715357](https://github.com/openclaw/clawsweeper/actions/runs/36317715357) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#158944](https://github.com/openclaw/openclaw/issues/158944) | action_planned | A narrow bug fix is plausible, but the required latest-main reproduction remains outstanding. | Sep 27, 2026, 08:40 UTC | [issue-openclaw-openclaw-158944](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-158944.md) | [36306798258](https://github.com/openclaw/clawsweeper/actions/runs/36306798258) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#158284](https://github.com/openclaw/openclaw/pull/158284) | action_planned | Add a regression that fails at the binding-to-Slack delivery boundary before editing. Repair must preserve top-level delivery for a top-level reque... | Sep 27, 2026, 04:42 UTC | [issue-openclaw-openclaw-158284](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-158284.md) | [36294898150](https://github.com/openclaw/clawsweeper/actions/runs/36294898150) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#159330](https://github.com/openclaw/openclaw/issues/159330) | action_planned | First add a Gateway admission regression that fails on this main SHA. Then classify the empty root as an active-path ancestor while retaining Gatew... | Sep 27, 2026, 03:43 UTC | [issue-openclaw-openclaw-159330](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-159330.md) | [36292036665](https://github.com/openclaw/clawsweeper/actions/runs/36292036665) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#159313](https://github.com/openclaw/openclaw/issues/159313) | action_planned | Reproduce the failure on macOS arm64, then add a failing regression through generation capture and repair only the Bun/Darwin descriptor-copy fallb... | Sep 27, 2026, 03:05 UTC | [issue-openclaw-openclaw-159313](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-159313.md) | [36290155625](https://github.com/openclaw/clawsweeper/actions/runs/36290155625) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#159276](https://github.com/openclaw/openclaw/pull/159276) | action_planned | No hydrated candidate PR covers this distinct direct-completion path. | Sep 27, 2026, 02:11 UTC | [issue-openclaw-openclaw-159276](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-159276.md) | [36287550389](https://github.com/openclaw/clawsweeper/actions/runs/36287550389) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#158946](https://github.com/openclaw/openclaw/pull/158946) | action_planned | Implement only after the original failure is reproduced; keep the issue open. | Sep 26, 2026, 16:35 UTC | [issue-openclaw-openclaw-158946](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-158946.md) | [36253571746](https://github.com/openclaw/clawsweeper/actions/runs/36253571746) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#158945](https://github.com/openclaw/openclaw/pull/158945) | action_planned | Keep the issue open and prove the reported failure through the real composition before changing code. | Sep 26, 2026, 15:57 UTC | [issue-openclaw-openclaw-158945](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-158945.md) | [36253573907](https://github.com/openclaw/clawsweeper/actions/runs/36253573907) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#158781](https://github.com/openclaw/openclaw/pull/158781) | action_planned | The source supports a narrow, unfixed Doctor bug. Plan mode has not run the required failing regression or validated a patch. | Sep 26, 2026, 10:37 UTC | [issue-openclaw-openclaw-158781](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-158781.md) | [36236186257](https://github.com/openclaw/clawsweeper/actions/runs/36236186257) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#158710](https://github.com/openclaw/openclaw/pull/158710) | action_planned | Keep the issue open while the scoped regression, fix, and validation are completed. | Sep 26, 2026, 09:35 UTC | [issue-openclaw-openclaw-158710](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-158710.md) | [36233064917](https://github.com/openclaw/clawsweeper/actions/runs/36233064917) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#158715](https://github.com/openclaw/openclaw/issues/158715) | action_planned | Reproduce the connection transition on current main, then repair the route through the shared runtime-config capability. Do not close the issue. | Sep 26, 2026, 07:35 UTC | [issue-openclaw-openclaw-158715](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-158715.md) | [36227089992](https://github.com/openclaw/clawsweeper/actions/runs/36227089992) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#158675](https://github.com/openclaw/openclaw/pull/158675) | action_planned | Keep the issue open and prepare one focused fix PR after a boundary regression fails on current main. | Sep 26, 2026, 06:49 UTC | [issue-openclaw-openclaw-158675](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-158675.md) | [36224721106](https://github.com/openclaw/clawsweeper/actions/runs/36224721106) |

#### Intervention Needed

| Repository | Item | Lane state | Recorded blocker | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-153502](cluster:issue-openclaw-openclaw-153502) | automation_failed | Implementation requires a writable executor checkout. | Sep 27, 2026, 21:10 UTC | [issue-openclaw-openclaw-153502](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-153502.md) | [36347895027](https://github.com/openclaw/clawsweeper/actions/runs/36347895027) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#159777](https://github.com/openclaw/openclaw/pull/159777) | automation_failed | Replace the affected assertion with completed target-screen evidence while retaining the backend-call and delivery checks. | Sep 27, 2026, 16:45 UTC | [issue-openclaw-openclaw-159777](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-159777.md) | [36333231414](https://github.com/openclaw/clawsweeper/actions/runs/36333231414) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-103198](cluster:issue-openclaw-openclaw-103198) | automation_failed | Implementation and PR creation are blocked by the read-only checkout and missing dependencies. | Sep 27, 2026, 16:37 UTC | [issue-openclaw-openclaw-103198](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-103198.md) | [36331700597](https://github.com/openclaw/clawsweeper/actions/runs/36331700597) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119975](https://github.com/openclaw/openclaw/pull/119975) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Sep 27, 2026, 13:04 UTC | [automerge-openclaw-openclaw-119975](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119975.md) | [36319362967](https://github.com/openclaw/clawsweeper/actions/runs/36319362967) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-103694](cluster:issue-openclaw-openclaw-103694) | automation_failed | The job requires a failing regression and a narrow dependency-backed repair before implementation. | Sep 27, 2026, 12:10 UTC | [issue-openclaw-openclaw-103694](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-103694.md) | [36315516160](https://github.com/openclaw/clawsweeper/actions/runs/36315516160) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#159538](https://github.com/openclaw/openclaw/pull/159538) | automation_failed | The open issue describes a current, bounded adapter defect with no viable open implementation PR in the hydrated inventory. | Sep 27, 2026, 09:17 UTC | [issue-openclaw-openclaw-159538](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-159538.md) | [36306495655](https://github.com/openclaw/clawsweeper/actions/runs/36306495655) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118806](https://github.com/openclaw/openclaw/pull/118806) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Sep 27, 2026, 08:45 UTC | [automerge-openclaw-openclaw-118806](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118806.md) | [36306326780](https://github.com/openclaw/clawsweeper/actions/runs/36306326780) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-82121](cluster:issue-openclaw-openclaw-82121) | automation_failed | Implementation requires a writable, independently owned checkout with dependencies installed. | Sep 27, 2026, 01:50 UTC | [issue-openclaw-openclaw-82121](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-82121.md) | [36284467607](https://github.com/openclaw/clawsweeper/actions/runs/36284467607) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#158922](https://github.com/openclaw/openclaw/pull/158922) | automation_blocked | The job requires a failing regression on current main before implementation. This worker cannot establish that proof or validate a patch in the rea... | Sep 27, 2026, 01:25 UTC | [issue-openclaw-openclaw-158922](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-158922.md) | [36285251629](https://github.com/openclaw/clawsweeper/actions/runs/36285251629) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-158969](cluster:issue-openclaw-openclaw-158969) | automation_failed | Implementation and its required failing-before-fix proof require a writable executor checkout. | Sep 26, 2026, 16:13 UTC | [issue-openclaw-openclaw-158969](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-158969.md) | [36252003184](https://github.com/openclaw/clawsweeper/actions/runs/36252003184) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-158890](cluster:issue-openclaw-openclaw-158890) | automation_failed | Implementation must wait for a writable executor to establish the required failing isolated-automation regression on this main SHA. | Sep 26, 2026, 13:41 UTC | [issue-openclaw-openclaw-158890](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-158890.md) | [36243894648](https://github.com/openclaw/clawsweeper/actions/runs/36243894648) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-158876](cluster:issue-openclaw-openclaw-158876) | automation_failed | A writable implementation host must first establish a failing registered-plugin regression, then implement and validate the narrow fix. | Sep 26, 2026, 13:07 UTC | [issue-openclaw-openclaw-158876](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-158876.md) | [36241908753](https://github.com/openclaw/clawsweeper/actions/runs/36241908753) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-158874](cluster:issue-openclaw-openclaw-158874) | automation_failed | Implementation must resume in a writable checkout at the preflight main revision and first prove the regression through generateVideo and generateM... | Sep 26, 2026, 13:02 UTC | [issue-openclaw-openclaw-158874](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-158874.md) | [36241819458](https://github.com/openclaw/clawsweeper/actions/runs/36241819458) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=apps [check:changed] apps/macos/Sour... | Sep 26, 2026, 00:31 UTC | [issue-openclaw-openclaw-153145](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-153145.md) | [36203268022](https://github.com/openclaw/clawsweeper/actions/runs/36203268022) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-158386](cluster:issue-openclaw-openclaw-158386) | automation_failed | The executor needs a writable checkout at current main before it can reproduce, patch, review, and validate the fix. | Sep 25, 2026, 23:01 UTC | [issue-openclaw-openclaw-158386](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-158386.md) | [36196581758](https://github.com/openclaw/clawsweeper/actions/runs/36196581758) |

#### No Pending Action

| Repository | Item | Lane state | Latest result | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Current main still uses the query-based config-reader guard. An open PR targets this issue and credits the reporter, so the plan keeps that PR as t... | Sep 25, 2026, 23:57 UTC | [issue-openclaw-openclaw-158339](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-158339.md) | [36202816044](https://github.com/openclaw/clawsweeper/actions/runs/36202816044) |
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

#### Completed

| Repository | Item | Lane state | Recorded outcome | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

### Clusters Needing Inspection

| Cluster | State | Reason | Report | Run |
| --- | --- | --- | --- | --- |
| issue-openclaw-openclaw-153145 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=apps [check:changed] apps/macos/Sour... | [issue-openclaw-openclaw-153145](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-153145.md) | [36203268022](https://github.com/openclaw/clawsweeper/actions/runs/36203268022) |
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

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [issue-openclaw-openclaw-153145](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-153145.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=apps [check:changed] apps/macos/Sour... | [36203268022](https://github.com/openclaw/clawsweeper/actions/runs/36203268022) |
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

