export interface Experience {
  id: string; // UUID o string único
  title: string;
  description: string;
  category: "Adventure" | "Culture" | "Food" | "Wellness" | "Nature";
  destination: string; // "Bangkok, Thailand"
  price: number; // en USD o EUR
  rating: number; // 0–5
  imageUrl: string;
}
export type FavoriteIds = string[];
export interface ExperienceQueryParams {
  search?: string;
  category?: Experience["category"];
  destination?: string;
}
export interface ExperienceCardProps {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}
export interface ExperienceListProps {
  experiences: Experience[];
  favorites: FavoriteIds;
  onToggleFavorite: (id: string) => void;
}
export interface ExperienceFiltersProps {
  search: string;
  category: Experience["category"] | "all";
  destination: string | "all";
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: Experience["category"] | "all") => void;
  onDestinationChange: (value: string | "all") => void;
}
export interface ExperienceDetailProps {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}
export interface UserProfile {
  name: string;
  avatarUrl: string;
  bio: string;
}

export interface ProfilePageProps {
  user: UserProfile;
  favoritesCount: number;
}
