"use client";

import { useMemo, useCallback, useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { experiences } from "@/data/experiences";
import type { Experience } from "@/types";

export function useFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Read filters from URL query params
  const searchParam = searchParams.get("search") ?? "";
  const categoryParam = (searchParams.get("category") ?? "all") as
    | Experience["category"]
    | "all";
  const destinationParam = searchParams.get("destination") ?? "all";

  // Local state that syncs with URL
  const [search, setSearch] = useState(searchParam);
  const [category, setCategory] = useState(categoryParam);
  const [destination, setDestination] = useState(destinationParam);

  // Sync local state when URL params change externally (e.g. browser back/forward)
  useEffect(() => {
    setSearch(searchParam);
    setCategory(categoryParam);
    setDestination(destinationParam);
  }, [searchParam, categoryParam, destinationParam]);

  // Push local state changes to the URL
  const updateURL = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "" || value === "all") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      const qs = params.toString();
      router.replace(`${pathname}${qs ? `?${qs}` : ""}`, { scroll: false });
    },
    [searchParams, router, pathname],
  );

  const onSearchChange = useCallback(
    (value: string) => {
      setSearch(value);
      updateURL("search", value);
    },
    [updateURL],
  );

  const onCategoryChange = useCallback(
    (value: Experience["category"] | "all") => {
      setCategory(value);
      updateURL("category", value);
    },
    [updateURL],
  );

  const onDestinationChange = useCallback(
    (value: string) => {
      setDestination(value);
      updateURL("destination", value);
    },
    [updateURL],
  );

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

  return {
    search,
    category,
    destination,
    destinations,
    filtered,
    onSearchChange,
    onCategoryChange,
    onDestinationChange,
  };
}
