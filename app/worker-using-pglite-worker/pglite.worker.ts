// my-pglite-worker.js
import { PGlite } from '@electric-sql/pglite';
import { worker } from '@electric-sql/pglite/worker';

worker({
  async init() {
    const pg = new PGlite();
    return pg;
  },
});
