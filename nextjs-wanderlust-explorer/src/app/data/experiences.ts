import type { Experience } from "@/app/types";

const categories: Experience["category"][] = [
	"Adventure",
	"Culture",
	"Food",
	"Wellness",
	"Nature",
];

const destinations = [
	"Bangkok, Thailand",
	"Kyoto, Japan",
	"Lisbon, Portugal",
	"Reykjavik, Iceland",
	"Cusco, Peru",
	"Cape Town, South Africa",
	"Marrakech, Morocco",
	"Vancouver, Canada",
	"Auckland, New Zealand",
	"Seoul, South Korea",
	"Florence, Italy",
	"Bali, Indonesia",
	"Dubrovnik, Croatia",
	"Patagonia, Chile",
	"Nairobi, Kenya",
	"Athens, Greece",
	"Hanoi, Vietnam",
	"Queenstown, New Zealand",
	"Granada, Spain",
	"Salzburg, Austria",
];

const categoryTitles: Record<Experience["category"], string[]> = {
	Adventure: ["Summit Trail", "River Quest", "Canyon Sprint", "Skyline Trek"],
	Culture: ["Heritage Walk", "Temple Stories", "City Echoes", "Old Town Routes"],
	Food: ["Street Bites", "Market Feast", "Chef Journey", "Local Flavors"],
	Wellness: ["Mindful Escape", "Sunrise Retreat", "Balance Session", "Spa Horizon"],
	Nature: ["Forest Drift", "Coastal Silence", "Wild Path", "Lake Sunrise"],
};

export const experiences: Experience[] = Array.from({ length: 100 }, (_, index) => {
	const category = categories[index % categories.length];
	const destination = destinations[index % destinations.length];
	const titlePool = categoryTitles[category];
	const city = destination.split(",")[0];
	const basePrice = 79 + ((index * 23) % 320);
	const rating = Math.min(5, Number((3.4 + ((index * 7) % 16) * 0.1).toFixed(1)));

	return {
		id: `exp-${String(index + 1).padStart(3, "0")}`,
		title: `${titlePool[index % titlePool.length]} in ${city}`,
		description: `A curated ${category.toLowerCase()} experience in ${destination} designed for curious travelers who want authentic local moments.`,
		category,
		destination,
		price: basePrice,
		rating,
		imageUrl: `https://source.unsplash.com/1200x800/?travel,${encodeURIComponent(city.toLowerCase())}&sig=${index + 1}`,
	};
});

export default experiences;
