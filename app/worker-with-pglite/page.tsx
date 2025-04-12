'use client';
import { Results } from '@electric-sql/pglite';
import { useEffect, useRef, useState } from 'react';

export default function WorkerExamplePage() {
  const workerRef = useRef<Worker | null>(null);
  const sampleQuery = 'SELECT NOW();';
  const [queryResult, setQueryResult] = useState<
    Results<{
      [key: string]: any;
    }>[]
  >([]);

  useEffect(() => {
    workerRef.current = new Worker(
      new URL('./worker-process.ts', import.meta.url)
    );
    workerRef.current.onmessage = (
      event: MessageEvent<
        Results<{
          [key: string]: any;
        }>[]
      >
    ) => {
      setQueryResult(event.data);
    };

    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  const sendQuery = async () => {
    workerRef.current?.postMessage(sampleQuery);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">
        Worker with <code>@electric-sql/pglite</code>
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
