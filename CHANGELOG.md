# Changelog

## Unreleased

- Schedule full CodeQL scans every six hours while retaining same-repository PR scans, avoiding duplicate scans for generated dashboard pushes.
- Bound CI and dashboard jobs with timeouts, use shallow dashboard checkouts, and supply dashboard push credentials only in the publishing step. Thanks @SebTardif (#1).
