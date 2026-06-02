# namedays

## 5.0.1

### Patch Changes

- 783eac2: Use `devEngines` instead of `engines` for the Node version requirement, so it applies to development only and no longer constrains consumers of the package.

## 5.0.0

### Major Changes

- 57b55c5: Drop CommonJS support and align project tooling with other `@tammergard/*`
  packages.

  **Breaking**
  - `namedays` is now published as an ESM-only package. The CommonJS entry
    (`require("namedays")`) is no longer available; consumers must use `import`.
  - Published output now uses the `.mjs` and `.d.mts` extensions instead of
    `.js`/`.d.ts`. The `exports` field is unchanged from the consumer
    perspective — `import { namedays } from "namedays"` continues to work.
  - `engines.node` is now `>=24`.

  **Internal**
  - `package.json` keys sorted, deps moved to caret ranges, workflows switched
    to npm trusted publishing.
  - Source imports no longer carry `/index` for directory targets.

## 4.0.0

### Major Changes

- 7120861: Expand to 6 countries, flatten `Nameday` shape, and fix SE data bugs.

  ### Data
  - Add Polish (PL, 3346 namedays), German (DE, 1458) and Czech (CZ, 367) namedays.
  - Complete Norwegian (NO) from 1 to 938 namedays.
  - Complete Danish (DK) from 3 to 352 namedays.
  - Fix typos and a misplaced entry in Swedish (SE) data, verified against the
    current Svenska Akademien name list.

  ### Breaking changes
  - `Nameday.date.{month, day}` is flattened to `Nameday.{month, day}`.
    Before:
    ```ts
    { id: "SE-5-2-1", countryCode: "SE", name: "Filip", date: { month: 5, day: 2 } }
    ```
    After:
    ```ts
    { id: "SE-5-2-1", countryCode: "SE", name: "Filip", month: 5, day: 2 }
    ```
  - `on()` now requires either `month` or `day` at compile time; passing `{}` is
    a type error instead of a runtime throw.
  - `CountryCode` expanded to `"CZ" | "DE" | "DK" | "NO" | "PL" | "SE"`.

  ### Other
  - `id` is now derived from `countryCode`/`month`/`day` at module load instead
    of being hand-written in the data files, removing a class of typo bugs.
  - `who()` and country-code filtering use `Map`-based O(1) lookups.
  - Add data integrity tests (unique ids, prefix matches data, valid dates).

## 3.1.0

### Minor Changes

- 7fa039f: Changes to Swedish namedays as of year 2022: https://www.isof.se/om-oss/pressrum/arkiv-pressmeddelanden/2020-02-26-nya-namn-i-almanackan"

## 3.0.0

### Major Changes

- fbcbe10: Make namedays.all a function.

## 2.3.0

### Minor Changes

- c4dc084: Support passing multiple names in when function.

## 2.2.2

### Patch Changes

- 760fb6d: Publish with provenance.
