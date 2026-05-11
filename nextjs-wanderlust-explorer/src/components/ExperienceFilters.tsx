"use client";

import type { ExperienceFiltersProps, Experience } from "@/types";

const CATEGORIES: (Experience["category"] | "all")[] = [
  "all",
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

interface Props extends ExperienceFiltersProps {
  destinations: string[];
}

export default function ExperienceFilters({
  search,
  category,
  destination,
  destinations,
  onSearchChange,
  onCategoryChange,
  onDestinationChange,
}: Props) {
  return (
    <div className="flex flex-col gap-4">
      {/* Search */}
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-zinc-400">
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
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 5.1 5.1a7.5 7.5 0 0 0 11.55 11.55z"
            />
          </svg>
        </span>
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search experiences…"
          className="w-full rounded-xl border border-zinc-200 bg-white py-2.5 pl-10 pr-4 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-indigo-500"
        />
      </div>

      {/* Category pills + Destination select */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Category pills */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = category === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() =>
                  onCategoryChange(cat as Experience["category"] | "all")
                }
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                }`}
              >
                {cat === "all" ? "All" : cat}
              </button>
            );
          })}
        </div>

        {/* Destination select */}
        <select
          value={destination}
          onChange={(e) => onDestinationChange(e.target.value)}
          className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 sm:w-56 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:focus:border-indigo-500"
        >
          <option value="all">All destinations</option>
          {destinations.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
