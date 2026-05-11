import Link from "next/link";
import { categories } from "@/data/experiences";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="flex flex-col items-center text-center">
        <span className="text-6xl">🌍</span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
          Wanderlust Explorer
        </h1>
        <p className="mt-4 max-w-xl text-lg text-zinc-500 dark:text-zinc-400">
          Discover hand‑picked adventures, cultural tours, culinary journeys and
          more — all around the world.
        </p>
        <Link
          href="/experiences"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-[0.98]"
        >
          Explore experiences
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </Link>
      </section>

      {/* Categories preview */}
      <section className="mt-20">
        <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Browse by category
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/experiences?category=${cat.id}`}
              className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 transition hover:shadow-md dark:bg-zinc-900 dark:ring-zinc-800"
            >
              <span className="text-4xl">{cat.emoji}</span>
              <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                {cat.label}
              </span>
              <span className="text-center text-xs text-zinc-400 dark:text-zinc-500">
                {cat.description}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
