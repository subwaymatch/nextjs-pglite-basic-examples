'use client';
import { Results } from '@electric-sql/pglite';
import { PGliteWorker } from '@electric-sql/pglite/worker';
import { useEffect, useRef, useState } from 'react';

export default function WorkerExample2() {
  const pgliteWorker = useRef<PGliteWorker | null>(null);
  const sampleQuery = 'SELECT NOW();';
  const [queryResult, setQueryResult] = useState<
    Results<{
      [key: string]: any;
    }>[]
  >([]);

  useEffect(() => {
    pgliteWorker.current = new PGliteWorker(
      new Worker(new URL('./pglite.worker.ts', import.meta.url), {
        type: 'module',
      })
    );
  }, []);

  const sendQuery = async () => {
    const queryResult = await pgliteWorker.current?.exec(sampleQuery);

    setQueryResult(queryResult!);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">
        Worker with <code>@electric-sql/pglite/worker</code>
      </h1>
      <p className="mt-4">Query: {sampleQuery}</p>
      <button
        className="bg-black text-white py-2 px-4 rounded mt-4 hover:bg-neutral-800"
        onClick={sendQuery}
      >
        Send Query
      </button>

      {queryResult && (
        <div className="bg-neutral-50 p-4 mt-4">
          <h3 className="font-bold">Query Result</h3>
          <pre className="mt-4">{JSON.stringify(queryResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
