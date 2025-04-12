import { PGlite } from '@electric-sql/pglite';

export default async function BasicPage() {
  const db = new PGlite();
  const query = 'SELECT 1 + 2 AS result;';
  const queryResult = await db.exec(query);

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md">
        <h3>Query</h3>
        <code className="block mt-2">{query}</code>

        <h3>Result</h3>
        <code className="block mt-2">
          {JSON.stringify(queryResult, null, '\t')}
        </code>
      </div>
    </div>
  );
}
