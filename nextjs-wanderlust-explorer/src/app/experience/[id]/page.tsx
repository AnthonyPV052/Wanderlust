import Link from "next/link";
import { notFound } from "next/navigation";
import { experiences, categories } from "@/data/experiences";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return experiences.map((exp) => ({ id: exp.id }));
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { id } = await params;
  const experience = experiences.find((e) => e.id === id);

  if (!experience) return notFound();

  const categoryMeta = categories.find((c) => c.id === experience.category);
  const [city, country] = experience.destination.split(", ");

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      {/* Back link */}
      <Link
        href="/experiences"
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        Back to experiences
      </Link>

      {/* Hero image */}
      <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80 md:h-[420px]">
        <img
          src={experience.imageUrl}
          alt={experience.title}
          className="h-full w-full object-cover"
        />
        {/* Category badge */}
        <span className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-zinc-700 shadow-sm backdrop-blur dark:bg-zinc-900/80 dark:text-zinc-200">
          {categoryMeta?.emoji} {experience.category}
        </span>
      </div>

      {/* Content */}
      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {/* Left: info */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
            {experience.title}
          </h1>

          {/* Location */}
          <p className="mt-3 flex items-center gap-2 text-base text-zinc-500 dark:text-zinc-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            {city}, {country}
          </p>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-2">
            <span className="flex items-center gap-1 text-lg font-semibold text-amber-600 dark:text-amber-400">
              ★ {experience.rating.toFixed(1)}
            </span>
            <span className="text-sm text-zinc-400 dark:text-zinc-500">/ 5.0</span>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              About this experience
            </h2>
            <p className="mt-2 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              {experience.description}
            </p>
          </div>

          {/* Category description */}
          {categoryMeta && (
            <div className="mt-6 rounded-xl bg-indigo-50 p-4 dark:bg-indigo-950/30">
              <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                {categoryMeta.emoji} {categoryMeta.label} — {categoryMeta.description}
              </p>
            </div>
          )}
        </div>

        {/* Right: booking card */}
        <aside className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800 md:self-start">
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Price per person</p>
            <p className="mt-1 text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">
              ${experience.price}
            </p>
          </div>

          <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
            <li className="flex items-center gap-2">
              <span className="text-base">📍</span> {experience.destination}
            </li>
            <li className="flex items-center gap-2">
              <span className="text-base">{categoryMeta?.emoji ?? "🏷️"}</span> {experience.category}
            </li>
            <li className="flex items-center gap-2">
              <span className="text-base">⭐</span> {experience.rating.toFixed(1)} rating
            </li>
          </ul>

          <button
            type="button"
            className="w-full rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-[0.98] dark:focus:ring-offset-zinc-900"
          >
            Book now
          </button>

          <p className="text-center text-xs text-zinc-400 dark:text-zinc-500">
            Free cancellation up to 24 h before
          </p>
        </aside>
      </div>
    </main>
  );
}
