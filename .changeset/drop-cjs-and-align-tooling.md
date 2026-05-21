---
"namedays": major
---

Drop CommonJS support and align project tooling with other `@tammergard/*`
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
