"use client";

import { useMemo } from "react";
import Link from "next/link";
import { experiences } from "@/data/experiences";
import { useFavorites } from "@/context/FavoritesContext";
import ExperienceList from "@/components/ExperienceList";

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();

  const favoriteExperiences = useMemo(
    () => experiences.filter((e) => favorites.includes(e.id)),
    [favorites],
  );

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <section className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
          Your favorites
        </h1>
        <p className="mt-2 text-base text-zinc-500 dark:text-zinc-400">
          {favorites.length === 0
            ? "You haven't saved any experiences yet."
            : `You have ${favorites.length} saved experience${favorites.length !== 1 ? "s" : ""}.`}
        </p>
      </section>

      {favorites.length === 0 ? (
        <div className="flex flex-col items-center py-24 text-center">
          <span className="text-5xl">💛</span>
          <p className="mt-4 text-lg font-medium text-zinc-600 dark:text-zinc-400">
            No favorites yet
          </p>
          <p className="mt-1 text-sm text-zinc-400 dark:text-zinc-500">
            Browse experiences and tap the heart to save them here.
          </p>
          <Link
            href="/experiences"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            Explore experiences
          </Link>
        </div>
      ) : (
        <ExperienceList
          experiences={favoriteExperiences}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </main>
  );
}
