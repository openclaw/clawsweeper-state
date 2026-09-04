---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-137085"
mode: "autonomous"
run_id: "33761810706"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/33761810706"
head_sha: "674841bcdc0a826ff4555f945cc81f122db0d6c2"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-09-04T01:59:04.206Z"
canonical: "https://github.com/openclaw/openclaw/issues/137085"
canonical_issue: "https://github.com/openclaw/openclaw/issues/137085"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-137085

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/33761810706](https://github.com/openclaw/clawsweeper/actions/runs/33761810706)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/137085

## Summary

#137085 remains the canonical open bug. Current main has the reported lifecycle defect: a valid SQLite row returns before a lone matching .native-importing claim is recovered. A narrow Swift-only repair is planned, but this read-only Linux checkout cannot create the branch or run the required macOS-native proof; ../codex is also absent and network resolution prevents the required direct Codex-source inspection.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=apps [check:changed] apps/shared/OpenClawKit/Sources/OpenClawKit/DeviceIdentitySQLiteStore.swift: app surface [check:changed] apps/shared/OpenClawKit/Tests/OpenClawKitTests/DeviceIdentityStoreTests.swift: app surface [check:changed] mobile protocol event coverage [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] changelog attributions $ node --import ./scripts/tsx.mjs scripts/check-changelog-attributions.mts [check:changed] doctor deprecation registry $ node --import ./scripts/tsx.mjs scripts/check-doctor-deprecation-registry.ts [check:changed] guarded extension wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-extension-wildcard-reexports.mts [check:changed] plugin-sdk wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-plugin-sdk-wildcard-reexports.mts [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] coercion helper declaration guard $ node --import ./scripts/tsx.mjs scripts/check-coercion-helper-declarations.mts [check:changed] dependency pin guard $ node --import ./scripts/tsx.mjs scripts/check-dependency-pins.mts [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- apps/shared/OpenClawKit/Sources/OpenClawKit/DeviceIdentitySQLiteStore.swift apps/shared/OpenClawKit/Tests/OpenClawKitTests/DeviceIdentityStoreTests.swift No files found matching the given patterns. [check:changed] package patch guard $ node --import ./scripts/tsx.mjs scripts/check-package-patches.mts [check:changed] lint apps (swiftlint unavailable on this host) [check:changed] Swift app lint skipped: swiftlint is unavailable on this non-macOS host; macOS CI owns SwiftLint coverage. [check:changed] macOS app CI tests $ pnpm test:macos:ci:1 && pnpm test:macos:ci:2 && pnpm test:macos:ci:3 $ node --import ./scripts/tsx.mjs scripts/test-projects.mts test/scripts/mac-elevation-host.test.ts [test] starting test/vitest/vitest.tooling.config.ts [test] passed 1 Vitest shard in 1.58s $ node --import ./scripts/tsx.mjs scripts/test-projects.mts test/scripts/vitest-process-group.test.ts test/scripts/package-mac-app.test.ts test/scripts/restart-mac.test.ts test/scripts/mac-node-worker.test.ts test/scripts/package-mac-dist.test.ts test/scripts/codesign-mac-app.test.ts test/scripts/notarize-mac-artifact.test.ts test/scripts/mac-elevation-artifact.test.ts [test] starting test/vitest/vitest.tooling.config.ts [31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m [41m[1m FAIL [22m[49m [30m[46m tooling [49m[39m test/scripts/package-mac-app.test.ts[2m > [22mpackage-mac-app plist stamping[2m > [22mpasses an explicit signing identity and honors unset TMPDIR during worker verification [31m[1mAssertionError[22m: node:fs:3050 return binding.mkdtemp(prefix, options.encoding); ^ Error: EROFS: read-only file system, mkdtemp '/tmp/worker-proof-XXXXXX' at Object.mkdtempSync (node:fs:3050:18) at file:///tmp/clawsweeper-target-user-AI47yV/tmp/oc-vt-77XG34/openclaw-package-signing-identity-j3iPIN/scripts/verify-mac-node-worker.mjs:4:36 at ModuleJob.run (node:internal/modules/esm/module_job:439:25) at async node:internal/modules/esm/loader:643:26 at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5) { errno: -30, code: 'EROFS', syscall: 'mkdtemp', path: '/tmp/worker-proof-XXXXXX' } Node.js v24.18.1 : expected 1 to be +0 // Object.is equality[39m [32m- Expected[39m [31m+ Received[39m [32m- 0[39m [31m+ 1[39m [90m [2m❯[22m ../../clawsweeper-target-user-AI47yV/tmp/oc-vt-77XG34/openclaw-package-signing-identity-j3iPIN/scripts/verify-mac-node-worker.mjs:[2m4:36[22m[39m [36m [2m❯[22m test/scripts/package-mac-app.test.ts:[2m1802:44[22m[39m [90m1800|[39m )[33m;[39m [90m1801|[39m [90m1802|[39m [34mexpect[39m(result[33m.[39mstatus[33m,[39m result[33m.[39mstderr)[33m.[39m[34mtoBe[39m([34m0[39m)[33m;[39m [90m |[39m [31m^[39m [90m1803|[39m expect(result.stdout).toContain("Signing bundle with explicit SI… [90m1804|[39m [34mexpect[39m(result[33m.[39mstdout)[33m.[39m[34mtoContain[39m([32m`identity=[39m[36m${[39midentity[36m}[39m[32m`[39m)[33m;[39m [31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯[22m[39m [test] failed 1 Vitest shard in 5.45s [test] FAILED (exit 1) [ELIFECYCLE] Command failed with exit code 1. [ELIFECYCLE] Command failed with exit code 1. [check:changed] summary 403ms ok mobile protocol event coverage 145ms ok conflict markers 143ms ok changelog attributions 129ms ok doctor deprecation registry 146ms ok guarded extension wildcard re-exports 138ms ok plugin-sdk wildcard re-exports 199ms ok duplicate scan target coverage 10.14s ok coercion helper declaration guard 174ms ok dependency pin guard 132ms ok format changed files 361ms ok package patch guard 14ms ok lint apps (swiftlint unavailable on this host) 7.54s failed:1 macOS app CI tests [check:changed] FAILED (exit 1) [ELIFECYCLE] Command failed with exit code 1. Protocol event coverage OK: 58 gateway events; ios handles 22, allowlists 36; android handles 20, allowlists 38. [doctor-deprecation-registry] OK as of 2026-09-03 No guarded extension wildcard re-exports found. No plugin-sdk wildcard re-exports found in extension API barrels. [dup:check] target coverage ok Coercion helper declaration guard passed (111 allowlisted declarations). PASS direct dependency pin guard: checked 664 directly declared dependency specs across 181 tracked package manifests; 0 violations. Checking formatting... Finished in 15ms on 0 files using 4 threads. PASS package patch guard: no new pnpm patches; 6 approved patches allowlisted. [1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/tmp/clawsweeper-repair-target-D3hkUa/openclaw-openclaw[39m [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-host.test.ts[2m > [22mmac elevation host command contract ... scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mfully verifies a new destination-stage copy with healthy policy [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mfully verifies a new destination-stage copy with signature policy [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mfully verifies a new destination-stage copy with notarized policy [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mfully verifies a new destination-stage copy with stapler policy [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mfully verifies a new destination-stage copy with spctl policy [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mbinds receipt sourceCommit to the fully audited app [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mbinds receipt peekabooCommit to the fully audited app [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mbinds receipt version to the fully audited app [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mbinds receipt build to the fully audited app [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mbinds receipt authority to the fully audited app [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mbinds receipt teamIdentifier to the fully audited app [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mbinds receipt 'architectures' for 'main' to the fully audited app [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mbinds receipt 'architectures' for 'helper' to the fully audited app [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mbinds receipt 'entitlementsSha256' for 'main' to the fully audited app [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mbinds receipt 'entitlementsSha256' for 'helper' to the fully audited app [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mpropagates notarized failure through conditional receipt verification [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mpropagates stapler failure through conditional receipt verification [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mpropagates spctl failure through conditional receipt verification [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mclassifies recovery planning after healthy policy result [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mclassifies recovery planning after notarized policy result [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mclassifies recovery planning after stapler policy result [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mclassifies recovery planning after spctl policy result [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mrejects foreign elf worker assets even without executable bits [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mrejects foreign pe worker assets even without executable bits [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/mac-elevation-artifact.test.ts[2m > [22mportable elevation native artifact verification[2m > [22mrejects foreign coff worker assets even without executable bits [2m Test Files [22m [1m[31m1 failed[39m[22m[2m | [22m[1m[32m6 passed[39m[22m[2m | [22m[33m1 skipped[39m[90m (8)[39m [2m Tests [22m [1m[31m1 failed[39m[22m[2m | [22m[1m[32m200 passed[39m[22m[2m | [22m[33m365 skipped[39m[90m (566)[39m [2m Start at [22m 14:31:41 [2m Duration [22m 4.80s[2m (transform 281ms, setup 35ms, import 255ms, tests 4.28s, environment 0ms)[22m |
| issue_implementation_status_comment | updated | #137085 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #137085 | fix_needed | blocked | canonical | Implementation and required proof are blocked by the supplied read-only, non-macOS environment; hand the narrow artifact to a writable macOS-capable executor. |
| cluster:issue-openclaw-openclaw-137085 | build_fix_artifact | planned | canonical | A narrow non-security repair remains appropriate once executed in a writable macOS-capable checkout. |

## Needs Human

- none
