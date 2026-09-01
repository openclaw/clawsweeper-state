# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: Sep 1, 2026, 19:00 UTC

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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Apply in progress | Sep 1, 2026, 19:00 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/33544256589) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Apply idle | Sep 1, 2026, 18:57 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/33546495061) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Planning review | Sep 1, 2026, 18:10 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/33541985183) |

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

Last source update: Sep 1, 2026, 18:09 UTC

State: Failed clusters need inspection

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 762 | 100% |
| Run attempts archived | 2511 | audit |
| Latest successful clusters | 636 | 83.5% |
| Latest failed clusters | 124 | 16.3% |
| Latest cancelled clusters | 2 | 0.3% |
| Needs-human clusters | 96 | 12.6% |
| Fix actions failed | 30 | 4.5% |
| Fix actions blocked | 135 | 20.0% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 321 | 99.7% |
| Skipped mutation attempts | 1 | 0.3% |

### Owner Action Dashboard

#### Recap

- Snapshot only: lane states reflect the latest durable run records, not live GitHub state; verify linked items before action.
- Latest records: 762 clusters: 273 maintainer action, 114 automation snapshot, 340 intervention needed, 35 no pending action, 0 completed.
- Maintainer first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [issue-openclaw-openclaw-135361](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135361.md) is maintainer_input: Provision a writable repair runner containing project dependencies and sibling ../codex source, then apply the attached new-fix-PR artifact..
- Intervention first: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#135305](https://github.com/openclaw/openclaw/pull/135305) is automation_blocked: Needs a writable executor with dependencies and the required ../codex checkout to apply the patch, run the regression pre/post-fix, chang....
- Automation latest: [openclaw/openclaw](https://github.com/openclaw/openclaw) [#134826](https://github.com/openclaw/openclaw/pull/134826) is action_planned: Repair the adopted branch before any later review or merge decision..
- Completed latest: no completed action in the latest records.

| Bucket | Count | Operator read |
| --- | ---: | --- |
| Maintainer Action | 273 | explicit decision, access, or merge authority recorded |
| Automation Snapshot | 114 | repair, check, or planned action recorded; verify live status |
| Intervention Needed | 340 | automation failure or blocker recorded |
| No Pending Action | 35 | latest record proposes no repair or apply action |
| Completed | 0 | latest record contains an executed merge or close |

| Lane state | Count |
| --- | ---: |
| maintainer_input | 126 |
| merge_ready | 45 |
| merge_not_authorized | 102 |
| checks_blocked | 43 |
| repair_open | 1 |
| automation_active | 0 |
| action_planned | 70 |
| automation_failed | 139 |
| automation_blocked | 201 |
| reviewed_no_action | 35 |
| completed | 0 |

#### Maintainer Action

| Repository | Item | Lane state | Recorded need | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provision a writable repair runner containing project dependencies and sibling ../codex source, then apply the attached new-fix-PR artifact. | Sep 1, 2026, 18:09 UTC | [issue-openclaw-openclaw-135361](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135361.md) | [33539223136](https://github.com/openclaw/clawsweeper/actions/runs/33539223136) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#135378](https://github.com/openclaw/openclaw/issues/135378) | maintainer_input | Provide an accessible sibling ../codex checkout and a writable repair workspace with dependencies. The executor must inspect the exact Codex protoc... | Sep 1, 2026, 17:53 UTC | [issue-openclaw-openclaw-135378](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135378.md) | [33537196498](https://github.com/openclaw/clawsweeper/actions/runs/33537196498) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable repair environment containing ../codex and allowing dependency installation; then execute the attached narrow new-PR artifact an... | Sep 1, 2026, 11:02 UTC | [issue-openclaw-openclaw-135028](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135028.md) | [33493977093](https://github.com/openclaw/clawsweeper/actions/runs/33493977093) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#68788](https://github.com/openclaw/openclaw/issues/68788) | maintainer_input | Provide a writable repair checkout with the required sibling ../codex source checkout so the mandatory Codex gate, failing regression, focused vali... | Sep 1, 2026, 10:29 UTC | [issue-openclaw-openclaw-135013](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135013.md) | [33495548911](https://github.com/openclaw/clawsweeper/actions/runs/33495548911) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#134999](https://github.com/openclaw/openclaw/issues/134999) | maintainer_input | Provide the required ../codex sibling checkout (or a writable rerun environment) so the mandated source gate and subsequent reproduction can proceed. | Sep 1, 2026, 09:59 UTC | [issue-openclaw-openclaw-134999](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134999.md) | [33490446502](https://github.com/openclaw/clawsweeper/actions/runs/33490446502) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable checkout refreshed to openclaw/openclaw@1d7937d4053ec237ef6a521f40b99343c39659dc (or refresh preflight), with dependencies and .... | Sep 1, 2026, 05:19 UTC | [issue-openclaw-openclaw-134748](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134748.md) | [33472136553](https://github.com/openclaw/clawsweeper/actions/runs/33472136553) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable repair environment with dependencies and the required sibling ../codex checkout; then reproduce the SIGTERM-ignoring managed-chi... | Sep 1, 2026, 03:59 UTC | [issue-openclaw-openclaw-134649](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134649.md) | [33464942218](https://github.com/openclaw/clawsweeper/actions/runs/33464942218) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide #134655's exact head to a writable worker with sibling ../codex, then validate its persistent-failure regression and exact-head CI. | Sep 1, 2026, 03:09 UTC | [issue-openclaw-openclaw-134638](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134638.md) | [33464090142](https://github.com/openclaw/clawsweeper/actions/runs/33464090142) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#134445](https://github.com/openclaw/openclaw/issues/134445) | maintainer_input | Provide a readable sibling ../codex checkout (or permit its clone) and a writable task checkout; rerun this cluster so the required direct Codex in... | Sep 1, 2026, 01:50 UTC | [issue-openclaw-openclaw-134445](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134445.md) | [33436408020](https://github.com/openclaw/clawsweeper/actions/runs/33436408020) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Rerun this job on a writable worker that provides (or permits cloning) ../codex and permits pnpm/Corepack dependency installation. | Sep 1, 2026, 00:31 UTC | [issue-openclaw-openclaw-134256](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134256.md) | [33427095987](https://github.com/openclaw/clawsweeper/actions/runs/33427095987) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provision a writable repair worker with the required sibling ../codex checkout, then apply and validate the specified narrow fix on clawsweeper/iss... | Aug 31, 2026, 18:31 UTC | [issue-openclaw-openclaw-134297](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134297.md) | [33423393704](https://github.com/openclaw/clawsweeper/actions/runs/33423393704) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable macOS repair environment with the required sibling ../codex checkout available; this runner cannot clone it because github.com D... | Aug 31, 2026, 17:14 UTC | [issue-openclaw-openclaw-134182](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134182.md) | [33415950250](https://github.com/openclaw/clawsweeper/actions/runs/33415950250) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a writable repair checkout (and the required sibling ../codex source checkout) so ClawSweeper can apply the two-file repair and run the man... | Aug 31, 2026, 16:31 UTC | [issue-openclaw-openclaw-134201](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134201.md) | [33412370496](https://github.com/openclaw/clawsweeper/actions/runs/33412370496) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provision a writable repair environment containing sibling ../codex; no product or security judgment is needed. | Aug 31, 2026, 10:15 UTC | [issue-openclaw-openclaw-133935](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-133935.md) | [33379322056](https://github.com/openclaw/clawsweeper/actions/runs/33379322056) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) |  | maintainer_input | Provide a readable sibling ../codex checkout (or permitted access to it) and a writable repair environment; then execute and validate the narrow Ga... | Aug 31, 2026, 09:08 UTC | [issue-openclaw-openclaw-133956](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-133956.md) | [33374347918](https://github.com/openclaw/clawsweeper/actions/runs/33374347918) |

#### Automation Snapshot

| Repository | Item | Lane state | Recorded status | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
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
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#122227](https://github.com/openclaw/openclaw/pull/122227) | action_planned | No viable implementation PR is hydrated; the issue is the canonical path for a new narrow fix PR. | Aug 11, 2026, 20:41 UTC | [issue-openclaw-openclaw-122227](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-122227.md) | [31533749490](https://github.com/openclaw/clawsweeper/actions/runs/31533749490) |

#### Intervention Needed

| Repository | Item | Lane state | Recorded blocker | Updated | Cluster | Run |
| --- | --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#135305](https://github.com/openclaw/openclaw/pull/135305) | automation_blocked | Needs a writable executor with dependencies and the required ../codex checkout to apply the patch, run the regression pre/post-fix, changed-files c... | Sep 1, 2026, 17:36 UTC | [issue-openclaw-openclaw-135305](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135305.md) | [33535553461](https://github.com/openclaw/clawsweeper/actions/runs/33535553461) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#135291](https://github.com/openclaw/openclaw/pull/135291) | automation_blocked | A writable checkout with the required sibling Codex source is needed before any code change or implementation verdict; focused tests also require a... | Sep 1, 2026, 17:05 UTC | [issue-openclaw-openclaw-135291](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135291.md) | [33532529744](https://github.com/openclaw/clawsweeper/actions/runs/33532529744) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119975](https://github.com/openclaw/openclaw/pull/119975) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Sep 1, 2026, 12:42 UTC | [automerge-openclaw-openclaw-119975](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119975.md) | [33505913793](https://github.com/openclaw/clawsweeper/actions/runs/33505913793) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#135164](https://github.com/openclaw/openclaw/pull/135164) | automation_blocked | Implementation is blocked only by the constrained worker environment; the supplied hydrated issue remains a narrow canonical fix candidate. | Sep 1, 2026, 12:09 UTC | [issue-openclaw-openclaw-135164](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135164.md) | [33504331882](https://github.com/openclaw/clawsweeper/actions/runs/33504331882) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#135084](https://github.com/openclaw/openclaw/issues/135084) | automation_blocked | The job requires stopping when the failing regression does not reproduce on latest main. Current source and its dedicated gated regression cover th... | Sep 1, 2026, 11:26 UTC | [issue-openclaw-openclaw-135084](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135084.md) | [33500713367](https://github.com/openclaw/clawsweeper/actions/runs/33500713367) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#135061](https://github.com/openclaw/openclaw/pull/135061) | automation_blocked | Repair requires a writable, dependency-complete checkout and mandatory direct inspection of sibling ../codex before a Codex-gated implementation ve... | Sep 1, 2026, 10:14 UTC | [issue-openclaw-openclaw-135061](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135061.md) | [33494454303](https://github.com/openclaw/clawsweeper/actions/runs/33494454303) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#135026](https://github.com/openclaw/openclaw/pull/135026) | automation_failed | Implementation is blocked only by the stale/incomplete read-only checkout. Re-run in a writable checkout at the hydrated main SHA with dependencies... | Sep 1, 2026, 09:15 UTC | [issue-openclaw-openclaw-135026](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135026.md) | [33489611257](https://github.com/openclaw/clawsweeper/actions/runs/33489611257) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#134960](https://github.com/openclaw/openclaw/pull/134960) | automation_blocked | A writable, dependency-ready environment with access to the required sibling Codex source and a Windows runner is required before editing or valida... | Sep 1, 2026, 09:02 UTC | [issue-openclaw-openclaw-134960](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134960.md) | [33488795868](https://github.com/openclaw/clawsweeper/actions/runs/33488795868) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#119735](https://github.com/openclaw/openclaw/pull/119735) | automation_failed | Maintainer opted this PR into ClawSweeper automerge/autofix repair; run the direct Codex edit loop after live hydration instead of a separate read-... | Sep 1, 2026, 07:57 UTC | [automerge-openclaw-openclaw-119735](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119735.md) | [33482483354](https://github.com/openclaw/clawsweeper/actions/runs/33482483354) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#134895](https://github.com/openclaw/openclaw/pull/134895) | automation_blocked | Required edit and proof gates cannot run in this environment. | Sep 1, 2026, 07:19 UTC | [issue-openclaw-openclaw-134895](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134895.md) | [33479834662](https://github.com/openclaw/clawsweeper/actions/runs/33479834662) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [cluster:issue-openclaw-openclaw-134700](cluster:issue-openclaw-openclaw-134700) | automation_failed | Implementation must be performed by the deterministic executor in a writable, dependency-ready checkout after satisfying the repository's Codex-sou... | Sep 1, 2026, 03:35 UTC | [issue-openclaw-openclaw-134700](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134700.md) | [33465653891](https://github.com/openclaw/clawsweeper/actions/runs/33465653891) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#134687](https://github.com/openclaw/openclaw/pull/134687) | automation_failed | The bug is isolated to Memory Core’s promotion-to-consolidation owner boundary. Implementation is blocked only in this worker environment: ../codex... | Sep 1, 2026, 03:22 UTC | [issue-openclaw-openclaw-134687](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134687.md) | [33464856864](https://github.com/openclaw/clawsweeper/actions/runs/33464856864) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#134657](https://github.com/openclaw/openclaw/pull/134657) | automation_failed | Implementation is blocked only by this worker environment; the deterministic executor can apply the narrow artifact on clawsweeper/issue-openclaw-o... | Sep 1, 2026, 02:55 UTC | [issue-openclaw-openclaw-134657](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134657.md) | [33462828896](https://github.com/openclaw/clawsweeper/actions/runs/33462828896) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#134621](https://github.com/openclaw/openclaw/pull/134621) | automation_failed | Repair must be executed in a writable checkout, then validated with dependencies installed and the disposable macOS CI lane. | Sep 1, 2026, 02:03 UTC | [issue-openclaw-openclaw-134621](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134621.md) | [33460033298](https://github.com/openclaw/clawsweeper/actions/runs/33460033298) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#134471](https://github.com/openclaw/openclaw/pull/134471) | automation_blocked | Keep the open canonical issue pending. OpenClaw policy prohibits a Codex verdict, code change, or proof-sufficient claim without direct inspection... | Sep 1, 2026, 01:36 UTC | [issue-openclaw-openclaw-134471](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134471.md) | [33448277833](https://github.com/openclaw/clawsweeper/actions/runs/33448277833) |

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
| issue-openclaw-openclaw-135361 | needs human | Provision a writable repair runner containing project dependencies and sibling ../codex source, then apply the attached new-fix-PR artifact. | [issue-openclaw-openclaw-135361](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135361.md) | [33539223136](https://github.com/openclaw/clawsweeper/actions/runs/33539223136) |
| issue-openclaw-openclaw-135378 | needs human | Provide an accessible sibling ../codex checkout and a writable repair workspace with dependencies. The executor must inspect the exact Codex protoc... | [issue-openclaw-openclaw-135378](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135378.md) | [33537196498](https://github.com/openclaw/clawsweeper/actions/runs/33537196498) |
| issue-openclaw-openclaw-135028 | needs human | Provide a writable repair environment containing ../codex and allowing dependency installation; then execute the attached narrow new-PR artifact an... | [issue-openclaw-openclaw-135028](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135028.md) | [33493977093](https://github.com/openclaw/clawsweeper/actions/runs/33493977093) |
| issue-openclaw-openclaw-135013 | needs human | Provide a writable repair checkout with the required sibling ../codex source checkout so the mandatory Codex gate, failing regression, focused vali... | [issue-openclaw-openclaw-135013](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-135013.md) | [33495548911](https://github.com/openclaw/clawsweeper/actions/runs/33495548911) |
| issue-openclaw-openclaw-134999 | needs human | Provide the required ../codex sibling checkout (or a writable rerun environment) so the mandated source gate and subsequent reproduction can proceed. | [issue-openclaw-openclaw-134999](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134999.md) | [33490446502](https://github.com/openclaw/clawsweeper/actions/runs/33490446502) |
| issue-openclaw-openclaw-134748 | needs human | Provide a writable checkout refreshed to openclaw/openclaw@1d7937d4053ec237ef6a521f40b99343c39659dc (or refresh preflight), with dependencies and .... | [issue-openclaw-openclaw-134748](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134748.md) | [33472136553](https://github.com/openclaw/clawsweeper/actions/runs/33472136553) |
| issue-openclaw-openclaw-134649 | needs human | Provide a writable repair environment with dependencies and the required sibling ../codex checkout; then reproduce the SIGTERM-ignoring managed-chi... | [issue-openclaw-openclaw-134649](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134649.md) | [33464942218](https://github.com/openclaw/clawsweeper/actions/runs/33464942218) |
| issue-openclaw-openclaw-134638 | needs human | Provide #134655's exact head to a writable worker with sibling ../codex, then validate its persistent-failure regression and exact-head CI. | [issue-openclaw-openclaw-134638](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134638.md) | [33464090142](https://github.com/openclaw/clawsweeper/actions/runs/33464090142) |
| issue-openclaw-openclaw-134445 | needs human | Provide a readable sibling ../codex checkout (or permit its clone) and a writable task checkout; rerun this cluster so the required direct Codex in... | [issue-openclaw-openclaw-134445](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134445.md) | [33436408020](https://github.com/openclaw/clawsweeper/actions/runs/33436408020) |
| issue-openclaw-openclaw-134256 | needs human | Rerun this job on a writable worker that provides (or permits cloning) ../codex and permits pnpm/Corepack dependency installation. | [issue-openclaw-openclaw-134256](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134256.md) | [33427095987](https://github.com/openclaw/clawsweeper/actions/runs/33427095987) |
| issue-openclaw-openclaw-134297 | needs human | Provision a writable repair worker with the required sibling ../codex checkout, then apply and validate the specified narrow fix on clawsweeper/iss... | [issue-openclaw-openclaw-134297](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134297.md) | [33423393704](https://github.com/openclaw/clawsweeper/actions/runs/33423393704) |
| issue-openclaw-openclaw-134182 | needs human | Provide a writable macOS repair environment with the required sibling ../codex checkout available; this runner cannot clone it because github.com D... | [issue-openclaw-openclaw-134182](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134182.md) | [33415950250](https://github.com/openclaw/clawsweeper/actions/runs/33415950250) |
| issue-openclaw-openclaw-134201 | needs human | Provide a writable repair checkout (and the required sibling ../codex source checkout) so ClawSweeper can apply the two-file repair and run the man... | [issue-openclaw-openclaw-134201](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-134201.md) | [33412370496](https://github.com/openclaw/clawsweeper/actions/runs/33412370496) |
| issue-openclaw-openclaw-133935 | needs human | Provision a writable repair environment containing sibling ../codex; no product or security judgment is needed. | [issue-openclaw-openclaw-133935](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-133935.md) | [33379322056](https://github.com/openclaw/clawsweeper/actions/runs/33379322056) |
| issue-openclaw-openclaw-133956 | needs human | Provide a readable sibling ../codex checkout (or permitted access to it) and a writable repair environment; then execute and validate the narrow Ga... | [issue-openclaw-openclaw-133956](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-133956.md) | [33374347918](https://github.com/openclaw/clawsweeper/actions/runs/33374347918) |
| issue-openclaw-openclaw-133955 | needs human | Choose the public protocol contract for an operator role rejection that has a signed device identity but lacks verified-user identity: authorize a... | [issue-openclaw-openclaw-133955](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-133955.md) | [33372030213](https://github.com/openclaw/clawsweeper/actions/runs/33372030213) |
| issue-openclaw-openclaw-133442 | needs human | Provide a write-enabled checkout with installed dependencies and sibling ../codex source available; then create or update clawsweeper/issue-opencla... | [issue-openclaw-openclaw-133442](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-133442.md) | [33329793842](https://github.com/openclaw/clawsweeper/actions/runs/33329793842) |
| issue-openclaw-openclaw-107487 | needs human | Provide a writable, dependency-hydrated repair environment containing pinned `acpx@0.13.1` and sibling `../codex` source, then replay this artifact... | [issue-openclaw-openclaw-107487](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-107487.md) | [33326936691](https://github.com/openclaw/clawsweeper/actions/runs/33326936691) |
| issue-openclaw-openclaw-133347 | needs human | Make sibling Codex source available at ../codex (or provide a writable/network-enabled worker) so the mandated direct-source gate can be completed... | [issue-openclaw-openclaw-133347](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-133347.md) | [33320711134](https://github.com/openclaw/clawsweeper/actions/runs/33320711134) |
| issue-openclaw-openclaw-133306 | needs human | Provide a writable checkout at current main, with the preflight main commit available and dependencies installable.; Provide the required sibling C... | [issue-openclaw-openclaw-133306](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-133306.md) | [33317189247](https://github.com/openclaw/clawsweeper/actions/runs/33317189247) |
| issue-openclaw-openclaw-132766 | needs human | Provide a writable repair checkout with the required sibling ../codex source, or explicitly waive that repository-local hard gate, so the failing r... | [issue-openclaw-openclaw-132766](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-132766.md) | [33318451956](https://github.com/openclaw/clawsweeper/actions/runs/33318451956) |
| issue-openclaw-openclaw-133294 | needs human | Provide a writable checkout at aea8ee845ccfc8ff50e5211dffec072bcd0bb0e6 with dependencies and sibling ../codex available, then rerun the exact repr... | [issue-openclaw-openclaw-133294](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-133294.md) | [33317190796](https://github.com/openclaw/clawsweeper/actions/runs/33317190796) |
| automerge-openclaw-fs-safe-175 | merge_canonical blocked | job does not allow merge | [automerge-openclaw-fs-safe-175](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-fs-safe-175.md) | [33314980854](https://github.com/openclaw/clawsweeper/actions/runs/33314980854) |
| issue-openclaw-openclaw-133170 | needs human | Provide a writable environment with the required ../codex checkout (or permit its clone) and dependencies so the focused regression can be made to... | [issue-openclaw-openclaw-133170](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-133170.md) | [33304475010](https://github.com/openclaw/clawsweeper/actions/runs/33304475010) |
| automerge-openclaw-fs-safe-170 | merge_canonical blocked | job does not allow merge | [automerge-openclaw-fs-safe-170](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-fs-safe-170.md) | [33301082409](https://github.com/openclaw/clawsweeper/actions/runs/33301082409) |
| issue-openclaw-openclaw-131561 | needs human | Provide a readable sibling ../codex checkout (or an environment authorized to clone it) so the required Codex runtime/protocol inspection can be co... | [issue-openclaw-openclaw-131561](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-131561.md) | [33293578229](https://github.com/openclaw/clawsweeper/actions/runs/33293578229) |
| issue-openclaw-openclaw-133051 | needs human | Provide a writable checkout with dependencies and sibling ../codex, then apply and validate the fix artifact. | [issue-openclaw-openclaw-133051](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-133051.md) | [33292961554](https://github.com/openclaw/clawsweeper/actions/runs/33292961554) |
| automerge-openclaw-fs-safe-165 | merge_canonical blocked | job does not allow merge | [automerge-openclaw-fs-safe-165](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-fs-safe-165.md) | [33285855850](https://github.com/openclaw/clawsweeper/actions/runs/33285855850) |
| issue-openclaw-openclaw-105517 | needs human | Provide a writable, dependency-ready repair runner with ../codex available; then implement, run the focused regression and Telegram Test Server pro... | [issue-openclaw-openclaw-105517](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-105517.md) | [33282328623](https://github.com/openclaw/clawsweeper/actions/runs/33282328623) |
| issue-openclaw-openclaw-132864 | needs human | Rerun in a writable checkout with dependencies available and sibling ../codex source present, so the mandatory direct Codex-source check, regressio... | [issue-openclaw-openclaw-132864](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-132864.md) | [33280096564](https://github.com/openclaw/clawsweeper/actions/runs/33280096564) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
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
| [issue-openclaw-openclaw-129827](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-129827.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/b... | [32927455050](https://github.com/openclaw/clawsweeper/actions/runs/32927455050) |
| [automerge-openclaw-openclaw-118303](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118303.md) | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests [check:changed] src/agents/tools/i... | [32886748544](https://github.com/openclaw/clawsweeper/actions/runs/32886748544) |
| [automerge-openclaw-openclaw-118303](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-118303.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=coreTests [check:changed] src/agents/tools/i... | [32886748544](https://github.com/openclaw/clawsweeper/actions/runs/32886748544) |
| [automerge-openclaw-openclaw-119160](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119160.md) | failed |  |  | Codex /review did not pass after final base synchronization: No current-diff security issue: HEAD equals pinned base and has no changes. The Bedroc... | [32858343606](https://github.com/openclaw/clawsweeper/actions/runs/32858343606) |
| [automerge-openclaw-openclaw-119160](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-119160.md) | blocked |  |  | Codex /review did not pass after final base synchronization: No current-diff security issue: HEAD equals pinned base and has no changes. The Bedroc... | [32858343606](https://github.com/openclaw/clawsweeper/actions/runs/32858343606) |
| [issue-openclaw-openclaw-129352](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-129352.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] packages/ai/... | [32855011547](https://github.com/openclaw/clawsweeper/actions/runs/32855011547) |
| [issue-openclaw-openclaw-128826](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-128826.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/flows/bu... | [32835796158](https://github.com/openclaw/clawsweeper/actions/runs/32835796158) |
| [issue-openclaw-openclaw-129116](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-openclaw-129116.md) | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/agents/s... | [32822909844](https://github.com/openclaw/clawsweeper/actions/runs/32822909844) |

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

