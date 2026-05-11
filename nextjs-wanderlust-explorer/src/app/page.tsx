"use client";

import { useMemo, useState, useCallback } from "react";
import { experiences } from "@/app/data/experiences";
import type { Experience, FavoriteIds } from "@/app/types";
import ExperienceFilters from "@/app/components/ExperienceFilters";
import ExperienceList from "@/app/components/ExperienceList";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Experience["category"] | "all">("all");
  const [destination, setDestination] = useState<string>("all");
  const [favorites, setFavorites] = useState<FavoriteIds>([]);

  const destinations = useMemo(
    () => Array.from(new Set(experiences.map((e) => e.destination))).sort(),
    [],
  );

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return experiences.filter((exp) => {
      if (category !== "all" && exp.category !== category) return false;
      if (destination !== "all" && exp.destination !== destination) return false;
      if (
        q &&
        !exp.title.toLowerCase().includes(q) &&
        !exp.description.toLowerCase().includes(q) &&
        !exp.destination.toLowerCase().includes(q)
      )
        return false;
      return true;
    });
  }, [search, category, destination]);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            🌍 Wanderlust Explorer
          </h1>
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300">
            {favorites.length} ❤️
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
            Discover unique experiences
          </h2>
          <p className="mt-2 max-w-2xl text-base text-zinc-500 dark:text-zinc-400">
            Browse {experiences.length} hand‑picked adventures, cultural tours,
            culinary journeys and more — all around the world.
          </p>
        </section>

        {/* Filters */}
        <section className="mb-8">
          <ExperienceFilters
            search={search}
            category={category}
            destination={destination}
            destinations={destinations}
            onSearchChange={setSearch}
            onCategoryChange={setCategory}
            onDestinationChange={setDestination}
          />
        </section>

        {/* Results count */}
        <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
          Showing <strong className="text-zinc-700 dark:text-zinc-200">{filtered.length}</strong>{" "}
          experience{filtered.length !== 1 && "s"}
        </p>

        {/* Grid */}
        <ExperienceList
          experiences={filtered}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-6 text-center text-xs text-zinc-400 dark:border-zinc-800 dark:text-zinc-600">
        © 2026 Wanderlust Explorer — built with Next.js &amp; Tailwind CSS
      </footer>
    </div>
  );
}
