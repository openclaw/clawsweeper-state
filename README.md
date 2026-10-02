# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Oct 2, 2026, 11:47 UTC

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Apply finished | Oct 2, 2026, 11:47 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/36997836520) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Apply idle | Oct 2, 2026, 11:46 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/37002755375) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Oct 2, 2026, 10:45 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/36997128835) |

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

Last source update: Oct 2, 2026, 11:50 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 1376 | 100% |
| Run attempts archived | 4081 | audit |
| Latest successful clusters | 1140 | 82.8% |
| Latest failed clusters | 232 | 16.9% |
| Latest cancelled clusters | 4 | 0.3% |
| Needs-human clusters | 142 | 10.3% |
| Fix actions failed | 33 | 4.1% |
| Fix actions blocked | 173 | 21.4% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 325 | 99.7% |
| Skipped mutation attempts | 1 | 0.3% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 1376 clusters: 373 maintainer action, 422 automation snapshot, 523 intervention needed, 58 no pending action, 0 completed.
- Maintainer first: [openclaw/wacli](https://github.com/openclaw/wacli) [#365](https://github.com/openclaw/wacli/issues/365) is maintainer_input: #365: Obtain a current-main reproduction and redacted payload-shape, ingestion, and decryption evidence from an affected group. The Octob....
- Intervention first: [openclaw/peekaboo](https://github.com/openclaw/peekaboo) [issue-openclaw-peekaboo-831](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-peekaboo-831.md) is automation_blocked: The source repair is present on supplied main SHA 016240d908566e54b702336ba39abc0f621b5b60. Issue #831 remains valid for corrected-distri....
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#134644](https://github.com/openclaw/openclaw/pull/134644) is action_planned: Canonical delivery-placement bug with a narrow existing-behavior repair path. Implementation must first establish failing boundary proof....
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 373 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 422 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 523 | automation failure or blocker recorded |
| No Pending Action | 58 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 226 |
| merge_ready | 45 |
| merge_not_authorized | 102 |
| checks_blocked | 43 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 378 |
| automation_failed | 241 |
| automation_blocked | 282 |
| reviewed_no_action | 58 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/wacli](https://github.com/openclaw/wacli) | [#365](https://github.com/openclaw/wacli/issues/365) | maintainer_input | #365: Obtain a current-main reproduction and redacted payload-shape, ingestion, and decryption evidence from an affected group. The October 2 hydra... | Oct 2, 2026, 11:50 UTC | [issue-openclaw-wacli-365](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-wacli-365.md) | [37002768078](https://github.com/openclaw/clawsweeper/actions/runs/37002768078) |
| [openclaw/peekaboo](https://github.com/openclaw/peekaboo) | [cluster:issue-openclaw-peekaboo-748](cluster:issue-openclaw-peekaboo-748) | maintainer_input | #748 implementation only: supply the affected-host diagnostics requested by steipete on September 24—redacted verbose JSON Bridge status retaining... | Oct 2, 2026, 06:46 UTC | [issue-openclaw-peekaboo-748](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-peekaboo-748.md) | [36974897709](https://github.com/openclaw/clawsweeper/actions/runs/36974897709) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | [#1570](https://github.com/openclaw/openclaw-windows-node/issues/1570) | maintainer_input | #160075: Resolve the misqualified reference against https://github.com/openclaw/openclaw/pull/160075 and hydrate its actual kind and updated_at bef... | Oct 1, 2026, 23:57 UTC | [issue-openclaw-openclaw-windows-node-1583](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1583.md) | [36943238009](https://github.com/openclaw/clawsweeper/actions/runs/36943238009) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | [#22893](https://github.com/openclaw/openclaw-windows-node/issues/22893) | maintainer_input | #22893: resolve the inventory mapping for https://github.com/ggml-org/llama.cpp/issues/22893. Target-repository hydration returned HTTP 404 with ki... | Oct 1, 2026, 22:39 UTC | [issue-openclaw-openclaw-windows-node-1242](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1242.md) | [36935943778](https://github.com/openclaw/clawsweeper/actions/runs/36935943778) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | [#1579](https://github.com/openclaw/openclaw-windows-node/issues/1579) | maintainer_input | #1579: Supply exact affected Companion and Gateway versions, native versus WSL routing, and a failed-session trace redacted for credentials, author... | Oct 1, 2026, 19:40 UTC | [issue-openclaw-openclaw-windows-node-1579](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1579.md) | [36915527791](https://github.com/openclaw/clawsweeper/actions/runs/36915527791) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#150148](https://github.com/openclaw/openclaw/issues/150148) | maintainer_input | Route only this item to central OpenClaw security handling without public mutation or incorporating its patch. | Oct 1, 2026, 15:38 UTC | [issue-openclaw-openclaw-162739](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-162739.md) | [36873190313](https://github.com/openclaw/clawsweeper/actions/runs/36873190313) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#4100](https://github.com/steipete/codexbar/issues/4100) | maintainer_input | Select one concrete CodexBar change from #4100 and specify its desired behavior and acceptance criteria, preferably in a focused follow-up issue. | Oct 1, 2026, 12:03 UTC | [issue-steipete-codexbar-4100](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-4100.md) | [36859031697](https://github.com/openclaw/clawsweeper/actions/runs/36859031697) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | [cluster:issue-openclaw-clawsweeper-1128](cluster:issue-openclaw-clawsweeper-1128) | maintainer_input | For https://github.com/openclaw/clawsweeper/issues/1128, decide whether to authorize one explicitly bounded behavioral migration slice or retain th... | Oct 1, 2026, 07:44 UTC | [issue-openclaw-clawsweeper-1128](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-clawsweeper-1128.md) | [36831634218](https://github.com/openclaw/clawsweeper/actions/runs/36831634218) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#153401](https://github.com/openclaw/openclaw/issues/153401) | maintainer_input | Quarantine this linked tracker for central OpenClaw security handling; its other recovery work is outside this fix. | Sep 30, 2026, 19:55 UTC | [issue-openclaw-openclaw-162047](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-162047.md) | [36761499676](https://github.com/openclaw/clawsweeper/actions/runs/36761499676) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#3951](https://github.com/steipete/codexbar/issues/3951) | maintainer_input | Route this exact historical PR to central security handling without changing it. | Sep 30, 2026, 19:14 UTC | [issue-steipete-codexbar-4144](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-4144.md) | [36763286267](https://github.com/openclaw/clawsweeper/actions/runs/36763286267) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#4110](https://github.com/steipete/codexbar/pull/4110) | maintainer_input | For #4110, identify the Greptile usage endpoint or local source, its authentication method, and the account-scoped fields that define monthly allow... | Sep 30, 2026, 16:02 UTC | [issue-steipete-codexbar-4110](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-4110.md) | [36740831576](https://github.com/openclaw/clawsweeper/actions/runs/36740831576) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#156812](https://github.com/openclaw/openclaw/issues/156812) | maintainer_input | Route this historical ref to central security handling without affecting the narrow timing bug. | Sep 30, 2026, 03:43 UTC | [issue-openclaw-openclaw-161550](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161550.md) | [36665410702](https://github.com/openclaw/clawsweeper/actions/runs/36665410702) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#91927](https://github.com/openclaw/openclaw/issues/91927) | maintainer_input | Session identifier export raises a separate sensitive-data and privacy decision. | Sep 29, 2026, 17:43 UTC | [issue-openclaw-openclaw-161278](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161278.md) | [36606368666](https://github.com/openclaw/clawsweeper/actions/runs/36606368666) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#3776](https://github.com/steipete/codexbar/pull/3776) | maintainer_input | For #3776, supply a successful redacted authenticated response from GET /api/usage?granularity=day that establishes response fields, units, reporti... | Sep 29, 2026, 17:02 UTC | [issue-steipete-codexbar-3776](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3776.md) | [36601569433](https://github.com/openclaw/clawsweeper/actions/runs/36601569433) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#3728](https://github.com/steipete/codexbar/pull/3728) | maintainer_input | For #3728, obtain provider documentation or a redacted read-only account response establishing monthly and ensemble-mode usage counters, authentica... | Sep 29, 2026, 08:42 UTC | [issue-steipete-codexbar-3728](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3728.md) | [36543843793](https://github.com/openclaw/clawsweeper/actions/runs/36543843793) |

#### Automation Snapshot

| Repository | Item | Lane state | Recorded status | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#134644](https://github.com/openclaw/openclaw/pull/134644) | action_planned | Canonical delivery-placement bug with a narrow existing-behavior repair path. Implementation must first establish failing boundary proof and reconc... | Oct 2, 2026, 11:11 UTC | [issue-openclaw-openclaw-134644](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134644.md) | [36998254208](https://github.com/openclaw/clawsweeper/actions/runs/36998254208) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#163406](https://github.com/openclaw/openclaw/issues/163406) | action_planned | A narrow existing-behavior repair is appropriate. Runtime reproduction must precede edits; preserve durable fail-closed validation and all setup ve... | Oct 2, 2026, 10:37 UTC | [issue-openclaw-openclaw-163406](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-163406.md) | [36996145150](https://github.com/openclaw/clawsweeper/actions/runs/36996145150) |
| [openclaw/gogcli](https://github.com/openclaw/gogcli) | [#1184](https://github.com/openclaw/gogcli/pull/1184) | action_planned | A narrow documentation fix satisfies the selected issue scope without a product decision or security-sensitive work. | Oct 2, 2026, 05:58 UTC | [issue-openclaw-gogcli-1184](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-gogcli-1184.md) | [36971181957](https://github.com/openclaw/clawsweeper/actions/runs/36971181957) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#163150](https://github.com/openclaw/openclaw/pull/163150) | action_planned | Implement existing retirement attribution and once-only bounded failure diagnostics after demonstrating a failing broker-boundary regression on the... | Oct 2, 2026, 02:48 UTC | [issue-openclaw-openclaw-163150](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-163150.md) | [36957005623](https://github.com/openclaw/clawsweeper/actions/runs/36957005623) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#163026](https://github.com/openclaw/openclaw/pull/163026) | action_planned | A focused availability repair is warranted; no open implementation PR is hydrated. Keep the issue open while one implementation branch owns reprodu... | Oct 1, 2026, 22:59 UTC | [issue-openclaw-openclaw-163026](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-163026.md) | [36937870900](https://github.com/openclaw/clawsweeper/actions/runs/36937870900) |
| [openclaw/clickclack](https://github.com/openclaw/clickclack) | [#284](https://github.com/openclaw/clickclack/pull/284) | action_planned | A focused CSS repair remains plausible. Establish browser failure before implementing and publishing the fix. | Oct 1, 2026, 20:59 UTC | [issue-openclaw-clickclack-284](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-clickclack-284.md) | [36925321425](https://github.com/openclaw/clawsweeper/actions/runs/36925321425) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#162908](https://github.com/openclaw/openclaw/pull/162908) | action_planned | A focused lifecycle repair is supported. Prove the defect through the Talk runner before editing; do not treat the earlier isolated mechanism or so... | Oct 1, 2026, 19:36 UTC | [issue-openclaw-openclaw-162908](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-162908.md) | [36915096093](https://github.com/openclaw/clawsweeper/actions/runs/36915096093) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#162853](https://github.com/openclaw/openclaw/pull/162853) | action_planned | Restore required maintenance through the existing owner without relaxing provenance, finalization, or handoff-state protections. Runtime reproducti... | Oct 1, 2026, 19:03 UTC | [issue-openclaw-openclaw-162853](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-162853.md) | [36910927713](https://github.com/openclaw/clawsweeper/actions/runs/36910927713) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#162821](https://github.com/openclaw/openclaw/pull/162821) | action_planned | This is a focused startup bug with an authorized fix path. Shortening the build marker alone cannot protect arbitrarily deep bases. Require native... | Oct 1, 2026, 17:44 UTC | [issue-openclaw-openclaw-162821](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-162821.md) | [36901039051](https://github.com/openclaw/clawsweeper/actions/runs/36901039051) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#162802](https://github.com/openclaw/openclaw/pull/162802) | action_planned | A focused repair remains warranted. Establish executable pre-fix failure before changing production code; opening a PR depends on successful implem... | Oct 1, 2026, 16:44 UTC | [issue-openclaw-openclaw-162802](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-162802.md) | [36893632582](https://github.com/openclaw/clawsweeper/actions/runs/36893632582) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#162421](https://github.com/openclaw/openclaw/pull/162421) | action_planned | The reported behavior has a clear existing config contract and a narrow shared-owner repair path. Prepare one fix PR after failing command-boundary... | Oct 1, 2026, 06:56 UTC | [issue-openclaw-openclaw-162421](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-162421.md) | [36827205424](https://github.com/openclaw/clawsweeper/actions/runs/36827205424) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#162416](https://github.com/openclaw/openclaw/pull/162416) | action_planned | The tool-schema failure has a clear repair surface and is distinct from the merged plugin-config repair. Require runtime reproduction on current ma... | Oct 1, 2026, 06:01 UTC | [issue-openclaw-openclaw-162416](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-162416.md) | [36822298621](https://github.com/openclaw/clawsweeper/actions/runs/36822298621) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#162407](https://github.com/openclaw/openclaw/pull/162407) | action_planned | Explicit authored ID links have a bounded renderer defect. Standalone username detection must remain unchanged unless existing supported behavior c... | Oct 1, 2026, 06:00 UTC | [issue-openclaw-openclaw-162407](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-162407.md) | [36822296060](https://github.com/openclaw/clawsweeper/actions/runs/36822296060) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#162267](https://github.com/openclaw/openclaw/pull/162267) | action_planned | A focused registry read-projection repair is appropriate. Require a failing regression on current main before implementation; do not close or merge... | Oct 1, 2026, 03:48 UTC | [issue-openclaw-openclaw-162267](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-162267.md) | [36811910854](https://github.com/openclaw/clawsweeper/actions/runs/36811910854) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#162255](https://github.com/openclaw/openclaw/pull/162255) | action_planned | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Oct 1, 2026, 02:56 UTC | [automerge-openclaw-openclaw-162255](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-162255.md) | [36806479071](https://github.com/openclaw/clawsweeper/actions/runs/36806479071) |

#### Intervention Needed

| Repository | Item | Lane state | Recorded blocker | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/peekaboo](https://github.com/openclaw/peekaboo) |  | automation_blocked | The source repair is present on supplied main SHA 016240d908566e54b702336ba39abc0f621b5b60. Issue #831 remains valid for corrected-distribution qua... | Oct 2, 2026, 09:33 UTC | [issue-openclaw-peekaboo-831](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-peekaboo-831.md) | [36990157583](https://github.com/openclaw/clawsweeper/actions/runs/36990157583) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117144](https://github.com/openclaw/openclaw/pull/117144) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Oct 2, 2026, 08:56 UTC | [automerge-openclaw-openclaw-117144](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117144.md) | [36982780080](https://github.com/openclaw/clawsweeper/actions/runs/36982780080) |
| [steipete/oracle](https://github.com/steipete/oracle) | [cluster:issue-steipete-oracle-532](cluster:issue-steipete-oracle-532) | automation_failed | Blocked on completing and validating the canonical fix in a writable checkout. No maintainer judgment is required; do not publish an unvalidated im... | Oct 2, 2026, 06:47 UTC | [issue-steipete-oracle-532](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-532.md) | [36974954932](https://github.com/openclaw/clawsweeper/actions/runs/36974954932) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) |  | automation_blocked | No new PR warranted yet. The observed WinGet failure is repaired on current main by #1591. A separate existing-package detection defect remains unp... | Oct 2, 2026, 05:52 UTC | [issue-openclaw-openclaw-windows-node-1578](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1578.md) | [36970635706](https://github.com/openclaw/clawsweeper/actions/runs/36970635706) |
| [steipete/oracle](https://github.com/steipete/oracle) |  | automation_blocked | validation_script_missing: required pnpm check:changed is unavailable in target checkout | Oct 2, 2026, 03:35 UTC | [issue-steipete-oracle-531](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-531.md) | [36960538561](https://github.com/openclaw/clawsweeper/actions/runs/36960538561) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=core, coreTests [check:changed] src/... | Oct 2, 2026, 00:45 UTC | [automerge-openclaw-openclaw-119975](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119975.md) | [36944703174](https://github.com/openclaw/clawsweeper/actions/runs/36944703174) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118806](https://github.com/openclaw/openclaw/pull/118806) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Oct 1, 2026, 23:07 UTC | [automerge-openclaw-openclaw-118806](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118806.md) | [36932934899](https://github.com/openclaw/clawsweeper/actions/runs/36932934899) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#162891](https://github.com/openclaw/openclaw/pull/162891) | automation_failed | The documented inclusion contract has a narrow existing-behavior defect. Reverify the filter on latest main before applying the fix; leave the issu... | Oct 1, 2026, 19:33 UTC | [issue-openclaw-openclaw-162891](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-162891.md) | [36903304988](https://github.com/openclaw/clawsweeper/actions/runs/36903304988) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#162907](https://github.com/openclaw/openclaw/pull/162907) | automation_failed | The reported mechanism supports a focused bug repair. Before editing, the executor must verify it on preflight main or refreshed current main and e... | Oct 1, 2026, 19:20 UTC | [issue-openclaw-openclaw-162907](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-162907.md) | [36906424495](https://github.com/openclaw/clawsweeper/actions/runs/36906424495) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): Error: ERR_PNPM_BAD_CONFIG_DEP × resolve package manager dependencies ╰─▶ Failed to resolve config... | Oct 1, 2026, 12:07 UTC | [issue-openclaw-openclaw-162649](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-162649.md) | [36856934103](https://github.com/openclaw/clawsweeper/actions/runs/36856934103) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) |  | automation_blocked | No Companion PR is appropriate: the reported repair belongs to Gateway Control UI CSS and already has a linked upstream implementation candidate. N... | Oct 1, 2026, 10:50 UTC | [issue-openclaw-openclaw-windows-node-1564](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1564.md) | [36851261641](https://github.com/openclaw/clawsweeper/actions/runs/36851261641) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) |  | automation_blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | Oct 1, 2026, 10:34 UTC | [issue-openclaw-openclaw-windows-node-1571](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1571.md) | [36849403579](https://github.com/openclaw/clawsweeper/actions/runs/36849403579) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | [#1569](https://github.com/openclaw/openclaw-windows-node/pull/1569) | automation_failed | The source-proven ordinary bug remains viable, but this environment cannot write the regression, implementation, build outputs, or branch. A writab... | Oct 1, 2026, 09:04 UTC | [issue-openclaw-openclaw-windows-node-1569](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1569.md) | [36839856877](https://github.com/openclaw/clawsweeper/actions/runs/36839856877) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#162393](https://github.com/openclaw/openclaw/pull/162393) | automation_failed | The existing splitLongParagraphs option supplies a narrow repair without changing channel configuration or public contracts. Keep the issue open; c... | Oct 1, 2026, 05:35 UTC | [issue-openclaw-openclaw-162393](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-162393.md) | [36815960636](https://github.com/openclaw/clawsweeper/actions/runs/36815960636) |
| [openclaw/openclaw-enterprise](https://github.com/openclaw/openclaw-enterprise) |  | automation_blocked | No standalone PR is appropriate. Issue #552 explicitly defers the runtime pin until a combined update, then calls for persona acceptance on that im... | Oct 1, 2026, 01:15 UTC | [issue-openclaw-openclaw-enterprise-552](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-enterprise-552.md) | [36799979635](https://github.com/openclaw/clawsweeper/actions/runs/36799979635) |

#### No Pending Action

| Repository | Item | Lane state | Latest result | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | The supplied live preflight records #148175 as already merged. No branch repair, replacement PR, or GitHub mutation is needed. | Sep 15, 2026, 03:38 UTC | [automerge-openclaw-openclaw-148175](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-148175.md) | [34925607795](https://github.com/openclaw/clawsweeper/actions/runs/34925607795) |

#### Completed

| Repository | Item | Lane state | Recorded outcome | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

### Clusters Needing Inspection

| Cluster | State | Reason | Report | Run |
| --- | --- | --- | --- | --- |
| issue-openclaw-wacli-365 | needs human | #365: Obtain a current-main reproduction and redacted payload-shape, ingestion, and decryption evidence from an affected group. The October 2 hydra... | [issue-openclaw-wacli-365](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-wacli-365.md) | [37002768078](https://github.com/openclaw/clawsweeper/actions/runs/37002768078) |
| issue-openclaw-peekaboo-748 | needs human | #748 implementation only: supply the affected-host diagnostics requested by steipete on September 24—redacted verbose JSON Bridge status retaining... | [issue-openclaw-peekaboo-748](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-peekaboo-748.md) | [36974897709](https://github.com/openclaw/clawsweeper/actions/runs/36974897709) |
| issue-steipete-oracle-531 | execute_fix blocked | validation_script_missing: required pnpm check:changed is unavailable in target checkout | [issue-steipete-oracle-531](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-531.md) | [36960538561](https://github.com/openclaw/clawsweeper/actions/runs/36960538561) |
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
| issue-steipete-codexbar-4110 | needs human | For #4110, identify the Greptile usage endpoint or local source, its authentication method, and the account-scoped fields that define monthly allow... | [issue-steipete-codexbar-4110](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-4110.md) | [36740831576](https://github.com/openclaw/clawsweeper/actions/runs/36740831576) |
| issue-openclaw-openclaw-161866 | execute_fix blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [issue-openclaw-openclaw-161866](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161866.md) | [36724659981](https://github.com/openclaw/clawsweeper/actions/runs/36724659981) |
| issue-openclaw-openclaw-enterprise-694 | execute_fix blocked | external base blocker: validation failed only in base-identical files outside the repair delta: scripts/docs-site/word-count.mjs, scripts/docs-site... | [issue-openclaw-openclaw-enterprise-694](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-enterprise-694.md) | [36690817325](https://github.com/openclaw/clawsweeper/actions/runs/36690817325) |
| issue-openclaw-imsg-324 | execute_fix blocked | external base blocker: validation failed only in base-identical files outside the repair delta: Makefile | [issue-openclaw-imsg-324](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-imsg-324.md) | [36658091028](https://github.com/openclaw/clawsweeper/actions/runs/36658091028) |
| issue-openclaw-openclaw-161467 | execute_fix blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [issue-openclaw-openclaw-161467](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161467.md) | [36653434126](https://github.com/openclaw/clawsweeper/actions/runs/36653434126) |
| issue-steipete-codexbar-3776 | needs human | For #3776, supply a successful redacted authenticated response from GET /api/usage?granularity=day that establishes response fields, units, reporti... | [issue-steipete-codexbar-3776](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3776.md) | [36601569433](https://github.com/openclaw/clawsweeper/actions/runs/36601569433) |
| issue-steipete-codexbar-3728 | needs human | For #3728, obtain provider documentation or a redacted read-only account response establishing monthly and ensemble-mode usage counters, authentica... | [issue-steipete-codexbar-3728](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3728.md) | [36543843793](https://github.com/openclaw/clawsweeper/actions/runs/36543843793) |
| issue-steipete-codexbar-3660 | needs human | Obtain a current automatic-auth reproduction for #3660 after #3814 and #3883: selected Auth source, signed-in browser/profile, and exact error. The... | [issue-steipete-codexbar-3660](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3660.md) | [36489034004](https://github.com/openclaw/clawsweeper/actions/runs/36489034004) |
| issue-openclaw-openclaw-125873 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=extensions, extensionTests, tooling... | [issue-openclaw-openclaw-125873](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-125873.md) | [36444377660](https://github.com/openclaw/clawsweeper/actions/runs/36444377660) |
| issue-openclaw-openclaw-windows-node-1432 | needs human | #1432: The failing raw invocation and result, Diagnostics output, effective sandbox settings, execution mode, and a current-main reproduction are u... | [issue-openclaw-openclaw-windows-node-1432](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1432.md) | [36426283632](https://github.com/openclaw/clawsweeper/actions/runs/36426283632) |
| issue-steipete-codexbar-3377 | needs human | For #3377, determine the corrective path after obtaining matched AppKit/Quartz geometry and rendered-content evidence on an affected machine; the c... | [issue-steipete-codexbar-3377](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3377.md) | [36415779816](https://github.com/openclaw/clawsweeper/actions/runs/36415779816) |
| issue-steipete-codexbar-3209 | needs human | For #3209, obtain a redacted relative folder/file layout for one affected Desktop Cowork session and confirmation of whether its JSONL transcript c... | [issue-steipete-codexbar-3209](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3209.md) | [36380621043](https://github.com/openclaw/clawsweeper/actions/runs/36380621043) |
| issue-steipete-codexbar-2838 | needs human | After current-release WidgetKit and installed-bundle diagnostics are collected, decide whether an app-side Sparkle lifecycle change is warranted. | [issue-steipete-codexbar-2838](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-2838.md) | [36374442825](https://github.com/openclaw/clawsweeper/actions/runs/36374442825) |
| issue-steipete-codexbar-2609 | needs human | Select a specific upstream change for #2609 and state the expected CodexBar behavior or reproducible defect. | [issue-steipete-codexbar-2609](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-2609.md) | [36374454440](https://github.com/openclaw/clawsweeper/actions/runs/36374454440) |
| issue-steipete-codexbar-1711 | needs human | Obtain a redacted failing current-build startup Debug Log for #1711 showing status-item snapshots and the recovery outcome before selecting an impl... | [issue-steipete-codexbar-1711](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-1711.md) | [36367447933](https://github.com/openclaw/clawsweeper/actions/runs/36367447933) |
| issue-openclaw-imsg-322 | execute_fix blocked | external base blocker: validation failed only in base-identical files outside the repair delta: Makefile | [issue-openclaw-imsg-322](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-imsg-322.md) | [36368874126](https://github.com/openclaw/clawsweeper/actions/runs/36368874126) |
| issue-openclaw-openclaw-153145 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=apps [check:changed] apps/macos/Sour... | [issue-openclaw-openclaw-153145](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-153145.md) | [36203268022](https://github.com/openclaw/clawsweeper/actions/runs/36203268022) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [issue-steipete-oracle-531](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-oracle-531.md) | blocked |  |  | validation_script_missing: required pnpm check:changed is unavailable in target checkout | [36960538561](https://github.com/openclaw/clawsweeper/actions/runs/36960538561) |
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

