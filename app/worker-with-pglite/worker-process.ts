import { PGlite } from '@electric-sql/pglite';

const pg = new PGlite();

addEventListener('message', async (event: MessageEvent<string>) => {
  const query = event.data;
  const queryResult = await pg.exec(query);

  postMessage(queryResult);
});
