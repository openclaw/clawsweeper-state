---
repo: "openclaw/openclaw"
cluster_id: "issue-openclaw-openclaw-158936"
mode: "autonomous"
run_id: "36248561197"
run_url: "https://github.com/openclaw/clawsweeper/actions/runs/36248561197"
head_sha: "726760a4e31bd88b10982908e042f59f01c7a18b"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-09-26T14:53:06.990Z"
canonical: "https://github.com/openclaw/openclaw/issues/158936"
canonical_issue: "https://github.com/openclaw/openclaw/issues/158936"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-openclaw-openclaw-158936

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clawsweeper/actions/runs/36248561197](https://github.com/openclaw/clawsweeper/actions/runs/36248561197)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/issues/158936

## Summary

Current main has a source-backed path from a reused LaunchAgent PID to repair after the six-second readiness window. The worker could not run a failing native regression, edit the read-only checkout, or validate on macOS. No branch or PR was created.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs --timed [check:changed] lanes=apps [check:changed] apps/macos/Sources/OpenClaw/GatewayProcessManager.swift: app surface [check:changed] apps/macos/Tests/OpenClawIPCTests/GatewayProcessManagerTests.swift: app surface [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] changelog attributions $ node --import ./scripts/tsx.mjs scripts/check-changelog-attributions.mts [check:changed] doctor deprecation registry $ node --import ./scripts/tsx.mjs scripts/check-doctor-deprecation-registry.ts [check:changed] guarded extension wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-extension-wildcard-reexports.mts [check:changed] plugin-sdk wildcard re-exports $ node --import ./scripts/tsx.mjs scripts/check-plugin-sdk-wildcard-reexports.mts [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] coercion helper declaration guard $ node --import ./scripts/tsx.mjs scripts/check-coercion-helper-declarations.mts [check:changed] dependency pin guard $ node --import ./scripts/tsx.mjs scripts/check-dependency-pins.mts [check:changed] format changed files $ oxfmt --check --no-error-on-unmatched-pattern -- apps/macos/Sources/OpenClaw/GatewayProcessManager.swift apps/macos/Tests/OpenClawIPCTests/GatewayProcessManagerTests.swift No files found matching the given patterns. [check:changed] package patch guard $ node --import ./scripts/tsx.mjs scripts/check-package-patches.mts [check:changed] lint apps (swiftlint unavailable on this host) [check:changed] Swift app lint skipped: swiftlint is unavailable on this non-macOS host; macOS CI owns SwiftLint coverage. [check:changed] macOS app CI tests $ pnpm test:macos:ci:1 && pnpm test:macos:ci:2 && pnpm test:macos:ci:3 $ node --import ./scripts/tsx.mjs scripts/test-projects.mts test/scripts/mac-elevation-host.test.ts [test] starting test/vitest/vitest.tooling.config.ts [90mstderr[2m | unknown test [22m[39m[sqlite-test-lifecycle] test/scripts/mac-elevation-host.test.ts: retiring openclaw.sqliteCoordinatorPool [90mstderr[2m | unknown test [22m[39m[sqlite-test-lifecycle] test/scripts/mac-elevation-host.test.ts: retiring openclaw.sqliteCoordinatorPool [test] passed 1 Vitest shard in 2.03s $ node --import ./scripts/tsx.mjs scripts/test-projects.mts test/scripts/vitest-process-group.test.ts test/scripts/package-mac-app.test.ts test/scripts/stage-cloudflared-macos.test.ts test/scripts/restart-mac.test.ts test/scripts/mac-node-worker.test.ts test/scripts/package-mac-dist.test.ts test/scripts/codesign-mac-app.test.ts test/scripts/notarize-mac-artifact.test.ts test/scripts/mac-elevation-artifact.test.ts [test] starting test/vitest/vitest.tooling.config.ts [90mstderr[2m | unknown test [22m[39m[sqlite-test-lifecycle] test/scripts/package-mac-app.test.ts: retiring openclaw.sqliteCoordinatorPool [90mstderr[2m | unknown test [22m[39m[sqlite-test-lifecycle] test/scripts/package-mac-app.test.ts: retiring openclaw.sqliteCoordinatorPool [90mstderr[2m | unknown test [22m[39m[sqlite-test-lifecycle] test/scripts/notarize-mac-artifact.test.ts: retiring openclaw.sqliteCoordinatorPool [90mstderr[2m | unknown test [22m[39m[sqlite-test-lifecycle] test/scripts/notarize-mac-artifact.test.ts: retiring openclaw.sqliteCoordinatorPool [90mstderr[2m | unknown test [22m[39m[sqlite-test-lifecycle] test/scripts/restart-mac.test.ts: retiring openclaw.sqliteCoordinatorPool [90mstderr[2m | unknown test [22m[39m[sqlite-test-lifecycle] test/scripts/restart-mac.test.ts: retiring openclaw.sqliteCoordinatorPool [90mstderr[2m | unknown test [22m[39m[sqlite-test-lifecycle] test/scripts/codesign-mac-app.test.ts: retiring openclaw.sqliteCoordinatorPool [90mstderr[2m | unknown test [22m[39m[sqlite-test-lifecycle] test/scripts/codesign-mac-app.test.ts: retiring openclaw.sqliteCoordinatorPool [90mstderr[2m | unknown test [22m[39m[sqlite-test-lifecycle] test/scripts/mac-node-worker.test.ts: retiring openclaw.sqliteCoordinatorPool [90mstderr[2m | unknown test [22m[39m[sqlite-test-lifecycle] test/scripts/mac-node-worker.test.ts: retiring openclaw.sqliteCoordinatorPool [90mstderr[2m | unknown test [22m[39m[sqlite-test-lifecycle] test/scripts/vitest-process-group.test.ts: retiring openclaw.sqliteCoordinatorPool [90mstderr[2m | unknown test [22m[39m[sqlite-test-lifecycle] test/scripts/vitest-process-group.test.ts: retiring openclaw.sqliteCoordinatorPool [90mstderr[2m | unknown test [22m[39m[sqlite-test-lifecycle] test/scripts/mac-elevation-artifact.test.ts: retiring openclaw.sqliteCoordinatorPool [90mstderr[2m | unknown test [22m[39m[sqlite-test-lifecycle] test/scripts/mac-elevation-artifact.test.ts: retiring openclaw.sqliteCoordinatorPool [90mstderr[2m | unknown test [22m[39m[sqlite-test-lifecycle] test/scripts/stage-cloudflared-macos.test.ts: retiring openclaw.sqliteCoordinatorPool [90mstderr[2m | unknown test [22m[39m[sqlite-test-lifecycle] test/scripts/stage-cloudflared-macos.test.ts: retiring openclaw.sqliteCoordinatorPool [90mstderr[2m | unknown test [22m[39m[sqlite-test-lifecycle] test/scripts/package-mac-dist.test.ts: retiring openclaw.sqliteCoordinatorPool [90mstderr[2m | unknown test [22m[39m[sqlite-test-lifecycle] test/scripts/package-mac-dist.test.ts: retiring openclaw.sqliteCoordinatorPool [31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m [41m[1m FAIL [22m[49m [30m[46m tooling [49m[39m test/scripts/package-mac-app.test.ts[2m > [22mpackage-mac-app plist stamping[2m > [22mpasses an explicit signing identity and honors unset TMPDIR during worker verification [31m[1mAssertionError[22m: node:fs:3134 return binding.mkdtemp(prefix, options.encoding); ^ Error: EROFS: read-only file system, mkdtemp '/tmp/worker-proof-XXXXXX' at Object.mkdtempSync (node:fs:3134:18) at file:///tmp/clawsweeper-target-user-zvB8TT/tmp/oc-vt-WrLbId/openclaw-package-signing-identity-1XU3M5/ ... 2mms[22m[39m [32m✓[39m [30m[46m tooling [49m[39m test/scripts/package-mac-dist.test.ts[2m > [22mmacOS packaging checkpoint boundary[2m > [22mfails the frame audit before creating a checkpoint[32m 89[2mms[22m[39m [32m✓[39m [30m[46m tooling [49m[39m test/scripts/package-mac-dist.test.ts[2m > [22mpackage-mac-dist plist validation[2m > [22mfails closed for required Info.plist reads[32m 0[2mms[22m[39m [32m✓[39m [30m[46m tooling [49m[39m test/scripts/package-mac-dist.test.ts[2m > [22mpackage-mac-dist plist validation[2m > [22mrequires the release bundle id to match the configured bundle id[32m 0[2mms[22m[39m [32m✓[39m [30m[46m tooling [49m[39m test/scripts/package-mac-dist.test.ts[2m > [22mpackage-mac-dist plist validation[2m > [22mmarks the distributed Control UI as an official release artifact[32m 0[2mms[22m[39m [32m✓[39m [30m[46m tooling [49m[39m test/scripts/package-mac-dist.test.ts[2m > [22mpackage-mac-dist plist validation[2m > [22mdoes not mask canonical Sparkle build failures for release packaging[32m 3[2mms[22m[39m [32m✓[39m [30m[46m tooling [49m[39m test/scripts/package-mac-dist.test.ts[2m > [22mpackage-mac-dist plist validation[2m > [22mfails on old Swift before reading package metadata[32m 11[2mms[22m[39m [32m✓[39m [30m[46m tooling [49m[39m test/scripts/package-mac-dist.test.ts[2m > [22mpackage-mac-dist plist validation[2m > [22mprefers repo Corepack pnpm over a global pnpm shim[32m 8[2mms[22m[39m [32m✓[39m [30m[46m tooling [49m[39m test/scripts/package-mac-dist.test.ts[2m > [22mpackage-mac-dist plist validation[2m > [22mkeeps dependency bootstrap output out of captured Sparkle build values[32m 10[2mms[22m[39m [32m✓[39m [30m[46m tooling [49m[39m test/scripts/package-mac-dist.test.ts[2m > [22mpackage-mac-dist plist validation[2m > [22mstops when dependency bootstrap fails during Sparkle build retry[32m 8[2mms[22m[39m [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/package-mac-dist.test.ts[2m > [22mpackage-mac-dist plist validation[2m > [22mre-audits the retained app before resuming without build products [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/package-mac-dist.test.ts[2m > [22mpackage-mac-dist plist validation[2m > [22mre-audits the retained dmg before resuming without build products [32m✓[39m [30m[46m tooling [49m[39m test/scripts/package-mac-dist.test.ts[2m > [22mpackage-mac-dist plist validation[2m > [22mfails closed when required dSYM outputs are missing[32m 0[2mms[22m[39m [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/package-mac-dist.test.ts[2m > [22mpackage-mac-dist plist validation[2m > [22mprints required plist keys and fails when a key is missing [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/package-mac-dist.test.ts[2m > [22mpackage-mac-dist symbol archives[2m > [22marchives matching universal symbols from the native build output [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/package-mac-dist.test.ts[2m > [22mpackage-mac-dist symbol archives[2m > [22marchives matching universal symbols from the xcode build output [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/package-mac-dist.test.ts[2m > [22mpackage-mac-dist symbol archives[2m > [22mrejects undersized frame before archiving [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/package-mac-dist.test.ts[2m > [22mpackage-mac-dist symbol archives[2m > [22mrejects missing ARM64 slice before archiving [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/package-mac-dist.test.ts[2m > [22mpackage-mac-dist symbol archives[2m > [22mpackages an x86_64-only build without the arm64 audit [2m[90m↓[39m[22m [30m[46m tooling [49m[39m test/scripts/package-mac-dist.test.ts[2m > [22mpackage-mac-dist symbol archives[2m > [22mrefuses a universal archive when one architecture has no symbols [32m✓[39m [30m[46m tooling [49m[39m test/scripts/package-mac-dist.test.ts [2m([22m[2m29 tests[22m[2m | [22m[33m9 skipped[39m[2m)[22m[33m 4982[2mms[22m[39m [32m✓[39m macOS packaging checkpoint boundary [2m(11)[22m [33m[2m✓[22m[39m retains a signed DMG before notarization and resumes without build or signing credentials[33m 750[2mms[22m[39m [33m[2m✓[22m[39m allows ad-hoc smoke resume with identity "-" on a signer-equipped host[33m 719[2mms[22m[39m [33m[2m✓[22m[39m allows ad-hoc smoke resume with identity "" on a signer-equipped host[33m 712[2mms[22m[39m [33m[2m✓[22m[39m uses the automatically selected app identity for the checkpoint DMG[33m 348[2mms[22m[39m [33m[2m✓[22m[39m refuses release recovery before notarization[33m 515[2mms[22m[39m [33m[2m✓[22m[39m refuses release with smoke flag recovery before notarization[33m 529[2mms[22m[39m [33m[2m✓[22m[39m refuses tampered app recovery before notarization[33m 336[2mms[22m[39m [33m[2m✓[22m[39m refuses missing DMG recovery before notarization[33m 348[2mms[22m[39m [33m[2m✓[22m[39m refuses audit recovery before notarization[33m 405[2mms[22m[39m [2m Test Files [22m [1m[31m1 failed[39m[22m[2m | [22m[1m[32m6 passed[39m[22m[2m | [22m[33m2 skipped[39m[90m (9)[39m [2m Tests [22m [1m[31m1 failed[39m[22m[2m | [22m[1m[32m233 passed[39m[22m[2m | [22m[33m372 skipped[39m[90m (606)[39m [2m Start at [22m 14:50:29 [2m Duration [22m 5.72s[2m (tests 89%, worker 7%, transform 3%, setup 1%, import 1%)[22m [2m Test Files [22m [1m[31m1 failed[39m[22m[2m | [22m[1m[32m6 passed[39m[22m[2m | [22m[33m2 skipped[39m[90m (9)[39m [2m Tests [22m [1m[31m1 failed[39m[22m[2m | [22m[1m[32m233 passed[39m[22m[2m | [22m[33m372 skipped[39m[90m (606)[39m [2m Start at [22m 14:50:29 [2m Duration [22m 5.73s[2m (tests 89%, worker 7%, transform 3%, setup 1%, import 1%)[22m |
| issue_implementation_status_comment | updated | #158936 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #158936 | fix_needed | planned | canonical | A narrow macOS lifecycle repair remains warranted, subject to a failing pre-fix regression and isolated macOS validation. |
| #115256 | keep_related | planned | related | The ownership decision has unique scope and remains open. |
| #119958 | keep_related | planned | related | The CLI restart waiter is outside this macOS app watchdog fix. |
| cluster:issue-openclaw-openclaw-158936 | build_fix_artifact | blocked |  | Implementation requires a writable checkout and an isolated macOS runner to establish the failing regression and validate the repair. |

## Needs Human

- none
