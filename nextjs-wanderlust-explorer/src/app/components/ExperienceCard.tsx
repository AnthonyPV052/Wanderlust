"use client";

import type { ExperienceCardProps } from "@/app/types";

export default function ExperienceCard({
  experience,
  isFavorite,
  onToggleFavorite,
}: ExperienceCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200 transition hover:shadow-lg dark:bg-zinc-900 dark:ring-zinc-800">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <img
          src={experience.imageUrl}
          alt={experience.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {/* Category badge */}
        <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-0.5 text-xs font-semibold text-zinc-700 backdrop-blur dark:bg-zinc-900/80 dark:text-zinc-200">
          {experience.category}
        </span>

        {/* Favorite button */}
        <button
          type="button"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          onClick={() => onToggleFavorite(experience.id)}
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-lg backdrop-blur transition hover:scale-110 dark:bg-zinc-900/80"
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-base font-semibold leading-snug text-zinc-900 dark:text-zinc-100">
          {experience.title}
        </h3>

        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {experience.destination}
        </p>

        <p className="line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {experience.description}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
            ${experience.price}
          </span>

          <span className="flex items-center gap-1 text-sm font-medium text-amber-600 dark:text-amber-400">
            ★ {experience.rating.toFixed(1)}
          </span>
        </div>
      </div>
    </article>
  );
}
