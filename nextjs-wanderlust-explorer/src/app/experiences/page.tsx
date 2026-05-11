"use client";

import { Suspense } from "react";
import { experiences } from "@/data/experiences";
import { useFavorites } from "@/context/FavoritesContext";
import { useFilters } from "@/hooks/useFilters";
import ExperienceFilters from "@/components/ExperienceFilters";
import ExperienceList from "@/components/ExperienceList";

function ExperiencesContent() {
  const { favorites, toggleFavorite } = useFavorites();
  const {
    search,
    category,
    destination,
    destinations,
    filtered,
    onSearchChange,
    onCategoryChange,
    onDestinationChange,
  } = useFilters();

  return (
    <>
      {/* Hero */}
      <section className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
          Discover unique experiences
        </h1>
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
          onSearchChange={onSearchChange}
          onCategoryChange={onCategoryChange}
          onDestinationChange={onDestinationChange}
        />
      </section>

      {/* Results count */}
      <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
        Showing{" "}
        <strong className="text-zinc-700 dark:text-zinc-200">
          {filtered.length}
        </strong>{" "}
        experience{filtered.length !== 1 && "s"}
      </p>

      {/* Grid */}
      <ExperienceList
        experiences={filtered}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />
    </>
  );
}

export default function ExperiencesPage() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <Suspense
        fallback={
          <div className="flex items-center justify-center py-24">
            <span className="text-zinc-400">Loading experiences…</span>
          </div>
        }
      >
        <ExperiencesContent />
      </Suspense>
    </main>
  );
}
