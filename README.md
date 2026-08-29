# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Aug 29, 2026, 01:04 UTC

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Review comments checked | Aug 29, 2026, 01:03 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/33223873742) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Apply idle | Aug 29, 2026, 01:04 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/33225336646) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Aug 28, 2026, 21:03 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/33210836393) |

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

Last source update: Aug 29, 2026, 00:31 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 684 | 100% |
| Run attempts archived | 2313 | audit |
| Latest successful clusters | 568 | 83.0% |
| Latest failed clusters | 114 | 16.7% |
| Latest cancelled clusters | 2 | 0.3% |
| Needs-human clusters | 66 | 9.6% |
| Fix actions failed | 32 | 4.9% |
| Fix actions blocked | 138 | 20.9% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 312 | 99.7% |
| Skipped mutation attempts | 1 | 0.3% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 684 clusters: 238 maintainer action, 112 automation snapshot, 304 intervention needed, 30 no pending action, 0 completed.
- Maintainer first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#45902](https://github.com/openclaw/openclaw/issues/45902) is maintainer_input: Provide a writable repair environment with dependencies and an inspectable sibling ../codex checkout; then execute the pre-fix regression....
- Intervention first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#132096](https://github.com/openclaw/openclaw/pull/132096) is automation_failed: source PR head changed after automerge planning: expected 936f2616eaed7a1fa453290894ce205229ce9433, current 3105cbdcf9710e1f048ab515de386....
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#119735](https://github.com/openclaw/openclaw/pull/119735) is action_planned: Repair the lifecycle owner so heartbeat refresh and cleanup are bound to the exact active socket; do not merge in this autofix job..
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 238 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 112 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 304 | automation failure or blocker recorded |
| No Pending Action | 30 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 95 |
| merge_ready | 45 |
| merge_not_authorized | 98 |
| checks_blocked | 43 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 68 |
| automation_failed | 132 |
| automation_blocked | 172 |
| reviewed_no_action | 30 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#45902](https://github.com/openclaw/openclaw/issues/45902) | maintainer_input | Provide a writable repair environment with dependencies and an inspectable sibling ../codex checkout; then execute the pre-fix regression and apply... | Aug 28, 2026, 04:11 UTC | [issue-openclaw-openclaw-131355](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-131355.md) | [33139961207](https://github.com/openclaw/clawsweeper/actions/runs/33139961207) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide or approve the raw plugins-list RSS samples from the failing Blacksmith run and comparable passing runs, plus the intended sustained-regres... | Aug 27, 2026, 17:00 UTC | [issue-openclaw-openclaw-130977](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-130977.md) | [33093436084](https://github.com/openclaw/clawsweeper/actions/runs/33093436084) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable repair environment containing ../codex (or explicitly waive that repository gate) so ClawSweeper can implement and validate the... | Aug 27, 2026, 02:25 UTC | [issue-openclaw-openclaw-130237](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-130237.md) | [33032370764](https://github.com/openclaw/clawsweeper/actions/runs/33032370764) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#130161](https://github.com/openclaw/openclaw/issues/130161) | maintainer_input | Provide a readable sibling ../codex checkout (or a writable environment that can create one) so the mandatory direct Codex protocol/runtime inspect... | Aug 26, 2026, 14:41 UTC | [issue-openclaw-openclaw-130161](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-130161.md) | [32979533908](https://github.com/openclaw/clawsweeper/actions/runs/32979533908) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable repair checkout with the required sibling ../codex source available for direct inspection; then rerun the ordering regression an... | Aug 26, 2026, 14:06 UTC | [issue-openclaw-openclaw-130059](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-130059.md) | [32976535907](https://github.com/openclaw/clawsweeper/actions/runs/32976535907) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable checkout with the required ../codex source clone, then rerun this repair job. | Aug 26, 2026, 12:44 UTC | [issue-openclaw-openclaw-130018](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-130018.md) | [32961808199](https://github.com/openclaw/clawsweeper/actions/runs/32961808199) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable repair checkout with dependencies and the required sibling ../codex source checkout, then rerun this job to create and validate... | Aug 26, 2026, 09:46 UTC | [issue-openclaw-openclaw-130028](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-130028.md) | [32953990104](https://github.com/openclaw/clawsweeper/actions/runs/32953990104) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#130017](https://github.com/openclaw/openclaw/issues/130017) | maintainer_input | Record maintainer acceptance for the material task_runs migration: only legacy cron rows with status `reconciling` should become a terminal, non-de... | Aug 26, 2026, 08:54 UTC | [issue-openclaw-openclaw-130017](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-130017.md) | [32949039387](https://github.com/openclaw/clawsweeper/actions/runs/32949039387) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#129860](https://github.com/openclaw/openclaw/issues/129860) | maintainer_input | Quarantine only this PR; its requested post-merge supersession remains for the authorized post-landing flow. | Aug 26, 2026, 05:16 UTC | [automerge-openclaw-openclaw-129784](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-129784.md) | [32932883581](https://github.com/openclaw/clawsweeper/actions/runs/32932883581) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable checkout with dependencies and sibling ../codex source available for the required direct Codex audit; then apply the attached na... | Aug 26, 2026, 03:25 UTC | [issue-openclaw-openclaw-129749](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-129749.md) | [32924253994](https://github.com/openclaw/clawsweeper/actions/runs/32924253994) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#57259](https://github.com/openclaw/openclaw/issues/57259) | maintainer_input | Decide whether to supply the required Codex checkout/dependency-ready environment or waive that gate for this issue; without it, ClawSweeper cannot... | Aug 26, 2026, 02:24 UTC | [issue-openclaw-openclaw-57259](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-57259.md) | [32921952897](https://github.com/openclaw/clawsweeper/actions/runs/32921952897) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | [#3507](https://github.com/openclaw/clawhub/issues/3507) | maintainer_input | An OpenClaw Foundation Vercel-team member must authorize the Vercel deployment for the exact post-rebase #3528 head after its required checks and f... | Aug 25, 2026, 12:51 UTC | [automerge-openclaw-clawhub-3528](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-clawhub-3528.md) | [32848991944](https://github.com/openclaw/clawsweeper/actions/runs/32848991944) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#125838](https://github.com/openclaw/openclaw/issues/125838) | maintainer_input | Provide a writable repair worker with ../codex available for the mandatory direct inspection, a writable Corepack cache, and installed dependencies... | Aug 25, 2026, 08:09 UTC | [issue-openclaw-openclaw-125838](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-125838.md) | [32824136836](https://github.com/openclaw/clawsweeper/actions/runs/32824136836) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#128971](https://github.com/openclaw/openclaw/issues/128971) | maintainer_input | Provide a readable sibling ../codex checkout (or a writable environment that can clone it) and a writable dependency-capable OpenClaw checkout; the... | Aug 25, 2026, 02:47 UTC | [issue-openclaw-openclaw-128971](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128971.md) | [32801882278](https://github.com/openclaw/clawsweeper/actions/runs/32801882278) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#128877](https://github.com/openclaw/openclaw/issues/128877) | maintainer_input | Capture the exact b10453 managed llama-server --version output or an equivalent redacted trace from a writable, network-enabled environment; the jo... | Aug 24, 2026, 22:23 UTC | [issue-openclaw-openclaw-128877](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128877.md) | [32783416042](https://github.com/openclaw/clawsweeper/actions/runs/32783416042) |

#### Automation Snapshot

| Repository | Item | Lane state | Recorded status | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119735](https://github.com/openclaw/openclaw/pull/119735) | action_planned | Repair the lifecycle owner so heartbeat refresh and cleanup are bound to the exact active socket; do not merge in this autofix job. | Aug 26, 2026, 16:20 UTC | [automerge-openclaw-openclaw-119735](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119735.md) | [32979295410](https://github.com/openclaw/clawsweeper/actions/runs/32979295410) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#120143](https://github.com/openclaw/openclaw/pull/120143) | action_planned | Repair the contributor branch rather than replace it; it is same-repository and writable, but needs a rebase and one focused correctness repair. | Aug 26, 2026, 03:01 UTC | [automerge-openclaw-openclaw-120143](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-120143.md) | [32924256351](https://github.com/openclaw/clawsweeper/actions/runs/32924256351) |
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122227](https://github.com/openclaw/openclaw/pull/122227) | action_planned | No viable implementation PR is hydrated; the issue is the canonical path for a new narrow fix PR. | Aug 11, 2026, 20:41 UTC | [issue-openclaw-openclaw-122227](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122227.md) | [31533749490](https://github.com/openclaw/clawsweeper/actions/runs/31533749490) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118751](https://github.com/openclaw/openclaw/pull/118751) | action_planned | Repair the writable same-repository contributor branch rather than replacing it; preserve #102190 attribution already present in the PR body. | Aug 11, 2026, 19:26 UTC | [automerge-openclaw-openclaw-118751](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118751.md) | [31523943887](https://github.com/openclaw/clawsweeper/actions/runs/31523943887) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118696](https://github.com/openclaw/openclaw/pull/118696) | action_planned | Repair the existing same-repository writable branch, preserving the PR body attribution to #118652 and @yozakura-ava. Merge is disabled by this job. | Aug 11, 2026, 19:21 UTC | [automerge-openclaw-openclaw-118696](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118696.md) | [31523946548](https://github.com/openclaw/clawsweeper/actions/runs/31523946548) |

#### Intervention Needed

| Repository | Item | Lane state | Recorded blocker | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#132096](https://github.com/openclaw/openclaw/pull/132096) | automation_failed | source PR head changed after automerge planning: expected 936f2616eaed7a1fa453290894ce205229ce9433, current 3105cbdcf9710e1f048ab515de386937897c5058 | Aug 29, 2026, 00:31 UTC | [automerge-openclaw-openclaw-132096](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-132096.md) | [33223169888](https://github.com/openclaw/clawsweeper/actions/runs/33223169888) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#118045](https://github.com/openclaw/openclaw/pull/118045) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Aug 29, 2026, 00:15 UTC | [automerge-openclaw-openclaw-118045](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118045.md) | [33221190905](https://github.com/openclaw/clawsweeper/actions/runs/33221190905) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests, ui [check:changed] ui/src/e2e/con... | Aug 28, 2026, 23:41 UTC | [automerge-openclaw-openclaw-121050](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121050.md) | [33217823248](https://github.com/openclaw/clawsweeper/actions/runs/33217823248) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#131750](https://github.com/openclaw/openclaw/pull/131750) | automation_blocked | Repair the editable contributor branch only after direct Lit and Codex-source checks plus exact-head diff inspection are available; do not replace... | Aug 28, 2026, 22:15 UTC | [issue-openclaw-openclaw-131708](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-131708.md) | [33202487568](https://github.com/openclaw/clawsweeper/actions/runs/33202487568) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#131954](https://github.com/openclaw/openclaw/pull/131954) | automation_blocked | The implementation needs a writable runner with the required sibling Codex checkout before the mandated real-handler regression can be added and run. | Aug 28, 2026, 19:34 UTC | [issue-openclaw-openclaw-131954](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-131954.md) | [33202484710](https://github.com/openclaw/clawsweeper/actions/runs/33202484710) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/infra/he... | Aug 28, 2026, 19:21 UTC | [issue-openclaw-openclaw-131850](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-131850.md) | [33186610612](https://github.com/openclaw/clawsweeper/actions/runs/33186610612) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#132000](https://github.com/openclaw/openclaw/pull/132000) | automation_blocked | Implementation is blocked only by this worker environment: filesystem writes are disallowed, node_modules is absent, the focused Vitest command fai... | Aug 28, 2026, 18:40 UTC | [issue-openclaw-openclaw-132000](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-132000.md) | [33198951424](https://github.com/openclaw/clawsweeper/actions/runs/33198951424) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-86050](cluster:issue-openclaw-openclaw-86050) | automation_failed | Implementation, branch validation, and PR creation require a writable executor checkout with dependencies. | Aug 28, 2026, 18:09 UTC | [issue-openclaw-openclaw-86050](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-86050.md) | [33196594366](https://github.com/openclaw/clawsweeper/actions/runs/33196594366) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#131855](https://github.com/openclaw/openclaw/pull/131855) | automation_blocked | The repair shape is narrow and does not require a configuration, storage, or security-boundary change, but this worker cannot satisfy the repositor... | Aug 28, 2026, 16:12 UTC | [issue-openclaw-openclaw-131855](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-131855.md) | [33186841670](https://github.com/openclaw/clawsweeper/actions/runs/33186841670) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#131711](https://github.com/openclaw/openclaw/pull/131711) | automation_blocked | A stopped/finalizing embedded handle remains abortable through the Gateway bridge. Creating and validating the repair is blocked by the supplied re... | Aug 28, 2026, 14:59 UTC | [issue-openclaw-openclaw-131711](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-131711.md) | [33180780863](https://github.com/openclaw/clawsweeper/actions/runs/33180780863) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | automation_failed | Codex /review did not pass after final base synchronization: Do not merge: HEAD and pinned main have identical trees, so this repair branch is a no... | Aug 28, 2026, 14:36 UTC | [automerge-openclaw-openclaw-118806](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118806.md) | [33175335805](https://github.com/openclaw/clawsweeper/actions/runs/33175335805) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#131797](https://github.com/openclaw/openclaw/pull/131797) | automation_blocked | Implementation is blocked only by this worker environment. The executor must install dependencies in a writable trusted checkout, inspect the requi... | Aug 28, 2026, 14:24 UTC | [issue-openclaw-openclaw-131797](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-131797.md) | [33178624016](https://github.com/openclaw/clawsweeper/actions/runs/33178624016) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#131770](https://github.com/openclaw/openclaw/pull/131770) | automation_blocked | Use a writable checkout containing the preflight main SHA and ../codex, install dependencies, then capture the specified failing regression before... | Aug 28, 2026, 13:17 UTC | [issue-openclaw-openclaw-131770](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-131770.md) | [33173683686](https://github.com/openclaw/clawsweeper/actions/runs/33173683686) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#131561](https://github.com/openclaw/openclaw/pull/131561) | automation_blocked | Narrow bug-only repair is clear, but implementation and local validation are blocked by the worker environment. | Aug 28, 2026, 10:40 UTC | [issue-openclaw-openclaw-131561](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-131561.md) | [33163328848](https://github.com/openclaw/clawsweeper/actions/runs/33163328848) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-131700](cluster:issue-openclaw-openclaw-131700) | automation_failed | The executor needs a writable checkout with dependencies before applying and validating the narrow repair. | Aug 28, 2026, 10:03 UTC | [issue-openclaw-openclaw-131700](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-131700.md) | [33159725508](https://github.com/openclaw/clawsweeper/actions/runs/33159725508) |

#### No Pending Action

| Repository | Item | Lane state | Latest result | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Current main d9669ce72cbe31ff8e1ae66de03f34f2014a4f1e does not reproduce the reported Claude CLI guard rejection: Claude now declares selectable na... | Aug 3, 2026, 03:34 UTC | [issue-openclaw-openclaw-118279](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118279.md) | [30775874159](https://github.com/openclaw/clawsweeper/actions/runs/30775874159) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep issue #118274 and its focused implementation PR #118315 as the canonical fix path. The hydrated state shows no security-sensitive items, no ac... | Aug 3, 2026, 00:19 UTC | [issue-openclaw-openclaw-118274](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118274.md) | [30772786025](https://github.com/openclaw/clawsweeper/actions/runs/30772786025) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | No implementation PR is needed. Hydrated GitHub state marks #118244 closed as of 2026-08-02T23:42:16Z, and latest main at b7f9cd0a01671f7be5fc34b4b... | Aug 2, 2026, 23:48 UTC | [issue-openclaw-openclaw-118244](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-118244.md) | [30772787106](https://github.com/openclaw/clawsweeper/actions/runs/30772787106) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Keep #73478 open as the canonical bug report and retain #117951 as its active, validated implementation PR. Current main still projects assistant e... | Aug 2, 2026, 10:58 UTC | [issue-openclaw-openclaw-73478](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-73478.md) | [30744624314](https://github.com/openclaw/clawsweeper/actions/runs/30744624314) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | reviewed_no_action | Live preflight shows both the hinted canonical PR #70585 and listed candidate PR #61620 are already closed. Current main f5bb19e028fb69f1b837c2a0cf... | Jul 16, 2026, 09:38 UTC | [gitcrawl-55-subagent-announce-fall-back-to-best-effort-delivery](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/gitcrawl-55-subagent-announce-fall-back-to-best-effort-delivery.md) | [29487615730](https://github.com/openclaw/clawsweeper/actions/runs/29487615730) |

#### Completed

| Repository | Item | Lane state | Recorded outcome | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |

### Clusters Needing Inspection

| Cluster | State | Reason | Report | Run |
| --- | --- | --- | --- | --- |
| automerge-openclaw-openclaw-132096 | repair_contributor_branch blocked | source PR head changed after automerge planning: expected 936f2616eaed7a1fa453290894ce205229ce9433, current 3105cbdcf9710e1f048ab515de386937897c5058 | [automerge-openclaw-openclaw-132096](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-132096.md) | [33223169888](https://github.com/openclaw/clawsweeper/actions/runs/33223169888) |
| automerge-openclaw-openclaw-121050 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests, ui [check:changed] ui/src/e2e/con... | [automerge-openclaw-openclaw-121050](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121050.md) | [33217823248](https://github.com/openclaw/clawsweeper/actions/runs/33217823248) |
| issue-openclaw-openclaw-131850 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/infra/he... | [issue-openclaw-openclaw-131850](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-131850.md) | [33186610612](https://github.com/openclaw/clawsweeper/actions/runs/33186610612) |
| automerge-openclaw-openclaw-118806 | fix failed | Codex /review did not pass after final base synchronization: Do not merge: HEAD and pinned main have identical trees, so this repair branch is a no... | [automerge-openclaw-openclaw-118806](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118806.md) | [33175335805](https://github.com/openclaw/clawsweeper/actions/runs/33175335805) |
| automerge-openclaw-openclaw-119975 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/cli/daem... | [automerge-openclaw-openclaw-119975](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119975.md) | [33154165129](https://github.com/openclaw/clawsweeper/actions/runs/33154165129) |
| issue-openclaw-openclaw-131490 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/cron/ser... | [issue-openclaw-openclaw-131490](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-131490.md) | [33140333422](https://github.com/openclaw/clawsweeper/actions/runs/33140333422) |
| issue-openclaw-openclaw-131491 | execute_fix blocked | Codex fix worker timed out after 1800000ms | [issue-openclaw-openclaw-131491](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-131491.md) | [33140420201](https://github.com/openclaw/clawsweeper/actions/runs/33140420201) |
| issue-openclaw-openclaw-131355 | needs human | Provide a writable repair environment with dependencies and an inspectable sibling ../codex checkout; then execute the pre-fix regression and apply... | [issue-openclaw-openclaw-131355](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-131355.md) | [33139961207](https://github.com/openclaw/clawsweeper/actions/runs/33139961207) |
| issue-openclaw-openclaw-131374 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/infra/he... | [issue-openclaw-openclaw-131374](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-131374.md) | [33133608883](https://github.com/openclaw/clawsweeper/actions/runs/33133608883) |
| issue-openclaw-openclaw-131322 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/infra/op... | [issue-openclaw-openclaw-131322](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-131322.md) | [33131854653](https://github.com/openclaw/clawsweeper/actions/runs/33131854653) |
| issue-openclaw-openclaw-130968 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/cli/upda... | [issue-openclaw-openclaw-130968](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-130968.md) | [33084426639](https://github.com/openclaw/clawsweeper/actions/runs/33084426639) |
| issue-openclaw-openclaw-130977 | needs human | Provide or approve the raw plugins-list RSS samples from the failing Blacksmith run and comparable passing runs, plus the intended sustained-regres... | [issue-openclaw-openclaw-130977](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-130977.md) | [33093436084](https://github.com/openclaw/clawsweeper/actions/runs/33093436084) |
| issue-openclaw-openclaw-20837 | execute_fix blocked | validation command failed (pnpm check:changed): validation command runtime budget exhausted | [issue-openclaw-openclaw-20837](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-20837.md) | [33042714207](https://github.com/openclaw/clawsweeper/actions/runs/33042714207) |
| automerge-openclaw-openclaw-119589 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests [check:changed] src/auto-reply/rep... | [automerge-openclaw-openclaw-119589](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119589.md) | [33057200420](https://github.com/openclaw/clawsweeper/actions/runs/33057200420) |
| issue-openclaw-openclaw-130673 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/commands... | [issue-openclaw-openclaw-130673](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-130673.md) | [33042723251](https://github.com/openclaw/clawsweeper/actions/runs/33042723251) |
| issue-openclaw-openclaw-130237 | needs human | Provide a writable repair environment containing ../codex (or explicitly waive that repository gate) so ClawSweeper can implement and validate the... | [issue-openclaw-openclaw-130237](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-130237.md) | [33032370764](https://github.com/openclaw/clawsweeper/actions/runs/33032370764) |
| issue-openclaw-openclaw-130432 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests, extensions, extensionTests, bundl... | [issue-openclaw-openclaw-130432](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-130432.md) | [33023816976](https://github.com/openclaw/clawsweeper/actions/runs/33023816976) |
| automerge-openclaw-openclaw-130179 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests, ui [check:changed] ui/src/e2e/que... | [automerge-openclaw-openclaw-130179](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-130179.md) | [33007299834](https://github.com/openclaw/clawsweeper/actions/runs/33007299834) |
| issue-openclaw-openclaw-130274 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/e... | [issue-openclaw-openclaw-130274](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-130274.md) | [32998374854](https://github.com/openclaw/clawsweeper/actions/runs/32998374854) |
| issue-openclaw-openclaw-130161 | needs human | Provide a readable sibling ../codex checkout (or a writable environment that can create one) so the mandatory direct Codex protocol/runtime inspect... | [issue-openclaw-openclaw-130161](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-130161.md) | [32979533908](https://github.com/openclaw/clawsweeper/actions/runs/32979533908) |
| issue-openclaw-openclaw-130059 | needs human | Provide a writable repair checkout with the required sibling ../codex source available for direct inspection; then rerun the ordering regression an... | [issue-openclaw-openclaw-130059](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-130059.md) | [32976535907](https://github.com/openclaw/clawsweeper/actions/runs/32976535907) |
| issue-openclaw-openclaw-130018 | needs human | Provide a writable checkout with the required ../codex source clone, then rerun this repair job. | [issue-openclaw-openclaw-130018](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-130018.md) | [32961808199](https://github.com/openclaw/clawsweeper/actions/runs/32961808199) |
| issue-openclaw-openclaw-130020 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/daemon/l... | [issue-openclaw-openclaw-130020](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-130020.md) | [32949133444](https://github.com/openclaw/clawsweeper/actions/runs/32949133444) |
| issue-openclaw-openclaw-130028 | needs human | Provide a writable repair checkout with dependencies and the required sibling ../codex source checkout, then rerun this job to create and validate... | [issue-openclaw-openclaw-130028](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-130028.md) | [32953990104](https://github.com/openclaw/clawsweeper/actions/runs/32953990104) |
| issue-openclaw-openclaw-130017 | needs human | Record maintainer acceptance for the material task_runs migration: only legacy cron rows with status `reconciling` should become a terminal, non-de... | [issue-openclaw-openclaw-130017](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-130017.md) | [32949039387](https://github.com/openclaw/clawsweeper/actions/runs/32949039387) |
| issue-openclaw-openclaw-129827 | execute_fix blocked | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/b... | [issue-openclaw-openclaw-129827](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-129827.md) | [32927455050](https://github.com/openclaw/clawsweeper/actions/runs/32927455050) |
| issue-openclaw-openclaw-129749 | needs human | Provide a writable checkout with dependencies and sibling ../codex source available for the required direct Codex audit; then apply the attached na... | [issue-openclaw-openclaw-129749](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-129749.md) | [32924253994](https://github.com/openclaw/clawsweeper/actions/runs/32924253994) |
| issue-openclaw-openclaw-57259 | needs human | Decide whether to supply the required Codex checkout/dependency-ready environment or waive that gate for this issue; without it, ClawSweeper cannot... | [issue-openclaw-openclaw-57259](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-57259.md) | [32921952897](https://github.com/openclaw/clawsweeper/actions/runs/32921952897) |
| automerge-openclaw-openclaw-118303 | fix failed | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests [check:changed] src/agents/tools/i... | [automerge-openclaw-openclaw-118303](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118303.md) | [32886748544](https://github.com/openclaw/clawsweeper/actions/runs/32886748544) |
| automerge-openclaw-openclaw-119160 | fix failed | Codex /review did not pass after final base synchronization: No current-diff security issue: HEAD equals pinned base and has no changes. The Bedroc... | [automerge-openclaw-openclaw-119160](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119160.md) | [32858343606](https://github.com/openclaw/clawsweeper/actions/runs/32858343606) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [automerge-openclaw-openclaw-132096](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-132096.md) | blocked | [#132096](https://github.com/openclaw/openclaw/pull/132096) |  | source PR head changed after automerge planning: expected 936f2616eaed7a1fa453290894ce205229ce9433, current 3105cbdcf9710e1f048ab515de386937897c5058 | [33223169888](https://github.com/openclaw/clawsweeper/actions/runs/33223169888) |
| [automerge-openclaw-openclaw-121050](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121050.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests, ui [check:changed] ui/src/e2e/con... | [33217823248](https://github.com/openclaw/clawsweeper/actions/runs/33217823248) |
| [automerge-openclaw-openclaw-121050](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-121050.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests, ui [check:changed] ui/src/e2e/con... | [33217823248](https://github.com/openclaw/clawsweeper/actions/runs/33217823248) |
| [issue-openclaw-openclaw-131850](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-131850.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/infra/he... | [33186610612](https://github.com/openclaw/clawsweeper/actions/runs/33186610612) |
| [automerge-openclaw-openclaw-118806](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118806.md) | failed |  |  | Codex /review did not pass after final base synchronization: Do not merge: HEAD and pinned main have identical trees, so this repair branch is a no... | [33175335805](https://github.com/openclaw/clawsweeper/actions/runs/33175335805) |
| [automerge-openclaw-openclaw-118806](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118806.md) | blocked |  |  | Codex /review did not pass after final base synchronization: Do not merge: HEAD and pinned main have identical trees, so this repair branch is a no... | [33175335805](https://github.com/openclaw/clawsweeper/actions/runs/33175335805) |
| [automerge-openclaw-openclaw-119975](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119975.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/cli/daem... | [33154165129](https://github.com/openclaw/clawsweeper/actions/runs/33154165129) |
| [automerge-openclaw-openclaw-119975](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119975.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/cli/daem... | [33154165129](https://github.com/openclaw/clawsweeper/actions/runs/33154165129) |
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
| [issue-openclaw-openclaw-129827](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-129827.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/b... | [32927455050](https://github.com/openclaw/clawsweeper/actions/runs/32927455050) |
| [automerge-openclaw-openclaw-118303](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118303.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests [check:changed] src/agents/tools/i... | [32886748544](https://github.com/openclaw/clawsweeper/actions/runs/32886748544) |
| [automerge-openclaw-openclaw-118303](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118303.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests [check:changed] src/agents/tools/i... | [32886748544](https://github.com/openclaw/clawsweeper/actions/runs/32886748544) |

### Top Blocked Reasons

| Reason | Latest count | Example cluster |
| --- | ---: | --- |
| job does not allow merge | 102 | [automerge-openclaw-crabbox-1252](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-crabbox-1252.md) |
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

