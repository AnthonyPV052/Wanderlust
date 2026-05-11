"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavorites } from "@/context/FavoritesContext";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/favorites", label: "Favorites" },
  { href: "/profile", label: "Profile" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { favorites } = useFavorites();

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          🌍 Wanderlust
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`relative rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                }`}
              >
                {label}
                {label === "Favorites" && favorites.length > 0 && (
                  <span className="ml-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-indigo-600 px-1 text-[10px] font-bold text-white">
                    {favorites.length}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
