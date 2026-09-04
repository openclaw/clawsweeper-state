# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Sep 4, 2026, 17:14 UTC

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Review in progress | Sep 4, 2026, 17:14 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/33899062987) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Apply idle | Sep 4, 2026, 16:58 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/33897811793) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Sep 4, 2026, 08:34 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/33853843682) |

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

Last source update: Sep 4, 2026, 17:05 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 826 | 100% |
| Run attempts archived | 2629 | audit |
| Latest successful clusters | 682 | 82.6% |
| Latest failed clusters | 142 | 17.2% |
| Latest cancelled clusters | 2 | 0.2% |
| Needs-human clusters | 119 | 14.4% |
| Fix actions failed | 32 | 4.6% |
| Fix actions blocked | 137 | 19.7% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 321 | 99.7% |
| Skipped mutation attempts | 1 | 0.3% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 826 clusters: 298 maintainer action, 115 automation snapshot, 378 intervention needed, 35 no pending action, 0 completed.
- Maintainer first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#44759](https://github.com/openclaw/openclaw/issues/44759) is maintainer_input: Security boundary requires central triage for this linked report..
- Intervention first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [automerge-openclaw-openclaw-128236](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-128236.md) is automation_failed: validation command failed (pnpm check:changed): validation command runtime budget exhausted.
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#137217](https://github.com/openclaw/openclaw/pull/137217) is action_planned: Focused non-security bug repair; retain genuine configured-unavailable diagnostics and fail-closed owner routing..
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 298 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 115 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 378 | automation failure or blocker recorded |
| No Pending Action | 35 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 151 |
| merge_ready | 45 |
| merge_not_authorized | 102 |
| checks_blocked | 43 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 71 |
| automation_failed | 155 |
| automation_blocked | 223 |
| reviewed_no_action | 35 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#44759](https://github.com/openclaw/openclaw/issues/44759) | maintainer_input | Security boundary requires central triage for this linked report. | Sep 4, 2026, 17:05 UTC | [issue-openclaw-openclaw-138383](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138383.md) | [33893876691](https://github.com/openclaw/clawsweeper/actions/runs/33893876691) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#127777](https://github.com/openclaw/openclaw/issues/127777) | maintainer_input | Provide a writable repair checkout that includes a direct `../codex` clone and permits dependency installation, then rerun this job from the suppli... | Sep 4, 2026, 16:38 UTC | [issue-openclaw-openclaw-138316](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138316.md) | [33895663443](https://github.com/openclaw/clawsweeper/actions/runs/33895663443) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable checkout with dependencies installed and the required ../codex source checkout, then execute the supplied narrow fix artifact. | Sep 4, 2026, 14:46 UTC | [issue-openclaw-openclaw-138288](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138288.md) | [33884741929](https://github.com/openclaw/clawsweeper/actions/runs/33884741929) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable worker with sibling ../codex available for direct inspection (or permit its clone). Then implement and validate the prepared nar... | Sep 4, 2026, 13:47 UTC | [issue-openclaw-openclaw-138251](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138251.md) | [33878784259](https://github.com/openclaw/clawsweeper/actions/runs/33878784259) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#138139](https://github.com/openclaw/openclaw/issues/138139) | maintainer_input | Provide an environment with the sibling ../codex checkout (or authority to create it) so the required direct source inspection can occur.; Provide... | Sep 4, 2026, 10:28 UTC | [issue-openclaw-openclaw-138139](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138139.md) | [33862220415](https://github.com/openclaw/clawsweeper/actions/runs/33862220415) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provision the exact sibling ../codex checkout (or a worker environment that can do so) before implementation. This is a repository hard gate, not a... | Sep 4, 2026, 10:02 UTC | [issue-openclaw-openclaw-138102](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138102.md) | [33860696610](https://github.com/openclaw/clawsweeper/actions/runs/33860696610) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#136991](https://github.com/openclaw/openclaw/issues/136991) | maintainer_input | Quarantine this exact historical reference for central security handling under the worker's credential-content rule. Recommend no GitHub mutation o... | Sep 4, 2026, 07:08 UTC | [issue-openclaw-openclaw-137959](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-137959.md) | [33846825110](https://github.com/openclaw/clawsweeper/actions/runs/33846825110) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable checkout with dependencies and the required sibling ../codex checkout so the regression can be added, demonstrated failing befor... | Sep 4, 2026, 06:53 UTC | [issue-openclaw-openclaw-137925](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-137925.md) | [33845858866](https://github.com/openclaw/clawsweeper/actions/runs/33845858866) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable disposable macOS CI context with sibling ../codex source available. It must add and demonstrate the pre-fix-failing Swift regres... | Sep 4, 2026, 02:57 UTC | [issue-openclaw-openclaw-137085](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-137085.md) | [33830387073](https://github.com/openclaw/clawsweeper/actions/runs/33830387073) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable, dependency-ready worker with a readable ../codex checkout. Cloning https://github.com/openai/codex.git failed with EROFS, and b... | Sep 4, 2026, 02:53 UTC | [issue-openclaw-openclaw-137729](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-137729.md) | [33830389070](https://github.com/openclaw/clawsweeper/actions/runs/33830389070) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable checkout with dependencies installed and a readable sibling ../codex checkout, then apply and validate the fix artifact. | Sep 4, 2026, 02:17 UTC | [issue-openclaw-openclaw-137742](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-137742.md) | [33827996506](https://github.com/openclaw/clawsweeper/actions/runs/33827996506) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#136576](https://github.com/openclaw/openclaw/issues/136576) | maintainer_input | Provide a readable sibling ../codex checkout (or a worker environment permitted to obtain it) and a disposable macOS GitHub Actions-capable runner.... | Sep 2, 2026, 21:10 UTC | [issue-openclaw-openclaw-136576](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-136576.md) | [33680826222](https://github.com/openclaw/clawsweeper/actions/runs/33680826222) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable checkout with dependencies installed and a readable sibling ../codex checkout so the required direct-Codex gate, pre-fix regress... | Sep 2, 2026, 08:29 UTC | [issue-openclaw-openclaw-135892](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135892.md) | [33601402674](https://github.com/openclaw/clawsweeper/actions/runs/33601402674) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#94597](https://github.com/openclaw/openclaw/issues/94597) | maintainer_input | Confirm whether #94597 may change channel selection so a configured actions.handleAction-only plugin can be selected for send; current main makes t... | Sep 2, 2026, 07:58 UTC | [issue-openclaw-openclaw-94597](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-94597.md) | [33602051322](https://github.com/openclaw/clawsweeper/actions/runs/33602051322) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable implementation worker with dependencies (node_modules is absent) and the required sibling ../codex checkout. This sandbox cannot... | Sep 2, 2026, 07:30 UTC | [issue-openclaw-openclaw-135948](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135948.md) | [33597174710](https://github.com/openclaw/clawsweeper/actions/runs/33597174710) |

#### Automation Snapshot

| Repository | Item | Lane state | Recorded status | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#137217](https://github.com/openclaw/openclaw/pull/137217) | action_planned | Focused non-security bug repair; retain genuine configured-unavailable diagnostics and fail-closed owner routing. | Sep 3, 2026, 11:08 UTC | [issue-openclaw-openclaw-137217](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-137217.md) | [33745761658](https://github.com/openclaw/clawsweeper/actions/runs/33745761658) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#134826](https://github.com/openclaw/openclaw/pull/134826) | action_planned | Repair the adopted branch before any later review or merge decision. | Sep 1, 2026, 16:48 UTC | [automerge-openclaw-openclaw-134826](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-134826.md) | [33510064495](https://github.com/openclaw/clawsweeper/actions/runs/33510064495) |
| [openclaw/fs-safe](https://github.com/openclaw/fs-safe) | [#167](https://github.com/openclaw/fs-safe/pull/167) | action_planned | The calibrated automerge job requires repairing actionable review findings rather than pausing at the review blocker. Merge and close are forbidden... | Aug 30, 2026, 03:50 UTC | [automerge-openclaw-fs-safe-167](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-fs-safe-167.md) | [33290793289](https://github.com/openclaw/clawsweeper/actions/runs/33290793289) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119737](https://github.com/openclaw/openclaw/pull/119737) | action_planned | Repair the same-repository writable branch, preserving the existing PR and issue linkage. | Aug 29, 2026, 16:56 UTC | [automerge-openclaw-openclaw-119737](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119737.md) | [33263540122](https://github.com/openclaw/clawsweeper/actions/runs/33263540122) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118045](https://github.com/openclaw/openclaw/pull/118045) | action_planned | Repair the writable canonical branch instead of replacing it. No merge or close action is authorized by this job. | Aug 29, 2026, 01:40 UTC | [automerge-openclaw-openclaw-118045](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118045.md) | [33225689593](https://github.com/openclaw/clawsweeper/actions/runs/33225689593) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119367](https://github.com/openclaw/openclaw/pull/119367) | action_planned | Rebase and repair the adopted branch before any merge evaluation. | Aug 19, 2026, 23:08 UTC | [automerge-openclaw-openclaw-119367](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119367.md) | [32311398489](https://github.com/openclaw/clawsweeper/actions/runs/32311398489) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#125942](https://github.com/openclaw/openclaw/pull/125942) | action_planned | Retain only the exact stopReason:error single-text sentinel when a later user turn exists; preserve the existing raw failed tool-call/result remova... | Aug 18, 2026, 20:42 UTC | [issue-openclaw-openclaw-125942](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-125942.md) | [32182945350](https://github.com/openclaw/clawsweeper/actions/runs/32182945350) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122865](https://github.com/openclaw/openclaw/pull/122865) | action_planned | The issue is an ordinary Control UI bug with a clear shared-owner boundary and no security or product-policy change. | Aug 13, 2026, 00:53 UTC | [issue-openclaw-openclaw-122865](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122865.md) | [31655597674](https://github.com/openclaw/clawsweeper/actions/runs/31655597674) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122739](https://github.com/openclaw/openclaw/pull/122739) | action_planned | Repair the startup owner and its matching onboarding fast path; retain alias and display-name fail-closed behavior. | Aug 12, 2026, 19:25 UTC | [issue-openclaw-openclaw-122739](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122739.md) | [31628859894](https://github.com/openclaw/clawsweeper/actions/runs/31628859894) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122746](https://github.com/openclaw/openclaw/pull/122746) | action_planned | Current main still has the reproduced configuration-validation mismatch; no viable implementation PR is hydrated. | Aug 12, 2026, 19:20 UTC | [issue-openclaw-openclaw-122746](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122746.md) | [31628857219](https://github.com/openclaw/clawsweeper/actions/runs/31628857219) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122618](https://github.com/openclaw/openclaw/pull/122618) | action_planned | The open canonical issue is a reproducible broken existing behavior, not a security or product-policy change. | Aug 12, 2026, 14:53 UTC | [issue-openclaw-openclaw-122618](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122618.md) | [31603999801](https://github.com/openclaw/clawsweeper/actions/runs/31603999801) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122616](https://github.com/openclaw/openclaw/pull/122616) | action_planned | The canonical issue remains an open, narrow, non-security bug. | Aug 12, 2026, 14:05 UTC | [issue-openclaw-openclaw-122616](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122616.md) | [31604002398](https://github.com/openclaw/clawsweeper/actions/runs/31604002398) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#90467](https://github.com/openclaw/openclaw/pull/90467) | action_planned | The reported behavior is reproducible and has a narrow owner-boundary repair path. | Aug 12, 2026, 03:17 UTC | [issue-openclaw-openclaw-90467](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-90467.md) | [31559320102](https://github.com/openclaw/clawsweeper/actions/runs/31559320102) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122244](https://github.com/openclaw/openclaw/pull/122244) | action_planned | Implement the source-proven shared parsing repair and create the allowed narrow fix PR; do not close or merge the issue. | Aug 11, 2026, 22:19 UTC | [issue-openclaw-openclaw-122244](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122244.md) | [31541178357](https://github.com/openclaw/clawsweeper/actions/runs/31541178357) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122251](https://github.com/openclaw/openclaw/pull/122251) | action_planned | The open canonical issue is a source-reproducible, non-security regression with a narrow internal fix path. | Aug 11, 2026, 21:50 UTC | [issue-openclaw-openclaw-122251](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122251.md) | [31539316747](https://github.com/openclaw/clawsweeper/actions/runs/31539316747) |

#### Intervention Needed

| Repository | Item | Lane state | Recorded blocker | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): validation command runtime budget exhausted | Sep 4, 2026, 16:55 UTC | [automerge-openclaw-openclaw-128236](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-128236.md) | [33890288308](https://github.com/openclaw/clawsweeper/actions/runs/33890288308) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-138388](cluster:issue-openclaw-openclaw-138388) | automation_failed | Implementation requires a writable checkout with the mandatory sibling Codex source available for direct runtime/protocol inspection. | Sep 4, 2026, 16:50 UTC | [issue-openclaw-openclaw-138388](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138388.md) | [33896539897](https://github.com/openclaw/clawsweeper/actions/runs/33896539897) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#138370](https://github.com/openclaw/openclaw/pull/138370) | automation_failed | Implementation is blocked only on the mandatory Codex-source and dependency preconditions; no security, product, config, persistence, or schema dec... | Sep 4, 2026, 16:05 UTC | [issue-openclaw-openclaw-138370](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138370.md) | [33892026553](https://github.com/openclaw/clawsweeper/actions/runs/33892026553) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#138339](https://github.com/openclaw/openclaw/pull/138339) | automation_blocked | The bug is source-reproducible on current main. Implementation is blocked only by the immutable checkout, missing dependencies, and unavailable req... | Sep 4, 2026, 15:29 UTC | [issue-openclaw-openclaw-138339](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138339.md) | [33887573084](https://github.com/openclaw/clawsweeper/actions/runs/33887573084) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#138308](https://github.com/openclaw/openclaw/pull/138308) | automation_blocked | Direct inspection of sibling Codex source is a repository hard gate before a verdict or code change; this worker cannot satisfy it. | Sep 4, 2026, 15:21 UTC | [issue-openclaw-openclaw-138308](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138308.md) | [33887342374](https://github.com/openclaw/clawsweeper/actions/runs/33887342374) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#138298](https://github.com/openclaw/openclaw/pull/138298) | automation_blocked | Implementation and proof require a writable, dependency-complete checkout at the hydrated main SHA and the mandated sibling Codex source. | Sep 4, 2026, 14:15 UTC | [issue-openclaw-openclaw-138298](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138298.md) | [33880735135](https://github.com/openclaw/clawsweeper/actions/runs/33880735135) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#138225](https://github.com/openclaw/openclaw/issues/138225) | automation_blocked | The repair needs a writable, dependency-ready checkout and the mandatory direct ../codex source inspection before implementation or proof can be co... | Sep 4, 2026, 13:10 UTC | [issue-openclaw-openclaw-138225](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138225.md) | [33874993294](https://github.com/openclaw/clawsweeper/actions/runs/33874993294) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#138224](https://github.com/openclaw/openclaw/pull/138224) | automation_blocked | Implementation needs a writable checkout, sibling Codex source, runnable dependencies, and a native Windows Node-service Defender before/after trac... | Sep 4, 2026, 12:09 UTC | [issue-openclaw-openclaw-138224](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138224.md) | [33870561464](https://github.com/openclaw/clawsweeper/actions/runs/33870561464) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#138153](https://github.com/openclaw/openclaw/pull/138153) | automation_failed | Implementation is blocked only by the worker environment: it is read-only, cannot hydrate dependencies, lacks the pinned native Testbox client, and... | Sep 4, 2026, 10:35 UTC | [issue-openclaw-openclaw-138153](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138153.md) | [33862518208](https://github.com/openclaw/clawsweeper/actions/runs/33862518208) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-138043](cluster:issue-openclaw-openclaw-138043) | automation_blocked | The job's reproduce-first and direct dependency-inspection prerequisites cannot be completed here. This is an environment blocker, not evidence tha... | Sep 4, 2026, 08:08 UTC | [issue-openclaw-openclaw-138043](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138043.md) | [33851169458](https://github.com/openclaw/clawsweeper/actions/runs/33851169458) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | Codex fix worker failed: stream disconnected before completion: stream closed before response.completed | Sep 4, 2026, 07:38 UTC | [automerge-openclaw-openclaw-126056](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-126056.md) | [33847384799](https://github.com/openclaw/clawsweeper/actions/runs/33847384799) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/cli/daem... | Sep 4, 2026, 05:45 UTC | [automerge-openclaw-openclaw-119975](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119975.md) | [33837447144](https://github.com/openclaw/clawsweeper/actions/runs/33837447144) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119735](https://github.com/openclaw/openclaw/pull/119735) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Sep 4, 2026, 04:36 UTC | [automerge-openclaw-openclaw-119735](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119735.md) | [33835009925](https://github.com/openclaw/clawsweeper/actions/runs/33835009925) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#137845](https://github.com/openclaw/openclaw/pull/137845) | automation_blocked | Requires a writable compliant repair worker. | Sep 4, 2026, 03:58 UTC | [issue-openclaw-openclaw-137845](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-137845.md) | [33834847125](https://github.com/openclaw/clawsweeper/actions/runs/33834847125) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#137820](https://github.com/openclaw/openclaw/pull/137820) | automation_blocked | Requires a writable repair executor with dependencies and the mandated Codex source checkout. | Sep 4, 2026, 03:40 UTC | [issue-openclaw-openclaw-137820](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-137820.md) | [33833716565](https://github.com/openclaw/clawsweeper/actions/runs/33833716565) |

#### No Pending Action

| Repository | Item | Lane state | Latest result | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/fs-safe](https://github.com/openclaw/fs-safe) |  | reviewed_no_action | PR #171 is already squash-merged into main at f4c5b321ea9f980ab2481a1c90b81f8083085d3a after passing exact-head Windows native proof and the record... | Aug 31, 2026, 13:56 UTC | [automerge-openclaw-fs-safe-171](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-fs-safe-171.md) | [33396103073](https://github.com/openclaw/clawsweeper/actions/runs/33396103073) |
| [openclaw/fs-safe](https://github.com/openclaw/fs-safe) |  | reviewed_no_action | PR #179 is already merged unchanged into main as 309548dc907bc5b1b3c1ffb50e742a0e239c72a6. Its exact reviewed head was dd07ec96aa3631a66cb1575a2dec... | Aug 30, 2026, 18:57 UTC | [automerge-openclaw-fs-safe-179](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-fs-safe-179.md) | [33328721377](https://github.com/openclaw/clawsweeper/actions/runs/33328721377) |
| [openclaw/fs-safe](https://github.com/openclaw/fs-safe) |  | reviewed_no_action | PR #174 is already merged into main at 7a20891847fc09a71be837118b5bad99b7a7d575. No repair, replacement PR, merge, comment, or closure action remai... | Aug 30, 2026, 13:45 UTC | [automerge-openclaw-fs-safe-174](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-fs-safe-174.md) | [33314505807](https://github.com/openclaw/clawsweeper/actions/runs/33314505807) |
| [openclaw/fs-safe](https://github.com/openclaw/fs-safe) |  | reviewed_no_action | PR #172 is already merged into current main; no repair, closure, or merge action remains. | Aug 30, 2026, 11:47 UTC | [automerge-openclaw-fs-safe-172](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-fs-safe-172.md) | [33309153174](https://github.com/openclaw/clawsweeper/actions/runs/33309153174) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | No implementation PR is needed: #133157 already landed the microphone-lifecycle repair on main and closed #133117. The checked-out main contains th... | Aug 30, 2026, 08:12 UTC | [issue-openclaw-openclaw-133117](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-133117.md) | [33300544041](https://github.com/openclaw/clawsweeper/actions/runs/33300544041) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | No repair branch is needed: #122425 is already merged into main, so the requested contributor-branch repair is inapplicable. | Aug 26, 2026, 16:35 UTC | [automerge-openclaw-openclaw-122425](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-122425.md) | [32986188393](https://github.com/openclaw/clawsweeper/actions/runs/32986188393) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | No repair is needed: #110434 was squash-merged at 2026-08-26T02:56:21Z as 7e9d59ce3e0daab1ad1e85cee902d3cdf4895102, with its hydrated CI gate passi... | Aug 26, 2026, 03:30 UTC | [automerge-openclaw-openclaw-110434](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-110434.md) | [32926033246](https://github.com/openclaw/clawsweeper/actions/runs/32926033246) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#124015](https://github.com/openclaw/openclaw/pull/124015) | reviewed_no_action | No repair is needed: #124015 was merged into current main at 13f0e02de62d0807b785c887bce3d1f006948770 before this worker ran. The closed PR is hist... | Aug 23, 2026, 16:09 UTC | [automerge-openclaw-openclaw-124015](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-124015.md) | [32647144460](https://github.com/openclaw/clawsweeper/actions/runs/32647144460) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep #123073 open as the canonical report and #123083 as its canonical contributor fix path. The PR is narrow and writable, but its hydrated CI is... | Aug 13, 2026, 08:58 UTC | [issue-openclaw-openclaw-123073](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-123073.md) | [31683927347](https://github.com/openclaw/clawsweeper/actions/runs/31683927347) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | #119968 is already closed and its requested ACP model-forwarding repair is present on current main via merged #120046. No branch repair, replacemen... | Aug 12, 2026, 21:41 UTC | [automerge-openclaw-openclaw-119968](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119968.md) | [31643205081](https://github.com/openclaw/clawsweeper/actions/runs/31643205081) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120557](https://github.com/openclaw/openclaw/issues/120557) | reviewed_no_action | No new fix PR: current origin/main already implements the requested session-provider-first quota selection and regression coverage. Focused validat... | Aug 11, 2026, 10:45 UTC | [issue-openclaw-openclaw-120557](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-120557.md) | [31483039146](https://github.com/openclaw/clawsweeper/actions/runs/31483039146) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep #114169 open as the canonical issue and #119735 open as its viable canonical fix PR. The closed configuration PR #114840 is historical partial... | Aug 5, 2026, 21:22 UTC | [issue-openclaw-openclaw-114169](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-114169.md) | [31045738534](https://github.com/openclaw/clawsweeper/actions/runs/31045738534) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep #92199 as the canonical issue and #119589 as its active narrow fix PR. The Feishu report is related but has a distinct dispatcher root cause;... | Aug 5, 2026, 11:37 UTC | [issue-openclaw-openclaw-92199](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-92199.md) | [31000389101](https://github.com/openclaw/clawsweeper/actions/runs/31000389101) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep #119557 and the narrow, green #119567 implementation as canonical. Keep the error-terminal work (#119554/#119556) and contributor quiet-stream... | Aug 5, 2026, 10:26 UTC | [issue-openclaw-openclaw-119557](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-119557.md) | [30996832702](https://github.com/openclaw/clawsweeper/actions/runs/30996832702) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#117669](https://github.com/openclaw/openclaw/issues/117669) | reviewed_no_action | No implementation PR is needed: current main at 18c9f27e2de3cb1d3ac6555588a356d56c6fd9bb already applies the requested path-scoped transcript excep... | Aug 3, 2026, 03:39 UTC | [issue-openclaw-openclaw-117669](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-117669.md) | [30775617626](https://github.com/openclaw/clawsweeper/actions/runs/30775617626) |

#### Completed

| Repository | Item | Lane state | Recorded outcome | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

### Clusters Needing Inspection

| Cluster | State | Reason | Report | Run |
| --- | --- | --- | --- | --- |
| automerge-openclaw-openclaw-128236 | fix failed | validation command failed (pnpm check:changed): validation command runtime budget exhausted | [automerge-openclaw-openclaw-128236](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-128236.md) | [33890288308](https://github.com/openclaw/clawsweeper/actions/runs/33890288308) |
| issue-openclaw-openclaw-138316 | needs human | Provide a writable repair checkout that includes a direct `../codex` clone and permits dependency installation, then rerun this job from the suppli... | [issue-openclaw-openclaw-138316](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138316.md) | [33895663443](https://github.com/openclaw/clawsweeper/actions/runs/33895663443) |
| issue-openclaw-openclaw-138288 | needs human | Provide a writable checkout with dependencies installed and the required ../codex source checkout, then execute the supplied narrow fix artifact. | [issue-openclaw-openclaw-138288](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138288.md) | [33884741929](https://github.com/openclaw/clawsweeper/actions/runs/33884741929) |
| issue-openclaw-openclaw-138251 | needs human | Provide a writable worker with sibling ../codex available for direct inspection (or permit its clone). Then implement and validate the prepared nar... | [issue-openclaw-openclaw-138251](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138251.md) | [33878784259](https://github.com/openclaw/clawsweeper/actions/runs/33878784259) |
| issue-openclaw-openclaw-138139 | needs human | Provide an environment with the sibling ../codex checkout (or authority to create it) so the required direct source inspection can occur.; Provide... | [issue-openclaw-openclaw-138139](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138139.md) | [33862220415](https://github.com/openclaw/clawsweeper/actions/runs/33862220415) |
| issue-openclaw-openclaw-138102 | needs human | Provision the exact sibling ../codex checkout (or a worker environment that can do so) before implementation. This is a repository hard gate, not a... | [issue-openclaw-openclaw-138102](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-138102.md) | [33860696610](https://github.com/openclaw/clawsweeper/actions/runs/33860696610) |
| automerge-openclaw-openclaw-126056 | fix failed | Codex fix worker failed: stream disconnected before completion: stream closed before response.completed | [automerge-openclaw-openclaw-126056](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-126056.md) | [33847384799](https://github.com/openclaw/clawsweeper/actions/runs/33847384799) |
| issue-openclaw-openclaw-137925 | needs human | Provide a writable checkout with dependencies and the required sibling ../codex checkout so the regression can be added, demonstrated failing befor... | [issue-openclaw-openclaw-137925](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-137925.md) | [33845858866](https://github.com/openclaw/clawsweeper/actions/runs/33845858866) |
| automerge-openclaw-openclaw-119975 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/cli/daem... | [automerge-openclaw-openclaw-119975](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119975.md) | [33837447144](https://github.com/openclaw/clawsweeper/actions/runs/33837447144) |
| automerge-openclaw-openclaw-118303 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests, extensions, extensionTests, docs,... | [automerge-openclaw-openclaw-118303](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118303.md) | [33828018804](https://github.com/openclaw/clawsweeper/actions/runs/33828018804) |
| issue-openclaw-openclaw-137085 | needs human | Provide a writable disposable macOS CI context with sibling ../codex source available. It must add and demonstrate the pre-fix-failing Swift regres... | [issue-openclaw-openclaw-137085](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-137085.md) | [33830387073](https://github.com/openclaw/clawsweeper/actions/runs/33830387073) |
| issue-openclaw-openclaw-137729 | needs human | Provide a writable, dependency-ready worker with a readable ../codex checkout. Cloning https://github.com/openai/codex.git failed with EROFS, and b... | [issue-openclaw-openclaw-137729](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-137729.md) | [33830389070](https://github.com/openclaw/clawsweeper/actions/runs/33830389070) |
| issue-openclaw-openclaw-137742 | needs human | Provide a writable checkout with dependencies installed and a readable sibling ../codex checkout, then apply and validate the fix artifact. | [issue-openclaw-openclaw-137742](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-137742.md) | [33827996506](https://github.com/openclaw/clawsweeper/actions/runs/33827996506) |
| issue-openclaw-openclaw-136576 | needs human | Provide a readable sibling ../codex checkout (or a worker environment permitted to obtain it) and a disposable macOS GitHub Actions-capable runner.... | [issue-openclaw-openclaw-136576](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-136576.md) | [33680826222](https://github.com/openclaw/clawsweeper/actions/runs/33680826222) |
| issue-openclaw-openclaw-135892 | needs human | Provide a writable checkout with dependencies installed and a readable sibling ../codex checkout so the required direct-Codex gate, pre-fix regress... | [issue-openclaw-openclaw-135892](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135892.md) | [33601402674](https://github.com/openclaw/clawsweeper/actions/runs/33601402674) |
| issue-openclaw-openclaw-94597 | needs human | Confirm whether #94597 may change channel selection so a configured actions.handleAction-only plugin can be selected for send; current main makes t... | [issue-openclaw-openclaw-94597](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-94597.md) | [33602051322](https://github.com/openclaw/clawsweeper/actions/runs/33602051322) |
| issue-openclaw-openclaw-135948 | needs human | Provide a writable implementation worker with dependencies (node_modules is absent) and the required sibling ../codex checkout. This sandbox cannot... | [issue-openclaw-openclaw-135948](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135948.md) | [33597174710](https://github.com/openclaw/clawsweeper/actions/runs/33597174710) |
| issue-openclaw-openclaw-135860 | needs human | Provide a writable repair checkout with the required sibling ../codex source available and dependencies/cache writable, then rerun this job to crea... | [issue-openclaw-openclaw-135860](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135860.md) | [33592048552](https://github.com/openclaw/clawsweeper/actions/runs/33592048552) |
| issue-openclaw-openclaw-135856 | needs human | Provide a writable, dependency-ready worker with sibling ../codex source available; execute the artifact and obtain the requested native Windows af... | [issue-openclaw-openclaw-135856](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135856.md) | [33587823688](https://github.com/openclaw/clawsweeper/actions/runs/33587823688) |
| issue-openclaw-openclaw-135754 | needs human | Provide a writable repair checkout with ../codex available for the mandatory direct inspection, then rerun this job to implement and validate the f... | [issue-openclaw-openclaw-135754](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135754.md) | [33588130306](https://github.com/openclaw/clawsweeper/actions/runs/33588130306) |
| issue-openclaw-openclaw-135743 | needs human | Rerun this job in a writable checkout with the required sibling Codex source present and dependencies installed; then capture the pre-fix scale reg... | [issue-openclaw-openclaw-135743](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135743.md) | [33585512082](https://github.com/openclaw/clawsweeper/actions/runs/33585512082) |
| issue-openclaw-openclaw-135635 | needs human | Provide a writable repair environment with sibling ../codex source available and a writable Corepack/pnpm cache, then rerun the focused validation... | [issue-openclaw-openclaw-135635](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135635.md) | [33578733888](https://github.com/openclaw/clawsweeper/actions/runs/33578733888) |
| issue-openclaw-openclaw-135705 | needs human | Provision `../codex` for the mandatory direct-source inspection and a writable dependency-ready checkout; then rerun the focused Control UI E2E rep... | [issue-openclaw-openclaw-135705](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135705.md) | [33581026819](https://github.com/openclaw/clawsweeper/actions/runs/33581026819) |
| issue-openclaw-openclaw-135633 | needs human | Provision a writable checkout with dependencies installed and the required sibling ../codex source, then apply and validate the repair artifact. No... | [issue-openclaw-openclaw-135633](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135633.md) | [33578735941](https://github.com/openclaw/clawsweeper/actions/runs/33578735941) |
| issue-openclaw-openclaw-135704 | needs human | Provide a writable checkout with ../codex present and dependencies installable, then execute the artifact on clawsweeper/issue-openclaw-openclaw-13... | [issue-openclaw-openclaw-135704](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135704.md) | [33575475221](https://github.com/openclaw/clawsweeper/actions/runs/33575475221) |
| issue-openclaw-openclaw-135649 | needs human | Provide a writable checkout with dependencies and sibling ../codex source, or rerun this job in the normal ClawSweeper execution environment. | [issue-openclaw-openclaw-135649](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135649.md) | [33573802206](https://github.com/openclaw/clawsweeper/actions/runs/33573802206) |
| issue-openclaw-openclaw-135502 | needs human | Provide a writable checkout with dependencies and the required sibling ../codex source, then apply and validate the narrowed Signal repair artifact... | [issue-openclaw-openclaw-135502](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135502.md) | [33557058872](https://github.com/openclaw/clawsweeper/actions/runs/33557058872) |
| issue-openclaw-openclaw-135361 | needs human | Provision a writable repair runner containing project dependencies and sibling ../codex source, then apply the attached new-fix-PR artifact. | [issue-openclaw-openclaw-135361](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135361.md) | [33539223136](https://github.com/openclaw/clawsweeper/actions/runs/33539223136) |
| issue-openclaw-openclaw-135378 | needs human | Provide an accessible sibling ../codex checkout and a writable repair workspace with dependencies. The executor must inspect the exact Codex protoc... | [issue-openclaw-openclaw-135378](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135378.md) | [33537196498](https://github.com/openclaw/clawsweeper/actions/runs/33537196498) |
| issue-openclaw-openclaw-135028 | needs human | Provide a writable repair environment containing ../codex and allowing dependency installation; then execute the attached narrow new-PR artifact an... | [issue-openclaw-openclaw-135028](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135028.md) | [33493977093](https://github.com/openclaw/clawsweeper/actions/runs/33493977093) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [automerge-openclaw-openclaw-128236](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-128236.md) | failed |  |  | validation command failed (pnpm check:changed): validation command runtime budget exhausted | [33890288308](https://github.com/openclaw/clawsweeper/actions/runs/33890288308) |
| [automerge-openclaw-openclaw-128236](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-128236.md) | blocked |  |  | validation command failed (pnpm check:changed): validation command runtime budget exhausted | [33890288308](https://github.com/openclaw/clawsweeper/actions/runs/33890288308) |
| [automerge-openclaw-openclaw-126056](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-126056.md) | failed |  |  | Codex fix worker failed: stream disconnected before completion: stream closed before response.completed | [33847384799](https://github.com/openclaw/clawsweeper/actions/runs/33847384799) |
| [automerge-openclaw-openclaw-126056](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-126056.md) | blocked |  |  | Codex fix worker failed: stream disconnected before completion: stream closed before response.completed | [33847384799](https://github.com/openclaw/clawsweeper/actions/runs/33847384799) |
| [automerge-openclaw-openclaw-119975](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119975.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/cli/daem... | [33837447144](https://github.com/openclaw/clawsweeper/actions/runs/33837447144) |
| [automerge-openclaw-openclaw-119975](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119975.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/cli/daem... | [33837447144](https://github.com/openclaw/clawsweeper/actions/runs/33837447144) |
| [automerge-openclaw-openclaw-118303](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118303.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests, extensions, extensionTests, docs,... | [33828018804](https://github.com/openclaw/clawsweeper/actions/runs/33828018804) |
| [automerge-openclaw-openclaw-118303](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118303.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests, extensions, extensionTests, docs,... | [33828018804](https://github.com/openclaw/clawsweeper/actions/runs/33828018804) |
| [issue-openclaw-openclaw-131850](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-131850.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/infra/he... | [33186610612](https://github.com/openclaw/clawsweeper/actions/runs/33186610612) |
| [automerge-openclaw-openclaw-118806](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118806.md) | failed |  |  | Codex /review did not pass after final base synchronization: Do not merge: HEAD and pinned main have identical trees, so this repair branch is a no... | [33175335805](https://github.com/openclaw/clawsweeper/actions/runs/33175335805) |
| [automerge-openclaw-openclaw-118806](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118806.md) | blocked |  |  | Codex /review did not pass after final base synchronization: Do not merge: HEAD and pinned main have identical trees, so this repair branch is a no... | [33175335805](https://github.com/openclaw/clawsweeper/actions/runs/33175335805) |
| [issue-openclaw-openclaw-131490](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-131490.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/cron/ser... | [33140333422](https://github.com/openclaw/clawsweeper/actions/runs/33140333422) |
| [issue-openclaw-openclaw-131491](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-131491.md) | blocked |  |  | Codex fix worker timed out after 1800000ms | [33140420201](https://github.com/openclaw/clawsweeper/actions/runs/33140420201) |
| [issue-openclaw-openclaw-131374](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-131374.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/infra/he... | [33133608883](https://github.com/openclaw/clawsweeper/actions/runs/33133608883) |
| [issue-openclaw-openclaw-131322](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-131322.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/infra/op... | [33131854653](https://github.com/openclaw/clawsweeper/actions/runs/33131854653) |
| [issue-openclaw-openclaw-130968](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-130968.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/cli/upda... | [33084426639](https://github.com/openclaw/clawsweeper/actions/runs/33084426639) |
| [issue-openclaw-openclaw-20837](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-20837.md) | blocked |  |  | validation command failed (pnpm check:changed): validation command runtime budget exhausted | [33042714207](https://github.com/openclaw/clawsweeper/actions/runs/33042714207) |
| [automerge-openclaw-openclaw-119589](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119589.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests [check:changed] src/auto-reply/rep... | [33057200420](https://github.com/openclaw/clawsweeper/actions/runs/33057200420) |
| [automerge-openclaw-openclaw-119589](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119589.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests [check:changed] src/auto-reply/rep... | [33057200420](https://github.com/openclaw/clawsweeper/actions/runs/33057200420) |
| [issue-openclaw-openclaw-130673](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-130673.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/commands... | [33042723251](https://github.com/openclaw/clawsweeper/actions/runs/33042723251) |
| [issue-openclaw-openclaw-130432](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-130432.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests, extensions, extensionTests, bundl... | [33023816976](https://github.com/openclaw/clawsweeper/actions/runs/33023816976) |
| [automerge-openclaw-openclaw-130179](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-130179.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests, ui [check:changed] ui/src/e2e/que... | [33007299834](https://github.com/openclaw/clawsweeper/actions/runs/33007299834) |
| [automerge-openclaw-openclaw-130179](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-130179.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests, ui [check:changed] ui/src/e2e/que... | [33007299834](https://github.com/openclaw/clawsweeper/actions/runs/33007299834) |
| [issue-openclaw-openclaw-130274](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-130274.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/e... | [32998374854](https://github.com/openclaw/clawsweeper/actions/runs/32998374854) |
| [issue-openclaw-openclaw-130020](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-130020.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/daemon/l... | [32949133444](https://github.com/openclaw/clawsweeper/actions/runs/32949133444) |

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

