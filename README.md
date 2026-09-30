# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Sep 30, 2026, 23:08 UTC

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Apply finished | Sep 30, 2026, 23:08 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/36785908604) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Planning review | Sep 30, 2026, 22:37 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/36786614124) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Sep 30, 2026, 05:41 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/36674549250) |

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

Last source update: Sep 30, 2026, 22:38 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 1342 | 100% |
| Run attempts archived | 3987 | audit |
| Latest successful clusters | 1114 | 83.0% |
| Latest failed clusters | 225 | 16.8% |
| Latest cancelled clusters | 3 | 0.2% |
| Needs-human clusters | 136 | 10.1% |
| Fix actions failed | 33 | 4.2% |
| Fix actions blocked | 170 | 21.4% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 325 | 99.7% |
| Skipped mutation attempts | 1 | 0.3% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 1342 clusters: 366 maintainer action, 409 automation snapshot, 512 intervention needed, 55 no pending action, 0 completed.
- Maintainer first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#153401](https://github.com/openclaw/openclaw/issues/153401) is maintainer_input: Quarantine this linked tracker for central OpenClaw security handling; its other recovery work is outside this fix..
- Intervention first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [cluster:issue-openclaw-openclaw-162075](cluster:issue-openclaw-openclaw-162075) is automation_failed: Implementation requires a writable executor checkout..
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#161953](https://github.com/openclaw/openclaw/pull/161953) is action_planned: Reproduce first, then repair the existing publication owner and open one fix PR on the designated branch..
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 366 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 409 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 512 | automation failure or blocker recorded |
| No Pending Action | 55 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 219 |
| merge_ready | 45 |
| merge_not_authorized | 102 |
| checks_blocked | 43 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 365 |
| automation_failed | 235 |
| automation_blocked | 277 |
| reviewed_no_action | 55 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#153401](https://github.com/openclaw/openclaw/issues/153401) | maintainer_input | Quarantine this linked tracker for central OpenClaw security handling; its other recovery work is outside this fix. | Sep 30, 2026, 19:55 UTC | [issue-openclaw-openclaw-162047](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-162047.md) | [36761499676](https://github.com/openclaw/clawsweeper/actions/runs/36761499676) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#3951](https://github.com/steipete/codexbar/issues/3951) | maintainer_input | Route this exact historical PR to central security handling without changing it. | Sep 30, 2026, 19:14 UTC | [issue-steipete-codexbar-4144](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-4144.md) | [36763286267](https://github.com/openclaw/clawsweeper/actions/runs/36763286267) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#4110](https://github.com/steipete/codexbar/pull/4110) | maintainer_input | For #4110, identify the Greptile usage endpoint or local source, its authentication method, and the account-scoped fields that define monthly allow... | Sep 30, 2026, 16:02 UTC | [issue-steipete-codexbar-4110](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-4110.md) | [36740831576](https://github.com/openclaw/clawsweeper/actions/runs/36740831576) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#156812](https://github.com/openclaw/openclaw/issues/156812) | maintainer_input | Route this historical ref to central security handling without affecting the narrow timing bug. | Sep 30, 2026, 03:43 UTC | [issue-openclaw-openclaw-161550](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161550.md) | [36665410702](https://github.com/openclaw/clawsweeper/actions/runs/36665410702) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#91927](https://github.com/openclaw/openclaw/issues/91927) | maintainer_input | Session identifier export raises a separate sensitive-data and privacy decision. | Sep 29, 2026, 17:43 UTC | [issue-openclaw-openclaw-161278](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161278.md) | [36606368666](https://github.com/openclaw/clawsweeper/actions/runs/36606368666) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#3776](https://github.com/steipete/codexbar/pull/3776) | maintainer_input | For #3776, supply a successful redacted authenticated response from GET /api/usage?granularity=day that establishes response fields, units, reporti... | Sep 29, 2026, 17:02 UTC | [issue-steipete-codexbar-3776](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3776.md) | [36601569433](https://github.com/openclaw/clawsweeper/actions/runs/36601569433) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#3728](https://github.com/steipete/codexbar/pull/3728) | maintainer_input | For #3728, obtain provider documentation or a redacted read-only account response establishing monthly and ensemble-mode usage counters, authentica... | Sep 29, 2026, 08:42 UTC | [issue-steipete-codexbar-3728](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3728.md) | [36543843793](https://github.com/openclaw/clawsweeper/actions/runs/36543843793) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#3660](https://github.com/steipete/codexbar/issues/3660) | maintainer_input | Obtain a current automatic-auth reproduction for #3660 after #3814 and #3883: selected Auth source, signed-in browser/profile, and exact error. The... | Sep 28, 2026, 22:32 UTC | [issue-steipete-codexbar-3660](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3660.md) | [36489034004](https://github.com/openclaw/clawsweeper/actions/runs/36489034004) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#143017](https://github.com/openclaw/openclaw/issues/143017) | maintainer_input | Route this linked item to central security handling; it does not govern the narrow recall-identity fix. | Sep 28, 2026, 22:00 UTC | [issue-openclaw-openclaw-160672](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-160672.md) | [36489263386](https://github.com/openclaw/clawsweeper/actions/runs/36489263386) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | [#1119](https://github.com/openclaw/openclaw-windows-node/issues/1119) | maintainer_input | Route this historical PR to central OpenClaw security handling. The #1493 fix must stay within chat presentation and echo correlation. | Sep 28, 2026, 17:56 UTC | [issue-openclaw-openclaw-windows-node-1493](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1493.md) | [36458278815](https://github.com/openclaw/clawsweeper/actions/runs/36458278815) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | [#1432](https://github.com/openclaw/openclaw-windows-node/pull/1432) | maintainer_input | #1432: The failing raw invocation and result, Diagnostics output, effective sandbox settings, execution mode, and a current-main reproduction are u... | Sep 28, 2026, 13:54 UTC | [issue-openclaw-openclaw-windows-node-1432](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1432.md) | [36426283632](https://github.com/openclaw/clawsweeper/actions/runs/36426283632) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#3377](https://github.com/steipete/codexbar/issues/3377) | maintainer_input | For #3377, determine the corrective path after obtaining matched AppKit/Quartz geometry and rendered-content evidence on an affected machine; the c... | Sep 28, 2026, 11:32 UTC | [issue-steipete-codexbar-3377](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3377.md) | [36415779816](https://github.com/openclaw/clawsweeper/actions/runs/36415779816) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [#3954](https://github.com/steipete/codexbar/issues/3954) | maintainer_input | Quarantine this exact linked PR for central OpenClaw security handling. Its Codex catch-up component does not block classification of #3316. | Sep 28, 2026, 08:50 UTC | [issue-steipete-codexbar-3316](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3316.md) | [36399117869](https://github.com/openclaw/clawsweeper/actions/runs/36399117869) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#74454](https://github.com/openclaw/openclaw/issues/74454) | maintainer_input | Historical security-sensitive linked ref; no ClawSweeper Repair mutation. | Sep 28, 2026, 05:39 UTC | [issue-openclaw-openclaw-160064](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-160064.md) | [36382613428](https://github.com/openclaw/clawsweeper/actions/runs/36382613428) |
| [steipete/codexbar](https://github.com/steipete/codexbar) | [cluster:issue-steipete-codexbar-3209](cluster:issue-steipete-codexbar-3209) | maintainer_input | For #3209, obtain a redacted relative folder/file layout for one affected Desktop Cowork session and confirmation of whether its JSONL transcript c... | Sep 28, 2026, 05:13 UTC | [issue-steipete-codexbar-3209](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3209.md) | [36380621043](https://github.com/openclaw/clawsweeper/actions/runs/36380621043) |

#### Automation Snapshot

| Repository | Item | Lane state | Recorded status | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#161953](https://github.com/openclaw/openclaw/pull/161953) | action_planned | Reproduce first, then repair the existing publication owner and open one fix PR on the designated branch. | Sep 30, 2026, 16:42 UTC | [issue-openclaw-openclaw-161953](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161953.md) | [36745602951](https://github.com/openclaw/clawsweeper/actions/runs/36745602951) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#161929](https://github.com/openclaw/openclaw/issues/161929) | action_planned | No open candidate PR covers the reported shared-probe failure. Reproduction and Proxyline contract verification remain required before a fix PR is... | Sep 30, 2026, 15:39 UTC | [issue-openclaw-openclaw-161929](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161929.md) | [36737936991](https://github.com/openclaw/clawsweeper/actions/runs/36737936991) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#161915](https://github.com/openclaw/openclaw/pull/161915) | action_planned | First prove the failure on the current main head. Then move activity notification to the transport's actual-progress boundary and verify the idle e... | Sep 30, 2026, 15:09 UTC | [issue-openclaw-openclaw-161915](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161915.md) | [36733958749](https://github.com/openclaw/clawsweeper/actions/runs/36733958749) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#161914](https://github.com/openclaw/openclaw/pull/161914) | action_planned | The remaining behavior has a bounded repair path, and the job forbids closing the issue. | Sep 30, 2026, 15:08 UTC | [issue-openclaw-openclaw-161914](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161914.md) | [36733964271](https://github.com/openclaw/clawsweeper/actions/runs/36733964271) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#161770](https://github.com/openclaw/openclaw/pull/161770) | action_planned | No hydrated open PR addresses this per-row archive cost. Reproduce on verified current main, then implement the bounded fast path. | Sep 30, 2026, 10:44 UTC | [issue-openclaw-openclaw-161770](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161770.md) | [36703821348](https://github.com/openclaw/clawsweeper/actions/runs/36703821348) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#161610](https://github.com/openclaw/openclaw/pull/161610) | action_planned | Implement the existing warning-routing behavior after confirming the defect and the two exact native templates on the execution checkout. | Sep 30, 2026, 05:37 UTC | [issue-openclaw-openclaw-161610](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161610.md) | [36674056559](https://github.com/openclaw/clawsweeper/actions/runs/36674056559) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#161441](https://github.com/openclaw/openclaw/issues/161441) | action_planned | Verify the completed archive against the retained source before owner lookup. Keep owner checks and warnings for backups without a verified matchin... | Sep 30, 2026, 01:16 UTC | [issue-openclaw-openclaw-161441](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161441.md) | [36654023422](https://github.com/openclaw/clawsweeper/actions/runs/36654023422) |
| [openclaw/openclaw-windows-node](https://github.com/openclaw/openclaw-windows-node) | [#1546](https://github.com/openclaw/openclaw-windows-node/pull/1546) | action_planned | Implement and validate the Setup window resize constraint. | Sep 29, 2026, 22:32 UTC | [issue-openclaw-openclaw-windows-node-1546](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-windows-node-1546.md) | [36639931230](https://github.com/openclaw/clawsweeper/actions/runs/36639931230) |
| [openclaw/notcrawl](https://github.com/openclaw/notcrawl) | [#156](https://github.com/openclaw/notcrawl/issues/156) | action_planned | Add a regression for the client timeout, then admit only that timeout into the existing bounded replay-safe retry path. | Sep 29, 2026, 20:04 UTC | [issue-openclaw-notcrawl-156](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-notcrawl-156.md) | [36623365018](https://github.com/openclaw/clawsweeper/actions/runs/36623365018) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#161317](https://github.com/openclaw/openclaw/issues/161317) | action_planned | The reported failure remains reproducible at the workflow command boundary on the preflight main SHA. No candidate PR is hydrated. | Sep 29, 2026, 18:51 UTC | [issue-openclaw-openclaw-161317](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161317.md) | [36614560724](https://github.com/openclaw/clawsweeper/actions/runs/36614560724) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#161268](https://github.com/openclaw/openclaw/pull/161268) | action_planned | First reproduce the loss through daily-note ingestion, then narrow the shared predicate and validate the record and read paths. | Sep 29, 2026, 17:38 UTC | [issue-openclaw-openclaw-161268](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161268.md) | [36602125753](https://github.com/openclaw/clawsweeper/actions/runs/36602125753) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119484](https://github.com/openclaw/openclaw/pull/119484) | action_planned | Create a focused implementation artifact and validate the batch-file write, edit, and patch entry points before opening the PR. | Sep 29, 2026, 17:12 UTC | [issue-openclaw-openclaw-119484](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119484.md) | [36599922850](https://github.com/openclaw/clawsweeper/actions/runs/36599922850) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#161245](https://github.com/openclaw/openclaw/pull/161245) | action_planned | Keep the issue open and prepare one focused implementation PR. | Sep 29, 2026, 16:48 UTC | [issue-openclaw-openclaw-161245](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161245.md) | [36599928434](https://github.com/openclaw/clawsweeper/actions/runs/36599928434) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#161193](https://github.com/openclaw/openclaw/pull/161193) | action_planned | Add a failing regression through reloadManagedPlugin before changing the resolver. Source inspection supports the defect; runtime reproduction and... | Sep 29, 2026, 13:43 UTC | [issue-openclaw-openclaw-161193](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161193.md) | [36576690033](https://github.com/openclaw/clawsweeper/actions/runs/36576690033) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#161024](https://github.com/openclaw/openclaw/pull/161024) | action_planned | A focused bug fix is authorized, but the required real CLI reproduction and validation remain to be done. | Sep 29, 2026, 10:03 UTC | [issue-openclaw-openclaw-161024](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161024.md) | [36552506707](https://github.com/openclaw/clawsweeper/actions/runs/36552506707) |

#### Intervention Needed

| Repository | Item | Lane state | Recorded blocker | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-162075](cluster:issue-openclaw-openclaw-162075) | automation_failed | Implementation requires a writable executor checkout. | Sep 30, 2026, 20:12 UTC | [issue-openclaw-openclaw-162075](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-162075.md) | [36765864359](https://github.com/openclaw/clawsweeper/actions/runs/36765864359) |
| [openclaw/crabbox](https://github.com/openclaw/crabbox) |  | automation_blocked | validation command failed (go test ./internal/cli -run ^TestTypeRFBText -count=1): go: cannot find GOROOT directory: 'go' binary is trimmed and GOR... | Sep 30, 2026, 20:01 UTC | [issue-openclaw-crabbox-2627](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-crabbox-2627.md) | [36768428805](https://github.com/openclaw/clawsweeper/actions/runs/36768428805) |
| [openclaw/openclaw-enterprise](https://github.com/openclaw/openclaw-enterprise) |  | automation_failed | Codex /review did not pass after final base synchronization: The latest commit removes a default-off command safety gate and changes the workflow d... | Sep 30, 2026, 19:59 UTC | [automerge-openclaw-openclaw-enterprise-670](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-enterprise-670.md) | [36766634334](https://github.com/openclaw/clawsweeper/actions/runs/36766634334) |
| [openclaw/wacrawl](https://github.com/openclaw/wacrawl) | [cluster:issue-openclaw-wacrawl-114](cluster:issue-openclaw-wacrawl-114) | automation_failed | Implementation, scaled timing validation, and PR readiness require a writable checkout and Go cache. | Sep 30, 2026, 17:44 UTC | [issue-openclaw-wacrawl-114](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-wacrawl-114.md) | [36753053435](https://github.com/openclaw/clawsweeper/actions/runs/36753053435) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-161992](cluster:issue-openclaw-openclaw-161992) | automation_failed | Implementation must resume in a writable checkout with working dependencies. First demonstrate the index-1 regression failing on the pinned base, t... | Sep 30, 2026, 17:27 UTC | [issue-openclaw-openclaw-161992](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161992.md) | [36747066256](https://github.com/openclaw/clawsweeper/actions/runs/36747066256) |
| [openclaw/libterminal](https://github.com/openclaw/libterminal) |  | automation_blocked | No implementation PR is viable yet. Issue #41 requires a stable Ghostty v1.4 tag and a published compatible browser/WASM wrapper. The hydrated Sept... | Sep 30, 2026, 15:33 UTC | [issue-openclaw-libterminal-41](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-libterminal-41.md) | [36737199652](https://github.com/openclaw/clawsweeper/actions/runs/36737199652) |
| [openclaw/wacli](https://github.com/openclaw/wacli) | [#462](https://github.com/openclaw/wacli/pull/462) | automation_failed | The fresh upload has no known ciphertext hash; retaining the original hash rejects it. | Sep 30, 2026, 14:36 UTC | [issue-openclaw-wacli-462](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-wacli-462.md) | [36729763804](https://github.com/openclaw/clawsweeper/actions/runs/36729763804) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | Sep 30, 2026, 13:55 UTC | [issue-openclaw-openclaw-161866](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161866.md) | [36724659981](https://github.com/openclaw/clawsweeper/actions/runs/36724659981) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-161829](cluster:issue-openclaw-openclaw-161829) | automation_failed | Implementation and the required before-fix regression need a writable, dependency-ready checkout. | Sep 30, 2026, 11:17 UTC | [issue-openclaw-openclaw-161829](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161829.md) | [36707014202](https://github.com/openclaw/clawsweeper/actions/runs/36707014202) |
| [openclaw/openclaw-enterprise](https://github.com/openclaw/openclaw-enterprise) |  | automation_blocked | external base blocker: validation failed only in base-identical files outside the repair delta: scripts/docs-site/word-count.mjs, scripts/docs-site... | Sep 30, 2026, 08:42 UTC | [issue-openclaw-openclaw-enterprise-694](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-enterprise-694.md) | [36690817325](https://github.com/openclaw/clawsweeper/actions/runs/36690817325) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#161734](https://github.com/openclaw/openclaw/pull/161734) | automation_blocked | The defect is real, but creating a competing automated PR now would disregard the contributor’s stated work. The read-only checkout also prevents i... | Sep 30, 2026, 08:40 UTC | [issue-openclaw-openclaw-161734](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161734.md) | [36690770296](https://github.com/openclaw/clawsweeper/actions/runs/36690770296) |
| [openclaw/imsg](https://github.com/openclaw/imsg) |  | automation_blocked | external base blocker: validation failed only in base-identical files outside the repair delta: Makefile | Sep 30, 2026, 02:09 UTC | [issue-openclaw-imsg-324](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-imsg-324.md) | [36658091028](https://github.com/openclaw/clawsweeper/actions/runs/36658091028) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | Sep 30, 2026, 01:09 UTC | [issue-openclaw-openclaw-161467](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161467.md) | [36653434126](https://github.com/openclaw/clawsweeper/actions/runs/36653434126) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#161431](https://github.com/openclaw/openclaw/pull/161431) | automation_failed | The reported multi-agent TTS failure remains in current-main source. | Sep 30, 2026, 00:31 UTC | [issue-openclaw-openclaw-161431](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-161431.md) | [36647679863](https://github.com/openclaw/clawsweeper/actions/runs/36647679863) |
| [steipete/codexbar](https://github.com/steipete/codexbar) |  | automation_blocked | No narrow implementation PR is justified yet. Current main contains fixes for several identified CPU and write paths, but the remaining symptoms in... | Sep 29, 2026, 23:58 UTC | [issue-steipete-codexbar-3882](https://github.com/openclaw/clawsweeper-state/blob/state/results/steipete/issue-steipete-codexbar-3882.md) | [36647634473](https://github.com/openclaw/clawsweeper/actions/runs/36647634473) |

#### No Pending Action

| Repository | Item | Lane state | Latest result | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep #148387 open and retain #148426 as the canonical fix PR. A new implementation PR would duplicate existing work. Hydrated state shows #148426 r... | Sep 14, 2026, 18:44 UTC | [issue-openclaw-openclaw-148387](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-148387.md) | [34878472938](https://github.com/openclaw/clawsweeper/actions/runs/34878472938) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Matching contributor PR #147805 already exists. Keep #147776 open and retain #147805 for proof follow-up without creating a competing implementatio... | Sep 14, 2026, 04:17 UTC | [issue-openclaw-openclaw-147776](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147776.md) | [34804644677](https://github.com/openclaw/clawsweeper/actions/runs/34804644677) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep #147502 open and retain contributor PR #147542 as the canonical fix path. Keep the PR without mutation pending the complete review, diff, and... | Sep 13, 2026, 23:57 UTC | [issue-openclaw-openclaw-147502](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147502.md) | [34791006645](https://github.com/openclaw/clawsweeper/actions/runs/34791006645) |

#### Completed

| Repository | Item | Lane state | Recorded outcome | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

### Clusters Needing Inspection

| Cluster | State | Reason | Report | Run |
| --- | --- | --- | --- | --- |
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

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
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
| [issue-openclaw-openclaw-147168](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-147168.md) | blocked |  |  | Codex fix worker timed out after 1800000ms | [34767652813](https://github.com/openclaw/clawsweeper/actions/runs/34767652813) |
| [issue-openclaw-openclaw-146023](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-146023.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [34699518709](https://github.com/openclaw/clawsweeper/actions/runs/34699518709) |
| [automerge-openclaw-openclaw-142626](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-142626.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [34618103886](https://github.com/openclaw/clawsweeper/actions/runs/34618103886) |
| [automerge-openclaw-openclaw-142626](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-142626.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=extensions, extensionTests [check:changed] e... | [34618103886](https://github.com/openclaw/clawsweeper/actions/runs/34618103886) |
| [automerge-openclaw-openclaw-117144](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-117144.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=testRoot, tooling [check:changed] .github/wo... | [34586894740](https://github.com/openclaw/clawsweeper/actions/runs/34586894740) |

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

