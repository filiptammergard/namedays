---
"namedays": major
---

Expand to 6 countries, flatten `Nameday` shape, and fix SE data bugs.

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
