# The Problem: TypeScript Linking

This repository demonstrates the issue of module resolution.

This repo uses NPM workspaces for the `source` dependency linking and `start` script for generating modules in both `consumer/node_modules` and `source/node_modules`.

That said, run `npm i && npm run start`, go to [consumer/index.ts](consumer/index.ts), hover types and you will see that TS already resolves types *incorrectly*.

And the most interesting part: try to comment first line and see how the uncommented type changes.

> PNPM workspaces note: Despite of that it uses different node_modules layout, the issue sill persists.
