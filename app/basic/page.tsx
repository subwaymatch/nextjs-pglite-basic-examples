import { PGlite } from "@electric-sql/pglite";

export default async function BasicPage() {
  const db = new PGlite();
  const sampleQuery = "SELECT 1 + 2 AS result;";
  const queryResult = await db.exec(sampleQuery);

  return (
    <div className="p-4 max-w-xl">
      <h1 className="text-xl font-bold">Basic Query without a Web Worker</h1>
      <div className="mt-4 flex flex-row gap-2 items-center">
        <span className="bg-lime-700 text-white text-sm py-1 px-2 rounded-sm">
          Query
        </span>
        <code>{sampleQuery}</code>
      </div>

      <div className="bg-neutral-50 p-4 mt-4">
        <h3 className="font-bold">Query Result</h3>
        <pre className="mt-4">{JSON.stringify(queryResult, null, 2)}</pre>
      </div>

      <div className="mt-12 border-t border-gray-300 py-4">
        <a
          href="https://github.com/subwaymatch/nextjs-pglite-basic-examples/tree/main/app/basic"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-black hover:text-cyan-800"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.43c.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0C17 4.75 18 5.07 18 5.07c.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.47 5.93.43.37.81 1.1.81 2.22v3.3c0 .32.22.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z"
              clipRule="evenodd"
            />
          </svg>
          <span>View Source Code</span>
        </a>
      </div>
    </div>
  );
}
