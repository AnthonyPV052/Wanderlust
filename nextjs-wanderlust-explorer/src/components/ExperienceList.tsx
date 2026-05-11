"use client";

import type { ExperienceListProps } from "@/types";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceList({
  experiences,
  favorites,
  onToggleFavorite,
}: ExperienceListProps) {
  if (experiences.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <span className="text-5xl">🔍</span>
        <p className="mt-4 text-lg font-medium text-zinc-600 dark:text-zinc-400">
          No experiences found
        </p>
        <p className="mt-1 text-sm text-zinc-400 dark:text-zinc-500">
          Try adjusting your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {experiences.map((exp) => (
        <ExperienceCard
          key={exp.id}
          experience={exp}
          isFavorite={favorites.includes(exp.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
