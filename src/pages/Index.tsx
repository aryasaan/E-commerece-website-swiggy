import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { RestaurantCard } from "@/components/RestaurantCard";
import { CuisineFilter } from "@/components/CuisineFilter";

// Mock data - in a real app, this would come from an API
const RESTAURANTS = [
  {
    id: "1",
    name: "Burger King",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500",
    cuisines: ["American", "Fast Food"],
    rating: 4.2,
    deliveryTime: "30-35 min",
  },
  {
    id: "2",
    name: "Pizza Hut",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    cuisines: ["Italian", "Fast Food"],
    rating: 4.1,
    deliveryTime: "40-45 min",
  },
  {
    id: "3",
    name: "Taj Indian Kitchen",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500",
    cuisines: ["Indian", "Curry"],
    rating: 4.4,
    deliveryTime: "35-40 min",
  },
  {
    id: "4",
    name: "Sushi Master",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500",
    cuisines: ["Japanese", "Sushi"],
    rating: 4.5,
    deliveryTime: "45-50 min",
  },
];

const CUISINES = ["American", "Italian", "Indian", "Japanese", "Fast Food", "Sushi", "Curry"];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);

  const filteredRestaurants = RESTAURANTS.filter((restaurant) => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCuisine = selectedCuisine ? restaurant.cuisines.includes(selectedCuisine) : true;
    return matchesSearch && matchesCuisine;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">Food Delivery</h1>
        
        <div className="mb-8">
          <SearchBar onSearch={setSearchQuery} />
        </div>
        
        <div className="mb-8">
          <CuisineFilter
            cuisines={CUISINES}
            selectedCuisine={selectedCuisine}
            onSelect={setSelectedCuisine}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;