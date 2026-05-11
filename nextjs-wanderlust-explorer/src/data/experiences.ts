import type { Experience } from "@/types";

// -----------------------------
// CATEGORIES 
// -----------------------------
export const categories = [
    {
        id: "Adventure" as Experience["category"],
        label: "Adventure",
        emoji: "🧗‍♂️",
        description: "Thrilling outdoor activities and adrenaline-filled experiences.",
    },
    {
        id: "Culture" as Experience["category"],
        label: "Culture",
        emoji: "🏛️",
        description: "Historical sites, traditions, and immersive cultural journeys.",
    },
    {
        id: "Food" as Experience["category"],
        label: "Food",
        emoji: "🍜",
        description: "Local flavors, markets, and culinary adventures.",
    },
    {
        id: "Wellness" as Experience["category"],
        label: "Wellness",
        emoji: "🧘‍♀️",
        description: "Relaxation, mindfulness, and rejuvenating escapes.",
    },
    {
        id: "Nature" as Experience["category"],
        label: "Nature",
        emoji: "🌿",
        description: "Scenic landscapes, wildlife, and peaceful natural retreats.",
    },
];

// -----------------------------
// DESTINATIONS 
// -----------------------------
export const destinations = [
    { city: "Bangkok", country: "Thailand", region: "Asia" },
    { city: "Kyoto", country: "Japan", region: "Asia" },
    { city: "Lisbon", country: "Portugal", region: "Europe" },
    { city: "Reykjavik", country: "Iceland", region: "Europe" },
    { city: "Cusco", country: "Peru", region: "South America" },
    { city: "Cape Town", country: "South Africa", region: "Africa" },
    { city: "Marrakech", country: "Morocco", region: "Africa" },
    { city: "Vancouver", country: "Canada", region: "North America" },
    { city: "Auckland", country: "New Zealand", region: "Oceania" },
    { city: "Seoul", country: "South Korea", region: "Asia" },
    { city: "Florence", country: "Italy", region: "Europe" },
    { city: "Bali", country: "Indonesia", region: "Asia" },
    { city: "Dubrovnik", country: "Croatia", region: "Europe" },
    { city: "Patagonia", country: "Chile", region: "South America" },
    { city: "Nairobi", country: "Kenya", region: "Africa" },
    { city: "Athens", country: "Greece", region: "Europe" },
    { city: "Hanoi", country: "Vietnam", region: "Asia" },
    { city: "Queenstown", country: "New Zealand", region: "Oceania" },
    { city: "Granada", country: "Spain", region: "Europe" },
    { city: "Salzburg", country: "Austria", region: "Europe" },
];

// -----------------------------
// TITLES 
// -----------------------------
export const categoryTitles: Record<Experience["category"], string[]> = {
    Adventure: [
        "Summit Trail",
        "River Quest",
        "Canyon Sprint",
        "Skyline Trek",
        "Hidden Peaks Expedition",
        "Wild Ridge Adventure",
    ],
    Culture: [
        "Heritage Walk",
        "Temple Stories",
        "City Echoes",
        "Old Town Routes",
        "Living Traditions Tour",
        "Historic Footsteps Journey",
    ],
    Food: [
        "Street Bites",
        "Market Feast",
        "Chef Journey",
        "Local Flavors",
        "Gourmet Discovery",
        "Authentic Tasting Route",
    ],
    Wellness: [
        "Mindful Escape",
        "Sunrise Retreat",
        "Balance Session",
        "Spa Horizon",
        "Zen Breathing Ritual",
        "Holistic Harmony Experience",
    ],
    Nature: [
        "Forest Drift",
        "Coastal Silence",
        "Wild Path",
        "Lake Sunrise",
        "Mountain Whisper Trail",
        "Nature Immersion Journey",
    ],
};

// -----------------------------
// EXPERIENCE GENERATOR (100 items)
// -----------------------------
export const experiences: Experience[] = Array.from({ length: 100 }, (_, index) => {
    const category = categories[index % categories.length];
    const destination = destinations[index % destinations.length];
    const titlePool = categoryTitles[category.id];

    const basePrice = 79 + ((index * 23) % 320);
    const rating = Math.min(5, Number((3.4 + ((index * 7) % 16) * 0.1).toFixed(1)));

    // Descripciones más naturales
    const descriptionTemplates = [
        `Discover the essence of ${destination.city} through an unforgettable ${category.id.toLowerCase()} experience.`,
        `A unique ${category.id.toLowerCase()} adventure in ${destination.city}, crafted for travelers seeking authenticity.`,
        `Explore ${destination.city} with a ${category.id.toLowerCase()} activity full of local charm and hidden gems.`,
        `Immerse yourself in the culture of ${destination.city} with this curated ${category.id.toLowerCase()} experience.`,
        `A perfect ${category.id.toLowerCase()} escape in ${destination.city}, ideal for curious and adventurous explorers.`,
    ];

    const description = descriptionTemplates[index % descriptionTemplates.length];

    return {
        id: `exp-${String(index + 1).padStart(3, "0")}`,
        title: `${titlePool[index % titlePool.length]} in ${destination.city}`,
        description,
        category: category.id,
        destination: `${destination.city}, ${destination.country}`,
        price: basePrice,
        rating,
        imageUrl: `https://picsum.photos/seed/${destination.city.toLowerCase()}-${index}/1200/800`,
    };
});
