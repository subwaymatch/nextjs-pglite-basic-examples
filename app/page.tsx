import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 gap-2">
      <Link href="/basic/">Basic (No Worker)</Link>
      <Link href="/worker-with-pglite/">
        Worker with <code>@electric-sql/pglite</code>
      </Link>
      <Link href="/worker-using-pglite-worker/">
        Worker with <code>@electric-sql/pglite/worker</code>
      </Link>
    </main>
  );
}
