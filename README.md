# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Sep 29, 2026, 07:24 UTC

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Planning review | Sep 29, 2026, 07:24 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/36536287722) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Apply idle | Sep 29, 2026, 07:08 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/36534746443) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Sep 29, 2026, 05:49 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/36527937755) |

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

Last source update: Sep 29, 2026, 07:17 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 1293 | 100% |
| Run attempts archived | 3864 | audit |
| Latest successful clusters | 1074 | 83.1% |
| Latest failed clusters | 216 | 16.7% |
| Latest cancelled clusters | 3 | 0.2% |
| Needs-human clusters | 134 | 10.4% |
| Fix actions failed | 32 | 4.1% |
| Fix actions blocked | 164 | 21.2% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 322 | 99.7% |
| Skipped mutation attempts | 1 | 0.3% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 1293 clusters: 360 maintainer action, 389 automation snapshot, 493 intervention needed, 51 no pending action, 0 completed.
- Maintainer first: [steipete/codexbar](https://github.com/steipete/codexbar) [cluster:issue-steipete-codexbar-3728](cluster:issue-steipete-codexbar-3728) is maintainer_input: Provide a documented read-only Ensemble account quota API or a redacted, authorized account response that establishes monthly review usag....
- Intervention first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [cluster:issue-openclaw-openclaw-161022](cluster:issue-openclaw-openclaw-161022) is automation_failed: Implementation and validation require a writable checkout with dependencies..
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#160895](https://github.com/openclaw/openclaw/pull/160895) is action_planned: Reproduce the defect on the pinned main head, inspect the failing check, then make only necessary repairs on this editable contributor br....
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 360 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 389 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 493 | automation failure or blocker recorded |
| No Pending Action | 51 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 213 |
| merge_ready | 45 |
| merge_not_authorized | 102 |
| checks_blocked | 43 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 345 |
| automation_failed | 227 |
| automation_blocked | 266 |
| reviewed_no_action | 51 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [cluster:issue-steipete-codexbar-3728](cluster:issue-steipete-codexbar-3728) | maintainer_input | Provide a documented read-only Ensemble account quota API or a redacted, authorized account response that establishes monthly review usage, the ens... | Sep 29, 2026, 06:00 UTC | [issue-steipete-codexbar-3728](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3728.md) | [36528627359](https://github.com/openclaw/clawsweeper/actions/runs/36528627359) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#3660](https://github.com/steipete/codexbar/issues/3660) | maintainer_input | Obtain a current automatic-auth reproduction for #3660 after #3814 and #3883: selected Auth source, signed-in browser/profile, and exact error. The... | Sep 28, 2026, 22:32 UTC | [issue-steipete-codexbar-3660](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3660.md) | [36489034004](https://github.com/openclaw/clawsweeper/actions/runs/36489034004) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#143017](https://github.com/openclaw/openclaw/issues/143017) | maintainer_input | Route this linked item to central security handling; it does not govern the narrow recall-identity fix. | Sep 28, 2026, 22:00 UTC | [issue-openclaw-openclaw-160672](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-160672.md) | [36489263386](https://github.com/openclaw/clawsweeper/actions/runs/36489263386) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | [#1119](https://github.com/openclaw/openclaw-windows-node/issues/1119) | maintainer_input | Route this historical PR to central OpenClaw security handling. The #1493 fix must stay within chat presentation and echo correlation. | Sep 28, 2026, 17:56 UTC | [issue-openclaw-openclaw-windows-node-1493](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1493.md) | [36458278815](https://github.com/openclaw/clawsweeper/actions/runs/36458278815) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | [#1432](https://github.com/openclaw/openclaw-windows-node/pull/1432) | maintainer_input | #1432: The failing raw invocation and result, Diagnostics output, effective sandbox settings, execution mode, and a current-main reproduction are u... | Sep 28, 2026, 13:54 UTC | [issue-openclaw-openclaw-windows-node-1432](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1432.md) | [36426283632](https://github.com/openclaw/clawsweeper/actions/runs/36426283632) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#3377](https://github.com/steipete/codexbar/issues/3377) | maintainer_input | For #3377, determine the corrective path after obtaining matched AppKit/Quartz geometry and rendered-content evidence on an affected machine; the c... | Sep 28, 2026, 11:32 UTC | [issue-steipete-codexbar-3377](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3377.md) | [36415779816](https://github.com/openclaw/clawsweeper/actions/runs/36415779816) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#3954](https://github.com/steipete/codexbar/issues/3954) | maintainer_input | Quarantine this exact linked PR for central OpenClaw security handling. Its Codex catch-up component does not block classification of #3316. | Sep 28, 2026, 08:50 UTC | [issue-steipete-codexbar-3316](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3316.md) | [36399117869](https://github.com/openclaw/clawsweeper/actions/runs/36399117869) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#74454](https://github.com/openclaw/openclaw/issues/74454) | maintainer_input | Historical security-sensitive linked ref; no ClawSweeper Repair mutation. | Sep 28, 2026, 05:39 UTC | [issue-openclaw-openclaw-160064](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-160064.md) | [36382613428](https://github.com/openclaw/clawsweeper/actions/runs/36382613428) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [cluster:issue-steipete-codexbar-3209](cluster:issue-steipete-codexbar-3209) | maintainer_input | For #3209, obtain a redacted relative folder/file layout for one affected Desktop Cowork session and confirmation of whether its JSONL transcript c... | Sep 28, 2026, 05:13 UTC | [issue-steipete-codexbar-3209](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3209.md) | [36380621043](https://github.com/openclaw/clawsweeper/actions/runs/36380621043) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | [cluster:issue-openclaw-clawsweeper-1128](cluster:issue-openclaw-clawsweeper-1128) | maintainer_input | Select a bounded behavioral region in dashboard/worker.ts or dashboard/exact-review-queue.ts for the next focused implementation job under https://... | Sep 28, 2026, 04:09 UTC | [issue-openclaw-clawsweeper-1128](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-clawsweeper-1128.md) | [36376134830](https://github.com/openclaw/clawsweeper/actions/runs/36376134830) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#2838](https://github.com/steipete/codexbar/issues/2838) | maintainer_input | After current-release WidgetKit and installed-bundle diagnostics are collected, decide whether an app-side Sparkle lifecycle change is warranted. | Sep 28, 2026, 03:42 UTC | [issue-steipete-codexbar-2838](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-2838.md) | [36374442825](https://github.com/openclaw/clawsweeper/actions/runs/36374442825) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#2609](https://github.com/steipete/codexbar/issues/2609) | maintainer_input | Select a specific upstream change for #2609 and state the expected CodexBar behavior or reproducible defect. | Sep 28, 2026, 03:40 UTC | [issue-steipete-codexbar-2609](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-2609.md) | [36374454440](https://github.com/openclaw/clawsweeper/actions/runs/36374454440) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [cluster:issue-steipete-codexbar-1711](cluster:issue-steipete-codexbar-1711) | maintainer_input | Obtain a redacted failing current-build startup Debug Log for #1711 showing status-item snapshots and the recovery outcome before selecting an impl... | Sep 28, 2026, 03:08 UTC | [issue-steipete-codexbar-1711](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-1711.md) | [36367447933](https://github.com/openclaw/clawsweeper/actions/runs/36367447933) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#3954](https://github.com/steipete/codexbar/issues/3954) | maintainer_input | Route this exact linked PR to central security handling; its classification does not block the non-security issue review. | Sep 28, 2026, 01:52 UTC | [issue-steipete-codexbar-1999](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-1999.md) | [36367388855](https://github.com/openclaw/clawsweeper/actions/runs/36367388855) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#114506](https://github.com/openclaw/openclaw/issues/114506) | maintainer_input | Keep this linked, already-merged security item outside ClawSweeper Repair. | Sep 28, 2026, 01:21 UTC | [issue-openclaw-openclaw-159985](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-159985.md) | [36365321799](https://github.com/openclaw/clawsweeper/actions/runs/36365321799) |

#### Automation Snapshot

| Repository | Item | Lane state | Recorded status | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#160895](https://github.com/openclaw/openclaw/pull/160895) | action_planned | Reproduce the defect on the pinned main head, inspect the failing check, then make only necessary repairs on this editable contributor branch. Rech... | Sep 29, 2026, 03:03 UTC | [issue-openclaw-openclaw-160889](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-160889.md) | [36515161457](https://github.com/openclaw/clawsweeper/actions/runs/36515161457) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#160875](https://github.com/openclaw/openclaw/pull/160875) | action_planned | The issue has a focused, source-supported bug path and no candidate PR. Plan a failing regression through the consumer before changing the reader. | Sep 29, 2026, 02:48 UTC | [issue-openclaw-openclaw-160875](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-160875.md) | [36513886937](https://github.com/openclaw/clawsweeper/actions/runs/36513886937) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#160839](https://github.com/openclaw/openclaw/issues/160839) | action_planned | The reported failure is plausible on current source, but implementation must wait for the required entry-point reproduction. | Sep 29, 2026, 01:52 UTC | [issue-openclaw-openclaw-160839](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-160839.md) | [36509553797](https://github.com/openclaw/clawsweeper/actions/runs/36509553797) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#160474](https://github.com/openclaw/openclaw/pull/160474) | action_planned | The job permits one narrow fix PR and prohibits closing or merging the issue. | Sep 28, 2026, 15:39 UTC | [issue-openclaw-openclaw-160474](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-160474.md) | [36444728414](https://github.com/openclaw/clawsweeper/actions/runs/36444728414) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#160313](https://github.com/openclaw/openclaw/pull/160313) | action_planned | The CI failure and unchanged main source support a narrow fixture repair. The executor must reproduce the original failure on main before editing,... | Sep 28, 2026, 10:39 UTC | [issue-openclaw-openclaw-160313](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-160313.md) | [36410684946](https://github.com/openclaw/clawsweeper/actions/runs/36410684946) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#160236](https://github.com/openclaw/openclaw/issues/160236) | action_planned | Keep the issue open. Establish the failing retained-monitor regression, then read one applied Plugin SDK config snapshot per new event and carry it... | Sep 28, 2026, 07:55 UTC | [issue-openclaw-openclaw-160236](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-160236.md) | [36393982382](https://github.com/openclaw/clawsweeper/actions/runs/36393982382) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#160149](https://github.com/openclaw/openclaw/issues/160149) | action_planned | Keep the distinct residual report open while its fix is developed. | Sep 28, 2026, 07:09 UTC | [issue-openclaw-openclaw-160149](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-160149.md) | [36389648483](https://github.com/openclaw/clawsweeper/actions/runs/36389648483) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#159872](https://github.com/openclaw/openclaw/pull/159872) | action_planned | Doctor and memory status should name the requested source that was excluded and give an enablement hint. | Sep 27, 2026, 21:35 UTC | [issue-openclaw-openclaw-159872](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-159872.md) | [36351968771](https://github.com/openclaw/clawsweeper/actions/runs/36351968771) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#156442](https://github.com/openclaw/openclaw/pull/156442) | action_planned | The closed source PR did not land. Confirm the failure on the preflight main SHA, then implement one bounded same-candidate, same-session retry. | Sep 27, 2026, 19:35 UTC | [issue-openclaw-openclaw-156442](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-156442.md) | [36344685802](https://github.com/openclaw/clawsweeper/actions/runs/36344685802) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#159637](https://github.com/openclaw/openclaw/pull/159637) | action_planned | Implement the reported intake fix after confirming the regression fails on current main. | Sep 27, 2026, 13:06 UTC | [issue-openclaw-openclaw-159637](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-159637.md) | [36321029171](https://github.com/openclaw/clawsweeper/actions/runs/36321029171) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#159184](https://github.com/openclaw/openclaw/pull/159184) | action_planned | First demonstrate the failing user-copy regression, then add bounded guidance to shorten the request without echoing arbitrary provider text or cha... | Sep 27, 2026, 12:08 UTC | [issue-openclaw-openclaw-159184](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-159184.md) | [36317715357](https://github.com/openclaw/clawsweeper/actions/runs/36317715357) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#158944](https://github.com/openclaw/openclaw/issues/158944) | action_planned | A narrow bug fix is plausible, but the required latest-main reproduction remains outstanding. | Sep 27, 2026, 08:40 UTC | [issue-openclaw-openclaw-158944](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-158944.md) | [36306798258](https://github.com/openclaw/clawsweeper/actions/runs/36306798258) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#158284](https://github.com/openclaw/openclaw/pull/158284) | action_planned | Add a regression that fails at the binding-to-Slack delivery boundary before editing. Repair must preserve top-level delivery for a top-level reque... | Sep 27, 2026, 04:42 UTC | [issue-openclaw-openclaw-158284](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-158284.md) | [36294898150](https://github.com/openclaw/clawsweeper/actions/runs/36294898150) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#159330](https://github.com/openclaw/openclaw/issues/159330) | action_planned | First add a Gateway admission regression that fails on this main SHA. Then classify the empty root as an active-path ancestor while retaining Gatew... | Sep 27, 2026, 03:43 UTC | [issue-openclaw-openclaw-159330](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-159330.md) | [36292036665](https://github.com/openclaw/clawsweeper/actions/runs/36292036665) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#159313](https://github.com/openclaw/openclaw/issues/159313) | action_planned | Reproduce the failure on macOS arm64, then add a failing regression through generation capture and repair only the Bun/Darwin descriptor-copy fallb... | Sep 27, 2026, 03:05 UTC | [issue-openclaw-openclaw-159313](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-159313.md) | [36290155625](https://github.com/openclaw/clawsweeper/actions/runs/36290155625) |

#### Intervention Needed

| Repository | Item | Lane state | Recorded blocker | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-161022](cluster:issue-openclaw-openclaw-161022) | automation_failed | Implementation and validation require a writable checkout with dependencies. | Sep 29, 2026, 07:17 UTC | [issue-openclaw-openclaw-161022](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161022.md) | [36531939759](https://github.com/openclaw/clawsweeper/actions/runs/36531939759) |
| [openclaw/notcrawl](https://github.com/openclaw/notcrawl) | [cluster:issue-openclaw-notcrawl-155](cluster:issue-openclaw-notcrawl-155) | automation_failed | Implementation and local validation are blocked by the read-only filesystem; the fix plan is ready for a writable executor. | Sep 29, 2026, 05:48 UTC | [issue-openclaw-notcrawl-155](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-notcrawl-155.md) | [36527582682](https://github.com/openclaw/clawsweeper/actions/runs/36527582682) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119975](https://github.com/openclaw/openclaw/pull/119975) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Sep 29, 2026, 02:14 UTC | [automerge-openclaw-openclaw-119975](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119975.md) | [36509642695](https://github.com/openclaw/clawsweeper/actions/runs/36509642695) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118806](https://github.com/openclaw/openclaw/pull/118806) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Sep 29, 2026, 00:47 UTC | [automerge-openclaw-openclaw-118806](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118806.md) | [36503605549](https://github.com/openclaw/clawsweeper/actions/runs/36503605549) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-113326](cluster:issue-openclaw-openclaw-113326) | automation_failed | Implementation and boundary proof require a writable checkout with dependencies and the required sibling Codex source. | Sep 28, 2026, 23:16 UTC | [issue-openclaw-openclaw-113326](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-113326.md) | [36492041330](https://github.com/openclaw/clawsweeper/actions/runs/36492041330) |
| [steipete/codexbar](https://github.com/steipete/codexbar) |  | automation_blocked | No implementation PR is warranted. Current main already contains the repeated-close fix from merged PR #3674. The remaining Claude refresh stall ha... | Sep 28, 2026, 22:31 UTC | [issue-steipete-codexbar-3671](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3671.md) | [36489053040](https://github.com/openclaw/clawsweeper/actions/runs/36489053040) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-160716](cluster:issue-openclaw-openclaw-160716) | automation_failed | The job requires reproduction before code changes. Resume implementation in a writable environment that permits the TCP probe. | Sep 28, 2026, 22:08 UTC | [issue-openclaw-openclaw-160716](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-160716.md) | [36485661851](https://github.com/openclaw/clawsweeper/actions/runs/36485661851) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-160577](cluster:issue-openclaw-openclaw-160577) | automation_failed | The executor must first reproduce the failure through the real mirror bridge composed with provenance, then make and validate the narrow change in... | Sep 28, 2026, 17:52 UTC | [issue-openclaw-openclaw-160577](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-160577.md) | [36457506490](https://github.com/openclaw/clawsweeper/actions/runs/36457506490) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=extensions, extensionTests, tooling... | Sep 28, 2026, 16:23 UTC | [issue-openclaw-openclaw-125873](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-125873.md) | [36444377660](https://github.com/openclaw/clawsweeper/actions/runs/36444377660) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | [#1492](https://github.com/openclaw/openclaw-windows-node/pull/1492) | automation_failed | The reported caret failure has a focused composer code path and no viable open fix PR. | Sep 28, 2026, 15:53 UTC | [issue-openclaw-openclaw-windows-node-1492](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1492.md) | [36446124075](https://github.com/openclaw/clawsweeper/actions/runs/36446124075) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | [#1443](https://github.com/openclaw/openclaw-windows-node/pull/1443) | automation_failed | The reported data loss has a narrow source-supported repair path, subject to current-head runtime proof. | Sep 28, 2026, 15:02 UTC | [issue-openclaw-openclaw-windows-node-1443](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1443.md) | [36439950623](https://github.com/openclaw/clawsweeper/actions/runs/36439950623) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-160441](cluster:issue-openclaw-openclaw-160441) | automation_failed | Implementation requires a writable checkout with dependencies before a fix PR can be prepared. | Sep 28, 2026, 13:27 UTC | [issue-openclaw-openclaw-160441](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-160441.md) | [36422107042](https://github.com/openclaw/clawsweeper/actions/runs/36422107042) |
| [openclaw/acpx](https://github.com/openclaw/acpx) |  | automation_blocked | Issue #808 remains open, but the available evidence does not identify whether acpx, the configured agent, or the Codex sandbox causes the failure.... | Sep 28, 2026, 11:57 UTC | [issue-openclaw-acpx-808](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-acpx-808.md) | [36417150793](https://github.com/openclaw/clawsweeper/actions/runs/36417150793) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#160377](https://github.com/openclaw/openclaw/pull/160377) | automation_failed | The reported Windows Doctor failure has a narrow, identifiable browser-plugin fix. | Sep 28, 2026, 11:33 UTC | [issue-openclaw-openclaw-160377](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-160377.md) | [36411855070](https://github.com/openclaw/clawsweeper/actions/runs/36411855070) |
| [steipete/codexbar](https://github.com/steipete/codexbar) |  | automation_blocked | No implementation PR is justified yet. Current main repairs the reported 6,247-point position and validates saved positions during status-item crea... | Sep 28, 2026, 11:31 UTC | [issue-steipete-codexbar-3355](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3355.md) | [36415667908](https://github.com/openclaw/clawsweeper/actions/runs/36415667908) |

#### No Pending Action

| Repository | Item | Lane state | Latest result | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | No fix PR is planned. The issue is already closed after a Gateway reproduction handled namespaced-channel attachments successfully. Current main st... | Sep 28, 2026, 01:19 UTC | [issue-openclaw-openclaw-159977](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-159977.md) | [36365323873](https://github.com/openclaw/clawsweeper/actions/runs/36365323873) |
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

#### Completed

| Repository | Item | Lane state | Recorded outcome | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

### Clusters Needing Inspection

| Cluster | State | Reason | Report | Run |
| --- | --- | --- | --- | --- |
| issue-steipete-codexbar-3728 | needs human | Provide a documented read-only Ensemble account quota API or a redacted, authorized account response that establishes monthly review usage, the ens... | [issue-steipete-codexbar-3728](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3728.md) | [36528627359](https://github.com/openclaw/clawsweeper/actions/runs/36528627359) |
| issue-steipete-codexbar-3660 | needs human | Obtain a current automatic-auth reproduction for #3660 after #3814 and #3883: selected Auth source, signed-in browser/profile, and exact error. The... | [issue-steipete-codexbar-3660](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3660.md) | [36489034004](https://github.com/openclaw/clawsweeper/actions/runs/36489034004) |
| issue-openclaw-openclaw-125873 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=extensions, extensionTests, tooling... | [issue-openclaw-openclaw-125873](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-125873.md) | [36444377660](https://github.com/openclaw/clawsweeper/actions/runs/36444377660) |
| issue-openclaw-openclaw-windows-node-1432 | needs human | #1432: The failing raw invocation and result, Diagnostics output, effective sandbox settings, execution mode, and a current-main reproduction are u... | [issue-openclaw-openclaw-windows-node-1432](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1432.md) | [36426283632](https://github.com/openclaw/clawsweeper/actions/runs/36426283632) |
| issue-steipete-codexbar-3377 | needs human | For #3377, determine the corrective path after obtaining matched AppKit/Quartz geometry and rendered-content evidence on an affected machine; the c... | [issue-steipete-codexbar-3377](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3377.md) | [36415779816](https://github.com/openclaw/clawsweeper/actions/runs/36415779816) |
| issue-steipete-codexbar-3209 | needs human | For #3209, obtain a redacted relative folder/file layout for one affected Desktop Cowork session and confirmation of whether its JSONL transcript c... | [issue-steipete-codexbar-3209](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3209.md) | [36380621043](https://github.com/openclaw/clawsweeper/actions/runs/36380621043) |
| issue-openclaw-clawsweeper-1128 | needs human | Select a bounded behavioral region in dashboard/worker.ts or dashboard/exact-review-queue.ts for the next focused implementation job under https://... | [issue-openclaw-clawsweeper-1128](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-clawsweeper-1128.md) | [36376134830](https://github.com/openclaw/clawsweeper/actions/runs/36376134830) |
| issue-steipete-codexbar-2838 | needs human | After current-release WidgetKit and installed-bundle diagnostics are collected, decide whether an app-side Sparkle lifecycle change is warranted. | [issue-steipete-codexbar-2838](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-2838.md) | [36374442825](https://github.com/openclaw/clawsweeper/actions/runs/36374442825) |
| issue-steipete-codexbar-2609 | needs human | Select a specific upstream change for #2609 and state the expected CodexBar behavior or reproducible defect. | [issue-steipete-codexbar-2609](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-2609.md) | [36374454440](https://github.com/openclaw/clawsweeper/actions/runs/36374454440) |
| issue-steipete-codexbar-1711 | needs human | Obtain a redacted failing current-build startup Debug Log for #1711 showing status-item snapshots and the recovery outcome before selecting an impl... | [issue-steipete-codexbar-1711](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-1711.md) | [36367447933](https://github.com/openclaw/clawsweeper/actions/runs/36367447933) |
| issue-openclaw-imsg-322 | execute_fix blocked | external base blocker: validation failed only in base-identical files outside the repair delta: Makefile | [issue-openclaw-imsg-322](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-imsg-322.md) | [36368874126](https://github.com/openclaw/clawsweeper/actions/runs/36368874126) |
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
| issue-openclaw-openclaw-144597 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [issue-openclaw-openclaw-144597](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-144597.md) | [34556487880](https://github.com/openclaw/clawsweeper/actions/runs/34556487880) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [issue-openclaw-openclaw-125873](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-125873.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=extensions, extensionTests, tooling... | [36444377660](https://github.com/openclaw/clawsweeper/actions/runs/36444377660) |
| [issue-openclaw-imsg-322](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-imsg-322.md) | blocked |  |  | external base blocker: validation failed only in base-identical files outside the repair delta: Makefile | [36368874126](https://github.com/openclaw/clawsweeper/actions/runs/36368874126) |
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

