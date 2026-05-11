"use client";

import { useFavorites } from "@/context/FavoritesContext";
import type { UserProfile } from "@/types";

const user: UserProfile = {
  name: "Alex Rivera",
  avatarUrl: "https://picsum.photos/seed/wanderlust-user/200/200",
  bio: "Passionate traveler, food lover, and outdoor adventurer. Always looking for the next unforgettable experience around the globe.",
};

export default function ProfilePage() {
  const { favorites } = useFavorites();

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      {/* Avatar + Name */}
      <div className="flex flex-col items-center text-center">
        <img
          src={user.avatarUrl}
          alt={user.name}
          className="h-28 w-28 rounded-full object-cover ring-4 ring-white shadow-lg dark:ring-zinc-900"
        />
        <h1 className="mt-5 text-2xl font-extrabold text-zinc-900 dark:text-zinc-100">
          {user.name}
        </h1>
        <p className="mt-2 max-w-md text-base text-zinc-500 dark:text-zinc-400">
          {user.bio}
        </p>
      </div>

      {/* Stats */}
      <div className="mt-10 grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center gap-1 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
          <span className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
            {favorites.length}
          </span>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            Saved favorites
          </span>
        </div>
        <div className="flex flex-col items-center gap-1 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
          <span className="text-3xl font-extrabold text-amber-600 dark:text-amber-400">
            0
          </span>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            Trips completed
          </span>
        </div>
      </div>

      {/* Info card */}
      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
          Account details
        </h2>
        <dl className="mt-4 space-y-4 text-sm">
          <div className="flex justify-between">
            <dt className="text-zinc-500 dark:text-zinc-400">Name</dt>
            <dd className="font-medium text-zinc-900 dark:text-zinc-100">{user.name}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-zinc-500 dark:text-zinc-400">Email</dt>
            <dd className="font-medium text-zinc-900 dark:text-zinc-100">alex.rivera@wanderlust.com</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-zinc-500 dark:text-zinc-400">Member since</dt>
            <dd className="font-medium text-zinc-900 dark:text-zinc-100">January 2025</dd>
          </div>
        </dl>
      </div>
    </main>
  );
}
