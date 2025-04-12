# Next.js + PGlite Example

This is a simple example of using [PGlite](https://github.com/electric-sql/pglite) with Next.js. [PGlite](https://github.com/electric-sql/pglite) is a lightweight PostgreSQL WASM build that can run in both the browser and the server environment.

Note that Turbopack does not support PGlite with workers. You will experience errors if you have the `--turbopack` flag enabled while running `next dev` or `next build`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```
